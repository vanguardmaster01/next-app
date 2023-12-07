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
import { ReportsTable } from 'src/sections/reports/ReportsTable';

const now = new Date();

const data = [
  {
    id: 0,
    Code:'0x123456789ABCDEFGHIJKLMNOPQRST',
    Type: 'Solar',
    Area: 777.0324234234,
    field: 166,
    Status: 'Report taken',
  },
  {
    id: 1,
    Code:'0x123456789ABCDEFGHIJKLMNOPQRST',
    Type: 'Solar',
    Area: 777.0324234234,
    field: 166,
    Status: 'Report taken',
  },
  {
    id: 2,
    Code:'0x123456789ABCDEFGHIJKLMNOPQRST',
    Type: 'Solar',
    Area: 777.0324234234,
    Status: 'Report taken',
  },
  {
    id: 3,
    Code:'0x123456789ABCDEFGHIJKLMNOPQRST',
    Type: 'Solar',
    Area: 777.0324234234,
    field: 166,
    Status: 'Report taken',
  },
  {
    id: 4,
    Code:'0x123456789ABCDEFGHIJKLMNOPQRST',
    Type: 'Solar',
    Area: 777.0324234234,
    Status: 'Report taken',
  },
  {
    id: 5,
    Code:'0x123456789ABCDEFGHIJKLMNOPQRST',
    Type: 'Solar',
    Area: 777.0324234234,
    field: 166,
    Status: 'Report taken',
  }
];

const useReports = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useReportIds = (reports) => {
  return useMemo(
    () => {
      return reports.map((report) => report.id);
    },
    [reports]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const reports = useReports(page, rowsPerPage);
  const reportIds = useReportIds(reports);
  const reportsSelection = useSelection(reportIds);

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
          Reports
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
                  Reports
                </Typography>
              </Stack>
            </Stack>
            <ReportsTable
              count={data.length}
              items={reports}
              onDeselectAll={reportsSelection.handleDeselectAll}
              onDeselectOne={reportsSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={reportsSelection.handleSelectAll}
              onSelectOne={reportsSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={reportsSelection.selected}
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
