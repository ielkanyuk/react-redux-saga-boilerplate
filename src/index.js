import '@babel/polyfill';
import './markup/stylus/style.styl';
import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

render(React.createElement(App), document.getElementById('container'));
