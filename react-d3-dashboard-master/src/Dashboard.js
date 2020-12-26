import React, { Component } from 'react';
import data from './data';
import { Layout } from 'antd';
import View1 from './views/View1';
import View2 from './views/View2';
import View3 from './views/View3';
import View4 from './views/View4';
import View5 from './views/View5';
import View6 from './views/View6';
import './dashboard.css';

const { Sider, Content, Footer ,Header} = Layout;

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUser: data[0],
            greaterThenAge: 0,
            includedGender: ['Male', 'Female','Unknown'],
        }
    }

    changeSelectUser = value => {
        this.setState({
            selectedUser: value
        })
    }

    changeGreaterThenAge = value => {
        this.setState({
            greaterThenAge: value
        })
    }

    changeIncludedGender = value => {
        this.setState({
            includedGender: value
        })
    }

    render() {

        return (
            <div>
                <Layout >
                    <Header style={{ height: 30 , padding:0}}>
                        <div style={{marginTop: -17, textAlign:"center", color:"white", height: 30}}>                             
                        基于疫情学术网络的可视分析系统                       
                        </div>
                    </Header>
                </Layout>
                <Layout style={{ height: 810 }}>
                    <Sider width={330} style={{backgroundColor:'#eee'}}>
                        <Content style={{ height: 400 }}>
                            <View1 />
                        </Content>
                        <Content style={{ height: 400 }}>
                            <View2 />
                        </Content>
                    </Sider>
                    <Layout width={900}>
                        <Content style={{ height: 300 }}>
                            <View3 />
                        </Content>
                        <Layout style={{ height: 300 }}>
                            <Content>
                                <View4 />
                            </Content>
                        </Layout>
                    </Layout>
                    <Sider width={350} style={{backgroundColor:'#eee'}}>                         
                        <Content style={{ height: 350 }}>                             
                            <View5 />                         
                        </Content>                         
                        <Content style={{ height: 450 }}>                             
                            <View6                      />                         
                        </Content>                     
                    </Sider>
                </Layout>
                <Layout>
                    <Footer style={{ height: 0 }}>
                        <div style={{marginTop: -10}}>
                        </div>
                    </Footer>
                </Layout>
            </div>
        )
    }
}
