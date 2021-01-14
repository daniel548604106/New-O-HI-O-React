import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflow: 'scroll',
    flexWrap: 'nowrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const labels = ['Shoes', 'Clothes', 'Men', 'Fashion', 'Beauty', 'Women'];

const Collection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {labels.map((label) => (
        <Chip
          label={label}
          variant="outlined"
          component={Link}
          style={{ cursor: 'pointer', margin: '10px 10px' }}
          to={`/${label.toLowerCase()}`}
          key={label}
        />
      ))}
    </div>
  );
};

export default Collection;
