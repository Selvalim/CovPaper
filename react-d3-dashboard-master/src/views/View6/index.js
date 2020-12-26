import React, { Component } from 'react';
import { List } from 'antd';
import './view6.css';
import store from "../../redux"
import axios from "axios"
import { color } from 'd3';
import Item from 'antd/lib/list/Item';

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
                    console.log('shishi',res.data)
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
        function IFexist(exist) {
            if(!exist){
                console.log("jinlai",exist)
                return 'rgba(255, 118, 117,0.1)'
            }else{
                return ''
            }
        }   
        return (
            <div id='view6' className='pane'>
                <div className='header'>新闻视图</div>

                <div className="news-container"  >
                    <List
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item key={item.time}>
                                <List.Item.Meta
                                    style={
                                        {
                                            backgroundColor:IFexist(item.exist),
                                        }
                                    }
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

