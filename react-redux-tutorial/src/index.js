import React from 'react'
import ReactDOM from 'react-dom'
//스토어
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
//루트 리듀서
import rootReducer from './modules'

//스토어 생성
//composeWithDevTools => 크롬 Redux DevTools 사용
const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
