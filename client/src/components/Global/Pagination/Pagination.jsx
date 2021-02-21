import React, { useState, useEffect } from 'react';
import classes from './Pagination.module.scss';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import PropTypes from 'prop-types';
const Pagination = ({ currentPage, setCurrentPage, totalPage }) => {
  const [paginationArray, setPaginationArray] = useState([]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  useEffect(() => {
    const array = [];
    for (let i = 1; i <= totalPage; i++) {
      array.push(i);
    }
    setPaginationArray(array);
  }, [totalPage]);
  return (
    <div className={classes.pagination}>
      {currentPage > 1 && (
        <div onClick={() => handlePrevPage()} className={classes.icon}>
          <KeyboardArrowLeftIcon />
        </div>
      )}
      {totalPage > 5 && (
        <div>
          <button onClick={() => setCurrentPage(1)}>1</button>
          <span>...</span>
        </div>
      )}
      {paginationArray.map((page, idx) => (
        <button
          onClick={() => setCurrentPage(idx + 1)}
          className={currentPage === idx + 1 && classes.active}
          key={page}
        >
          {page}
        </button>
      ))}
      {totalPage > 3 && <div>...</div>}
      {currentPage < totalPage && (
        <div onClick={() => handleNextPage()} className={classes.icon}>
          <KeyboardArrowRightIcon />
        </div>
      )}
    </div>
  );
};

Pagination.propTypes = {
  totalPage: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
};

export default Pagination;
