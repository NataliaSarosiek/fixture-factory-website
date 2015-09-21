import React from 'react';
import _ from 'lodash';


class FieldRow extends React.Component {

  static defaultProps = {
    label: '',
  }


  render(){

  //console.log('propst rowfielda', this.props);

    return(
      <div>
        {this.props.label} : {this.props.children}
      </div>
    );
  }
}


export default class JsonBuilder extends React.Component {


  static defaultProps = {
    json: {}
  }

  renderFieldRow(key, value){
    return <div>{key}:{value}</div>;
  }

  renderObjectRow(key, value){
    return (
      <span>
        {key}:
          <div>
            {this.renderRows(value)}
          </div>
      </span>
    );
  }

  renderRows(obj) {
    var keys = Object.keys(obj);
    var self = this;

    return _.map(keys, function(key){

      if ( _.isObject(obj[key]) ) {
        return self.renderObjectRow(key, obj[key]);
      } else {
        // return self.renderFieldRow(key, obj[key]);
        return <FieldRow label={key}> {obj[key]} </FieldRow>
      }

    });
  }

  render(){



    return(
      <div>{this.renderRows(this.props.json)}</div>
    );
  }
}
