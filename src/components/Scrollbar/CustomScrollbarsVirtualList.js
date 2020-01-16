import React from "react";
import PropTypes from "prop-types";
import Scrollbar from "./Scrollbar";

class CustomScrollbars extends React.Component {
  refSetter = (scrollbarsRef, forwardedRef) => {
    if (scrollbarsRef) {
      forwardedRef(scrollbarsRef.view);
    } else {
      forwardedRef(null);
    }
  };

  render() {
    const { size, onScroll, forwardedRef, children, ...rest } = this.props;

    //console.log("CustomScrollbars", this.props);
    return (
      <Scrollbar
        ref={scrollbarsRef =>
          this.refSetter.bind(this, scrollbarsRef, forwardedRef)
        }
        onScroll={onScroll}
        size={size}
        {...rest}
      >
        {children}
      </Scrollbar>
    );
  }
}

CustomScrollbars.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "bid"]),
  onScroll: PropTypes.func,
  children: PropTypes.any,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ])
};

CustomScrollbars.defaultProps = {
  size: "medium"
};

const CustomScrollbarsVirtualList = React.forwardRef((props, ref) => (
  <CustomScrollbars {...props} forwardedRef={ref} />
));

export default CustomScrollbarsVirtualList;
