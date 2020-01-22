import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  StyledAvatar,
  StyledInitialsContainer,
  StyledImage,
  StyledImageContainer
} from "./StyledAvatar";
import { CameraIcon } from "./svg";

const getInitials = userName =>
  userName
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "")
    .substring(0, 2);

const Initials = props => (
  <StyledInitialsContainer {...props}>
    {getInitials(props.userName)}
  </StyledInitialsContainer>
);

Initials.propTypes = {
  userName: PropTypes.string,
  size: PropTypes.oneOf(["max", "big", "medium", "small"])
};

const Avatar = memo(props => {
  //console.log("Avatar render");
  const { size, source, userName } = props;

  const imageContainer = source ? (
    <StyledImage src={source} />
  ) : userName ? (
    <Initials userName={userName} size={size} />
  ) : (
    <CameraIcon className="empty-icon" />
  );

  return (
    <StyledAvatar {...props}>
      <StyledImageContainer source={source} userName={userName}>
        {imageContainer}
      </StyledImageContainer>
    </StyledAvatar>
  );
});

Avatar.propTypes = {
  size: PropTypes.oneOf(["max", "big", "medium", "small"]),
  source: PropTypes.string,
  userName: PropTypes.string
};

Avatar.defaultProps = {
  size: "medium",
  source: "",
  userName: ""
};

Avatar.displayName = "Avatar";

export default Avatar;
