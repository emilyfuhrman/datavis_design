## Studio 02 - Visualizing Time in Tableau

This studio will explore different ways of representing time-varying data in [Tableau Public](https://public.tableau.com/s/).

### Datasets

We will be using one dataset for this studio:

* Tour de France Statistics - Originally downloaded from [here](https://public.tableau.com/en-us/s/resources)

### Gathering and preparing data
#### Grabbing a sample dataset from Tableau

Our data gathering process this week will be easy. We are accessing one of the many interesting sample datasets that Tableau offers in its public resources.

* Navigate to the [Tableau Resources](https://public.tableau.com/en-us/s/resources) page, and click the `Sample Data` tab.

![Tableau Sample Data](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/01_Tableau_Sample_Data.png)

* Navigate down to the row that reads `Tour de France Statistics`.
* Download the Excel file.
* Open it up in Excel.

![Data in Excel](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/02_Data_in_Excel.png)

* Note the column headers. As you can see, this dataset includes information about every winner of the Tour de France since 1903:
	* `Year`
	* `Winner's average speed (km/h)`
	* `Total distance (km)`
	* `Number of stages`
	* `Finishers`
	* `Entrants`
	* `Winner`
	* `Winner's nationality`
	* `Winner's team`
	* `Start date`
	* `End date`
	* `Starting city`
	* `Starting city latitude`
	* `Starting city longitude`
	* `Starting country`
	* `Finishing city`
	* `Finishing city latitude`
	* `Finishing city longitude`

However, if you look closely at the `Year` column, some years are missing: `1915` through `1918` seem to form a gap, for example. Before we bring this data into Tableau, let's add some placeholder rows to make this more sensible to handle.

* As we went over in our last studio, *always* create a copy of the raw data you are working with before making any changes. In this case, copy the first tab into a new tab.

![Copy Tab](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/03_Copy_Tab.png)

* Now, scroll to the very bottom of the `Year` column. In the cell below the final date, `2016`, type the value of the _first_ date in the dataset: `1903`.

![First Date](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/04_First_Date.png)

* Holding `option / alt` on Mac, or `ctrl` on Windows, click and drag this cell down until you reach `2016` as a filled-in value. The goal is to populate a column below the filled-out date column with the entire range of numbers between these two values.
* Once you have done this, highlight all of the columns containing your data. Navigate to `Data > Sort` in the top menu.
* Select `Year` as your column. Select `Values` for `Sort On`, and `Smallest to Largest` for `Order`.

![Sort By](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/05_Sort_By.png)

* Click `OK`. The data should now be interspersed with the column of dates that you created.

![Sorted](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/06_Sorted.png)

* We will not remove duplicate values. Select your entire dataset. Navigate to `Data` in the top navigation bar. Select `Table Tools > Remove Duplicates`. 

![Remove Duplicates](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/07_Remove_Duplicates.png)

* Select the column that contains your duplicates. In this case, that is the `Year` column -- `Column A`.

![Column with Duplicates](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/08_Column_with_Duplicates.png)

* Click `OK`. The gaps in your dataset should now be filled out with blank rows.

![Filled Out](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/09_Filled_Out.png)

#### Importing data into Tableau

* Open up a new workbook in Tableau Public. 
* Click `Connect > To a File > Microsoft Excel`.
* Navigate to your file, and click `Open`.

![Import Data](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/10_Import_Data.png)

* Once your data loads, you should see a preview that looks similar to what we viewed in Excel:

![Preview Data](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/11_Preview_Data.png)

* Check your variables to make sure they look as you expected them to. If the `Year` column was imported as a string, change it now to a whole number (`Number (whole)`). Do not change it to a `Date` or `Date & Time` value -- the types of visualizations we are making will work more easily with a simple data, without us trying to extrapolate a time and day for each one. 

### Visualizing data
#### Simple time series

We will start with something simple. A line chart is often the most effective way to visualize change over time. As our first graphic, let's create a line chart (with `year` along the x-axis) that visualizes the winners' average speeds over time. 

* Drag `Year` to the `Columns` shelf. By default (for my version of Tableau, at least), I get a series of ticks.

![Year Alone](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/12_Year_Alone.png)

* Now, drag `Winner's avg speed` from the `Measures` section to the `Rows` shelf. Tableau should automatically generate a line chart. If it did not, in the `Marks` dropdown menu, select `Line`. 
* Your chart should now be a line chart.

![Line Chart](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/13_Line_Chart.png)

* Note the gaps in the chart that represent the null rows we added. 
* Adjust the line width as needed. Give the chart a title, and edit the axis labels to include units.

![Line Chart Final](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/14_Line_Chart_Final.png)

#### Connected scatterplot

This time, we will try representing this data in a different manner, using a [connected scatterplot](http://www.thefunctionalart.com/2012/09/in-praise-of-connected-scatter-plots.html). A connected scatterplot breaks up the typical linearity of time series displays and gives the viewer a _path_ to follow. 

* Create a new sheet in Tableau.
* Drag `Winner's avg speed` from the `Measures` section to the `Rows` shelf.

![Average Speed Alone](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/15_Average_Speed_Alone.png)

* Now, drag `Total distance (km)` to the `Columns` shelf, to create an extremely simple scatterplot.

![Simple Scatterplot](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/16_Simple_Scatterplot.png)

* Navigate to the dropdown in the left `Marks` panel. Its default selection is `Automatic`. Open this menu up and select `Line` instead. The style of the point in the scatterplot should change slightly to have a solid fill.

![Change to Line](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/17_Change_to_Line.png)

* Now comes a bit of maneuvering. Grab the `Year` dimension from the top of the left panel, and drag it over to the `Path` tile in the `Marks` panel.

![Drag to Path](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/18_Drag_to_Path.png)

* A line connecting each of the scatterplot points should now appear. The dots are connected in the numerical order of the year values.
* Because this resultant bundle of lines is a little far away, let's zoom in more closely on the data itself by manipulating the x- and y-axis scales.
 * Double-click on the `Winner's avg speed` axis to bring up a dialog. 
 * _Unclick_ the `Include zero` checkbox.
 * Click `OK`.

![Edit Y-Axis](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/19_Edit_Y-Axis.png)

* The chart should scale accordingly. Now, do the same for the x-axis.

![Centered Data](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/20_Centered_Data.png)

* Now, let's add another dimension to this chart, and color different segments by `Starting country`. Find `Starting country` under the `Dimensions` panel in the left, and drag it to the `Color` tile in the `Marks` panel.

![Colored by Country](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/21_Colored_by_Country.png)

* Click `Edit Colors...` to customize your category colors.

![Color Editor](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/22_Color_Editor.png)

* Click any individual category (country name) to bring up a color wheel, or select a palette of your choice.
* To make this chart easier to read, click on the `Color` tab again, and select the middle option in the `Markers:` row to make data points appear.
* Reduce the line width of the chart by adjusting the `Size` tile.
* Adjust your axis labels to include units, and give the chart a sensible title.

![Final Scatter](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/24_Final_Scatter.png)

#### Animated Scatterplot

Now, let's use _motion_ to depict changes over time, by creating a short, simple animation that paints in data points over time.

* Open a fresh tab in your Tableau workbook.
* Drag `Finishers` to the `Columns` shelf.
* Drag `Entrants` to the `Rows` shelf.

![Scatter Setup](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/25_Scatter_Setup.png)

* To break out this single point into a different point for every row in the dataset, drag `Year` from the `Dimensions` section in the left panel to the `Marks` panel.

![Scatter by Year](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/26_Scatter_by_Year.png)

* Let's add another dimension to this scatterplot, and color the points by the nationality of the winner for each year. To do this, drag `Winner's Nationality` to the `Color` tile in the `Marks` panel.

![Color by Nationality](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/27_Color_by_Nationality.png)

* Now, to pack even more information into this scatterplot, let's size the circles by the winner's average speed. Drag `Winner's avg speed` to the `Size` tile in the `Marks` panel.

![Size by Speed](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/28_Size_by_Speed.png)

* In the top right of the legend that appears to define the different size buckets, click the dropdown arrow to and choose `Edit sizes...`.

![Customize Sizes](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/29_Customize_Sizes.png)

* A new modal dialog should open. To make these sizes more distinct from one another, choose `By range` under the `Sizes vary:` menu.

![Sizes by Range](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/30_Sizes_by_Range.png)

* Click `OK`.
* In the `Size` tile of the `Marks` panel, feel free to drag the slider down or up to get the right spread of sizes for your display.

![Slide Sizes](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/31_Slide_Sizes.png)

* Now, let's zoom in on the data even further. Double-click the y-axis to bring up an axis customization dialog. 
* Uncheck `Include zero`.

![Axis Customization](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/32_Axis_Customization.png)

* Click `OK`.
* Do the same thing for the x-axis. 
* Now that the data is more in focus in the chart body, drag `Year` up to the `Pages` panel to make a "player" appear in the bottom right corner.

![Play by Year](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/33_Play_by_Year.png)

* In this player control, click `Show history` to bring up a display configuration control.
	* Under `Marks to show history for`, select `All`.
	* Under `Show`, select `Marks`.

![Show History](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/34_Show_History.png)

* In the player control, use the right trio of icons to control the speed of the animation. Click the play button to test it out. The marks should progressively paint in as the player cycles through the different years.
* Give your chart a title, and add any final polish.

![Animated Final](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/35_Animated_Final.png)

#### Parallel Coordinates

For this final visualization, we will be making a [parallel coordinates](https://en.wikipedia.org/wiki/Parallel_coordinates) chart. This technique is useful for visualizing multivariate data. This type of chart is related to a typical time series visualization, only it does not represent time along the x-axis. As such, playing around with the order of dimensions can reveal interesting patterns.

* Open up another fresh tab in your Tableau workbook. 
* Drag `Measure Names` from the `Dimensions` area in the left panel to the `Columns` shelf.
* Drag `Measure Values` from the `Measures` area in the left panel to the `Rows` shelf. As you can see, all measures names are now visible along the x-axis in bar chart format, with the sum or average of each measure represented along the same y-axis.

![First Bars](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/36_First_Bars.png)

* In the `Marks` dropdown, instead of `Automatic`, select `Line`.

![First Line](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/37_First_Line.png)

* We only see a single line here. To break these out into the individual rows in the dataset, drag `Year` from the `Dimensions` area into the `Marks` panel.

![Parallel All Bad](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/38_Parallel_All_Bad.png)

Okay! Now we're getting somewhere. However, even though our rows are broken out as individual lines, there are a few problems with this display. 

* First, there are variables here that do not make sense to compare along the same scale as the others. Remove the following from the `Measure Values` panel:

 * `SUM(End Date)`
 * `AVG(Finishing city Latitude)`
 * `AVG(Finishing city Longitude)`
 * `SUM(Number of Records)`
 * `SUM(Start Date)`
 * `AVG(Starting city Latitude)`
 * `AVG(Starting city Longitude)`

![Filtered Down](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/39_Filtered_Down.png)

* Second, each included field is on a different scale, meaning we cannot meaningfully compare values from one to the next. We must normalize our data in order for this to work. To do this, we will be creating _new_ fields for each field included in the display. Each new field will map the values of the original field to a scale of 0-1. Navigate to the top right corner of the `Dimensions` area in the left panel.
* Select `Create calculated field...`

![Select Calculated Field](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/40_Select_Calculated_Field.png)

* A new window will pop up. This is where we will type our formula. We will start by creating a new field for the `SUM(Entrants)` Measure. 
 * Name the calculation "Normalized Entrants".
 * In the calculation area, type the following:

 ```
 (SUM([Entrants])- TOTAL(MIN([Entrants]))) / (TOTAL(MAX([Entrants])) - TOTAL(MIN([Entrants])))
 ```

![Field Formula](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/41_Field_Formula.png)

* Click `OK`. The new `Normalized Entrants` field should appear in the `Measures` area of the left panel.
* Now, remove `SUM(Entrants)` from the `Measure Values` panel.
* In its place, add the new `Normalized Entrants` field.

![Normalized Added](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/42_Normalized_Added.png)

* Repeat these steps for the remaining fields (`Finishers`,`Number of stages`, `Total distance (km)`, and `Winner's avg speed`). Each time you create a new field, be sure to switch out `[Entrants]` for the name of the variable you are normalizing. Your resultant graphic should look something like this:

![All Normalized Added](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/43_All_Normalized_Added.png)

* Extend the width of your chart.
* In the `Size` tile of the `Marks` panel, adjust the line width to be smaller.

![Thinner Lines](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/44_Thinner_Lines.png)

* To add more dimension to this chart, let's color the lines by the nationality of the winner for each year. Drag `Winner's Nationality` from the `Dimensions` area of the left panel to the `Color` tile in the `Marks` panel.
* Open up the filter for `Winner's Nationality` to hide `Null` and `Results voided` values.

![Filter Nationality](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/45_Filter_Nationality.png)

* Try playing around with the order of the normalized attributes and the coloring of the lines. Once you are satisfied, add a title to your chart and save.

![Parallel Coordinates Final](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Summer/Studios/Images/02/46_Parallel_Coordinates_Final.png)
