## Studio 03 - Creating an Interactive Chart of Economic Census Data Using Plotly

This studio walks through the process of creating an interactive chart in [Plotly](https://plot.ly/) using Economic Census data. Plotly is a visualization platform with libraries adapted to JavaScript, Python, R, and MATLAB. More recently, it supports the quick creation of web-based interactive graphs without using code. 

### Datasets

We will be using one dataset for this map:

* Economic Census data - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Data/03/economicCensus_2002-2012.csv)

### Creating an interactive chart
#### Transforming raw data using Google Sheets

* Download the CSV file posted [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Data/03/economicCensus_2002-2012.csv).
* Open up [Google Sheets](https://docs.google.com/spreadsheets) and log in with your credentials.
* Once you have logged in, start a new blank spreadsheet. You should now see a blank grid, named `Untitled Spreadsheet`. 

![Blank Google Sheet](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/01_Blank_Google_Sheet.png)

* We are going to import the CSV containing Economic Census data. Go to `File > Import... > Upload`. Select the CSV from your desktop.

![Import CSV](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/02_Import_CSV.png)

* An `Import File` dialog will pop up. The default `Import action` should be `Replace spreadsheet`, while the default value for `Separator Character` should be `Detect automatically`. 

![Import File Dialog](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/03_Import_File_Dialog.png)

* If these settings look correct, click `Import`. Your spreadsheet should now be populated with the data in the CSV.

![Imported File](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/04_Imported_File.png)

* We are going to create a chart of the mean salary of each state. In order to do this, we will first need to create a column to hold calculated `Salary` values. Navigate to column `N`, and type `SALARY` in the header row.
* To calculate a `Salary` value for each row, we will divide the value in the `PAYANN` (Payroll) column by the value in the `EMP` (Employees) column, and multiply by `1000`. In cell `N2`, type `=(L2/M2)*1000`. Hit `Enter`.

![Spreadsheet Formula](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/05_Spreadsheet_Formula.png)

* A value should appear in the cell. To apply this formula to every row below the first row, double-click small blue box in the bottom right corner of the cell. The whole `Salary` column should now be populated.

![Populated Salary Column](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/06_Populated_Salary_Column.png)

* Since this data is in a flat format, we will need to create a [pivot table](https://en.wikipedia.org/wiki/Pivot_table) to help more clearly summarize the values we are interested in. To get started, click the top left corner so all of the data in your spreadsheet is selected. 
* Navigate to the `Data` menu in the top bar, and select `Pivot table...`.

![Pivot Table Menu](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/07_Pivot_Table_Menu.png)

* You should now see a new tab open, automatically titled `Pivot Table 1`. 

![Blank Pivot Table](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/08_Blank_Pivot_Table.png)

* Navigate to the `Report Editor` panel on the right. 
* In the `Rows` section, click `Add field`. 
* From the open menu, select `GEO.display.label`. All of the state names in the CSV should appear in the leftmost column.
* Now, in the `Values` section, click `Add field`. 
* Navigate to the bottom of the list and select the `SALARY` option.
* The default summarization for this section is `SUM`. However, we want the mean salary for each state. Open up the `Summarize by:` dropdown, and select `AVERAGE`. 

![Pivot Table in Progress](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/09_Pivot_Table_in_Progress.png)

* You will notice we have a number of errors in the `SALARY` column, which are due to missing payroll or employee values in the original CSV. To filter these out, go to the `Filter` section in the same right panel, and click `Add field`. 
* Select `SALARY`.
* The `Show:` menu is currently set to `All items`. Open the dropdown, and uncheck `(Blanks)` and `#VALUE!`. 

![Pivot Table Filter](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/10_Pivot_Table_Filter.png)

* Hit `OK`. The values should now look properly calculated.

![Pivot Table Filtered](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/11_Pivot_Table_Filtered.png)

* We will be downloading this data as a CSV. In order to ensure that Plotly can read it, we need to add a header row. Select the whole top row of the table, navigate to the `Insert` menu, and select `Row above`.

![Insert Row Above](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/12_Insert_Row_Above.png)

* Name the first row in column `A` `State`.
* Name the first row in column `B` `Avg. Salary`.
* Now, select `File > Download as... > Comma-separated values`. This will download the current tab as a CSV, which we can import into Plotly.

#### Visualizing transformed data in Plotly

* We will use Plotly's web-based interface to visualize this data. Navigate to [Plotly](https://plot.ly/), and select `Make a Chart`. You do not need a Plotly account for this studio, but you may make one if you are interested in privately publishing your chart.

![Plotly Home](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/13_Plotly_Home.png)

* You will be taken to the Plotly Graph Maker.

![Plotly Graph Maker](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/14_Plotly_Graph_Maker.png)

* At the top of the page, hit the `Import` button. 
* Select the `Upload` tab.
* Choose the CSV you downloaded from the Google Sheets pivot table tab. Once the import is complete, the data will appear in a new tab at the top of the page.
* To plot the data we imported, first find the `X` row in the small panel to the left of the blank chart. Select `Avg. Salary` from the dropdown.

![Plot Average Salary](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/15_Plot_Average_Salary.png)

* Now, find the `Y` row, and select `State`. You should get an unsorted scatterplot of state and average salary values.

![Plot State](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/16_Plot_State.png)

* Of course, the fact that this data is unsorted makes it difficult to read the chart. Helpfully, Plotly enables you to sort columns directly. Go to the top spreadsheet section of the window, find the `Avg. Salary` column, and select `Sort ascending`. The chart below should immediately reflect this.

![State and Salary Sorted](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/17_State_Salary_Sorted.png)

* You may notice that not all state names actually appear on the y-axis. Plotly automatically hides intermediary values, which works well for continuous numerical scales, if less well for categorical scales. In order to make all of the state names show, open the `Style` section in the left hand panel. 
* Click `Layout`.
* In the `Size` row, navigate to `Custom`.
* Increase the `Fixed Height` value to 1000.

![Increase Height](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/18_Increase_Height.png)

* Now, drag the y-axis down a bit so all of the state names appear in the space available. 

![Increased Height Drag](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/19_Increased_Height_Drag.png)

* You may use the `Style` panel to edit the title, margins, colors, and hover interaction of your chart. You can also drag the different axes to arrive at the range you want. Without an account, you should be able to download your chart to a range of different image formats. 
* You need a (free) Plotly account to save and publish your chart publicly. Here is what my final styled (looong) chart looks like, from the link provided:

![Final Chart](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/03/20_Final_Chart.png)

* From here I can export the chart to different data formats, or simply host it so that others can interact with it. 