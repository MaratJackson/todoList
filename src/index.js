import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './state/state';


let renderApp = (state) => {
    ReactDOM.render(
        <App state={state} action={store.action.bind(store)}/>,
        document.getElementById('root')
      );
}

renderApp(store.getState())

store.subscribe(renderApp)

serviceWorker.unregister();
