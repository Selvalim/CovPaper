import React, { Component } from 'react';
import BarChart from '../../charts/BarChart';
import './view5.css';

export default class View5 extends Component {
    render() {
        const {data} = this.props;
        return (
            <div id='view5' className='pane'>
                <div className='header'>主题词云视图</div>      
            </div>
        )
    }
}