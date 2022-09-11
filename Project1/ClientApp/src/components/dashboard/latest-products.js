import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import { Typography } from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const products = [
  {
    id: uuid(),
    name: 'Bag Of Spinach',
    imageUrl: '/static/images/products/product_1.png',
        updatedAt: '9.25'
  },
  {
    id: uuid(),
    name: '14 Cups of Broccoli',
    imageUrl: '/static/images/products/product_2.png',
      updatedAt: '9.25'
  },
  {
    id: uuid(),
    name: '72 Cucumbers',
    imageUrl: '/static/images/products/product_3.png',
      updatedAt: '9.25'
  },
  {
    id: uuid(),
    name: '98 Zucchinis',
    imageUrl: '/static/images/products/product_4.png',
      updatedAt: '9.25'
  },
  {
    id: uuid(),
    name: 'Pizza',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: '9.25'
    },
    {
        id: uuid(),
        name: 'Pizza',
        imageUrl: '/static/images/products/product_5.png',
        updatedAt: '9.25'
    },
    {
        id: uuid(),
        name: 'Pizza',
        imageUrl: '/static/images/products/product_5.png',
        updatedAt: '9.25'
    },
    {
        id: uuid(),
        name: 'Pizza',
        imageUrl: '/static/images/products/product_5.png',
        updatedAt: '9.25'
    }
];
export const LatestProducts = (props) => (
    <Card {...props} sx={{ height: 500, 'backgroundColor': '#E8EDDF' }} style={{ 'overflow-y': 'scroll'}}>
        <CardHeader sx={{ backgroundColor: '#2B2D42'}}
            subtitle={`${products.length} in total`}
            title={
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: "white"}}>
            ITEMS (Walmart 1425 NE 163rd St)
                </Typography>
            }
    />
    <Divider />
    <List>
            {props.products.map((product, i) => {
             
                if (i%2 == 0) {
                 
                    return (
                        <ListItem
                            divider={i < products.length - 1}
                            key={product.id}
                            
                        >

                            <ListItemAvatar>
                                <LocalDiningIcon style={{ color: "#2B2D42" }} />
                            </ListItemAvatar>
                            <ListItemText

                                disableTypography
                                primary={<Typography type="body2" sx={{ fontWeight: 'bold', color: "#2B2D42" }}>{product.name}</Typography>}
                                secondary={product.updatedAt}

                            />
                            <IconButton
                                edge="end"
                                size="small"
                            >
                                <MoreVertIcon />
                            </IconButton>
                        </ListItem>
                    );
                }
         
                return (
                    <ListItem
                        divider={i < products.length - 1}
                        key={product.id}
                    >

                        <ListItemAvatar>
                            <DinnerDiningIcon style={{ color: "#2B2D42" }} />
                        </ListItemAvatar>
                        <ListItemText

                            disableTypography
                            primary={<Typography type="body2" sx={{ fontWeight: 'bold', color: "#2B2D42" }}>{product.name}</Typography>}
                            secondary={product.updatedAt}

                        />
                        <IconButton
                            edge="end"
                            size="small"
                        >
                            <MoreVertIcon />
                        </IconButton>
                    </ListItem>
                );
      
                }  )
             }
        </List>

    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
