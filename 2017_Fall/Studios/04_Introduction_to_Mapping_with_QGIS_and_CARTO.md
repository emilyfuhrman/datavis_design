## Studio 01 - Introduction to Mapping with QGIS and CARTO

This studio will cover the process of preparing geographic data in [QGIS](http://www.qgis.org/en/site/) for visualization in CARTO. QGIS is a free and open source geographic information system, and is a versatile tool for analyzing, manipulating, and exporting GIS data. CARTO is a powerful, easy to use, web-based mapping platform.

### Technology

We will be focusing on two parts of the mapping process today: data manipulation and data presentation. We will therefore work with two different tools, one for each step. QGIS will enable us to directly manipulate raw geospatial data, while CARTO will then enable us to present the data in a shareable interactive map. 

* If you have not already done so, go ahead and [download QGIS](http://www.qgis.org/en/site/). 
* You will also need a [CARTO](https://carto.com/) account.  

### Datasets

We will be accessing two different sources of Census data for this studio. We will access these via the [TIGER](https://www.census.gov/cgi-bin/geo/shapefiles/index.php) repository. The first is a dataset outlining New York State county boundaries, and the second is a dataset containing unweighted population counts for each county.

* NYC County Subdivisions - Originally downloaded from [here](https://www.census.gov/cgi-bin/geo/shapefiles/index.php?year=2017&layergroup=County+Subdivisions)
* NYC County Subdivision Demographic and Economic Data - Originally downloaded from [here](https://www.census.gov/geo/maps-data/data/tiger-data.html) (metadata [here](https://www2.census.gov/geo/tiger/TIGER_DP/2015ACS/Metadata/COUSUB_METADATA_2015.txt))

### Gathering and preparing data
#### Downloading TIGER Shapefiles

* First, we will download the geographic boundaries for the regions we are mapping. Navigate to the [TIGER Shapefiles repository](https://www.census.gov/cgi-bin/geo/shapefiles/index.php). The default landing state should have `2017` selected, along with `American Indian Area Geography` for the `Select layer type` option.

![TIGER Landing](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/01_TIGER_Landing.png)

* In the `Select layer type` menu, select `County Subdivisions`.

![TIGER Selected](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/02_TIGER_Selected.png)

* Hit `Submit`.
* In the resultant page, `Alabama` should be selected as the default options. Instead, open the menu and select `New York`. 

![TIGER State Select](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/03_TIGER_State_Select.png)

* Hit `Download`.
* Unzip the downloaded file, which should be entitled `tl_2017_36_cousub.zip`.

#### Downloading TIGER demographic data

* Next, we will download additional demographic data associated with the regions we are mapping. Navigate to the 

### Working with data in QGIS

#### Quick Tour: Zooming, Filtering, and Selection

#### Importing TIGER Shapefiles

* Import
* Select
* ALAND vs. AWATER
* Trim
* Save as new

#### Importing TIGER demographic data

#### Creating new variables

#### Joining TIGER demographic data to TIGER Shapefiles

#### Creating a population density variable

#### Styling: Creating a choropleth map within QGIS

* Choropleth options:
	* Number of data classes
	* Mode:
		* Equal Interval
		* Quantile (Equal Count)
		* Natural breaks (Jenks)
		* Standard Deviation
		* Pretty Breaks

#### Exporting new Shapefile

### Visualizing data in CARTO

#### Importing new Shapefile

#### Styling: Creating a choropleth map within CARTO

* Choropleth options:
	* Number of buckets
	* Mode:
		* Quantiles
		* Jenks
		* Equal Interval
		* Heads/Tails
		* Category
















