import * as d3 from 'd3';
var cloud = require("d3-cloud")

const data = [
  {text:"互联网医疗", size:30},
  {text:"基因检测", size:30},
  {text:"医疗服务", size:26},
  {text:"再生医学", size:30},
  {text:"生物科技", size:26},
  {text:"医药", size:34},
  {text:"免疫治疗", size:16},
  {text:"体外诊断", size:20},
  {text:"医疗设备", size:30},
  {text:"医疗影像", size:24},
  {text:"脑科学", size:20},
];



const draw = (props) => {
    d3.select('.vis-wordcloud > *').remove();
    const width = props.width;
    const height = props.height-20;
    var fill = d3.interpolateWarm;  //输出20种类别的颜色 ---颜色比例尺
    var layout = cloud()
        .size([width, height])  //size([x,y]) 词云显示的大小
        .words(data)
        .padding(5)
        .rotate(function() { return ~~(Math.random() * 3) * 15; })
        .font("Impact")
        .fontSize(function(d) { return (d.size)*1.5; })
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