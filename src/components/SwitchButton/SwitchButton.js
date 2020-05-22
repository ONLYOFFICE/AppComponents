import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { 
  StyledSwitchButton,  
  StyledHiddenInput 
} from './StyledSwitchButton';

import { 
  SwitchButtonActiveUnchecked,
  SwitchButtonActiveChecked
} from './svg';

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

  renderSwitch = () => {
    const { checked } = this.props;

    return (
      <>
      {checked
        ? <SwitchButtonActiveChecked />
        : <SwitchButtonActiveUnchecked />
      }
      </>
    );
  }

  render() {
    const { disabled, checked, onChange, ...rest } = this.props;

    const btnSwitch = this.renderSwitch();

    return (
      <StyledSwitchButton checked={checked} disabled={disabled} {...rest}>
        {btnSwitch}
        <StyledHiddenInput
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={this.onChangeHandler}
        />
      </StyledSwitchButton> 
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