import React, { Component } from 'react';
import { List } from 'antd';
import './view6.css';
import store from "../../redux"
import axios from "axios"

class View6 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            start:'',
            end:'',
            check_new:'',
        }
    }


    componentDidMount() {



        store.subscribe(() => {
            const { start, end ,check_new} = store.getState();
            if(start!=this.state.start||end!=this.state.end||check_new!=this.state.check_new){

            axios.post('/api/news/', {
                "start": start,
                "end": end,
                'pk':check_new,
            })
                .then(res => {
                    this.setState({
                        data: res.data,
                        start,
                        end,
                        check_new
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        })


    }


    render() {
        return (
            <div id='view6' className='pane'>
                <div className='header'>新闻视图</div>

                <div className="news-container"  >
                    <List
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item key={item.time}>
                                <List.Item.Meta
                                    title={<a href="https://www.baidu.com/s?wd=%s">{item.title + " " + item.time}</a>}
                                    description={item.body}
                                />
                            </List.Item>
                        )}
                        bordered={true}
                    >
                    </List>
                </div>

            </div>
        )
    }
}

export default View6

