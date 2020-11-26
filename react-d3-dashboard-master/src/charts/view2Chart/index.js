import React, { Component } from 'react';
import draw from './vis';

export default class View2Chart extends Component {

    componentDidMount() {
        draw(this.props);
    }

    componentDidUpdate(preProps) {
        draw(this.props);
    }

    render() {
        return (
            <div id="vis-view2chart" className='vis-view2chart'/>
        )
    }
}