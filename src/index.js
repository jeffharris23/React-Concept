import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Auth from './services/Auth/Auth';
import { ConnectedRouter } from 'react-router-redux'
import history from './history';
import store from './store/'

const auth = new Auth();


ReactDOM.render((
    <Provider store={store}>
      <ConnectedRouter history={history}>

          <App auth={auth}/>
  
      </ConnectedRouter>
    </Provider>
  ), document.getElementById('root'));
registerServiceWorker();
