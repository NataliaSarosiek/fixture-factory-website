import React from 'react';
import Wrapper from './components/wrapper.jsx';
import FixtureFactory from "fixture-factory";

window.React = React;
window.F = FixtureFactory;


React.render(
  <Wrapper />,
  document.getElementById('wrapper')
);
