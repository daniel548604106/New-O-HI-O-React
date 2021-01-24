import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress style={{ color: '#189fac' }} />
    </div>
  );
};

export default Loader;
