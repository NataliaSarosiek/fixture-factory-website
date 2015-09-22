import React from 'react';
import {Grid, Input} from 'react-bootstrap';

import JsonBuilder from './jsonBuilder.jsx';

import '../assets/styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const DUMMY_JSON = {
  pole: 1,
  pole2: 2,
  obj: {
    pole3 : {
        pole4 : 'cos',
        pole7: 'random.email'
    },
    pole6 : 6,
  },
  pole5: 5,
};

export default class Wrapper extends React.Component {
  render(){
    return(
      <div>
        <JsonBuilder json={DUMMY_JSON}/>
      </div>
    );
  }
}
