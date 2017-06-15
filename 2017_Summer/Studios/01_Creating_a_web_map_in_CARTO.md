## Studio 01 - Creating a web map in CARTO
*This is a studio that builds upon [this](https://github.com/juanfrans-courses/mapping_arch_hum/blob/master/Fall_2017/Tutorials/07_Creating_Webmaps_Part_01.md) one, originally created by Juan Francisco Saldarriaga (jfs2118@columbia.edu) for the [Mapping for Architecture, Urbanism and the Humanities](https://github.com/juanfrans-courses/mapping_arch_hum) class at Columbia University*.

This studio will walk you through the process of creating an interactive map in CARTO, a powerful platform for visualizing geographic data. 

### Datasets

We will be using one dataset for this map:

* PLUTO for Manhattan - Originally downloaded from [here](http://www1.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page)

### Creating a building age map of Manhattan
#### Importing and loading your data into CARTO

* Once you've downloaded the data and created your CARTO account, log in into CARTO. You will land on your 'dashboard'.

![Dashboard](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/01_Creating_a_web_map_in_CARTO/01_Dashboard.png)

* Click on `NEW MAP`. This will take you to your datasets.
* Here, you need to upload the PLUTO dataset, so click on `Connect dataset`.
* Here, you can browse for your files or you can just drag and drop them. The important thing to keep in mind when uploading shapefiles is that they need to be zipped. Fortunately, when you downloaded the PLUTO dataset from Bytes of the Big Apple it came in zipped, so you already have it in the right format. However, if for some reason you don't have your shapefiles zipped, you need to compress them into a single archive. Remember that shapefiles are actually made up of multiple files (4, 5 or 6 usually), so you need to make sure these are all included in your zip file.
* Interestingly enough, if you uploaded the zip file that was directly downloaded from Bytes of the Big Apple, you actually uploaded two shapefiles: 'mnmappluto' which is the actual PLUTO file for Manhattan, and 'mn_dcp_mappinglot' which is a secondary file that comes with the PLUTO file.
* CARTO may have redirected you to your `Maps` section after uploading the file. Go up to the top of the page and locate the `Maps` dropdown next to your username. Click `Datasets` instead.

![Datasets](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/01_Creating_a_web_map_in_CARTO/02_Datasets.png)

* Click on the 'mnmappluto_1' file to see it's content:

![Data](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/01_Creating_a_web_map_in_CARTO/03_Data.png)

* You will see here all your data:
  * First of all, know that CARTO rearranges your columns alphabetically (except for the first two), so don't worry if they appear in a different order to what you saw in qGIS or in another program.
  * Second, notice that the second column, the one called `the_geom` has a little orange `GEO` tag next to it. This is very important: this means that CARTO has identified this field as the one that contains the actual geometry and geographic reference for this file. This is what is going to be plotted as the base geometry. When we upload other datasets we will see how to modify this.
  * Third, notice that below the header of each column CARTO notes the type of data for that column, be it 'string', 'number', 'geometry', etc. If by some reason CARTO has misclassified any columns you can click on that label and change the type to something else.
  * Finally, scroll all the way to the right of the table until you see a field called `yearbuilt`. This is the field we will use to symbolize our data based on the year the building was built for every lot. Make sure this field is of the type 'number'. If it isn't, change it to 'number'.
* Once you've checked your data, click on the `CREATE MAP` button at the top of the page. You will be taken to a map view and you will be able to see your data:

![Initial map](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/01_Creating_a_web_map_in_CARTO/04_Map_Initial.png)

* You can pan around and zoom in and out of your map. And if you click on a lot you will get a popup window but it won't have any information because we haven't set that yet.

#### Symbolizing your map

* To get to the styling panel for your map, click the `mnmappluto_1` box in the left hand panel.
* The view should now center on the `STYLE` tab, the third in five tabs on the panel. 

![Styling panel](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/01_Creating_a_web_map_in_CARTO/05_Styling_Panel.png)

* While the `STYLE` tab is focused on the look and feel of your map, the additonal tabs provide more advanced interactive functionality
 * The first one, `DATA`, allows you to add dynamic widgets to your map based on attributes in the dataset.
 * The second one, `ANALYSIS`, allows for more powerful geographic analysis (joins, sampling, filtering, etc.) to drive your visualization.
 * The fourth one, `POP-UP`, enables you to customize the popup that appears when a user hovers over or clicks on your map.
 * The fifth one, `LEGEND`, allows you to customize the legend on your map.
* We are going to symbolize this data based on the year each building was built. To symbolize your dataset based on the `yearbuilt` field, click on the `fill` row, select the `BY VALUE` tab.
* Search for `yearbuilt`. This should open up a number of different coloring schemes. (I encourage you to explore different symbology methods here. Some could be interesting for this dataset, while others may not work as well.)
* Click the `Buckets` row, and change the number of buckets to `7`. 
* Click the `Quantiles` option, and change that option to `Jenks`. 
* Select your color ramp. If you want to use divergent color ramps that's fine, but know that those types of color ramps are usually used for values that diverge and building age is not really that kind of value.
* You can also change the transparency of your colors, the stroke, the stroke weight and the transparency of the stroke.
* Finally, you could choose a `Blending` operation, which is basically how your layer's color or brightness would interact with the color or brightness of the layer below; and you could also add some Label Text but that will not be necessary for this map.

![Choropleth](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/01_Creating_a_web_map_in_CARTO/06_Choropleth.png)

* Now click on the `POP-UP` tab.
* Here, select a style, and turn on the `yearbuilt` option. You will see now that when you click on a lot the popup window will contain the yearbuilt data.

![Popup](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/01_Creating_a_web_map_in_CARTO/07_Popup.png)

* Now click again on the `STYLE` tab. Go to the bottom of the panel, and toggle `CARTOCSS` on. This should turn the background of your map black, which signals that we can manually input color codes for the automatically-generated buckets, if you like. The colors are in HEX form. If you want different HEX codes you can always go to [Adobe Kuler](https://color.adobe.com/) or to [ColorBrewer](http://colorbrewer2.org/) and pick colors from there.
* Remember once you've changed the CartoCSS to click on `APPLY`.
* Finally, click on the `LEGEND` tab to customize the legend of your map.
* Add a title to your legend and, if necessary, change the labels and the colors.
* Once all of this is done, click the back arrow at the top of the panel to return to the initial ma view. Click the `Basemap` section at the bottom (set to `Positron` by default) and select a basemap that you like. However, note that certain basemaps work only at specific zoom levels, so choose one that allows you to zoom to a good level without loosing resolution.
* Now, for the final stage click on the `SHARE` button at the bottom right-hand corner of the panel, and then click on `PUBLISH` to create your map. 
* Your map is set by default to `PRIVATE`, but you can click the orange tag to enable anyone with a link to view it. 
* In the `PUBLISH` tab, copy the link to view your map. Open it in a new browser tab.

![Published](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/01_Creating_a_web_map_in_CARTO/08_Published.png)

#### Final customization of your map
* Once you've visualized your data you can do the final customization.
* If you click the menu next to the title in the left panel, you can edit the metadata of your map (title, description, and tags).
* With the `Map Options` section in the left panel, the icon right below the pencil icon, you can customize the elements that you want to show in your map, such as `SEARCH BOX`, `LEGENDS`, etc.
* Once you are done with this, click on `SHARE` at the bottom right-hand corner of the page to get the different sharing options. Click `UPDATE` to capture your most recent changes, and select from the following:
  * `Get the link` will give you the link to the map in CartoDB.
  * `Embed it` will give you the code to create an `iframe` and embed your map in a website.
* For this studio you will only need the basic CartoDB link.
* Here's how my final map looks using the link:

![Final](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/01_Creating_a_web_map_in_CARTO/09_Final.png)
