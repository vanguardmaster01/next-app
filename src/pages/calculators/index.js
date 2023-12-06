import Head from 'next/head';
import { Grid, Box, Container, Stack, Typography, 
  Card, CardHeader
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import { solar_image_path, wind_image_path } from 'src/utils/utils';

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
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Calculator
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Container maxWidth="xl" sx={{mt: 8}}>
            <Grid container spacing={3}>
              <Grid xs={12} sm={6} lg={4} sx={{mr: 4}}>
                <Card >
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
                </Card>                
              </Grid>
              <Grid xs={12} sm={6} lg={4}>
                <Card >
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
                </Card>                
              </Grid>
            </Grid>
          </Container>
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
