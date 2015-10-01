import React from 'react';
import _ from 'lodash';
import FieldRow from './fieldRow.jsx';
import Radium from 'radium'


const styles = {

  wrapper: {
    marginLeft: 20
  },

  addButton: {
    marginLeft: 20
  },

  input: {
    border: 0,
    ':focus': {
      outline: 0,
    }
  },

};

@Radium
export default class ObjectRow extends React.Component {

  static propTypes = {
    label: React.PropTypes.string,
    content: React.PropTypes.object,
    root: React.PropTypes.bool,
  }

  static defaultProps = {
    label: '',
    updateContent: _.noop,
    root: false,
  }

  componentDidMount(){
    this.setState({
      content: this.props.content,
      label: this.props.label,
    });
  }

  componentWillReceiveProps(newProps){
    this.setState({
      content: newProps.content,
      label: newProps.label,
    });
  }

  state = {
    content: {},
    label: "",
  }

  updateChildLabel = (oldLabel, newLabel) => {

    var newContent = _.clone(this.state.content);
    newContent[newLabel] = newContent[oldLabel];
    delete newContent[oldLabel];
    this.props.updateContent(this.state.label, newContent);

  }


  updateChildContent = (rowKey, rowValue) => {

    var newContent = _.clone(this.state.content);
    newContent[rowKey] = rowValue;
    this.props.updateContent(this.state.label, newContent);

  }

  removeChild = (label) => {

    var newContent = _.clone(this.state.content);
    delete newContent[label];
    this.props.updateContent(this.state.label, newContent);

  }

  updateLabel = e => {

    const newLabel = e.target.value;
    this.props.updateLabel(this.props.label, newLabel);

  }

  addEmptyRow = () => {

    var newContent = _.clone(this.state.content);
    newContent["newLabel"] = "newContent";

    this.props.updateContent(this.state.label, newContent);

  }

  remove = () => {

    this.props.remove(this.state.label);

  }

  renderRemoveButton() {
    return (

      <button
          onClick={this.remove}>
          -
      </button>

    );
  }

  renderChildren(obj) {

    var keys = Object.keys(obj);
    var self = this;
    var children = _.map(keys, function(key, index){
      if ( _.isObject(obj[key]) ) {
        return (
          <div>

            <ObjectRow
              label={key}
              content={obj[key]}
              updateLabel={self.updateChildLabel}
              updateContent={self.updateChildContent}
              remove={self.removeChild}
              key={index}/>

          </div>
        )

      } else {
        return (
          <FieldRow
            label={key}
            content={obj[key]}
            updateLabel={self.updateChildLabel}
            updateContent={self.updateChildContent}
            remove={self.removeChild}
            key={index}/>
        )
      }

    });
    children.push(<button onClick={this.addEmptyRow} style={styles.addButton}> + </button>);
    return children;
  }


  render(){

    return (

      <div style={styles.wrapper}>

        {!this.props.root ? this.renderRemoveButton() : null}

        <input
          type='text'
          defaultValue={this.state.label}
          onBlur={this.updateLabel}
          style={styles.input}
          key={this.state.label}/>

        {this.renderChildren(this.state.content)}

      </div>

    );
  }
}
