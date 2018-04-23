import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Route } from 'react-router'
import rootReducer from "./reducers/index";
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import history from '../history';


const middleware = routerMiddleware(history)
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    rootReducer,
    router: routerReducer
})
// const store = createStore(
//     reducers,
//     applyMiddleware(middleware)
// )

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(middleware),
    // other store enhancers if any
));

export default store;