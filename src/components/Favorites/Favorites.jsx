import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';


function Favorites() {
    console.log('Inside Favorites()!!');

    return (<>

        <div>
           
                <Card sx={{ display: 'flex', maxWidth: '400px', margin: 'auto', my: '10px', mx: '5px' }}>
                    <CardMedia component="img" image="/squash_variety.png" sx={{ width: '40%' }} />
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '60%' }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Squash Variety
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Squash variety! Come pick out the best one!
                        </Typography>
                        <Link to='' style={{ fontSize: '.9rem', }}>
                            VendorName
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