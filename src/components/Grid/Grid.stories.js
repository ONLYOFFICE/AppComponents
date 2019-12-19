import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Readme from './README.md';
import Grid from '.';
import Box from '../Box';

const gridProps = {
  marginProp: "0 0 20px 0"
};

const boxProps = {
  paddingProp: "10px",
  displayProp: "flex",
  alignItems: "center",
  justifyContent: "center"
};

storiesOf('Components|Grid', module)
  .addDecorator(withReadme(Readme))
  .add("Columns", () => (
    <>
      <Grid {...gridProps} columnsProp={["200px", ["100px","1fr"], "auto"]}>
        <Box {...boxProps} backgroundProp="#F4991A">200px</Box>
        <Box {...boxProps} backgroundProp="#F2EAD3">minmax(100px,1fr)</Box>
        <Box {...boxProps} backgroundProp="#F9F5F0">auto</Box>
      </Grid>

      <Grid {...gridProps} columnsProp="25%">
        <Box {...boxProps} backgroundProp="#F4991A">25%</Box>
        <Box {...boxProps} backgroundProp="#F2EAD3">25%</Box>
        <Box {...boxProps} backgroundProp="#F9F5F0">25%</Box>
      </Grid>
      
      <Grid {...gridProps} columnsProp={{ count: 3, size: "100px" }}>
        <Box {...boxProps} backgroundProp="#F4991A">100px</Box>
        <Box {...boxProps} backgroundProp="#F2EAD3">100px</Box>
        <Box {...boxProps} backgroundProp="#F9F5F0">100px</Box>
      </Grid>

      <Grid {...gridProps} columnsProp={{ count: 3, size: ["100px", "1fr"] }}>
        <Box {...boxProps} backgroundProp="#F4991A">minmax(100px,1fr)</Box>
        <Box {...boxProps} backgroundProp="#F2EAD3">minmax(100px,1fr)</Box>
        <Box {...boxProps} backgroundProp="#F9F5F0">minmax(100px,1fr)</Box>
      </Grid>
    </>  
  ))
  .add("Rows", () => (
    <>
      <Grid {...gridProps} rowsProp={["100px", ["100px","1fr"], "auto"]}>
        <Box {...boxProps} backgroundProp="#F4991A">100px</Box>
        <Box {...boxProps} backgroundProp="#F2EAD3">minmax(100px,1fr)</Box>
        <Box {...boxProps} backgroundProp="#F9F5F0">auto</Box>
      </Grid>

      <Grid {...gridProps} rowsProp="50px">
        <Box {...boxProps} backgroundProp="#F4991A">50px</Box>
        <Box {...boxProps} backgroundProp="#F2EAD3">50px</Box>
        <Box {...boxProps} backgroundProp="#F9F5F0">50px</Box>
      </Grid>
    </>  
  ))
  .add('Layout', () => (
    <Grid
      widthProp="100vw"
      heightProp="100vh"
      gridGap="10px"
      rowsProp={["auto", "1fr", "auto"]}
      columnsProp={[["100px","1fr"], "3fr", ["100px","1fr"]]}
      areasProp={[
        { name: "header", start: [0, 0], end: [2, 0] },
        { name: "navbar", start: [0, 1], end: [0, 1] },
        { name: "main", start: [1, 1], end: [1, 1] },
        { name: "sidebar", start: [2, 1], end: [2, 1] },
        { name: "footer", start: [0, 2], end: [2, 2] }
      ]}
    >
      <Box {...boxProps} gridArea="header" backgroundProp="#F4991A">header</Box>
      <Box {...boxProps} gridArea="navbar" backgroundProp="#F2EAD3">navbar</Box>
      <Box {...boxProps} gridArea="main" backgroundProp="#F9F5F0">main</Box>
      <Box {...boxProps} gridArea="sidebar" backgroundProp="#F2EAD3">sidebar</Box>
      <Box {...boxProps} gridArea="footer" backgroundProp="#F4991A">footer</Box>
    </Grid>
  ));
