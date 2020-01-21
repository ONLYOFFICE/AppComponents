import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  StyledAvatar,
  NamedAvatar,
  StyledImage,
  AvatarWrapper,
  EditContainer,
  EditLink
} from "./StyledAvatar";
import { CameraIcon } from "./svg";
import Link from "../Link";

const getInitials = userName =>
  userName
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "")
    .substring(0, 2);

const Initials = props => (
  <NamedAvatar {...props}>{getInitials(props.userName)}</NamedAvatar>
);

Initials.propTypes = {
  userName: PropTypes.string
};

const Avatar = memo(props => {
  //console.log("Avatar render");
  const { size, source, userName, editing, editLabel, editAction } = props;

  const avatarContent = source ? (
    <StyledImage src={source} />
  ) : userName ? (
    <Initials userName={userName} size={size} />
  ) : (
    React.createElement(CameraIcon, { className: "empty-icon" })
  );

  return (
    <StyledAvatar {...props}>
      <AvatarWrapper source={source} userName={userName}>
        {avatarContent}
      </AvatarWrapper>
      {editing && size === "max" && (
        <EditContainer gradient={!!source}>
          <EditLink>
            <Link
              className="link"
              type="action"
              title={editLabel}
              textOverflow={true}
              hovered={true}
              fontSize="14px"
              fontWeight={600}
              onClick={editAction}
            >
              {editLabel}
            </Link>
          </EditLink>
        </EditContainer>
      )}
    </StyledAvatar>
  );
});

Avatar.propTypes = {
  size: PropTypes.oneOf(["max", "big", "medium", "small"]),
  source: PropTypes.string,
  editLabel: PropTypes.string,
  userName: PropTypes.string,
  editing: PropTypes.bool,
  editAction: PropTypes.func
};

Avatar.defaultProps = {
  size: "medium",
  source: "",
  editLabel: "Edit photo",
  userName: "",
  editing: false
};

Avatar.displayName = "Avatar";

export default Avatar;
