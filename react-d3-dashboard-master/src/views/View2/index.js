import React, { Component } from 'react';
import './view2.css';
import View2Chart from '../../charts/view2Chart';

export default class View2 extends Component {
    render() {

        return (
            <div id='view2' className='pane'>
                <div className='header'>作者合作网络视图</div>
                < View2Chart  width = {390} height = {400}/>
            </div>
        )
    }
}