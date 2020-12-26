import React, { Component } from 'react';
import draw from './vis';
import axios from 'axios';
import store from "../../redux"


export default class ThemeRiver extends Component {

    constructor(props){
        super(props);
        this.state = {
            topic_flow:[],
            start:'',
            end:'',
            check_topic:'',
        }
    }

    componentDidMount() {
        const _this = this
        store.subscribe(()=>{
            const {start,end,check_topic} = store.getState();
                if(start!==this.state.start||end!==this.state.end||check_topic!==this.state.check_topic){
                    axios.post('/api/topic_flow/',{
                        "start":start,
                        "end":end,
                    })
                    .then(res=>{
                        draw(this.props,res.data,start,end);
                        this.setState({
                                    start:start,
                                    end:end,
                                    check_topic:check_topic,
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
            <div className='vis-themeriver'/>
        )
    }
}