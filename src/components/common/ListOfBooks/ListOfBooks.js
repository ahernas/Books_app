import React, {useEffect, useState} from 'react';
import styles from './ListOfBooks.module.scss';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const ListOfBooks = ({page}) => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      `https://gnikdroy.pythonanywhere.com/api/book/?page=${page}`)
      .then((res) => res.json())
      .then((data) => setBooks(data.results))
      .catch(err => console.log(err));
  }, [page]);

  return (
    <>
      <div className={styles.title}>
        <div className={styles.line}/>
        <div className={styles.text}>Books to read before you die</div>
        <div className={styles.line}/>
      </div>
      <div className={styles.list}>
        {books.map((book) => (
          <ul key={book.id}>
            <a href='#'><FontAwesomeIcon className={styles.icon} icon={faHeart}/></a>
            <li>{book.title}</li>
          </ul>
        ))
        }
      </div>
    </>
  );
};

ListOfBooks.propTypes = {
  page: PropTypes.number,
};
export default ListOfBooks;
