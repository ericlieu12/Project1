import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';

export const TotalCustomers = (props) => (
  <Card {...props}>
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
            People to Feed
          </Typography>
          <Typography
            color="textPrimary"
                        variant="h4"
                        sx={{ fontWeight: 'bold' }}
          >
                        {(props.money ?? '0')}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
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
      
      </Box>
    </CardContent>
  </Card>
);
