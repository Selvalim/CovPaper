import React, { Component } from 'react';
import draw from './vis';
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
        // const _this = this;         
        // store.subscribe(()=>{    
        //     const {start,end,check_topic} = store.getState();                 
        //     if(start!=this.state.start||end!=this.state.end||check_topic!=this.state.check_topic){
        //         if(check_topic!=0)                     
        //         axios.post('/api/similarity/',{  
        //             "topic":check_topic,                       
        //             "start":start,                         
        //             "end":end,                     
        //         })                     
        //         .then(res=>{                         
        //             console.log(res)                         
        //             // draw(this.props,check_topic,);                         
        //             this.setState({                                     
        //                 start:start,                                     
        //                 end:end,                                     
        //                 check_topic:check_topic,                                 
        //             })                     
        //         })                     
        //         .catch(function (error) {                                 
        //             console.log(error);                             
        //         });                 
        //     }         
        // }) 
        draw(this.props)
    }

    componentDidUpdate(preProps) {

    }

    render() {
        return (
            <div id="vis-view4chart" className='vis-view4chart'/>
        )
    }
}