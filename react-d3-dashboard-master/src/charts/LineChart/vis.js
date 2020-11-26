import * as d3 from 'd3';
import _ from 'lodash';

const draw = (props) => {
    let data = [
        {date:"2019-10-11",index:0,amount:17},
        {date:"2019-10-12",index:1,amount:78},
        {date:"2019-10-13",index:2,amount:68},
        {date:"2019-10-14",index:3,amount:88},
        {date:"2019-10-15",index:4,amount:90},
        {date:"2019-10-16",index:0,amount:57},
        {date:"2019-10-17",index:1,amount:78},
        {date:"2019-10-18",index:2,amount:68},
        {date:"2019-10-19",index:3,amount:30},
        {date:"2019-10-20",index:4,amount:90},
        {date:"2019-10-21",index:0,amount:27},
        {date:"2019-10-22",index:1,amount:78},
        {date:"2019-10-23",index:2,amount:58},
        {date:"2019-10-24",index:3,amount:88},
        {date:"2019-10-25",index:4,amount:10},
    ];

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
    let x = d3.scaleTime()
        .domain([parseTime('2019-10-11'),parseTime('2019-10-25')])
        .range([0, width-40]);
    svg.append("g")
        .attr("transform", "translate(0," + (30) + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(data, (d)=>d.amount)])
        .range([height-20, 0]);
    // svg.append("g")
    //     .call(d3.axisLeft(y));

    // Add the line
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
            .x(function (d) { 
                return x(parseTime(d.date)) })
            .y(function (d) { return y(d.amount) })
        )


}

export default draw;