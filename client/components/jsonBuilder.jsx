import React from 'react';
import _ from 'lodash';
import ObjectRow from './objectRow.jsx';

export default class JsonBuilder extends React.Component {


  static defaultProps = {
    json: {}
  }

  render(){
    return(
      <div className="rows">
       <ObjectRow content={this.props.json}></ObjectRow>
      </div>
    );
  }
}
