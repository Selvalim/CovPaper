import React, { Component } from 'react';
import LineChart from '../../charts/LineChart';
import WordCloud from '../../charts/WordCloud';
import './view5.css';

export default class View5 extends Component {
    render() {
        const {data} = this.props;
        return (
            <div id='view5' className='pane'>
                <div className='header'>主题词云视图</div>
                < WordCloud height={400} width={400} />  
            </div>
        )
    }
}