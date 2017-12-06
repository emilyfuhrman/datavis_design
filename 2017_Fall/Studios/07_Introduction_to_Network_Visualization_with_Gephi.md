## Studio 07 - Introduction to Network Visualization with Gephi

This studio details the process of creating a customizable network visualization using [Gephi](https://gephi.org/users/download/). Gephi is a free and open source graph visualization platform, which can export to both a static SVG and an interactive HTML5 page. We will first walk through the process of importing and customizing a visualization of a simple dataset, originally culled from [this](http://www.briansarnacki.com/gephi-tutorial/) tutorial by Brian Sarnacki. We will next walk through the process of importing and customizing a more complex dataset containing social media data. Inspired by [this](http://www.martingrandjean.ch/introduction-to-network-visualization-gephi/) tutorial, which was originally put together by digital humanist Martin Grandjean, we will explore Gephi's network analysis capabilities and created a more intricate social network graph. 

### Datasets

We will be using three datasets for these visualizations (one for the first network, and two for the second):

* (Network 1) 1902 Banks and Bankers in Grand Rapids, MI - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Data/07/01_1902_Banks_and_Bankers.csv)
* (Network 2) Twitter Connections (Edges) - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Data/07/02_Twitter_Edges.csv)
* (Network 2) Twitter Connections (Nodes) - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Data/07/02_Twitter_Nodes.csv)

### Creating a basic network diagram
#### Preparing data for Gephi

Gephi's requirements for importing data are relatively simple. Given the current format of this CSV file, we just need to change the names of a couple columns in order to streamline the upload process. This can be done using Excel, Google Sheets, or just a simple text editor. Here, we will walk through the process as it looks in Google Sheets. 

