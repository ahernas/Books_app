import React from 'react';
import styles from './TopBar.module.scss';
// import LogoImage from '../../../assets/images/';

const TopBar = () => (
  <div className={styles.root}>
    <div className={'container ' + styles.boxTopBar}>
      <div className={styles.logo}>
        {/*<img src={LogoImage} alt='logo'/>*/}
      </div>
      <div className={'d-flex align-items-center ' + styles.list}>
        <ul>
          <li>
            <a href="#">books</a>
          </li>
          <li>
            <a href="#">search</a>
          </li>
          <li>
            <a href="#">favorite</a>
          </li>
          <li>
            <a href="#">read</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default TopBar;
