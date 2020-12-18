import React, { Component } from 'react';
import { List, message, Avatar, Spin  } from 'antd';
import './view6.css';
import store from "../../redux"
import action from "../../redux/actions"
import axios from "axios"

 class View6 extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:[],
        }
    }

    
    componentDidMount() {



    store.subscribe(()=>{
        const {start,end} = store.getState();
        console.log(start)
        console.log(end)
        axios.post('/api/news/',{
            "start":start,
            "end":end,
        })
        .then(res=>{
            console.log(res)
            this.setState({
                        data:res.data
                    })
        })
        .catch(function (error) {
                    console.log(error);
                });
        // axios.post('/api/news/',{
        //     "start":start,
        //     "end":end,
        // })
        // .then(function(response){
        //     console.log(response.data);
        //     this.setState({
        //         data:response.data
        //     })
        //     console.log(this.state.data)
        // }).catch(function (error) {
        //         console.log(error);
        //     });
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
                                title={<a href="https://www.baidu.com/s?wd=%s">{item.title+" "+item.time}</a>}
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

