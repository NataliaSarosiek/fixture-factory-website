import React from 'react';

export default class FieldRow extends React.Component {

  static defaultProps = {
    label: '',
  }

  render(){

    return(
      <div className="field_row">
        {this.props.label} : <input type='text' defaultValue={this.props.children} />
      </div>
    );
  }
}
