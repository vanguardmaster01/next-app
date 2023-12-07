import React, { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { Container, Grid, Box, Button, Link, Checkbox, InputLabel,LinearProgress,
    Stack, TextField, Typography,  FormControlLabel, MenuItem, FormControl, Select, SelectChangeEvent
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { ProductsTable } from 'src/sections/products/products-table';
import { applyPagination } from 'src/utils/apply-pagination';
import { useSelection } from 'src/hooks/use-selection';

const data = [
    {
      id: 0,
      code:'0x123456789ABCDEFGHIJKLMNOPQRST',
      type: 'Solar',
      consumer: 'Kivanc',
      status: 'Completed',
      price: '126785',
      date: '07/11/2025'
    },
    {
      id: 0,
      code:'0x123456789ABCDEFGHIJKLMNOPQRST',
      type: 'Solar',
      consumer: 'Kivanc',
      status: 'Completed',
      price: '126785',
      date: '07/11/2025'
    },
    {
      id: 0,
      code:'0x123456789ABCDEFGHIJKLMNOPQRST',
      type: 'Solar',
      consumer: 'Kivanc',
      status: 'Completed',
      price: '126785',
      date: '07/11/2025'
    },
    {
      id: 0,
      code:'0x123456789ABCDEFGHIJKLMNOPQRST',
      type: 'Solar',
      consumer: 'Kivanc',
      status: 'Completed',
      price: '126785',
      date: '07/11/2025'
    },
  ];
  
const useOrders = (page, rowsPerPage) => {
    return useMemo(
        () => {
        return applyPagination(data, page, rowsPerPage);
        },
        [page, rowsPerPage]
    );
};

const useOrderIds = (orders) => {
    return useMemo(
        () => {
        return orders.map((order) => order.id);
        },
        [orders]
    );
};

const Page = () => {
    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const orders = useOrders(page, rowsPerPage);
    const orderIds = useOrderIds(orders);
    const ordersSelection = useSelection(orderIds);
    
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
                Orders
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
                        Orders
                    </Typography>
                </Stack>

                <Box sx={{my: 4}}>

                    <ProductsTable
                                count={data.length}
                                items={orders}
                                onDeselectAll={ordersSelection.handleDeselectAll}
                                onDeselectOne={ordersSelection.handleDeselectOne}
                                onPageChange={handlePageChange}
                                onRowsPerPageChange={handleRowsPerPageChange}
                                onSelectAll={ordersSelection.handleSelectAll}
                                onSelectOne={ordersSelection.handleSelectOne}
                                page={page}
                                rowsPerPage={rowsPerPage}
                                selected={ordersSelection.selected}
                    />
                </Box>

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
