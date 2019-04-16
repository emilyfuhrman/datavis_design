## Studio 09 - Custom Marks: Creating a Hexmap in Tableau

This studio builds upon the data we worked with in [Studio 6](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/06_Creating_a_Choropleth_Map_in_Tableau.md), wherein we used teenage poverty data to build choropleth maps in Tableau. Choropleth maps can overemphasize larger regions and underemphasize small ones, because they rely on preexisting geographic boundaries. One way to control for this effect is to use a hexmap, which keeps the size of each geographic boundary fixed.

Today, we will run a state-level comparative analysis of the teenage U.S. population living in poverty from the 1999 and 2016 American Community Surveys. Instead of choropleth maps, however, we will build hexmaps. 

### Datasets

We will be using two datasets for this studio:

ACS Teenage Poverty 1999/2016 - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Data/09/ACS_Teenage_Poverty_US_2016_1999.xls). (This dataset comes from the U.S. Census Bureau State/County Poverty Universe Data.)
Hexmap Plot - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Data/09/hexmap_plots.xlsx). These contain coordinates to position each state on a coordinate plane.

### Importing data

* Open Tableau and connect your data set `ACS_Teenage_Poverty_US_2016_1999` using the Microsoft Excel option.
* In the left panel, click `Add` to add a new connection. Select `hexmap_plots`, also using the Microsoft Excel option.

![Add](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/09/00_Add.png)

* Choose a `Left` join from the window that pops up. Here, we specify the columns we want to use to perform a join between these two datasets.
	* In the `Data Source` column, select `State Postal Code`.
	* In the `Sheet11` column, select `Abbreviation`. This will join the two datasets on the columns in each containing abbreviations for each state (for example, `NY`).

![Left Join](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/09/01_Left_Join.png)

### Adding tile coordinates

* Navigate to `Sheet1`. We will first add our state coordinates to a coordinate plane, to begin to set up the canvas for our hexmap.
* From the left panel, drag `Column` to the Columns shelf. Choose AVG for the aggregation.

![Column AVG](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/09/02_Column_AVG.png)

* Drag `Row` to the Rows shelf. Choose AVG for the aggregation.
* Drag `Abbreviation` to Label. You should now see an upside down United States laid out on a coordinate plane, like so:

![State Coords](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/09/03_State_Coords.png)

* The upside down-ness is due to the coordinates from our HexmapPlot.xlsx file where the states in the north have a lower value than those in the south. To correct this, we simply need to reverse the axis for the “Row” value. Double-click the y-axis, and check `Reversed` under the `Scale` section:

![Reverse Scale](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/09/04_Reverse_Scale.png)

This should set your states rightside up.

![Rightside Up](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/09/05_Rightside_Up.png)

### Adding a custom shape

At this stage, we would like to replace the default circles plotted on this grid with a hexagon shape. Tableau enables you to upload and color custom shapes. It is recommended you use a `PNG` file, which supports transparency, because otherwise Tableau will include a white box around any image you upload. For today's purposes, you may access a premade hexagon shape [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Assets/09/inverted_hex.png).

* First, we need to add this to the Tableau application folder so it can be accessed from within the app. This is typically called `My Tableau Repository`. On a Mac, this lives in my `Documents` folder. Navigate to the folder.
	* Locate the `Shapes` folder.
	* Create a new folder inside `Shapes` called `Custom`.

	![Custom Shapes Folder](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/09/07_Custom_Shapes_Folder.png)

	* Add `inverted_hex.png` to that folder.
* Return to Tableau. Now, in the left `Marks` panel, change marks type to `Shape`.

![Marks to Shape](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/09/06_Marks_to_Shape.png)

* Click the `Shape` tile and select `> More Shapes...`.
* In the menu under `Select Shape Palette`, you should now see your `Custom` folder as an option. Select it.
* Click the hexagon under the menu to select it.
* Click `Apply`. The points in your grid should now update to be hexagons.
* Click `OK` to close the window.

![Hexagon Beginnings](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/09/08_Hexagon_Beginnings.png)

### Adjust size

* In the `Marks` panel, select the `Size` tile and adjust size manually until the points form a honeycomb shape. You will want to minimize the amount of whitespace between objects.

![Adjust Size](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/09/09_Adjust_Size.png)

### Add color

* Take the `1999 Poverty Percentage, Age 5-17` and drop it on the `Color` tile. Rather sticking to the default color palette, try applying the same color palette you used for the previous studio.

![Adjust Color](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/09/10_Adjust_Color.png)

* Manually set the range of the color scale to go from `0.45` to `54.00`.

### Format labels

* To improve readability, we want each state label to lie directly on top of each hexagon. Select the `Label` tile in the `Marks` panel.
* Set vertical and horizontal alignment to `Center`.

![Center Labels](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/09/11_Center_Labels.png)

* Check the box to allow labels to overlap other marks (they won't).

![Overlap Labels](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/09/12_Overlap_Labels.png)

### Clean up

* There is a lot of unnecessary 'ink' in this composition. Let's clean it up:
	* Remove all grid lines (Hint: try navigating to the top menu and selecting `Format > Format Lines`)
	* Remove zero line
	* Remove all ticklines
	* Remove axis labels
	* Unshow headers

___
**Map #2:_** Repeat the above steps for the 2016 data.
___

### Create a new dashboard

* As before, we would like our final state to be a comparative dashboard that places 1999 and 2016 maps side by side. Create a new dashboard to start building this space.
* In the `Size` menu, select `Fixed Size`.
* Choose dimensions that make sense. `1200` width and `800` height work pretty well on a 15-inch Macbook.
* Bring your first sheet into the new dashboard. You will notice that the dimensions of the hexagons look different than they do in your sheet. Do not adjust the sizes yet; just drag the legend to the bottom of the map.
* Bring your second sheet into the dashboard as well, and do the same.
* Change the color scale of each to a `Stepped` scale with 9 buckets.
* Adjust the dimensions of each map, and the sizes of the hexagons in each sheet as needed, to produce a display like the one below. 

![Side by Side](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/06/13_Side_by_Side.png)

How do these maps compare in readability to those we created in [Studio 6](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/06_Creating_a_Choropleth_Map_in_Tableau.md)? What might their strengths and weaknesses be?