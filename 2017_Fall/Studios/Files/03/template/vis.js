/* ------------------------------------------------------------------
 TEMPLATE
 -------------------------------------------------------------------- */

var w = window.innerWidth,
		h = window.innerHeight;

var my_svg = d3.select('#my_great_div').append('svg')
	.attr('width',w)
	.attr('height',h)
	;

var my_circles = my_svg
	.selectAll('circle')
	.data([2,4,6,12,3,8]);
my_circles.enter().append('circle');
my_circles
	//.attr('cx',200)
	.attr('cx',function(d,i){
		return 60+(i*100);
	})
	.attr('cy',400)
	//.attr('r',10);
	.attr('r',function(d){
		return d*4;
	})
	.style('fill','blue')
	.style('fill-opacity',function(d){
		return d/10;
	});
my_circles
	.on('click',function(){
		d3.select(this).style('fill','red');
	})
	.on('mouseover',function(){
		d3.select(this).style('stroke','black');
	})
	;
my_circles.exit().remove();









