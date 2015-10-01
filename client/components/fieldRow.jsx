import React from 'react';
import Radium from 'radium';


const styles = {

  wrapper: {
    marginLeft: 20,
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

  updateContent = e => {
    this.props.updateContent(this.props.label, e.target.value);
  }

  updateLabel = e => {
    this.props.updateLabel(this.props.label, e.target.value);
  }

  remove = () => {
    this.props.remove(this.props.label);
  }



  render(){
    const values = this.props.content.toString().replace(/[,]\s/, "").split('.');
    return(
      <div className="field_row" style={styles.wrapper}>
        <button onClick={this.remove}>
          -
        </button>
        <input
          type='text'
          defaultValue={this.props.label}
          onBlur={this.updateLabel}
          style={styles.input}
          key={this.props.label}/>
        <span> : </span>
        <input
          type='text'
          defaultValue={values[0]}
          onBlur={this.updateContent}
          style={styles.input}
          key={values[0]}/>
        {values[1] ?
          <input
            type='text'
            defaultValue={values[1]}
            style={styles.input}
            key={values[1]}/>
          : null}

      </div>
    );

  }
}
