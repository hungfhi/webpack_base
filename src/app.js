import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { persistor, store } from '../store'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
function App() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const isFeatureEnabled = process.env.REACT_APP_FEATURE_TOGGLE;
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))