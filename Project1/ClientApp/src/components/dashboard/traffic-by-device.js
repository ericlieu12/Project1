import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIcon from '@mui/icons-material/Phone';
import 'chart.js/auto';
import TabletIcon from '@mui/icons-material/Tablet';

export const TrafficByDevice = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
            backgroundColor: ['#2B2D42', '#F5CB5C', '#3C91E6'],

        borderWidth: 8,
            borderColor: "#E8EDDF",
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['Carbs', 'Fats', 'Proteins']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
        backgroundColor: "#E8EDDF",
        bodyFontColor: "#E8EDDF",
        borderColor: "#E8EDDF",
      borderWidth: 1,
      enabled: false,
        footerFontColor: "#E8EDDF",
      intersect: false,
      mode: 'index',
        titleFontColor: "#E8EDDF",
    }
  };

  const devices = [
    {
      title: 'Carbs',
          value: props.carb,
      icon: LaptopMacIcon,
          color: '#2B2D42'
    },
    {
      title: 'Fats',
        value: props.fat,
      icon: TabletIcon,
        color: '#F5CB5C'
    },
    {
      title: 'Proteins',
        value:  props.protein,
      icon: PhoneIcon,
        color: '#3C91E6'
    }
  ];

  return (
      <Card {...props} sx={{ height: 500, backgroundColor: '#E8EDDF'}}>
          <CardHeader sx={{ backgroundColor: '#2B2D42' }}
             
              title={
                  <Typography  variant="h6" component="h2" sx={{ fontWeight: 'bold', color: "white" }}>
                      MACRONUTRIENTS
                  </Typography>
              }
          />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
          
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h4"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
