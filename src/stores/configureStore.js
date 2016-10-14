import reducer from '../reducers/index'

import { createStore, compose } from 'redux';

const configureStore = (initialState) => {
    const store = createStore(reducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    //store.dispatch({type: 'increase'})
    return store;

}

export default configureStore;
