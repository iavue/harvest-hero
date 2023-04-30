import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Typography, Chip } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import './VendorStore.css'

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

    const addToList = () => {
        console.log('Inside addToList');
    }

    // Original
    // return (<>
    //     {bio.length ? (
    //         bio.map((singleBio) => (
    //             <div key={singleBio.id}>
    //                 <div><h2>{singleBio.vendor_name}</h2></div>
    //                 <div>Stall #: {singleBio.stall_num}</div>
    //                 <br />
    //                 <div>Payment methods accepted: {singleBio.pmt_methods}</div>
    //                 <br />
    //                 <div>{singleBio.bio_description}</div>
    //                 <br />
    //                 <div>Our location: {singleBio.location}</div>
    //             </div>
    //         ))
    //     ) : (
    //         <p>More information about vendor coming soon!</p>
    //     )}
    //     <h3>Items Available Today</h3>
    //     {items.length ? (
    //         items.map((item) => (
    //             <div key={item.id}>
    //                 <img src={item.image_path} style={{ maxWidth: '150px' }} />
    //                 <br />
    //                 <button onClick={addToList}>Add to Shopping List</button>
    //                 <br />
    //                 {item.title}
    //                 <br />
    //                 {item.description}</div>
    //         ))
    //     ) : (
    //         <p>More items coming soon!</p>
    //     )}
    // </>
    // )

    return (<>
        {bio.length ? (
            bio.map((singleBio) => (
                <div className="motherContainer" key={singleBio.id}>
                    <Box backgroundColor="#ffffff" sx={{width: "320px", p: 3, boxShadow: 3, borderRadius: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <Typography variant="h4">{singleBio.vendor_name}</Typography>
                            <Box sx={{ ml: 2 }}>
                                <Chip label={`Stall #${singleBio.stall_num}`} variant="outlined" />
                            </Box>
                        </Box>
                        <Typography variant="subtitle1" gutterBottom>
                            Payment methods accepted: {singleBio.pmt_methods}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {singleBio.bio_description}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Our location: {singleBio.location}
                        </Typography>
                        </Box>
                </div>
            ))
        ) : (
            <Typography>More information about vendor coming soon!</Typography>
        )}
        <Typography variant="h4" sx={{ textAlign: 'center', mb: "10px" }}>Items Available Today</Typography>
        {items.length ? (
            items.map((item) => (
                <Card key={item.id} sx={{ display: 'flex', maxWidth: '400px', margin: 'auto', mb: '10px' }}>
                <CardMedia component="img" image={item.image_path} alt={item.title} sx={{ width: '40%' }} />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '60%' }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                    <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <button className="add-to-cart" onClick={addToList}>
                            Add to Cart
                        </button>
                    </CardActions>
                </CardContent>
            </Card>
            ))
        ) : (
            <p>More items coming soon!</p>
        )}
    </>
    )

}

export default VendorStore;