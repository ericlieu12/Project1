import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import MoneyIcon from '@mui/icons-material/Money';

export const Budget = (props) => (

  <Card
    sx={{ height: '100%' }}
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
            color="textSecondary"
            gutterBottom
                        variant="overline"
                        sx={{ fontWeight: 'bold' }}

          >
            BUDGET 
          </Typography>
          <Typography
            color="textPrimary"
                        variant="h4"
                        sx={{ fontWeight: 'bold' }}
          >
                        ${(props.money ?? '0')}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        
      </Box>
    </CardContent>
  </Card>
);
