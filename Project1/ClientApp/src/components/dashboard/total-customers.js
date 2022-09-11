import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';

export const TotalCustomers = (props) => (
    <Card sx={{ 'backgroundColor': '#2B2D42', color: 'white' }}{...props}>
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
            People to Feed
          </Typography>
          <Typography
                        color="white"
                        variant="h4"
                        sx={{ fontWeight: 'bold' }}
          >
                        {(props.money ?? '0')}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
                            backgroundColor: '#788BFF',
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
                <CheckIcon color="success" />
                <Typography
                    variant="body2"
                    sx={{
                        mr: 1
                    }}
                >
                    100%
                </Typography>
                <Typography
                    color="white"
                    variant="caption"
                >
                    calories met
                </Typography>
            </Box>
    </CardContent>
  </Card>
);
