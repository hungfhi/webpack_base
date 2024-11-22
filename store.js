import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga'


const initialState = {
    is_login: false,
    user_info: null,
}

export const actionType = {
    SET_IS_LOGIN: 'SET_IS_LOGIN',
    SET_USER_INFO: 'SET_USER_INFO'
}

export const reducer = (state = initialState, action) => {
    switch (action) {
        case actionType.SET_IS_LOGIN:
            return {
                ...state,
                is_login: true
            }
        default:
            return state;
    }
}


export const setIsLogin = (data) => {
    return { type: actionType.SET_IS_LOGIN, payload: data }
}



const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key:'root',
    storage,     
    whitelist: ['user_login'], 
}


const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store)