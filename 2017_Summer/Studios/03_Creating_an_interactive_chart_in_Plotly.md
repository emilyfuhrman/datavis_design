## Studio 03 - Creating an Interactive Chart in Plot.ly with Economic Census Data

This studio walks through the process of creating an interactive chart in [Plot.ly](https://plot.ly/) using Economic Census data. Plot.ly is a visualization platform with libraries adapted to JavaScript, Python, R, and MATLAB. More recently, it supports the quick creation of web-based interactive graphs without using code. 

### Datasets

We will be using one dataset for this map:

* Economic Census data - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Data/03/economicCensus_2002-2012.csv)

### Creating an interactive chart using transformed data
#### Transforming raw data using Google Sheets

* Download the CSV file posted [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Data/03/economicCensus_2002-2012.csv) link.
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

























