## Studio 02 - Visualizing Changes Over Time

This studio will --.

### Datasets

We will be using one dataset for this studio:

* 311 Service Requests - Originally downloaded from [here](https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9/data)

### R
#### Setting up your environment

* Download and install R.
* Open R. 
* We will be using `ggplot2` to create our visualizations in this studio. In the console, type the following:

```
> install.packages("ggplot2")
```

Packages in R are bundled collections of functions that make it easy to extend the functionality of R on your machine. Packages are primarily distributed through CRAN (the Comprehensive R Archive Network). If prompted to set a download mirror at this point, choose the one closest to you. 

* Once the package is finished installing, we need to load the library for our current session. Type the following:

```
> library(ggplot2)
```

You may only load a library if its package is already installed on your machine.