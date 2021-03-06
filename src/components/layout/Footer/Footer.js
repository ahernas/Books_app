import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.root}>
    <div className={`container ${styles.text}`}>
      ┬ęCopyright by Anna Hernas | All Rights Reserved
    </div>
  </footer>
);

export default Footer;
