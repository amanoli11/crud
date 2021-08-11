import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 65,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React Basics
          </Typography>
          <Link id='link' to ='/'>Home</Link>
          <Link id='link' to ='/suggestion'>Suggestion</Link>
          <Button color="inherit">Toggle Theme</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
