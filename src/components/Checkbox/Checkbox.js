import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import {
  CheckboxIcon,
  CheckboxCheckedIcon,
  CheckboxIndeterminateIcon
} from "./svg";
import Text from "../Text";

const disableColor = "#A3A9AE";
const hoverColor = disableColor;

const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0;
  user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;

  .checkbox {
    margin-right: 8px;
  }

  ${props =>
    props.isDisabled
      ? css`
          cursor: not-allowed;
        `
      : css`
          cursor: pointer;

          &:hover {
            svg {
              rect:first-child {
                stroke: ${hoverColor};
              }
            }
          }
        `}
`;

const HiddenInput = styled.input`
  opacity: 0.0001;
  position: absolute;
  right: 0;
  z-index: -1;
`;

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = {
      checked: props.isChecked
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    this.ref.current.indeterminate = this.props.isIndeterminate;
  }

  componentDidUpdate(prevProps) {
    if (this.props.isIndeterminate !== prevProps.isIndeterminate) {
      this.ref.current.indeterminate = this.props.isIndeterminate;
    }
    if (this.props.isChecked !== prevProps.isChecked) {
      this.setState({ checked: this.props.isChecked });
    }
  }

  onInputChange(e) {
    this.setState({ checked: e.target.checked });
    this.props.onChange && this.props.onChange(e);
  }

  render() {
    //console.log("Checkbox render");
    const {
      isDisabled,
      id,
      className,
      label,
      style,
      value,
      isChecked,
      isIndeterminate
    } = this.props;
    const colorProps = isDisabled ? { color: disableColor } : {};
    const newProps = { className: "checkbox" };

    return (
      <Label
        id={id}
        style={style}
        isDisabled={isDisabled}
        className={className}
      >
        <HiddenInput
          type="checkbox"
          checked={this.state.checked}
          disabled={isDisabled}
          ref={this.ref}
          value={value}
          onChange={this.onInputChange}
        />

        <>
          {React.createElement(
            isIndeterminate
              ? CheckboxIndeterminateIcon
              : isChecked
              ? CheckboxCheckedIcon
              : CheckboxIcon,
            { ...newProps }
          )}
        </>

        {this.props.label && (
          <Text as="span" {...colorProps}>
            {label}
          </Text>
        )}
      </Label>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,

  isChecked: PropTypes.bool,
  isIndeterminate: PropTypes.bool,
  isDisabled: PropTypes.bool,

  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Checkbox.defaultProps = {
  isChecked: false
};

export default Checkbox;
