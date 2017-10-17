## Studio 02 - Introduction to R Graphics with ggplot2

This studio will explore the basic plotting functionalities of R. Specifically, it will delve into the functionality of the `ggplot2` package, for basic data exploration and visualization. Thank you for the inspiration and resources, [ramnathv](http://ramnathv.github.io/swc-nw-dataviz/visualize/base_graphics.html).

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

* Once the package is finished installing, we need to load the library for our current session. Type the following:

```
> library(ggplot2)
```

You may only load a library if its package is already installed on your machine.

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
> otto_soundex = otto_records$soundex[1]
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

#### Other chart types
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
`stat_bin()` using `bins = 30`. Pick better value with `binwidth`.
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

![ggplot Histogram Proportional](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/02/13_ggplot_Histogram_Proportional.png)



















