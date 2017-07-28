## Studio 07 - Introduction to Processing (Part II): Visualizing Data

_This is **Part II** of a two-part tutorial. To view Part I, click **[here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/06_Introduction_to_Processing_Part_1_Creating_Data-Driven_Shapes_Using_Processing.md).**_

[Processing](https://processing.org/) is a free and open source framework for visual coding. In this studio, after creating a series of data-driven shapes using a class-generated dataset, we will generate a series of random-number rows to compare our "random" data to randomized data (namely, the definition of "random" as defined by Processing itself). 

### Sketch

The sketch we will start with is available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Materials/07/sketch_start.zip).

### Datasets

We will be using two datasets this time. The first is the same class-generated dataset we used in the previous studio, this time in its static form. The second builds upon the class-generated dataset by adding four additional columns containing randomly-generated values.

* Random numbers - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Data/07/class_dataset.csv)
* Randomer numbers - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Data/07/class_dataset_random.csv)


### Visualizing data
#### Cleaning up the squares

* Open up your sketch from the last studio. At its point of completion, we had generated a series of colored squares using the data we defined as a class.

![Colored Squares](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/01_Colored_Squares.png)

```
Table my_table;

void setup(){
	
	size(500,600);

	my_table = loadTable("class_dataset.csv", "header");

	for(TableRow current_row : my_table.rows()){
		String current_uni = current_row.getString("UNI");
		int current_number = current_row.getInt("random_number"); 

		println(current_uni + ' ' + current_number);
    
		fill(255,0,0,current_number);
		rect(current_number,100,current_number,current_number); 
	}
}

void draw(){
}
```

* Now, let's incorporate a couple of visual changes into the sketch to make these squares more readable. First, we can space the squares out evenly. Instead of setting the x-position of each square based on the value that generates them, we can use their position in the array (which consistently increases by 1) to space them out in an even row. Unfortunately, Processing does not make this easy for us, at least using the syntax above. Unlike most loops, this one does not surface the index number for each item. However, knowing that the loop increases by 1 every time it progresses to a new element in the list, we can hack an index counter by defining a new variable that increases by 1 every time the loop runs. Before the `for-loop` begins, define a new integer:

`int counter = 0;`

* Now, inside the `for-loop`, right after the `rect` command at the bottom, add the following code to increase the integer `counter` by 1 every time the loop runs (this can also be written as `counter += 1` or simply `counter++`.):

`counter = counter + 1`

* Check to make sure that your code now looks like this: 

```
Table my_table;

void setup(){
  
	size(500,600);

	my_table = loadTable("class_dataset.csv", "header");

	int counter = 0; //**new code**

	for(TableRow current_row : my_table.rows()){
		String current_uni = current_row.getString("UNI");
		int current_number = current_row.getInt("random_number"); 

		println(current_uni + ' ' + current_number);
    
		fill(255,0,0,current_number); //**new code**
		rect(current_number,100,50,50); 
    
		counter++; //**new code**
	}
}

void draw(){
}
```
* Now, we have a value to access for the index position we are on as the `for-loop` continues to run. Go ahead and replace the x-value in the `rect` command with `counter`, so that the line reads `rect(counter,100,current_number,current_number);`.
* Run your sketch.

![Squares Squished](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/02_Squares_Squished.png)

* The rectangles probably look a bit crunched. Play around with their dimensions and x-positions to get something more like this:

![Squares Spaced](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/03_Squares_Spaced.png)

* Change the color of the background to black (`#000000`).
* Change the color of the squares to white (`rgb(255,255,255)`, while retaining the opacity `a` value), so that they appear more readable.
* In addition, play around with transformations on the raw `current_number` value that drives the alpha of each square, in case you want them to be brighter or higher contrast. 

![Squares Monochrome](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/04_Squares_Monochrome.png)

#### Adding random(er) data

* We are now ready to incorporate the larger, "randomer" dataset into our Processing sketch. But before we do that, let's make a couple of changes to our code to make it more efficient. Since we will be using the new data to draw several rows of squares idential to the row of squares we just drew, it makes sense to break the row-drawing capability out into a separate, more modular, repeatable function. First, under the `void draw(){}` function, add another function by defining `void draw_boxes(){}`.

![New Function](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/05_New_Function.png)

* Now, starting with the line that defines `int counter = 0;`, select down to the closing bracket of the for-loop:

![Select Loop](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/06_Select_Loop.png)

* Cut and paste this block of text into the inside of the newly-defined function.

![Pasted](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/07_Pasted.png)

* To test whether this still works the same way, call the new `draw_boxes()` function by adding `draw_boxes()` to the end of the `setup()` function.

![Call Function](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/08_Call_Function.png)

