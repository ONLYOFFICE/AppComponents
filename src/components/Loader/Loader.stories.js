import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, color } from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import Loader from ".";
import Box from "../Box";

storiesOf("Components|Loader", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => (
    <Box paddingProp="16px">
      <Loader
        type="base"
        color={color("color", "")}
        size={text("size", "18px")}
        label={text("label", "Loading content, please wait...")}
      />
    </Box>
  ))
  .add("DualRing", () => (
    <Box paddingProp="16px">
      <Loader
        type="dual-ring"
        color={color("color", "")}
        size={text("size", "40px")}
        label={text("label", "Loading content, please wait.")}
      />
    </Box>
  ))
  .add("Oval", () => (
    <Box paddingProp="16px">
      <Loader
        type="oval"
        color={color("color", "")}
        fillColor={color("fillColor", "")}
        size={text("size", "40px")}
        label={text("label", "Loading content, please wait.")}
      />
    </Box>
  ));
