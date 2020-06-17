import styled from "styled-components";
import TextInput from "../TextInput";
import Box from "../Box";
import { Base } from "../../themes";

const StyledPhoneInput = styled(TextInput)`
border: 0;
font-size: 16px;
padding: 11px 16px 11px 5px;
`;

const StyledTriangle = styled.div`
border-left: 3px solid transparent;
border-right: 3px solid transparent;
border-top: 3px solid #A3A9AE;
cursor: pointer;
margin: 7px 0 20px 4px;
`;

const StyledDropDown = styled.div`
position: absolute;
top: 59px;
left: 15px;
width: ${props => props.theme.phoneInput.width};
height: 260px;
z-index: 1999;
border-radius: 4px;
border: 1px solid #d1d1d1;
box-shadow: 0 2px 4px rgba(0,0,0,0.3);
`;

const StyledCountryItem = styled(Box)`
cursor: pointer;
&:hover {
    background-color: ${props => props.theme.phoneInput.itemHoverColor};
  };
background-color: ${props => props.theme.phoneInput.itemBackgroundColor};
`;

const StyledFlagBox = styled(Box)`
cursor: pointer;
`;

const StyledSearchPanel = styled.div`
background-color: #fff;
padding: 8px 8px 0 8px;
.phone-input-searcher {
  background-color: #fff;
  ::placeholder {
    color: ${props => props.theme.phoneInput.placeholderColor}
  }
}
`;

const StyledInputBox = styled(Box)`
display: flex;
border-radius: 3px 3px 3px 3px;
border: 1px solid #D0D5DA;
width: ${props => props.theme.phoneInput.width};
height: ${props => props.theme.phoneInput.height};
`;

StyledDropDown.defaultProps = { theme: Base };
StyledCountryItem.defaultProps = { theme: Base };
StyledSearchPanel.defaultProps = { theme: Base };
StyledInputBox.defaultProps = { theme: Base };

export {
    StyledPhoneInput,
    StyledTriangle,
    StyledDropDown,
    StyledCountryItem,
    StyledFlagBox,
    StyledSearchPanel,
    StyledInputBox
};
