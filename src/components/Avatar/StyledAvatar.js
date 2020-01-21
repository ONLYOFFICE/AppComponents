import styled, { css } from "styled-components";
import Box from "../Box";

const avatarBackground = "#ECEEF1";

const noneUserSelect = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const StyledAvatar = styled(Box)`
  position: relative;
  width: ${props =>
    (props.size === "max" && props.theme.avatar.width.max) ||
    (props.size === "big" && props.theme.avatar.width.big) ||
    (props.size === "medium" && props.theme.avatar.width.medium) ||
    (props.size === "small" && props.theme.avatar.width.small)};
  height: ${props =>
    (props.size === "max" && props.theme.avatar.height.max) ||
    (props.size === "big" && props.theme.avatar.height.big) ||
    (props.size === "medium" && props.theme.avatar.height.medium) ||
    (props.size === "small" && props.theme.avatar.height.small)};
`;

const AvatarWrapper = styled(Box)`
  border-radius: ${props => props.theme.avatar.avatarContent.borderRadius};
  height: ${props => props.theme.avatar.avatarContent.height};
  background-color: ${props =>
    (props.source === "" &&
      props.userName !== "" &&
      props.theme.avatar.avatarContent.backgroundColor) ||
    avatarBackground};

  & > svg {
    display: ${props => props.theme.avatar.avatarContent.svg.display};
    width: ${props => props.theme.avatar.avatarContent.svg.width};
    height: ${props => props.theme.avatar.avatarContent.svg.height};
    margin: ${props => props.theme.avatar.avatarContent.svg.margin};
  }

  .empty-icon {
    border-radius: 50%;
  }
`;

const EditContainer = styled(Box)`
  ${props => props.theme.avatar.editContainer.position};
  ${props => props.theme.avatar.editContainer.width};
  ${props => props.theme.avatar.editContainer.height};
  ${props => props.theme.avatar.editContainer.top};
  ${props => props.theme.avatar.editContainer.left};
  ${props => props.theme.avatar.editContainer.transform};
  ${props => props.theme.avatar.editContainer.padding};
  ${props => props.theme.avatar.editContainer.textAlign};
  ${props => props.theme.avatar.editContainer.lineHeight};
  ${props => props.theme.avatar.editContainer.borderRadius};

  background: ${props =>
    props.gradient
      ? props.theme.avatar.editContainer.backgroundGradient
      : props.theme.avatar.editContainer.backgroundTransparent};
`;

const EditLink = styled(Box)`
  ${props => props.theme.avatar.editLink.padding};

  a:hover {
    border-bottom: ${props => props.theme.avatar.editLink.hover.borderBottom};
  }

  span {
    display: ${props => props.theme.avatar.editLink.span.display};
    max-width: ${props => props.theme.avatar.editLink.span.maxWidth};
    text-decoration: ${props =>
      props.theme.avatar.editLink.span.textDecoration};
  }

  .link {
    color: ${props => props.theme.avatar.editLink.editLinkColor};
  }
`;

/*const RoleWrapper = styled(Box)`
  position: absolute;
  left: ${props =>
    (props.size === "max" && "0px") ||
    (props.size === "big" && "0px") ||
    (props.size === "medium" && "-2px") ||
    (props.size === "small" && "-2px")};
  bottom: ${props =>
    (props.size === "max" && "0px") ||
    (props.size === "big" && "5px") ||
    (props.size === "medium" && "3px") ||
    (props.size === "small" && "3px")};
  width: ${props => (props.size === "max" && "24px") || "12px"};
  height: ${props => (props.size === "max" && "24px") || "12px"};
`;*/

const StyledImage = styled.img`
  width: ${props => props.theme.avatar.image.width};
  height: ${props => props.theme.avatar.image.height};
  border-radius: ${props => props.theme.avatar.image.borderRadius};

  ${noneUserSelect}
`;

const NamedAvatar = styled(Box)`
  color: ${props => props.theme.avatar.namedAvatar.color};
  position: ${props => props.theme.avatar.namedAvatar.position};
  left: ${props => props.theme.avatar.namedAvatar.left};
  top: ${props => props.theme.avatar.namedAvatar.top};
  transform: ${props => props.theme.avatar.namedAvatar.transform};
  font-weight: ${props => props.theme.avatar.namedAvatar.fontWeight};
  font-size: ${props =>
    (props.size === "max" && props.theme.avatar.fontSize.max) ||
    (props.size === "big" && props.theme.avatar.fontSize.big) ||
    (props.size === "medium" && props.theme.avatar.fontSize.medium) ||
    (props.size === "small" && props.theme.avatar.fontSize.small)};

  ${noneUserSelect}
`;

export {
  StyledAvatar,
  NamedAvatar,
  StyledImage,
  AvatarWrapper,
  EditContainer,
  EditLink
};
