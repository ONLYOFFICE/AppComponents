import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import StyledTooltip from "./StyledTooltip";

class Tooltip extends Component {
  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  render() {
    const {
      id,
      place,
      effect,
      getContent,
      offsetTop,
      offsetRight,
      offsetBottom,
      offsetLeft,
      children,
      afterShow,
      afterHide,
      reference,
      delayShow,
      delayHide,
      overridePosition,
      ...rest
    } = this.props;

    return (
      <StyledTooltip {...rest}>
        <ReactTooltip
          id={id}
          ref={reference}
          getContent={getContent}
          type="light"
          effect={effect}
          place={place}
          offset={{
            top: offsetTop,
            right: offsetRight,
            bottom: offsetBottom,
            left: offsetLeft
          }}
          wrapper="div"
          afterShow={afterShow}
          afterHide={afterHide}
          isCapture={true}
          overridePosition={overridePosition}
          delayShow={delayShow}
          delayHide={delayHide}
        >
          {children}
        </ReactTooltip>
      </StyledTooltip>
    );
  }
}

Tooltip.propTypes = {
  id: PropTypes.string.isRequired,
  effect: PropTypes.oneOf(["float", "solid"]),
  place: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  getContent: PropTypes.func,
  afterHide: PropTypes.func,
  afterShow: PropTypes.func,
  offsetTop: PropTypes.number,
  offsetRight: PropTypes.number,
  offsetBottom: PropTypes.number,
  offsetLeft: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]),
  delayShow: PropTypes.number,
  delayHide: PropTypes.number,
  overridePosition: PropTypes.func
};

Tooltip.defaultProps = {
  effect: "float",
  place: "top",
  offsetTop: 0,
  offsetRight: 0,
  offsetBottom: 0,
  offsetLeft: 0,
  delayShow: 0,
  delayHide: 0
};

export default Tooltip;
