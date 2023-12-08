import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import { SvgIcon } from '@mui/material';

import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';

export const items = [
  {
    title: 'Overview',
    path: '/overview',
    icon: (
      <SvgIcon fontSize="small">
        <GridViewOutlinedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Calculator',
    path: '/calculators',
    icon: (
      <SvgIcon fontSize="small">
        <CalculateOutlinedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Dashboard',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <HomeOutlinedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: (
      <SvgIcon fontSize="small">
        <EqualizerOutlinedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Operations',
    path: '/operations',
    icon: (
      <SvgIcon fontSize="small">
        <HandymanOutlinedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Login',
    path: '/auth/login',
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Register',
    path: '/auth/register',
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Join Vendor List',
    path: '/auth/vendor',
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <SettingsOutlinedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'GIS',
    path: '/gis',
    icon: (
      <SvgIcon fontSize="small">
        <SettingsOutlinedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Products',
    path: '/products',
    icon: (
      <SvgIcon fontSize="small">
        <ProductionQuantityLimitsOutlinedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Services',
    path: '/services',
    icon: (
      <SvgIcon fontSize="small">
        <DesignServicesOutlinedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingCartOutlinedIcon />
      </SvgIcon>
    )
  }
];
