import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes';
import PropTypes from 'prop-types'
 
const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies &&
        movies.map(({ id, title }) => (
            <li key={id}>
            <Link
              to={{
                pathname: `${routes.movies}/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
    </ul> 
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default withRouter(MovieList);

