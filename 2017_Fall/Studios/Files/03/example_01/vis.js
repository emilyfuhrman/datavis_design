/* ------------------------------------------------------------------
 EXAMPLE 01: CIRCLES WITH DATA-DRIVEN RADII AND COLOR FILL
 -------------------------------------------------------------------- */

 var w = window.innerWidth,
	h = window.innerHeight;

/* ------------------------------------------------------------------
 Below is a sample array of JSON objects. We'll be iterating through
 this data to generate some circles. The radius of each circle will
 be driven by the "radius" value, while the color of the circle will 
 be determined by the "color" value. 
 -------------------------------------------------------------------- */

var sampleData = 	[
					  {
					    "name": "test1",
					    "radius": 56,
					    "color": "#5DA5DA"
					  },
					  {
					    "name": "test2",
					    "radius": 32,
					    "color": "#FAA43A"
					  },
					  {
					    "name": "test3",
					    "radius": 41,
					    "color": "#60BD68"
					  },
					  {
					    "name": "test4",
					    "radius": 68,
					    "color": "#F17CB0"
					  },
					  {
					    "name": "test5",
					    "radius": 26,
					    "color": "#B2912F"
					  },
					  {
					    "name": "test6",
					    "radius": 55,
					    "color": "#B276B2"
					  },
					  {
					    "name": "test7",
					    "radius": 53,
					    "color": "#DECF3F"
					  },
					  {
					    "name": "test8",
					    "radius": 42,
					    "color": "#F15854"
					  }
					];

/* ------------------------------------------------------------------
 Begin by creating an SVG element. I'm appending this one to the div
 "circles", which is defined in the HTML structure of the page. See 
 index.html for the empty div.
 -------------------------------------------------------------------- */

var svg = d3.select("#circles")
	.append("svg:svg")
	.attr("id","circleContainer")
	.attr("width",w)
	.attr("height",h);

/* ------------------------------------------------------------------
 Now we're using the D3 enter() and exit() functions to iterate
 through the sample data and draw circles on the page -- one circle
 for each object. A good intro to the enter() and exit() functions here:

 http://knowledgestockpile.blogspot.com/2012/01/understanding-selectall-data-enter.html

 Since we're appending elements to an SVG object, the one we just created
 above, we have to use SVG elements (such as "line","rect", or "path").
 Here's a full list of basic SVG shapes:

 https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

 Everything you need to make bar charts, line charts, maps, and so on.
 Also, we don't *have* to use SVG elements. But they're easier to 
 animate than HTML elements, which can be nice if you're making a
 visualization that you want to update dynamically.
 -------------------------------------------------------------------- */

var circles = svg 					//select the element we want to append shapes to -- we created 'svg' above
	.selectAll("circle.testNode")	//here we select the elements we want to create, though they don't exist yet
	.data(sampleData);				//we want the sampleData array above to generate our shapes
circles
	.enter()
	.append("circle")								//appends a circle to the SVG element for each item in the array
	.classed("testNode",true)						//assign each one the class "testNode", as defined in the initial select (multiple classes are okay)
	.attr("id",function(d){ return d.name; });		//I decided to give each circle an id based on its "name" attribute
circles
	.attr("cx",function(d,i){						//"cx" is the x-position of the center of the circle
		return (i+1)*150;							//for each circle, I'm setting the x-position based on its index in the array (i)
	})
	.attr("cy",h/2)									//"cy" is the y-position -- I'm just setting this to the height of the page divided by 2
	.attr("r",function(d){ return d.radius; })		//"r" is the radius of the circle -- set this to the "testval" value
	.style("fill",function(d){ return d.color; });	//"fill" is the color fill for each circle -- set this to the "color" value
circles.exit().remove();							

/* ------------------------------------------------------------------
 And that's it! Circles with data-driven radii and fill color.
 -------------------------------------------------------------------- */

