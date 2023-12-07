import PropTypes, { bool, string } from 'prop-types';
import {
    Box,
    Button,
    Card,
    CardContent,
    Stack,
    Typography
} from '@mui/material';

export const DashboardTile= (props) => {
    const {title, value, btnTxt, soon, notificationIcon, arrowIcon} = props;

    return (
        <>
            <Card sx={{height: '100%', mr: 2}}>
                <CardContent >
                    <Stack spacing={3} justifyContent="space-between">
                        <Stack direction="row">
                            <Typography variant='span' sx={{flex: 1}}>{title}</Typography>
                            {
                                soon &&
                                <Card sx={{color: '#913abd', backgroundColor: "#faf0ff", display: 'flex'}}>
                                    {notificationIcon}
                                    <Typography variant='span' sx={{fontSize: 'smaller'}}>Comming soon!</Typography>
                                </Card>
                            }
                        </Stack>

                        <Stack sx={{mt: 3}}>
                            <Typography variant='h5'>{value}</Typography>
                        </Stack>
                        <Box>
                            <Button
                                sx = {soon ? {color: '#b2b3bd'}: {color: 'inherit'}}
                                endIcon={arrowIcon}
                                size="small"
                            >
                                {btnTxt}
                            </Button>
                        </Box>
                    </Stack>
                </CardContent>                
            </Card>  
        </>
    )
}

DashboardTile.protoTypes = {
    title: string,
    btnTxt: string,
    soon: bool,
    value: string,
    notificationIcon: string,
    arrowIcon: string

}