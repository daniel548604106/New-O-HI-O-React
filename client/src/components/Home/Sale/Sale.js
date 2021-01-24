import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Chip, Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'react';
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

const Sale = ({ products }) => {
  const classes = useStyles();

  return (
    <div style={{ padding: '0 20px ' }}>
      <div>
        <h2 style={{ fontSize: '22px' }}>Flash Sale</h2>
      </div>
      <Divider style={{ margin: '10px 0 20px 0' }} />
      <div className={classes.root}>
        {products.map((product) => (
          <Card
            className={classes.card}
            key={product.id}
            component={Link}
            to={`/products/${product._id}`}
            style={{ textDecoration: 'none' }}
          >
            {product.discountPrice && (
              <Chip
                label={`${(1 - product.discountPrice / product.fullPrice).toFixed(2) * 100}% OFF`}
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
            )}
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={product.images[0]}
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
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    component="p"
                    style={{
                      fontWeight: 'bold',
                      textDecoration: product.discountPrice ? 'line-through' : ' none',
                      color: 'black',
                      marginRight: '5px',
                    }}
                  >
                    $ {product.fullPrice}
                  </Typography>
                  {product.discountPrice && (
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      component="p"
                      style={{ fontSize: '16px', color: '#178fac' }}
                    >
                      $ {product.discountPrice}
                    </Typography>
                  )}
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

Sale.propTypes = {
  products: PropTypes.Array,
};

export default Sale;
