import React, { Component } from 'react';
import { List } from 'antd';
import './view6.css';

export default class View6 extends Component {

    selectUser = (user) => {
        this.props.changeSelectUser(user);
    }

    render() {
        const {data} = this.props;
        return (
            <div id='view6' className='pane'>
                <div className='header'>新闻视图</div>
            </div>
        )
    }
}