import PropTypes from 'prop-types';
import { Grid, Typography } from "@mui/material";


const products= [
    { value: 'Product 1'},
    { value: 'Product 2'},
    { value: 'Product 3'}
];

export const OrdersOfferItem = (props) => {

    const {name, price, amount, tl} = props

    return (
        <>
                <Grid container 
                    sx={{px: 2}}
                >
                    <Grid xs={6} md={6} lg={2} >
                        <Typography>{name}</Typography>
                    </Grid>
                    <Grid xs={6} md={6} lg={3} >
                    <Typography>{price}</Typography>
                    </Grid>
                    <Grid xs={6} md={6} lg={3} >
                        <Typography>{amount}</Typography>
                    </Grid>
                    <Grid xs={6} md={6} lg={2}>
                        <Typography>{tl}</Typography>
                    </Grid>
                </Grid>
        </>
    )
}

OrdersOfferItem.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number,
    tl: PropTypes.string
}