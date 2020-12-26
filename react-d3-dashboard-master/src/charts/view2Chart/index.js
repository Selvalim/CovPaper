import React, { Component } from 'react';
import draw from './vis';
import axios from 'axios'; 
import store from "../../redux"

export default class View2Chart extends Component {

    constructor(props){         
        super(props);         
        this.state = {                  
            check_author:'',      
        }     
    }
    componentDidMount() {
        const _this = this;         
        store.subscribe(()=>{    
            const {check_author, check_topic} = store.getState();                 
            if(check_author!==_this.state.check_author){
                 
                axios.post('/api/coauthor/',{                      
                    "author1":check_author                 
                })                     
                .then(res=>{                         
                    draw(this.props,res.data,check_topic)     
                    _this.setState({                                     
                        check_author,                                                          
                    })                     
                })                     
                .catch(function (error) {                                 
                    console.log(error);                             
                });                 
            }         
        }) 
    }


    render() {
        return (
            <div id="vis-view2chart" className='vis-view2chart'/>
        )
    }
}