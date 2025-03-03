import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./css/style.css"
import store from './store.jsx';
import { Provider } from 'react-redux'
// import './css/main.css'


createRoot(document.getElementById('root')).render(
 <Provider  store={store}>
   <App />
 </Provider>
)
