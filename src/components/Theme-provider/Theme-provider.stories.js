import React from "react";
import { storiesOf } from "@storybook/react";
import ThemeProvider from ".";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import { Dark } from "../../themes/index";

storiesOf("Components|ThemeComponents", module)
  .addDecorator(withReadme(Readme))
  .add("Dark", () => (
    <ThemeProvider theme={Dark}>
      <h3>Hello world</h3>
    </ThemeProvider>
  ));
