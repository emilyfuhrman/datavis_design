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

![QGIS Zoom Controls](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/08_QGIS_Zoom_Controls.png)

* If you ever lose sight of a selected layer, tap the `Zoom Full` magnifying glass to recenter. We can test this on an actual file in a moment.

#### Importing TIGER Shapefiles

* First, save your QGIS project to an accessible folder.
* Within the same folder, create a `Data` folder to store all of your working Shapefiles. This will make organization easier as we progress.
* Navigate to the left toolbar in your QGIS project, and click the `Add Vector Layer` icon. A popup window should appear.

![QGIS Add Vector Layer](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/09_QGIS_Add_Vector_Layer.png)

* Click `Browse`.
* Navigate to your saved TIGER Shapefile. You may select the entire *zipped* file, or the individual `.shp` file.
* Click `Open`.

![QGIS Import Shapefile](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/10_QGIS_Import_Shapefile.png)

* Click `Open` again to close the modal dialog and import the Shapefile. 
* You should now see New York City county outlines appear on your blank canvas. Note that the outlines appear in the bottom left `Layers Panel` under the same title as the file, `tl_2017_36_cousub`.

![QGIS Imported Shapefile](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/11_QGIS_Imported_Shapefile.png)

* Find the tile at the top of the screen that looks like an arrow pointing to a yellow rectangle. 
* Hover over the tile to make sure it says `Select Features by area or single click`.

![QGIS Select Tile](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/12_QGIS_Select_Tile.png)

* Click the tile.
* Now, try clicking on a region of the visible county boundaries. Your selection should highlight yellow.

![QGIS Test Selection](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/13_QGIS_Test_Selection.png)

* While we can visually see that we have selected one of the entries in the county boundaries dataset, it is hard to tell which one just by looking at the map. In order to get more detail, we can open up the attribute table for this imported layer. 
* Find the icon along the top toolbar that looks like a small table.

![QGIS Attribute Table](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/14_QGIS_Attribute_Table.png)

* Click the icon. A data table should open, that looks something like this:

![QGIS Attribute Table](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/15_QGIS_Attribute_Table.png)

* Here, we can see all of the different variables associated with each of these county-boundary polygons. From this view, we can see what we have directly selected from the visual canvas, as well as create new variables and write queries. To filter the visible data down to the particular area we have selected manually, navigate to the bottom left of the modal dialog to the `Show All Features` button.

![QGIS Show All Features](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/16_QGIS_Show_All_Features.png)

* Click the button to open the menu.
* Select `Show Selected Features`. The table should now update to contain only one row, which corresponds to the yellow polygon in the canvas view.

![QGIS View Selected](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/17_QGIS_View_Selected.png)

We can't see much that's human-readable here, aside from the fact that the county name is "Webb".
* Close out the modal dialog.

#### Manipulating TIGER Shapefiles

Looking at this representation of New York, we can see that the shape seems a little off. Some of the areas along the left hand side seem to extend beyond the actual land boundary of the state. Let's examine this more deeply.

* Manually select one or more of these large boundaries on the left hand side. 

![QGIS Select Outliers](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/18_QGIS_Select_Outliers.png)

* Open up the attribute table again, by clicking the icon that looks like a table.
* Again, click `Show Selected Features` to view the elements we have selected manually.

![QGIS ALAND](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/19_QGIS_ALAND.png)

* If we scroll to the right, we can see that the `ALAND` value for each of these selected items is `0`. This means that the land area for each of these boundaries is actually equal zero -- each one encompasses only water. We can use this knowledge to query the entire table, to filter out items that match the same description. 
* Locate the tile at the top of the modal dialog with the label `Select features using an expression`.

![QGIS Select Using Expression](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/20_QGIS_Select_Using_Expression.png)



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
















