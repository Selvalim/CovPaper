import React, { Component } from 'react';
import draw1 from './vis1';
import draw2 from './vis2';
import axios from 'axios'; 
import store from "../../redux"

export default class View4Chart extends Component {

    constructor(props){         
        super(props);         
        this.state = {             
            topic_flow:[],             
            start:'',             
            end:'',             
            check_topic:0,         
        }     
    }


    componentDidMount() {
        const _this = this;         
        store.subscribe(()=>{    
            const {start,end} = store.getState();                 
            if(start!=this.state.start||end!=this.state.end){
                 
                axios.post('/api/news_paper/',{                      
                    "start":start,                         
                    "end":end,                     
                })                     
                .then(res=>{                         
                    console.log(res.data.length)
                    console.log(res.data)
                    if(res.data.length>15){
                        draw1(this.props,res.data,start,end); 
                    }else{
                        draw2(this.props,res.data,start,end);
                    }                         
                                            
                    this.setState({                                     
                        start:start,                                     
                        end:end,                                                                      
                    })                     
                })                     
                .catch(function (error) {                                 
                    console.log(error);                             
                });                 
            }         
        }) 
    }

    componentDidUpdate(preProps) {

    }

    render() {
        return (
            <div id="vis-view4chart" className='vis-view4chart'/>
        )
    }
}