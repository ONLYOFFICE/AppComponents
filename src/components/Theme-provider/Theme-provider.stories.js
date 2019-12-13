import React from "react";
import { storiesOf } from "@storybook/react";
import ThemeProvider from ".";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import { BooleanValue } from "react-values";
import Box from "../Box/";
import Text from "../Text";

const Light = {
  type: "light",
  backgroundColor: "#FFF",
  fontFamily: "sans-serif",
  color: "#333",
  boxShadow: "0.8rem 0.8rem 1.5rem gray"
};

const Dark = {
  type: "dark",
  backgroundColor: "#1F2933",
  fontFamily: "Open Sans",
  color: "#E4E7EB",
  boxShadow: "0.4rem 0.4rem 1.5rem #111"
};

storiesOf("Components|ThemeComponents", module)
  .addDecorator(withReadme(Readme))
  .add("Dark", () => (
    <BooleanValue>
      {({ value, toggle }) => (
        <Box displayProp="flex" paddingProp="16px" alignItems="center">
          <Box marginProp="0 8px 0 0">
            <input
              onChange={e => toggle(e.target.value)}
              type="checkbox"
              value={value}
            />
          </Box>
          <Box>
            <ThemeProvider theme={value ? Dark : Light}>
              <Text isBold fontSize="16px">
                {value ? "Dark" : "Light"}
              </Text>
            </ThemeProvider>
          </Box>
        </Box>
      )}
    </BooleanValue>
  ));
