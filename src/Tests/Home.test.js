import React from 'react';
import ReactDOM from 'react-dom';
import Home from './../Components/Pages/Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});
