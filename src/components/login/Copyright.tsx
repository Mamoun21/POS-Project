import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './style'
function Copyright() {
  const classes = useStyles();
    return (
      <Typography variant="body2" color="textSecondary" align="center" className={classes.typography}>
        {'© '}{' '}
        {new Date().getFullYear()}{' '}
        NUTRIFIT
      </Typography>
    );
  }
  export default Copyright;