* Download the CSV file posted [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Data/07/01_1902_Banks_and_Bankers.csv).
* Open up [Google Sheets](https://docs.google.com/spreadsheets) and log in with your credentials.
* Once you have logged in, start a new blank spreadsheet. You should now see a blank grid, named `Untitled Spreadsheet`. 

![Blank Google Sheet](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/01_Blank_Google_Sheet.png)

* We are going to import the CSV containing the "Banks &amp; Banking" data. Go to `File > Import... > Upload`. Select the CSV from your desktop.

![Import CSV](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/02_Import_CSV.png)

* An `Import File` dialog will pop up. The default `Import action` should be `Replace spreadsheet`, while the default value for `Separator Character` should be `Detect automatically`. 
* If these settings look correct, click `Import`. Your spreadsheet should now be populated with the data in the CSV.

![Imported Data](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/03_Imported_Data.png)

* To help guide the import process, we are going to change the `Name` column to `Source` and the `Bank` column to `Target`. This will let Gephi set both the banks and the bankers they are associated with as nodes, but will give the software a sense of directionality that sets banks as the central location to which bankers are associated.

![Changed Columns](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/04_Changed_Columns.png)

* These are the only things we need to change. Now, select `File > Download as... > Comma-separated values`. This will download the current tab as a CSV, which we can import into Gephi.

#### Visualizing data using Gephi

* Make sure you have downloaded and installed [Gephi](https://gephi.org/users/download/). Once the software is set up, go ahead and open a new blank project. The first thing you should see is a blank `Overview` tab. 

![Gephi Default](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/05_Gephi_Default.png)

* To import your updated CSV, go to `File > Import spreadsheet...`. 
* The window that pops up will require you to locate the file. Browse your desktop to select the CSV. Once you have selected the CSV, the dialog should look something like this:

![Spreadsheet Import](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/06_Spreadsheet_Import.png)

* Set the `Seperator:` menu to `Comma`. 
* Set the `As table:` menu to `Edges table`.
* Set the `Charset:` menu to `UTF-8`.
* Click `Next >`.
* Double check the data types under each menu. If everything looks okay, click `Finish`. A tangled initial graph should appear on your screen.

![Initial Graph](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/07_Initial_Graph.png)

* The first thing we want to do is get a clearer picture of what this data looks like. We can control the organizing principle of the network by navigating to the `Layout` tab. (Read more about force-directed graph drawing [here](https://en.wikipedia.org/wiki/Force-directed_graph_drawing).) Under the `Choose a layout` menu, try selecting `Force Atlas`. Hit `Run`. 

![Force Atlas](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/08_Force_Atlas.png)

* This is interesting. We can clearly see some distinct clusters form around several nodes. Zoomed this far out, it is hard to see a pattern. Even zooming in, the network is rather dense. 

![Force Atlas Dense](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/09_Force_Atlas_Dense.png)

* Let's try something else. Go back to the `Choose a layout` menu and select `Fruchterman Reingold`. 

![Fruchterman Reingold](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/10_Fruchterman_Reingold.png)

* This gives us a significantly different result. The network expands to fill a circle, spreading out the nodes to make each one visible. It is less strong in emphasizing clusters, however. Instead, scroll to the very bottom of the menu and select `Yifan Hu`. 

![Yifan Hu](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/11_Yifan_Hu.png)

* This is more like it. We can clearly see the different clusters that form from the uploaded data, but do not lose sight of the individual nodes. Feel free to play around with other layouts and settle on one that you like. 
* Play around with the values in the `Yifan Hu's properties` panel to get a distribution that looks right.
* Now, let's add some styling to differentiate the nodes from one another. Go to the `Appearance` panel, and select the `Nodes` sub-tab. We will first use color to highlight the nodes that are more "inward" than the others. Remember, banks are nodes that have many nodes connected to them. Bankers are nodes that are (likely) connected to only one bank. In this case, banks are the nodes that will have more connections than banks, so they should appear more "inward". Make sure the palette icon at the top of the panel is selected.
* Select the `Attribute` tab. 
* In the `Choose an attribute` menu, select `In-Degree`. 
* Hit `Apply`. This should color the more connected nodes in a saturated green, while the less connected nodes are a lighter green.
 
![Network Color](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/12_Network_Color.png)

* Click the colored patch to the right of the default gradient to play around with different gradients.
* We will next adjust the size of the nodes to even more prominently highlight the difference between banks and bankers. In the `Appearance` panel, select the concentric circles icon. 
* Select the `Attribute` tab. 
* In the `Choose an attribute` menu, select `In-Degree`. This will size the circles according to the same measure of "inward"-ness. 
* Play around with the min and max values to get a reasonable layout. I set mine to `10` and `30`.

![Network Size](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/13_Network_Size.png)

* To begin to polish your visualization, navigate to the `Preview` tab. 
* Hit `Refresh` at the bottom of the left panel to get the network to display. 
* Play around with the numerous settings on the left to try out the different stylistic effects. 

![Preview Styling](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/14_Preview_Styling.png)

* One thing that this network could use is labels. In order to add them, we need to tweak our uploaded data. Navigate to the `Data Laboratory` tab.
* Along the bottom panel of buttons, click `Copy data to other column`. 
* Select `Id`.

![Data Laboratory](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/15_Data_Laboratory.png)

* In the `Copy to` dialog, select `Label`.
* Hit `OK`. 
* The `Label` column should now be populated with text from its corresponding value in the `Id` column. 

![Label Copy](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/16_Label_Copy.png)

* Now, navigate back to the `Preview` section. 
* In the `Node Labels` section in the left panel, check `Show Labels`.
* Hit `Refresh`. 

![Labels](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/17_Labels.png)

* The labels are proportionately sized, and may appear a bit cluttered. Try playing around with font settings to make them more readable.
* Once you are satisfied with your network, navigate to the `Export` option at the bottom of the left panel. Save your file in the format of your choice.

![Final](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/18_Final_01.png)

### Creating a complex social network graph

For this section, we will be creating a much more complex network from a random sampling of Twitter "following" relationships. It will require working with two separate datasets that we import one after another.

* Download data from both [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Data/07/02_Twitter_Edges.csv) and [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Data/07/02_Twitter_Nodes.csv). You will notice that one has `Edges` in the file extension, while one has `Nodes`.
* First, let's open up each dataset in a text editor to get a better idea of what each one includes.

![Raw CSV](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/19_Raw_CSV.png)

* We can see that `02_Twitter_Edges.csv` has `Source` and `Target` IDs, in a similar format to the data we just worked with. `02_Twitter_Nodes.csv` goes into a bit more depth. It includes each of the IDs that appear in the edges file, but includes additional attributes associated with each of them that will give us more visualization options once the data is imported. 
* Open up a new project in Gephi. 
* As before, to import your updated CSV, go to `File > Import spreadsheet...`.
* We will import `02_Twitter_Nodes.csv` first. Select it for import.
* Set the `Seperator:` menu to `Semicolon`.
* Set the `As table:` menu to `Nodes table`.
* Set the `Charset:` menu to `UTF-8`.
* Hit `Next >`.
* At the bottom of this pane, check the `Force nodes to be created as new ones` box.
* Click `Finish`.
* At this point, make sure to mark *all* imported attributes as `String`, instead of `Integer`. 

![Imported Nodes](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/20_Imported_Nodes.png)

* If everything went smoothly, you should see a square of new nodes, automatically positioned. Once more, select `File > Import spreadsheet...` for the `02_Twitter_Edges.csv` file.

![Import Edges](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/21_Import_Edges.png)

* Set the `Seperator:` menu to `Semicolon`.
* This time, set the `As table:` menu to `Edges table`.
* Set the `Charset:` menu to `UTF-8`.
* Hit `Next >`.
* Here, *uncheck* `Create missing nodes`. We have a separate nodes file, and do not need this option selected.
* Click `Finish`. You should now see a dense, unreadable brick.

![All Imported](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/22_All_Imported.png)

* We can now begin adjusting this visualization to make it more readable. In the `Appearance` panel, navigate to the `Nodes` tab.
* Select the concentric circles icon to get to the size control panel. 
* Select the `Ranking` sub-tab.
* In the menu, select `Degree`.
* Change the minimal and maximal values to `10` and `150`.
* The `Spline...` menu allows you to control the size scaling between the smallest and largest nodes. Keeping it at its default settings is fine. Play around with the settings if you like.
* Click `Apply`.

![Size Applied](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/23_Size_Applied.png)

* We still have a dense mass, but with some visible diameter changes in the nodes. As before, navigate back to the `Appearance` panel.
* In the `Layout` section, this time select `Fruchterman Reingold`.
* Hit `Run`. Slowly, the network should begin to animate. It will gradually arrive at a stable state, with visible clusters. Hit `Stop` when it gets to this point.

![Fruchterman Reingold](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/24_Fruchterman_Reingold.png)

* We can see a shape here, but it may not be as clear as it could be. Let's try instead `ForceAtlas 2`.

![Force Atlas 2](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/25_Force_Atlas.png)

* In the `Layout` panel, set `Scaling` to `10`.
* Check `Prevent Overlap`.
* Let the graph run until it has mostly reached a resting point. 
* Adjust the colors of the nodes and links for readability. 

![Converged](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/26_Converged.png)

* In the `Nodes` tab of the `Appearance` panel, navigate to the `Partition` sub-tab. Here, we can color the nodes based on the additional attributes supplied by `02_Twitter_Nodes.csv`. Try selecting the `Sex` attribute.

![Colorized](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/27_Colorized.png)

* You could also try coloring by "inward"-ness, as we did in the previous network diagram. This would be located under the `Ranking` sub-tab.
* Adjust the coloring of the edges as needed.
* Once you are ready, navigate to the `Preview` tab for final polish and image export.

![Colorized](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/28_Preview.png)

* Your image may look different than the editable network. Continue playing around with styles until you get a look and feel that you like. 
* Before closing this project, let's run some quick statistical analysis to try and detect different communities within the data. In the *right* panel, click the `Statistics` tab.
* In the `Modularity` row, hit `Run`. [Modularity](https://github.com/gephi/gephi/wiki/Modularity) measures how well the network decomposes into modular communities.

![Modularity](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/29_Modularity.png)

* Choose a resolution (between 0.1 and 2.0) and click `OK`.
* Close the automatically-generated modularity report.
* Now, navigate to the `Appearance` panel on the left, and select the `Nodes` tab.
* Select the `Partition` sub-tab.
* In the `Choose an attribute` menu, you will now see an option labeled `Modularity Class`. Select it.
* Adjust the colors if you like, and click `Apply`.
* In the `Preview` tab, you will now see a big rainbow network.

![Preview Final](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/30_Preview.png)

* In the `Preview Settings` panel, try adjusting the opacity of your lines, the border of your nodes, and so on. You should end up with something like this:

![Final](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Fall/Studios/Images/07/31_Final.png)