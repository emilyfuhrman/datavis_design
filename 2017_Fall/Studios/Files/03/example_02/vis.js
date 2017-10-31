/* ------------------------------------------------------------------
 EXAMPLE 02: HOVER AND CLICK EVENTS
 -------------------------------------------------------------------- */

var w = window.innerWidth,
	h = window.innerHeight;

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


var svg = d3.select("#circles")
	.append("svg:svg")
	.attr("id","circleContainer")
	.attr("width",w)
	.attr("height",h);

var circles = svg 					
	.selectAll("circle.testNode")	
	.data(sampleData);				
circles
	.enter()
	.append("circle")								
	.classed("testNode",true)						
	.attr("id",function(d){ return d.name; });		
circles
	.attr("cx",function(d,i){						
		return (i+1)*150;							
	})
	.attr("cy",h/2)									
	.attr("r",function(d){ 
		return d.radius; 
	})		
	.style("fill",function(d){ 
		return d.color; 
	});	
circles
	.on("mouseover",function(d){
		d3.select(this)
			.style("fill","#ccc");
	})
	.on("mousemove",function(){ })
	.on("mouseout",function(d){
		d3.select(this)
			.style("fill",d.color);
	})
	.on("click",function(d){
		d3.select(this)
			.style("stroke","#000")
			.style("stroke-width",3);
	})
	;
circles.exit().remove();							

/* ------------------------------------------------------------------
 And that's it! Some hover and click interactions.
 -------------------------------------------------------------------- */

