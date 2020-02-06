import styled from "styled-components";
import { NoUserSelect } from "../../utils/commonStyles";
import { Base } from "../../themes";
import Box from "../Box";

const StyledContainer = styled(Box)`
  .toggle-content_span {
    display: flex;
    cursor: pointer;
    ${NoUserSelect}

    svg {
      path {
        fill: ${props => props.theme.toggleContent.iconColor};
      }
    }
  }
  .toggle-content_arrow {
    margin: ${props => props.theme.toggleContent.arrowMargin};
    transform: ${props => props.open && props.theme.toggleContent.transform};
  }
  .toggle-content {
    display: ${props => (props.open ? "block" : "none")};
    padding: ${props => props.theme.toggleContent.contentPadding};
  }

  .toggle-content_heading {
    box-sizing: border-box;
    height: ${props => props.theme.toggleContent.headingHeight};
    line-height: ${props => props.theme.toggleContent.headingHeight};

    &:hover {
      border-bottom: ${props => props.theme.toggleContent.hoverBorderBottom};
    }
  }
`;

StyledContainer.defaultProps = { theme: Base };

export { StyledContainer };
