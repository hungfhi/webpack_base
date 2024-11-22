import apis from './src/api/apis'
import {all,call, put, takeEvery,takeLatest, } from 'redux-saga/effects'
import {actionType, setIsLogin} from './store'
//
function* handleLogin(action){
    try {
        const res = yield call(apis.getLoginUser,action.payload)
        yield put(setIsLogin(res.data))
    } catch (error) {
        console.log("err")
    }
}

//



function* watchLogin() {
    yield takeLatest(actionType.SET_IS_LOGIN,handleLogin)
}


//




export default function* rootSaga() {
    yield all([
        watchLogin()
    ])
} 