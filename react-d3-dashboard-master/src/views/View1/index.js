import React, { Component } from 'react';
import View1Chart from '../../charts/view1Chart';
import './view1.css';

export default class View1 extends Component {
    render() {
        return (
            <div id='view1' className='pane'>
                <div className='header'>文章关联网络视图</div>
                <View1Chart width = {390} height = {400}/>
            </div>
        )
    }
}
