import styled from "styled-components";
import Box from "../Box";
import { Base } from "../../themes";
import { NoUserSelect } from "../../utils/commonStyles";

const StyledAvatar = styled(Box)`
  position: relative;
  width: ${props =>
    (props.size === "small" && props.theme.avatar.width.small) ||
    (props.size === "medium" && props.theme.avatar.width.medium) ||
    (props.size === "big" && props.theme.avatar.width.big) ||
    (props.size === "max" && props.theme.avatar.width.max)};
  height: ${props =>
    (props.size === "small" && props.theme.avatar.height.small) ||
    (props.size === "medium" && props.theme.avatar.height.medium) ||
    (props.size === "big" && props.theme.avatar.height.big) ||
    (props.size === "max" && props.theme.avatar.height.max)};
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

  ${NoUserSelect}
`;

const StyledInitialsContainer = styled(Box)`
  color: ${props => props.theme.avatar.initialsContainer.color};
  position: ${props => props.theme.avatar.initialsContainer.position};
  left: ${props => props.theme.avatar.initialsContainer.left};
  top: ${props => props.theme.avatar.initialsContainer.top};
  transform: ${props => props.theme.avatar.initialsContainer.transform};
  font-weight: ${props => props.theme.avatar.initialsContainer.fontWeight};
  font-size: ${props =>
    (props.size === "small" && props.theme.avatar.fontSize.small) ||
    (props.size === "medium" && props.theme.avatar.fontSize.medium) ||
    (props.size === "big" && props.theme.avatar.fontSize.big) ||
    (props.size === "max" && props.theme.avatar.fontSize.max)};

  ${NoUserSelect}
`;

StyledAvatar.defaultProps = { theme: Base };
StyledInitialsContainer.defaultProps = { theme: Base };
StyledImage.defaultProps = { theme: Base };
StyledImageContainer.defaultProps = { theme: Base };

export {
  StyledAvatar,
  StyledInitialsContainer,
  StyledImage,
  StyledImageContainer
};
