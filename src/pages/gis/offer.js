import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { Container, Grid, Box, Button, Link, Checkbox, InputLabel,LinearProgress,
    Stack, TextField, Typography,  FormControlLabel, MenuItem, FormControl, Select, SelectChangeEvent
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { GisOfferReport } from 'src/sections/gis/gis-offer-report';
import { GisOfferOffer } from 'src/sections/gis/gis-offer-offer';


const Page = () => {
    const router = useRouter();

    return (
        <>
        <Head>
            <title>
                Send Offer
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
                        Send Offer
                    </Typography>
                </Stack>
                <Grid sx={{my: 8}} container>
                    <Grid xs={12} md={6} lg={4} mr={4}>
                        <GisOfferReport  />
                    </Grid>
                    <Grid xs={12} md={6} lg={7.5} >
                        <GisOfferOffer />
                    </Grid>
                </Grid>

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
