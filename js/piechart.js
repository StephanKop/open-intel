var data = [					// 1540944000000 31 October 2018
{
    "name": "DE",
    "value": 385373
}, {
    "name": "US",
    "value": 249181
}, {
    "name": "IE",
    "value": 214094
}, {
    "name": "DK",
    "value": 82495
}, {
    "name": "GB",
    "value": 72914
}, {
    "name": "BE",
    "value": 58041
}]

var width = 300,
	height = 400,
	radius = Math.min(width, height) / 2;

var color = d3.scaleOrdinal()
	.range(["#00FF00","#0000FF","#FF8C00", "#FFFF00", "#FF0000", "#800080"]);

var tooltip = d3.select("body").append("div").attr("class", "toolTip");

var pie = d3.pie()
	.value(function(d) { return d.value; })(data);

var arc = d3.arc()
	.outerRadius(radius - 10)
	.innerRadius(0);

var labelArc = d3.arc()
	.outerRadius(radius - 40)
	.innerRadius(radius - 40);

var svg = d3.select("#pie")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
		.append("g")
		.attr("transform", "translate(" + width/2 + "," + height/2 +")");

var g = svg.selectAll("arc")
	.data(pie)
	.enter().append("g")
	.attr("class", "arc");

g.append("path")
	.attr("d", arc)
	.style("fill", function(d) { return color(d.data.name);})
	   .on("mouseover", function(d) {
      tooltip
        .style("left", d3.event.pageX - 50 + "px")
        .style("top", d3.event.pageY - 70 + "px")
        .style("display", "inline-block")
        .html((d.data.name) + "<br>" + (d.value)); })
    .on("mouseout", function(d){ tooltip.style("display", "none");});

g.append("text")
	.attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
	.text(function(d) { return d.data.name;})
	.style("fill", "#fff");