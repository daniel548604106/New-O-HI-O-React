import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const Collection = () => {
  const classes = useStyles();

  return (
    <Router className={classes.root}>
      <Link to="/shoes">
        <Chip label="Basic" variant="outlined" />
      </Link>
    </Router>
  );
};

export default Collection;
