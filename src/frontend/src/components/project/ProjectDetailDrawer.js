import React, { useEffect } from 'react';
import {
  makeStyles,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {},
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

export default function ProjectDetailDrawer(props) {
  const [sortedList, updateProcessList] = React.useState([]);
  const classes = useStyles();

  useEffect(() => {
    const sortList = () => {
      if (props.process !== undefined) {
        const sorted = props.process.sort((a, b) =>
          a.order > b.order ? 1 : -1
        );
        return sorted;
      } else {
        return null;
      }
    };

    let sortedProcessList = sortList();
    updateProcessList(sortedProcessList);
  }, [props.process]);

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.drawer}>
        {Array.isArray(sortedList) &&
          sortedList.map((process, i) => {
            return (
              <Grid item xs={8} key={i}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${i + 1}a-content`}
                    id={`panel${i + 1}a-header`}
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
