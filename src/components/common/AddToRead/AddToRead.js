import React from 'react';

import styles from '../AddToFavorites/AddToFavorite.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';

class AddToRead extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

    this.setState((prevState) => {
      return {animate: !prevState.animate};
    });
  }

  render() {
    let animationClasses = (this.state.animate ? `${styles.active}` : '');

    return (
      <a className={animationClasses} onClick={this.handleClick}>
        <FontAwesomeIcon className={styles.icon} icon={faBook}/>
      </a>

    );
  }
}

export default AddToRead;
