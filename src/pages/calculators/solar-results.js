import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { Container, Grid, Box, Button, Link, Checkbox, InputLabel,LinearProgress,
    Stack, TextField, Typography,  FormControlLabel, MenuItem, FormControl, Select, SelectChangeEvent
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import { solar_image_path, wind_image_path } from 'src/utils/utils';
import { CalculatorsLineChart } from 'src/sections/calculators/calculators-line-chart';
import { grey, red } from '@mui/material/colors';
import { CalculatorsBarChart } from 'src/sections/calculators/calculators-bar-chart';

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
    const handleOffer = () =>{
        router.push('/')
    }

    return (
        <>
        <Head>
            <title>
                Solar Analysis Results
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
                        Solar Analysis Results
                    </Typography>
                </Stack>
                <Button size="medium" variant="contained"
                        sx={{backgroundColor: '#04a559c2', mt: 3}}
                        onClick={handleOffer}
                >
                    Get Your Special Offer Now!
                </Button>
                <Grid container spacing={3} sx={{mt: 3}}>
                    <Grid xs={12} sm={6} lg={5.5} mx={3}>
                        <CalculatorsLineChart
                            chartSeries={[
                                {
                                name: 'This year',
                                data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                                }
                            ]}
                            sx={{ height: '15rem' }}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} lg={5.5} mx={3}>
                        <CalculatorsBarChart
                            chartSeries={[
                                {
                                name: 'This year',
                                data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                                },
                                {
                                name: 'Last year',
                                data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                                }
                            ]}
                            sx={{ height: '15rem' }}
                        />
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
