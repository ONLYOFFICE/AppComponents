import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledSlider, StyledWrap, Arrow } from './StyledSlider';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.slider = React.createRef();
    this.state = {
      value: this.props.value, 
      min: this.props.min,
      max: this.props.max,
      focus: false
    };
  }
  
  componentDidMount() {
    const min = this.checkingNegativeProps(this.props.min);
    const max = this.checkingNegativeProps(this.props.max);

    this.setState({
       min: min,
       max: max
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({ value: this.props.value});
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
    this.props.onChange && this.props.onChange(e.target.value);
  }

  onRight = () => {
    
    let val = parseInt(this.state.value) + 1;
    val = this.checkingMinMaxVal(val);
    this.setState({ value: val });
    this.props.onChange && this.props.onChange(val);
  }

  onLeft = () => {
    let val = parseInt(this.state.value) - 1;
    val = this.checkingMinMaxVal(val);
    this.setState({ value: val });
    this.props.onChange && this.props.onChange(val); 
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

  onFocusHandler = () => {
    this.setState({focus: true})
  }

  onBlurHandle = () => {
    this.setState({focus: false})
  }

  render() {
    const { disabled, onChange, ...rest } = this.props;
    const { value, focus, min, max } = this.state;

    return (
      <StyledWrap 
        tabIndex="0"
        { ...rest } 
        onFocus = {this.onFocusHandler}
        onBlur = {this.onBlurHandle}
        onClick={this.click}
      >
        <Arrow  
          focus={focus}
          disabled={disabled}
          onClick={this.onLeft}
        />
        <StyledSlider
          max={ max } 
          min={ min }
          value={value} 
          disabled={disabled}          
          onChange={this.onChangeHandler} 
          ref={this.slider}
          
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