import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>page not found</h1>;
};

export default {
  component: NotFoundPage
};