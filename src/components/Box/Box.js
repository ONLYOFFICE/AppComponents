import React, {forwardRef} from "react";
import PropTypes from 'prop-types';
import StyledBox from './StyledBox';

const Box = forwardRef(({ tag, as, ...rest }, ref) => {
  //console.log("Box render", rest)
  return (
    <StyledBox as={!as && tag ? tag : as} ref={ref} {...rest} />
  );
});

Box.propTypes = {
  as: PropTypes.string,
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  backgroundProp: PropTypes.string,
  borderProp: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  displayProp: PropTypes.string,
  flexBasis: PropTypes.string,
  flexDirection: PropTypes.string,
  flexProp: PropTypes.string,
  flexWrap: PropTypes.string,
  gridArea: PropTypes.string,
  heightProp: PropTypes.string,
  justifyContent: PropTypes.string,
  justifyItems: PropTypes.string,
  justifySelf: PropTypes.string,
  marginProp: PropTypes.string,
  overflowProp: PropTypes.string,
  paddingProp: PropTypes.string,
  tag: PropTypes.string,
  textAlign: PropTypes.string,
  widthProp: PropTypes.string
}

Box.defaultProps = {
  displayProp: 'block'
};

Box.displayName = "Box";

export default Box;