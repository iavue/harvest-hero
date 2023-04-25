const vendorInfoItems = (state = [], action) => {
    switch (action.type) {
        case 'SET_VENDORINFO_ITEMS':
            return action.payload;
        default:
            return state;
    }
};

export default vendorInfoItems;