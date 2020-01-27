import ComboButton from "./ComboButton";
import DropDown from "../DropDown";
import DropDownItem from "../DropDownItem";
import PropTypes from "prop-types";
import React from "react";
import isEqual from "lodash/isEqual";
import { StyledComboBox } from "./StyledComboBox";

class ComboBox extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = {
      open: props.open,
      selectedOption: props.selectedOption
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const needUpdate =
      !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);

    return needUpdate;
  }

  stopAction = e => e.preventDefault();

  setIsOpen = open => this.setState({ open: open });

  handleClickOutside = e => {
    if (this.ref.current.contains(e.target)) return;

    this.setState({ open: !this.state.open }, () => {
      this.props.toggleAction && this.props.toggleAction(e, this.state.open);
    });
  };

  comboBoxClick = e => {
    if (this.props.disabled || (e && e.target.closest(".optionalBlock")))
      return;

    this.setState({ open: !this.state.open }, () => {
      this.props.toggleAction && this.props.toggleAction(e, this.state.open);
    });
  };

  optionClick = option => {
    this.setState({
      open: !this.state.open,
      selectedOption: option
    });

    this.props.onSelect && this.props.onSelect(option);
  };

  componentDidUpdate(prevProps) {
    if (this.props.open !== prevProps.open) {
      this.setIsOpen(this.props.open);
    }

    if (this.props.selectedOption !== prevProps.selectedOption) {
      this.setState({ selectedOption: this.props.selectedOption });
    }
  }

  render() {
    //console.log("ComboBox render");
    const {
      dropDownMaxHeight,
      directionX,
      directionY,
      scaled,
      size,
      options,
      advancedOptions,
      disabled,
      children,
      noBorder,
      scaledOptions,
      displayType,
      toggleAction
    } = this.props;
    const { open, selectedOption } = this.state;

    const dropDownMaxHeightProp = dropDownMaxHeight
      ? { maxHeight: dropDownMaxHeight }
      : {};
    const dropDownManualWidthProp = scaledOptions
      ? { manualWidth: "100%" }
      : {};

    const optionsLength = options.length
      ? options.length
      : displayType !== "toggle"
      ? 0
      : 1;

    const advancedOptionsLength = advancedOptions
      ? advancedOptions.props.children.length
      : 0;

    return (
      <StyledComboBox
        ref={this.ref}
        disabled={disabled}
        scaled={scaled}
        size={size}
        data={selectedOption}
        onClick={this.comboBoxClick}
        toggleAction={toggleAction}
        {...this.props}
      >
        <ComboButton
          noBorder={noBorder}
          disabled={disabled}
          selectedOption={selectedOption}
          withOptions={optionsLength > 0}
          optionsLength={optionsLength}
          withAdvancedOptions={advancedOptionsLength > 0}
          innerContainer={children}
          innerContainerClassName="optionalBlock"
          open={open}
          size={size}
          scaled={scaled}
        />
        {displayType !== "toggle" && (
          <DropDown
            directionX={directionX}
            directionY={directionY}
            manualY="102%"
            open={open}
            clickOutsideAction={this.handleClickOutside}
            {...dropDownMaxHeightProp}
            {...dropDownManualWidthProp}
          >
            {advancedOptions
              ? advancedOptions
              : options.map(option => (
                  <DropDownItem
                    {...option}
                    key={option.key}
                    disabled={
                      option.disabled || option.label === selectedOption.label
                    }
                    onClick={this.optionClick.bind(this, option)}
                  />
                ))}
          </DropDown>
        )}
      </StyledComboBox>
    );
  }
}

ComboBox.propTypes = {
  advancedOptions: PropTypes.element,
  children: PropTypes.any,
  directionX: PropTypes.oneOf(["left", "right"]),
  directionY: PropTypes.oneOf(["bottom", "top"]),
  displayType: PropTypes.oneOf(["default", "toggle"]),
  dropDownMaxHeight: PropTypes.number,
  disabled: PropTypes.bool,
  noBorder: PropTypes.bool,
  onSelect: PropTypes.func,
  open: PropTypes.bool,
  options: PropTypes.array.isRequired,
  scaled: PropTypes.bool,
  scaledOptions: PropTypes.bool,
  selectedOption: PropTypes.object.isRequired,
  size: PropTypes.oneOf(["base", "middle", "big", "huge", "content"]),
  toggleAction: PropTypes.func
};

ComboBox.defaultProps = {
  displayType: "default",
  disabled: false,
  noBorder: false,
  scaled: true,
  scaledOptions: false,
  size: "base"
};

export default ComboBox;
