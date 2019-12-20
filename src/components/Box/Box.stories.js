import React from "react";
import { storiesOf } from "@storybook/react";
import withReadme from 'storybook-readme/with-readme';
import Readme from './README.md';
import Box from ".";
import Text from "../Text";

const containerProps = {
  widthProp: "100%",
  paddingProp: "10px",
  displayProp: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
};

const rowProps = {
  displayProp: "flex",
  flexDirection: "row"
};

const commonBoxProps = {
  textAlign: "center",
  marginProp: "10px",
  paddingProp: "10px"
};

storiesOf("Components|Box", module)
  .addDecorator(withReadme(Readme))
  .add("Default", () => (
  <Box {...containerProps}>
    <Box {...rowProps}>
      <Box {...commonBoxProps} backgroundProp="gray">
        <Text>color background</Text>
      </Box>
      <Box
        {...commonBoxProps}
        backgroundProp="linear-gradient(90deg, white, gray)"
      >
        <Text>linear gradient background</Text>
      </Box>
      <Box {...commonBoxProps} backgroundProp="radial-gradient(white, gray)">
        <Text>radial gradient background</Text>
      </Box>
    </Box>
    <Box {...rowProps}>
      <Box {...commonBoxProps} borderProp="4px solid gray">
        <Text>solid border</Text>
      </Box>
      <Box {...commonBoxProps} borderProp="4px dashed gray">
        <Text>dashed border</Text>
      </Box>
      <Box {...commonBoxProps} borderProp="4px dotted gray">
        <Text>dotted border</Text>
      </Box>
      <Box {...commonBoxProps} borderProp="4px double gray">
        <Text>double border</Text>
      </Box>
    </Box>
    <Box {...rowProps}>
      <Box
        {...commonBoxProps}
        borderProp={{ style: "solid", width: "1px 0", color: "gray" }}
      >
        <Text>Horizontal border</Text>
      </Box>
      <Box
        {...commonBoxProps}
        borderProp={{
          style: "solid",
          width: "0 1px",
          color: "gray"
        }}
      >
        <Text>vertical border</Text>
      </Box>
      <Box
        {...commonBoxProps}
        borderProp={{
          style: "solid",
          width: "0 0 0 1px",
          color: "gray"
        }}
      >
        <Text>left border</Text>
      </Box>
      <Box
        {...commonBoxProps}
        borderProp={{
          style: "solid",
          width: "1px 0 0 0",
          color: "gray"
        }}
      >
        <Text>top border</Text>
      </Box>
      <Box
        {...commonBoxProps}
        borderProp={{
          style: "solid",
          width: "0 1px 0 0",
          color: "gray"
        }}
      >
        <Text>right border</Text>
      </Box>
      <Box
        {...commonBoxProps}
        borderProp={{
          style: "solid",
          width: "0 0 1px 0",
          color: "gray"
        }}
      >
        <Text>bottom border</Text>
      </Box>
    </Box>
    <Box {...rowProps}>
      <Box
        {...commonBoxProps}
        borderProp={{
          style: "solid",
          width: "1px",
          color: "gray",
          radius: "100%"
        }}
      >
        <Text>full round</Text>
      </Box>
      <Box
        {...commonBoxProps}
        borderProp={{
          style: "solid",
          width: "1px",
          color: "gray",
          radius: "5px"
        }}
      >
        <Text>round</Text>
      </Box>
      <Box
        {...commonBoxProps}
        borderProp={{
          style: "solid",
          width: "1px",
          color: "gray",
          radius: "5px 0 0 5px"
        }}
      >
        <Text>left round</Text>
      </Box>
      <Box
        {...commonBoxProps}
        borderProp={{
          style: "solid",
          width: "1px",
          color: "gray",
          radius: "5px 5px 0 0"
        }}
      >
        <Text>top round</Text>
      </Box>
      <Box
        {...commonBoxProps}
        borderProp={{
          style: "solid",
          width: "1px",
          color: "gray",
          radius: "0 5px 5px 0"
        }}
      >
        <Text>right round</Text>
      </Box>
      <Box
        {...commonBoxProps}
        borderProp={{
          style: "solid",
          width: "1px",
          color: "gray",
          radius: "0 0 5px 5px"
        }}
      >
        <Text>bottom round</Text>
      </Box>
    </Box>
    <Box {...rowProps}>
      <Box
        {...commonBoxProps}
        borderProp={{
          style: "dashed solid double dotted",
          width: "2em 1rem 1px 2%",
          color: "red yellow green blue",
          radius: "10% 30% 50% 70%"
        }}
      >
        <Text>Mix border</Text>
      </Box>
    </Box>
  </Box>
));
