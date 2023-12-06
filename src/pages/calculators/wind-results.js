import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { Container, Grid, Box, Button, Link, Checkbox, InputLabel,LinearProgress,
    Stack, TextField, Typography,  FormControlLabel, MenuItem, FormControl, Select, SelectChangeEvent, Card, Divider
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import { solar_image_path, wind_image_path } from 'src/utils/utils';
import { CalculatorsLineChart } from 'src/sections/calculators/calculators-line-chart';
import { grey, red } from '@mui/material/colors';
import { CalculatorsBarChart } from 'src/sections/calculators/calculators-bar-chart';
import { CalculatorsTile } from 'src/sections/calculators/calculators-tile';
import { fontSize } from '@mui/system';
import { CalculatorsWindProperty } from 'src/sections/calculators/calculators-wind-property';

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
                Wind Analysis Results
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
                        Wind Analysis Results
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
                                },
                                {
                                name: 'Last year',
                                data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                                }
                            ]}
                        />
                        <Stack spacing={2} direction='row' my={1}>
                            <CalculatorsTile value='267' title= 'System Size (KWp)' />
                            <CalculatorsTile value='144' title= 'Number of solar Panels' />
                        </Stack>
                        <Stack spacing={2} direction='row' my={1}>
                            <CalculatorsTile value='1.668.234,00' title= 'Installation Cost' />
                            <CalculatorsTile value='+9%' title= 'Consumption Saving Ratio' />
                        </Stack>
                        <Stack spacing={2} direction='row' my={1}>
                            <Card sx={{flex: 1, px: 3, pt: 2}}>
                                <Typography variant='h6'> Pareto Optimal Turnines</Typography>
                                <Box sx={{my: 1}}>
                                    <Typography variant='span' sx={{fontSize: 'smaller'}}> ACSA A27/225</Typography>
                                    <Divider></Divider>
                                    <Typography variant='span' sx={{fontSize: 'smaller'}}> ACSA A22/225</Typography>
                                </Box>
                                
                            </Card>
                        </Stack>
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
                        />
                        
                        <Stack spacing={2} direction='row' my={1}>
                            <CalculatorsTile value='2114004' title= 'System Size (KWp)' />
                            <CalculatorsTile value='202556' title= 'Number of solar Panels' />
                        </Stack>
                        <Stack spacing={2} direction='row' my={1}>
                            <CalculatorsTile value='+91%' title= 'Installation Cost' />
                            <CalculatorsTile value='12.111,00' title= 'Consumption Saving Ratio' />
                        </Stack>
                    </Grid>
                </Grid>
                <Stack spacing={3}>
                    <Card sx={{flex: 1, px: 3, py: 2}}>
                        <Typography variant='span'>
                            Preferable solution(based on weighted sum optimization)
                        </Typography>
                        <Typography variant='h4'>
                            ACSA A27/225
                        </Typography>
                    </Card>
                    <Card sx={{flex: 1, px: 3, py: 1}}>
                        <Box sx={{pt: 2}}>
                            <Typography variant='h6'>
                                Preferable Turbine Properties
                            </Typography>
                        </Box>
                        <Grid container spacing={3} mt={2} pt={1}>
                            <CalculatorsWindProperty title='Modal' value='ACSA A27/225' />
                            <CalculatorsWindProperty title='Manufacture 1' value='' />
                            <CalculatorsWindProperty title='Cut in wind speed' value='3.5' />
                            <CalculatorsWindProperty title='Type 2' value='Asynchronus' />
                        </Grid>
                    </Card>
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
