## Studio 02 - Exploring, Filtering, and Joining Data in Tableau

This studio will explore the process of exploring and manipulating data in Tableau.

### Datasets

We will be using two datasets for this studio:

* bnames2 - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Data/02/bnames2.csv.bz2). This dataset consists of the top 1000 male and female baby names in the U.S., from 1880 to 2008. It contains 258,000 records with five variables: `year`, `name`, `soundex`, `sex`, and `prop`. The `prop` variable refers to the proportions of people of that gender with that name born in that year. The `soundex` variable contains a phonetic code designed to index names based on sound similarity, irrespective of spelling variations.
* births - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Data/02/births.csv). This dataset contains 261 records with three variables: `year`, `sex`, and `births`.

### Tableau Public
#### Importing your data

* Open up Tableau Public.
* Click `Connect > To a File > Text File`.
* Select the `bnames2.csv` file.

![Import Data](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/01_Import_Data.png)

* Ensure that the imported variables are as follows: `year`, `name`, `prop`, `sex`, and `soundex`. 

![Import Preview](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/02_Import_Preview.png)

* Because `Year` has been imported as a string, we need to manually change it to a date. Click on the small `#`. 
* Click `Date`.

![Change to Date](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/03_Change_to_Date.png)

* The values in the column should update to be in date format. Even if the exact days are not necessarily accurate, this will facilitate any time-based visualizations we need to create.

![Date Changed](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/04_Date_Changed.png)

#### Plotting the popularity of names over time

* Let's start by plotting the popularity of the name `Otto` over time. From the `Dimensions` panel on the left, drag `Year` to the `Columns` bar.
* Drag `Prop` to the `Rows` bar.

![Prop Unfiltered](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/05_Prop_Unfiltered.png)

* On its own, this variable does not make much sense. By default, Tableau sums up the various values across _all_ names for this measure. To get a closer look at a particular name, drag the `Name` dimension to the `Color` tile in the `Marks` panel.
* This will prompt Tableau to ask us to filter down the names to a mangeable few, because the thousands of names the dataset includes will not produce a readable graph. 

![Filter Prop](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/06_Filter_Prop.png)

* Click `Filter and then add`.
* To isolate only the records for the name `Otto`, select the `General` subtab in the next screen.
* Choose `Select from list`.
* Click the `None` button to start with a blank canvas.
* In the top yellow search bar, type the name `Otto` (or, if you are interested in a different name, type that one).
* Select the matching result.

![Otto Filter](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/07_Otto_Filter.png)

* Click `OK`.

![Otto Plot](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/08_Otto_Plot.png)

* The line chart will update to only include data associated with the name `Otto`. 
* In the top bar, set the `Year` value to be a `Dimension`. This will avoid any default aggregation Tableau is inclined to perform.

![Set to Dimensions](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/09_Set_to_Dimension.png)

* The plotted points should now shift automatically to become `Shape` in the `Marks` panel. Open up the menu to change this back to line, if you like. 

![Shapes to Line](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/10_Shape_to_Line.png)

Right away, we can see that the name Otto peaked sometime in the 1890's, and has been on a steady decline in popularity since.

![Otto over Time](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/11_Otto_Over_Time.png)

* Let's try another name: this time, "Michelle". Follow the same procedure as before, only create a dataset for which the `Name` variable is equal to `Michelle`. Plot that dataset:

![Michelle Plot](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/12_Michelle_Plot.png)

* We see a very jagged line. If you manually changed the marks in this plot from `Shape` to `Line`, change back to `Shape`.

![Michelle Dot](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/13_Michelle_Dot.png)

Interesting! And more readable. This plot makes it clear that there are two clusters of data. The reason for this is that the name Michelle has been used in the past for both boys and girls. This accounts for the jagged sawtooth pattern on the original plot. Now, if we want to create a line plot visualizing this, we just need to grab the `Sex` dimension and drag it over to the `Color` tile on the `Marks` panel.

![By Sex](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/14_By_Sex.png)

* Nice. We can now clearly see that Michelle as a female name peaked around 1970, around the same period it surfaced as a male name.

