import React from 'react';
import {
  Link,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#FAFAFA',
    width: '100%'
  },
  gridList: {
    width: '80%',
    height: 'auto'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  },
  tile: {
    width: '100%',
    minHeight: '550px'
  },
  tileImg: {
    width: '100%',
    height: '100%'
  }
}));

export default function SkillGridList(props) {
  const classes = useStyles();
  console.log(props.tileData);
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {props.tileData.map((tile, i) => (
          <GridListTile key={i} className={classes.tile}>
            <Link href={`/project?skill=${tile.name}`}>
              <img
                src={tile.thumbnail}
                alt={tile.name}
                className={classes.tileImg}
              />
              <GridListTileBar
                title={tile.name}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.name}`}
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
