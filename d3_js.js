 // <script type="text/javascript">
 // var spaceCircles = [30, 70, 110]
 var circle1 = "c1.json";
 var circle2 = "c2.json";
 var circle3 = "c3.json";
 var circle4 = "c4.json";
 var circle5 = "c5.json";
 var circle6 = "c6.json";

 // var container = svg.append("g");
 //Tip JS
 var tip = d3.tip()
     .attr('class', 'd3-tip')
     .offset([-10, 0])
     .html(function(d) {
         //tooltip info shold be there in the json
         return "<strong></strong> <span style='color:red'>" + d.label + "</span>";
     })
     //End Tip JS



 // selecting body container for SVG
 // var id = 2;
 var svgContainer = d3.select(".add").append("svg")
     .attr("width", 900)
     .attr("height", 400)
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


         // //             .on("mouseover",function(){
         //             var sel = d3.select("text");
         //     sel.moveToFront();
         // // });

         // ----end of appending text


         // svgContainer.select(“this”).transition()

         circle.enter().append("circle")
             // .attr("transform", "rotate(-720)")
             // .attr("class", function(d) { return "fadeIn " + d.effect })
             // .attr("transform", "scale(1)")
             .on('mouseenter', function() {
                 // select element in current context
                 d3.select(this)
                     // add transition
                     // .transition()
                     // change attribute
                     // .attr( 'r', 10 );
                     .style("fill", "red");
             })

         .on('mouseleave', function() {
                 // select element in current context
                 d3.select(this)
                     // add transition
                     // .transition()
                     // change attribute
                     // .attr( 'r', 16 );
                     .style("fill", function(d) {
                         return d.color;
                     });
             })
             //         
             .on('mouseover', tip.show)
             .on('mouseout', tip.hide);

         circle

         // .attr("id",function(d){
         //     // return d.id;
         //      if (d.id == 2) {
         //         // return delay1
         //         // delay(6000)
         //          circle.style("fill",function(d){
         //             return d.color="green";
         //          });
         //     }  
         // })
         // .attr("transform", function(d) { return "translate(" + d.x_axis + "," + d.y_axis + ")"; })
             .attr("cx", function(d) {
                 // console.log(d)
                 return d.x_axis;
             })
             .attr("cy", function(d) {
                 return d.y_axis;
             })
             .transition()
             .duration(2500)
             .attr("r", 0)
             .attr("r", function(d) {
                 return d.radius;
             })

         // .transition()
         .style("fill", function(d) {
             return d.color;
         });


         // to append text


         var text = svgContainer.selectAll("text")
             .data(dataset, function(d) {
                 return d;
             })
             .enter()
             .append("text");

         text
             .attr("x", function(d) {
                 return d.x_axis;
             })
             .attr("dy", function(d) {
                 return d.y_axis + 7;
             })
             // .attr("opacity", "0")
             .transition()
             .delay(950)
             .duration(1000)
             // .delay(1700)
             // attr("opacity", "1")
             .text(function(d) {
                 return d.name;
             })
             // .attr("class", "arc")
             // .attr("class", function(d) { return "zoomIn " + d.zoomIn })
             // .attr("class", "zoomIn")
             .attr("text-anchor", "middle")
             .attr("font-family", "sans-serif")
             // .attr("font-size", "0")
             // .attr("font-size", "1em")
             // .attr('font-size', '1em')
             // .duration(500)
             // .transition()
             // .attr('font-size', '2em')
             // .duration(500)

         .style("font-size", function(d) {
             return Math.min(2 * d.radius, (2 * d.radius - 8) / this.getComputedTextLength() * 12) + "px";
         })
         // .attr("transform", "scale(.5)")
         .attr("fill", "blue");


         /* Create the text for each block */
         // circle.append("text")
         //     .attr("dx", function(d){return -20})
         //     .text(function(d){return d.label})
         // var label = circle.append("text")
         //     .text(function(d){
         //       return d.label;
         //     })
         //     .attr({
         //       "alignment-baseline": "middle",
         //       "text-anchor": "middle",
         //       "color":"blue"
         //     })

         //EXIT 


         // text.exit()
         //  .transition()
         //              .duration(1000)
         //              .delay(1500)
         //              .remove();



         circle.exit()
             .transition()
             .duration(2000)

         .attr("r", function(d) {
                 return d.radius;
             })
             .attr("r", 0)
             // .attr("class", function(d) { return "fadeOut " + d.effect })
             .remove();
         // circle.exit();


     });

     d3.selectAll("text")

     .transition()

     // .delay(950)
     .duration(1500)
     .style("font-size", function(d) {
         return Math.min(2 * d.radius, (2 * d.radius - 8) / this.getComputedTextLength() * 12) + "px";
     })
     .remove();

 }


 drawCirc(circle1);


 d3.select('#opts')
     .on('change', function() {
         var newData = eval(d3.select(this).property('value'));
         drawCirc(newData); // Call with new selection.
     });

 