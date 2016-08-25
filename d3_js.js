 // <script type="text/javascript">
    // var spaceCircles = [30, 70, 110]
    var circle1 = "c1.json";
    var circle2 = "c2.json";

    // var container = svg.append("g");
    //Tip JS
    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
            //tooltip info shold be there in the json
            return "<strong></strong> <span style='color:red'>" + d.name + "</span>";
        })
        //End Tip JS

    // selecting body container for SVG

    var svgContainer = d3.select(".add").append("svg")
        .attr("width", 800)
        .attr("height", 500)
        .style("border", "1px solid black");
    //for the tip
    svgContainer.call(tip)


    function drawCirc(newData) {
        console.log(newData); // Confirms data source
        // Read in the JSON data
        d3.json(newData, function(dataset) {

            //ENTER
            var circle = svgContainer.selectAll("circle")
                .data(dataset, function(d) {
                    return d;
                });

            circle.enter().append("circle")
              .attr("transform", "rotate(-720)")
            .attr("transform", "scale(1)")
             .on('mouseover', tip.show)
            .on('mouseout', tip.hide);

            circle.transition()
            .duration(2000)
            .delay(1000)
            .ease("bounce")

            .attr("cx", function(d) {
                    // console.log(d)
                    return d.x_axis;
                })
                .attr("cy", function(d) {
                    return d.y_axis;
                })
                .attr("r", function(d) {
                    return d.radius;
                })
                .style("fill", function(d) {
                    return d.color;
                });

            //EXIT                     
            circle.exit().remove();
            // circle.exit();
        });
    }


    drawCirc(circle2);

    // var showAmb = function() {

    //     var circles = svgContainer.selectAll("circle")
    //         .data(jsonCircles)
    //         .enter()
    //         .append("circle")
    //         // .on("mouseover", function(d){
    //         //  d3.select(this).style("fill", "pink");
    //         // })
    //         .on('mouseover', tip.show)
    //         .on('mouseout', tip.hide);
    //     // .on("mouseout", function(d){
    //     //  d3.select(this).style("fill", "trasparent");
    //     // });

        //get the attribute

    //     var circleAttributes = circles
    //         .transition()
    //         .duration(750)
    //         .delay(500)
    //         .ease("bounce")
    //         .attr("cx", function(d) {
    //             return d.x_axis;
    //         })
    //         .attr("cy", function(d) {
    //             return d.y_axis;
    //         })
    //         .attr("r", function(d) {
    //             return d.radius;
    //         })
    //         .style("fill", function(d) {
    //             return d.color;
    //         });


    // }

    d3.select('#opts')
        .on('change', function() {
            var newData = eval(d3.select(this).property('value'));
            drawCirc(newData); // Call with new selection.
        });

    // var circleAttributes=circles
    // .transition()
    //   .duration(750)
    //   .delay(500)
    //  .ease("bounce")
    //   .attr("cx",function(d){return d.x_axis;})
    // 							.attr("cy",function(d){return d.y_axis;})
    // 							.attr("r",function(d){return d.radius;})
    // 							.style("fill",function(d){return d.color;});


    // 						.on("mouseover", function(d){
    // 	d3.select(this).style("fill", "pink");
    // });

    // 							.on('mouseover', function(d) {
    //   d3.select(this).transition()
    //     .ease('cubic-out')
    //     .duration('200')
    //     .attr('font-size', 32)
    //     .attr('fill', 'springgreen');
    // })
    // .on('mouseout', function(d) {
    //   d3.select(this).transition()
    //     .ease('cubic-out')
    //     .duration('200')
    //     .attr('font-size', 20)
    //     .attr('fill', '#333');
    // });

    // .ease("bounce") or .ease("elastic") after .transition() you can achieve that effect. note that bounce and elastic are similar but not the same.
    // </script>