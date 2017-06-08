## Tutorial 01 - Creating a web map in CARTO
*This is a tutorial that builds upon [this](https://github.com/juanfrans-courses/mapping_arch_hum/blob/master/Fall_2016/Tutorials/07_Creating_Webmaps_Part_01.md) one, originally created by Juan Francisco Saldarriaga (jfs2118@columbia.edu) for the [Mapping for Architecture, Urbanism and the Humanities](https://github.com/juanfrans-courses/mapping_arch_hum) class at Columbia University*.

This tutorial will walk you through the process of creating an interactive map in CARTO, a powerful platform for visualizing geographic data. 

### Datasets

We will be using one dataset for this map:

* PLUTO for Manhattan - Originally downloaded from [here](http://www1.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page)

### Creating a building age map of Manhattan
#### Importing and loading your data into CARTO

* Once you've downloaded the data and created your CARTO account, log in into CARTO. You will land on your 'dashboard'.

![Dashboard](https://github.com/emilyfuhrman/datavis_design/blob/master/2016_Summer/Tutorials/Images/01_Creating_a_web_map_in_CARTO/01_Dashboard.png)

* Click on `NEW MAP`. This will take you to your datasets.
* Here, you need to upload the PLUTO dataset, so click on `Connect dataset`.
* Here, you can browse for your files or you can just drag and drop them. The important thing to keep in mind when uploading shapefiles is that they need to be zipped. Fortunately, when you downloaded the PLUTO dataset from Bytes of the Big Apple it came in zipped, so you already have it in the right format. However, if for some reason you don't have your shapefiles zipped, you need to compress them into a single archive. Remember that shapefiles are actually made up of multiple files (4, 5 or 6 usually), so you need to make sure these are all included in your zip file.
* Interestingly enough, if you uploaded the zip file that was directly downloaded from Bytes of the Big Apple, you actually uploaded two shapefiles: 'mnmappluto' which is the actual PLUTO file for Manhattan, and 'mn_dcp_mappinglot' which is a secondary file that comes with the PLUTO file.
* CARTO may have redirected you to your `Maps` section after uploading the file. Go up to the top of the page and locate the `Maps` dropdown next to your username. Click `Datasets` instead.

![Dashboard](https://github.com/emilyfuhrman/datavis_design/blob/master/2016_Summer/Tutorials/Images/01_Creating_a_web_map_in_CARTO/02_Datasets.png)

* Click on the 'mnmappluto_1' file to see it's content:

![Dashboard](https://github.com/emilyfuhrman/datavis_design/blob/master/2016_Summer/Tutorials/Images/01_Creating_a_web_map_in_CARTO/03_Data.png)

* You will see here all your data:
  * First of all, know that CARTO rearranges your columns alphabetically (except for the first two), so don't worry if they appear in a different order to what you saw in qGIS or in another program.
  * Second, notice that the second column, the one called `the_geom` has a little orange `GEO` tag next to it. This is very important: this means that CARTO has identified this field as the one that contains the actual geometry and geographic reference for this file. This is what is going to be plotted as the base geometry. When we upload other datasets we will see how to modify this.
  * Third, notice that below the header of each column CARTO notes the type of data for that column, be it 'string', 'number', 'geometry', etc. If by some reason CARTO has misclassified any columns you can click on that label and change the type to something else.
  * Finally, scroll all the way to the right of the table until you see a field called `yearbuilt`. This is the field we will use to symbolize our data based on the year the building was built for every lot. Make sure this field is of the type 'number'. If it isn't, change it to 'number'.
* Once you've checked your data, click on the `CREATE MAP` button at the top of the page. You will be taken to a map view and you will be able to see your data:

![Dashboard](https://github.com/emilyfuhrman/datavis_design/blob/master/2016_Summer/Tutorials/Images/01_Creating_a_web_map_in_CARTO/04_Map_Initial.png)

* You can pan around and zoom in and out of your map. And if you click on a lot you will get a popup window but it won't have any information because we haven't set that yet.



