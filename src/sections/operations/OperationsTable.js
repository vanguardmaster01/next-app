import {useState} from 'react'
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import * as dayjs from 'dayjs'

import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import {styled} from '@mui/system'
import { Scrollbar } from 'src/components/scrollbar';
import { getInitials } from 'src/utils/get-initials';


export const OperationsTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  const [choosed, setChoosed] = useState(0)

  const StyledTableCell = styled(TableCell)({
    paddingTop: 5,
    paddingBottom: 5
  })

  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                        setChoosed(items.length)
                      } else {
                        onDeselectAll?.();
                        setChoosed(0)
                      }
                    }}
                  />
                </TableCell>
                <TableCell style={{textTransform:"none","fontSize":"14px", "color":"#5f7087"}}>
                  Code
                </TableCell>
                <TableCell style={{textTransform:"none","fontSize":"14px", "color":"#5f7087"}}>
                  Type
                </TableCell>
                <TableCell style={{textTransform:"none","fontSize":"14px", "color":"#5f7087"}}>
                  Status
                </TableCell>
                <TableCell style={{textTransform:"none","fontSize":"14px", "color":"#5f7087"}}>     
                  Date             
                </TableCell>
                <TableCell style={{textTransform:"none","fontSize":"14px", "color":"#5f7087"}}>
                  Total Price
                </TableCell>
                <TableCell style={{textTransform:"none","fontSize":"14px", "color":"#5f7087"}}>
                    Vendor
                </TableCell>
                <TableCell style={{textTransform:"none","fontSize":"14px", "color":"#5f7087"}}>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((operation) => {
                const isSelected = selected.includes(operation.id);

                return (
                  <TableRow
                    hover
                    key={operation.id}
                    selected={isSelected}
                  >
                    <StyledTableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(operation.id);
                            setChoosed(Math.min(choosed+1, items.length))
                          } else {
                            onDeselectOne?.(operation.id);
                            setChoosed(Math.max(choosed-1,0))
                          }
                        }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>
                        {operation.Code}
                    </StyledTableCell>
                    <StyledTableCell>
                      {operation.Type}
                    </StyledTableCell>
                    <StyledTableCell>
                      {operation.Status}
                    </StyledTableCell>
                    <StyledTableCell>
                      {dayjs(operation.Date).format('YYYY-MM-DD')}
                    </StyledTableCell>
                    <StyledTableCell>
                      {operation.TotalPrice}
                    </StyledTableCell>
                    <StyledTableCell>
                      {operation.Vendor}
                    </StyledTableCell>
                    <StyledTableCell
                        align='right'
                    >
                        <Button
                        size="medium"
                        sx={{ py: 0.5, px: 2, color: 'black', minHeight: "34.5px", borderRadius: "8px"}}
                        type="button"
                        variant="outlined"
                        >{"Details"}</Button>                        
                    </StyledTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Box display="flex" 
        style={{paddingLeft:"50px"}}>
        <p style={{flex:1}}>{choosed} of {items.length} row(s) selected.</p>
        <TablePagination
            component="div"
            count={count}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
        />
      </Box>

    </Card>
  );
};

OperationsTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
