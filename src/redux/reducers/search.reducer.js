const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEMS_LIST':
            return action.payload;
        case 'CLEAR_ITEM_LIST':
            return [];
        default:
            return state;
    }
};

export default searchReducer;