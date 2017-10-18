## Studio 02 - Introduction to R Graphics with ggplot2

This studio will explore the basic plotting functionalities of R. Specifically, it will delve into the functionality of the `ggplot2` package (read more [here](http://ggplot2.tidyverse.org/index.html)) for the purposes of basic data exploration and visualization. The `ggplot2` package is based on [_The Grammar of Graphics_](https://www.amazon.com/Grammar-Graphics-Statistics-Computing/dp/0387245448/), and forms a declarative syntax for graphics creation with sensible aesthetic defaults and deep customizability. Thank you for the inspiration and resources, [ramnathv](http://ramnathv.github.io/swc-nw-dataviz/visualize/base_graphics.html).

### Datasets

We will be using two datasets for this studio:

* bnames2 - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Data/02/bnames2.csv.bz2). This dataset consists of the top 1000 male and female baby names in the U.S., from 1880 to 2008. It contains 258,000 records with five variables: `year`, `name`, `soundex`, `sex`, and `prop`. The `prop` variable refers to the proportions of people of that gender with that name born in that year. The `soundex` variable contains a phonetic code designed to index names based on sound similarity, irrespective of spelling variations.
* births - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Data/02/births.csv). This dataset contains 261 records with three variables: `year`, `sex`, and `births`.

### R
#### Setting up your environment

