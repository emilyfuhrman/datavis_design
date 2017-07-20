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
    
		fill(255,0,0,current_number); //**new code**
		rect(current_number,100,current_number,current_number); 
	}
}

void draw(){
}
```
