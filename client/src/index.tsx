import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';

import { 
  createStore,
  applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';

import {
  composeWithDevTools
} from 'redux-devtools-extension';

import reducers from './reducer/index';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
