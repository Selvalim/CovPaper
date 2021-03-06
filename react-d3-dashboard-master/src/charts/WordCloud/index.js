import React, { Component } from 'react';
import draw from './vis';
import store from "../../redux"
import axios from 'axios';


export default class WordCloud extends Component {
    constructor(props){
        super(props);
        this.state = {
            check_topic:-1,
        }
    }

    componentDidMount() {
        store.subscribe(()=>{             
            const {check_topic} = store.getState()
            const _this = this;
            if(check_topic!=_this.state.check_topic){
                axios.post("/api/word_cloud/",{             
                    "key":check_topic         
                }).then(             
                    res =>{                 
                        _this.setState({
                            check_topic:check_topic,
                        })
                        draw(_this.props,res.data.words,check_topic);              
                }).catch(function (error) {             
                    console.log(error);         
                });          
            }
        })
    }

    componentDidUpdate(preProps) {
    }

    render() {
        return (
            <div className='vis-wordcloud'/>
        )
    }
}