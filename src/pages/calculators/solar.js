import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { Container, Grid, Box, Button, Link, Checkbox, InputLabel,LinearProgress,
    Stack, TextField, Typography,  FormControlLabel, MenuItem, FormControl, Select, SelectChangeEvent
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import Map from 'src/components/map';

const orientations= [
    { value: 'Orientation 1'},
    { value: 'Orientation 2'},
    { value: 'Orientation 3'}
];
const triffs= [
    { value: 'Triff 1'},
    { value: 'Triff 2'},
    { value: 'Triff 3'}
];

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
                        <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />
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
                                    <TextField
                                        fullWidth
                                        label="Network Traiff"
                                        name="trill"
                                        onChange={handleTriff}
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        value={triff.value}
                                        >
                                        {triffs.map((option) => (
                                            <option
                                            key={option.value}
                                            value={option.value}
                                            >
                                            {option.value}
                                            </option>
                                        ))}
                                    </TextField>

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
                                    <TextField
                                        fullWidth
                                        label="Orientation"
                                        name="orientation"
                                        onChange={handleOrientation}
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        value={orientation.value}
                                        >
                                        {orientations.map((option) => (
                                            <option
                                            key={option.value}
                                            value={option.value}
                                            >
                                            {option.value}
                                            </option>
                                        ))}
                                    </TextField>
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
