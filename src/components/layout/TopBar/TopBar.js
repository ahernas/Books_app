import React from 'react';
import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <div className={'container ' + styles.boxTopBar}>
      <div className={'d-flex align-items-center ' + styles.list}>
        <ul>
          <li>
            <a href="/">books</a>
          </li>
          <li>
            <a href="/">search</a>
          </li>
          <li>
            <a href="/">favorite</a>
          </li>
          <li>
            <a href="/">read</a>
          </li>
          <li>
            <a href="/">contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default TopBar;
