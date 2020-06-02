import React, { useEffect, useState, useRef } from "react";
import Box from "../Box";
import * as Countries from "./svg";
import styled from "styled-components";

const StyledTriangle = styled.div`
border-left: 3px solid transparent;
border-right: 3px solid transparent;
border-top: 3px solid #A3A9AE;
cursor: pointer;
margin: 8px 16px 20px 4px;
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
    background-color: yellow;
  } 
`;


const Dropdown = ({ value, options, onChange }) => {

  const dropDownMenu = useRef();

  const focusCountry = useRef([]);

  const useInitialFocus = (ref) => {
    useEffect(() => {
      ref.current.focus();
    }, [ref]);
  };

  if (open) useInitialFocus(focusCountry);

  const [open, setOpen] = useState(false);

  const handleClick = e => {
    if (dropDownMenu.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  const handleChange = selectedValue => {
    onChange(selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const openDropDown = () => setOpen(!open);

  useEffect(() => {
    if (open) refs[value].current.scrollIntoView();
  }, [open]);

  const refs = options.reduce((acc, value) => {
    acc[value.code] = React.createRef();
    return acc;
  }, {});

  const setCountry = options.find(o => o.code === value).code;

  return (
    <Box ref={dropDownMenu} displayProp="flex">
      <div onClick={openDropDown}>
        {value ? React.createElement(Countries[`${setCountry}`],
          {
            width: 24,
            height: 16
          }) : "n/a"}
      </div>
      <div>
        <StyledTriangle onClick={openDropDown} />

      </div>
      {open && (
        <StyledDropDown>
          <div>
            {options.map((option, i) => (
              <Box key={i} displayProp="flex" backgroundProp={option.code === value ? "#e9e9e9" : ""} onClick={() => handleChange(option.code)}>
                <Box marginProp={"5px 0 3px 10px"}>
                  {React.createElement(Countries[`${option.code}`],
                    {
                      width: 24,
                      height: 16
                    })}
                </Box>
                <StyledCountryItem marginProp={"2px 0 2px 8px"} ref={refs[option.code]}>
                  {option.name} {option.dialCode}
                </StyledCountryItem>
              </Box>
            ))}
          </div>
        </StyledDropDown>
      )}
    </Box>
  );
};

export default Dropdown;