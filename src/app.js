import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import store from './store/configStore';
import App from './components/App';
import './styles/scaffold';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()} >
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  MOUNT_NODE
);

if (DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept();
  }
}
