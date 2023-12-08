import { FormControl, Grid, MenuItem, Select, SvgIcon, TextField, Typography } from "@mui/material";
import { useState } from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const products= [
    { value: 'Product 1'},
    { value: 'Product 2'},
    { value: 'Product 3'}
];

export const GisOfferOfferItem = () => {

    const [product, setProduct] = useState('');
    const handleProduct = (event) => {
        setProduct(event.target.value );
    };

    return (
        <>
                <Grid container 
                    sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', px: 1}}
                >
                    <Grid xs={6} md={6} lg={2} >
                        <FormControl size='small' sx={{minWidth:  '110px'}}>
                                <Select labelId="countrySelect" value={product.value} 
                                    onChange={handleProduct}>
                                    {
                                        products.map(item => (
                                            <MenuItem key={item.value} value={item.value}>
                                                {item.value}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={6} md={6} lg={3} >
                            <TextField  name="type" required value=''
                                sx={{height: '40px', width: '90%', mt: .1}}
                            />
                    </Grid>
                    <Grid xs={6} md={6} lg={3} >
                            <TextField  name="type" required value=''
                                sx={{height: '40px', width: '90%', mt: .1}}
                            />
                    </Grid>
                    <Grid xs={6} md={6} lg={2}
                        sx={{display: 'flex', justifyContent: 'center'}}
                    >
                        <Typography>0</Typography>
                    </Grid>
                    <Grid xs={6} md={6} lg={2}
                        sx={{display: 'flex', justifyContent: 'flex-end'}}
                    >
                        <SvgIcon><DeleteOutlineOutlinedIcon /> </SvgIcon>
                    </Grid>
                </Grid>
        </>
    )
}