import React from 'react';
import styles from './BooksPage.module.scss';
import PropTypes from 'prop-types';
import ListOfBooks from '../../common/ListOfBooks/ListOfBooks';

const BooksPage = props => {
  console.log(`to: ${props.page}`);
  return (
    <div className={styles.root}>
      <div className="container">
        <ListOfBooks page={props.page}/>
      </div>
    </div>
  );
};
BooksPage.propTypes = {
  page: PropTypes.number,
};
export default BooksPage;
