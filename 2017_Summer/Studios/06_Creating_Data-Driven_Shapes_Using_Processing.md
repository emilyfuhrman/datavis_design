## Studio 06 - Introduction to Processing (Part I): Creating Data-Driven Shapes Using Processing

[Processing](https://processing.org/) is a free and open source framework for visual coding. In this studio, after reviewing the basics of computer drawing, we will generate a simple dataset in class and use it to draw elements that leverage Jacques Bertin's [visual variables](http://www.infovis-wiki.net/index.php?title=Visual_Variables). At the root of complex visualizations are simple, data-driven shapes. By completing this studio, we will attain the basic building blocks for generating more complicated graphics. 

### Datasets

We will be using a class-generated dataset for our sketch:

* Random numbers - Available [here](https://docs.google.com/spreadsheets/d/14wucEu9-_HxpZTY3YM4hGUSQn8FlYYjwvpjeikHfcH8/edit#gid=0)

### Creating data-driven shapes
#### Downloading data

* In class, navigate to the row in the spreadsheet that contains your UNI and enter a random **integer** in the `random_number` column. For the purposes of this Github walkthrough, I will assume this column to be populated.
* Once the column is populated, go to `File > Download as > Comma-separated values (.csv, current sheet)`. The current spreadsheet tab should download with a `.csv` extension.

![Download CSV](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/06/01_Download_As_CSV.png)

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

* Today, all of our code will be living in the `setup()` function. The first thing we want to do is initialize the `Table` object, which is native to Processing. (More information [here](https://processing.org/reference/Table.html).) As the reference page explains, the `Table` object stores data in columns and rows, much like the structure of a traditional spreadsheet. To work with a table in a sketch, you can either create a table from scratch or import an external file. In this studio, we will be importing the file we collaboratively populated in class. To initialize the table object, type `Table my_table;` above both of your functions. The string `Table` defines a new variable of the type `Table`. The string `my_table` defines the name of the new `Table`. Your code should now look something like this:

```
Table my_table; //**new code**

void setup(){
}

void draw(){
}
```

* Now, we want to tell our sketch to import the CSV from the `data` folder we defined. To do this, we will navigate back into the `setup()` function and define `my_table` as the CSV file in its imported form. We will use the `loadTable` function, which is also native to Processing. The first argument that the `loadTable` function takes is the name of the CSV file. (There's no reason to name the `data` folder, because Processing is already looking there.) The second optional argument tells the `loadTable` function that we are importing a CSV with a header row.

```
Table my_table;

void setup(){
	
	//**new code**
	my_table = loadTable("class_dataset.csv", "header");

}

void draw(){
}
```
* To quickly test that everything is working properly, click the `Run` button. If your table is imported correctly, no errors will show up in the console.

#### Printing values in the console

* The Processing console is a flexible place to test whether everything is working behind the scenes. Beyond just throwing errors, we can use the console to confirm that the values we have tried to import look the way they should. Let's start by creating a `for loop` using the Processing syntax, which will cycle through every row in the values we have assigned to the `Table` object called `my_table`. It will enable us to look at each row one by one, and perform an action if needed.

```
Table my_table;

void setup(){
	
	my_table = loadTable("class_dataset.csv", "header");

	//**new code**
	for(TableRow current_row : my_table.rows()){
	}
}

void draw(){
}
```
* Our code uses a native Processing function to grab all of the rows from the variable `my_table`, which is the `Table` object to which we have written our imported CSV. The `TableRow` object refers to the type of element that each of those rows is. The `current_row` variable is the name we will use to access every individual row. 
* Now, we will create a new string internal to this function that will take on the value of the `UNI` column in each row we cycle through. To do this, add a new line inside the `for loop` we just created: `String current_uni = current_row.getString("UNI");`. Make sure to end your line with a semicolon. Notice that the UNI is of the `string` data type, and that we have to define the variable as such.

```
Table my_table;

void setup(){
	
	my_table = loadTable("class_dataset.csv", "header");

	for(TableRow current_row : my_table.rows()){
		String current_uni = current_row.getString("UNI"); //**new code**
	}
}

void draw(){
}
```
* Now, we will create a new integer internal to this function that will take on the value of the `random_number` column in each row we cycle through. To do this, add a new line below the one we just added: `int current_number = current_row.getInt("random_number");`. Make sure to end your line with a semicolon. Notice that the random_number value in the spreadsheet is of the `int` (integer) data type, and we have to define the variable as such. 

```
Table my_table;

void setup(){
	
	my_table = loadTable("class_dataset.csv", "header");

	for(TableRow current_row : my_table.rows()){
		String current_uni = current_row.getString("UNI");
		int current_number = current_row.getInt("random_number"); //**new code**
	}
}

void draw(){
}
```
* Now, let's test to see if everything is working so far. Quickly click `Run` to make sure that our sketch runs without any errors.
* If everything looks okay, we are ready to print these value to the console to check and make sure the import went smoothly. We will do this by using the variables we just defined. Below both of the new variables, add the following command: `println(current_uni + ' ' + current_number);`. This tells Processing to print the text of each row with a space in between. 

```
Table my_table;

void setup(){
	
	my_table = loadTable("class_dataset.csv", "header");

	for(TableRow current_row : my_table.rows()){
		String current_uni = current_row.getString("UNI");
		int current_number = current_row.getInt("random_number"); 

		println(current_uni + ' ' + current_number); //**new code**
	}
}

void draw(){
}
```
* Now, click `Run` again. The values of the dataset we imported should now be printed to the console. 

![Printed to Console](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/06/04_Printed_to_Console.png)

Success!

#### Using data to draw shapes

* Now, we can use this same loop to generate some shapes. We haven't incorporated Processing's graphic capabilities into our workflow just yet, but now we can start leveraging the window that pops up on `Run` to visualize the data in the spreadsheet. To begin, define the width and height you would like your window to be as the first line in the `setup()` function: `size(500,600);`. As you can see, my dimensions are set to 500px width and 600px height. 

```
Table my_table;

void setup(){
	
	size(500,600); //**new code**

	my_table = loadTable("class_dataset.csv", "header");

	for(TableRow current_row : my_table.rows()){
		String current_uni = current_row.getString("UNI");
		int current_number = current_row.getInt("random_number"); 

		println(current_uni + ' ' + current_number);
	}
}

void draw(){
}
```

* Now, click `Run`. The window that pops up should size to your new dimensions. 
* Based on what we know of drawing shapes, let's try to use the `current_number` value to size some circles. Inside of the loop, below the `println` command, try drawing a square for every row that changes size based on the value of the number. 

![Stacked Rectangles](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/06/05_Stacked_Rectangles.png)

```
Table my_table;

void setup(){
	
	size(500,600);

	my_table = loadTable("class_dataset.csv", "header");

	for(TableRow current_row : my_table.rows()){
		String current_uni = current_row.getString("UNI");
		int current_number = current_row.getInt("random_number"); 

		println(current_uni + ' ' + current_number);

		rect(0,100,current_number,current_number); //**new code**
	}
}

void draw(){
}
```
* For every row in the loop, the code above accesses the variables we saved earlier and draws a new rectangle. It uses the `current_number` integer to set the width and height of the square. Something showed up. We have squares of different sizes. But these appear to all be stacked on top of one another. Let's try to space them out by adjusting the x-value of the rectangle using the same variable. 

![Spaced Slightly](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/06/06_Spaced_Slightly.png)

```
Table my_table;

void setup(){
	
	size(500,600);

	my_table = loadTable("class_dataset.csv", "header");

	for(TableRow current_row : my_table.rows()){
		String current_uni = current_row.getString("UNI");
		int current_number = current_row.getInt("random_number"); 

		println(current_uni + ' ' + current_number);
    
		rect(current_number,100,current_number,current_number); //**new code**
	}
}

void draw(){
}
```

* That did something! But not enough. Try playing around with the parameters to get something like this instead:

![Spaced More](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/06/07_Spaced_More.png)

* Maybe size is not the best parameter to use here. Instead, maybe we can use opacity. To set the fill of a shape, we use the `fill` command, and feed it an `RGBA` value. Right before your `rect` line, add this command: `fill(255,0,0,current_number);`. This will set the fill value to red, and change its opacity based on the integer instead. 

![Colored Squares](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/06/08_Colored_Squares.png)

```
Table my_table;

void setup(){
	
	size(500,600);

	my_table = loadTable("class_dataset.csv", "header");

	for(TableRow current_row : my_table.rows()){
		String current_uni = current_row.getString("UNI");
		int current_number = current_row.getInt("random_number"); 

		println(current_uni + ' ' + current_number);
    
		fill(255,0,0,current_number); //**new code**
		rect(current_number,100,current_number,current_number); 
	}
}

void draw(){
}
```
Now we're getting somewhere! To get to know Processing better, try to do the following:

* Line up the squares based on the value in the `ID` column, so that they are evenly spaced.
* Change the border color of the squares.
* Use circles instead of squares.
* Change the background color of the sketch.

Reference to all of Processing's capabilities are available [here](https://processing.org/reference/).