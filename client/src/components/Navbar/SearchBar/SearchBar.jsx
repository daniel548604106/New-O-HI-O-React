import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import classes from './SearchBar.module.scss';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const SearchBar = ({ searchBarOpen }) => {
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();
  const search = () => {
    history.push(`/search?q=${searchInput}`);
    setSearchInput('');
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={classes.searchBar}
      style={{
        display: searchBarOpen ? 'block' : 'none',
        height: searchBarOpen ? '100%' : '0',
        opacity: searchBarOpen ? '100%' : '0',
      }}
    >
      <div style={{ display: 'flex', width: '100%' }}>
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          type="search"
          value={searchInput}
          placeholder="請輸入關鍵字"
          className={classes.inputBox}
        />
        <span className={classes.searchBtn} onClick={() => search()}>
          <SearchIcon />
        </span>
      </div>
      <div className={classes.recommendation}>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Recommended</h3>
        <div
          style={{ display: 'flex', overflow: 'scroll', flexWrap: 'nowrap', whiteSpace: 'nowrap' }}
        >
          <div
            style={{
              minWidth: '200px',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '4px',
              marginRight: '20px',
              color: 'white',
              backgroundImage: `url(
                'https://images.unsplash.com/photo-1502035618526-6b2f1f5bca1b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YmlydGhkYXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
              )`,
              backgroundSize: 'cover',
            }}
          >
            <span style={{ fontSize: '14px' }}>Birthday Present</span>
            <span>
              <ChevronRightIcon style={{ width: '16px', height: '16px' }} />
            </span>
          </div>
          <div
            style={{
              minWidth: '200px',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '4px',
              backgroundImage: `url(
                'https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
              )`,
              backgroundSize: 'cover',
            }}
          >
            <span style={{ fontSize: '14px' }}>Birthday Present</span>
            <span>
              <ChevronRightIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchBarOpen: PropTypes.bool,
};

export default SearchBar;
