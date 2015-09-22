import React from 'react';

export default class FieldRow extends React.Component {

  static defaultProps = {
    label: '',
  }

  render(){

    var values = this.props.children.toString().split('.');

    return(
      <div className="field_row">
        {this.props.label} : {values[0]} {values.length > 1 ? <span> : {values[1]}  </span> : null }
      </div>
    );
  }
}
