var data =  {                      //   1540944000000 31 October 2018
    "children": [{
        "name": "Netherlands",
        "children": [{
            "name": "DE",
            "value": 1926865,
            "domain": "nl"
        }, {
            "name": "US",
            "value": 994232,
            "domain": "nl"
        }, {
            "name": "IE",
            "value": 1605705,
            "domain": "nl"
        }, { 
            "name": "DK",
            "value": 577465,
            "domain": "nl"
        }, {
            "name": "GB",
            "value": 583312,
            "domain": "nl"
        }, {
            "name": "BE",
            "value": 124921,
            "domain": "nl"
        }]
    }]
}

// set the dimensions and margins of the graph
var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 500 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#treemap")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

  // Give the data to this cluster layout:
  var root = d3.hierarchy(data).sum(function(d){ return d.value}) // Here the size of each leave is given in the 'value' field in input data

  var color = d3.scaleOrdinal()
    // .range(["#00FF00","#0000FF","#FF8C00", "#FFFF00", "#FF0000", "#800080"]);
    .range(["#C78CFF","#AF7BE0","#996CC4", "#805AA3", "#62457C", "#443057"]);

  var tooltip = d3.select("body").append("div").attr("class", "toolTip");

  // Then d3.treemap computes the position of each element of the hierarchy
  d3.treemap()
    .size([width, height])
    .padding(2)
    (root)

  // use this information to add rectangles:
  svg
    .selectAll("rect")
    .data(root.leaves())
    .enter()
    .append("rect")
      .attr('x', function (d) { return d.x0; })
      .attr('y', function (d) { return d.y0; })
      .attr('width', function (d) { return d.x1 - d.x0; })
      .attr('height', function (d) { return d.y1 - d.y0; })
      .style("stroke", "black")
      .style("fill", function(d) { return color(d.data.name);})
       .on("mouseover", function(d) {
      tooltip
        .style("left", d3.event.pageX - 50 + "px")
        .style("top", d3.event.pageY - 70 + "px")
        .style("display", "inline-block")
        .html((d.data.name) + "<br>" + ("€" + d.value)); })
    .on("mouseout", function(d){ tooltip.style("display", "none");});

  // and to add the text labels
  svg
    .selectAll("text")
    .data(root.leaves())
    .enter()
    .append("text")
      .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
      .attr("y", function(d){ return d.y0+13})    // +20 to adjust position (lower)
      .text(function(d){ return d.data.name })
      .attr("font-size", "15px")
      .attr("fill", "white")