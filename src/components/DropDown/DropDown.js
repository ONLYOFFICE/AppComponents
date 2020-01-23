import React, { memo } from "react";
import PropTypes from "prop-types";
import CustomScrollbarsVirtualList from "../Scrollbar/CustomScrollbarsVirtualList";
import DropDownItem from "../DropDownItem";
import Backdrop from "../Backdrop";
import { FixedSizeList } from "react-window";
import onClickOutside from "react-onclickoutside";
import StyledDropdown from "./StyledDropDown";

const Row = memo(({ data, index, style }) => {
  const option = data[index];

  return <DropDownItem {...option.props} style={style} />;
});

Row.propTypes = {
  index: PropTypes.number,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Row.displayName = "Row";

class DropDown extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      width: this.dropDownRef ? this.dropDownRef.current.offsetWidth : 240,
      directionX: props.directionX,
      directionY: props.directionY
    };

    this.dropDownRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.open) {
      this.props.enableOnClickOutside();
      this.checkPosition();
    }
  }

  componentWillUnmount() {
    this.props.disableOnClickOutside();
  }

  componentDidUpdate(prevProps) {
    if (this.props.open !== prevProps.open) {
      if (this.props.open) {
        this.props.enableOnClickOutside();
        this.checkPosition();
      } else {
        this.props.disableOnClickOutside();
      }
    }
  }

  handleClickOutside = e => {
    //console.log(`DropDown handleClickOutside`, e);
    this.toggleDropDown(e);
  };

  toggleDropDown = e => {
    this.props.clickOutsideAction &&
      this.props.clickOutsideAction(e, !this.props.open);
  };

  checkPosition = () => {
    if (!this.dropDownRef.current) return;

    const rects = this.dropDownRef.current.getBoundingClientRect();
    const container = { width: window.innerWidth, height: window.innerHeight };

    const left = rects.left < 0;
    const right = rects.right > container.width;

    let newDirection = {};

    newDirection.directionX = left
      ? "left"
      : right
      ? "right"
      : this.props.directionX;

    this.setState({
      directionX: newDirection.directionX,
      width: rects.width
    });
  };

  render() {
    const { maxHeight, withBackdrop, children, open } = this.props;
    const { directionX, directionY, width } = this.state;
    const isTablet = window.innerWidth < 1024; //TODO: Make some better
    const itemHeight = isTablet ? 36 : 32;
    const fullHeight = children && children.length * itemHeight;
    const calculatedHeight =
      fullHeight > 0 && fullHeight < maxHeight ? fullHeight : maxHeight;
    const dropDownMaxHeightProp = maxHeight
      ? { height: calculatedHeight + "px" }
      : {};
    //console.log("DropDown render");

    //console.log("props", this.props);
    return (
      <>
        <StyledDropdown
          ref={this.dropDownRef}
          {...this.props}
          directionX={directionX}
          directionY={directionY}
          {...dropDownMaxHeightProp}
        >
          {maxHeight ? (
            <FixedSizeList
              height={calculatedHeight}
              width={width}
              itemSize={itemHeight}
              itemCount={children.length}
              itemData={children}
              outerElementType={CustomScrollbarsVirtualList}
            >
              {Row}
            </FixedSizeList>
          ) : (
            children
          )}
        </StyledDropdown>
        {withBackdrop && open && isTablet && (
          <Backdrop visible zIndex={149} onClick={this.toggleDropDown} />
        )}
      </>
    );
  }
}

DropDown.propTypes = {
  children: PropTypes.any,
  directionX: PropTypes.oneOf(["left", "right"]),
  directionY: PropTypes.oneOf(["bottom", "top"]),
  open: PropTypes.bool,
  manualWidth: PropTypes.string,
  manualX: PropTypes.string,
  manualY: PropTypes.string,
  maxHeight: PropTypes.number,
  withBackdrop: PropTypes.bool,
  clickOutsideAction: PropTypes.func,
  enableOnClickOutside: PropTypes.func,
  disableOnClickOutside: PropTypes.func
};

DropDown.defaultProps = {
  directionX: "left",
  directionY: "bottom",
  withBackdrop: true
};

const EnhancedComponent = onClickOutside(DropDown);

class DropDownContainer extends React.Component {
  render() {
    return <EnhancedComponent disableOnClickOutside={true} {...this.props} />;
  }
}

export default DropDownContainer;
