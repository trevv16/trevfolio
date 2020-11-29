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
    const sortedList = props.processList ? props.processList : null;
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {sortedList && 
        sortedList.map((item) => {
            return (
                <Accordion
                    square
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                >
                    <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
                        <Typography>{`${item.}`}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                        lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            );
        });
        }
    </div>
  );
}
