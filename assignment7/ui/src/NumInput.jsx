import React from 'react';

function unformat(str) {
console.log("In Unformat");
const val = parseFloat(str);
return Number.isNaN(val) ? null : val;
}

function format(num) {
    console.log("In format");
    return num != null ? num.toString() : '';
}


export default class NumInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: format(props.value) };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onBlur(e) {
    const { onChange } = this.props;
    const { value } = this.state;
    onChange(e, unformat(value));
  }

  onChange(e) {
    if (e.target.value.match(/^\d*\.{0,1}\d{0,2}$/)) {
      this.setState({ value: e.target.value });
    }
  }

  render() {
    const { value } = this.state;
    return (
      <input
        type="text"
        {...this.props}
        value={value}
        onBlur={this.onBlur}
        onChange={this.onChange}
      />
    );
  }
}