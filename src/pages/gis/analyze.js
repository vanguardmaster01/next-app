import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { Container, Grid, Box, Button, Link, Checkbox, InputLabel,LinearProgress,
    Stack, TextField, Typography,  FormControlLabel, MenuItem, FormControl, Select, SelectChangeEvent
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';


const Page = () => {
    const router = useRouter();

    return (
        <>
        <Head>
            <title>
                Solar Application
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
                        Solay Application
                    </Typography>
                </Stack>
         
                <Grid container spacing={3} sx={{my: 4, ml: .1}}>

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
