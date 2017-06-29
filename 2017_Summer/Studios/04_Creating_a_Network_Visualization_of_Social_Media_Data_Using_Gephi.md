## Studio 04 - Creating a Network Visualization of Social Media Data Using Gephi

This studio details the process of creating a customizable network visualization using [Gephi](https://gephi.org/users/download/). Gephi is a free and open source graph visualization platform, which can export to both a static SVG and an interactive HTML5 page. We will first walk through the process of importing and customizing a visualization of a simple dataset, originally culled from [this](http://www.briansarnacki.com/gephi-tutorial/) tutorial by Brian Sarnacki. We will next walk through the process of importing and customizing a more complex dataset containing social media data. Inspired by [this](http://www.martingrandjean.ch/introduction-to-network-visualization-gephi/) tutorial, which was originally put together by digital humanist Martin Grandjean, we will explore Gephi's network analysis capabilities and created a more intricate social network graph. 

### Datasets

We will be using three datasets for these visualizations (one for the first network, and two for the second):

* (Network 1) 1902 Banks and Bankers in Grand Rapids, MI - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Data/04/01_1902_Banks_and_Bankers.csv)
* (Network 2) Twitter Connections (Edges) - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Data/04/02_Twitter_Edges.csv)
* (Network 2) Twitter Connections (Nodes) - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Data/04/02_Twitter_Nodes.csv)

### Creating a basic network diagram
#### Preparing data for Gephi

Gephi's requirements for importing data are relatively simple. Given the current format of this CSV file, we just need to change the names of a couple columns in order to streamline the upload process. This can be done using Excel, Google Sheets, or just a simple text editor. Here, we will walk through the process as it looks in Google Sheets. 

* Download the CSV file posted [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Data/04/01_1902_Banks_and_Bankers.csv).
* Open up [Google Sheets](https://docs.google.com/spreadsheets) and log in with your credentials.
* Once you have logged in, start a new blank spreadsheet. You should now see a blank grid, named `Untitled Spreadsheet`. 

![Blank Google Sheet](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/04/01_Blank_Google_Sheet.png)

* We are going to import the CSV containing the "Banks &amp; Banking" data. Go to `File > Import... > Upload`. Select the CSV from your desktop.

![Import CSV](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/04/02_Import_CSV.png)

* An `Import File` dialog will pop up. The default `Import action` should be `Replace spreadsheet`, while the default value for `Separator Character` should be `Detect automatically`. 
* If these settings look correct, click `Import`. Your spreadsheet should now be populated with the data in the CSV.

![Imported Data](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/04/03_Imported_Data.png)

* To help guide the import process, we are going to change the `Name` column to `Source` and the `Bank` column to `Target`. This will let Gephi set both the banks and the bankers they are associated with as nodes, but will give the software a sense of directionality that sets banks as the central location to which bankers are associated.

![Changed Columns](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/04/04_Changed_Columns.png)

* These are the only things we need to change. Now, select `File > Download as... > Comma-separated values`. This will download the current tab as a CSV, which we can import into Gephi.

#### Visualizing data using Gephi

* Make sure you have downloaded and installed [Gephi](https://gephi.org/users/download/). Once the software is set up, go ahead and open a new blank project. The first thing you should see is a blank `Overview` tab. 

![Gephi Default](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/04/05_Gephi_Default.png)

* To import your updated CSV, go to `File > Import spreadsheet...`. 
* The window that pops up will require you to locate the file. Browse your desktop to select the CSV. Once you have selected the CSV, the dialog should look something like this:

![Spreadsheet Import](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/04/06_Spreadsheet_Import.png)

* Set the `Seperator:` menu to `Comma`. 
* Set the `As table:` menu to `Edges table`.
* Set the `Charset:` menu to `UTF-8`.
* Click `Next >`.
* Double check the data types under each menu. If everything looks okay, click `Finish`. A tangled initial graph should appear on your screen.

![Initial Graph](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/04/07_Initial_Graph.png)
































