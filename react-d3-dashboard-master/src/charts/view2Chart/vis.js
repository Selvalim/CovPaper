import * as d3 from 'd3';



const draw = (props,data,check_topic) => {
    d3.select('.vis-view2chart > *').remove();
    const width = props.width;
    const height = props.height;

    const topics = ['17','103','57','42','20','56','61','97','15','31','58'
    ,'37','13','59','30','173','19','11','121','131'];
    const ColorMap = d3.scaleOrdinal()
                        .domain(topics)
                        .range(['FDA049','EB8370','EA8F85','F5998E','F4AAA4','DCA7B2',
                        'EAAEC9', 'DAA5DF', 'BF9AD5', 'A599FF', '9385FF', '5BA3D7', 
                        '5CD9FF','85E4FF','99FFDB','A0E3D8','7CB6B1' ,'A7C8BB' ,'B1D3D0'])

    const svg = d3.select('.vis-view2chart')
                    .append('svg')
                    .attr("width", width).attr("height", height)

    const center = svg.append('circle')
        .attr('cx', width / 2)
        .attr('cy', height / 2)
        .attr('r', 15)
        .attr('fill', function(){
            return '#'+ColorMap(check_topic)
        })
    const others = svg.selectAll('g.others')
        .data(data.others)
        .enter()
        .append('g')
        .attr('classname', 'others')
        .attr('transform','translate('+(width/2)+','+(height/2)+')')
    let total = data.others.length
    let PI = 2*Math.PI
    let scale = d3.scaleLinear()
            .domain([d3.min(data.others,(item,i)=>{
                return item.count
            }),d3.max(data.others,(item,i)=>{
                return item.count
            })])
            .range([90,110])
    others.append('line')
        .attr('x1',0)
        .attr('y1',0)
        .attr('y2',function(d,i){
            return scale(d.count)*(-Math.sin(i*PI/total))
        })
        .attr('x2',function(d,i){
            return scale(d.count)*(-Math.cos(i*PI/total))
        })
        .attr('classname','line')
        .attr('stroke',function(){
            return "#"+ColorMap(check_topic)
        })
        .attr('stroke-width',1)

    others.append('circle')
        .attr('cx',function(d,i){
            return scale(d.count)*(-Math.cos(i*PI/total))
        })
        .attr('cy',function(d,i){
            return scale(d.count)*(-Math.sin(i*PI/total))
        })
        .attr('r', function(d,i){
            return 7
        })         
        .attr('fill', function(){
            return "#"+ColorMap(check_topic)
        })
    
    others.append('text')
        .attr('x',function(d,i){
            return 1.2*scale(d.count)*(-Math.cos(i*PI/total))
        })
        .attr('y',function(d,i){
            return 1.2*scale(d.count)*(-Math.sin(i*PI/total))
        })
        .attr('fill',function(){
            return "gray"
        })
        .attr('font-size',10)
        .attr('id',function(d,i){
            return i
        })
        .text(function(d){
            return d.author2
        })
        .attr('transform-origin',function(d,i){
            return 1.2*scale(d.count)*(-Math.cos(i*PI/total))+' '+1.2*scale(d.count)*(-Math.sin(i*PI/total))
        })
        .attr('transform',function(d,i){
            return 'rotate('+ (parseInt(180+360*i/total)) +')'
        })


}

export default draw;