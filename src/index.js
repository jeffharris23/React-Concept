import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers';
import Auth from './services/Auth/Auth';
const store = createStore(rootReducer);

const auth = new Auth();


ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <App auth={auth}/>
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'));
registerServiceWorker();
