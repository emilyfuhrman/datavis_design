## Studio 02 - Visualizing Changes Over Time with R

This studio will explore the basic plotting functionalities of R. Specifically, it will delve into the functionality of the `ggplot2` package, for basic data exploration and visualization. 

### Datasets

We will be using one dataset for this studio:

* bnames2 - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Data/02/bnames2.csv.bz2). This dataset consists of the top 1000 male and female baby names in the U.S., from 1880 to 2008. It consists of 258,000 records with five variables: `year`, `name`, `soundex`, `sex`, and `prop`.

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























