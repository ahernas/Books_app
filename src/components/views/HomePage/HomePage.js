import React from 'react';
import PropTypes from 'prop-types';

import TopBar from '../../layout/TopBar/TopBar';
import BooksPage from '../../features/BooksPage/BooksPage';
import Header from '../../layout/Header/Header';
import SearchBox from '../../features/SearchBox/SearchBox';
import Footer from '../../layout/Footer/Footer';

const HomePage = props => {

  const pageParam = parseInt(props.match.params.page);
  return (
    <div>
      <TopBar />
      <Header/>
      <BooksPage page={isNaN(pageParam) ? 1 : pageParam} />
      <SearchBox inf={props}/>
      <Footer/>
    </div>
  );
};

HomePage.propTypes = {
  match: PropTypes.object,
};
export default HomePage;
