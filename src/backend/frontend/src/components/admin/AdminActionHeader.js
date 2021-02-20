import React from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  ButtonGroup
} from '@material-ui/core';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center'
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
}));

function AdminActionHeader(props) {
  const classes = useStyles();

  const firstUrl = props.primaryUrl ? props.primaryUrl : '#';
  const secondUrl = props.secondaryUrl ? props.secondaryUrl : '#';
  const handlePrimary = props.primaryHandle ? props.primaryHandle : null;
  const handleSecondary = props.secondaryHandle ? props.secondaryHandle : null;

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6} className={classes.title}>
          <Typography align='center' variant='h1' component='h1' align='right'>
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.actions}>
          <ButtonGroup>
            <Button
              variant='outlined'
              size='large'
              color='primary'
              href={secondUrl}
              onClick={handleSecondary}
            >
              {props.secondaryTxt}
            </Button>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              href={firstUrl}
              onClick={handlePrimary}
              endIcon={<KeyboardArrowDownOutlinedIcon />}
            >
              {props.primaryTxt}
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminActionHeader;
