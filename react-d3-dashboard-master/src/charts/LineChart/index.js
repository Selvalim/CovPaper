import React, { Component } from 'react';
import draw from './vis';
import axios from 'axios';
import store from "../../redux"
import action from "../../redux/actions"


export default class LineChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            china_cases:[],
        }
    }


    componentDidMount() {
        const _this = this
        axios.get('/api/china_cases/')
            .then(function(response){
                console.log(response.data);
                store.dispatch(action.modifyChinaCases(response.data))
                _this.setState({
                    china_cases:response.data,
                })
            }).catch(function (error) {
                    console.log(error);
                });

                // axios.post('/api/news/',{
                //     "start":'2020-01-19',
                //     "end":'2020-07-09',
                // })
                // .then(function(response){
                //     console.log(response.data);
                // }).catch(function (error) {
                //         console.log(error);
                //     });
    
        store.subscribe(()=>{
            const {china_cases} = store.getState();
            if(china_cases!==_this.state.china_cases){
                draw(_this.props,china_cases);
                _this.setState({
                    china_cases:china_cases,
                })
            }
        })
    }


    render() {
        return (
            <div className='vis-linechart'/>
        )
    }
}
