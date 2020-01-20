import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '100px',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function ImageAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Phil Vellacott" src=".src/Components/Images/mustashe.jpg" className={classes.large} />
    </div>
  );
}