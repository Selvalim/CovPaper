import * as d3 from 'd3';




const draw = (props,topic,data) => {
    d3.select('.vis-view1chart > *').remove();
    const topics = ['17','103','57','42','20','56','61','97','15','31','58'
    ,'37','13','59','30','173','19','11','121','131'];
    const ColorMap = d3.scaleOrdinal()                         
        .domain(topics)                         
        .range(['FDA049','EB8370','EA8F85','F5998E','F4AAA4','DCA7B2',                         
        'EAAEC9', 'DAA5DF', 'BF9AD5', 'A599FF', '9385FF', '5BA3D7',                          
        '5CD9FF','85E4FF','99FFDB','A0E3D8','7CB6B1' ,'A7C8BB' ,'B1D3D0']) 
    const width = props.width;
    const height = props.height;


      function ticked(){             
          links  
                .attr("x1", function(d){return validateXY(d.source.x, 'x')})  
                .attr("y1", function(d){return validateXY(d.source.y, 'y')})
                .attr("x2", function(d){return validateXY(d.target.x, 'x')})
                .attr("y2", function(d){return validateXY(d.target.y, 'y')});  
            gs.attr("transform", function(d) { return "translate(" + validateXY(d.x, 'x') + "," + validateXY(d.y, 'y') + ")"; });         
        }

    function validateXY(val, type){
            var r = 8;
            if(val < r) return r;
            if(type == 'x'){
                if(val > width - r) return width - r;
            }else{
                if(val > height - r) return height - 2*r;
            }
            return val
        }
    
    function started(d){
        if(!d3.event.active){
            forceSimulation.alphaTarget(1).restart();//设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0，1]
        }
        d.fx = d.x;
        d.fy = d.y;
    }
    function dragged(d){
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }
    function ended(d){
        if(!d3.event.active){
            forceSimulation.alphaTarget(0);
        }
        d.fx = null;
        d.fy = null;
    }
    
    var marge = {top:0, bottom:0, left:0, right:0}
    var svg = d3.select(".vis-view1chart").append('svg')
                .attr("width", width).attr("height", height)
    var g = svg.append("g")
                .attr("transform", "translate("+marge.top+","+marge.left+")");

    ////初始化力学仿真器，通过布局函数格式化数据    
    var forceSimulation = d3.forceSimulation()
                            .force("link", d3.forceLink())
                            .force("charge", d3.forceManyBody())
                            .force("center", d3.forceCenter());

    
    //生成节点数据
    forceSimulation.nodes(data.nodes)
                    .on("tick", ticked);//这个函数很重要，后面给出具体实现和说明
    
    //生成边数据
  forceSimulation.force("link")
                    .links(data.edges)
                    .distance((d) => {//每一边的长度
                        // if(d.value>0.9){
                        //     return (1-d.value)*200
                        // }else if(d.value>0.87){
                        //     return (0.9-d.value)*500
                        // }
                        // else if(d.value>0.85){
                        //     return (0.87-d.value)*1000
                        // }else if(d.value>0.8){
                        //     return (0.85-d.value)*2000
                        // }
                        // else{
                        //     return (0.8-d.value)*4000;
                        // }
                        return ((1-d.value)*500-20)*1.5

                    })
                    // .strength((d)=>{
                    //     return (d.value-0.84)*100;
                    // })

    forceSimulation.force('charge')
                    .strength(-3)
    //设置图形的中心位置	
  forceSimulation.force("center")
                    .x(width/2)
                    .y(height/2);
    
    //绘制边
  var links = g.append("g")
                .selectAll("line")
                .data(data.edges)
                .enter()
                .append("line")
                .attr("stroke", '#bbb')
                .attr("stroke-width", d => d.value*0.5);
    //建立用来放在每个节点和对应文字的分组<g>
    var gs = g.selectAll(".circleText")
                .data(data.nodes)
                .enter()
                .append("g")
                .attr("transform", (d,i) => {
                    var cirX = d.x;
                    var cirY = d.y;
                    return "translate("+cirX+","+cirY+")";
                })
                .call(d3.drag()
                    .on("start", started)
                    .on("drag", dragged)
                    .on("end", ended)
                )

            
    //绘制节点
    gs.append("circle")
        .attr("r",8 )
        .attr("fill", ()=>{
            return "#"+ColorMap(topic);
        })
        .attr('stroke','gray')
        .attr('stroke-width',1)
    // //文字
    // gs.append("text")
    //     .attr("x", 0)
    //     .attr("y", 0)
    //     .attr("dy", '0.38em')
    //     .attr('text-anchor', 'middle')
    //     .attr('fill', d=>d.isDep == true?'#fff':'#000')
    //     .text((d)=>{
    //         return d.name;
    //     })




    }

    export default draw;
