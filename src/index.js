import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  RouterRoot  from './RouterRoot'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterRoot />, document.getElementById('root'));
registerServiceWorker();
