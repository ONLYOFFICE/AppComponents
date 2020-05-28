import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledSlider, StyledWrap, Arrow } from './StyledSlider';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      focus: false, 
      min: this.props.min,
      max: this.props.max
    };
  }
  
  componentDidMount() {
    const min = this.checkingNegativeProps(this.props.min);
    const max = this.checkingNegativeProps(this.props.max);
    
    this.setState( {
       min: min,
       max: max
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({ value: this.props.value });
    }
    if( this.props.max !== prevProps.max) {
      const max = this.checkingNegativeProps(this.props.max); 
      this.setState({ max: max});
    }
    if( this.props.min !== prevProps.min) {
      const min = this.checkingNegativeProps(this.props.min); 
      this.setState({ min: min});
    }
  }

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
    this.props.onChange && this.props.onChange(e);
  }

  onRight = (e) => {
    let val = this.state.value;
    val = this.checkingMinMaxVal(val, "+");
    e.target.value = val;
    this.onChangeHandler(e); 
  }

  onLeft = (e) => {
    let val = this.state.value;
    val = this.checkingMinMaxVal(val, "-");
    e.target.value = val;
    this.onChangeHandler(e); 
  }

  checkingMinMaxVal = (value, i) => {
    let val = parseInt(value);

    if(i === "+") {
      val = val + 1;
      if( val >= this.state.max ) {
        val = this.state.max;
      }
    } 

    if(i === "-") {
      val = val - 1;
      if( val <= this.state.min ) {
        val = this.state.min;
      }
    }

    return val.toString();
  }

  checkingNegativeProps = (val) => {
    const value = val <= 0 ? 0 : val;
    return value; 
  }

  onFocusHandler = () => {
    this.setState({focus: !this.state.focus})
  }

  render() {
    const { disabled, onChange, ...rest } = this.props;
    const { value, focus, min, max } = this.state;

    return (
      <StyledWrap 
      onFocus = {this.onFocusHandler}
      onBlur = {this.onFocusHandler}
      tabIndex="0"
      { ...rest } 
      >
        <Arrow 
          onClick={this.onLeft} 
          focus={focus}
          disabled={disabled}
        />
        <StyledSlider
          max={ max } 
          min={ min }
          value={value} 
          disabled={disabled}
          onChange={this.onChangeHandler} 
        />
        <Arrow 
          dir="right" 
          onMouseDown={this.onRight} 
          focus={focus}
          disabled={disabled}
        />
      </StyledWrap>
    );
  }
}

Slider.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func
}

Slider.defaultProps = {
  disabled: false,
  value: "5",
  max: 30,
  min: 0,
}

export default Slider;