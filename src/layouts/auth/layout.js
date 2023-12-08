import { useState } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Box, Link, Typography, Unstable_Grid2 as Grid, AppBar, Toolbar, FormControl, Select, MenuItem } from '@mui/material';
import countries from 'i18n-iso-countries'
import enLocale from 'i18n-iso-countries/langs/en.json'
import itLocale from 'i18n-iso-countries/langs/it.json'
import { Bo, Us } from "react-flags-select";

// TODO: Change subtitle text

export const Layout = (props) => {

  const { children } = props;

  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);
  const countryObj = countries.getNames('en', {select: 'official'})
  const countryArr = Object.entries(countryObj).map(([key, value])=> {
      return {
          label: value,
          value: key
      };
  });

  const [selectedCountry, setSelectedCountry] = useState('')

  const selectCountryHandler = (value) => {
      setSelectedCountry(value)
  }

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto'
      }}
    >
      <Grid
        container
        sx={{ flex: '1 1 auto' }}
      >
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: 'center',
            background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            '& img': {
              maxWidth: '100%'
            }
          }}
        >
          <Box sx={{ p: 3, position:'fixed', bottom: 0, left: '2rem' }}>
            <Box>
              <Typography
                sx={{
                  fontSize: '24px',
                  lineHeight: '32px',
                  mb: 1,
                  color: '#b6fd0f'
                }}
                variant="h1"
              >
                Received Grant Support
              </Typography>
              <Typography
                sx={{ mb: 3 }}
                variant="subtitle1"
              >
                TUBITAK 1512 Green Call
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: '24px',
                  lineHeight: '32px',
                  mb: 1,
                  color: '#b6fd0f'
                }}
                variant="h1"
              >
                Most Valuable Pre-Incubation Award
              </Typography>
              <Typography
                sx={{ mb: 3 }}
                variant="subtitle1"
              >
                Teknopark lzmir High Technology Awards
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: '24px',
                  lineHeight: '32px',
                  mb: 1,
                  color: '#b6fd0f'
                }}
                variant="h1"
              >
                1st Place Award
              </Typography>
              <Typography
                sx={{ mb: 3 }}
                variant="subtitle1"
              >
                Best For Energy / Best For Wind Ideathon
              </Typography>
            </Box>

          </Box>
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          <Box
            component="header"
            sx={{
              left: 5,
              p: 5,
              position: 'fixed',
              top: 0,
              width: '100%',
              display: 'flex'
            }}
          >
              <Box sx={{flex: 1}}>
                <Typography variant='h4' sx={{color: '#ffffff'}}>Enerjeet</Typography>
              </Box>
              <Box flexDirection='row' sx={{float: 'right', color: 'black', display: 'flex'}}>
                <Box sx={{display: 'flex'}}>
                  <Link variant="button" color="text.primary" href="/auth/vendor"
                      sx={{ my: 1, mx: 1.5 }} >
                      Join Vendor List
                  </Link>
                </Box>
                <Box sx={{display: 'flex'}}>
                  <Link variant="button" color="text.primary" href="/auth/register"
                      sx={{ my: 1, mx: 1.5 }} >
                      Craeate an Account
                  </Link>                        
                </Box>
                <Box sx={{display: 'flex'}}>
                  <FormControl sx={{minWidth: 220}} size='small'>
                        <Select labelId="countrySelect" value={selectedCountry} 
                            onChange={(e) => selectCountryHandler(e.target.value)}>
                            {
                                !!countryArr?.length &&
                                countryArr.map(country => (
                                    <MenuItem key={country.value} value={country.value}>
                                        <Us />&nbsp;United States
                                    </MenuItem>
                                ))
                            }
                        </Select>
                  </FormControl>
                </Box>
                        
              </Box>
          </Box>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

Layout.prototypes = {
  children: PropTypes.node
};