import React, { Component } from 'react';
import './view3.css';
import ThemeRiver from '../../charts/ThemeRiver';
import LineChart from '../../charts/LineChart';


export default class View3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div id='view3' className='pane'>
                <div className='header'>文献主题河流视图</div>
                < ThemeRiver width = {890} height = {300} />
                < LineChart height={50} width={890} />    
            </div>
        )
    }
}