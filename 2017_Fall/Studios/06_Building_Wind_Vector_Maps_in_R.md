## Studio 06 - Building Wind Vector Maps in R

**_By Ryan Lakritz_**

This studio walks through the steps to create wind vector maps in R, using `ggplot2` and `plotly`.

### Installing libraries

First, be sure to install any necessary libraries if you don’t already have them `install.packages('package_name')`. `dplyr` will be used for data manipulation while `ggplot2` and `plotly` will both be used for visualization.

```
library(dplyr)
library(ggplot2)
library(plotly)
```

### Downloading data

Download data from [http://coastwatch.pfeg.noaa.gov/erddap/tabledap/ndbcSosWind.html](http://coastwatch.pfeg.noaa.gov/erddap/tabledap/ndbcSosWind.html). For this we will need at least Longitude, Latitude, station_id, time, wind_from_direction, and wind_speed. The website limits to one month of data and generally times out with >1-2 weeks of data so it’s best to stick to the presets. Finally, select ‘.csv’ for your file type and click submit.

It may take a minute to download your dataset, but once completed move that file to your desired working directory. There is one quick edit to the dataset needed before reading it in. The second line of data contains the field’s units, so we want to quickly open up the .csv and delete that line of data.

Finally, we’re going to read in two data frames: the .csv downloaded from the NOAA and a map of the US, which is built into ggplot.

```
setwd('~/Downloads/')

# read in dataset
df <- read.csv('ndbcSosWind_8b2b_62b6_e77a.csv')
# set up usa map df
usa <- map_data('state')
```

Using `dplyr`, we’re going to transform the data into the required format for visualization. `dplyr` is a great library for most of the data manipulation you’ll need in most scenarios. Its syntax is a bit odd at first, but quickly becomes intuitive with great online documentation.

The goal here is to aggregate the current data with the average wind speed and direction at each station. In dplyr, the `%>%` function allows you to chain together functions, always referring to the original dataset.

The first step in aggregation is to specify what you want the aggregation to be grouped by: in this case, it’s the station_id, longitude, and latitude.

```
df_mean <- df %>% 
  group_by(station_id, longitude, latitude)
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

![USA Map](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/06/01_USA_Map.png)

