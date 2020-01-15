import { Scrollbars } from "react-custom-scrollbars";
import styled from "styled-components";
import { Base } from "../../themes";

const StyledScrollbar = styled(Scrollbars)`
  .nav-thumb-vertical {
    background-color: ${props =>
      props.theme.scrollbar.backgroundColorVertical} !important;
  }
  .nav-thumb-horizontal {
    background-color: ${props =>
      props.theme.scrollbar.backgroundColorHorizontal} !important;
  }
`;

StyledScrollbar.defaultProps = {
  theme: Base
};

export default StyledScrollbar;
