import React, { Component } from 'react';
import './view4.css';
import LineChart from '../../charts/LineChart';

export default class View4 extends Component {
    render() {
        const {user} = this.props,
              width = 1100,
              height = 250;
        return (
            <div id='view4' className='pane' >
                <div className='header'>文献动态网络视图</div>
            </div>
        )
    }
}