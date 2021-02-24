import React, { useState, useEffect } from 'react';
import { Grid, makeStyles, TextField } from '@material-ui/core';
import api from '../../utils/api';
import { ListDropdown } from '../../components/index';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center'
    // marginTop: theme.spacing(18),
    // marginBottom: theme.spacing(8)
  },
  searchField: {}
}));

function ResourchSearchBar(props) {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [searchResponse, setSearchResponse] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const normApi = props.api ? props.api : 'v1/projects/search';
  const normDataKey = props.dataKey ? props.dataKey : 'title';

  useEffect(() => {
    const handleSearch = (search) => {
      if (search !== '') {
        let query = {};
        query[normDataKey] = { $regex: search, $options: 'i' };

        api
          .post(normApi, query)
          .then((response) => {
            setSearchResponse(response.data.data);
          })
          .catch((error) => {
            if (error.response) {
              console.error(error.response.data);
              console.error(error.response.status);
              console.error(error.response.headers);
            }
          });
      }
    };

    handleSearch(search);
  }, [search]);

  const handleItemClick = (id) => {
    console.log(selectedProjects);
    console.log('Clicked', id);
    setSelectedProjects((selectedProjects) => [...selectedProjects, id]);

    const results = searchResponse.filter(
      (listItem) => !selectedProjects.includes(listItem)
    );
    setSearchResults(results);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id='search'
            label='Search'
            variant='outlined'
            name='search'
            className={classes.searchField}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type='text'
            color='secondary'
            autoComplete='off'
          />
        </Grid>
        {searchResponse !== [] && (
          <Grid item xs={12}>
            <ListDropdown
              listData={searchResults}
              handleItemClick={(id) => handleItemClick(id)}
            />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default ResourchSearchBar;
