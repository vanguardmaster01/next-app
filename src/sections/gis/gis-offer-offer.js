import PropTypes from 'prop-types';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Fab,
    Grid,
    Stack,
    Typography
  } from '@mui/material';
import { GisOfferOfferItem, GisOfferOfferProductItem } from './gis-offer-offer-item';
import AddIcon from '@mui/icons-material/Add';

export const GisOfferOffer = (props) => {
    const {data} = props

    return (

        <Card>
            <CardHeader title='Preliminary Offer' 
                subheader={
                    <>
                        <Box flexDirection='row' sx={{display: 'flex', width: '40%'}}>
                            <Typography sx={{flex: 1}} variant='span' fontSize={'smaller'}>Firm</Typography>
                            <Typography variant='span' fontSize={'smaller'}>Solar Enerji AS.</Typography>
                        </Box>
                        <Box flexDirection='row' sx={{display: 'flex', width: '40%'}}>
                            <Typography sx={{flex: 1}} variant='span' fontSize={'smaller'}>Date</Typography>
                            <Typography variant='span' fontSize={'smaller'}>12/4/2023.</Typography>
                        </Box>
                    </>

                }
            >
            </CardHeader>
            <CardContent>
                <Stack spacing={2}>
                    <Typography> Products</Typography>
                    <Stack spacing={2} sx={{px: 2}}>
                        <Grid container sx={{px: 1}}>
                            <Grid xs={6} md={6} lg={2} >
                                <Typography>Product</Typography>
                            </Grid>
                            <Grid xs={6} md={6} lg={3} >
                                <Typography>Unit Price (TL)</Typography>
                            </Grid>
                            <Grid xs={6} md={6} lg={3} >
                                <Typography>Amount</Typography>
                            </Grid>
                            <Grid xs={6} md={6} lg={2} >
                                <Typography>Total Price (TL)</Typography>
                            </Grid>
                            <Grid xs={6} md={6} lg={1} >
                            </Grid>
                        </Grid>
                        <Divider />

                        <GisOfferOfferItem />
                        <Fab size='small' color='white' aria-label='add'>
                            <AddIcon />
                        </Fab>
                    </Stack>
                </Stack>

                <Stack spacing={2} sx={{mt: 4}}>
                    <Typography> Services</Typography>
                    <Stack spacing={2} sx={{px: 2}}>
                        <Grid container sx={{px: 1}}>
                            <Grid xs={6} md={6} lg={2} >
                                <Typography>Service</Typography>
                            </Grid>
                            <Grid xs={6} md={6} lg={3} >
                                <Typography>Unit Price (TL)</Typography>
                            </Grid>
                            <Grid xs={6} md={6} lg={3} >
                                <Typography>Amount</Typography>
                            </Grid>
                            <Grid xs={6} md={6} lg={2} >
                                <Typography>Total Price (TL)</Typography>
                            </Grid>
                            <Grid xs={6} md={6} lg={1} >
                            </Grid>
                        </Grid>
                        <Divider />

                        <GisOfferOfferItem />
                        <Fab size='small' color='white' aria-label='add'>
                            <AddIcon />
                        </Fab>
                    </Stack>
                </Stack>
                

            </CardContent>
      </Card>
    )
};
  
GisOfferOffer.propTypes = {
    data: PropTypes.array,
}