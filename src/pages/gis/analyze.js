import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { Container, Grid, Box, Button, Link, Checkbox, InputLabel,LinearProgress,
    Stack, TextField, Typography,  FormControlLabel, MenuItem, FormControl, Select, SelectChangeEvent, Card, CardHeader, CardContent, CardActions
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';


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
                        Solar Application
                    </Typography>
                </Stack>
                <Stack spacing={2} sx={{my: 3, px: 2}}>

                    <form
                        autoComplete="off"
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        
                        <Card>
                            <CardContent sx={{ pt: 3 }}>
                                <Stack sx={{width: '50%', py: 2, pr: 1.5}} spacing={3} direction='row'>
                                    <TextField
                                            fullWidth
                                            label="Latitude"
                                            name="latitude"
                                            onChange={handleChange}
                                            required
                                            value={values.latutude}
                                    />
                                    <TextField
                                            fullWidth
                                            label="Longitude"
                                            name="longitude"
                                            onChange={handleChange}
                                            required
                                            value={values.longitude}
                                    />

                                </Stack>       
                                <Stack sx={{width: '100%', py: 2}} spacing={3} direction='row'>
                                    <TextField
                                            fullWidth
                                            label="Estimated total module ara (m²)"
                                            name="area"
                                            onChange={handleChange}
                                            required
                                            value={values.area}
                                    />
                                    <TextField
                                            fullWidth
                                            label="Model Type"
                                            name="type"
                                            onChange={handleChange}
                                            required
                                            value={values.type}
                                    />
                                    <TextField
                                            fullWidth
                                            label="DC to AC ratio"
                                            name="dcRatio"
                                            onChange={handleChange}
                                            required
                                            value={values.dcRatio}
                                    />
                                    <TextField
                                            fullWidth
                                            label="Inverter efficiency (%)"
                                            name="efficiency"
                                            onChange={handleChange}
                                            required
                                            value={values.efficiency}
                                    />

                                </Stack> 
                                <Stack sx={{width: '100%', py: 2}} spacing={3} direction='row'>
                                    <TextField
                                            fullWidth
                                            label="Array Type"
                                            name="arrayType"
                                            onChange={handleChange}
                                            required
                                            value={values.arrayType}
                                    />
                                    <TextField
                                            fullWidth
                                            label="Tilt (degrees)"
                                            name="tilt"
                                            onChange={handleChange}
                                            required
                                            value={values.tilt}
                                    />
                                    <TextField
                                            fullWidth
                                            label="Azimuth (degrees)"
                                            name="azimuth"
                                            onChange={handleChange}
                                            required
                                            value={values.azimuth}
                                    />
                                    <TextField
                                            fullWidth
                                            label="Ground coverage ratio"
                                            name="groundRatio"
                                            onChange={handleChange}
                                            required
                                            value={values.groundRatio}
                                    />

                                </Stack> 
                                <Stack sx={{width: '25%', py: 2, pr: 2}} spacing={3} direction='row'>
                                    <TextField
                                            fullWidth
                                            label="Total loss"
                                            name="loss"
                                            onChange={handleChange}
                                            required
                                            value={values.loss}
                                    />

                                </Stack>       
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'flex-end' }}>
                                <Button variant="outlined">
                                    Cancel
                                </Button>
                                <Button variant="contained">
                                    Save
                                </Button>
                            </CardActions>
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
