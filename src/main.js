/**
 *
 * @authors luozh@snail.com
 * @date    2016-03-21 16:42:35
 * @description 主入口模块
 */

import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Switch } from 'antd'
const SubMenu = Menu.SubMenu

// 引入Ant-Design样式 & Animate.CSS样式
import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './main.css'

//引入样式
import './base.css'

// 引入单个页面（包括嵌套的子页面）
import myTable from './components/table.js'
import myForm from './components/form.js'
import myChart from './components/chart.js'
import myAnimate from './components/animate.js'
import myCalendar from './components/calendar.js'
import myCard from './components/fetch.js'
import infoCard from './components/infoCard.js'
import cardBlock from './components/cardBlock.js'
import timeLine from './components/timeLine.js'
import newblock from './components/newBlock.js'
const ACTIVE = { color: 'red' }

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            username: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: 'Apialse'
        })
    }

    render() {
        return (
            <div>
                <div id="leftMenu">
                    <img src='src/assets/images/logo.png' width="50" id="logo"/>
                    <Menu theme="white"
                        onClick={this.handleClick}
                        style={{ width: 185 }}
                        defaultOpenKeys={['sub1', 'sub2']}
                        defaultSelectedKeys={[this.state.current]}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" /><span>Private Space</span></span>}>
                            <Menu.Item key="1"><Link to="/myTable"><Icon type="table" />表格</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/myForm"><Icon type="form" />表单</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/myChart"><Icon type="bar-chart" />图表</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/myCalendar"><Icon type="calendar" />日历</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/cardBlock"><Icon type="card" />卡片</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/timeLine"><Icon type="clock-circle-o" />时间轴</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/newBlock"><Icon type="clock-circle-o" />newBlock</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>StudySpace</span></span>}>
                            <Menu.Item key="7"><Link to="/myCard"><Icon type="tag-o" />Study Link</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/newblock"><Icon type="tag-o" />Focus</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                            <Menu.Item key="setting:1"><Link to="/myAnimate"><Icon type="tag-o" />个人信息</Link></Menu.Item>
                            <Menu.Item key="setting:2">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}


// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={Sider}>
            <IndexRoute path="myCard" component={myCard} />
            <Route path="myTable" component={myTable} />
            <Route path="myForm" component={myForm} />
            <Route path="myChart" component={myChart} />
            <Route path="myCalendar" component={myCalendar} />
            <Route path="myAnimate" component={myAnimate} />
            <Route path="myCard" component={myCard} />
            <Route path="infoCard" component={infoCard} />
            <Route path="cardBlock" component={cardBlock} />
            <Route path="timeLine" component={timeLine} />
            <Route path="newBlock" component={newblock} />
        </Route>
    </Router>
), document.getElementById('app'));
