import styled from "styled-components";
import { IconArrow } from "./svg";

const StyledContainer = styled.div`
  .span-toggle-content {
    display: flex;
    cursor: pointer;
    user-select: none;
  }

  .heading-toggle-content {
    height: 24px;
    line-height: 18px;
    box-sizing: border-box;
    font-style: normal;

    &:hover {
      border-bottom: 1px dashed;
    }
  }
`;

const StyledContent = styled.div`
  color: #333;
  display: ${props => (props.open ? "block" : "none")};
  padding-top: 6px;
`;

const Arrow = styled(IconArrow)`
  margin-right: 9px;
  margin-bottom: 5px;
  transform: ${props => props.open && "rotate(180deg)"};
`;

export { StyledContainer, StyledContent, Arrow };
