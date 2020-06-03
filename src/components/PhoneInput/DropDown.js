import React, { useEffect, useState, useRef } from "react";
import Box from "../Box";
import Scrollbar from "../Scrollbar";
import TextInput from "../TextInput";
import * as Countries from "./svg";
import { StyledTriangle, StyledDropDown, StyledCountryItem, StyledFlagBox } from "./StyledPhoneInput";

const Dropdown = ({ value, options, onChange }) => {

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
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const openDropDown = () => setOpen(!open);

  useEffect(() => {
    if (open) refs[value].current.scrollIntoView(false);
  }, [open]);

  const refs = options.reduce((acc, value) => {
    acc[value.code] = React.createRef();
    return acc;
  }, {});

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
          <Scrollbar>
            <div style={{
              position: "sticky",
              top: 0,
              minHeight: 0,
              background: "white",
              //borderBottom: "0.5px solid #d1d1d1",
              margin: "5px 0 3px 0px"
            }}>
              <TextInput
                value={search}
                placeholder="Search Countries"
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div>
              {filteredCountries.map((option, i) => (
                <StyledCountryItem key={i}>
                  <Box displayProp="flex" backgroundProp={option.code === value ? "#e9e9e9" : ""} onClick={() => handleChange(option.code)}>
                    <Box marginProp={"5px 0 3px 10px"}>
                      {React.createElement(Countries[`${option.code}`],
                        {
                          width: 24,
                          height: 16
                        })}
                    </Box>
                    <Box marginProp={"2px 0 2px 8px"} ref={refs[option.code]}>{option.name} {option.dialCode}</Box>
                  </Box>
                </StyledCountryItem>
              ))}
            </div>
          </Scrollbar>
        </StyledDropDown>
      )}
    </Box>
  );
};

export default Dropdown;