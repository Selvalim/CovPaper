import * as d3 from 'd3';
var cloud = require("d3-cloud")


const draw = (props,data) => {
    d3.select('.vis-wordcloud > *').remove();
    console.log(data)
    const width = props.width;
    const height = props.height-30;
    var fill = d3.interpolateWarm;  //输出20种类别的颜色 ---颜色比例尺
    var layout = cloud()
        .size([width, height])  //size([x,y]) 词云显示的大小
        .words(data)
        .padding(5)
        .rotate(function() { return ~~(Math.random() * 3) * 15; })
        .font("Impact")
        .fontSize(function(d) { return (d.size)/10; })
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
            .style("fill", function(d, i) { return fill(i/10); })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x-2, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
    }  

  }

export default draw;