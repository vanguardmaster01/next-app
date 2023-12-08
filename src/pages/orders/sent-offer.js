import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { Container, Grid, Box, Button, Link, Checkbox, InputLabel,LinearProgress,
    Stack, TextField, Typography,  FormControlLabel, MenuItem, FormControl, Select, SelectChangeEvent, Card, CardHeader, CardContent, CardActions, Divider
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OrdersOfferItem } from 'src/sections/orders/orders-offer-item';


const Page = () => {

    const [values, setValues] = useState({
        latutude: '38.254157',
        longitude: '15.14578',
        area: '3212',
        type: 'Premius',
        dcRatio: '222',
        efficiency: '2312',
        arrayType: '1-axis backtracking',
        tilt: '123',
        azimuth: '23',
        groundRatio: '3',
        loss: '22',
      });
    
    
    const handleChange = useCallback(
        (event) => {
          setValues((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
          }));
        },
        []
      );

    const handleSubmit = useCallback(
        (event) => {
          event.preventDefault();
        },
        []
      );
    
    return (
        <>
        <Head>
            <title>
                Sent Offer
            </title>
        </Head>
        <Box
            component="main"
            sx={{
            flexGrow: 1,
            py: 2
            }}
        >
         
            <Container maxWidth="xl" sx={{mt: 1}}>
               <Stack spacing={1}>
                    <Typography variant="h4">
                        Sent Offer
                    </Typography>
                </Stack>
                <Stack spacing={2} sx={{my: 3, px: 2}}>

                    <form
                        autoComplete="off"
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        
                        <Card>
                            <CardHeader
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
                             />
                             
                            <CardContent>
                                <Stack spacing={2}>
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
                                        <OrdersOfferItem name="Panel1" price = '2500' amount='342' tl = '1234857845' />
                                    </Stack>
                                </Stack>

                                <Stack spacing={2} sx={{mt: 6}}>
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
                                        <OrdersOfferItem name="Kurulum" price = '2500' amount='342' tl = '1234857845' />
                                    </Stack>
                                </Stack>
                                <Stack spacing={2} sx={{mt: 6}} direction={'row'} width={'30%'}
                                >
                                    <Typography sx={{flex: 1}}>Total Price:</Typography>
                                    <Typography>20.325.511,00</Typography>
                                </Stack>
                                
                            </CardContent>
                        </Card>
                        </form>
                </Stack>
            </Container>
        </Box>
        </>
    );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
