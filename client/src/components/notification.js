import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Notification = ({ type }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {type === 'error' && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert severity="error">This is an error message!</Alert>
        </Snackbar>
      )}
      {type === 'success' && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

Notification.propTypes = {
  type: PropTypes.string,
};

export default Notification;
