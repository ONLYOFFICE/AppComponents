import styled from "styled-components";
import { IconArrow } from "./svg";
import { NoUserSelect } from "../../utils/commonStyles";
import { Base } from "../../themes";

const StyledContainer = styled.div`
  .span-toggle-content {
    display: flex;
    cursor: pointer;
    ${NoUserSelect}

    svg {
      path {
        fill: ${props => props.theme.toggleContent.iconColor};
      }
    }
  }

  .heading-toggle-content {
    box-sizing: border-box;
    height: ${props => props.theme.toggleContent.headingHeight};
    line-height: ${props => props.theme.toggleContent.headingHeight};

    &:hover {
      border-bottom: ${props => props.theme.toggleContent.hoverBorderBottom};
    }
  }
`;

const StyledContent = styled.div`
  display: ${props => (props.open ? "block" : "none")};
  padding: ${props => props.theme.toggleContent.contentPadding};
`;

const StyledArrow = styled(IconArrow)`
  margin: ${props => props.theme.toggleContent.arrowMargin};
  transform: ${props => props.open && props.theme.toggleContent.transform};
`;

StyledContainer.defaultProps = { theme: Base };
StyledContent.defaultProps = { theme: Base };
StyledArrow.defaultProps = { theme: Base };

export { StyledContainer, StyledContent, StyledArrow };
