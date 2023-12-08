import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Modal,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import {styled} from '@mui/system'
import { Scrollbar } from 'src/components/scrollbar';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { useState } from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const ProductsTable = (props) => {
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

  const [showModal, setShowModal] = useState(false)
  const handleOpen = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <Card>
        <CardHeader 
            title={
                <Box sx={{float: 'right'}}>
                    <Button color='inherit' variant='contained' onClick={handleOpen}
                        startIcon={(
                            <SvgIcon><AddCircleOutlineOutlinedIcon /></SvgIcon>
                        )}
                    >
                        Create
                    </Button>
                </Box>

            } 
        />
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
                  price
                </TableCell>
                <TableCell style={{textTransform:"none","fontSize":"14px", "color":"#5f7087"}}>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((report) => {
                const isSelected = selected.includes(report.id);

                return (
                  <TableRow
                    hover
                    key={report.id}
                    selected={isSelected}
                  >
                    <StyledTableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(report.id);
                            setChoosed(Math.min(choosed+1, items.length))
                          } else {
                            onDeselectOne?.(report.id);
                            setChoosed(Math.max(choosed-1,0))
                          }
                        }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>
                        {report.code}
                    </StyledTableCell>
                    <StyledTableCell>
                      {report.price}
                    </StyledTableCell>
                    <StyledTableCell
                        align='right'
                    >
                            <Button
                                size="medium"
                                sx={{ py: 0.5, px: 0, color: 'black', minHeight: "34.5px", borderRadius: "8px", minWidth:"30px"}}
                                type="button"
                                variant="outlined"
                                ></Button>
                        
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

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={showModal}>
          {/* <Box sx={style}> */}
            <Card sx={style}>
                <CardHeader title='Add New Product' subheader='Create your product in one-click' />
                <CardContent >
                    <Stack spacing={1}>
                        <TextField
                            fullWidth
                            label="Product code"
                            name="code"
                            required
                            value='1234'
                        />
                        <TextField
                            fullWidth
                            label="Price"
                            name="price"
                            required
                            value='3333'
                        />
                    </Stack>
                </CardContent>
                <CardActions sx={{mt: 3, justifyContent: 'flex-end', px: 3}}>
                    {/* <Box fullWidth> */}
                    <Stack direction="row" spacing={2} >
                            <Button size="large" variant="contained" 
                                sx={{backgroundColor: '#ffffff', color: '#000000'}} >
                                Cancel
                            </Button>
                            <Button size="large" variant="contained"
                                sx={{backgroundColor: '#000000'}}
                                
                                >
                                Save
                            </Button>
                        </Stack>
                    {/* </Box> */}
                        
                </CardActions>
            </Card>

        </Fade>
      </Modal>

    </Card>
  );
};

ProductsTable.propTypes = {
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
