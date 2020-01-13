import styled, { css } from "styled-components";

const StyledRadioButtonGroup = styled.div`
  ${props =>
    (props.orientation === "horizontal" &&
      css`
        display: flex;
      `) ||
    (props.orientation === "vertical" &&
      css`
        display: block;
      `)};

  width: ${props => props.width};
`;

export default StyledRadioButtonGroup;
