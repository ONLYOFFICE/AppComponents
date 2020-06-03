import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { 
  StyledSwitchButton,  
  StyledHiddenInput 
} from './StyledSwitchButton';

import { 
  SwitchButtonActiveUnchecked,
  SwitchButtonActiveChecked
} from './svg';

class SwitchButton extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { checked: props.checked }
  }

  onChangeHandler = (e) => {
    this.setState({ checked: e.target.checked });
    this.props.onChange && this.props.onChange(e);
  }

  renderSwitch = (checked) => {
    return (
      <>
      {checked
        ? <SwitchButtonActiveChecked />
        : <SwitchButtonActiveUnchecked />
      }
      </>
    );
  };

  render() {
    // console.log('SwitchButton render');

    const { checked } = this.state;
    const { disabled, onChange, ...rest } = this.props;

    const btnSwitch = this.renderSwitch(checked);

    return (
      <StyledSwitchButton {...rest} checked={checked} disabled={disabled} >
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