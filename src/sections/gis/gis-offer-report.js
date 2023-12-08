import PropTypes from 'prop-types';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Typography
  } from '@mui/material';
  
const reports = [
    { title: 'System size (kWP)', value: '13278'},
    { title: 'System size (kWP)', value: '13278'},
    { title: 'System size (kWP)', value: '13278'},
    { title: 'System size (kWP)', value: '13278'},
    { title: 'System size (kWP)', value: '13278'},
    { title: 'System size (kWP)', value: '13278'}
]


  export const GisOfferReport = (props) => {
    const {data} = props
    console.log(data)

    return (

        <Card>
            <CardHeader title='Prefeasibility Report' />
            <CardContent>
                {
                    reports.map((item) => {
                        return (
                            <>
                                <Box
                                    sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    my: 2
                                    }}
                                >

                                <Typography variant="span"  sx={{flex: 1}}>
                                    {item.title}
                                </Typography>

                                <Typography variant="h6" >
                                    {item.value}
                                </Typography>

                                </Box>
                                <Divider />
                            </>

                        )
                })}

            </CardContent>
      </Card>
    )
};
  
GisOfferReport.propTypes = {
    data: PropTypes.array,
}