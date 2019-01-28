import React from 'react';
import { renderRoutes } from 'react-router-config';

import NavBar from './components/NavBar';


const App = ({ route }) => {
  return (
    <div>
    <NavBar />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App
}
