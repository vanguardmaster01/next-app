import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { SettingsProfile } from 'src/sections/settings/settings-profile';
import { SettingsProfileDetails } from 'src/sections/settings/settings-profile-detail';

const Page = () => (
  <>
    <Head>
      <title>
        Settings
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
        <Stack spacing={3}>
          <div>
            <Typography variant="h4">
              Settings
            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
                lg={4}
              >
                <SettingsProfile />
              </Grid>
              <Grid
                xs={12}
                md={6}
                lg={8}
              >
                <SettingsProfileDetails />
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
