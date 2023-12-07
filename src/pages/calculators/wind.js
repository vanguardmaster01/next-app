import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { Container, Grid, Box, Button, Link, Checkbox, InputLabel,
    Stack, TextField, Typography,  FormControlLabel, MenuItem, FormControl, Select, SelectChangeEvent
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import { wind_image_path } from 'src/utils/utils';

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
    const handleSave = () => {
        router.push('/calculators/wind-results')
    };

    return (
        <>
        <Head>
            <title>
                Wind Calculator  
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
                        Wind Calculator
                    </Typography>
                </Stack>
                <Grid container spacing={3} sx={{my: 4, ml: .1}}>
                    <Grid xs={12} sm={6} lg={7} >
                        <Box
                            component="img"
                            src={wind_image_path}
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
                                    <TextField
                                        fullWidth
                                        label="Network Traiff"
                                        name="trill"
                                        onChange={handleOrientation}
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
