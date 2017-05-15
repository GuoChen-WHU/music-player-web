import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/configStore';
import App from './components/App';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/music-player-web">
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  MOUNT_NODE
);

if (DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept();
  }
}
