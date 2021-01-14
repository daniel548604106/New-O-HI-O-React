import { fade, makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'white',
    boxShadow: '1px 1px 1px rgba(0,0,0,0.2)',
    color: '#3a3737',
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  title: {
    minWidth: '80px',
    display: 'flex',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: '#fafafa',
    '&:hover': {
      backgroundColor: fade('#f5f5f5', 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    color: '#c2c0c0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));
