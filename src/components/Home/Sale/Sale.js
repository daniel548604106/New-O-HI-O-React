import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Chip } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const products = [
  {
    name: 'Men Running Shoe',
    price: '3000',
    discount: '30%',
    image:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    id: 1,
  },
  {
    name: 'Smart Watch',
    price: '8000',
    discount: '10%',
    image:
      'https://images.unsplash.com/photo-1461141346587-763ab02bced9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3648&q=80',
    id: 2,
  },
  {
    name: 'Wireless Headphone - Golden',
    price: '12000',
    discount: '15%',
    image:
      'https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
    id: 3,
  },
  {
    name: 'Samsung Smart Tv',
    price: '32000',
    discount: '10%',
    image:
      'https://images.unsplash.com/photo-1591970698020-e685959dcdaa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80',
    id: 4,
  },
];

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 250,
    maxWidth: 260,
    marginRight: '20px',
    height: 300,
    borderRadius: '20px',
    position: 'relative',
  },
  root: {
    display: 'flex',
    overflow: 'scroll',
    flexWrap: 'nowrap',
  },
  media: {
    height: 200,
    width: '100%',
  },
}));

const Sale = () => {
  const classes = useStyles();

  return (
    <div style={{ padding: '20px' }}>
      <div>
        <h2>Flash Sale</h2>
      </div>
      <div className={classes.root}>
        {products.map((product) => (
          <Card
            className={classes.card}
            key={product.id}
            component={Link}
            to={`/products/${product.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Chip
              label={`${100 - product.discount.split('%')[0]} % OFF`}
              variant="outlined"
              style={{
                cursor: 'pointer',
                margin: '10px 10px',
                position: 'absolute',
                top: '10px',
                zIndex: '10',
                color: '#ac5318',
                border: '1px solid #b1340e',
              }}
            />
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={product.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  style={{
                    marginBottom: '0',
                    textOverflow: 'ellipsis',
                    width: '100%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  component="p"
                  style={{ fontWeight: 'bold', color: 'black' }}
                >
                  $ {product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sale;
