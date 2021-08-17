import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: '50px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '30px',
    margin: '100px 0px 10px 0px',
  },
  link: {
    color: '#000000',
  },
}));

const LoginView = () => {
  const classes = useStyles();

  return (
    <>
        <div>Login Screen</div>
    </>
  );
};

export default LoginView;
