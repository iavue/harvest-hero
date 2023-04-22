const formStatusReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FORM_STATUS':
            return action.payload;
        default:
            return state;
    }
};

export default formStatusReducer;