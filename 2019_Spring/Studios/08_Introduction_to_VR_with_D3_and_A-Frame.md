## Studio 08 - Introduction to VR with D3.js and A-FRAME

In this studio, we will be exploring the world of data-driven, VR-ready shapes using [A-Frame](https://aframe.io/). A-Frame is a web framework for building virtual reality experiences, viewable through VR headsets like [Google Cardboard](https://vr.google.com/cardboard/) and [Oculus Rift](https://www.oculus.com/rift/). We will first learn the basics of drawing 3-D primitives using the library, and then will progress to rendering the values of a simple array in a bar chart. The purpose of this studio is to familiarize participants with VR technology and the basics of web development.

### Preparation
#### Workspace
We will be working in [Observable](https://beta.observablehq.com/). If you would like to save your work, you must create an Observable account (which requires creating a [Github](https://github.com/) account first).

* Working templates:
	* [(Basic)](https://observablehq.com/@emilyfuhrman/master-studio-introduction-to-vr-with-d3-js-and-a-frame-basic)
	* [(Advanced)](https://observablehq.com/@emilyfuhrman/studio-introduction-to-vr-with-d3-js-and-a-frame-advanced)
* Master copies:
	* [(Basic)](https://observablehq.com/@emilyfuhrman/master-studio-introduction-to-vr-with-d3-js-and-a-frame-basic)
	* [(Advanced)](https://observablehq.com/@emilyfuhrman/studio-introduction-to-vr-with-d3-js-and-a-frame)

#### Mobile device
If you have chosen to use your mobile phone in conjunction with Google Cardboard, make sure that you enable motion detection in Safari: `Settings > Safari > Motion & Orientation Access`. iPhone is notably finicky with VR mode through Observable, but it is worth checking to see if your device will handle it properly.

### A-Frame basics

* Like other graphics systems we have encountered, A-Frame (built on top of the JavaScript library [three.js](https://threejs.org/), which is itself a 3-D library that makes [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) much more user-friendly, if still complicated) comes with a series of primitive shapes that are easy to generate and manipulate. Since A-Frame's shapes are 3-dimensional, they include fun things like a [torus](https://aframe.io/docs/0.6.0/primitives/a-torus.html), a [box](https://aframe.io/docs/0.6.0/primitives/a-box.html), a [cylinder](https://aframe.io/docs/0.6.0/primitives/a-cylinder.html), a [cone](https://aframe.io/docs/0.6.0/primitives/a-cone.html), and a [sphere](https://aframe.io/docs/0.6.0/primitives/a-sphere.html), to name a few.
* **A-Frame can be developed entirely in HTML, without using code.** This is pretty cool! (Though to actually visualize data in this medium usually requires code.)
* Since A-Frame leverages 3-D rendering capabilities, it introduces a number of new concepts that apply to 3-dimensional scenes (such as the [camera](https://aframe.io/docs/0.6.0/components/camera.html), and [light](https://aframe.io/docs/0.6.0/components/light.html)). While these features are necessary to understand if you want to build complex VR experiences, the best way to grow accustomed to them is through practice and experience. 
* Aside from some new syntax, the most we will have to worry about today is the addition of the z-axis, which controls how "far away" the things we draw appear from us on the screen. 

### Getting started
#### Creating and exploring basic 3-D primitives

* Navigate to the "Getting started" project. Your window should look something like this:

![Initial Page](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/08/01_Initial_Page.png)

* To see what we are working with, click the VR silhouette button in the bottom right corner of the window. In full screen mode, you should see a cube, a sphere, and a cylinder resting on a plane. Try clicking and dragging around your window to get a feel for the 3-D effects.

![Initial Shapes](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/08/02_Initial_Shapes.png)

* Click `esc` to navigate back to the previous view of the project.
* Click the space to the left of the shapes to open up the code that generates them. 

![Code View](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/08/03_Code_View.png)

* Here, you can see all of the logic that goes into creating the shapes visible in the previous screen.
	* An `<a-scene>` container bounds a series of shapes. 
	* Inside the `<a-scene>` container, there are four declarations: an `<a-box>`, an `<a-sphere>`, an `<a-cylinder>`, and an `<a-plane>`.
	* Each of these declarations contains different parameters. The first four shapes contain `position`, `rotation`, and `color` properties. The `<a-circle>` and `<a-cylinder>` declarations contain a `radius` property. 
	* The `position` property places objects in 3-D space. (Read more [here](https://aframe.io/docs/0.6.0/components/position.html).) It is defined by three space-delimited numbers: `x`, `y`, and `z`. 
	* The `rotation` property rotates objects in 3-D space. (Read more [here](https://aframe.io/docs/0.6.0/components/rotation.html).) It is also defined by three space delimited numbers: rotation about the x-axis, rotation about the y-axis, and rotation about the z-axis (also known as `roll`, `pitch`, and `yaw`).
	* The `color` property takes a string, a hex code, or an RGB value.
* To access the full screen view for this new project, click the VR headset silhouette at any time. 
* To get used to this new environment, let's try making a few visual changes. Some ideas to try:
	* Change the position of the box.
	* Change the color of the sphere.
	* Change the color of the sky.
	* Change the radii of the sphere and cylinder. 

![Editing Shapes](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/08/04_Editing_Shapes.png)

* As a test, try setting the z-value of the `box`, `sphere`, and `cylinder` to `-10`, `-15`, and `-12`, respectively. Click on the `Show [Live]` tab to see what happens.

![Far Away](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/08/05_Far_Away.png)

* Now, just for fun, let's try adding a torus to the scene. Navigate back to the HTML view, and below the `<a-cylinder>` declaration, add the following line of code:

`<a-torus position="1 0.75 -6"  color="#43A367" arc="270" radius="5" radius-tubular="0.1"></a-torus>`

* If we navigate to the `Show [Live]` tab, something new should appear:

![New Torus Scene](https://github.com/emilyfuhrman/datavis_design/blob/master/2019_Spring/Studios/Images/08/07_New_Torus_Scene.png)

### (Advanced) D3.js and A-FRAME

Navigate to the working copy of the [advanced](https://observablehq.com/@emilyfuhrman/studio-introduction-to-vr-with-d3-js-and-a-frame-advanced) portion of today's studio, where we will revisit some familiar D3.js syntax to visualize a simple array using these shapes.