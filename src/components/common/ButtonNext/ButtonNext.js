import React from 'react';
import {Route} from 'react-router-dom';

import styles from './ButtonsNextPrevious.module.scss';
import PropTypes from 'prop-types';

const ButtonNext = ({page}) => {

  const newPage = page + 1;
  console.log(`ssks ${newPage}`);
  return (
    <Route render={({history}) => (
      <button className={styles.btn} type='button'
        onClick={() => {
          history.push(`/${newPage}`);
        }}
      >
        Next &raquo;
      </button>
    )}/>
  );
};

ButtonNext.propTypes = {
  page: PropTypes.number,
};

export default ButtonNext;
