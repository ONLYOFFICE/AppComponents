import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { ReactSVG } from './ReactSVG';
import ReactDOMServer from "react-dom/server";
import { Parser } from "html-to-react";

const iconSizes = {
  small: 12,
  medium: 16,
  big: 24
};

const getSizeStyle = size => {
  switch (size) {
    case "scale":
      return css`
        &:not(:root) {
          width: 100%;
          height: 100%;
        }
      `;
    case "small":
    case "medium":
    case "big":
      return css`
        width: ${iconSizes[size]}px;
        min-width: ${iconSizes[size]}px;
        height: ${iconSizes[size]}px;
        min-height: ${iconSizes[size]}px;
      `;
    default:
      return css`
        width: ${iconSizes.big}px;
        min-width: ${iconSizes.big}px;
        height: ${iconSizes.big}px;
        min-height: ${iconSizes.big}px;
      `;
  }
};
class SvgIcon extends React.Component {
  uniqueId = () => {
    return (
      Math.random()
        .toString(36)
        .substring(2, 5) +
      Math.random()
        .toString(36)
        .substring(2, 5)
    );
  };

  render() {
    const { svgSource, ...rest } = this.props;

    if(typeof svgSource === "function") {
      const svg = React.createElement(svgSource, rest);

      var svgStr = ReactDOMServer.renderToString(svg);

      const matchResult = svgStr.match(/\s*mask id="(\w*)"\s/);

      if (!matchResult || !matchResult.length) return svg;

      svgStr = svgStr.replace(new RegExp(matchResult[1], "g"), this.uniqueId());

      var htmlToReactParser = new Parser();

      var reactComponent = htmlToReactParser.parse(svgStr);

      return reactComponent;
    }
    else {
      return <ReactSVG src={svgSource} {...rest} />;
    }

    

   /*  const { svgSource, ...rest } = this.props;

    const svg = typeof svgSource === "string" 
        ? <ReactSVG src={svgSource} /> // React.createElement(<ReactSVG src={svgSource} />, rest)
        : React.createElement(svgSource, rest); // <Component {...this.props}></Component>;

    var svgStr = ReactDOMServer.renderToString(svg);

    const matchResult = svgStr.match(/\s*mask id="(\w*)"\s/);

    if (!matchResult || !matchResult.length) return svg;

    svgStr = svgStr.replace(new RegExp(matchResult[1], "g"), this.uniqueId());

    var htmlToReactParser = new Parser();
    var reactComponent = htmlToReactParser.parse(svgStr);

    return reactComponent; */
  }
}

SvgIcon.propTypes = {
  svgSource: PropTypes.oneOf([PropTypes.string, PropTypes.element])
}

//export default SvgIcon;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const IconWrapper = ({ fill, stroke, fillPath, strokePath, ...rest }) => (
  <SvgIcon {...rest} />
);
/* eslint-enable react/prop-types */
/* eslint-enable no-unused-vars */

const StyledIcon = styled(IconWrapper)`
  ${props => props.fillPath && props.fill && css`fill: ${props =>props.color};`}
  ${props =>
    props.strokePath &&
    props.stroke &&
    css`stroke: ${props => props.strokeProp};`}

    overflow: hidden;
  vertical-align: middle;
  ${props => getSizeStyle(props.size)}
`;

//StyledIcon.displayName = displayName;
StyledIcon.propTypes = {
  svgSource: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
  color: PropTypes.string,
  strokeProp: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "big", "scale"]),
  fill: PropTypes.bool,
  stroke: PropTypes.bool,
  fillPath: PropTypes.string,
  strokePath: PropTypes.string
};

StyledIcon.defaultProps = {
  fillPath: "*",
  strokePath: "*"
};

export default StyledIcon;
