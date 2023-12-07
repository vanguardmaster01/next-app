import PropTypes, { bool, string } from 'prop-types';
import {
    Box,
    Button,
    Card,
    Stack,
    Typography
} from '@mui/material';

export const OverviewCard= (props) => {
    const {title, btnTxt, soon, notificationIcon, icon, arrowIcon} = props;

    return (
        <>
            <Card sx={{width: '100%', px: 2, py: 2}}>
                <Box>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>

                        <Box sx={{width: '9rem'}}>
                        {
                            soon &&
                            <Card sx={{color: '#913abd', backgroundColor: "#faf0ff", px: 1, display: 'flex', py: .5}}>
                                {notificationIcon}
                                <Typography variant='span' sx={{fontSize: 'smaller'}}>Comming soon!</Typography>
                            </Card>
                        }
                        </Box>
                    </Box>

                    <Stack spacing={2} direction='row' px={1} sx={{display: 'flex', alignItems: 'center', pt: 2}}>
                        {icon}
                        <Typography variant='h5'>{title}</Typography>
                    </Stack>
                    <Box sx={{my: 1}}>
                    <Button
                        color="inherit"
                        endIcon={arrowIcon}
                        size="small"
                    >
                        {btnTxt}
                    </Button>
                    </Box>
                </Box>
            </Card>  
        </>
    )
}

OverviewCard.protoTypes = {
    title: string,
    btnTxt: string,
    soon: bool,
    icon: string,
    notificationIcon: string,
    arrowIcon: string

}