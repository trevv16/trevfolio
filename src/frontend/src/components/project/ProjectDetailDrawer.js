import React, { useEffect, useState } from 'react';
import { makeStyles, Typography, withStyles, Grid } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#FAFAFA'
  },
  gridList: {
    width: '80%',
    height: 'auto'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  },
  tile: {
    minHeight: '450px'
  },
  drawer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(10)
  }
}));

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiAccordionDetails);

export default function ProjectDetailDrawer(props) {
  const [expanded, setExpanded] = React.useState('panel1');
  const [sortedList, updateProcessList] = React.useState([]);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const classes = useStyles();

  const sortList = () => {
    if (props.process !== undefined) {
      const sorted = props.process.sort((a, b) => (a.order > b.order ? 1 : -1));
      console.log(sorted);
      return sorted;
    } else {
      return null;
    }
  };

  useEffect(() => {
    let sortedProcessList = sortList();
    updateProcessList(sortedProcessList);
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.drawer}>
        {Array.isArray(sortedList) &&
          sortedList.map((process, i) => {
            return (
              <Grid item xs={8} key={i}>
                <Accordion
                  square
                  expanded={expanded === `panel${i + 1}`}
                  onChange={handleChange(`panel${i + 1}`)}
                >
                  <AccordionSummary
                    aria-controls={`panel${i + 1}d-content`}
                    id={`panel${i + 1}d-header`}
                  >
                    <Typography>{`${process.type}`}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{`${process.content}`}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
