import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { app } from '../firebase/firebase.config.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} app={app}>
    <PersistGate loading={'loading'} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>

)
