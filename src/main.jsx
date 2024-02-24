import React from 'react'
import ReactDOM from 'react-dom/client';
import  { Provider } from 'react-redux'
import Root from './Root.jsx'
import './index.css'
import store from './store/globalStore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
)
