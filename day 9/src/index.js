

import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import 'font-awesome/css/font-awesome.min.css'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import store from './redux/store'
// import {Provider} from 'react-redux'

// ReactDOM.render(
//   <React.StrictMode>
// <Provider store={store}>
//     <App/>
//     </Provider>
//     </React.StrictMode>,
//   document.getElementById('root')
// );
// reportWebVitals();