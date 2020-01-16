import React from "react";
import PropTypes from "prop-types";
import StyledScrollbar from "./StyledScrollbar";

class CustomScrollbars extends React.Component {
  refSetter = (scrollbarsRef, forwardedRef) => {
    if (scrollbarsRef) {
      forwardedRef(scrollbarsRef.view);
    } else {
      forwardedRef(null);
    }
  };

  render() {
    const { stype, onScroll, forwardedRef, children, ...rest } = this.props;

    //console.log("CustomScrollbars", this.props);
    return (
      <StyledScrollbar
        ref={scrollbarsRef =>
          this.refSetter.bind(this, scrollbarsRef, forwardedRef)
        }
        onScroll={onScroll}
        stype={stype}
        {...rest}
      >
        {children}
      </StyledScrollbar>
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
