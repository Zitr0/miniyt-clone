import React from 'react';
import { Menu } from 'antd';
const Search = require('../../../../assets/images/Search.png');


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <Menu.Item>
      <input placeholder="Search"></input><img src={Search} alt="Search" />
  </Menu.Item>
  </Menu>
  )
}

export default LeftMenu
/* <a href="/subscription">Subscription</a>*/