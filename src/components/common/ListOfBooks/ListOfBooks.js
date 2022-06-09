import React, {useEffect, useState} from 'react';
import styles from './ListOfBooks.module.scss';
import PropTypes from 'prop-types';

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
      <div className={styles.title}></div>
      <div className={styles.list}>
        {books.map((book) => (
          <ul key={book.id}>
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
