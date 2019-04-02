## Studio 07 - Building Wind Vector Maps in R

**_Based on a studio originally created by Ryan Lakritz_**

This studio walks through the steps to create wind vector maps in R, using `ggplot2` and `plotly`. ggplot2 is a data visualization package based on Leland Wilkinson's _The Grammar of Graphics_, which describes a way of understanding the components of data-driven representations. Plotly is a library that enables the publication of interactive, web-based graphics. Install the latest version of R [here](https://mirror.aarnet.edu.au/pub/CRAN/).

### Installing libraries

First, be sure to install any necessary libraries if you don’t already have them `install.packages('package_name')`. `dplyr` will be used for data manipulation while `ggplot2` and `plotly` will both be used for visualization. To install packages, type the following commands into your R console:

```
install.packages('dplyr')
install.packages('ggplot2')
install.packages('plotly')
install.packages('maps')
```

To load these libraries after they are installed, type the following:

```
library(dplyr)
library(ggplot2)
library(plotly)
library(maps)
```

### Downloading data

Download data from [http://coastwatch.pfeg.noaa.gov/erddap/tabledap/ndbcSosWind.html](http://coastwatch.pfeg.noaa.gov/erddap/tabledap/ndbcSosWind.html) (you may also access it [here](https://github.com/emilyfuhrman/datavis_design/tree/master/2019_Spring/Data/07)). For this we will need at least `longitude`, `latitude`, `station_id`, `time`, `wind_from_direction`, and `wind_speed`. 

![Download Fields](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/07/01_Download_Fields.png)

The website limits to one month of data and generally times out with >1-2 weeks of data so it’s best to stick to the presets. 

![CSV Format](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/07/02_CSV_Format.png)

Select `.csv` for your file type and click submit.

It may take a minute to download your dataset, but once completed move that file to your desired working directory. There is one quick edit to the dataset needed before reading it in. The second line of data contains the field’s units, so we want to quickly open up the .csv and delete that line of data. Open up the CSV in Excel, and select the second row.

![Delete Row](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/07/03_Delete_Row.png)

Delete this row, and save the file under a new name.

Finally, back in the R console, we’re going to read in two data frames: the .csv downloaded from the NOAA and a map of the US, which is built into ggplot.

```
setwd('~/Downloads/')

# read in dataset
df <- read.csv('ndbcSosWind_b853_380a_406b.csv')
# set up usa map df
usa <- map_data('state')
```

Using `dplyr`, we’re going to transform the data into the required format for visualization. `dplyr` is a great library for most of the data manipulation you’ll need in most scenarios. Its syntax is a bit odd at first, but quickly becomes intuitive with great online documentation.

The goal here is to aggregate the current data with the average wind speed and direction at each station. In dplyr, the `%>%` function allows you to chain together functions, always referring to the original dataset.

The first step in aggregation is to specify what you want the aggregation to be grouped by: in this case, it’s the station_id, longitude, and latitude.

```
df_mean <- df %>% group_by(station_id, longitude, latitude)
```

Now, using `%>%`, we’re going to chain together a few more functions. You can just start adding any new lines to your original code.

`summarize()` will aggregate the desired fields with the function you provide (in this case `mean()`). We want to include `na.rm=T` here so that it takes the mean of only non-na data.

`mutate()` will add fields based on functions that you provide. Here we’re calculating the horizontal and vertical wind components that make up the wind vector. u_wnd is the horizontal component of the wind vector.

```
df_mean <- df %>% 
  group_by(station_id, longitude, latitude) %>% 
  summarize(speed_mean = mean(wind_speed, na.rm=T),
            direction_mean = mean(wind_from_direction, na.rm=T)) %>% 
  mutate(u_wnd = speed_mean*cos(pi*direction_mean/180),
          v_wnd = speed_mean*sin(pi*direction_mean/180))
```

Here’s what the output df looks like:

```
head(df_mean)
## # A tibble: 6 x 7
## # Groups:   station_id, longitude [6]
##                   station_id longitude latitude speed_mean direction_mean
##                       <fctr>     <dbl>    <dbl>      <dbl>          <dbl>
## 1 urn:ioos:station:wmo:32st0   -85.074  -19.430   6.970060       124.6108
## 2 urn:ioos:station:wmo:34002   -90.000  -55.000  10.919568       103.0381
## 3 urn:ioos:station:wmo:41002   -74.840   31.760   6.815476       177.6786
## 4 urn:ioos:station:wmo:41004   -79.099   32.501   7.505429       142.4186
## 5 urn:ioos:station:wmo:41008   -80.868   31.400   6.349693       137.4233
## 6 urn:ioos:station:wmo:41009   -80.184   28.501   5.607108       215.7270
## # ... with 2 more variables: u_wnd <dbl>, v_wnd <dbl>
```

Next, we’re going to subset the aggregated dataframe to only show the continentatl US. `filter()`, part of dplyr, will let us subset based on the supplied long/lat constraints.

```
df_usa <- df_mean %>% 
  filter(latitude <= max(usa$lat) &
          latitude >= min(usa$lat) &
          longitude <= max(usa$lon) &
          longitude >= min(usa$lon))
```

Now, setting up the map of the US with ggplot. The dataframe called is the usa dataframe that we created earlier. A couple arguments that we add are `fill`, `color`, `coord_fixed()`, and `theme_bw()`. Fill changes the state’s colors, color changes the map outline color, coord_fixed() is used to make sure that the aspect ratio of the map remains consistent if the size of the map is changed, and theme_bw() gives a nice minimal theme that works well with this graphic.

```
#Set up Map of USA
usa_plot <- ggplot() + 
  geom_polygon(data = usa, aes(x=long, y=lat, group=group), fill = NA, color = "grey60") + 
  coord_fixed(1.3) +
  theme_bw()

usa_plot
```

![USA Map](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/07/04_USA_Map.png)

Once the map is set up, we’re going to add the wind speed data as a scalar quantity onto the map. We’re simply going to add a point at each station with the color representing the average wind speed at that location. The color represents the scalar quantity of wind speed as it contains no directional data.

```
# Scalar Plot
usa_plot +
  geom_point(data = df_usa, aes(x=longitude, y=latitude, color=speed_mean)) +
  scale_color_gradient(low="light blue", high="dark blue")
```

![Scalar Map](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/07/05_Scalar_Map.png)

Onto vectors, we’re going plot the wind vectors. We will represent the wind vectors with arrows to denote their direction, with the length of the arrow proportional to its magnitude.

```
# vector plot
usa_plot +
  geom_segment(data = df_usa, aes(x=longitude, y=latitude, xend=longitude+u_wnd/10, yend=latitude+v_wnd/10),
               arrow = arrow(length = unit(0.1, 'cm')), size=0.3)

## Warning: Removed 5 rows containing missing values (geom_segment).
```

![Vector Map](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/07/06_Vector_Map.png)

If you do not see anything but a coordinate plane initially, make sure that your Quartz window (or other display window) is large enough to accommodate the map.

In order to see a bit more detail on the scalar and vector quantities in these maps, we’re going to zoom in on one region. For this example, we’re going to look at the great lakes area. First, we’re going to create a subset map of the original US map. Next we’re going to subset the mean wind speed data frame and plot the different scalar and vector quantities.

```
# lakes Map Setup
lakes <- subset(usa, region %in% c("ohio", "indiana", "michigan", "illinois", "wisconsin", "minnesota"))

df_lakes <- df_mean %>% 
  filter(latitude <= max(lakes$lat) &
         latitude >= min(lakes$lat) &
         longitude <= max(lakes$lon) &
         longitude >= min(lakes$lon))

# lakes map setup
lakes_plot <- ggplot() +
  geom_polygon(data=lakes, aes(x=long, y=lat, group=group), fill=NA, color='grey60')+
  coord_fixed(1.3) +
  theme_bw()

lakes_plot
```

![Lakes Outline](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/07/07_Lakes_Outline.png)

```
# lakes scalar plot
lakes_plot_scalar <- lakes_plot +
  geom_point(data=df_lakes, aes(x=longitude, y=latitude, color=speed_mean)) +
  scale_color_gradient(low="light blue", high="dark blue")
```

![Lakes Scalar](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/07/08_Lakes_Scalar.png)

```
# lakes vector plot
lakes_plot_vector <- lakes_plot +
  geom_segment(data = df_lakes, aes(x=longitude, y=latitude, xend=longitude+u_wnd/10, yend=latitude+v_wnd/10),
               arrow = arrow(length = unit(0.1, 'cm')), size=0.3)
```

![Lakes Vector](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/07/09_Lakes_Vector.png)

Last bonus step: Simple R animation with `ggplot` and `plotly`.

Instead of looking at the average wind speed and velocity over the entire time period, let’s look at how this changes over time. Using plotly, we’re going to animate the daily average wind velocity.

We’re going to use the plotly package in conjunction with ggplot, so it will work almost identically to the previous code with only 1-2 additions.

A couple quick things to set up in the data: 1. We now want to group by the date as well so we need to extract that value from the `time` field. 2. Again, creating a daily aggregated data frame using almost the same code as above. 3. Plotly has limitations when working with missing data, so we’re going to filter the data frame so that only stations with complete data (here we have 8 days of data).

```
df$date <- as.Date(df$time, format='%Y-%m-%d')

df_daily <- df %>% 
  group_by(station_id, longitude, latitude, date) %>% 
  summarize(speed_mean = mean(wind_speed, na.rm=T),
            direction_mean = mean(wind_from_direction, na.rm=T)) %>% 
  mutate(u_wnd = speed_mean*cos(pi*direction_mean/180),
         v_wnd = speed_mean*sin(pi*direction_mean/180)) %>% 
  filter(latitude <= max(lakes$lat) &
           latitude >= min(lakes$lat) &
           longitude <= max(lakes$lon) &
           longitude >= min(lakes$lon))

df_lakes_animate <- df_daily %>%
  filter(n() == 8)

head(df_lakes_animate)
## # A tibble: 6 x 8
## # Groups:   station_id, longitude, latitude [1]
##                   station_id longitude latitude       date speed_mean
##                       <fctr>     <dbl>    <dbl>     <date>      <dbl>
## 1 urn:ioos:station:wmo:45002   -86.411   45.344 2017-11-21  13.000000
## 2 urn:ioos:station:wmo:45002   -86.411   45.344 2017-11-22   7.416667
## 3 urn:ioos:station:wmo:45002   -86.411   45.344 2017-11-23   7.916667
## 4 urn:ioos:station:wmo:45002   -86.411   45.344 2017-11-24  12.391304
## 5 urn:ioos:station:wmo:45002   -86.411   45.344 2017-11-25   9.739130
## 6 urn:ioos:station:wmo:45002   -86.411   45.344 2017-11-26   8.625000
## # ... with 3 more variables: direction_mean <dbl>, u_wnd <dbl>,
## #   v_wnd <dbl>
```

Finally, setting up the visualization code will be almost identical to the original ggplot vector plot. The only additional argument will be the `frame=` argument. This will identify what field we want to animate over.

Unfortunately plotly does not handle dates that well, so as a workaround we will convert the dates to a numeric class. To do that we first convert it to a timestamp and then to a numeric. A second caveat with plotly is that the arrows unfortunately do not work, so this will appear as a spoke graph.

The result will be a plot that looks almost identical to the original, but can shift between days and animate the full data frame with `Play`.

```
animated_vectors<- lakes_plot+
  geom_segment(data = df_lakes_animate, aes(x=longitude, y=latitude, xend=longitude+u_wnd/10,
                                            yend=latitude+v_wnd/10, frame=as.numeric(as.POSIXct(date))),
               arrow = arrow(length = unit(0.1, 'cm')), size=0.3)

## Warning: Ignoring unknown aesthetics: frame
ggplotly(animated_vectors)
```
