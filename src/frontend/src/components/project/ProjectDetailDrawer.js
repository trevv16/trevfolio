import React from 'react';
import {
  Link,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  MuiAccordion,
  MuiAccordionSummary,
  MuiAccordionDetails,
  Typography
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

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
  }
}));

export default function ProjectDetailDrawer(props) {
  const classes = useStyles();

  const sortedList = () => {
    if (props.processList) {
      return props.processList.sort((a, b) => (a.order > b.order ? 1 : -1));
    } else {
      return null;
    }
  };

  return (
    <div className={classes.root}>
      {sortedList &&
        sortedList.map((process) => {
          return (
            <Accordion
              square
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                aria-controls='panel1d-content'
                id='panel1d-header'
              >
                <Typography>{`${process.type}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{`${process.content}`}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
}
