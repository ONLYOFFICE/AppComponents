import React from "react";
import { storiesOf } from "@storybook/react";
import ThemeProvider from ".";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import { BooleanValue } from "react-values";
import Box from "../Box/";
import Text from "../Text";
import JSONPrettyMon from "react-json-pretty/dist/monikai";
import JSONPretty from "react-json-pretty";
import { Base, Dark } from "../../themes";

const LightTheme = {
  type: "light",
  backgroundColor: "#FFF",
  fontFamily: "sans-serif",
  color: "#333",
  boxShadow: "0.8rem 0.8rem 1.5rem gray"
};

const DarkTheme = {
  type: "dark",
  backgroundColor: "#1F2933",
  fontFamily: "Open Sans",
  color: "#E4E7EB",
  boxShadow: "0.4rem 0.4rem 1.5rem #111"
};

storiesOf("Components|ThemeComponents", module)
  .addDecorator(withReadme(Readme))
  .add("Default", () => (
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
            <ThemeProvider theme={value ? DarkTheme : LightTheme}>
              <Text isBold fontSize="16px">
                {value ? "Dark" : "Light"}
              </Text>
            </ThemeProvider>
          </Box>
        </Box>
      )}
    </BooleanValue>
  ))
  .add("Base theme", () => {
    const jsonTheme = {
      main: "line-height:1.3;color:#748096;background:white;overflow:auto;",
      error: "line-height:1.3;color:#748096;background:white;overflow:auto;",
      key: "color:#b553bf;",
      string: "color:#fba856;",
      value: "color:#93a3bf;",
      boolean: "color:#448aa9;"
    };
    return (
      <Box paddingProp={"16px"}>
        <Text isBold={true} fontSize={"20px"}>
          Base theme
        </Text>
        <JSONPretty
          id="json-pretty"
          data={JSON.stringify(Base)}
          theme={jsonTheme}
        ></JSONPretty>
      </Box>
    );
  })
  .add("Dark theme", () => (
    <Box paddingProp={"16px"}>
      <Text isBold={true} fontSize={"20px"}>
        Dark theme
      </Text>
      <JSONPretty
        id="json-pretty"
        data={JSON.stringify(Dark)}
        theme={JSONPrettyMon}
      ></JSONPretty>
    </Box>
  ));
