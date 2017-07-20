## Studio 08 - Creating Data-Driven Shapes for VR Using A-Frame

In this studio, we will be exploring the world of data-driven, VR-ready shapes using [A-Frame](https://aframe.io/). A-Frame is a web framework for building virtual reality experiences, viewable through VR headsets like [Google Cardboard](https://vr.google.com/cardboard/) and [Oculus Rift](https://www.oculus.com/rift/). We will first learn the basics of drawing 3-D primitives using the library, and then will progress to rendering the values of a simple CSV file as a series of geometric shapes. The purpose of this studio is to familiarize participants with VR technology and the basics of web development, while working with a familiar dataset generated from the previous week's studio.

### Glitch

We will be using [Glitch](https://glitch.com/) in this studio to facilitate the process of getting a web development environment up and running. Two projects exist for you to clone and edit:

* Getting started - Available [here](https://glitch.com/edit/#!/fir-airport)
* Visualizing data - Available [here](https://glitch.com/edit/#!/sage-branch)

### A-Frame basics

* Like other graphics systems we have encountered, A-Frame (built on top of the JavaScript library [three.js](https://threejs.org/), which is itself a 3-D library that makes [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) much more user-friendly, if still complicated) comes with a series of primitive shapes that are easy to generate and manipulate. Since A-Frame's shapes are 3-dimensional, they include fun things like a [torus](https://aframe.io/docs/0.6.0/primitives/a-torus.html), a [box](https://aframe.io/docs/0.6.0/primitives/a-box.html), a [cylinder](https://aframe.io/docs/0.6.0/primitives/a-cylinder.html), a [cone](https://aframe.io/docs/0.6.0/primitives/a-cone.html), and a [sphere](https://aframe.io/docs/0.6.0/primitives/a-sphere.html), to name a few.
* **A-Frame can be developed entirely in HTML, without using code.** This is pretty cool! (Though to actually visualize data in this medium usually requires code.)
* Since A-Frame leverages 3-D rendering capabilities, it introduces a number of new concepts that apply to 3-dimensional scenes (such as the [camera](https://aframe.io/docs/0.6.0/components/camera.html), and [light](https://aframe.io/docs/0.6.0/components/light.html)). While these features are necessary to understand if you want to build complex VR experiences, the best way to grow accustomed to them is through practice and experience. 
* Aside from some new syntax, the most we will have to worry about today is the addition of the z-axis, which controls how "far away" the things we draw appear from us on the screen. 

### Getting started
#### Creating and exploring basic 3-D primitives

* Navigate to the "Getting started" project. (Close the other tab.) Your window should look something like this:

![Initial Project Page](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/08/01_Initial_Project_Page.png)

* To see what we are working with, click the `Show [Live]` button at the top left corner of the window. In the new tab that opens, you should see a cube, a sphere, and a cylinder resting on a plane. Try clicking and dragging around your window to get a feel for the 3-D effects.

![Initial Project Shapes](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/08/02_Initial_Project_Shapes.png)

* Navigate back to the previous view of the project.
* In the top left corner, click the project name to open a menu labeled `Project info and options`. 
* Click the `Remix This` button to start your own editable copy of the project. While it is possible to edit my original project, **please do not edit it directly**. Create a clone following the directions above so that everyone in the class may work independently on changes to their code. You should now be facing a new project page, with a different name than the first one. 
* In the left panel, click `index.html`. 

![New Project Index](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/08/03_New_Project_Index.png)

* Here, you can see all of the logic that goes into creating the shapes visible in the previous screen.
	* In the `<body>` section of the code, we see a new `<a-scene>` container that bounds a series of shapes. 
	* Inside the `<a-scene>` container, there are five declarations: an `<a-box>`, an `<a-sphere>`, an `<a-cylinder>`, an `<a-plane>`, and an `<a-sky>`.
	* Each of these declarations contains different parameters. The first four shapes contain `position`, `rotation`, and `color` properties. The `<a-circle>` and `<a-cylinder>` declarations contain a `radius` property. The last `<a-sky>` declaration contains only a `color` property.
	* The `position` property places objects in 3-D space. (Read more [here](https://aframe.io/docs/0.6.0/components/position.html).) It is defined by three space-delimited numbers: `x`, `y`, and `z`. Unlike the y-inverse coordinate plane in Processing, this one functions more like the a typical coordinate plane. 
	* The `rotation` property rotates objects in 3-D space. (Read more [here](https://aframe.io/docs/0.6.0/components/rotation.html).) It is also defined by three space delimited numbers: rotation about the x-axis, rotation about the y-axis, and rotation about the z-axis (also known as `roll`, `pitch`, and `yaw`).
	* The `color` property takes a string, a hex code, or an RGB value.
* To access the live view for this new project, click the `Show [Live]` button next to the title in the top left corner. A new tab will open up in your browser, displaying the shapes visible in the HTML.
* To get used to this new environment, let's try making a few visual changes. The `Show [Live]` tab will automatically refresh any time you edit the text in `index.html`. Some ideas to try:
	* Change the position of the box.
	* Change the color of the sphere.
	* Change the color of the sky.
	* Change the radii of the sphere and cylinder. 

![Editing Shapes](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/08/04_Editing_Shapes.png)

* As a test, try setting the z-value of the `box`, `sphere`, and `cylinder` to `-10`, `-15`, and `-12`, respectively. Click on the `Show [Live]` tab to see what happens.

![Far Away](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/08/05_Far_Away.png)

* Now, just for fun, let's try adding a torus to the scene. Navigate back to the HTML view, and below the `<a-cylinder>` declaration, add the following line of code:

`<a-torus position="1 0.75 -6"  color="#43A367" arc="270" radius="5" radius-tubular="0.1"></a-torus>`

![New Torus Code](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/08/06_New_Torus_Code.png)

* If we navigate to the `Show [Live]` tab, something new should appear:

![New Torus Scene](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/08/07_New_Torus_Scene.png)

Cool. Even though the browser provides decent 3-D navigation, let's see what these look like in Google Cardboard.

### Visualizing data

* Close all previous tabs.
* Navigate to the "Visualizing data" project. Your window should look, once again, something like this:

![Initial Project Page](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/08/08_Initial_Project_Page.png)

* As before, go to the top left corner of the window and open the menu labeled `Project info and options`.
* Click the `Remix This` button to start your own editable copy of the project. 
* In the left panel, select `index.html`. 

![New Project Index](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/08/09_New_Project_Index.png)

* No shapes are being drawn in the index file, but there are a couple of items in the `<a-scene>` brackets. We will revisit these shortly. To test that this is a blank project, click `Show [Live]` in the top left corner of the window. The new tab that opens should be empty.
* You will notice that there are a couple of additional files in the left hand panel of this project: 
	* `data/class_data.csv` - The class-generated dataset, copied here as a CSV file
	* `js/logic.js` - A JavaScript file containing more complex logic for how we generate shapes. 
* The JavaScript file, `js/logic.js`, appears in the `<head>` section of `index.html`. This enables the page to reference the logic in that file before it starts drawing anything in the `<body>` section.

![JavaScript Link](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/08/10_JavaScript_Link.png)

* Let's take a look at what this file contains. Click on `js/logic.js` in the left panel.

![JavaScript Functions](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/08/11_JavaScript_Functions.png)

* Inside are a bunch of complex functions. Do not worry about the syntax here -- all you need to know is the following:
	* The declaration that encompasses everything starts with `AFRAME.registerComponent`. It is named `get-data`. We call this element in the HTML of the `index.html` file. 
	* Inside this declaration are three functions: `init()`, `processData()`, and `drawShapes()`.
	* The `init()` function controls the process of getting the CSV file that we can see in the left panel. 
	* The `processData()` function parses it to make it into a JavaScript-friendly array.
	* The `drawShapes()` function is what we will be editing, which makes graphics from the parsed data.
* Inside the `drawShapes()` function is a `for-loop`, which cycles through our parsed CSV. This loop contains a lot of commented-out code at the moment, but that code is set up to draw a new shape every time the loop runs. 

![Draw Shapes Function](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/08/12_Draw_Shapes_Function.png)

* This syntax is different from the simple HTML that we saw in the `index.html` file of the first "Getting started" project. Here, since we are creating elements using JavaScript, we have to take a different route to attaching elements to the structure outlined in the front page.
	* The first thing inside the function is a variable that grabs the overall "scene" within which we are drawing our shapes.
	* The second thing assigns a variable name to the data that this function imports. By assigning them both to variables, we can more quickly access each, and our code will be cleaner. 
	* The third thing is a `for-loop` that cycles through the imported data. 
* Keep all of the code commented out for now. Right inside the `for-loop`, we are going to create some additional shortcuts to make our code cleaner.
	* On the top line, paste the following line of code: `var entityEl = document.createElement('a-entity');`. This creates a new HTML entity in our HTML document for every time the loop loops, and assigns it an accessible variable.
	* On the next line, paste the following line of code: `var current_elem = Number(sample_array[i][2]);`. This assigns the current value we are cycling through in the CSV to another accessible variable, and ensures that it is defined as a number, not a string. 
* Navigate to the `Show [Live]` tab to see if anything is visible. Nothing should appear just yet, because we have not assigned the entity we have created any visual attributes. At this time, your code should look something like this:

![Draw Shapes Function](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/08/13_Draw_Shapes_Function.png)


















