import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'

import './index.css';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
