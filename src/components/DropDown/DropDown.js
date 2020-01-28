import React, { memo } from "react";
import PropTypes from "prop-types";
import DropDownItem from "../DropDownItem";
import Backdrop from "../Backdrop";
import { FixedSizeList } from "react-window";
import onClickOutside from "react-onclickoutside";
import { StyledDropdown, StyledCustomScrollbarsVirtualList } from "./StyledDropDown";
import { size } from "../../utils/device";

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
      width: 240,
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
    if (
      this.props.directionX !== prevProps.directionX ||
      this.props.directionY !== prevProps.directionY
    ) {
      this.setState({
        directionX: this.props.directionX,
        directionY: this.props.directionY
      });
    }
  }

  handleClickOutside = e => {
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
    const { maxHeight, children } = this.props;
    const { directionX, directionY, width } = this.state;
    const tabletHeight = 36;
    const height = 32;

    const isTablet = window.innerWidth < size.tablet;
    const itemHeight = isTablet ? tabletHeight : height;
    const fullHeight = children && children.length * itemHeight;
    const calculatedHeight =
      fullHeight > 0 && fullHeight < maxHeight ? fullHeight : maxHeight;
    const dropDownMaxHeightProp = maxHeight
      ? { height: calculatedHeight + "px" }
      : {};

    //console.log("DropDown render");
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
              outerElementType={StyledCustomScrollbarsVirtualList}
            >
              {Row}
            </FixedSizeList>
          ) : (
            children
          )}
        </StyledDropdown>
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
  clickOutsideAction: PropTypes.func,
  enableOnClickOutside: PropTypes.func,
  disableOnClickOutside: PropTypes.func
};

DropDown.defaultProps = {
  directionX: "left",
  directionY: "top"
};

const EnhancedComponent = onClickOutside(DropDown);

class DropDownContainer extends React.Component {
  render() {
    return <EnhancedComponent disableOnClickOutside={true} {...this.props} />;
  }
}

export default DropDownContainer;
