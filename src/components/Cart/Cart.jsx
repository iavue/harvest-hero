import { Card, CardActions, CardContent, CardMedia, Box, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import './Cart.css';

function Favorites() {
    console.log('Inside Favorites()!!');

    return (<>

        <div>
            <Typography variant="h3" sx={{ ml: '10px' }}>Your cart</Typography>

            <Card sx={{ display: 'flex', maxWidth: '400px', margin: 'auto', my: '10px', mx: '5px' }}>
                <CardMedia component="img" image="/squash_variety.png" sx={{ width: '40%' }} />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '60%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Chip label="Stall # 110" variant="outlined" />
                    </Box>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Squash Variety
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Squash variety! Come pick out the best one!
                    </Typography>
                    <Link to='' style={{ fontSize: '.8rem', }}>
                        Fresh Fields
                    </Link>
                    <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <button className="remove-cart">
                            Remove
                        </button>
                    </CardActions>
                </CardContent>
            </Card>

            <Card sx={{ display: 'flex', maxWidth: '400px', margin: 'auto', my: '10px', mx: '5px' }}>
                <CardMedia component="img" image="/corn_icecream.png" sx={{ width: '40%' }} />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '60%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Chip label="Stall # 105" variant="outlined" />
                    </Box>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Corn Ice Cream Sandwich
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Sweet corn ice cream topped with chocolate, sandwiched in corn wafer. One of our most popular treats! Get them before they're gone!
                    </Typography>
                    <Link to='' style={{ fontSize: '.8rem', }}>
                        Treats Around the World
                    </Link>
                    <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <button className="remove-cart">
                            Remove
                        </button>
                    </CardActions>
                </CardContent>
            </Card>

            <Card sx={{ display: 'flex', maxWidth: '400px', margin: 'auto', my: '10px', mx: '5px' }}>
                <CardMedia component="img" image="/corn_rainbow.png" sx={{ width: '40%' }} />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '60%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Chip label="Stall # 115" variant="outlined" />
                    </Box>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Rainbow Corn
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Beautiful rainbow corn. Wow your guests at your next feast!
                    </Typography>
                    <Link to='' style={{ fontSize: '.8rem', }}>
                        AgroAcres
                    </Link>
                    <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <button className="remove-cart">
                            Remove
                        </button>
                    </CardActions>
                </CardContent>
            </Card>

            <Card sx={{ display: 'flex', maxWidth: '400px', margin: 'auto', my: '10px', mx: '5px' }}>
                <CardMedia component="img" image="/peppers_ghost.png" sx={{ width: '40%' }} />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '60%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Chip label="Stall # 115" variant="outlined" />
                    </Box>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Ghost Peppers
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Warning! Very spicy!
                    </Typography>
                    <Link to='' style={{ fontSize: '.8rem', }}>
                        AgroAcres
                    </Link>
                    <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <button className="remove-cart">
                            Remove
                        </button>
                    </CardActions>
                </CardContent>
            </Card>

            <Card sx={{ display: 'flex', maxWidth: '400px', margin: 'auto', my: '10px', mx: '5px' }}>
                <CardMedia component="img" image="/pickles.png" sx={{ width: '40%' }} />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '60%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Chip label="Stall # 124" variant="outlined" />
                    </Box>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Pickles
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Sour boys!
                    </Typography>
                    <Link to='' style={{ fontSize: '.8rem', }}>
                        Dilly's Fresh Pickles
                    </Link>
                    <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <button className="remove-cart">
                            Remove
                        </button>
                    </CardActions>
                </CardContent>
            </Card>

        </div>



    </>
    )
};

export default Favorites;