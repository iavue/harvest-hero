import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import itemsReducer from './items.reducer';
import bioReducer from './bio.reducer';
import formStatusReducer from './formStatus.reducer';
import searchReducer from './search.reducer';
import vendorInfoBio from './vendorInfoBio.reducer';
import vendorInfoItems from './vendorInfoItems.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  itemsReducer,
  bioReducer,
  formStatusReducer,
  searchReducer,
  vendorInfoBio,
  vendorInfoItems,
});

export default rootReducer;
