import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
export const CostOfGoods = (props) => (
  <Card
        sx={{ height: '100%', 'backgroundColor': '#2B2D42', 'color': 'white' }}
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
            COST
          </Typography>
          <Typography
            color="textPrimary"
                        variant="h4"
                        sx={{
                            fontWeight: 'bold', color: 'success.normal',
 }}
          >
                        ${(props.money ?? '0')}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
                            backgroundColor: '#F5CB5C',
              height: 56,
              width: 56
            }}
          >
                        <AttachMoneyIcon />
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
                <AttachMoneyIcon color="success" />
                <Typography
                    variant="body2"
                    sx={{
                        mr: 1, color: 'whitesmoke'
                    }}
                >
                    95%
                </Typography>
                <Typography
                    color="whitesmoke"
                    variant="caption"
                >
                    of budget
                </Typography>
            </Box>
    </CardContent>
  </Card>
);
