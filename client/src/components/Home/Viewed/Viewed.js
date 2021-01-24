import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Card, IconButton, Divider } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Men Running Shoe',
    price: '3000',
    discount: '30%',
    image:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    id: 12,
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
    id: 23,
  },
  {
    name: 'Samsung Smart Tv',
    price: '32000',
    discount: '10%',
    image:
      'https://images.unsplash.com/photo-1591970698020-e685959dcdaa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80',
    id: 1,
  },
];
const useStyles = makeStyles({
  card: {
    position: 'relative',
  },
  link: {
    textDecoration: 'none',
  },
  heart: {
    '&:hover': {
      color: '#da0700',
    },
  },
  media: {
    height: 140,
  },
});
const Viewed = () => {
  const classes = useStyles();
  return (
    <div style={{ padding: '15px', marginTop: '20px' }}>
      <div>
        <h2 style={{ fontSize: '22px' }}>Recently Viewed</h2>
      </div>
      <Divider style={{ margin: '10px 0 20px 0' }} />
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={3}
            key={product.id}
            component={Link}
            className={classes.link}
            to={`/products/${product.id}`}
          >
            <Card className={classes.card}>
              <IconButton
                size="small"
                style={{
                  position: 'absolute',
                  zIndex: '10',
                  top: '10px',
                  right: '10px',
                  color: '#e29d1c',
                }}
              >
                <FavoriteBorderIcon className={classes.heart} />
              </IconButton>
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
                  <Typography variant="body2" color="textSecondary" component="p">
                    $ {product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Viewed;
