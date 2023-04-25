const vendorInfoBio = (state = [], action) => {
    switch (action.type) {
        case 'SET_VENDORINFO_BIO':
            return action.payload;
        default:
            return state;
    }
};

export default vendorInfoBio;