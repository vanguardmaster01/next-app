import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { Container, Grid, Box, Button, Link, Checkbox, InputLabel,LinearProgress,
    Stack, TextField, Typography,  FormControlLabel, MenuItem, FormControl, Select, SelectChangeEvent
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import { solar_image_path, wind_image_path } from 'src/utils/utils';
import Map from 'src/components/map';

const Page = () => {
    const router = useRouter();
    const [triff, setTriff] = useState('');
    const [orientation, setOrientation] = useState('');
    const [tilt, setTilt] = useState(5)

    const handleTriff = (event) => {
      setTriff(event.target.value );
    };
    const handleOrientation = (event) => {
      setOrientation(event.target.value );
    };
    const handleSave = () =>{
        router.push('/calculators/solar-results')
    }

    return (
        <>
        <Head>
            <title>
            Solar Calculator  
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
                    Solar Calculator
                    </Typography>
                </Stack>
         
                <Grid container spacing={3} sx={{my: 4, ml: .1}}>
                    <Grid xs={12} sm={6} lg={7} >
                        <Box
                            component="img"
                            src={solar_image_path}
                            sx={{
                                borderRadius: 1,
                                height: 300,
                                width: 300
                            }}
                            />
                            {/* <Map address="1600 Amphitheatre Parkway, Mountain View, CA" /> */}
                    </Grid>
                    <Grid xs={12} sm={6} lg={5}>
                        <Box
                            sx={{
                            flex: '1 1 auto',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center'
                            }}
                        >
                            <Box
                            sx={{
                                maxWidth: 550,
                                px: 3,
                                py: '20px',
                                width: '100%'
                            }}
                            >
                                <form
                                noValidate
                                >
                                <Stack spacing={3}>
                                    <FormControl fullWidth variant='standard'>
                                        <InputLabel id="Trill-label">
                                            Network Traiff
                                        </InputLabel>
                                        <Select
                                            id="triff_id"
                                            value={triff}
                                            label="Network Traiff"
                                            onChange={handleTriff}
                                        >
                                            <MenuItem value={10}>Triff 1</MenuItem>
                                            <MenuItem value={20}>Triff 2</MenuItem>
                                            <MenuItem value={30}>Triff 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField
                                    fullWidth
                                    label="Number of People"
                                    name="number"
                                    />
                                    <TextField
                                    fullWidth
                                    label="Last Month's Bill(TL)"
                                    name="bill"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox defaultChecked />}
                                        label="Enter approximate area manually"
                                    />
                                    <TextField
                                    fullWidth
                                    label="Roof Area (m²)"
                                    name="area"
                                    />
                                    
                                    <FormControl fullWidth variant='standard'>
                                        <InputLabel id="orientation-label">
                                            Orientation
                                        </InputLabel>
                                        <Select
                                            id="orientation_id"
                                            value={orientation}
                                            label="Orientation"
                                            onChange={handleOrientation}
                                        >
                                            <MenuItem value={10}>Orientation 1</MenuItem>
                                            <MenuItem value={20}>Orientation 2</MenuItem>
                                            <MenuItem value={30}>Orientation 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Stack direction='row'>
                                        <Typography
                                            sx={{flex: 1}}
                                            color="text.secondary"
                                            variant="span"
                                        >
                                            Surface Tilt (degree °)
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            variant="span"
                                        >
                                            5°
                                        </Typography>

                                    </Stack>
                                    <Box sx={{mt: '4px!important'}}>
                                        <LinearProgress
                                            value={tilt}
                                            variant="determinate"
                                        />
                                    </Box>
                                    <Stack direction="row" spacing={2} sx={{mt: 3, justifyContent: 'flex-end'}}>
                                        <Button size="large" variant="contained" 
                                            sx={{backgroundColor: '#ffffff', color: '#000000'}} >
                                            Cancel
                                        </Button>
                                        <Button size="large" variant="contained"
                                            sx={{backgroundColor: '#000000'}}
                                            onClick={handleSave}
                                         >
                                            Save
                                        </Button>
                                    </Stack>
                                </Stack>

                                </form>
                            </Box>
                        </Box>
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
