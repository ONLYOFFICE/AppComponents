import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { 
  StyledSwitchButton, 
  StyledChecked, 
  StyledHiddenInput 
} from './StyledSwitchButton';

class SwitchButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.checked !== prevProps.checked) {
      this.setState({ checked: this.props.checked });
    }
  }

  onChangeHandler = (e) => {
    this.setState({ checked: e.target.checked });
    this.props.onChange && this.props.onChange(e);
  }

  render() {
    const { disabled, onChange, ...rest } = this.props;
    const { checked } = this.state;

    return (
      <label {...rest}>
        <StyledSwitchButton checked={checked} disabled={disabled}>
          <div className="inner-div"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <StyledChecked checked={checked} disabled={disabled} />
          <StyledHiddenInput
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={this.onChangeHandler}
          />
        </StyledSwitchButton> 
      </label>
    );
  }
}

SwitchButton.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

SwitchButton.defaultProps = {
  disabled: false,
  checked: false
}

export default SwitchButton;