import React, {useEffect, useState} from 'react';
import styles from './ListOfBooks.module.scss';
import PropTypes from 'prop-types';

import AddToFavorites from '../AddToFavorites/AddToFavorites';
import AddToRead from '../AddToRead/AddToRead';

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
            <li>{book.title}</li>
            <div className={styles.fonts}>
              <AddToRead/>
              <AddToFavorites/>
            </div>
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
