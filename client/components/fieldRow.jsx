import React from 'react';
var Radium = require('radium');


var styles = {

  input: {

    border: 0,

    ':focus': {
      outline: 0,
    }

  },


};

@Radium
export default class FieldRow extends React.Component {

  static defaultProps = {
    label: '',
  }

  render(){

    var values = this.props.children.toString().replace(/[,]\s/, "").split('.');

    return(
      <div className="field_row">
        {this.props.label} : <input type='text' defaultValue={values[0]} style={styles.input} key={values[0]}/> {values[1] ? <input type='text' defaultValue={values[1]} style={styles.input} key={values[1]}/> : null}
      </div>
    );
  }
}
