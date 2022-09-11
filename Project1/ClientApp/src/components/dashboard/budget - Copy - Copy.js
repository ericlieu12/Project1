import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import MoneyIcon from '@mui/icons-material/Money';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import Favorite from '@mui/icons-material/Favorite'
import CloseIcon from '@mui/icons-material/Close';
export const Grade = (props) => (
  <Card
        sx={{ height: '100%', 'backgroundColor': '#2B2D42', color: 'white' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
                        color="white"
            gutterBottom
                        variant="overline"
                        sx={{ fontWeight: 'bold' }}
          >
            HEALTH PERCENTAGE
          </Typography>
          <Typography
                        color="white"
                        variant="h4"
                        sx={{ fontWeight: 'bold' }}
          >
                        {(props.money ?? '0')}%
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
                            backgroundColor: '#3C91E6',
              height: 56,
              width: 56
            }}
          >
                        <Favorite />
          </Avatar>
        </Grid>
      </Grid>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    pt: 2
                }}
            >
                <CloseIcon color="error" />
                <Typography
                    variant="body2"
                    sx={{
                        mr: 1
                    }}
                >
                    {props.money}%
                </Typography>
                <Typography
                    color="white"
                    variant="caption"
                >
                    health reached
                </Typography>
            </Box>
    </CardContent>
  </Card>
);
