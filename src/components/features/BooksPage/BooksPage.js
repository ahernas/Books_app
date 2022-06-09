import React from 'react';
import styles from './BooksPage.module.scss';
import PropTypes from 'prop-types';
import ListOfBooks from '../../common/ListOfBooks/ListOfBooks';
import ButtonNext from '../../common/ButtonNext/ButtonNext';
import ButtonPrevious from '../../common/ButtonNext/ButtonPrevious';

const BooksPage = props => {
  console.log(`to: ${props.page}`);
  return (
    <div className={styles.root}>
      <div className="container">
        <ListOfBooks page={props.page}/>
        <div className={styles.numberPage}>- {props.page} -</div>
        <div className={styles.buttonBox}>
          <ButtonPrevious page={props.page}/>
          <ButtonNext page={props.page}/>
        </div>
      </div>
    </div>
  );
};
BooksPage.propTypes = {
  page: PropTypes.number,
};
export default BooksPage;
