import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { SvgIcon } from '@mui/material';

import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

export const items = [
  {
    title: 'Overview',
    path: '/',
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
    path: '/companies',
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
    path: '/settings',
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
        <UserPlusIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Settings',
    path: '/404',
    icon: (
      <SvgIcon fontSize="small">
        <SettingsOutlinedIcon />
      </SvgIcon>
    )
  }
];
