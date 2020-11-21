import React, { useState } from 'react';
import {
  Link,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  IconButton,
  Paper,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import api from '../../utils/api';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

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

export default function ProjectGridList(props) {
  // const [skills, setSkills] = useState([]);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {props.tileData.map((tile, i) => (
          <GridListTile key={i} className={classes.tile}>
            <Link href='#'>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>Published: {tile.published}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
