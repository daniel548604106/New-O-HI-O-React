import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const SearchBar = ({ searchBarOpen }) => {
  return (
    <div
      style={{
        height: searchBarOpen ? '100%' : '0',
        opacity: searchBarOpen ? '100%' : '0',
        transition: 'ease-in-out',
        transitionDuration: '500',
        transitionProperty: 'all',
      }}
    >
      <div style={{ display: 'flex', width: '100%' }}>
        <input
          type="text"
          placeholder="Please type in keywords"
          style={{
            flex: 1,
            width: '100%',
            paddingLeft: '10px',
            fontSize: '14px',
            color: 'gray',
            border: 'none',
            backgroundColor: '#f0f0f0',
          }}
        />
        <span
          style={{
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          <SearchIcon />
        </span>
      </div>
      <div style={{ padding: '10px 10px' }}>
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
