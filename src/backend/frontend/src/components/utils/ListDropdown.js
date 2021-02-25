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
  },
  selectedItem: {
    backgroundColor: theme.palette.gray.main
  }
}));

export default function ListDropdown(props) {
  const classes = useStyles();
  const normListData = props.listData ? props.listData : [];
  const normSelectedData = props.selected ? props.selected : [];

  return (
    <div className={classes.root}>
      <List component='nav'>
        {normListData.map((item, i) => {
          if (normSelectedData.includes(item._id)) {
            return (
              // Selected Item
              <React.Fragment key={i}>
                <ListItem
                  className={classes.selectedItem}
                  button
                  onClick={() => props.handleItemClick(item._id)}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={i}>
                <ListItem
                  button
                  onClick={() => props.handleItemClick(item._id)}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              </React.Fragment>
            );
          }
        })}
      </List>
    </div>
  );
}
