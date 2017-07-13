## Studio 06 - Creating Data-Driven Shapes Using Processing

[Processing](https://processing.org/) is a free and open source framework for visual coding. In this studio, after reviewing the basics of computer drawing, we will generate a simple dataset in class and use it to draw elements that leverage Jacques Bertin's [visual variables](http://www.infovis-wiki.net/index.php?title=Visual_Variables). At the root of complex visualizations are simple, data-driven shapes. By completing this studio, we will attain the basic building blocks for generating more complicated graphics. 

### Datasets

We will be using a class-generated dataset for our sketch:

* Random numbers - Available [here](https://docs.google.com/spreadsheets/d/14wucEu9-_HxpZTY3YM4hGUSQn8FlYYjwvpjeikHfcH8/edit#gid=0)

### Creating data-driven shapes
#### Downloading data

* In class, navigate to the row in the spreadsheet that contains your UNI and enter a random **integer** in the `random_number` column. For the purposes of this Github walkthrough, I will assume this column to be populated.
* Once the column is populated, go to `File > Download as > Comma-separated values (.csv, current sheet)`. The current spreadsheet tab should download with a `.csv` extension.

![Download CSV](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/06/01_Download_CSV.png)

* Rename the dataset to something simple, like `class_dataset.csv`.

#### Importing data into Processing

* Open up a new sketch in Processing. 
* Save the sketch with a familiar name (mine will be called `sketch_studio`) in a folder you can access.
* Navigate to the sketch folder. Inside it, you should see a file with the extension `.pde`, which is exactly the same name as the parent folder. (Here, I see `sketch_studio.pde`).
* In the parent folder, create a new folder. Name it `data`. Make sure the `d` is lowercase, as this enables Processing to know that it can access data from here. 
* Inside the `data` folder, put the CSV you downloaded from Google Sheets. Your structure should look something like this:

![Folder Structure](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/06/02_Folder_Structure.png)

* Now, navigate to the main window of the open sketch. To initialize the sketch, create two functions: 

```
void setup(){
}

void draw(){
}
```

...so your window looks something like this:

![Initialize Sketch](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/06/03_Initialize_Sketch.png)

* Today, all of our code will be living in the `setup()` function. The first thing we want to do is initialize the `Table` object, which is native to Processing. (More information [here](https://processing.org/reference/Table.html).) As the reference page explains, the `Table` object stores data in columns and rows, much like the structure of a traditional spreadsheet. To work with a table in a sketch, you can either create a table from scratch or import an external file. In this studio, we will be importing the file we collaboratively populated in class. To initialize the table object, type `Table my_table;` above both of your functions. Your code should now look something like this:

```
Table my_table;

void setup(){
}

void draw(){
}
```


























