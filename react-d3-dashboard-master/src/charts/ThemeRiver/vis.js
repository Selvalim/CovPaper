import * as d3 from 'd3';
import data from "../../data/topics_weekly.json";

const draw = (props) => {
    d3.select('.vis-themeriver > *').remove();
    const width = props.width;
    const height = props.height;
    const padding = {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      };
    const axisHeight = height;
    const axisWidth = width;
    const z = d3.interpolateWarm;

    //data
    const topics = ['106','32','73','100','40','11','27','85','53','72','170'
    ,'93','67','159','161','14','55','38','118'];
    const stackData = [];
    for(var d in data){
      let newObj = {
        '106':0,'32':0,'73':0,'100':0,'40':0,'11':0,'27':0,'85':0,'53':0,'72':0,'170':0
    ,'93':0,'67':0,'159':0,'161':0,'14':0,'55':0,'38':0,'118':0
      }
      let obj = data[d].replace(/{/g,"{\"");
      obj = obj.replace(/: /g,"\":\"");
      obj = obj.replace(/, /g,"\",\"");
      obj = obj.replace(/}/g,"\"}");
      obj = JSON.parse(obj);
      //将字符串转换为对象
      for(let a in obj){
        if(topics.indexOf(a.toString())>0){
          newObj[a.toString()] = parseInt(obj[a.toString()])
        }
      }
      stackData.push({
        'date': d.slice(16,-2),
        ...newObj
      })
    }
    const svg = d3.select('.vis-themeriver').append('svg').attr('width',width).attr('height',height)
                        .attr('viewBox',"0 0 "+(width)+" "+(height-10))
    

    const stack = d3.stack().keys(topics).offset(d3.stackOffsetWiggle);
    
    const series = stack(stackData);
    console.log(series[0].length);

    console.log(axisWidth)
      // 定义x轴比例尺
      const x = d3
        .scaleLinear()
        .domain([0, series[0].length-1])
        .range([20, axisWidth-20]);
    
      // 定义y轴比例尺
      const y = d3
        .scaleLinear()
        // 定义定义域
        .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
        // 定义值域
        .range([axisHeight-10, 10]);
    
      const area = d3
        .area()
        .x(function(d, i) {
          return x(i);
        })
        .y0(function(d) {
          return y(d[0]);
        })
        .y1(function(d) {
          return y(d[1]);
        })
        .curve(d3.curveBasis);
        console.log(area)
      svg
        .selectAll('path')
        .data(series)
        .enter()
        .append('path')
        .attr('d', area)
        .attr('fill', function() {
          return z(Math.random());
        });
    
      // 获取堆栈数据矩阵的最大值
      function stackMax(layer) {
        return d3.max(layer, (d) => d[1]);
      }
    
      // 获取堆栈数据矩阵的最小值
      function stackMin(layer) {
        return d3.min(layer, (d) => d[0]);
      }
    }



export default draw;