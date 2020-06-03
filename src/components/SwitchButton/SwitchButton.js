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

const SwitchButton = ({ checked, disabled, onChange, ...rest}) => {
  const renderSwitch = () => {
    return (
      <>
      {checked
        ? <SwitchButtonActiveChecked />
        : <SwitchButtonActiveUnchecked />
      }
      </>
    );
  };
  
  const btnSwitch = renderSwitch(checked);

  //console.log('SwitchButton render');
  return (
    <StyledSwitchButton {...rest} checked={checked} disabled={disabled} >
      {btnSwitch}
      <StyledHiddenInput
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
    </StyledSwitchButton> 
  );

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