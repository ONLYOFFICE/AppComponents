import React from "react";
import Scrollbar from "../Scrollbar";
import PropTypes from "prop-types";

class CustomScrollbars extends React.Component {
  refSetter = (scrollbarsRef, forwardedRef) => {
    if (scrollbarsRef) {
      forwardedRef(scrollbarsRef.view);
    } else {
      forwardedRef(null);
    }
  };

  render() {
    const {
      stype,
      onScroll,
      forwardedRef,
      style,
      children,
      ...rest
    } = this.props;

    //console.log("CustomScrollbars", this.props);
    return (
      <Scrollbar
        ref={scrollbarsRef =>
          this.refSetter.bind(this, scrollbarsRef, forwardedRef)
        }
        style={{ ...style, overflow: "hidden" }}
        onScroll={onScroll}
        stype={stype}
        {...rest}
      >
        {children}
      </Scrollbar>
    );
  }
}

CustomScrollbars.propTypes = {
  stype: PropTypes.oneOf([
    "smallWhite",
    "smallBlack",
    "preMediumBlack",
    "mediumBlack"
  ]),
  onScroll: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.any,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ])
};

CustomScrollbars.defaultProps = {
  stype: "mediumBlack"
};

const CustomScrollbarsVirtualList = React.forwardRef((props, ref) => (
  <CustomScrollbars {...props} forwardedRef={ref} />
));

export default CustomScrollbarsVirtualList;
