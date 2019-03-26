## Studio 06 - Creating a Choropleth Map in Tableau

This studio will walk through the process of creating a choropleth map in [Tableau Public](https://public.tableau.com/s/). Choropleth maps are best for showing ratio or aggregated data for polygons. These polygons can be counties, regions, states, or any area or region that can be geocoded in Tableau or any other geospatial software like [QGIS](https://www.qgis.org/en/site/), [CartoDB](https://carto.com/students-access/), or [Mapbox](https://www.mapbox.com/). 

In this studio, we will do a comparative analysis of the teenage U.S. population living in poverty from the 1999 and 2016 American Community Surveys.

### Datasets

We will be using one dataset for this studio:

ACS Teenage Poverty 1999/2016 - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Data/06/ACS_Teenage_Poverty_US_2016_1999.xls). (This dataset comes from the U.S. Census Bureau State/County Poverty Universe Data.)


### Importing data

* Open Tableau and connect your data set `ACS_Teenage_Poverty_US_2016_1999` using the Microsoft Excel option:
* You will see that the data columns were interpreted correctly in all columns except one. `Name` was interpreted as a string and not the County Names:

![Landing](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/06/01_Import.png)

* Rename the name `Name` category as `County Name`, select the data type, click on `Geographic Role` and select `County`.
* Now, open up your Sheet 1.
* You will see in the measure panel that Tableau has automatically generated a `Longitude` and a `Latitude`.
* Place the `Longitude` under `Columns` and the `Latitude` under rows.
* Under `Filters` place the `State Postal Code` Hawaii (HI).
* Take the `1999 Poverty Percentage, Age 5-17` and drop it on the `Color` Mark
* Take the `State Postal Code` dimension and drop it on `Detail`.
* Take the `Country Name` dimension and drop it on `Detail`. 