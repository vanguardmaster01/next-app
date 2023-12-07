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
import { DashboardTile } from 'src/sections/dashboard/dashboard-tile';
import { CalculatorsBarChart } from 'src/sections/calculators/calculators-bar-chart';
import { DashboardOffers } from 'src/sections/dashboard/dashboard-offers';

const Page = () => {
  return (
    <>
      <Head>
        <title>
          Dashboard  
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
                Dashboard
              </Typography>
            </Stack>
            <Grid container spacing={3} sx={{my: 4, ml: .1}}>
              <Grid xs={12} sm={6} lg={3}>
                <DashboardTile 
                  title = 'Potential Income'
                  soon = {true}
                  value = '55.271,90'
                  btnTxt = 'See all reports'
                  notificationIcon = {(<SvgIcon><NotificationsOutlinedIcon /></SvgIcon>)}
                  arrowIcon = {(<SvgIcon fontSize="small"><ArrowRightIcon /></SvgIcon>)}
                />
              </Grid>
              <Grid xs={12} sm={6} lg={3}>
                <DashboardTile 
                  title = 'Current Income'
                  soon = {false}
                  value = '21,234,123,00'
                  btnTxt = 'See all reports'
                  notificationIcon = {(<SvgIcon><NotificationsOutlinedIcon /></SvgIcon>)}
                  arrowIcon = {(<SvgIcon fontSize="small"><ArrowRightIcon /></SvgIcon>)}
                />
              </Grid>
              <Grid xs={12} sm={6} lg={3}>
                <DashboardTile 
                  title = 'Advanced Engineering'
                  soon = {false}
                  value = 'APPS'
                  btnTxt = 'Geopraphic Information System'
                  notificationIcon = {(<SvgIcon><NotificationsOutlinedIcon /></SvgIcon>)}
                  arrowIcon = {(<SvgIcon fontSize="small"><ArrowRightIcon /></SvgIcon>)}
                />
              </Grid>
              <Grid xs={12} sm={6} lg={3}>
                <DashboardTile 
                  title = 'Buy-Sell'
                  soon = {true}
                  value = 'MARKET'
                  btnTxt = 'Manage your purchases'
                  notificationIcon = {(<SvgIcon><NotificationsOutlinedIcon /></SvgIcon>)}
                  arrowIcon = {(<SvgIcon fontSize="small"><ArrowRightIcon /></SvgIcon>)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{my: 4, ml: .1}}>
              <Grid xs={12} sm={6} lg={7} mr={3}>
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
              </Grid>
              <Grid xs={12} sm={6} lg={4.5}>
                <DashboardOffers
                  products={[
                    {
                      id: '5ece2c077e39da27658aa8a9',
                      image: '/assets/products/product-1.png',
                      name: 'Healthcare Erbology',
                      email: "gekoni6459@gearstag.com"
                    },
                    {
                      id: '5ece2c0d16f70bff2cf86cd8',
                      image: '/assets/products/product-2.png',
                      name: 'Makeup Lancome Rouge',
                      email: "gekoni6459@gearstag.com"
                    },
                    {
                      id: 'b393ce1b09c1254c3a92c827',
                      image: '/assets/products/product-5.png',
                      name: 'Skincare Soja CO',
                      email: "gekoni6459@gearstag.com"
                    },
                    {
                      id: 'a6ede15670da63f49f752c89',
                      image: '/assets/products/product-6.png',
                      name: 'Makeup Lipstick',
                      email: "gekoni6459@gearstag.com"
                    },
                    {
                      id: 'bcad5524fe3a2f8f8620ceda',
                      image: '/assets/products/product-7.png',
                      name: 'Healthcare Ritual',
                      email: "gekoni6459@gearstag.com"
                    }
                  ]}
                  sx={{ height: '100%' }}
                />
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
