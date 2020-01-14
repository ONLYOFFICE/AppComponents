import React from "react";
import PropTypes from "prop-types";
import RadioButton from "../RadioButton";
import Box from "../Box";

class RadioButtonGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: this.props.selected
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.selected !== prevProps.selected) {
      this.setState({ selectedOption: this.props.selected });
    }
  }

  onInputChange = e => {
    this.handleOptionChange(e);
    this.props.onClick && this.props.onClick(e);
  };

  render() {
    //console.log("RadioButtonGroup render");
    const { options, orientation, width, name, disabled, spacing } = this.props;
    const { onClick, ...rest } = this.props;

    const display = orientation === "horizontal" ? "flex" : "block";

    return (
      <Box {...rest} displayProp={display} widthProp={width}>
        {options.map(option => {
          return (
            <RadioButton
              key={option.value}
              name={name}
              value={option.value}
              checked={this.state.selectedOption === option.value}
              onChange={this.onInputChange}
              disabled={disabled || option.disabled}
              label={option.label}
              spacing={spacing}
              orientation={orientation}
            />
          );
        })}
      </Box>
    );
  }
}

RadioButtonGroup.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string,
      disabled: PropTypes.bool
    })
  ).isRequired,
  selected: PropTypes.string.isRequired,
  spacing: PropTypes.string,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  width: PropTypes.string
};

RadioButtonGroup.defaultProps = {
  disabled: false,
  selected: undefined,
  spacing: "15px",
  orientation: "horizontal",
  width: "100%"
};

export default RadioButtonGroup;
