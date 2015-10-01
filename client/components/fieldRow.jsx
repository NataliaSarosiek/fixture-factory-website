import React from 'react';
import Radium from 'radium';


const styles = {

  wrapper: {
    marginLeft: 15,
  },
  input: {
    border: 0,
    ':focus': {
      outline: 0,
    }
  },

};

@Radium
export default class FieldRow extends React.Component {

  static propTypes = {
    label: React.PropTypes.string,
    content: React.PropTypes.oneOfType([
              React.PropTypes.string,
              React.PropTypes.number ]),
  }

  static defaultProps = {
    label: '',
  }

  handleContentChange = e => {
    this.props.updateContent(this.props.label, e.target.value);
  }

  handleLabelChange = e => {
    this.props.updateLabel(this.props.label, e.target.value);
  }

  handleRemove = () => {
    console.log(this.props);
    this.props.remove(this.props.label);
  }



  render(){
    const values = this.props.content.toString().replace(/[,]\s/, "").split('.');
    return(
      <div className="field_row" style={styles.wrapper}>
        <input
          type='text'
          defaultValue={this.props.label}
          onBlur={this.handleLabelChange}
          style={styles.input}
          key={this.props.label}/>
        <span> : </span>
        <input
          type='text'
          defaultValue={values[0]}
          onBlur={this.handleContentChange}
          style={styles.input}
          key={values[0]}/>
        {values[1] ?
          <input
            type='text'
            defaultValue={values[1]}
            style={styles.input}
            key={values[1]}/>
          : null}
        <button onClick={this.handleRemove}>
          -
        </button>
      </div>
    );

  }
}
