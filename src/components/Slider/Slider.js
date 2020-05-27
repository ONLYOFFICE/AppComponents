import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledSlider, StyledWrap } from './StyledSlider';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      max: props.max
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({ value: this.props.value });
    }

    if (this.props.max !== prevProps.max) {
      this.setState({ max: this.props.max });
    }

    if (this.props.min !== prevProps.min) {
      this.setState({ min: this.props.min });
    }
  }

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
    this.props.onChange && this.props.onChange(e);
  }

  render() {
    const { disabled, onChange, ... rest } = this.props;
    const { value, max, min } = this.state;

    return (
      <StyledWrap { ...rest }>
        
        <StyledSlider
          max={max} 
          min={ min >= 0 ? min : 0 }
          value={value} 
          disabled={disabled}
          onChange={this.onChangeHandler}/>
        <span>{value}</span>
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