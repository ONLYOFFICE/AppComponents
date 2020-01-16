import React from "react";
import PropTypes from "prop-types";
import {
  CheckboxIcon,
  CheckboxCheckedIcon,
  CheckboxIndeterminateIcon
} from "./svg";
import Text from "../Text";
import { StyledCheckbox, StyledHiddenInput } from "./StyledCheckbox";

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
      <Text
        as="span"
        className="checkbox-text"
        reverse={reverse}
        disabled={disabled}
      >
        {label}
      </Text>
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
    const { disabled, label, reverse } = this.props;
    const { onChange, ...rest } = this.props;

    const firstComponent = reverse ? this.renderLabel() : this.renderCheckbox();
    const secondComponent = reverse
      ? this.renderCheckbox()
      : this.renderLabel();

    return (
      <StyledCheckbox {...rest}>
        {label ? (
          <>
            {firstComponent}
            {secondComponent}
          </>
        ) : (
          this.renderCheckbox()
        )}

        <StyledHiddenInput
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
