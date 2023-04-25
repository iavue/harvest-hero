import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchVendorBio(action) {
    console.log('What is action in fetchVendorBio():', action);
    try {
        const response = yield axios.get(`/api/vendorBio/${action.payload}`);
        yield put({type: 'SET_VENDORINFO_BIO', payload: response.data})
    }catch (error) {
        console.log('Error:', error);
    }
}

function* fetchVendorItems(action) {
    console.log('What is action in fetchVendorItems():', action);
    try {
        const response = yield axios.get(`/api/vendorItems/${action.payload}`);
        yield put({type: 'SET_VENDORINFO_ITEMS', payload: response.data})
    }catch (error) {
        console.log('Error:', error);
    }
}

function* vendorInfoSaga() {
    yield takeLatest('FETCH_VENDORINFO_BIO', fetchVendorBio);
    yield takeLatest('FETCH_VENDORINFO_ITEMS', fetchVendorItems);
}

export default vendorInfoSaga;