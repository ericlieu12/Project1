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
                }, 1000);
            })
            .catch((error) => {
                setTimeout(function () {
                    setCount(1)
                }, 1000);
            });
       
    });
   
    if (count == 0) {
        return (
            <Box sx={{ display: 'flex', height: '100vh', width: '100vw', justifyContent: 'center' , alignItems: 'center', ml: 0 }} id="special">
                <CircularProgress />
                </Box>)
    }


    const products = [
        {
            id: 1,
            name: 'Spinach (16oz)',
            imageUrl: '/static/images/products/product_1.png',
            updatedAt: '2.99'
        },
        {
            id:2,
            name: 'Rice (5lbs)',
            imageUrl: '/static/images/products/product_2.png',
            updatedAt: '2.99'
        },
        {
            id:4,
            name: 'Broccoli (32oz)',
            imageUrl: '/static/images/products/product_3.png',
            updatedAt: '1.99'
        },
        {
            id: 3,
            name: 'Chicken Drumsticks Bone-in (4lbs)',
            imageUrl: '/static/images/products/product_4.png',
            updatedAt: '4.99'
        },
        {
            id: 5,
            name: 'Beans (16oz)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.49'
        },
        {
            id: 5,
            name: 'Peanut Butter Jar (16oz)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.99'
        },
        {
            id: 5,
            name: 'Banana (3lbs)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.49'
        },
        {
            id: 5,
            name: 'Eggs (12)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.99'
        },
       
    ];
    if (money == 20 && ppl == 1) {
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
                            <Budget money={money} />
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
                            <CostOfGoods money={19.94} />
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <Grade money={82} />
                        </Grid>
                        <Grid
                            item
                            lg={8}
                            md={12}
                            xl={9}
                            xs={12}
                        >
                            <LatestProducts products={products} />

                        </Grid>
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xl={3}
                            xs={12}
                        >
                            <TrafficByDevice hey={23} />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <AppConversionRates
                                title="Vitamin and Minerals Reached"
                                subheader="Based on Recommended Daily Allowance from the USDA"
                                chartData={[
                                    { label: 'Protien', value: 82 },
                                    { label: 'Fats', value: 49 },
                                    { label: 'Carbohydrates', value: 100 },
                                    { label: 'Vitamin B1', value: 100 },
                                    { label: 'Vitamin B2', value: 100 },
                                    { label: 'Vitamin B3', value: 100 },
                                    { label: 'Vitamin B5', value: 100 },
                                    { label: 'Vitamin B6', value: 100 },
                                    { label: 'Vitamin B12', value: 100 },
                                    { label: 'Folate', value: 100 },
                                    { label: 'Vitamin A', value: 72 },
                                    { label: 'Vitamin C', value: 94 },
                                    { label: 'Vitamin D', value: 17 },
                                    { label: 'Vitamin E', value: 32 },
                                    { label: 'Vitamin K', value: 100 },
                                    { label: 'Calcium', value: 30 },
                                    { label: 'Copper', value: 100},
                                    { label: 'Iron', value: 100 },
                                    { label: 'Magnesium', value: 82 },
                                    { label: 'Manganese', value: 100 },
                                    { label: 'Phosphorus', value: 100 },
                                    { label: 'Potassium', value: 60 },
                                    { label: 'Selenium', value: 100 },
                                 
                                    { label: 'Zinc', value: 100 },
                                  
                                ]}
                            />
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </>
        );
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
                        <TrafficByDevice hey={23}/>
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
   

