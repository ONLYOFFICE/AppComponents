import styled, { css } from "styled-components";

const StyledComboBox = styled.div`
  width: ${props =>
    (props.scaled && "100%") ||
    (props.size === "base" && "173px") ||
    (props.size === "middle" && "300px") ||
    (props.size === "big" && "350px") ||
    (props.size === "huge" && "500px") ||
    (props.size === "content" && "fit-content")};

  position: relative;
  outline: 0;
`;

const StyledArrowIcon = styled.div`
  display: flex;
  align-self: start;
  width: ${props => (props.needDisplay ? "8px" : "0px")};
  flex: 0 0 ${props => (props.needDisplay ? "8px" : "0px")};
  margin-top: ${props => (props.noBorder ? `5px` : `12px`)};
  margin-right: ${props => (props.needDisplay ? "8px" : "0px")};
  margin-left: ${props => (props.needDisplay ? "auto" : "0px")};

  ${props =>
    props.open &&
    css`
      transform: scale(1, -1);
    `}

  .expander-down-icon {
    height: 100%;
    width: 100%;

    g {
      path {
        fill: #a3a9ae;
      }
    }
  }
`;

const StyledComboButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${props => (props.noBorder ? `18px` : `30px`)};
  width: ${props =>
    (props.scaled && "100%") ||
    (props.size === "base" && "173px") ||
    (props.size === "middle" && "300px") ||
    (props.size === "big" && "350px") ||
    (props.size === "huge" && "500px") ||
    (props.size === "content" && "fit-content")};

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  padding-left: 8px;

  background: ${props => (!props.noBorder ? "#FFFFFF" : "none")};

  color: ${props => (props.disabled ? "#D0D5DA" : "#333333")};

  box-sizing: border-box;

  ${props =>
    !props.noBorder &&
    `
    border: 1px solid #D0D5DA;
    border-radius: 3px;
  `}

  border-color: ${props => props.open && "#2DA7DB"};
  
  ${props =>
    props.disabled &&
    !props.noBorder &&
    `
    border-color: #ECEEF1;
    background: #F8F9F9;
  `}

  ${props =>
    !props.noBorder &&
    `
    height: 32px;
  `}

  :hover{
    border-color: ${props => (props.open ? "#2DA7DB" : "#A3A9AE")};
    cursor: ${props =>
      props.disabled || (!props.containOptions && !props.withAdvancedOptions)
        ? "default"
        : "pointer"};

    ${props =>
      props.disabled &&
      `
      border-color: #ECEEF1;
    `}
  }
  .combo-button-label{
    margin-right: ${props => (props.noBorder ? `4px` : `8px`)};
    color: ${props => (props.disabled ? "#D0D5DA" : "#333333")};
    max-width: 175px;
    ${props =>
      props.noBorder &&
      `
      line-height: 15px;
      text-decoration: underline dashed transparent;
    `}
    
    ${props =>
      props.open &&
      props.noBorder &&
      `
      text-decoration: underline dashed;
    `};
  }
  .combo-button-label:hover{
    ${props =>
      props.noBorder &&
      !props.disabled &&
      `
      text-decoration: underline dashed;
    `}
  }
`;

const StyledOptionalItem = styled.div`
  margin-right: 8px;

  path {
    fill: ${props => props.color && props.color};
  }
`;

const StyledIcon = styled.div`
  width: 16px;
  margin-right: 8px;
  margin-top: -2px;
`;

export {
  StyledComboBox,
  StyledArrowIcon,
  StyledComboButton,
  StyledOptionalItem,
  StyledIcon
};
