import PropTypes, { string } from 'prop-types';
import {
    Card,
    Typography
} from '@mui/material';

export const CalculatorsTile = (props) => {
    const {title, value} = props;

    return (
        <>
            <Card
                sx={{
                    // maxWidth: 550,
                    px: 3,
                    py: '10px',
                    width: '100%',
            }}>
                    <Typography variant='h5'>
                        {value}
                    </Typography>
                    <Typography variant='span' sx={{fontSize: 'smaller'}}>
                        {title}
                    </Typography>

            </Card>
        </>
    )
}

CalculatorsTile.protoTypes = {
    title: string,
    title: string
}