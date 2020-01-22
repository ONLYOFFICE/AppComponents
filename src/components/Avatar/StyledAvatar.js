import styled, { css } from "styled-components";
import Box from "../Box";
import { Base } from "../../themes";

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

const StyledImageContainer = styled(Box)`
  border-radius: ${props => props.theme.avatar.imageContainer.borderRadius};
  height: ${props => props.theme.avatar.imageContainer.height};
  background-color: ${props =>
    (props.source === "" &&
      props.userName !== "" &&
      props.theme.avatar.imageContainer.backgroundImage) ||
    props.theme.avatar.imageContainer.background};

  & > svg {
    display: ${props => props.theme.avatar.imageContainer.svg.display};
    width: ${props => props.theme.avatar.imageContainer.svg.width};
    height: ${props => props.theme.avatar.imageContainer.svg.height};
    margin: ${props => props.theme.avatar.imageContainer.svg.margin};
  }

  .empty-icon {
    border-radius: 50%;
  }
`;

const StyledImage = styled.img`
  width: ${props => props.theme.avatar.image.width};
  height: ${props => props.theme.avatar.image.height};
  border-radius: ${props => props.theme.avatar.image.borderRadius};

  ${noneUserSelect}
`;

const StyledinitialsContainer = styled(Box)`
  color: ${props => props.theme.avatar.initialsContainer.color};
  position: ${props => props.theme.avatar.initialsContainer.position};
  left: ${props => props.theme.avatar.initialsContainer.left};
  top: ${props => props.theme.avatar.initialsContainer.top};
  transform: ${props => props.theme.avatar.initialsContainer.transform};
  font-weight: ${props => props.theme.avatar.initialsContainer.fontWeight};
  font-size: ${props =>
    (props.size === "max" && props.theme.avatar.fontSize.max) ||
    (props.size === "big" && props.theme.avatar.fontSize.big) ||
    (props.size === "medium" && props.theme.avatar.fontSize.medium) ||
    (props.size === "small" && props.theme.avatar.fontSize.small)};

  ${noneUserSelect}
`;

StyledAvatar.defaultProps = { theme: Base };
StyledinitialsContainer.defaultProps = { theme: Base };
StyledImage.defaultProps = { theme: Base };
StyledImageContainer.defaultProps = { theme: Base };

export {
  StyledAvatar,
  StyledinitialsContainer,
  StyledImage,
  StyledImageContainer
};
