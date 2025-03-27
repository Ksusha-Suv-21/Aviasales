import ReactDOM from 'react-dom/client'
import './index.module.scss'
import App from './components/App/App.jsx'

import { Provider } from 'react-redux'

import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
