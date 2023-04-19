import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addItem(action) {
    console.log('Inside addItem saga! What is action.payload:', action.payload);
    try {
        yield axios.post('/api/items', action.payload);
        yield put({type: 'FETCH_ITEMS'});
    } 
    catch(error) {
        console.log('Error:', error);
    }
}

function* fetchItems() {
    try {
        const response = yield axios.get('/api/items');
        yield put({type: 'SET_ITEMS', payload: response.data})
    }catch (error) {
        console.log('Error:', error);
    }
}

function* editItem(action) {
    try{
        yield axios.put(`/api/items/${action.payload.id}`, action.payload)//this is a actual put request
        yield put({type: 'FETCH_ITEMS'})//this is a dispatch
    }catch(error){
        console.log(error)
    }
}

function* deleteItem(action) {
    try {
        yield axios.delete(`/api/items/${action.payload}`);

        yield put({type: 'FETCH_SHELF'})
        
    }catch (error) {
        console.log('Error:', error);

    }
}

function* itemsSaga() {
    yield takeLatest('ADD_ITEM', addItem);
    yield takeLatest('FETCH_ITEMS', fetchItems);
    yield takeLatest('EDIT_ITEM', editItem);
    yield takeLatest('DELETE_ITEM', deleteItem);
}

export default itemsSaga;