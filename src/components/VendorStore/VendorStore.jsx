import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function VendorStore() {
    console.log('Inside VendorStore()');
    //const { userId } = useParams();
    const { storeId } = useParams();
    const dispatch = useDispatch();
    const bio = useSelector(store => store.vendorInfoBio);
    const items = useSelector(store => store.vendorInfoItems);

    // const userId = props;

    useEffect(() => {
        console.log('What is inside userId:', storeId);
        dispatch({ type: "FETCH_VENDORINFO_BIO", payload: storeId });
        dispatch({ type: "FETCH_VENDORINFO_ITEMS", payload: storeId });
    }, []);

    return (<>
        {bio.length ? (
            bio.map((singleBio) => (
                <div key={singleBio.id}>
                    <div><h2>{singleBio.vendor_name}</h2></div>
                    <div>Stall #: {singleBio.stall_num}</div>
                    <br />
                    <div>Payment methods accepted: {singleBio.pmt_methods}</div>
                    <br />
                    <div>{singleBio.bio_description}</div>
                    <br />
                    <div>Our location: {singleBio.location}</div>
                </div>
            ))
        ) : (
            <p>More information about vendor coming soon!</p>
        )}

        {items.length ? (
            items.map((item) => (
                <div key={item.id}>
                    <img src={item.image_path} style={{ maxWidth: '150px' }} />
                    <br />
                    {item.title}
                    <br />
                    {item.description}</div>
            ))
        ) : (
            <p>More items coming soon!</p>
        )}
    </>
    )

}

export default VendorStore;