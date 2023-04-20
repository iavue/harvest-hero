import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addBio(action) {
    console.log('Inside addBio saga! What is action.payload:', action.payload);
    try {
        yield axios.post('/api/bio', action.payload);
        yield put({type: 'FETCH_ITEMS'});
    } 
    catch(error) {
        console.log('Error:', error);
    }
}

function* bioSaga() {
    yield takeLatest('ADD_BIO', addBio);
    // yield takeLatest('FETCH_ITEMS', fetchItems);
    // yield takeLatest('EDIT_ITEM', editItem);
    // yield takeLatest('DELETE_ITEM', deleteItem);
}

export default bioSaga;