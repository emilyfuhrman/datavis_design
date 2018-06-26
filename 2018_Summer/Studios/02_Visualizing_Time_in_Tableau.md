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

As we can see, this dataset includes information about every winner of the Tour de France since 1903: 
 * Year
 * Winner's average speed (km/h)
 * Total distance (km)
 * Number of stages
 * Finishers
 * Entrants
 * Winner
 * Winner's nationality
 * Winner's team
 * Start date
 * End date
 * Starting city
 * Starting city latitude
 * Starting city longitude
 * Starting country
 * Finishing city
 * Finishing city latitude
 * Finishing city longitude

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
