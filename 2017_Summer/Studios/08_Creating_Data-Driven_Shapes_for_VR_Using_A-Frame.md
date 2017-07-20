## Studio 08 - Creating Data-Driven Shapes for VR Using A-Frame

In this studio, we will be exploring the world of data-driven, VR-ready shapes using [A-Frame](https://aframe.io/). A-Frame is a web framework for building virtual reality experiences, viewable through VR headsets like [Google Cardboard](https://vr.google.com/cardboard/) and [Oculus Rift](https://www.oculus.com/rift/). We will first learn the basics of drawing 3-D primitives using the library, and then will progress to rendering the values of a simple CSV file as a series of geometric shapes. The purpose of this studio is to familiarize participants with VR technology and the basics of web development, while working with a familiar dataset generated from the previous week's studio.

### Glitch

We will be using [Glitch](https://glitch.com/) in this studio to facilitate the process of getting a web development environment up and running. Two projects exist for you to clone and edit:

* Getting started - Available [here](https://glitch.com/edit/#!/fir-airport)
* Visualizing data - Available [here](https://glitch.com/edit/#!/sage-branch)

### A-Frame basics

* Like other graphics systems we have encountered, A-Frame (built on top of the JavaScript library [three.js](https://threejs.org/), which is itself a 3-D library that makes [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) much more user-friendly, if still complicated) comes with a series of primitive shapes that are easy to generate and manipulate. Since A-Frame's shapes are 3-dimensional, they include a [torus](https://aframe.io/docs/0.6.0/primitives/a-torus.html), [box](https://aframe.io/docs/0.6.0/primitives/a-box.html), [cylinder](https://aframe.io/docs/0.6.0/primitives/a-cylinder.html), [cone](https://aframe.io/docs/0.6.0/primitives/a-cone.html), and [sphere](https://aframe.io/docs/0.6.0/primitives/a-sphere.html), to name a few.
* **A-Frame can be developed entirely in HTML, without using code.** This is pretty cool! (Though to actually visualize data in this medium usually requires code.)
* Since A-Frame leverages 3-D rendering capabilities, it introduces a number of new concepts that apply to 3-dimensional scenes (such as the [camera](https://aframe.io/docs/0.6.0/components/camera.html), and [light](https://aframe.io/docs/0.6.0/components/light.html)). While these feature are necessary to understand if you want to build complex VR experiences, the best way to grow accustomed to them is through practice and experience. 
* Aside from some new syntax, the most we will have to worry about today is the addition of the z-axis, which controls how "far away" the things we draw appear from us on the screen. 

### Getting started

* Navigate to the "Getting started" project. Your window should look something like this:

![Initial Project Page](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/08/01_Initial_Project_Page.png)

* To see what we are working with, click the `Show [Live]` button at the top left corner of the window. In the new tab that opens, you should see a cube, a sphere, and a cylinder resting on a plane. Try clicking and dragging around your window to get a feel for the 3-D effects.

![Initial Project Shapes](https://github.com/emilyfuhrman/datavis_design/blob/master/2017_Summer/Studios/Images/08/02_Initial_Project_Shapes.png)

#### Introduction to A-frame

#### Creating basic 3-D primitives