* Run your code. The same black window with white squares should appear. 

![Same Window](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/09_Same_Window.png)

* Let's go ahead and import our different dataset. Change the `loadTable` function to call `class_dataset_random.csv`.

![Change Dataset](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/10_Change_Dataset.png)

* Since we will ultimately want to run the `draw_boxes()` function for every new column in this dataset, it will be easier to store the header names in a list. Given our method for importing the table, it's a bit more involved to get Processing to grab these automatically, so we can go ahead and define them manually. At the top of the sketch, under the `Table my_table;` declaration, add the following: `String[] headers =  {"random_number","r_1","r_2","r_3","r_4"};`. This defines a new array, which contains the names of the columns holding random integer values in the dataset.

![Define Headers](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/11_Define_Headers.png)

* Before we start connecting the pipes, we still need to make a few adjustments. First of all, even though we broke out the square-drawing functionality into a new function, we need to define how the function will know which values to draw, and where to draw them. We can enable these values to change every time by letting the code that calls the function specify them. To set this up, add two variable declarations into the function's parentheses:
	* `String _colName` - The name of the current column being visualized by a row of squares
	* `int _yPos` - The y-value the squares should be drawn on
* Separate the two by a comma, so the function looks something like this: 

![Define Arguments](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/12_Define_Arguments.png)

* These arguments act as ghost values, which the actual code that calls the function can pass in. We can now switch up some of the code inside the function to draw from whatever values these variables might take at a given time. 
	* Change `"random_number"` in the `getInt()` function to `_colName`. (Note the double quotes are now gone.)
	* Change the y-value in the `rect()` function (currently 50, in my code) to `_yPos`. 
* Your for-loop should now look like this:

```
	for(TableRow current_row : my_table.rows()){
		String current_uni = current_row.getString("UNI");
		int current_number = current_row.getInt(_colName); //**new code
    
		println(current_uni + ' ' + current_number);
    
		fill(255,255,255,current_number*2);
		rect(50 +counter*20,_yPos,10,10); //**new code
    
		counter++;
	}
```
* Finally, before we can run this function again, we have to add values for each of these new arguments into the place where we actually call the function. In the `draw_boxes()` command, add `"random_number"` and `50` into the parentheses, separated by a comma. The line should now read `draw_boxes("random_number",50)`. Here, `"random_number"` corresponds to the column name, while `50` corresponds to the y-position.

![Specify Arguments](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/13_Specify_Arguments.png)

* Run the sketch to make sure everything is working as it should.
* Now, since we want to cycle through every additional column added to the original random dataset, we can use the `headers` array, along with a new for-loop, to call the function five times. Comment out the current `draw_boxes()` command, and in its plae add the following:
```
for(int i=0; i<headers.length; i++){
	draw_boxes(headers[i], 120 +120*i);
}
```
![New Loop](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/14_New_Loop.png)

Here, we are cycling through each of the headers, using the current header value as the column name within the `draw_boxes()` function, and gradually counting up a well-spaced-out y-value for each successive row to be drawn on. 
* Increase the height of your sketch to `800`.
* Go ahead and run your code.

![Many Rows](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/15_Many_Rows.png)

Lo and behold, we now see many rows instead of one. Each new row corresponds to one of the additional random number columns added to the original dataset. 
* While opacity works moderately well to visualize this data, let's see if we can do something more visible. First, we can use the `current_number` value to set the height of each square, to give us an additional visual variable to play with.
	* In the `rect()` command, change the height value (the last argument) to `current_number`.
	* Change the y-value (the second argument) to `(_yPos - current_number)`.

![Resetting Position](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/16_Resetting_Position.png)

* Run the sketch.

![Bar Heights](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/17_Bar_Heights.png)

* Instead of opacity, we can try and use color to differentiate better between these bars. Edit the fill command so that `current_number` affects only one color channel -- in this case, the green (the "G" in RGB). Change your fill line to `fill(255,current_number*5,0);`.
* Run the sketch.

![RGB Bars](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/18_RGB_Bars.png)

* We can also try using the HSB color mode to get brighter distinctions in hue. This time, add an additional line before the fill value: `colorMode(HSB);`.
* Now, change the fill line to `fill((current_number),255,255);`. 

![Color Change](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/19_Color_Change.png)

* Run the sketch.

![HSB Bars](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/20_HSB_Bars.png)

* We're starting to tease out some of the differences between these different datasets. At the outset, is there anything we can notice about the class-generated dataset, versus the other random ones? There are many adjustments you could make here to enhance readability, to transform the data before visualizing it, and so on. Go forth and explore.

![Final Bar Experimentation](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/21_Final_Bar_Experimentation.png)