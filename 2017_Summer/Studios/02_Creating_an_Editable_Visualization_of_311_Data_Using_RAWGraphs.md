## Studio 02 - Creating an Editable Visualization of 311 Data Using RAWGraphs

This studio details the process of generating an editable, vector-based visualization using [NYC OpenData](https://opendata.cityofnewyork.us/) and [RAWGraphs](http://rawgraphs.io/). RAWGraphs is an open source framework developed by [DensityDesign Research Lab](http://www.densitydesign.org/).

### Datasets

We will be using one dataset for this map:

* 311 Service Requests - Originally downloaded from [here](https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9/data)

### Generating an editable, vector-based visualization
#### Downloading 311 Data from the NYC OpenData portal

* Navigate to the [NYC OpenData portal](https://opendata.cityofnewyork.us/).

![NYC OpenData](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/02/01_NYC_OpenData_Home.png)

* Click on the `Data` tab. Here you can explore different datasets by category, by popularity, or by recency. 
* Today we will be working with the NYC 311 dataset. 311 is the complaint hotline for New York City, and the available dataset records every call made to 311 since 2010. Type `311` in the search bar, and hit `Enter`. 
* Click on the first result, `311 Service Requests from 2010 to Present`.

![311 Main](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/02/02_311_Main.png)

* [Here](https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9), you can see a great deal of information about this dataset: its attributes, its size, the frequency with which it is updated, its format. Scroll down to the `Table Preview` section to get a picture of what the data looks like in tabular format.

![311 Preview](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/02/03_311_Preview.png)

* Click `Explore Data`. Here, you can see the dataset in its entirety. You can also apply filters to the data to prepare it for download.

![311 Explore](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/02/04_311_Explore.png)

* On the right side of the page, you will see a `Filter` panel, with the `Filter` sub-section automatically selected. We will be using this section to isolate only complaints from the past week, to make the size of the dataset more manageable.
* Click the `Unique Key` field. This opens a menu containing all of the column headers in the dataset. 
* Select `Created Date`.
* Click the `is` dropdown menu, and select `is between`. Two fields, one for a start value and one for an end value, should automatically appear below.
* Click the first field to open a calendar picker. Navigate to and select June 11th, 2017.
* Click the second field to open a second calendar picker. Today's date should automatically be selected. Keep today's date.
* Once you click out of this view, the dataset on the left should update to contain only the rows to which the filters apply.

![311 Filter](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/02/05_311_Filter_Date.png)

* Now, click the blue `Export` button from the set of colorful buttons on the top right side of the table. Click `Download As > CSV`. This will download the filtered dataset in CSV format.
* Open up the downloaded CSV in Excel or Google Sheets. Before creating our visualization, we'll want to trim down the size of the dataset by deleting unnecessary columns.
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

![Excel](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/02/06_Excel.png)

#### Visualizing 311 data using RAWGraphs

* Navigate to the [RAWGraphs app](http://app.rawgraphs.io/). 

![RAWGraphs Home](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/02/07_RAWGraphs_Home.png)

* Here, you can copy/paste data directly into the text area, upload a file, connect to a URL (including public APIs), or try some of the samples that RAWGraphs already has prepared. Click the `Upload a file` option, and select your trimmed CSV. Within a moment or two, you should see the following success message:

![RAWGraphs Success](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/02/08_RAWGraphs_Success.png)

* Below your uploaded data is a selection of different visualization methods. Explore any option you like. For the purposes of this studio, we will explore three different options: the `Bar Chart`, the `Sunburst`, and the `Cluster Dendrogram`.

##### Bar Chart

* Select the `Bar chart` tile from the list of visualization options below. In the `Map Your Dimensions` section, drag the `Agency` bar to the `X Axis` tile. This will set the `Agency` column in the Excel sheet as a categorical x-axis. The `Agency` value represents the agency responsible for resolving each 311 complaint.

![Bar Chart Setup](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/02/09_Bar_Chart_Setup.png)

* A bar chart appears below. Its y-axis measures the number of records associated with each agency. 

![Bar Chart](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/02/10_Bar_Chart.png)

* Here, you may change the colors of the bars, the dimensions of the chart, and the type of color scale you use. Once you are done, you may download the chart as an `SVG` file for further customization in a vector graphics editor, such as [Adobe Illustrator](http://www.adobe.com/products/illustrator.html) or [Inkscape](https://inkscape.org/en/). (You also have the option to download the chart as a `PNG` image or `JSON` data model.)

##### Sunburst

* Bar charts are nice, but a number of resources already offer more powerful means of making them. Let's try something a little harder to replicate elsewhere. Go back up to the `Choose a Chart` section, and select `Sunburst`. This is a radial, hierarchical visualization that may help to visualize the relative statuses of different complaints in different parts of the city.
* Drag `Borough` to the `Hierarchy` section. New York City has five boroughs: Brooklyn, Queens, The Bronx, Manhattan, and Staten Island. All of these should appear in a large ring, with an additional `Unspecified` value for rows unassigned to a specific borough. (For a cleaner sunburst, filtering this value out should happen in Excel, not in the browser.) If your ring is too large, change the `Diameter` value on the left.

![Sunburst Setup](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/02/11_Sunburst_Setup.png)

* Now, drag `Status` to the same `Hierarchy` panel, under `Borough`. `Status` is the status of the 311 request: whether it is `Open`, `Closed`, `Assigned`, etc. 
* In addition, drag `Status` to the `Color` panel, to help us better see what's going on.

![Sunburst](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/02/12_Sunburst.png)

* The color automation here gets a little confusing, because the scheme also applies to the inner rings. However, with a bit of editing, we can make this look cleaner. After downloading this graphic as an `SVG` file and cleaning it up a little in Illustrator, here's what my sunburst looks like:

![Sunburst Edit](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/02/13_Sunburst_Edit.png)

##### Cluster Dendrogram

* Finally, we can explore a cluster dendrogram to quickly see the types of complaints associated with different agencies in the city. Select `Cluster Dendrogram` from the chart options. 
* Drag the `Agency` row to the `Hierarchy` tile.
* Drag the `Complaint Type` row to the same tile, right under `Agency`. 

![Cluster Dendrogram Setup](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/02/14_Cluster_Dendrogram_Setup.png)

* Below, you will see a very crunched dendrogram.

![Cluster Dendrogram Crunched](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/02/15_Cluster_Dendrogram_Crunched.png)

* Adjust the height to about `2500`. It should become a lot more readable.

![Dendrogram Large](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/02/16_Dendrogram_Large.png) 

Of course, these are only a few exploratory graphics. To end up with more polished results, filter and transform your data beforehand to prepare it for the type of graphic you have in mind. 
