import styled from "styled-components";
//import commonInputStyles from "../../utils/commonInputStyles";
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
width: 292px;
height: 260px;
z-index: 1999;
border-radius: 4px;
border: 1px solid #d1d1d1;
box-shadow: 0 2px 4px rgba(0,0,0,0.3);
overflow-x: hidden;
overflow-y: auto;
`;

const StyledCountryItem = styled(Box)`
cursor: pointer;
&:hover {
    background-color: #e9e9e9;
  }
`;

const StyledFlagBox = styled(Box)`
cursor: pointer;
`;

const StyledSearchPanel = styled.div`
position: sticky;
top: 0px;
background-color: #fff;
padding: 10px 0px 10px 10px;
`;

StyledPhoneInput.defaultProps = { theme: Base };

export {
    StyledPhoneInput,
    StyledTriangle,
    StyledDropDown,
    StyledCountryItem,
    StyledFlagBox,
    StyledSearchPanel
};
