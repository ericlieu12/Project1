import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Box, Card, CardHeader, Typography } from '@mui/material';
// utils
import { fNumber } from './formatNumber';
// components
import { BaseOptionChart } from './chart';

// ----------------------------------------------------------------------

AppConversionRates.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
};

export default function AppConversionRates({ title, subheader, chartData, ...other }) {
  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
          marker: { show: true },
          yaxis: {
              max: 100
          },
      y: {
          formatter: (seriesName) => fNumber(seriesName),
          max: 100,
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '45px', borderRadius: 5 },
    },
    xaxis: {
      categories: chartLabels,
    },
  });

  return (
      <Card sx={{ 'backgroundColor': "#E8EDDF" }} {...other}>
          <CardHeader sx={{ backgroundColor: '#2B2D42' }}
              subtitle={` in total`}
              title={
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: "white" }}>
                      VITAMINS/MINERALS
                  </Typography>
              }
          />

      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={[{ data: chartSeries }]} options={chartOptions}  />
      </Box>
    </Card>
  );
}
