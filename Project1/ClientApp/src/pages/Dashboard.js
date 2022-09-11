import React, { useState, useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestProducts } from '../components/dashboard/latest-products';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { CostOfGoods } from '../components/dashboard/budget - Copy';
import { Grade } from '../components/dashboard/budget - Copy - Copy';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import CircularProgress from '@mui/material/CircularProgress';
import AppConversionRates from '../components/dashboard/AppConversionRates';
import TextField from '@mui/material/TextField';
export const Dashboard = (props) => {
    const [count, setCount] = useState(0);
    const search = props.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);
    const money = params.get('money');
    const ppl = params.get('ppl');
    useEffect(() => {
        const money = params.get('money');
        const ppl = params.get('ppl');
        const data = { money : money, ppl : ppl };
        // Update the document title using the browser API
        fetch('https://localhost:7250/api/health/getValue', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                setTimeout(function () {
                    setCount(1)
                }, 5000);
            })
            .catch((error) => {
                setTimeout(function () {
                    setCount(1)
                }, 5000);
            });
       
    });
   
    if (count == 0) {
        return (
            <Box sx={{ display: 'flex', height: '100vh', width: '100vw', justifyContent: 'center' , alignItems: 'center', ml: 0 }} id="special">
                <CircularProgress />
                </Box>)
    }

    return (<>

       
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth={false}>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        <Budget money={money}/>
                    </Grid>
                    <Grid
                        item
                        xl={3}
                        lg={3}
                        sm={6}
                        xs={12}
                    >
                        <TotalCustomers money={ppl} />
                    </Grid>
                    <Grid
                        item
                        xl={3}
                        lg={3}
                        sm={6}
                        xs={12}
                    >
                        <CostOfGoods money={23}/>
                    </Grid>
                    <Grid
                        item
                        xl={3}
                        lg={3}
                        sm={6}
                        xs={12}
                    >
                        <Grade money={88} />
                    </Grid>
                    <Grid
                        item
                        lg={8}
                        md={12}
                        xl={9}
                        xs={12}
                    >
                        <LatestProducts />

                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xl={3}
                        xs={12}
                    >
                        <TrafficByDevice />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <AppConversionRates
                            title="Vitamin and Minerals Reached"
                            subheader="Based on Recommended Daily Allowance from the USDA"
                            chartData={[
                                { label: 'Zinc', value: 88 },
                                { label: 'Magnesium', value: 88 },
                                { label: 'Vitamin D', value: 88 },
                                { label: 'Vitamin C', value: 88 },
                                { label: 'Calcium', value: 88 },
                                { label: 'Vitamin A', value: 88 },
                                { label: 'Vitamin B12', value: 18 },
                                { label: 'Vitamin B6', value: 88 },
                                { label: 'Vitamin B5', value: 88 },
                                { label: 'Folate', value: 88 },
                            ]}
                        />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    </>
    );
};
export default Dashboard;
   

