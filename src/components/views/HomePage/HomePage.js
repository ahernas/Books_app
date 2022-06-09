import React from 'react';
import PropTypes from 'prop-types';

import TopBar from '../../layout/TopBar/TopBar';
import BooksPage from '../../features/BooksPage/BooksPage';

const HomePage = props => {
  console.log(props.match);

  const pageParam = parseInt(props.match.params.page);
  return (
    <div>
      <TopBar />
      <BooksPage page={isNaN(pageParam) ? 1 : pageParam} />
    </div>
  );
};

HomePage.propTypes = {
  match: PropTypes.object,
};
export default HomePage;
