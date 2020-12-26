import React, { Component } from 'react';
import './view4.css';
import View4Chart from '../../charts/view4Chart';

export default class View4 extends Component {
    render() {
        return (
            <div id='view4' className='pane' >
                <div className='header'>新闻影响视图</div>
                < View4Chart  width = {890} height = {350}/>
            </div>
        )
    }
}