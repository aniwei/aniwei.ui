import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Routing from './routing';

const Div = (props) => {
  return <div>{new Date() - 0}</div>
}

const tools = [
  { 
    key: 'data',
    text: '常用工具',
    list: [
      {key: 'message', text: '请求数据', active: false, component: Div},
      {key: 'setting', text: '设置', active: false, component: Div},
      {key: 'share', text: '请求数据', active: false, component: Div},
      {key: 'app', text: '设置', active: false}
    ]
  }, { 
    key: 'about',
    text: '关于',
    list: [
      {key: 'share', text: '请求数据', active: false, component: Div },
      {key: 'app', text: '设置', active: false}
    ]
  },
];

const tabs = [
  //{key: 'welcome', text: '欢迎使用', component: Div}
];

const store = {
  tools,
  tabs
};


render(
  <Routing {...store}/>,
  document.getElementById('app')
);