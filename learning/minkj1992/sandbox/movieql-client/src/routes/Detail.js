import React from 'react';
import { useParams } from 'react-router';
import { gql, useQuery } from '@apollo/client';

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    // variables: { id: Number(id) },
    variables: { id: +id },
  });

  if (loading) {
    return 'loading';
  }

  if (data && data.movie) {
    return <img src={data.movie.medium_cover_image} alt={data.movie.title} />;
  }
};
