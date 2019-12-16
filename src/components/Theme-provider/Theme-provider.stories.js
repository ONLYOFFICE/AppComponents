import React from "react";
import { storiesOf } from "@storybook/react";
import ThemeProvider from ".";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import { BooleanValue } from "react-values";
import Box from "../Box/";
import Text from "../Text";
import JSONPretty from "react-json-pretty";
import { Base, Dark } from "../../themes";

const LightTheme = {
  backgroundColor: "#FFF",
  fontFamily: "sans-serif",
  color: "#333",
  boxShadow: "0.8rem 0.8rem 1.5rem gray"
};

const DarkTheme = {
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
  ));
storiesOf("Components|ThemeComponents", module)
  .addParameters({ options: { showAddonPanel: false } })
  .add("Base theme", () => {
    const jsonTheme = {
      main: "line-height:1.5;background:#FFF;overflow:auto;",
      error: "line-height:1.5;background:#FFF;overflow:auto;",
      key: "color:#444;",
      string: "color:#00873D;"
    };
    return (
      <Box paddingProp={"16px"}>
        <Text isBold fontSize="20px">
          Base theme:
        </Text>
        <Text as="div" isBold fontSize="14px">
          <JSONPretty
            id="json-pretty"
            data={JSON.stringify(Base)}
            theme={jsonTheme}
          />
        </Text>
      </Box>
    );
  });
storiesOf("Components|ThemeComponents", module)
  .addParameters({ options: { showAddonPanel: false } })
  .add("Dark theme", () => {
    const jsonTheme = {
      main: "line-height:1.5;background:#1F2933;overflow:auto;",
      error: "line-height:1.5;background:#1F2933;overflow:auto;",
      key: "color:#1F97CA;",
      string: "color:#00873D;"
    };
    return (
      <Box paddingProp={"16px"}>
        <Text isBold fontSize="20px">
          Dark theme:
        </Text>
        <Text as="div" isBold color="#1F97CA" fontSize="14px">
          <JSONPretty
            id="json-pretty"
            data={JSON.stringify(Dark)}
            theme={jsonTheme}
          />
        </Text>
      </Box>
    );
  });
