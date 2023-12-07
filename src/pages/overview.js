import Head from 'next/head';
import { Grid, Box, Container, Stack, Typography, 
  Card, CardHeader, Button, SvgIcon
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import { solar_image_path, wind_image_path } from 'src/utils/utils';
import Link from 'next/link';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import SolarPowerOutlinedIcon from '@mui/icons-material/SolarPowerOutlined';
import WindPowerOutlinedIcon from '@mui/icons-material/WindPowerOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import { OverviewCard } from 'src/sections/overview/overview-card';

const Page = () => {
  return (
    <>
      <Head>
        <title>
          Overview  
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
                Overview
              </Typography>
            </Stack>
            <Grid container spacing={3} sx={{my: 4, ml: .1}}>
              <Grid xs={12} sm={6} lg={7.5} sx={{mr: 1}}>
                <Card sx={{width: '100%', px: 2, py: 2}}>
                    <Box>
                        <Stack spacing={2} direction='row' px={1} sx={{display: 'flex', alignItems: 'center'}}>
                          <Typography variant='h4'>234.232,00</Typography>
                          <Box>
                            <Typography variant='span' sx={{fontSize: 'smaller'}}>Earning per Year</Typography>
                          </Box>
                        </Stack>
                        <Box sx={{my: 1}}>
                          <Button
                            color="inherit"
                            endIcon={(
                              <SvgIcon fontSize="small">
                                <ArrowRightIcon />
                              </SvgIcon>
                            )}
                            size="small"
                          >
                            See the detailed reports
                          </Button>
                        </Box>
                      </Box>
                </Card>                
                <Stack direction='row' spacing={2} my={2}>
                  <OverviewCard
                    soon = {true}
                    notificationIcon = {(<SvgIcon><NotificationsOutlinedIcon /></SvgIcon>)}
                    title = "Bank" 
                    icon = {(<SvgIcon><AccountBalanceOutlinedIcon /></SvgIcon>)}
                    btnTxt = "Apply for credit"
                    arrowIcon = {(<SvgIcon fontSize="small"><ArrowRightIcon /></SvgIcon>)}
                  />
                  <OverviewCard
                    soon = {true}
                    notificationIcon = {(<SvgIcon><NotificationsOutlinedIcon /></SvgIcon>)}
                    title = "Insurance" 
                    icon = {(<SvgIcon><SecurityOutlinedIcon /></SvgIcon>)}
                    btnTxt = "See insurance options"
                    arrowIcon = {(<SvgIcon fontSize="small"><ArrowRightIcon /></SvgIcon>)}
                  />
                </Stack>
                <Stack direction='row' spacing={2} my={2}>
                  <OverviewCard
                    soon = {false}
                    notificationIcon = {(<SvgIcon><NotificationsOutlinedIcon /></SvgIcon>)}
                    title = "Solar Calculator" 
                    icon = {(<SvgIcon><SolarPowerOutlinedIcon /></SvgIcon>)}
                    btnTxt = "Solay panel analysis"
                    arrowIcon = {(<SvgIcon fontSize="small"><ArrowRightIcon /></SvgIcon>)}
                  />
                  <OverviewCard
                    soon = {false}
                    notificationIcon = {(<SvgIcon><NotificationsOutlinedIcon /></SvgIcon>)}
                    title = "Wind Calculator" 
                    icon = {(<SvgIcon><WindPowerOutlinedIcon /></SvgIcon>)}
                    btnTxt = "Wind turbine analysis"
                    arrowIcon = {(<SvgIcon fontSize="small"><ArrowRightIcon /></SvgIcon>)}
                  />
                </Stack>
              </Grid>
              <Grid xs={12} sm={6} lg={4} mx={1}>
                <Card sx={{width: '100%', px: 2, py: 2}}>
                   <Box>
                        <Stack spacing={2} direction='row' py={1} px={1} sx={{display: 'flex', alignItems: 'center'}}>
                          <Typography variant='h6'>Best Offers for you</Typography>
                        </Stack>
                        <Box sx={{mt: 2}}>
                          <Button
                            color="inherit"
                            endIcon={(
                              <SvgIcon fontSize="small">
                                <ArrowRightIcon />
                              </SvgIcon>
                            )}
                            size="small"
                          >
                            See the detailed reports
                          </Button>
                        </Box>
                      </Box>
                </Card> 
                <Stack direction='row' spacing={2} my={2}>
                  <OverviewCard
                      soon = {true}
                      notificationIcon = {(<SvgIcon><NotificationsOutlinedIcon /></SvgIcon>)}
                      title = "Additional Services" 
                      icon = {(<SvgIcon><AddBusinessOutlinedIcon /></SvgIcon>)}
                      btnTxt = "Explore our special services"
                      arrowIcon = {(<SvgIcon fontSize="small"><ArrowRightIcon /></SvgIcon>)}
                    />
                </Stack>
                <Stack direction='row' spacing={2} my={2}>
                  <OverviewCard
                    soon = {true}
                    notificationIcon = {(<SvgIcon><NotificationsOutlinedIcon /></SvgIcon>)}
                    title = "New Features" 
                    icon = {(<SvgIcon><NotificationAddOutlinedIcon /></SvgIcon>)}
                    btnTxt = "Get notifications"
                    arrowIcon = {(<SvgIcon fontSize="small"><ArrowRightIcon /></SvgIcon>)}
                  />
                </Stack>
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