![Polished Chart](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/15_Polished_Chart.png)

#### Plotting the popularity of names that sound like a name over time

* Now, let's try to use the `Soundex` variable to plot the popularity over time of names that sound like Otto. Return to your `Otto` plot (or create it again).
* Drag the `Soundex` dimension from the left panel to the `Detail` tile in the `Marks` panel.
* In the top right `Show Me` menu, select the top left option to display a table.

![Otto Table](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/16_Otto_Table.png)

* From here, we can see that the value for `Soundex` is `O300`.
* Remove both `Soundex` and the `Name` dimensions from your display, so that only `Year` and `Prop` are visible. 
* Drag the `Soundex` dimension to the `Color` tile in the `Marks` panel.
* When prompted to filter the data, again choose `Select from list`.
* Click the `None` button to deselect all options.
* In the search field, enter `O300`. Note that the first character is an `O`, not a `0`!

![Otto Soundex](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/17_Otto_Soundex.png)

* In the resultant plot, change your `Mark` type to `Shape`, and reduce the size.
* Drag the `Name` dimension to the `Detail` tile.

![Otto Soundex Plot](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/18_Otto_Soundex_Plot.png)

And we can see a pattern similar to the one we saw to our original "Otto" line plot. 

___
**_PAUSE:_** Clear your workspace, or open a new tab. Now, run through the same process on a different name, and see if you can uncover any interesting patterns.
___

#### Joining another dataset

Now, suppose we would like to explore trends in the total number of people with specific names across all of the years. The `bnames2` dataset only contains proportions. To be able to explore this question further, we need total number of births by year. Enter the `births` dataset. We can combine this dataset with our `bnames2` dataset to give our analysis more granularity.

* In the top left corner of the viewscreen, locate the icon that looks like a database with a `+` next to it.

![Add More Data](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/19_Add_More_Data.png)

* Select the `births.csv` dataset.
* In the preview screen, drag the `bnames2.csv` file to the same area.

![Join Datasets](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/20_Join_Datasets.png)

* We can see the data was automatically joined, but it needs a bit of help. First, set the variable type for `Year` in both datasets to `Date`.
* Next, click the join icon between the two datasets, and add an additional join clause that sets `Sex` in the data source equal to `Sex` in `bnames2.csv`.

![Join Clause](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/21_Join_Clause.png)

* Open up a new tab. To get a picture of what this dataset looks like, let's first plot the trends in total number of `births` across `sex` by `year`.

![Plot Births](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/22_Plot_Births.png)

#### Exploring name popularity in greater depth

* Open up another new tab.
* To delve more deeply into the popularity of the name Otto over time, let's compute an absolute count of the instances of `Otto` using the `prop` variable and the newly-joined `births` value. Since the `prop` variable represents the proportion of people of a given gender with a given name for a given year, multiplying `prop` by `births` for that year gives us an absolute number representative of the number of people with that name. In the top right corner of the `Dimensions` panel, select `Create Calculated Field...`.

![Create Calculated Field](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/23_Create_Calculated_Field.png)

* In the window that opens, name your new field (I called mine `tot`), and type `[births]*[Prop]` in the formula area below.

![New Field](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/24_New_Field.png)

* Now, let's plot the popularity of `Otto` as a line once again, though using `tot` on our y-axis instead of `prop`:

![Otto Absolute](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/25_Otto_Absolute.png)

* Okay! This paints a different picture. Otto is still declining in absolute terms, but we can see a small peak around ~1915. Now, polish up your chart by giving it an informative title and axis labels. 

![Otto Polish](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/26_Otto_Polish.png)

* Add an annotation by right-clicking in your workspace, and selecting `Caption`.

![Otto Caption](https://github.com/emilyfuhrman/datavis_design/blob/master/2018_Fall/Studios/Images/02/27_Otto_Caption.png)

___
**_PAUSE:_** Clear your workspace, or open a new tab. Now, run through the same process on a different name. Make sure to polish up your final chart with an informative title and subtitle. Email a screenshot of this chart to me as your participation for the day. 
___
