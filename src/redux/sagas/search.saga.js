import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* searchForItems(action) {
    try {
        // yield will pause and wait for a response from our server
        const response = yield axios.get(`/api/search/${action.payload}`);

        console.log('search response', response.data);
        
        // purpose: store the data in a reducer
        // aka "dispatch"
        yield put({
            type: 'SET_ITEMS_LIST', // determines where to find it (saga or reducer)
            payload: response.data
        });
    }
    catch (err) {
        console.error('search failed', err);
    }
}

function* searchSaga() {
    yield takeLatest('SEARCH_FOR_ITEMS', searchForItems);
    
}

export default searchSaga;