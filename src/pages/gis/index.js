import React, { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { Container, Grid, Box, Button, Link, Checkbox, InputLabel,LinearProgress,
    Stack, TextField, Typography,  FormControlLabel, MenuItem, FormControl, Select, SelectChangeEvent, Card
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import Map from 'src/components/map';
import { GisTable } from 'src/sections/gis/gis-table';
import { useSelection } from 'src/hooks/use-selection';
import { applyPagination } from 'src/utils/apply-pagination';

const data = [
    {
      id: 0,
      Code:'0x123456789ABCDEFGHIJKLMNOPQRST',
      Consumer: 'OZAN',
      Area: 777.0324234234,
      Type: 'Solar',
    },    
    {
      id: 0,
      Code:'0x123456789ABCDEFGHIJKLMNOPQRST',
      Consumer: 'OZAN',
      Area: 777.0324234234,
      Type: 'Solar',
    },    
    {
      id: 0,
      Code:'0x123456789ABCDEFGHIJKLMNOPQRST',
      Consumer: 'OZAN',
      Area: 777.0324234234,
      Type: 'Solar',
    },    
    {
      id: 0,
      Code:'0x123456789ABCDEFGHIJKLMNOPQRST',
      Consumer: 'OZAN',
      Area: 777.0324234234,
      Type: 'Solar',
    },    
  ];
  
const useGiss = (page, rowsPerPage) => {
    return useMemo(
      () => {
        return applyPagination(data, page, rowsPerPage);
      },
      [page, rowsPerPage]
    );
  };

const useGisIds = (giss) => {
    return useMemo(
      () => {
        return giss.map((gis) => gis.id);
      },
      [giss]
    );
  };

const Page = () => {
    const router = useRouter();
    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const giss = useGiss(page, rowsPerPage);
    const gisIds = useGisIds(giss);
    const gisSelection = useSelection(gisIds);
  
    const handlePageChange = useCallback(
        (event, value) => {
          setPage(value);
        },
        []
      );
    
      const handleRowsPerPageChange = useCallback(
        (event) => {
          setRowsPerPage(event.target.value);
        },
        []
      );

      
    return (
        <>
        <Head>
            <title>
            Solar Calculator  
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
                    GIS
                    </Typography>
                </Stack>
         
                <Card sx={{width: '100%', px: 2, py: 2, my: 2}}>
                    <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />
                </Card>
                <GisTable
                    count={data.length}
                    items={giss}
                    onDeselectAll={gisSelection.handleDeselectAll}
                    onDeselectOne={gisSelection.handleDeselectOne}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleRowsPerPageChange}
                    onSelectAll={gisSelection.handleSelectAll}
                    onSelectOne={gisSelection.handleSelectOne}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    selected={gisSelection.selected}
                />

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
