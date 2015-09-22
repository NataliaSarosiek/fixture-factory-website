import React from 'react';
import _ from 'lodash';
import FieldRow from './fieldRow.jsx';

export default class ObjectRow extends React.Component {

  static defaultProps = {
    label: '',
  }

  renderObject(obj) {
    var keys = Object.keys(obj);
    var self = this;

    return _.map(keys, function(key){

      if ( _.isObject(obj[key]) ) {
        return <ObjectRow label={key} content={obj[key]}></ObjectRow>
      } else {
        return <FieldRow label={key}>{obj[key]} </FieldRow>
      }

    });
  }


  render(){

    return(

      <div>
        { this.props.label ? <span> {this.props.label} : </span> : null }
        {
            this.renderObject(this.props.content)
        }
      </div>


    );
  }
}
