## Studio 01 - Introduction to Tableau

This studio will provide an introduction to the interface, functionality, and basic visual capabilities of [Tableau Public](https://public.tableau.com/s/).

### Datasets

We will be using one dataset for this studio:

2015 Street Tree Census - Originally downloaded from [here](https://data.cityofnewyork.us/Environment/2015-Street-Tree-Census-Tree-Data/uvpi-gqnh/data)

### Gathering and preparing data
#### Downloading Tree Data from the NYC OpenData portal

* Navigate to the [NYC OpenData portal](https://opendata.cityofnewyork.us/).

![Landing](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/01_Landing.png)

* Click on the `Data` tab. Here you can explore different datasets by category, by popularity, or by recency. 
* Today we will be working with the 2015 Tree Census dataset. The Tree Census (this one, put together between 2015-2016) is conducted by "2,200 volunteers together in the largest participatory municipal urban forestry project in United States history. Using both high tech tools and survey wheels, tape measures, and tree identification keys, citizen mappers [help] create a spatially accurate digital inventory of NYC’s street trees" ([Source](https://www.nycgovparks.org/trees/treescount)). To access this dataset, type `tree` in the search bar, and hit `Enter`.
* Click on the second result, `2015 Tree Census - Tree Data`.

![Selection](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/03_Selection.png)

* [Here](https://data.cityofnewyork.us/Environment/2015-Street-Tree-Census-Tree-Data/uvpi-gqnh), you can see a great deal of information about this dataset: its attributes, its size, the frequency with which it is updated, its format. Scroll down to the `Table Preview` section to get a picture of what the data looks like in tabular format.

![Data Preview](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/04_Data_Preview.png)

* Now, click `View Data`. Here, you can see the dataset in its entirety. You can also apply filters to the data to prepare it for download.

![Dataset](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/05_Dataset.png)

* On the right side of the page, you will see a `Filter` panel, with the `Filter` sub-section automatically selected. We will be using this section to isolate only complaints from the past week, to make the size of the dataset more manageable.
	* Click `Add a New Filter Condition`.
	* In the first dropdown, which opens a menu containing all of the column headers in the dataset, select the `created_at` field.
	* Click the `is` dropdown menu, and select `is between`. Two fields, one for a start value and one for an end value, should automatically appear below.
	* Click the first field to open a calendar picker. Navigate to and select the first day of June 2016, `06/01/2016`.
	* Click the second field to open a second calendar picker. Navigate to and select the last day of June 2016, `06/30/2016`.
* Once you click out of this view, the dataset on the left should update to contain only the rows to which the filters apply.

![Filter](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/06_Filter.png)

* Now, click the blue `Export` button from the set of colorful buttons on the top right side of the table. Click `Download > CSV`. This will download the filtered dataset in CSV format.
* Open up the downloaded CSV in Excel or Google Sheets. Before creating our visualization, we'll want to trim down the size of the dataset by deleting unnecessary columns.
* Keep the raw data in its current tab. In Excel, right-click the tab, select `Move or Copy...`, select `Create a copy`, and `(move to end)`. Name the tab `Trimmed`, or something similar. In this new copied tab, we will edit down the original raw data into a cleaner working version.
* Delete all columns except the following:
	* `tree_id`
	* `block_id`
	* `created_at`
	* `tree_dbh`
	* `stump_diam`
	* `curb_loc`
	* `status`
	* `postcode`
	* `zip_city`
	* `borocode`
	* `borough`
	* `state`
	* `latitude`
	* `longitude`
* Your dataset should now look something like this:

![Excel Trimmed](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/09_Excel_Trimmed.png)

#### Importing data into Tableau

* If you have not already done so, download and install [Tableau Public](https://public.tableau.com/s/).
* Open Tableau Public.

![Tableau Landing Screen](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/10_Tableau_Landing_Screen.png)

* The first thing you see when you open Tableau is a screen with three sections: "Connect," "Open," and "Discover."
	* The "Connect" section enables us to connect different types of data into the workspace.
	* Since we have not saved any workbooks yet, the "Open" section is blank. 
	* "Discover" points us to a series of Tableau-provided resources.
* In the left "Connect" panel, under `To a File`, select `Excel`. 

![Tableau Open File](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/11_Tableau_Open_File.png)

* Browse for your Excel file, and select it. 

![Tableau Imported](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/12_Tableau_Imported.png)

* We land on a blank workspace, with our connected Excel file visible in the top left corner. Try dragging your `Trimmed` sheet to the `Drag sheets here` area.

![Tableau Dragged Trimmed](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/13_Tableau_Dragged_Trimmed.png)

* The data should show up in a tabular format, exactly as it appeared in Excel. Tableau attempts to automatically resolve attribute types into one of the following:
	* Number (decimal)
	* Number (whole)
	* Date & Time
	* Date
	* String
	* Boolean
* Click on the small icons accompanying the label in each column to get a closer look.
	* `Created At` resolved to `Date & Time`
	* `Status` resolved to `String`
	* `Borocode` resolved to `Number (whole)`
* Some of the icon dropdowns contain a `Geographic role` option in the menu that appears. This may or may not be applicable to the actual variable. Try clicking on `Postcode`. While the value resolved to `Number (whole)`, if you navigate down to the `Geographic role` option in the menu, Tableau was able to detect that this is a zip code. 

![Tableau Zip Geographic Role](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/14_Zip_Geographic_Role.png)

* Now, try scrolling all the way to the right to the `Latitude` and `Longitude` columns. Check the `Geographic Role` for each of these, which should be `Latitude` and `Longitude`, accordingly. 

### Visualizing 2015 Tree Census Data
#### Making a chart

* Tableau uses a workbook and sheet file structure, similar to Microsoft Excel.
	* A 'workbook' is a saved Tableau project
	* A 'sheet' may be a worksheet, a dashboard, or a story
* Within a workbook, you can create new sheets, clear an entire worksheet, duplicate sheets, hide or show a worksheet, and delete a sheet. 
* Along the bottom tab, we can see a few different view possibilities that correspond to this paradigm:
	* The default `Sheet 1`, which is automatically generated anytime we open a new project
	* An option to add additional sheets
	* An option to add additional dashboards

![Bottom Tab](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/15_Bottom_Tab.png) 

* Navigate to `Sheet 1` to view the tree data in a new workspace. 

![Blank Workspace](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/16_Blank_Workspace.png) 

* In the left pane, we can see a breakdown of our variables. The variables are sorted into `Dimensions` and `Measures` based on the variable types we saw on import.
	* In the top `Dimensions` section, we see:
		* `Block Id`
		* `Borough`
		* `Created At`
		* `Curb Loc`
		* `Postcode`
		* `State`
		* `Status`
		* `Tree Id`
		* `Zip City`
	* In the lower `Measures` section, we see:
		* `Borocode`
		* `Latitude`
		* `Longitude`
		* `Stump Diam`
		* `Tree Dbh`
	* Note that geographic data may fall into either of the sections.
* Tableau makes it incredibly easy to build simple charts. Let's start by creating a bar chart of trees counted over the course of the month we selected. In the left panel, find the `Number of Records` label in the `Measures` section. This is a measure automatically generated by Tableau that gives every item in the dataset you upload a value of `1`. It tells you the number of records in the dataset.
* Double click `Number of Records`.

![Number of Records Only](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/17_Number_Records_Only.png) 

* You should see a single bar plotted on a y-axis that goes to a bit above 35k. As we have not selected any other variable to throw into the mix, this is all we see. Now, select the `Created At` label in the `Dimensions` section. 
* Drag it to the `Columns` section at the top of the workspace. Make sure that `Number of Records` remains in the `Rows` section. 

![Created Year](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/18_Created_Year.png) 

* All we see is a single point. And the reason is this: notice in the top `Created At` label, the word `YEAR` as been appended to its name, rendering the granularity of this display quite low. Click on the label, open up the menu, and select the `Day` option that contains the day, month, and year of the record.

![Created Menu](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/19_Created_Menu.png) 

* Now, you should see a more readable line chart, stetching across the time span we filtered for in the OpenData portal.

![Day Line](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/20_Day_Line.png) 

* However, a line chart is not really appropriate for this representation. It would be appropriate for a running total, but in this case, it seems more intuitive to represent each day's added records as a discrete count. In the `Marks` panel, click on the dropdown that currently shows `Automatic` as selected, and select `Bar` instead of `Line`. 

![Bar or Line](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/21_Bar_or_Line.png) 

And just like that, we can get a quick view of how many trees were added to the dataset on a day-by-day basis throughout the month of June 2016:

![Simple Bar Chart](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/22_Simple_Bar_Chart.png) 

___
**_PAUSE:_** Clear your workspace. Create a simple bar chart, but instead of plotting the number of records added by day, plot the number of records in this dataset by borough. 
___

![Borough Bars](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/23_Borough_Bars.png) 

* You should have landed about here. Click the `Show Me` tile in the top right side of the interface. Here, you can see a number of different visualization options. Many of the options are grayed out. If you hover over a grayed-out tile, Tableau will give you a prompt to describe the kind of data necessary to make that option available. Some of the visualization options are not grayed out, however. Try clicking the `packed bubbles` option.

![Packed Bubbles](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/24_Packed_Bubbles.png) 

Tableau does not give us much insight into whether these circles are sized by their diameters or areas, but this is an interesting representation nonetheless. Notice the changes that dynamically occur in the left panel as we render the data using these different methods. Also notice that Tableau has applied *both* position and color to these bubbles. Some of the terminology in the `Marks` panel should look familiar. Recall that the term `Mark` refers to the type of element we use to represent our _items_ and _links_. This panel contains a shape control, a `Color` control, a `Size` control, a `Label` control, as well as controls for `Detail` and `Tooltip`. Tableau surfaces many of the different visual variables we have talked about so far. (Bonus question: which ones are missing?) 
* Now, try selecting the `treemap` option in the top right panel. 

![Treemap](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/25_Treemap.png) 

Would you consider this an accurate representation? Why or why not?

* Try the stacked bar, now. How about this one? What might be its strengths or weaknesses?

![Stacked Bar](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/26_Stacked_Bar.png) 

___
**_PAUSE:_** Clear your workspace. Trying creating two different visualizations using any of the types we have not yet explored. Different options become available with different combinations (and numbers) of dimensions and attributes. 
___

* Clear your workspace again. 
* Once more, put `Created At` in the `Columns` section, and set it to `DAY` granularity.
* Put `Number of Records` in the `Rows` section. 
* Let's now layer on an additional visual variable to break these bars out by borough, to gain more insight into the boroughs the volunteers who put this dataset together were spending time in. A good way to do this might be by exploring a stacked bar chart. From the left `Dimensions` panel, grab `Borough` and drag it into the `Marks` panel, on top of the `Color` swatch.

![Stacked Borough Bars](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/27_Stacked_Borough_Bars.png) 

* I cannot immediately tell by looking at this what borough each color refers to. To mitigate this, go to the top `Analysis` menu, `> Legends > Color Legend (Borough)`. 

![Color Legend Menu](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/28_Color_Legend_Menu.png) 

A legend on the right, labeling each color swatch, should appear. 

![Color Legend](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/29_Color_Legend.png) 

___
**_CHALLENGE #1:_** In a new worksheet in your workbook, create a chart that answers the question: "What is the proportion of `Alive`, `Dead`, and `Stump` trees in this census?"
___

![Challenge 01](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/30_Challenge_01.png) 

___
**_CHALLENGE #2:_** In a new worksheet in your workbook, create a chart that answers the question: "What is the distribution of stump diameters measured by borough over time?"
___

![Challenge 02](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/31_Challenge_02.png) 

* Save your workbook to Tableau Public.

### Extra Tips
#### Cleaning data in Tableau

* In an ideal scenario, each variable we want to work with is in a separate column in our dataset. Sometimes, however, data that is meant to be human-readable is poorly formatted for machines. Take this Excel file, which includes some additional metadata in its top rows:

![Excel Dirty](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/32_Excel_Dirty.png)

* When I try to import this into Tableau, I do get a data preview that represents values from the file. However, some things are messed up: the column headers in my preview, here, took on the cell numbers from my spreadsheet, instead of the actual names of each variable. 

![Tableau Dirty](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/33_Tableau_Dirty.png)

* Luckily, Tableau does offer us a handy way of cleaning up common formatting mistakes like this one. In the left panel, in the `Sheets` section, find the `Use Data Interpreter` option. Check the box.

![Tableau Clean](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/34_Tableau_Clean.png)

* Once the box is checked, Tableau strips out what it detects to be unnecessary noise, and presents us with the table headers we saw in our "clean" data view. 

#### Pivoting data in Tableau

* Tableau's pivot function is another way of handling data that is not in its ideal format. Though the 311 dataset is in a workable format, with one variable per column, sometimes we encounter data with one variable spread out over multiple columns. Take this sample `.CSV` file of sales data, for instance:

![Sample Pivot Data](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/35_Sample_Pivot_Data.png)

* Here, years are spread out over three different columns: `2014`, `2015`, and `2016`. If we import this into Tableau, we see the following:

![Imported Pivot](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/36_Imported_Pivot.png)

* The first thing to notice here is that Tableau did not properly detect our header row, likely because the variable types of the headers correspond to the detected variable types of the values. To fix this, navigate to the labeled bar in the workspace above the table preview, click the bar to reveal a dropdown menu, and select `Field names are in first row`.

![Fix Field Names](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/37_Fix_Field_Names.png)

* Even though our data is now properly detected, we still want to solve the multiple-date-columns problem. In their current format, they do not make even creating a line chart over time easy, since each date value is considered a separate field. If we navigate to `Sheet 1` into Tableau's visual workspace, we can see that the current data format is not amenable to visualizing very much:

![Needs Pivoting](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/38_Needs_Pivoting.png)

* In this preview area, select all three columns.
* Right-click the columns to bring up a menu.

![Pivot Menu](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/39_Pivot_Menu.png)

* Select `Pivot`. 

![Pivoted](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/40_Pivoted.png)

* We can now see that the data from the three columns has now been "stacked" into two new columns: `Pivot Field Names` and `Pivot Field Values`. Rename these columns to `Year` and `Num_Sales`.
* Now, if we navigate to `Sheet 1`, we can easily drag and drop the new variables to form a chart that displays this data over time.

![Pivot Visualized](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/01/41_Pivot_Visualized.png)