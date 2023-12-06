import Head from 'next/head';
import { Container, Grid, Box, Button, Link, Checkbox,
    Stack, TextField, Typography,  FormControlLabel, 
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { solar_image_path, wind_image_path } from 'src/utils/utils';

const Page = () => {

    // const formik = useFormik({
    //     initialValues: {
    //       number: '',
    //       bill: '',
    //       area: '',
    //       submit: null
    //     },
    //     validationSchema: Yup.object({
    //       number: Yup
    //         .string()
    //         .max(255)
    //         .required('Number is required'),
    //       bill: Yup
    //         .string()
    //         .max(255)
    //         .required('Bill is required'),
    //       area: Yup
    //         .string()
    //         .max(255)
    //         .required('Area is required')
    //     }),
    //     onSubmit: async (values, helpers) => {
    //       try {
    //         await auth.signUp(values.number, values.bill, values.area);
    //         router.push('/');
    //       } catch (err) {
    //         helpers.setStatus({ success: false });
    //         helpers.setErrors({ submit: err.message });
    //         helpers.setSubmitting(false);
    //       }
    //     }
    //   });

    return (
        <>
        <Head>
            <title>
            Solar Calculator  
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
                    Solar Calculator
                    </Typography>
                </Stack>
                </Stack>
            </Stack>

            <Container maxWidth="xl" sx={{mt: 8}}>
                <Grid container spacing={3}>
                    <Grid xs={12} sm={6} lg={7} >
                        <Box
                            component="img"
                            src={solar_image_path}
                            sx={{
                                borderRadius: 1,
                                height: 300,
                                width: 300
                            }}
                            />
                    </Grid>
                    <Grid xs={12} sm={6} lg={5}>
                        <Box
                            sx={{
                            flex: '1 1 auto',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center'
                            }}
                        >
                            <Box
                            sx={{
                                maxWidth: 550,
                                px: 3,
                                py: '80px',
                                width: '100%'
                            }}
                            >
                                <form
                                noValidate
                                >
                                <Stack spacing={3}>
                                    <TextField
                                    fullWidth
                                    label="Number of People"
                                    name="number"
                                    />
                                    <TextField
                                    fullWidth
                                    label="Last Month's Bill(TL)"
                                    name="bill"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox defaultChecked />}
                                        label="Enter approximate area manually"
                                    />
                                    <TextField
                                    fullWidth
                                    label="Roof Area (m²)"
                                    name="area"
                                    />
                                </Stack>
                                <Button
                                    size="large"
                                    sx={{ mt: 3 }}
                                    type="submit"
                                    variant="contained"
                                >
                                    Save
                                </Button>
                                </form>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
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
