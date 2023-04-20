import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addBio(action) {
    console.log('Inside addBio saga! What is action.payload:', action.payload);
    try {
        yield axios.post('/api/bio', action.payload);
        yield put({type: 'FETCH_BIO'});
    } 
    catch(error) {
        console.log('Error:', error);
    }
}

function* fetchBio() {
    try {
        const response = yield axios.get('/api/bio');
        console.log('what is response.data in fetchBio saga:', response.data); // not correct data
        yield put({type: 'SET_BIO', payload: response.data})
    }catch (error) {
        console.log('Error:', error);
    }
}

function* editBio(action) {
    try{
        yield axios.put(`/api/bio/${action.payload.id}`, action.payload)//this is a actual put request
        console.log('What is action.payload.id for editBio saga:', action.payload.id);
        console.log('What is action.payload for editBio saga:', action.payload);
        yield put({type: 'FETCH_BIO'})//this is a dispatch
    }catch(error){
        console.log(error)
    }
}

function* bioSaga() {
    yield takeLatest('ADD_BIO', addBio);
    yield takeLatest('FETCH_BIO', fetchBio);
    yield takeLatest('EDIT_BIO', editBio);

    // Don't think we will actually need to delete a bio
        // yield takeLatest('DELETE_BIO', deleteBio);
}

export default bioSaga;