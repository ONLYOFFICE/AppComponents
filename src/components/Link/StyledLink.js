import styled, { css } from "styled-components";
import Text from "../Text";

const hoveredCss = css`
  text-decoration: ${props =>
    props.type === "page"
      ? props.theme.link.hover.page.textDecoration
      : props.theme.link.hover.textDecoration};
`;

const StyledLink = styled(Text)`
  text-decoration: ${props => props.theme.link.textDecoration};
  user-select: ${props => props.theme.link.userSelect};
  cursor: ${props => props.theme.link.cursor};
  opacity: ${props => props.semitransparent && props.theme.link.opacity};
  color: ${props => (props.color ? props.color : props.theme.link.color)};
  line-height: ${props => props.theme.link.lineHeight};

  &:hover {
    ${props => !props.noHover && hoveredCss};
  }

  ${props => !props.noHover && props.hovered && hoveredCss}

  ${props =>
    props.textOverflow &&
    css`
      display: inline-block;
      max-width: 100%;
    `}
`;

export default StyledLink;
