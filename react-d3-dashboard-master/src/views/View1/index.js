import React, { Component } from 'react';
import * as d3 from 'd3';
import { Menu } from 'antd';
import View1Chart from '../../charts/view1Chart';
import './view1.css';
import store from "../../redux"  
import action from "../../redux/actions"
import axios from 'axios'; 


const topics = ['17','103','57','42','20','56','61','97','15','31','58'
,'37','13','59','30','173','19','11','121','131'];
const ColorMap = d3.scaleOrdinal()
                    .domain(topics)
                    .range(['FDA049','EB8370','EA8F85','F5998E','F4AAA4','DCA7B2',
                    'EAAEC9', 'DAA5DF', 'BF9AD5', 'A599FF', '9385FF', '5BA3D7', 
                    '5CD9FF','85E4FF','99FFDB','A0E3D8','7CB6B1' ,'A7C8BB' ,'B1D3D0'])



export default class View1 extends Component {

    constructor(props){         
        super(props);         
        this.state = {                  
            check_new:0,  
            data:[]       
        }     
    }

    componentDidMount(){
        const _this = this;         
        store.subscribe(()=>{    
            const {check_new} = store.getState();                 
            if(check_new!==_this.state.check_new){
                 
                axios.post('/api/news2paper/',{                      
                    "news_id":check_new                 
                })                     
                .then(res=>{                         
                                            
                    _this.setState({                                     
                        check_new, 
                        data: res.data                                                             
                    })                     
                })                     
                .catch(function (error) {                                 
                    console.log(error);                             
                });                 
            }         
        }) 
    }



    render() {
        function generateMenu(i,title,topic,date,author){
            let style = {
                background:'#'+ ColorMap(topic),
                height:'60px',
                width:'300px',
                lineHeight:'20px',
                textAlign:'center',
                fontSize:'10px',
                wordBreak:'break-all'
            }
            return (
                <Menu.Item
                    key={i}
                    title={title}
                    style={{
                        height:'60px',
                    }}
                    onClick={function(){
                        store.dispatch(action.modifyCheckTopic(topic))
                        store.dispatch(action.modifyCheckAuthor(author))
                    }

                    }
                >
                
                <div style={style}>
                    <span >{title} </span>
                    
                    <br></br>
                    {date}
                    <br></br>
                    {author}
                </div>
                </Menu.Item> 
            )
        }
        return (
            <div id='view1' className='pane'>
                <div className='header'>科学文献列表</div>
                {/* <View1Chart width = {390} height = {400}/> */}
                <div className='paper_container'>
                <Menu >
                  {
                      this.state.data.map((item,i)=> generateMenu(i,item.title,item.topic,item.time,item.author))
                  }
                </Menu>
                </div>
            </div>
        )
    }
}
