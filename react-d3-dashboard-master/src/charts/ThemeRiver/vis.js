import * as d3 from 'd3';
// import data from "../../data/topics_weekly.json";
import store from "../../redux"
import action from "../../redux/actions"

const draw = (props,stackData,start,end) => {
    const state = store.getState();
    d3.select('.vis-themeriver > *').remove();
    const width = props.width;
    const height = props.height;
    const padding
     = {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      };
    const axisHeight = height;
    const axisWidth = width;
    const z = d3.interpolateWarm;
    const parseTime = d3.timeParse("%Y-%m-%d")
    const Time2Num = d3.scaleTime()
                        .domain([parseTime('2019-01-19'),parseTime('2020-07-20')])
                        .range([0,41])

    

    //data
    const topics = ['17','103','57','42','20','56','61','97','15','31','58'
    ,'37','13','59','30','173','19','11','121','131'];
    const ColorMap = d3.scaleOrdinal()
                        .domain(topics)
                        .range(['FDA049','EB8370','EA8F85','F5998E','F4AAA4','DCA7B2',
                        'EAAEC9', 'DAA5DF', 'BF9AD5', 'A599FF', '9385FF', '5BA3D7', 
                        '5CD9FF','85E4FF','99FFDB','A0E3D8','7CB6B1' ,'A7C8BB' ,'B1D3D0'])


    const svg = d3.select('.vis-themeriver').append('svg').attr('width',width).attr('height',height)
                        .attr('viewBox',"0 0 "+(width)+" "+(height-10))
    

    const stack = d3.stack().keys(topics).offset(d3.stackOffsetWiggle);
    console.log(stackData)
    const series = stack(stackData);

      // 定义x轴比例尺
      const x = d3
        .scaleLinear()
        .domain([parseTime(start),parseTime(end)])
        .range([20, axisWidth-20]);
    
      // 定义y轴比例尺
      const y = d3
        .scaleLinear()
        // 定义定义域
        .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
        // 定义值域
        .range([axisHeight-10, 10]);
    
      const area = d3   //生成闭合path填充
        .area()
        .x(function(d, i) {
          return x(parseTime(d.data.date));
        })
        .y0(function(d) {
          return y(d[0]);
        })
        .y1(function(d) {
          return y(d[1]);
        })
        .curve(d3.curveBasis);
      svg
        .selectAll('path')
        .data(series)
        .enter()
        .append('path')
        .attr('d', area)
        .attr('topic', (val,index)=> topics[index])
        .attr('click', false)
        .attr('fill', function() {
          let topic = d3.select(this).attr('topic')
          return '#' + ColorMap(topic);
        })
        .attr('opacity',function(){
          let topic = d3.select(this).attr('topic')
          if(topic==state.check_topic||state.check_topic==0){
            return 1
          }else{
            return 0.6
          }
        })
        .attr('stroke',function(){
          let topic = d3.select(this).attr('topic')
          if(topic==state.check_topic){
            return 'gray'
          }else{
            return ''
          }
        })

      svg.selectAll("path")
        .on("click",function(){
          let topic = d3.select(this).attr("topic")
          store.dispatch(action.modifyCheckTopic(parseInt(topic)))
        })
      


    
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


                             // const stackData = [];     // for(var d in data){     //   let newObj = {     //     '106':0,'32':0,'73':0,'100':0,'40':0,'11':0,'27':0,'85':0,'53':0,'72':0,'170':0     // ,'93':0,'67':0,'159':0,'161':0,'14':0,'55':0,'38':0,'118':0     //   }     //   let obj = data[d].replace(/{/g,"{\"");     //   obj = obj.replace(/: /g,"\":\"");     //   obj = obj.replace(/, /g,"\",\"");     //   obj = obj.replace(/}/g,"\"}");     //   obj = JSON.parse(obj);     //   //将字符串转换为对象     //   for(let a in obj){     //     if(topics.indexOf(a.toString())>0){     //       newObj[a.toString()] = parseInt(obj[a.toString()])     //     }     //   }     //   stackData.push({     //     'date': d.slice(16,-2),     //     ...newObj     //   })     // }     //stackData = stackData.slice(parseInt(Time2Num(state.start)),parseInt(Time2Num(state.end)))     //svg