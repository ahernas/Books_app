import React from 'react';
import PropTypes from 'prop-types';

import TopBar from '../../layout/TopBar/TopBar';
import BooksPage from '../../features/BooksPage/BooksPage';
import Header from '../../layout/Header/Header';
import SearchBox from '../../features/SearchBox/SearchBox';

const HomePage = props => {
  console.log(props.match);

  const pageParam = parseInt(props.match.params.page);
  return (
    <div>
      <TopBar />
      <Header/>
      <BooksPage page={isNaN(pageParam) ? 1 : pageParam} />
      <SearchBox inf={props}/>
    </div>
  );
};

HomePage.propTypes = {
  match: PropTypes.object,
};
export default HomePage;
