## Studio 05 - Creating an Interactive Map Using Google Fusion Tables 

Fusion Tables is a modern data management web application that makes it easy to host, manage, collaborate on, visualize, and publish data tables online. In this studio, we will be uploading custom geographic data to Fusion Tables and creating an interactive map. 

### Datasets

We will be using two datasets for this map:

* Population data for counties in California - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Data/05/CA_Population_County.csv)
* An ESRI Shapefile (converted from Shapefile -> KML -> CSV) with geographic coordinates for county polygons - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Data/04/CA_Counties_POLYG.csv)

### Creating an interactive map
#### Uploading data

* Navigate to Google Drive using your **personal Gmail** account (LionMail does not currently support this).
* Click `NEW`.
* Navigate to `More > Connect more apps`.

![Connect Fusion Tables](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/01_Connect_Fusion_Tables.png)

* Search for `Fusion Tables` in the search box.
* When the matching result appears, click `CONNECT`. 

![Connect App](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/02_Connect_App.png)

* Now, when you navigate to the same menu, `Google Fusion Tables` should appear as an option. 

![Fusion Tables Appears](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/03_Fusion_Tables_Appears.png)

* Google will ask for some verification before directing you to the app. Eventually, you should land on a page that prompts you to import a new table.

![Import New Table](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/04_Import_New_Table.png)

* With `From this computer` selected, browse to find the `CA_Population_County.csv` file. 
* Check the default settings. `Seperator character` should be set to `Comma`, while `Character encoding` should be set to `UTF-8`.
* If these look good, click `Next »`.
* You should now see a preview of the imported data, with two columns: one for `County`, and one for `Population`. 

![Data Preview](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/05_Data_Preview.png)

* Check to make sure the top text says `Column names are in row: 1`. 
* If this looks good, click `Next »`.
* Update the Table name to `CA Population`. Add any attribution data or change the description.

![Import Update](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/06_Import_Update.png)

* Click `Finish`. The file will be added to Fusion Tables.

![Loaded CSV](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/07_Loaded_CSV.png)

* Now, we need to repeat the same steps to upload the `CA_Counties_POLYG.csv` dataset. Go to `File > Import more rows...`. 

![New Table](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/08_New_Table.png)

* A new table tab will open, with the same import window. Navigate to `CA_Counties_POLYG.csv` and open the file. 
* Review the same default settings. Click `Next »`.
* Review the preview of the data. If it looks good, click `Next »`.
* If you like, change the title of the table, or add additional metadata. 
* Once complete, click `Finish`. As before, the file will be added to the table. 

![Imported Polygons](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/09_Imported_Polygons.png)

#### Merging tables

* Now that we have the two tables uploaded, select the tab containing `CA Population` data. We are going to merge this table with the table containing the county boundaries, in order to enable us to create a map that ties population values to geographic areas. Go to `File > Merge...`.
* A window should pop up, prompting you to select a table from the two you have created. Select the `County Polygons` table.

![Merge Prompt](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/10_Merge_Prompt.png)

* Click `Next »`.
* Select the columns you want to merge on. In this case, we are using `County` _(though when you can, try to merge tables using unique IDs)_. Make sure `County` matches on each of the tables. Merge works by looking for exact string matches in the selected columns and then linking matching rows together.

![Column Matching](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/11_Column_Matching.png)

* If everything looks good, click `Next »`.
* Here, we are only interested in the columns `County`, `Population`, and `geometry`. These are the only values we need to draw the map. Go ahead and _uncheck_ `value`, `GEO_ID`, and `GEO_ID2`. 
* Click `Merge`.
* A `Merged table created` prompt should appear. Click `View table` to open the merged table in a new tab.

![Merged Table](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/12_Merged_Table.png)

* Here, we can see the columns that we specified. Notice that the `geometry` column containing KML values is associated now with both a county name and a population value. We are ready to create a map from this data. Navigate to the `Map of geometry` tab to view the county geometry in a webmap.

![Map of Geometry](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/13_Map_of_Geometry.png)

#### Styling

* We are going to style this map in order to create a visualization of the data. In the left panel, click `Change feature styles...`.
* In the left column under `Polygons`, select `Fill color`.
* Select the `Gradient` tab.
* Select `Show a gradient`. 
* In the dropdown menu next to `Column`, select `Population`.
* In the text box next to `Through`, enter `90900`.

![Feature Styles](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/14_Feature_Styles.png)

* Select any colors you want using the dropdown menu.
* Now, in the left column under `Polygons`, select `Border color`.
* Change this color to white (`#FFFFFF`).

![Border Color](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/15_Border_Color.png)

* In the left column under `Legend`, select `Automatic legend`.
* Check `Show polygon fill legend`.

![Show Legend](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/16_Show_Legend.png)

* When finished, click `Save`. The map will be updated in the new style.

![Updated Map](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/17_Updated_Map.png)

#### Configuring the info window

* Now, we want to customize the content in the "info window" that pops up whenever we click on a county. In the left panel, select `Change info window...`.
* A new dialog should appear, containing the HTML that generates the info window. Deselect all checkboxes except for the two next to `County` and `Population`. Notice how the HTML in the right panel is updated as you do this.
* Select the `Custom` tab.
* Update the HTML to the following:

```
<div class=’googft-info-window’ style='font-size: 16px',’font-family: sans-serif’>
	<b>{County}</b><br>
	<b>Population:</b> {Population}
</div>
```

![Info Window](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/18_Info_Window.png)

* Click `Save`.
* Click on one of the counties. The style of the info window content should be updated to a more readable format.

![Info Window Styled](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/05/19_Info_Window_Styled.png)

#### Updating permissions



#### Embedding map in a webpage












