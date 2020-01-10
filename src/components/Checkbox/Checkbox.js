import React from "react";
import PropTypes from "prop-types";
import {
  CheckboxIcon,
  CheckboxCheckedIcon,
  CheckboxIndeterminateIcon
} from "./svg";
import { StyledCheckbox, HiddenInput, StyledText } from "./StyledCheckbox";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = {
      checked: props.checked
    };
  }

  componentDidMount() {
    this.ref.current.indeterminate = this.props.indeterminate;
  }

  componentDidUpdate(prevProps) {
    if (this.props.indeterminate !== prevProps.indeterminate) {
      this.ref.current.indeterminate = this.props.indeterminate;
    }
    if (this.props.checked !== prevProps.checked) {
      this.setState({ checked: this.props.checked });
    }
  }

  onInputChange = e => {
    this.setState({ checked: e.target.checked });
    this.props.onChange && this.props.onChange(e);
  };

  renderLabel = () => {
    const { reverse, disabled, label } = this.props;

    return (
      <StyledText as="span" reverse={reverse} disabled={disabled}>
        {label}
      </StyledText>
    );
  };

  renderCheckbox = () => {
    const { indeterminate, checked } = this.props;

    return (
      <>
        {React.createElement(
          indeterminate
            ? CheckboxIndeterminateIcon
            : checked
            ? CheckboxCheckedIcon
            : CheckboxIcon
        )}
      </>
    );
  };

  render() {
    //console.log("Checkbox render");
    const { disabled, reverse } = this.props;
    const { onChange, ...rest } = this.props;

    return (
      <StyledCheckbox {...rest}>
        {reverse ? (
          <>
            {this.renderLabel()}
            {this.renderCheckbox()}
          </>
        ) : (
          <>
            {this.renderCheckbox()}
            {this.renderLabel()}
          </>
        )}

        <HiddenInput
          type="checkbox"
          checked={this.state.checked}
          disabled={disabled}
          ref={this.ref}
          onChange={this.onInputChange}
        />
      </StyledCheckbox>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  reverse: PropTypes.bool
};

Checkbox.defaultProps = {
  checked: false,
  reverse: false
};

export default Checkbox;
