import React, { Component } from 'react';
import './view2.css';
import PieChart from '../../charts/PieChart';

export default class View2 extends Component {
    render() {
        const {data} = this.props;
        const width = 260;
        const height = 360;
        return (
            <div id='view2' className='pane'>
                <div className='header'>作者合作网络视图</div>
            </div>
        )
    }
}