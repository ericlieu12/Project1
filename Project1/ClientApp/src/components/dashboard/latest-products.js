import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
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
    <Card {...props} sx={{ height: 520 }} style={{ 'overflow-y': 'scroll' }}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Items"
    />
    <Divider />
    <List>
      {props.products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
         
          <ListItemText
            primary={product.name}
                  secondary={product.updatedAt}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
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
