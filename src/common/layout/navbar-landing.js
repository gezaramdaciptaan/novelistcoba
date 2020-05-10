import React, { Component } from 'react';
import { Menu } from 'antd';
import '../layout/css/navbar-style.css';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';


const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
    <nav className="menuBar">
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
          <AppstoreOutlined />
            <Link to="/">All</Link> 
        </Menu.Item>
        <Menu.Item key="app">
          <UserOutlined />
          <Link to="/portofolio">Author</Link>
        </Menu.Item>
        <Menu.Item key="top">
          <StarOutlined />
          <Link to="/topnovel">Best Seller</Link>
        </Menu.Item>
      </Menu>
    </nav>
    );
  }
}

export default Navbar;
