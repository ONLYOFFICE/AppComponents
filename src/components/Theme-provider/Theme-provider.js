import React from "react";
import PropTypes from "prop-types";
import {
  createGlobalStyle,
  ThemeProvider as Provider
} from "styled-components";

const GlobalStyle = createGlobalStyle`  

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  font-size: 13px;
  height: 100vh;
  max-width: 100%;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  font-family: ${props => props.theme.fontFamily};
  margin: 0;
  font-size: 1rem;
  text-align: left;
}
`;

const ThemeProvider = props => {
  const { theme, children } = props;

  return (
    <Provider theme={theme}>
      <GlobalStyle />
      {children}
    </Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.object
};

export default ThemeProvider;
