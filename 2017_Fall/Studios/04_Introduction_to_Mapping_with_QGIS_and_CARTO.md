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

* Click the tile. 
* This opens up another modal dialog to help us write a query to filter the whole dataset. In the center panel, open the `Fields and Values` row.

![QGIS Fields and Values](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/21_QGIS_Fields_Values.png)

* Find the `ALAND` value in the list. Double click it.
* Click the `=` tile.
* Type `0`.

![QGIS Write Query](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/22_QGIS_Write_Query.png)

* Click `Select`. This should update the table in the background.

![QGIS Select](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/23_QGIS_Select.png)

* Close the dialog. The corresponding areas on the map should be selected. 

![QGIS Selected](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/24_QGIS_Selected.png)

* Now, we have all the polygons with an `ALAND` value of `0` selected -- or, all of the polygons that do not encompass land area. To edit this Shapefile, however, we want to *keep* all of the polygons that *do* encompass land area. So we need to invert our selection, grabbing everything for which `ALAND` does *not* equal `0`. Since we have already made out selection, this operation is actually quite easy. Open the attribute table again by clicking the tile that looks like a table.
* Find the `Invert Selection` icon.

![QGIS Invert](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/25_QGIS_Invert.png)

* Click the icon.
* Now, when we close out the dialog, the inverse selection is selected on the map.

![QGIS Inverted](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/26_QGIS_Inverted.png)

* As our final step, we actually want to trim this shapefile so that it only retains those elements that encompass land area. To do this, navigate to the Layers Panel in the bottom left.
* Right-click the layer to bring up a menu of options. 
* Click `Save as...`

![QGIS Save As](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/27_QGIS_Save_As.png)

* In the dialog, fill in the following options:
	* Under `Format`, keep `ESRI Shapefile` selected.
	* Under `Filename`, click `Browse`, and save the file as something you will rememebr in the `Data` folder you already created. (I saved mine as `NYC_Trimmed`).
	* Under `Encoding`, *make sure to check `Save only selected features`*.

![QGIS Save Options](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/28_QGIS_Save_Options.png)

* Once you have done all of these things, click `OK`.
* Once the save is complete, the newly-saved shapefile should open as a new layer in your map as well. Note that this one excludes the water-only elements. If you like, hide the layer below it to see this more clearly.

![QGIS Trimmed](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/29_QGIS_Trimmed.png)

#### Importing TIGER demographic data

Now that we have imported our boundaries, it is time to import the demographic data we downloaded that is associated with each boundary.

* Navigate to the `Add Vector Layer` tile.

![QGIS Add Vector Layer](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/30_QGIS_Add_Vector_Layer.png)

* In the `Source Type` section, select `Directory`.
* Under `Source > Type`, select `OpenFileGDB`.
* Navigate to the place where you stored the *unzipped* NYC County Subdivision Demographic and Economic Data (`ACS_2015_5YR_COUSUB_36.gdb`).

![QGIS Choose Directory](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/32_QGIS_Choose_Directory.png) 

* Choose the *unzipped* directory, which should still have an extension of `.gdb`.
* Click `Open`.
* In the popup window that appears, check to see that the visible columns correspond to the columns we saw in the metadata for this column. 

![QGIS Preview](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/33_QGIS_Preview.png) 

* Click the row of Layer 1 - `X00_COUNTS`, to make sure that only that row is imported.
* Click `Okay`.
* Nothing should appear on top of the map at this point, because this data does not contain explicit geographic coordinates. Instead, you should see a new layer appear in the bottom left `Layers Panel`.
* Click the table tile at the top of the screen to view the attribute table for the layer. It should look something like this:

![QGIS GDB Imported](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/34_QGIS_GDB_Imported.png) 

The column labeled `B00001e1`, an unweighted sample count of the population for each county, is the one we will be focusing on.

#### Creating a new variable

These datasets are still separate from one another. In order to work with them together, we need to join them based on a unique identifier for each county. We will need to create a new column in our Shapefile in order to enable this.

* In the attribute table for the demographic data, note the `GEOID` column.
* Open up the attribute table for the Shapefile. It, too, has a `GEOID` column.

![QGIS Shapefile GEOID](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/35_QGIS_Shapefile_GEOID.png) 

However, these columns are not in exactly the same format. Though the string of numbers at the end of each one is the same, the one in the newly-imported attribute table is preceded by the characters `06000US`. We need them to match in order to enable our join.
* In the Shapefile attribute table, click the pencil icon in the top left corner to `Toggle editing mode`.
* Click the tile with an abacus on it, labeled `Open field calculator`.

![QGIS New Field](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/36_QGIS_New_Field.png) 

* Here, select the following:
	* `Create new field`
	* Output field name: `GEOID_Full`
	* Output field type: `Text (string)`
	* Output field length: `255`
	* Precision: `0`
* Find the `String` section in the center panel. Open it.
* Double-click `concat`, so it appears in the left panel.

![QGIS Concat](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/37_QGIS_Concat.png) 

* Inside the parentheses, type `06000US` in *single-quotes*.
* Type a comma, `,`.
* In the center panel, open the `Fields and Values` section.
* Double-click `GEOID`.
* Close the parentheses in the left panel. Your query should look like this:

![QGIS Query](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/38_QGIS_Query.png)

* Click `OK`.
* If you scroll to the right of the table, you will now see a new column created.
* Unclick the left pencil icon to exit editing mode.
* Save your changes.
* Close the attribute table. 

#### Joining TIGER demographic data to TIGER Shapefiles

