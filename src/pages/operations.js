import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { applyPagination } from 'src/utils/apply-pagination';
import { OperationsTable } from 'src/sections/operations/OperationsTable';


const data = [
  {
    id: 0,
    Code:'bD3DNf39ADFASDFKdfd',
    Type: 'Wind',
    Status: 'Offer Rejected',
    Date: new Date(2023, 12, 8),
    TotalPrice: 3200,
    Vendor: 'Wind Energy ES.',
  },
  {
    id: 1,
    Code:'bD3DNf39ADFASDFKdfd',
    Type: 'Solar',
    Status: 'Offer Accepted',
    Date: new Date(2023, 12, 8),
    TotalPrice: 17000,
    Vendor: 'Wind Energy ES.',
  },
  {
    id: 2,
    Code:'bD3DNf39ADFASDFKdfd',
    Type: 'Solar',
    Status: 'Offer Rejected',
    Date: new Date(2023, 12, 8),
    TotalPrice: 57000,
    Vendor: 'Wind Energy ES.',
  },
];

const useOperations = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useOperationIds = (operations) => {
  return useMemo(
    () => {
      return operations.map((operation) => operation.id);
    },
    [operations]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const operations = useOperations(page, rowsPerPage);
  const operationIds = useOperationIds(operations);
  const operationsSelection = useSelection(operationIds);

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
          Operations
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
                  Operations
                </Typography>
              </Stack>
            </Stack>
            <OperationsTable
              count={data.length}
              items={operations}
              onDeselectAll={operationsSelection.handleDeselectAll}
              onDeselectOne={operationsSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={operationsSelection.handleSelectAll}
              onSelectOne={operationsSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={operationsSelection.selected}
            />
          </Stack>
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
