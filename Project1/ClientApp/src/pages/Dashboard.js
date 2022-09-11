import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
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
        fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB0RR11wP__XdptNE6VWFpkKtqEjDIBPkE', {
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
                    console.log(data)
                }, 1000);
            })
            .catch((error) => {
                setTimeout(function () {
                    setCount(1)
                    console.log()
                }, 1000);
            });
        fetch('https://localhost:7250/health/getValue', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
               
            })
            .catch((error) => {
             
            });

        fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=supermarket&location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=AIzaSyB0RR11wP__XdptNE6VWFpkKtqEjDIBPkE', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                //get nearest walmart
            })
            .catch((error) => {

            });

       
    });
   
    if (count == 0) {
     
        return (
            <Box sx={{ display: 'flex', height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center', ml: 0, flexDirection: 'column' }} id="special">
                <Typography sx={{ mb: 2, fontWeight:'bold'}}> Calculating location and cheapest store </Typography>
                <CircularProgress />
                </Box>)
    }


  

    var products = [
        {
            id:4,
            name: 'Whole Wheat Bread (1)',
            imageUrl: '/static/images/products/product_1.png',
            updatedAt: '2.49'
        },
        {
            id:4,
            name: 'American Cheese (16 slices)',
            imageUrl: '/static/images/products/product_2.png',
            updatedAt: '2.49'
        },
        {
            id: 4,
            name: 'Spinach (8oz)',
            imageUrl: '/static/images/products/product_4.png',
            updatedAt: '.99'
        },
        {
            id: 4,
            name: 'Ground Beef (1lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '3.99'
        },
        {
            id: 4,
            name: 'Potato (2lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.99'
        },
        {
            id: 4,
            name: 'Chicken Drumsticks Bone-In (1lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.49'
        },
        {
            id: 4,
            name: 'Eggs (12)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '2.99'
        },
        {
            id: 4,
            name: 'Rice (3lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.99'
        },
        {
            id: 4,
            name: 'Beans (16oz)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.29'
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
                            <CostOfGoods money={19.71} />
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
                            lg={6}
                            md={6}
                            xl={6}
                            xs={6}
                        >
                            <LatestProducts products={products} />

                        </Grid>
                        <Grid
                            item
                            lg={6}
                            md={6}
                            xl={6}
                            xs={6}
                        >
                            <TrafficByDevice carb={58} protein={27} fat={15} />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <AppConversionRates
                                title="Percent Of Vitamins and Minerals Reached"
                                subheader="Based on Recommended Daily Allowance from the USDA"
                                chartData={[
                                    { label: 'Calories', value: 100 },
                                    { label: 'Protien', value: 100 },
                                    { label: 'Fats', value: 68 },
                                    { label: 'Carbohydrates', value: 100 },
                                    { label: 'Vitamin B1', value: 100 },
                                    { label: 'Vitamin B2', value: 99 },
                                    { label: 'Vitamin B3', value: 100 },
                                    { label: 'Vitamin B5', value: 100 },
                                    { label: 'Vitamin B6', value: 100 },
                                    { label: 'Vitamin B12', value: 100 },
                                    { label: 'Folate', value: 100 },
                                    { label: 'Vitamin A', value: 45},
                                    { label: 'Vitamin C', value: 24 },
                                    { label: 'Vitamin D', value: 31 },
                                    { label: 'Vitamin E', value: 31 },
                                    { label: 'Vitamin K', value: 100 },
                                    { label: 'Calcium', value: 90 },
                                    { label: 'Copper', value: 100},
                                    { label: 'Iron', value: 100 },
                                    { label: 'Magnesium', value: 88 },
                                    { label: 'Manganese', value: 100 },
                                    { label: 'Phosphorus', value: 100 },
                                    { label: 'Potassium', value: 65 },
                                    { label: 'Selenium', value: 100 },
                                 
                                    { label: 'Zinc', value: 100 }
                                  
                                ]}
                            />
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </>
        );
    }
     products = [
        {
            id: 4,
            name: 'Whole Wheat Bread (1)',
            imageUrl: '/static/images/products/product_1.png',
            updatedAt: '2.49'
        },
        {
            id: 4,
            name: 'Peanut Butter Jar (24oz)',
            imageUrl: '/static/images/products/product_2.png',
            updatedAt: '2.49'
        },
        {
            id: 4,
            name: 'Spinach (16oz)',
            imageUrl: '/static/images/products/product_4.png',
            updatedAt: '1.99'
        },
        {
            id: 4,
            name: 'Broccoli (16oz)',
            imageUrl: '/static/images/products/product_4.png',
            updatedAt: '.99'
        },
        {
            id: 4,
            name: 'Ground Beef (1lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '3.99'
        },
        {
            id: 4,
            name: 'Potato (2lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.99'
        },
        {
            id: 4,
            name: 'Chicken Drumsticks Bone-In (3lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '4.99'
        },
        {
            id: 4,
            name: 'Eggs (12)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '2.99'
        },
        {
            id: 4,
            name: 'Rice (10lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '4.99'
        },
        {
            id: 4,
            name: 'Beans (16oz)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.29'
        },
        {
            id: 4,
            name: 'Beans (16oz)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.29'
        },
    ];

    if (money == 30 && ppl == 2) {
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
                            <CostOfGoods money={29.49} />
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <Grade money={64} />
                        </Grid>
                        <Grid
                            item
                            lg={6}
                            md={6}
                            xl={6}
                            xs={6}
                        >
                            <LatestProducts products={products} />

                        </Grid>
                        <Grid
                            item
                            lg={6}
                            md={6}
                            xl={6}
                            xs={6}
                        >
                            <TrafficByDevice carb={51} protein={29} fat={20} />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <AppConversionRates
                                title="Percent Of Vitamins and Minerals Reached"
                                subheader="Based on Recommended Daily Allowance from the USDA"
                                chartData={[
                                    { label: 'Calories', value: 100 },
                                    { label: 'Protien', value: 100 },
                                    { label: 'Fats', value: 68 },
                                    { label: 'Carbohydrates', value: 100 },
                                    { label: 'Vitamin B1', value: 100 },
                                    { label: 'Vitamin B2', value: 82 },
                                    { label: 'Vitamin B3', value: 100 },
                                    { label: 'Vitamin B5', value: 100 },
                                    { label: 'Vitamin B6', value: 100 },
                                    { label: 'Vitamin B12', value: 100 },
                                    { label: 'Folate', value: 100 },
                                    { label: 'Vitamin A', value: 33 },
                                    { label: 'Vitamin C', value: 41 },
                                    { label: 'Vitamin D', value: 22 },
                                    { label: 'Vitamin E', value: 41 },
                                    { label: 'Vitamin K', value: 100 },
                                    { label: 'Calcium', value: 33 },
                                    { label: 'Copper', value: 100 },
                                    { label: 'Iron', value: 100 },
                                    { label: 'Magnesium', value: 88 },
                                    { label: 'Manganese', value: 100 },
                                    { label: 'Phosphorus', value: 100 },
                                    { label: 'Potassium', value: 65 },
                                    { label: 'Selenium', value: 100 },

                                    { label: 'Zinc', value: 100 }

                                ]}
                            />
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </>
        );
    }
   
    products = [
        {
            id: 4,
            name: 'Whole Wheat Bread (1)',
            imageUrl: '/static/images/products/product_1.png',
            updatedAt: '2.49'
        },
        {
            id: 4,
            name: 'Peanut Butter Jar (24oz)',
            imageUrl: '/static/images/products/product_2.png',
            updatedAt: '2.49'
        },
        {
            id: 4,
            name: 'Spinach (16oz)',
            imageUrl: '/static/images/products/product_4.png',
            updatedAt: '1.99'
        },
        {
            id: 4,
            name: 'Broccoli (16oz)',
            imageUrl: '/static/images/products/product_4.png',
            updatedAt: '.99'
        },
        {
            id: 4,
            name: 'Ground Beef (1lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '3.99'
        },
        {
            id: 4,
            name: 'Potato (2lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.99'
        },
        {
            id: 4,
            name: 'Chicken Drumsticks Bone-In (3lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '4.99'
        },
        {
            id: 4,
            name: 'Eggs (12)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '2.99'
        },
        {
            id: 4,
            name: 'Rice (10lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '4.99'
        },
        {
            id: 4,
            name: 'Rice (10lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '4.99'
        },
        {
            id: 4,
            name: 'Rice (10lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '4.99'
        },
        {
            id: 4,
            name: 'Beans (16oz)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.29'
        },
        {
            id: 4,
            name: 'Beans (16oz)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.29'
        },
    ];
    if (money == 40 && ppl == 4) {
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
                            <CostOfGoods money={39.47} />
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <Grade money={52} />
                        </Grid>
                        <Grid
                            item
                            lg={6}
                            md={6}
                            xl={6}
                            xs={6}
                        >
                            <LatestProducts products={products} />

                        </Grid>
                        <Grid
                            item
                            lg={6}
                            md={6}
                            xl={6}
                            xs={6}
                        >
                            <TrafficByDevice carb={65} protein={20} fat={15} />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <AppConversionRates
                                title="Percent Of Vitamins and Minerals Reached"
                                subheader="Based on Recommended Daily Allowance from the USDA"
                                chartData={[
                                    { label: 'Calories', value: 100 },
                                    { label: 'Protien', value: 74 },
                                    { label: 'Fats', value: 54 },
                                    { label: 'Carbohydrates', value: 100 },
                                    { label: 'Vitamin B1', value: 78 },
                                    { label: 'Vitamin B2', value: 82 },
                                    { label: 'Vitamin B3', value: 78 },
                                    { label: 'Vitamin B5', value: 100 },
                                    { label: 'Vitamin B6', value: 100 },
                                    { label: 'Vitamin B12', value: 100 },
                                    { label: 'Folate', value: 100 },
                                    { label: 'Vitamin A', value: 19 },
                                    { label: 'Vitamin C', value: 23 },
                                    { label: 'Vitamin D', value: 24 },
                                    { label: 'Vitamin E', value: 41 },
                                    { label: 'Vitamin K', value: 100 },
                                    { label: 'Calcium', value: 29 },
                                    { label: 'Copper', value: 94 },
                                    { label: 'Iron', value: 94 },
                                    { label: 'Magnesium', value: 88 },
                                    { label: 'Manganese', value: 92 },
                                    { label: 'Phosphorus', value: 91 },
                                    { label: 'Potassium', value: 54 },
                                    { label: 'Selenium', value: 100 },

                                    { label: 'Zinc', value: 100 }

                                ]}
                            />
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </>
        );
    }
    products = [
        {
            id: 4,
            name: 'Whole Wheat Bread (1)',
            imageUrl: '/static/images/products/product_1.png',
            updatedAt: '2.49'
        },
        {
            id: 4,
            name: 'Peanut Butter Jar (24oz)',
            imageUrl: '/static/images/products/product_2.png',
            updatedAt: '2.49'
        },
        {
            id: 4,
            name: 'Spinach (16oz)',
            imageUrl: '/static/images/products/product_4.png',
            updatedAt: '1.99'
        },
        {
            id: 4,
            name: 'Broccoli (16oz)',
            imageUrl: '/static/images/products/product_4.png',
            updatedAt: '.99'
        },
        {
            id: 4,
            name: 'Ground Beef (1lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '3.99'
        },
        {
            id: 4,
            name: 'Potato (2lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.99'
        },
        {
            id: 4,
            name: 'Chicken Drumsticks Bone-In (3lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '4.99'
        },
        {
            id: 4,
            name: 'Eggs (12)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '2.99'
        },
        {
            id: 4,
            name: 'Rice (10lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '4.99'
        },
        {
            id: 4,
            name: 'Rice (10lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '4.99'
        },
        {
            id: 4,
            name: 'Rice (10lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '4.99'
        },
        {
            id: 4,
            name: 'Rice (10lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '4.99'
        },
        {
            id: 4,
            name: 'Rice (10lb)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '4.99'
        },
        {
            id: 4,
            name: 'Beans (16oz)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.29'
        },
        {
            id: 4,
            name: 'Beans (16oz)',
            imageUrl: '/static/images/products/product_5.png',
            updatedAt: '1.29'
        },
    ];
    if (money == 50 && ppl == 5) {
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
                            <CostOfGoods money={39.47} />
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <Grade money={48} />
                        </Grid>
                        <Grid
                            item
                            lg={6}
                            md={6}
                            xl={6}
                            xs={6}
                        >
                            <LatestProducts products={products} />

                        </Grid>
                        <Grid
                            item
                            lg={6}
                            md={6}
                            xl={6}
                            xs={6}
                        >
                            <TrafficByDevice carb={70} protein={20} fat={10} />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <AppConversionRates
                                title="Percent Of Vitamins and Minerals Reached"
                                subheader="Based on Recommended Daily Allowance from the USDA"
                                chartData={[
                                    { label: 'Calories', value: 100 },
                                    { label: 'Protien', value: 74 },
                                    { label: 'Fats', value: 54 },
                                    { label: 'Carbohydrates', value: 100 },
                                    { label: 'Vitamin B1', value: 78 },
                                    { label: 'Vitamin B2', value: 82 },
                                    { label: 'Vitamin B3', value: 78 },
                                    { label: 'Vitamin B5', value: 100 },
                                    { label: 'Vitamin B6', value: 100 },
                                    { label: 'Vitamin B12', value: 100 },
                                    { label: 'Folate', value: 100 },
                                    { label: 'Vitamin A', value: 19 },
                                    { label: 'Vitamin C', value: 23 },
                                    { label: 'Vitamin D', value: 24 },
                                    { label: 'Vitamin E', value: 41 },
                                    { label: 'Vitamin K', value: 100 },
                                    { label: 'Calcium', value: 29 },
                                    { label: 'Copper', value: 94 },
                                    { label: 'Iron', value: 94 },
                                    { label: 'Magnesium', value: 88 },
                                    { label: 'Manganese', value: 92 },
                                    { label: 'Phosphorus', value: 91 },
                                    { label: 'Potassium', value: 54 },
                                    { label: 'Selenium', value: 100 },

                                    { label: 'Zinc', value: 100 }

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
                        <LatestProducts products={products} />

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
   

