import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import PropTypes, { string } from 'prop-types';

export const CalculatorsWindProperty = (props) =>{
    const {title, value} = props

    return (
        <>
            <Grid xs={12} sm={6} lg={6}>
                <Box sx={{px: 3, mt: 1}}>
                    <Stack direction='row' spacing={2}>
                        <Typography sx={{flex: 1}}>{title}</Typography>
                        <Typography>{value ? value : '-'}</Typography>
                    </Stack>
                    <Divider />
                </Box>
                
            </Grid>
        </>
    )
}

CalculatorsWindProperty.PropTypes = {
    title: string,
    value: string
}