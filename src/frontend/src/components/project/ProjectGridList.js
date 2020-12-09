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

export default function ProjectGridList(props) {
  // const [skills, setSkills] = useState([]);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        {props.tileData.map((tile, i) => (
          <GridListTile key={i} className={classes.tile}>
            <Link href={`/projects/${tile._id}`}>
              <img
                src={tile.thumbnail}
                alt={tile.title}
                className={classes.tileImg}
              />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>Published: {tile.published}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`Info about ${tile.title}`}
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
