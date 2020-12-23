import * as d3 from 'd3';
var cloud = require("d3-cloud")


const draw = (props,data,check_topic) => {
    console.log("cloud",data)
    d3.select('.vis-wordcloud > *').remove();
    const topics = ['17','103','57','42','20','56','61','97','15','31','58'     
                    ,'37','13','59','30','173','19','11','121','131'];     
    const ColorMap = d3.scaleOrdinal()                                  
                            .domain(topics)                                  
                            .range(['FDA049','EB8370','EA8F85','F5998E','F4AAA4','DCA7B2',                                  
                            'EAAEC9', 'DAA5DF', 'BF9AD5', 'A599FF', '9385FF', '5BA3D7',                  
                            '5CD9FF','85E4FF','99FFDB','A0E3D8','7CB6B1' ,'A7C8BB' ,'B1D3D0']) 
    const width = props.width;
    const height = props.height-30;
    const size = d3.scaleLinear()
                    .domain([d3.min(data,(d)=>{
                        return d.size
                    }),d3.max(data,(d)=>{
                        return d.size
                    })])
                    .range([20,300])
    var layout = cloud()
        .size([width, height])  //size([x,y]) 词云显示的大小
        .words(data)
        .padding(5)
        .rotate(function() { 
            // return ~~(Math.random() * 3) * 15; 
            return 0
        })
        .font("Impact")
        .fontSize(function(d) { return size(d.size); })
        .on("end", drawWord);
    layout.start();
    function drawWord(words) {
        d3.select(".vis-wordcloud").append("svg")
            .attr("width", layout.size()[0])
            .attr("height", layout.size()[1])
            .append("g")
            .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return ColorMap(check_topic); })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x-2, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
    }  

  }

export default draw;