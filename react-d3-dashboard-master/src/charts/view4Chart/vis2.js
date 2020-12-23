import * as d3 from 'd3';



const draw2 = (props,data,start,end) => {
    console.log(data)
    d3.select('.vis-view4chart > *').remove();
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
    const parseTime = d3.timeParse("%Y-%m-%d") 
    const x = d3
          .scaleLinear()
          .domain([parseTime(start),parseTime(end)])
          .range([20, width-20]);
      
    // 定义y轴比例尺
    const y = d3
          .scaleLinear()
          // 定义定义域
          .domain([0, d3.max(data, function(d){
              return d.news.length;
          })])
          // 定义值域
          .range([0, height]);  
    const rectHeight = (y(1)-y(0))/1.5
    const rectWidth = width/data.length/1.5

    const svg = d3.select(".vis-view4chart").append('svg').attr('width',width).attr('height',height)
                             .attr('viewBox',"0 0 "+(width)+" "+(height))

    const g = svg.selectAll('g.news')
                    .data(data)
                    .enter()
                    .append('g')
                    .attr('classname','news')
                    .attr('transform',function(d,i){
                        return  "translate("+x(parseTime(d.date))+","+0+")"
                    })
    const rect = g.selectAll('g.newsG')
                        .data(function(d,i){
                            return d.news
                        })
                        .enter()
                        .append('g')
                        .attr('classname','newsG')
                        .append('g')
                        .attr('id',function(d,i){
                            return d.id;
                        })
                        .attr('transform',function(d,i){                         
                            return  "translate("+0+","+(y(i))+")"                     
                        })
                        .attr('translate',function(d,i){                             
                            return  "translate("+0+","+(y(i))+")"                  
                                 })
                        .each(function(d){
                            let holder = d3.select(this);
                            proportionChart(holder);
                            distributionChart(holder);

                            
                        })
    
    //重绘svg节点，确保其在最顶层
    d3.selection.prototype.moveToFront1 = function(){
        return this.each(function(){
            this.parentNode.parentNode.appendChild(this.parentNode);
        })
    }         
    d3.selection.prototype.moveToFront2 = function(){
        return this.each(function(){
            this.parentNode.appendChild(this);
        })
    }       

    rect.on('mouseover',function(){
        d3.select(this.parentNode).moveToFront1()
        d3.select(this.parentNode).moveToFront2()
        let translate = d3.select(this).attr('translate')
        d3.select(this).attr('transform',translate+'scale(2)')
    }).on('mouseout',function(){
        let translate = d3.select(this).attr('translate')
        d3.select(this).attr('transform',translate+'scale(1)')
    })
                    

    function proportionChart(holder){
        let stack = d3.stack().keys(topics).offset(d3.stackOffsetNone);
        let data = holder.data()
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
            .attr('x',function(d){
                return -rectWidth/2+d[0][0]*rectWidth
            })
            .attr('y',function(d,i){
                return 0
            })
            .attr('height',rectHeight)
            .attr('width',function(d){
                return (d[0][1]-d[0][0])*rectWidth
            })
            .attr('fill',function(d,i){
                return "#"+ColorMap(d['key'])
            })
            .attr('stroke','gray')
            .attr('stoke-width',0.3)
    }

    function distributionChart(holder){

        let data = holder.data()[0].paper_distribution
        let lineHeight = 13
        // Add X axis --> it is a date format     
        let parseTime = d3.timeParse("%Y-%m-%d")       
        let x1 = d3.scaleTime()         
                .domain([parseTime('2020-01-19'),parseTime('2020-07-02')])         
                .range([5, rectWidth/1.7]);     
        let x2 = d3.scaleTime()         
                .domain([parseTime('2020-01-19'),parseTime('2020-07-02')])         
                .range([0, rectWidth]);  
        let y = d3.scaleLinear()
                .domain([0,d3.max(data,function(d){
                    return d.count
                })])
                .range([rectHeight-1,1])
        holder.append('g')
                .attr('transform',function(d,i){                                                      
                    return  "translate("+(-rectWidth/2)+","+(0)+")"                                              
                })
                .append('path')
                .datum(data)
                .attr("id","newsLine")         
                .attr("fill", "none")         
                .attr("stroke", "white")         
                .attr("stroke-width", 0.5)         
                .attr("d", d3.line()             
                            .y(function (d) {             
                                return y(d.count) 
                            })             
                            .x(function (d) { 
                                return x1(parseTime(d.date)) 
                            })         
                )
        holder.append('line')
                    .attr('transform',function(d,i){                                                      
                        return  "translate("+(-rectWidth/2)+","+(0)+")"                                              
                    })
                    .attr('x1',function(d){
                        return x2(parseTime(d.date))
                    })
                    .attr('y1',(0.5))
                    .attr('x2',function(d){                         
                        return x2(parseTime(d.date))                     
                    })
                    .attr('y2',(rectHeight))
                    .attr('stroke','red')
                    .attr("stroke-width",0.5)

                
    }
    

    



    }

    export default draw2;
