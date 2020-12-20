import * as d3 from 'd3';
import G6 from "@antv/g6";
import { Layout } from 'antd';
import { func } from 'prop-types';

const data = [
    {
        date:'2020-02-15',
        news:[
            {
                id:'00000',
                topic_propotion:[{
                    '17':0.25,
                    '173':0.15,
                    '20':0.6,
                }],
                paper_distribution:[
                        {
                        date:'2020-01-19',
                        count:13
                    },{
                        date:'2020-02-07',
                        count:19
                    },{
                        date:'2020-02-17',
                        count:28
                    },{
                        date:'2020-03-07',
                        count:8
                    },{
                        date:'2020-03-12',
                        count:50
                    },
                    {
                        date:'2020-03-19',
                        count:13
                    },{
                        date:'2020-03-27',
                        count:19
                    },{
                        date:'2020-04-07',
                        count:28
                    },{
                        date:'2020-04-11',
                        count:8
                    },{
                        date:'2020-04-17',
                        count:50
                    },
                    {
                        date:'2020-04-19',
                        count:13
                    },{
                        date:'2020-04-27',
                        count:19
                    },{
                        date:'2020-05-07',
                        count:28
                    },{
                        date:'2020-05-12',
                        count:8
                    },{
                        date:'2020-05-17',
                        count:50
                    },
                    {
                        date:'2020-06-02',
                        count:13
                    },{
                        date:'2020-06-05',
                        count:19
                    },{
                        date:'2020-06-17',
                        count:28
                    },{
                        date:'2020-06-27',
                        count:8
                    },{
                        date:'2020-07-02',
                        count:50
                    },
                    
                ]
            },
            {
                id:'00001',
                topic_propotion:[{
                    '103':0.25,
                    '97':0.15,
                    '20':0.4,
                    '57':0.1,
                    "173":0.1,
                }],
                paper_distribution:[
                        {
                        date:'2020-03-01',
                        count:13
                    },{
                        date:'2020-03-07',
                        count:28
                    },{
                        date:'2020-04-07',
                        count:28
                    },{
                        date:'2020-05-07',
                        count:28
                    },{
                        date:'2020-06-07',
                        count:50
                    },
                ]
            },
        ]
    },
    {
        date:'2020-03-15',
        news:[
            {
                id:'00002',
                topic_propotion:[{
                    '61':0.25,
                    '173':0.15,
                    '20':0.6,
                }],
                paper_distribution:[
                        {
                        date:'2020-03-01',
                        count:13
                    },{
                        date:'2020-03-07',
                        count:28
                    },{
                        date:'2020-04-07',
                        count:28
                    },{
                        date:'2020-05-07',
                        count:28
                    },{
                        date:'2020-06-07',
                        count:50
                    },
                ]
            },
            {
                id:'00003',
                topic_propotion:[{
                    '131':0.25,
                    '56':0.15,
                    '20':0.6,
                }],
                paper_distribution:[
                        {
                        date:'2020-03-01',
                        count:13
                    },{
                        date:'2020-03-07',
                        count:28
                    },{
                        date:'2020-04-07',
                        count:28
                    },{
                        date:'2020-05-07',
                        count:28
                    },{
                        date:'2020-06-07',
                        count:50
                    },
                ]
            },
        ]
    },
    {
        date:'2020-03-15',
        news:[
            {
                id:'00004',
                topic_propotion:[{
                    '131':0.25,
                    '173':0.15,
                    '20':0.6,
                }],
                paper_distribution:[
                        {
                        date:'2020-03-01',
                        count:13
                    },{
                        date:'2020-03-07',
                        count:28
                    },{
                        date:'2020-04-07',
                        count:28
                    },{
                        date:'2020-05-07',
                        count:28
                    },{
                        date:'2020-06-07',
                        count:50
                    },
                ]
            },
            {
                id:'00005',
                topic_propotion:[{
                    '131':0.25,
                    '173':0.15,
                    '20':0.6,
                }],
                paper_distribution:[
                        {
                        date:'2020-03-01',
                        count:13
                    },{
                        date:'2020-03-07',
                        count:28
                    },{
                        date:'2020-04-07',
                        count:28
                    },{
                        date:'2020-05-07',
                        count:28
                    },{
                        date:'2020-06-07',
                        count:50
                    },
                ]
            },
            {
                id:'00006',
                topic_propotion:[{
                    '131':0.25,
                    '173':0.15,
                    '20':0.3,
                    '42':0.3,
                }],
                paper_distribution:[
                        {
                        date:'2020-03-01',
                        count:13
                    },{
                        date:'2020-03-07',
                        count:28
                    },{
                        date:'2020-04-07',
                        count:28
                    },{
                        date:'2020-05-07',
                        count:28
                    },{
                        date:'2020-06-07',
                        count:50
                    },
                ]
            },
            {
                id:'00006',
                topic_propotion:[{
                    '131':0.25,
                    '173':0.15,
                    '20':0.3,
                    '42':0.3,
                }],
                paper_distribution:[
                        {
                        date:'2020-03-01',
                        count:13
                    },{
                        date:'2020-03-07',
                        count:28
                    },{
                        date:'2020-04-07',
                        count:28
                    },{
                        date:'2020-05-07',
                        count:28
                    },{
                        date:'2020-06-07',
                        count:50
                    },
                ]
            },
            {
                id:'00006',
                topic_propotion:[{
                    '131':0.25,
                    '173':0.15,
                    '20':0.3,
                    '42':0.3,
                }],
                paper_distribution:[
                        {
                        date:'2020-03-01',
                        count:13
                    },{
                        date:'2020-03-07',
                        count:28
                    },{
                        date:'2020-04-07',
                        count:28
                    },{
                        date:'2020-05-07',
                        count:28
                    },{
                        date:'2020-06-07',
                        count:50
                    },
                ]
            },
        ]
    },
    {
        date:'2020-03-15',
        news:[
            {
                id:'00004',
                topic_propotion:[{
                    '131':0.25,
                    '173':0.15,
                    '20':0.6,
                }],
                paper_distribution:[
                        {
                        date:'2020-03-01',
                        count:13
                    },{
                        date:'2020-03-07',
                        count:28
                    },{
                        date:'2020-04-07',
                        count:28
                    },{
                        date:'2020-05-07',
                        count:28
                    },{
                        date:'2020-06-07',
                        count:50
                    },
                ]
            },
            {
                id:'00005',
                topic_propotion:[{
                    '131':0.25,
                    '173':0.15,
                    '20':0.6,
                }],
                paper_distribution:[
                        {
                        date:'2020-03-01',
                        count:13
                    },{
                        date:'2020-03-07',
                        count:28
                    },{
                        date:'2020-04-07',
                        count:28
                    },{
                        date:'2020-05-07',
                        count:28
                    },{
                        date:'2020-06-07',
                        count:50
                    },
                ]
            },
            {
                id:'00006',
                topic_propotion:[{
                    '131':0.25,
                    '173':0.15,
                    '20':0.3,
                    '42':0.3,
                }],
                paper_distribution:[
                        {
                        date:'2020-03-01',
                        count:13
                    },{
                        date:'2020-03-07',
                        count:28
                    },{
                        date:'2020-04-07',
                        count:28
                    },{
                        date:'2020-05-07',
                        count:28
                    },{
                        date:'2020-06-07',
                        count:50
                    },
                ]
            },
        ]
    },
    {         
        date:'2020-02-15',         
        news:[             
            {                 
                id:'00000',                 
                topic_propotion:[{                     
                    '17':0.25,                     
                    '173':0.15,                     
                    '20':0.6,                 
                }],                 
                paper_distribution:[                         
                    {                         
                        date:'2020-03-01',                         
                        count:13                     
                    },{                         
                        date:'2020-03-07',                         
                        count:28                     
                    },{                         
                        date:'2020-04-07',                         
                        count:28                     
                    },{                         
                        date:'2020-05-07',                         
                        count:28                     
                    },{                         
                        date:'2020-06-07',                         
                        count:50                     
                    },                 
                ]             
            },             
            {                 
                id:'00001',                 
                topic_propotion:[{                     
                    '103':0.25,                     
                    '97':0.15,                     
                    '20':0.4,                     
                    '57':0.1,                     
                    "173":0.1,                 
                }],                 
                paper_distribution:[                         
                    {                         
                        date:'2020-03-01',                         
                        count:13                     
                    },{                         
                        date:'2020-03-07',                         
                        count:28                     
                    },{                         
                        date:'2020-04-07',                         
                        count:28                     
                    },{                         
                        date:'2020-05-07',                         
                        count:28                     
                    },{                         
                        date:'2020-06-07',                         
                        count:50                     
                    },                 
                ]             
            },         
        ]     
    },
]

