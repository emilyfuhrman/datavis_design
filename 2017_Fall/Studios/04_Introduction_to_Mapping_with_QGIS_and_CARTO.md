## Studio 01 - Introduction to Mapping with QGIS and CARTO

This studio will cover the process of preparing geographic data in [QGIS](http://www.qgis.org/en/site/) for visualization in CARTO. QGIS is a free and open source geographic information system, and is a versatile tool for analyzing, manipulating, and exporting GIS data. CARTO is a powerful, easy to use, web-based mapping platform.

### Technology

We will be focusing on two parts of the mapping process today: data manipulation and data presentation. We will therefore work with two different tools, one for each step. QGIS will enable us to directly manipulate raw geospatial data, while CARTO will then enable us to present the data in a shareable interactive map. 

* If you have not already done so, go ahead and [download QGIS](http://www.qgis.org/en/site/). 
* You will also need a [CARTO](https://carto.com/) account.  

### Datasets

We will be accessing two different sources of Census data for this studio. We will access these via the [TIGER](https://www.census.gov/cgi-bin/geo/shapefiles/index.php) repository. The first is a dataset outlining New York State county boundaries, and the second is a dataset containing unweighted population counts for each county.

* NYC County Subdivisions (`tl_2017_36_cousub.zip`) - Originally downloaded from [here](https://www.census.gov/cgi-bin/geo/shapefiles/index.php?year=2017&layergroup=County+Subdivisions)
* NYC County Subdivision Demographic and Economic Data (`ACS_2015_5YR_COUSUB_36.gdb.zip`) - Originally downloaded from [here](https://www.census.gov/geo/maps-data/data/tiger-data.html) (metadata [here](https://www2.census.gov/geo/tiger/TIGER_DP/2015ACS/Metadata/COUSUB_METADATA_2015.txt))

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
* Inside the folder, you should see a series of different files. Each one has the name filename, but a different extension ([source](http://webhelp.esri.com/arcgisdesktop/9.3/index.cfm?topicname=Shapefile_file_extensions)):
	* `.cpg` - (Optional) A file that can be used to specify the code page for identifying the character set to be used.
	* `.dbf` - (Required) The table that stores the attribute information of features.
	* `.prj` - (Optional) The file that stores the coordinate system information (used by ArcGIS).
	* `.prj` - (Optional) The file that stores the coordinate system information (used by ArcGIS).
	* `.shp` — (Required) The main file that stores the feature geometry.
	* `.xml` — (Optional) Stores metadata about the shapefile.
	* `.shx` — (Required) The index file that stores the index of the feature geometry.
Make sure to keep all of these files in the same folder, and do not change any names. It is important for all of them to share the same filename in order for the shapefile to render properly.

#### Downloading TIGER demographic data

* Next, we will download additional demographic data associated with the regions we are mapping. Navigate to the [TIGER Demographic and Economic Data repository](https://www.census.gov/geo/maps-data/data/tiger-data.html).

![TIGER Demo Landing](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/04_TIGER_Demo_Landing.png)

* Under `American Community Survey 5-Year Estimates — Geodatabase Format`, open the bar that says `2011 - 2015 Detailed Tables`.

![TIGER Demo Open](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/05_TIGER_Demo_Open.png)

* Scroll down to the bullet that reads `County Subdivision - select a state:`. 
* Open the menu, and select `New York`.
* Hit `GO`.
* This should give you a large file, entitled `ACS_2015_5YR_COUSUB_36.gdb.zip`. Unzip the file.
* Note the extension of the unzipped folder, `gdb`. This file is in Geodatabase format. The files inside the folder have a range of different extensions, and are not really human readable. QGIS will help us with this. 

### Working with data in QGIS
#### Quick Tour: Zooming, Filtering, and Selection

* Open up a new project in QGIS. You should be faced with a new, blank canvas.

![QGIS Default](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/06_QGIS_Default.png)

* Before we get started, there are a few things to understand about the QGIS interface, as well as geospatial data itself. Geodata can come in a number of different forms, some of which we have already discussed in class. For our purposes, vector, raster, and text are the main formats with which we will be concerned. QGIS provides specific workflows for importing each of these different types of data, as visible in the left toolbar of the screen (your screen may default to putting this toolbar in a different position, but the icons are the same):

![QGIS Import Controls](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/07_QGIS_Import_Controls.png)

* From top to bottom, the icons stand for:
	* Adding a `Vector Layer` (most common)
	* Adding a `Raster Layer` (common)
	* Adding a `SpatiaLite Layer`
	* Adding a `PostGIS Layers`
	* Adding a `WMS/WMTS Layer`
	* Adding a `WCS Layer`
	* Adding a `WFS Layer`
	* Adding a `Delimited Text Layer` (common)
	* Adding a `Virtual Layer`
	* Adding a `Shapefile Layer`
We will mostly use the `Vector Layer` and `Delimited Text Layer` import controls. Vector data typically comes in the form of regional boundaries (polygons), while a delimited text layer often takes the form of a simple `.CSV`, with or without geometry.

* As may be evident by these controls, QGIS composes working projects in "Layers", similar to Adobe software like Photoshop or Illustrator. This simply adds logic to the order in which elements are visible: layers at the top of the list appear to be "on top" of the layers at the bottom of the list, and vice versa.
* Zooming and panning controls along the top of the screen enable you to zoom in and out of a selected layer. 

![QGIS Import Controls](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/08_QGIS_Zoom_Controls.png)

* If you ever lose sight of a selected layer, tap the `Zoom Full` magnifying glass to recenter.

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
















