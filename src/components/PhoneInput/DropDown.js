import React, { useEffect, useState, useRef, useCallback } from "react";
import Box from "../Box";
import Scrollbar from "../Scrollbar";
import TextInput from "../TextInput";
import Text from "../Text";
import * as Countries from "./svg";
import { StyledTriangle, StyledDropDown, StyledCountryItem, StyledFlagBox, StyledSearchPanel } from "./StyledPhoneInput";

const Dropdown = ({ value, options, onChange, theme }) => {
  console.log("render dropdown");
  
  const dropDownMenu = useRef();

  const [open, setOpen] = useState(false);

  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredCountries(
      options.filter(option =>
        option.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, options]);

  const handleClick = e => {
    if (dropDownMenu.current.contains(e.target)) {
      return;
    }
    setOpen(false);
    setSearch("");
  };

  const handleChange = selectedValue => {
    onChange(selectedValue);
    setOpen(false);
    setSearch("");
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, []);

  const openDropDown = useCallback(() => setOpen(!open), [open]);

  useEffect(() => {
    if (open) refs[value].current.scrollIntoView(false);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open]);

  const refs = options.reduce((acc, value) => {
    acc[value.code] = React.createRef();
    return acc;
  }, {});

  const onSearchCountry = useCallback(e => setSearch(e.target.value), []);

  const onHandleChange = useCallback(e => {
    handleChange(e.currentTarget.dataset.option);
  }, []);

  const setCountry = options.find(o => o.code === value).code;

  return (
    <Box ref={dropDownMenu} displayProp="flex">
      <StyledFlagBox onClick={openDropDown}>
        {value ? React.createElement(Countries[`${setCountry}`],
          {
            width: 24,
            height: 16
          }) : "n/a"}
      </StyledFlagBox>
      <StyledTriangle onClick={openDropDown} />
      {open && (
        <StyledDropDown>
          
            <StyledSearchPanel>
              <TextInput
                value={search}
                placeholder="Type to search country"
                onChange={onSearchCountry}
                scale={true}
                className="phone-input-searcher"
              />
            </StyledSearchPanel>
            
            <div style={{height:"220px"}}>
            <Scrollbar color={theme.phoneInput.scrollBackground}>
              {filteredCountries.map((option, i) => (
                <StyledCountryItem key={i}>
                  <Box displayProp="flex" backgroundProp={option.code === value ? "#e9e9e9" : ""} data-option={option.code} onClick={onHandleChange}>
                    <Box marginProp={"5px 0 3px 10px"}>
                      {React.createElement(Countries[`${option.code}`],
                        {
                          width: 24,
                          height: 16
                        })}
                    </Box>
                    <Box marginProp="2px 0 2px 8px" ref={refs[option.code]}><Text color={theme.phoneInput.itemTextColor}>{option.name} {option.dialCode}</Text></Box>
                    
                  </Box>
                </StyledCountryItem>
              ))}
              </Scrollbar>
            </div>
            
        </StyledDropDown>
      )}
    </Box>
  );
};

export default Dropdown;