const draw = (props) => {
    d3.select('.vis-view4chart > *').remove();
    console.log(data)
    const topics = ['17','103','57','42','20','56','61','97','15','31','58'
    ,'37','13','59','30','173','19','11','121','131'];
    const ColorMap = d3.scaleOrdinal()                         
        .domain(topics)                         
        .range(['FDA049','EB8370','EA8F85','F5998E','F4AAA4','DCA7B2',                         
        'EAAEC9', 'DAA5DF', 'BF9AD5', 'A599FF', '9385FF', '5BA3D7',                          
        '5CD9FF','85E4FF','99FFDB','A0E3D8','7CB6B1' ,'A7C8BB' ,'B1D3D0']) 
    const width = props.width;
    const height = props.height;
    const padding = {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      };

    // 定义x轴比例尺
    const x = d3
          .scaleLinear()
          .domain([0, data.length])
          .range([20, width-20]);
      
    // 定义y轴比例尺
    const y = d3
          .scaleLinear()
          // 定义定义域
          .domain([0, d3.max(data, function(d){
              return d.news.length;
          })])
          // 定义值域
          .range([height-10, 10]);  
    const rectHeight = y(0)-y(1)-10
    console.log(rectHeight)

    const svg = d3.select(".vis-view4chart").append('svg').attr('width',width).attr('height',height)
                             .attr('viewBox',"0 0 "+(width)+" "+(height))

    const g = svg.selectAll('g.news')
                    .data(data)
                    .enter()
                    .append('g')
                    .attr('classname','news')
                    .attr('transform',function(d,i){
                        return  "translate("+x(i)+","+0+")"
                    })
    const rect = g.selectAll('g.newsG')
                        .data(function(d,i){
                            return d.news
                        })
                        .enter()
                        .append('g')
                        .attr('classname','newsG')
                        .attr('id',function(d,i){
                            return d.id;
                        })
                        .attr('transform',function(d,i){                         
                            return  "translate("+0+","+(y(i)-rectHeight)+")"                     
                        })
                        .each(function(d){
                            let holder = d3.select(this);
                            distributionChart(holder);
                            proportionChart(holder);
                            
                        })
    




    function proportionChart(holder){
        let stack = d3.stack().keys(topics).offset(d3.stackOffsetNone);
        let data = holder.data()
        let rectWidth = 30
        console.log(data)
        let stackData = stack(data[0].topic_propotion)
        holder.selectAll('rect.newsRect')
            .data(stackData.filter((item)=>{
                if(item[0][1]){
                    return item
                }
            }))
            .enter()
            .append('rect')
            .attr('classname','newsRect')
            .attr('y',function(d,i){
                return d[0][0]*rectHeight
            })
            .attr('width',rectWidth)
            .attr('height',function(d){
                return (d[0][1]-d[0][0])*rectHeight
            })
            .attr('fill',function(d,i){
                return "#"+ColorMap(d['key'])
            })
            .attr('stroke','gray')
    }

    function distributionChart(holder){

        let data = holder.data()[0].paper_distribution
        let rectWidth = 30
        let lineHeight = 15
        // Add X axis --> it is a date format     
        let parseTime = d3.timeParse("%Y-%m-%d")     
        let fomatTime = d3.timeFormat("%Y-%m-%d")     
        let x = d3.scaleTime()         
                .domain([parseTime('2020-01-19'),parseTime('2020-07-02')])         
                .range([0, rectHeight]);     
        let y = d3.scaleLinear()
                .domain([0,d3.max(data,function(d){
                    return d.count
                })])
                .range([0,lineHeight])
        holder.append('g')
                .attr('transform',function(d,i){                                                      
                    return  "translate("+rectWidth+","+0+")"                                              
                })
                .append('path')
                .datum(data)
                .attr("id","newsLine")         
                .attr("fill", "none")         
                .attr("stroke", "steelblue")         
                .attr("stroke-width", 1.5)         
                .attr("d", d3.line()             
                            .x(function (d) {             
                                return y(d.count) 
                            })             
                            .y(function (d) { 
                                console.log(x(parseTime(d.date))) 
                                return x(parseTime(d.date)) 
                            })         
                )

                
    }
    

    



    }

    export default draw;
