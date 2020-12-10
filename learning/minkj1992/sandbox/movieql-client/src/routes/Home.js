import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, err, data } = useQuery(GET_MOVIES);
  if (loading) {
    console.log(err);
    return 'loading ...';
  }
  if (data && data.movies) {
    console.log(err);
    return data.movies.map((m, i) => <h1 key={i}>{m.id}</h1>);
  }
};

export default Home;
