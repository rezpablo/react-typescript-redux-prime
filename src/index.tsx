import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import rootReducer from './main/reducer';

import './index.css';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import {Provider} from "react-redux";
import {createStore, Store} from "redux";

const initialState = {};
const store: Store<any> = createStore(rootReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
