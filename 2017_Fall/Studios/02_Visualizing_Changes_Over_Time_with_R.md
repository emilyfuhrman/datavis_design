## Studio 02 - Visualizing Changes Over Time with R

This studio will explore the basic plotting functionalities of R. Specifically, it will delve into the functionality of the `ggplot2` package, for basic data exploration and visualization. 

### Datasets

We will be using one dataset for this studio:

* bnames2 - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Data/02/bnames2.csv.bz2). This dataset consists of the top 1000 male and female baby names in the U.S., from 1880 to 2008. It contains 258,000 records with five variables: `year`, `name`, `soundex`, `sex`, and `prop`. The `prop` variable refers to the proportions of people of that gender with that name born in that year. The `soundex` variable contains a phonetic code designed to index names based on sound similarity, irrespective of spelling variations.

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

#### Exploring and summarizing

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



























