## Studio 01 - Introduction to Tableau

This studio will provide an introduction to the interface, functionality, and visual capabilities of [Tableau Public](https://public.tableau.com/s/).

### Datasets

We will be using one dataset for this map:

* 311 Service Requests - Originally downloaded from [here](https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9/data)

### Gathering and preparing data
#### Downloading 311 Data from the NYC OpenData portal

* Navigate to the [NYC OpenData portal](https://opendata.cityofnewyork.us/).

![NYC OpenData](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/01_NYC_OpenData_Home.png)

* Click on the `Data` tab. Here you can explore different datasets by category, by popularity, or by recency. 
* Today we will be working with the NYC 311 dataset. 311 is the complaint hotline for New York City, and the available dataset records every call made to 311 since 2010. Type `311` in the search bar, and hit `Enter`. 
* Click on the first result, `311 Service Requests from 2010 to Present`.

![311 Main](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/02_311_Main.png)

* [Here](https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9), you can see a great deal of information about this dataset: its attributes, its size, the frequency with which it is updated, its format. Scroll down to the `Table Preview` section to get a picture of what the data looks like in tabular format.

![311 Preview](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/03_311_Preview.png)

* Click `Explore Data`. Here, you can see the dataset in its entirety. You can also apply filters to the data to prepare it for download.

![311 Explore](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/04_311_Explore.png)

* On the right side of the page, you will see a `Filter` panel, with the `Filter` sub-section automatically selected. We will be using this section to isolate only complaints from the past week, to make the size of the dataset more manageable.
* Click the `Unique Key` field. This opens a menu containing all of the column headers in the dataset. 
* Select `Created Date`.
* Click the `is` dropdown menu, and select `is between`. Two fields, one for a start value and one for an end value, should automatically appear below.
* Click the first field to open a calendar picker. Navigate to and select October 9th, 2017.
* Click the second field to open a second calendar picker. Today's date should automatically be selected. Keep today's date.
* Once you click out of this view, the dataset on the left should update to contain only the rows to which the filters apply.

![311 Filter](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/05_Filter_Date.png)

* Now, click the blue `Export` button from the set of colorful buttons on the top right side of the table. Click `Download As > CSV`. This will download the filtered dataset in CSV format.
* Open up the downloaded CSV in Excel or Google Sheets. Before creating our visualization, we'll want to trim down the size of the dataset by deleting unnecessary columns.
* Keep the raw data in its current tab. In Excel, right-click the tab, select `Move or Copy...`, select `Create a copy`, and `(move to end)`. Name the tab `Trimmed`, or something similar. In this new copied tab, we will edit down the original raw data into a cleaner working version.
* Delete all columns except the following:
	* `Unique Key`
	* `Created Date`
	* `Agency`
	* `Agency Name`
	* `Complaint Type`
	* `Descriptor`
	* `Incident Zip`
	* `Status`
	* `Borough`
	* `Latitude`
	* `Longitude`
* Your dataset should now look something like this:

![Excel](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/06_Excel_Working.png)

#### Importing data into Tableau

* If you have not already done so, download and install [Tableau Public](https://public.tableau.com/s/).
* Open Tableau Public.

![Tableau Landing Screen](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/07_Tableau_Landing_Screen.png)

* The first thing you see when you open Tableau is a screen with three sections: "Connect," "Open," and "Discover."
	* The "Connect" section enables us to connect different types of data into the workspace.
	* Since we have not saved any workbooks yet, the "Open" section is blank. 
	* "Discover" points us to a series of Tableau-provided resources.
* In the left "Connect" panel, under `To a File`, select `Excel`. 

![Tableau Open File](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/08_Tableau_Open.png)

* Browse for your Excel file, and select it. 

![Tableau Imported](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/09_Tableau_Imported.png)
 
* We land on a blank workspace, with our connected Excel file visible in the top left corner. Try dragging your `Trimmed` sheet to the `Drag sheets here` area.

![Tableau Dragged Trimmed](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/10_Tableau_Dragged_Trimmed.png)

* The data should show up in a tabular format, exactly as it appeared in Excel. Tableau attempts to automatically resolve attribute types into one of the following:
	* Number (decimal)
	* Number (whole)
	* Date & Time
	* Date
	* String
	* Boolean
* Click on the small icons accompanying the label in each column to get a closer look.
	* `Created date` resolved to `Date & Time`
	* `Agency` resolved to `String`
	* `Unique Key` resolved to `Number (whole)`
* Some of the icon dropdowns contain a `Geographic role` option in the menu that appears. This may or may not be applicable to the actual variable. Try clicking on `Incident Zip`. While the value resolved to `Number (whole)`, if you navigate down to the `Geographic role` option in the menu, Tableau was able to detect that this is a zip code. 

![Tableau Zip Geographic Role](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/11_Tableau_Zip_Geographic_Role.png)

* Now, try scrolling all the way to the right to the `Latitude` and `Longitude` columns. Check the `Geographic Role` for each of these, which should be `Latitude` and `Longitude`, accordingly.

#### Cleaning data in Tableau

* In an ideal scenario, each variable we want to work with is in a separate column in our dataset. Sometimes, however, data that is meant to be human-readable is poorly formatted for machines. Take this Excel file, which includes some additional metadata in its top rows:

![Excel Dirty](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/12_Excel_Dirty.png)

* When I try to import this into Tableau, I do get a data preview that represents values from the file. However, some things are messed up: the column headers in my preview, here, took on the cell numbers from my spreadsheet, instead of the actual names of each variable. 

![Tableau Dirty](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/13_Tableau_Dirty.png)

* Luckily, Tableau does offer us a handy way of cleaning up common formatting mistakes like this one. In the left panel, in the `Sheets` section, find the `Use Data Interpreter` option. Check the box.

![Tableau Clean](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/14_Tableau_Clean.png)

* Once the box is checked, Tableau strips out what it detects to be unnecessary noise, and presents us with the table headers we saw in our "clean" data view. 

#### Pivoting data in Tableau

* Tableau's pivot function is another way of handling data that is not in its ideal format. Though the 311 dataset is in a workable format, with one variable per column, sometimes we encounter data with one variable spread out over multiple columns. Take this sample `.CSV` file of sales data, for instance:

![Sample Pivot Data](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/15_Sample_Pivot_Data.png)

* Here, years are spread out over three different columns: `2014`, `2015`, and `2016`. If we import this into Tableau, we see the following:

![Imported Pivot](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/16_Imported_Pivot.png)

* The first thing to notice here is that Tableau did not properly detect our header row, likely because the variable types of the headers correspond to the detected variable types of the values. To fix this, navigate to the labeled bar in the workspace above the table preview, click the bar to reveal a dropdown menu, and select `Field names are in first row`.

![Fix Field Names](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/17_Fix_Field_Names.png)

* Even though our data is now properly detected, we still want to solve the multiple-date-columns problem. In their current format, they do not make even creating a line chart over time easy, since each date value is considered a separate field. If we navigate to `Sheet 1` into Tableau's visual workspace, we can see that the current data format is not amenable to visualizing very much:

![Needs Pivoting](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/18_Needs_Pivoting.png)

* In this preview area, select all three columns.
* Right-click the columns to bring up a menu.

![Pivot Menu](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/19_Pivot_Menu.png)

* Select `Pivot`. 

![Pivoted](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/20_Pivoted.png)

* We can now see that the data from the three columns has now been "stacked" into two new columns: `Pivot Field Names` and `Pivot Field Values`. Rename these columns to `Year` and `Num_Sales`.
* Now, if we navigate to `Sheet 1`, we can easily drag and drop the new variables to form a chart that displays this data over time.

![Pivot Visualized](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/21_Pivot_Visualized.png) 

### Visualizing 311 Data
#### Making a chart

* Return to our trimmed 311 dataset (`Data Source` > `Database icon` > `(Select)`).
* Tableau uses a workbook and sheet file structure, similar to Microsoft Excel.
	* A 'workbook' is a saved Tableau project
	* A 'sheet' may be a worksheet, a dashboard, or a story
* Within a workbook, you can create new sheets, clear an entire worksheet, duplicate sheets, hide or show a worksheet, and delete a sheet. 
* Along the bottom tab, we can see a few different view possibilities that correspond to this paradigm:
	* The default `Sheet 1`, which is automatically generated anytime we open a new project
	* An option to add additional sheets
	* An option to add additional dashboards

![Bottom Tab](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/22_Bottom_Tab.png) 

* Navigate to `Sheet 1` to view the 311 data in a new workspace. 

![311 Blank Workspace](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/23_311_Blank_Workspace.png) 

* In the left pane, we can see a breakdown of our variables. The variables are sorted into `Dimensions` and `Measures` based on the variable types we saw on import.
	* In the top `Dimensions` section, we see:
		* `Agency`
		* `Agency Name`
		* `Borough`
		* `Complaint Type`
		* `Created Date`
		* `Descriptor`
		* `Incident Zip`
		* `Location Type`
		* `Status`
		* `Unique Key`
	* In the lower `Measures` section, we see:
		* `Latitude`
		* `Longitude`
	* Note that geographic data may fall into either of the sections.
* Tableau makes it incredibly easy to build simple charts. Let's start by creating a bar chart of complaint counts by borough. In the left panel, find the `Borough` label in the `Dimensions` section.
* Double click `Borough`.

![Borough Only](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/24_Borough_Only.png) 

* You should see all the possible values of `Borough` listed in a tabular format, since we have not selected any other variable to throw into the mix. Now, select the automatically-generated `(Number of Records)` label in the `Measures` section. 
* Drag it to the `Rows` section at the top of the workspace. Make sure that `Borough` is in the `Columns` section. And just like that, we can get a quick view of how many 311 complaints were filed within each borough within the past day:

![Simple Bar Chart](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/01/25_Simple_Bar_Chart.png) 






























