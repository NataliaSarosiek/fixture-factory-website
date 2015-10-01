import React from 'react';
import _ from 'lodash';
import ObjectRow from './objectRow.jsx';

export default class JsonBuilder extends React.Component {


  static defaultProps = {
    blueprint: {}
  }

  componentDidMount(){
    this.setState({blueprint: this.props.blueprint})
  }

  onContentUpdate = (label, newContent) => {
    this.setState({blueprint: newContent})
  }

  state = {
    blueprint: {}
  }

  render(){
    return(
      <div>
        <div className="rows">
         <ObjectRow
          content={this.state.blueprint}
          updateContent={this.onContentUpdate}
          root/>
        </div>
        <pre>
          {JSON.stringify(this.state.blueprint, null, '\t')}
        </pre>
      </div>
    );
  }
}
