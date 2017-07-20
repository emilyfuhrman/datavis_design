## Studio 07 - Introduction to Processing (Part II): Visualizing Data

_This is **Part II** of a two-part tutorial. To view Part I, click **[here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/06_Introduction_to_Processing_Part_1_Creating_Data-Driven_Shapes_Using_Processing.md).**_

[Processing](https://processing.org/) is a free and open source framework for visual coding. In this studio, after creating a series of data-driven shapes using a class-generated dataset, we will generate a series of random-number rows to compare our "random" data to randomized data (namely, the definition of "random" as defined by Processing itself). 

### Datasets

We will be using the same class-generated dataset we used in the previous studio, this time in its static form.

* Random numbers - Available [here](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Data/07/class_dataset.csv)

### Visualizing data

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

* Let's now define a separate array of random numbers. We can do this by creating another `for-loop`. Below the `for-loop` that contains the CSV logic, define a new variable, set to the size of the table we imported: 

`int[] randomArray = new int[my_table.getRowCount()];`

* We can also use more readable syntax for the new `for-loop` we create. The number of times this loop will run is set to the number of elements in the table that we imported. We will create randomized datasets of the same size as our original, which will better facilitate visual comparison. Below the new variable definition, add the following:

```
	for(int i=0; i < my_table.getRowCount(); i++){
	}
```
* Inside of the `for-loop`, we will push a new random value to the array we defined every time the loop runs. Between the curly brackets, add the following:

`randomArray[i] = int(random(0,100));`

* Repeat the same steps to create five random arrays total, each with a different name. Include these all in the same `for-loop` for the time being. Your code should look something like this:

```
Table my_table;

void setup(){
  
	size(800,400);
	background(#000000);

	my_table = loadTable("class_dataset.csv", "header");

	int counter = 0;

	for(TableRow current_row : my_table.rows()){
		String current_uni = current_row.getString("UNI");
		int current_number = current_row.getInt("random_number"); 

		//println(current_uni + ' ' + current_number);
		//println(my_table.getRowCount());
    
		fill(255,255,255,current_number*2);
		rect(50+counter*20,50,10,10); 
    
		counter++;
	}
  
	int[] randomArray1 = new int[my_table.getRowCount()];
	int[] randomArray2 = new int[my_table.getRowCount()];
	int[] randomArray3 = new int[my_table.getRowCount()];
	int[] randomArray4 = new int[my_table.getRowCount()];
	int[] randomArray5 = new int[my_table.getRowCount()];
  
	for(int i=0; i < my_table.getRowCount(); i++){
		randomArray1[i] = int(random(0,100));
		randomArray2[i] = int(random(0,100));
		randomArray3[i] = int(random(0,100));
		randomArray4[i] = int(random(0,100));
		randomArray5[i] = int(random(0,100));
	}
}

void draw(){
}
```
* Finally, let's add another `for-loop` just like the first one to draw squares for each of these arrays. Add it after the one we just created. I came up with the following (notice how each array starts at a different y-position):

```
//draw more squares
	for(int i=0; i < my_table.getRowCount(); i++){
     
		//draw for array 1
		fill(255,255,255,randomArray1[i]*2);
		rect(50+i*20,100,10,10); 
     
		//draw for array 2
		fill(255,255,255,randomArray2[i]*2);
		rect(50+i*20,150,10,10); 
     
		//draw for array 3
		fill(255,255,255,randomArray3[i]*2);
		rect(50+i*20,200,10,10); 
     
		//draw for array 4
		fill(255,255,255,randomArray4[i]*2);
		rect(50+i*20,250,10,10); 
     
		//draw for array 5
		fill(255,255,255,randomArray5[i]*2);
		rect(50+i*20,300,10,10); 
	}
```
* Now, run your code. 

![Final Run](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/07/05_Final_Run.png)

* Some questions to consider:
	* Do you notice anything different about the top row, which visualizes the values we defined as a class?
	* Does opacity function as a good point of comparison?
	* Can you think of a more effective way to visualize this data?