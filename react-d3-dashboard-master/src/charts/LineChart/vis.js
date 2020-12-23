import * as d3 from 'd3';
import store from "../../redux" 
import action from "../../redux/actions"


const draw = (props,data) => {

    d3.select('.vis-linechart > *').remove();
    let margin = { top: 0, right: 10, bottom: 0, left: 20 }
    const width = props.width;
    const height = props.height;
    let svg = d3.select(".vis-linechart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("fill","#eee")
        .attr('viewBox',"0 0 "+(width)+" "+(height))
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis --> it is a date format
    var parseTime = d3.timeParse("%Y-%m-%d")
    var fomatTime = d3.timeFormat("%Y-%m-%d")
    let x = d3.scaleTime()
        .domain([parseTime(data[0][0].dateid),parseTime(data[0][data[0].length-1].dateid)])
        .range([0, width-40]);
    svg.append("g")
        .attr("transform", "translate(0," + (30) + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    var y1 = d3.scaleLinear()
        .domain([0, d3.max(data[0], (d)=>d.confirmedincr)])
        .range([height-23, 0]);
    var y2 = d3.scaleLinear()
        .domain([0, d3.max(data[1], (d)=>d.confirmedincr)])
        .range([height-23, 0]);

    // Add the line
    svg.append("path")
        .datum(data[0])
        .attr("id","china_cases")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
            .x(function (d) { 
                return x(parseTime(d.dateid)) })
            .y(function (d) { return y1(d.confirmedincr) })
        )
    svg.append("path")
        .datum(data[1])
        .attr("id","world_total_cases")
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
            .x(function (d) { 
                return x(parseTime(d.dateid)) })
            .y(function (d) { return y2(d.confirmedincr) })
        )


//刷选


  var brush = d3.brushX()
                .extent([[0,0],[width-40,height-18]])
                .on('brush',()=>{
                    const selection = d3.event.selection;
                })
                .on('end',()=>{
                    const selection = d3.event.selection;
                    console.log(selection);
                    store.dispatch(action.modifyTimeLine(fomatTime(x.invert(selection[0])),fomatTime(x.invert(selection[1]))));
                });



   const brushG = svg.append('g')
                    .attr('class','brush')
                    .call(brush)
                    // .call(brush.move, x.range())

}

export default draw;