* Double-click the Shapefile in the `Layers Panel` to open up its preferences modal.
* In the left panel, select `Joins`.
* Hit the `+` button at the bottom of the dialog.
* Enter the following:
	* Join layer: `ACS_2015_5YR_COUSUB_36...` (your `.gdb` layer)
	* Join field: `GEOID`
	* Target field: `GEOID_Full`
	* Check `Custom field name prefix`, and enter an underscore (`_`) in the text area. 
	* Keep the other defaults. 

![QGIS Join Parameters](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/39_QGIS_Join_Parameters.png)

* Click `OK`.
* Click `Okay` to exit the preferences dialog.
* Now, open up the attribute table for the Shapefile. You should see additional columns from the demographic dataset now appended to your Shapefile. Success!

![QGIS Joined](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/40_QGIS_Joined.png)

#### Creating a population density variable

As you might recall, visualizing raw counts in a choropleth map is bad practice. As such, we cannot simply use the values in this column to drive the colors on a thematic map. Instead, we need to derive a new column, which represents the population density for a given county region.

* Within your open, newly-joined attribute table, click the abacus icon to open up the new field calculator.
* Here, select the following:
	* `Create new field`
	* Output field name: `PopDensity`
	* Output field type: `Decimal number (real)`
	* Output field length: `10`
	* Precision: `10`
* In the central panel, open the `Geometry` section.
* Double click `$area`. This is a variable native to QGIS, which automatically calculates the area of a bounded shape. Since we are trying to calculate population density, we need to first get the area of the shape we are focused on, and then divide it by the count value in the joined dataset. The default units for these calculations are in the units of the default projection, which in this case is `m^2`.
* After `$area` appears in the left panel, click the `/` tile.
* In the central panel, open the `Fields and Values` section.
* Double-click `_B00001e1`, the joined variable that represents the unweighted sample count for the population of each county. Your expression should now look like this:

![QGIS Calculate Density](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/41_QGIS_Calculate_Density.png)

* Click `OK`.
* Scroll all the way to the right of the attribute table. As before, a new column should appear. This time, it is called `PopDensity` as we defined it, and is populated by population density values calculated using the native QGIS `$area` variable and the estimated count for each county.

![QGIS New Column](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/42_QGIS_New_Column.png)

* Hit the pencil icon to exit edit mode.
* Save your work.

#### Styling: Creating a choropleth map within QGIS

* We can now use this newly-created variable to color the Shapefile we have within QGIS. Exit the attribute table, and double click the Shapefile layer in the bottom left hand corner to bring up its preferences dialog. 
* In the left hand navigation, select `Style`.
* At the top of the dialog, instead of `Single symbol`, select `Graduated`.
* In the `Column` section, select the `PopDensity` variable.

![QGIS Style](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/43_QGIS_Style.png)

* In the bottom right corner below the main text area, set the number of `Classes` to `12`.
* In the `Mode` section, we can see there are a number of different options for dividing up the data:
	* Equal Interval
	* Quantile (Equal Count)
	* Natural breaks (Jenks)
	* Standard Deviation
	* Pretty Breaks
* Select `Quantile (Equal Count)`, and notice the values update in the main text area.

![QGIS Quantile](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/44_QGIS_Quantile.png)

* Click `Apply`.
* Click `OK`.
* The visible map should now update to fill its county boundaries based on the population density for each area.

![QGIS Map](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/45_QGIS_Map.png)

#### Exporting new Shapefile

* To make this data more shareable, we can export a *zipped* Shapefile from QGIS and import it into CARTO. Exporting the Shapefile will not export the colors, but will export the `PopDensity` variable we created. Navigate to the place where you saved your trimmed Shapefile.
* Compress the *whole folder*. You can import the resultant zipfile into CARTO, and visualize it in a similar way.

### Visualizing data in CARTO
#### Importing new Shapefile

* Log in to your existing CARTO account.
* Make sure "Datasets" are chosen in your top navigation bar.

![CARTO Datasets](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/46_CARTO_Datasets.png)

* Click `New dataset`.
* Browse to your zipped file.

![Zipped Shapefile](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/47_Zipped_Shapefile.png)

* Click `CONNECT DATASET`. This may take a moment to upload.
* Once the Shapefile is uploaded, click `SHOW`.

#### Styling: Creating a choropleth map within CARTO

* The default view of your new dataset should look something like this:

![CARTO Imported](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/48_CARTO_Imported.png)

* Click `CREATE MAP` to open the data in a visual view.

![Default View](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/49_Default_View.png)

* Click the `nyc_trimmed` layer (or whatever name was imported -- this matches the name to which you saved your Shapefile).
* Under `Polygons Style`, click the `COLOR` bar.
* Select `BY VALUE`.
* In the `Search by column` field, find `PopDensity`.

![CARTO Color](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/50_CARTO_Color.png)

* Zoom into your map.
* Similar to as we did in QGIS, set the number of buckets (or data classes) to `7`.
* Click the `Quantiles` menu. We can see that CARTO provides a number of similar options to QGIS:
	* Quantiles
	* Jenks
	* Equal Interval
	* Heads/Tails
	* Category
* Selecting `Quantiles` will produce a similar map to the one we created in QGIS. 
* Choose a color scheme to your liking -- it should *not* be a dual-ended, divergent scale, because we are trying to visualize population density on a unidirectional continuum (less dense -> more dense).
* Once you have tweaked the styles as appropriate, navigate out of the layer.
* Customize a legend, tooltip, and title as needed.
* Select a basemap that you would like to use. I chose this one:

![CARTO Final](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/04/51_CARTO_Final.png)

* Once you are finished, click `PUBLISH` to publish your map to the web. 
