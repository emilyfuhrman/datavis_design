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

![JS Link](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/08/10_JS_Link.png)














