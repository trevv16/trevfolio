import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}

export default function ListDropdown(props) {
  const classes = useStyles();
  const normListData = props.listData ? props.listData : [];

  return (
    <div className={classes.root}>
      <List component='nav'>
        {normListData.map((item, i) => (
          <ListItem
            key={i}
            button
            onClick={() => props.handleItemClick(item._id)}
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
