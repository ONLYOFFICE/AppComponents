import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledSlider, StyledWrap, Arrow } from './StyledSlider';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.slider = React.createRef();

    this.state = {
      value: this.checkingValueProps(props.value), 
      min: this.checkingNegativeProps(props.min),
      max: this.checkingNegativeProps(props.max),
      focus: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      const val = this.checkingValueProps(this.props.value)
      this.setState({ value: val});
    }
    if (this.props.max !== prevProps.max) {
      const max = this.checkingNegativeProps(this.props.max); 
      this.setState({ max: max});
    }
    if (this.props.min !== prevProps.min) {
      const min = this.checkingNegativeProps(this.props.min); 
      this.setState({ min: min});
    }
  }

  onChangeHandler = (e) => {
    this.slider.current.ondragstart = () => false;
    this.setState({ value: e.target.value });
    this.props.onChange && this.props.onChange(parseInt(e.target.value));
  }

  onRight = () => {
    let val = parseInt(this.state.value) + 1;
    val = this.checkingMinMaxVal(val);
    this.setState({ value: val });
    this.props.onChange && this.props.onChange(parseInt(val));
  }

  onLeft = () => {
    let val = parseInt(this.state.value) - 1;
    val = this.checkingMinMaxVal(val);
    this.setState({ value: val });
    this.props.onChange && this.props.onChange(parseInt(val)); 
  }

  onKeyUpHandler = (e) => {
    if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      if(e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        this.onRight();
      } 
      if(e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        this.onLeft();
      }
    }
  }

  onFocusHandler = () => {
    this.setState({focus: true});
  }

  onBlurHandler = () => {
    this.setState({focus: false});
  }

  checkingValueProps = (val) => {
    let value = this.checkingNegativeProps(val);
    return value.toString();
  }

  checkingMinMaxVal = (value) => {
    let val = parseInt(value);

    if (val < this.state.min ) {
      val = this.state.min
    } else if (val > this.state.max) {
      val = this.state.max
    }

    return val.toString();
  }

  checkingNegativeProps = (val) => {
    const value = val <= 0 ? 0 : val;
    return value; 
  }

  render() {
    const { disabled, onChange, ...rest } = this.props;
    const { value, focus, min, max } = this.state;

    return (
      <StyledWrap 
        tabIndex="0"
        { ...rest } 
        onFocus = {this.onFocusHandler}
        onBlur = {this.onBlurHandler}
        onKeyDown={this.onKeyUpHandler}
      >
        <Arrow 
          className='arrow-left' 
          focus={focus}
          disabled={disabled}
          onClick={this.onLeft}
        />
        <StyledSlider
          max={ max } 
          min={ min }
          value={value} 
          disabled={disabled}   
          ref={this.slider}       
          onChange={this.onChangeHandler}
        /> 
        <Arrow 
          dir="right" 
          focus={focus}
          disabled={disabled}
          onClick={this.onRight} 
        />
      </StyledWrap>
    );
  }
}

Slider.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func
}

Slider.defaultProps = {
  disabled: false,
  value: 5,
  max: 30,
  min: 0,
}

export default Slider;