import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select, color } from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import Loader from ".";
import Box from "../Box";

const typeOptions = ["base", "oval", "dual-ring"];

storiesOf("Components|Loaders", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("base", () => (
    <Box paddingProp="16px">
      <Loader
        type={select("type", typeOptions, "base")}
        color={color("color", "#63686a")}
        size={text("size", "18px")}
        label={text("label", "Loading content, please wait...")}
      />
    </Box>
  ))
  .add("dual-ring", () => (
    <Box paddingProp="16px">
      <Loader
        type={select("type", typeOptions, "dual-ring")}
        color={color("color", "#63686a")}
        size={text("size", "40px")}
        label={text("label", "Loading content, please wait.")}
      />
    </Box>
  ))
  .add("oval", () => (
    <Box paddingProp="16px">
      <Loader
        type={select("type", typeOptions, "oval")}
        color={color("color", "#63686a")}
        size={text("size", "40px")}
        label={text("label", "Loading content, please wait.")}
      />
    </Box>
  ))

