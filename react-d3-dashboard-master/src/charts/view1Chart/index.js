import React, { Component } from 'react';
import draw from './vis';

export default class View1Chart extends Component {

    componentDidMount() {
        draw(this.props);
    }

    componentDidUpdate(preProps) {
        draw(this.props);
    }

    render() {
        return (
            <div id="vis-view1chart" className='vis-view1chart'/>
        )
    }
}