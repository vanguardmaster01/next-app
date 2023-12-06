import Head from 'next/head';
import { Grid, Box, Container, Stack, Typography, 
  Card, CardHeader
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import { solar_image_path, wind_image_path } from 'src/utils/utils';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Head>
        <title>
          Calculator  
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
                Calculator
              </Typography>
            </Stack>
            <Grid container spacing={3} sx={{my: 4, ml: .1}}>
              <Grid xs={12} sm={6} lg={4} sx={{mr: 4}}>
                <Card >
                  <Link href="/calculators/solar">
                    <CardHeader title="Solar Panel" />
                    <Box
                        component="img"
                        src={solar_image_path}
                        sx={{
                          borderRadius: 1,
                          height: 300,
                          width: 300
                        }}
                      />
                    </Link>
                </Card>                
              </Grid>
              <Grid xs={12} sm={6} lg={4}>
                <Card >
                  <Link href="/calculators/wind">
                    <CardHeader title="Wind Turbine" />
                    <Box
                        component="img"
                        src={wind_image_path}
                        sx={{
                          borderRadius: 1,
                          height: 300,
                          width: 300
                        }}
                      />
                    </Link>
                </Card>                
              </Grid>
            </Grid>
          </Container>
        {/* </Container> */}
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
