import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* formStatus(action) {
    console.log('what is action from formStatus saga:', action);
    try {
        yield axios.put(`/api/formStatus/${action.payload.id}`, action.payload)
        // dispatch (put) to fetch and set
        yield put({ type: 'FETCH_FORM_STATUS' })
    } catch (error) {
        console.log(error)
    }
}

function* fetchFormStatus() {
    try {
        const response = yield axios.get('/api/formStatus');
        yield put({ type: 'SET_FORM_STATUS', payload: response.data });
    } catch (error) {
        console.log('Error:', error);
    }
}

function* formStatusSaga() {
    console.log('Inside formStatusSaga()!!!!');
    yield takeLatest('UPDATE_FORM_STATUS', formStatus);
    yield takeLatest('FETCH_FORM_STATUS', fetchFormStatus);
}

export default formStatusSaga;