* Download and install the latest version of [R](https://www.r-project.org/).
* Open R. 
* Your working directory surfaces the file structure within your current session is based. If you would like to change your working directory, either navigate to `Misc > Change Working Directory...`, or use the `setwd()` command. More information on the latter is available [here](https://support.rstudio.com/hc/en-us/articles/200711843-Working-Directories-and-Workspaces). (In my case, I decided to create a folder within my default Mac user folder: `setwd("/Users/emilyfuhrman/R_workspace")`). Make sure your working directory is accessible, as it is where we will be dropping our downloaded data.
* We will be using `ggplot2` to generate visualizations in this studio. In your R console, type the following:

```
> install.packages("ggplot2")
```

Packages in R are bundled collections of functions that make it easy to extend the functionality of R on your machine. Packages are primarily distributed through CRAN (the Comprehensive R Archive Network). If prompted to set a download mirror at this point, choose the one closest to you. 

* Once the package is finished installing, we need to load the package for our current session. Type the following:

```
> library(ggplot2)
```

You may only load `ggplot2` if its package is already installed on your machine.

#### Loading a delimited text data file

* Download the data above.
* Drag the (zipped) file to your working directory. There is no need to unzip it.
* R provides a number of different options for importing external data. Here, because our data is already in a simple-to-digest format, we will use one of the most common: `read.csv`. We will import the dataset we just downloaded, and store it under the variable name `bnames2`. To do this, type the following in your console:

```
> bnames2 <- read.csv("bnames2.csv.bz2")
```

* To test that this imported properly, type `bnames2` in your console, and hit `Enter`. A preview of the imported data should appear.

![Data preview](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/01_Data_Preview.png)

* Scroll to the top, and confirm that the column order is as follows: `year`, `name`, `prop`, `sex`, and `soundex`. 
* To shortcut this process in the future, you can type `head(bnames2)` to get a truncated preview of the imported data.

#### Exploring and summarizing with ggplot2

* Let's start by tracking the popularity of a single name over the period of time represented by the dataset. I will track the name "Otto". To do this, we need to cut the portion of the dataset in which the `name` variable is equal to `Otto`, and assign it to a new variable:

```
> otto_records <- subset(bnames2, name == "Otto")
```

Here, we use the `subset()` function to select all records for which the `name` variable is equal to `Otto`. The `subset()` function takes as a first argument the name of the dataset to search, and as a second argument the condition under which a record is kept. 
* Since it is easier to explore this data visually, let's start by leveraging `ggplot2` to give us a quick visual overview of the popularity of the name `Otto` over time. We will be using the `qplot` (or _quickplot_) function, and will ask it to draw us a `line` plot of `year` vs. `prop`. Both `year` and `prop` are to be looked up in the dataset we created above, `otto_records`.

```
> qplot(x = year, y = prop, data = otto_records, geom = 'line')
```

![Otto Plot](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/02_Otto_Plot.png)

A new plot opens up in a separate window. Right away, we can see that the name Otto peaked sometime in the 1890's, and has been on a steady decline in popularity since.

* Let's try another name: this time, "Michelle". Follow the same procedure as before, only create a dataset for which the `name` variable is equal to `Michelle`. Plot that dataset:

```
> michelle_records <- subset(bnames2, name == "Michelle")
> qplot(x = year, y = prop, data = michelle_records, geom = 'line')
```

![Michelle Plot](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/03_Michelle_Plot.png)

This plot includes an extremely jagged line. Any guesses as to why? 
* To circumvent this jagged line for now, let's plot this data using points instead of a line:

```
> qplot(x = year, y = prop, data = michelle_records, geom = 'point')
```

![Michelle Plot Points](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/04_Michelle_Plot_Points.png)

Interesting! And more readable. This plot makes it clear that there are two clusters of data. The reason for this is that the name Michelle has been used in the past for both boys and girls. This accounts for the jagged sawtooth pattern on the original plot. Now, if we want to create a line plot, we need to tell `qplot` to group the variables by sex.

```
> qplot(x = year, y = prop, data = michelle_records, geom = 'line', group = sex)
```

![Michelle Plot Grouped](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/05_Michelle_Plot_Grouped.png)

* Nice. If we add one more argument to the `qplot` function, we can color the lines by sex to make it clearer which is which:

```
> qplot(x = year, y = prop, data = michelle_records, geom = 'line', group = sex, color = sex)
```

![Michelle Plot Colored](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/06_Michelle_Plot_Colored.png)

* We can now clearly see that Michelle as a female name peaked around 1970, around the same period it surfaced as a male name.
* Now, let's try to use the `soundex` variable to plot the popularity over time of names that sound like Otto. Let's first access our subset, `otto_records`, to write the value of the `soundex` variable in the first record to a new variable, `otto_soundex`:

```
> otto_soundex <- otto_records$soundex[1]
```

* Next, let's create a new dataset of names that share the same `soundex` value (i.e. names that sound similar to Otto):

```
> otto_like <- subset (bnames2, soundex == otto_soundex)
```

* Finally, plot the new dataset using `point` geometry:

```
> qplot(x = year, y = prop, data = otto_like, geom = 'point')
```

![Like Otto Plot](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/07_Like_Otto_Plot.png)

And we can see a pattern similar to the one we saw to our original "Otto" line plot.
* Now, run through the same process on a different name, and see if you can uncover any interesting patterns.

#### A note on R base graphics

When working with simple charts like the ones above, it can be suitable to use the native plotting functions in base R. These functions do not require the installation of an additional package. When looking to create anything other than a simple plot, however, move on to `ggplot2`. The package surfaces extensive aesthetic control over your graphics, and provides more options for customization. 

As an example, the syntax below (which takes into account the subsets we created above), which is written in base R, produces a simple scatterplot about equivalent to the `qplot` we created for Otto:

```
> plot(otto_records$year,otto_records$prop)
```

![Otto Base](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/08_Otto_Base.png)

#### Births

Now, suppose we would like to explore trends in the total number of people with specific names across all of the years. The `bnames2` dataset only contains proportions. To be able to explore this question further, we need total number of births by year. Enter the `births` dataset. After some initial exploration, we will combine this dataset with our `bnames2` dataset to give our analysis more granularity.

* Download the `births` dataset above.
* Add it to your working directory.
* Read the dataset in using `read.csv()`, and assign it to the variable `births_data`.

```
> births_data <- read.csv("births.csv")
```

* To get a picture of what this dataset looks like, let's plot the trends in total number of `births` across `sex` by `year`.

```
> qplot(x = year, y = births, color = sex, data = births_data, geom = 'line')
```

![Plot Births](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/09_Plot_Births.png)

Note that by specifying `color = sex`, we do not need to additionally specify `group = sex`. If we only specify `group = sex`, the two groups are not colored. If we specify neither, we get a jagged line as in our original exploration of "Michelle" in `bnames2`.

#### Data manipulation

Finally, we can combine these two datasets into a single, richer dataset, which opens up new analyses. Base R has a `merge` function that can achieve this. (Read more about the `merge` function and its parameters [here](https://www.rdocumentation.org/packages/base/versions/3.4.1/topics/merge).) However, we can also use the `plyr` package to `join` the datasets.

* Install and load the `plyr` package:

```
> install.packages("plyr")
> library(plyr)
```

* For our purposes, the following command is enough to join the `bnames2` dataset with the `births_data` dataset, by way of the matching `year` column:

```
> bnames2_b <- join(bnames2, births_data, by = c("sex", "year"))
```

* Now, test that the join was properly carried out by entering `head(bnames2_b)`:

```
> head(bnames2_b)
  year    name     prop sex soundex births
1 1880    John 0.081541 boy    J500 118405
2 1880 William 0.080511 boy    W450 118405
3 1880   James 0.050057 boy    J520 118405
4 1880 Charles 0.045167 boy    C642 118405
5 1880  George 0.043292 boy    G620 118405
6 1880   Frank 0.027380 boy    F652 118405
```

Looks good. Note the addition of the `births` column on the far right. You can read up on `join` documentation by typing `?join` into the console. Let's continue on with the exploration we started.

* To delve more deeply into the popularity of the name Otto over time, let's compute an absolute count of the instances of `Otto` using the `prop` variable and the newly-joined `births` value. Since the `prop` variable represents the proportion of people of a given gender with a given name for a given year, multiplying `prop` by `births` for that year gives us an absolute number representative of the number of people with that name. We will use the `mutate` function to create a new variable and plot it. As before, we start by subsetting out instances of `Otto`. Make sure to specify our new dataset:

```
> otto_records <- subset(bnames2_b, name == "Otto")
```

* Use the `mutate` function to create a new `tot` column, containing the value of `prop * births` (our absolute count):

```
> otto_records <- mutate(otto_records, tot = prop * births)
```

* Double check that this worked as expected:

```
> head(otto_records)
     year name     prop sex soundex births      tot
63   1880 Otto 0.002289 boy    O300 118405 271.0290
1069 1881 Otto 0.002041 boy    O300 108290 221.0199
2069 1882 Otto 0.002065 boy    O300 122034 252.0002
3066 1883 Otto 0.002134 boy    O300 112487 240.0473
4065 1884 Otto 0.002346 boy    O300 122745 287.9598
5069 1885 Otto 0.002268 boy    O300 115948 262.9701
```

* And it did. Now, let's plot the popularity of `Otto` as a line once again, though using `tot` on our y-axis instead of `prop`:

```
> qplot(year, tot, data = otto_records, geom = 'line')
```

![Otto Absolute](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/15_Otto_Absolute.png)

Okay! This paints a different picture. Otto is still declining in absolute terms, but we can see a small peak around ~1915.

#### Basic chart types

The `ggplot2` package contains a range of different graphs. We explore a few of them below. See [this gallery](http://www.r-graph-gallery.com/portfolio/ggplot2-package/) for more detail.

##### Histogram

A histogram provides a snapshot of the distribution of values for a given variable in a dataset. Remember, a histogram differs from a bar chart: it plots the distribution of records across a continuous variable, not a discrete variable. To test out this functionality, let's generate a histogram from the `bnames2` dataset that visualizes the distribution of the `prop` value.

* Instead of `qplot`, this time we will call `ggplot`. 
	* The first argument in the `ggplot` function specifies the dataset we are using. We specify `bnames2`.
	* The second argument in the `ggplot` function, `aes()`, contains aesthetic guidelines for the output chart. We specify the variable we would like to use along the x-axis: `prop`.
	* `geom_histogram()` is a function native to `ggplot`, which automatically generates a histogram from the provided data.

```
> ggplot(bnames2, aes(x=prop)) + geom_histogram()
```

![ggplot Histogram](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/10_ggplot_Histogram.png)

* R sends us the following message: 

```
> `stat_bin()` using `bins = 30`. Pick better value with `binwidth`.
```

To act on this, let's specify our bins to be of width `0.0005`.

```
> ggplot(bnames2, aes(x=prop)) + geom_histogram(binwidth = 0.0005)
```

![ggplot Histogram Bins](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/11_ggplot_Histogram_Bins.png)

Not the most interesting distribution, but the smaller bins add more granularity.
* We can use the `geom_histogram()` function to specify additional guidelines for the output chart. We can try a uniform color for all of the bars:

```
> ggplot(bnames2, aes(x=prop)) + geom_histogram(binwidth = 0.0005, fill = "red")
```

![ggplot Histogram Red](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/12_ggplot_Histogram_Red.png)

* We can also try coloring the bars based on the values they represent, using an `aes()` function internal to `geom_histogram()`:

```
ggplot(bnames2, aes(x=prop)) + geom_histogram(binwidth = 0.0005, aes(fill = ..count..))
```

![ggplot Histogram Proportional](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/13_ggplot_Histogram_Proportional.png)

##### Bar chart

Generating a bar chart is similar to generating a histogram. In this case, we use the native `geom_bar()` function, and specify a single discrete variable. 

* Let's return to our previous exploration of the name Michelle. To plot the instances of each similar name, we first capture the `soundex` value of `Michelle` from our newly-joined `bnames2_b` dataset. Note how this time, we can chain our commands to both filter the dataset and capture the first `soundex` value in the returned records.

```
> michelle_soundex <- subset(bnames2_b, name == "Michelle")$soundex[1]
```

* We now filter the dataset for soundex values equivalent to `michelle_soundex`:

```
> like_michelle <- subset(bnames2_b, soundex == michelle_soundex)
```

* Check it, to make sure the operation produced expected results:

```
> head(like_michelle)
     year    name     prop sex soundex births
46   1880 Michael 0.002990 boy    M240 118405
390  1880 Micheal 0.000169 boy    M240 118405
551  1880  Miguel 0.000101 boy    M240 118405
668  1880 Maxwell 0.000076 boy    M240 118405
878  1880  Michel 0.000051 boy    M240 118405
1054 1881 Michael 0.002761 boy    M240 108290
```

* Now, we create a bar plot with `name` along the x-axis.
	* The first argument in `ggplot()` specifies our dataset. In this case, `like_michelle`.
	* The second argument is our `aes()` function, containing aesthetic guidelines for the chart as a whole. Here, we tell it to treat the `name` variable as a factor (or a categorical, not continuous, variable).

```
> ggplot(like_michelle, aes(x=as.factor(name))) + geom_bar()
```

![ggplot Like Michelle Bar](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/16_ggplot_Like_Michelle_Bar.png)

If nothing shows up in your generated chart, expand the window so the bars have enough room to render.

##### Stacked bar chart

* The simplest way to turn our previous bar chart into a stacked bar chart is to specify a `fill` condition in the `aes()` function. Let's color the bars by `sex`.

```
> ggplot(like_michelle, aes(x=as.factor(name), fill = sex)) + geom_bar()
```

![ggplot Michelle Stacked](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/17_ggplot_Michelle_Stacked.png)

* Finally, let's rotate the labels so we can read what the similar names actually are. Adjusting the `theme` component here allows us to edit native style settings for the chart.

```
> ggplot(like_michelle, aes(x=as.factor(name), fill = sex)) + geom_bar() + theme(axis.text.x = element_text(angle = 90, hjust = 1))
```

![ggplot Rotate Labels](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/18_ggplot_Rotate_Labels.png)

##### Stacked area chart

In our case, working with yearly data in the `bnames2` and `births_data` datasets lends itself to both categorical and continuous visualization methods, due to the discrete (but linear, and reasonably granular) nature of time. We now explore the stacked area chart native to the library, which provides a breakdown of component categories over time, and return to the `births_data` dataset.

* We define a new `ggplot`.
	* The first argument is, as usual, our dataset: `births_data`.
	* The second argument is the `aes()` function. In it, we define `year` to be along the x-axis, `births` to be along the y-axis, and `fill` to be determined by `sex`.
	* The last element is `geom_area()`, the area chart function.

```
> ggplot(births_data, aes(x=year, y=births, fill=sex)) + geom_area()
```

![ggplot Sex Over Time](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/19_ggplot_Sex_Over_Time.png)

* Nice. We see births as a total value, comprised of both specified genders.

#### Saving

The easiest way to quickly save a chart to either a PDF or a PNG is to use `ggsave()`.

* Render a chart using `ggplot()`
* Enter the following, supplying your own custom name and extension (`.pdf` or `.png`):

```
ggsave("my_chart.pdf")
```

* The chart will appear saved in your working directory. See [this](http://ggplot2.tidyverse.org/reference/ggsave.html) reference for more detail regarding sensible aesthetic defaults.

### Participation

* Generate two different visualizations from the original datasets exploring a name we did not mention in class.
