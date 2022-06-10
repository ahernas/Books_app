import React from 'react';
import {Route} from 'react-router-dom';

import styles from './ButtonsNextPrevious.module.scss';
import PropTypes from 'prop-types';

const ButtonPrevious = ({page}) => {

  let newPage = 0;
  if (page > 1) {
    newPage = page - 1;

  } else {
    newPage = 1;
  }

  return (
    <Route render={({history}) => (
      <button className={styles.btn} type='button'
        onClick={() => {
          history.push(`/${newPage}`);
        }}
      >
        &laquo; Previous
      </button>
    )}/>
  );
};

ButtonPrevious.propTypes = {
  page: PropTypes.number,
};

export default ButtonPrevious;
