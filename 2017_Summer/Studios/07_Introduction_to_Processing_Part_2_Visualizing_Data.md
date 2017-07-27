## Studio 07 - Introduction to Processing (Part II): Visualizing Data

_This is **Part II** of a two-part tutorial. To view Part I, click **[here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/06_Introduction_to_Processing_Part_1_Creating_Data-Driven_Shapes_Using_Processing.md).**_

[Processing](https://processing.org/) is a free and open source framework for visual coding. In this studio, after creating a series of data-driven shapes using a class-generated dataset, we will generate a series of random-number rows to compare our "random" data to randomized data (namely, the definition of "random" as defined by Processing itself). 

### Datasets

We will be using two datasets this time. The first is the same class-generated dataset we used in the previous studio, this time in its static form. The second builds upon the class-generated dataset by adding four additional columns containing randomly-generated values.

* Random numbers - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Data/07/class_dataset_random.csv)
* Randomer numbers - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Data/07/class_dataset.csv)


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

#### Adding random data

* We are now ready to incorporate the larger, "randomer" dataset into our Processing sketch. But before we do that, let's make a couple of changes to our code to make it more efficient. Since we will be using the new data to draw several rows of squares idential to the row of squares we just drew, it makes sense to break the row-drawing capability out into a separate, more modular, repeatable function. First, under the `void draw(){}` function, add another function by defining `void draw_boxes(){}`.

![New Function](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/05_New_Function.png)

* Now, starting with the line that defines `int counter = 0;`, select down to the closing bracket of the for-loop:

![Select Loop](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/06_Select_Loop.png)

* Cut and paste this block of text into the inside of the newly-defined function.

![Pasted](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/07_Pasted.png)

* Now, to test whether this still works the same way, call the new `draw_boxes()` function by adding `draw_boxes()` to the end of the `setup()` function.

![Call Function](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/08_Call_Function.png)

* Run your code. The same black window with white squares should appear. 

![Same Window](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/09_Same_Window.png)


























