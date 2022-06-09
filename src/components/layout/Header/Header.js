import React from 'react';
import styles from './Header.module.scss';
import BookImage from '../../../assets/images/book-min.png';

const Header = () => (
  <div className={styles.root}>
    <div className={'container ' + styles.box}>
      <img src={BookImage} alt='logo'/>
      <div className={styles.text}>
        I  read <br/> a book.
        <div className={styles.btnJoin}>Join me</div>
      </div>
    </div>
  </div>
);

export default Header;
