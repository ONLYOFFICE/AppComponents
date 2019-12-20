import React from "react";
import { storiesOf } from "@storybook/react";
import {
  text,
  boolean,
  withKnobs,
  color,
  select
} from "@storybook/addon-knobs/react";
import Heading from ".";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import Box from "../Box";

const levels = [1, 2, 3, 4, 5, 6];
const size = ["xsmall", "small", "medium", "large", "xlarge"];

storiesOf("Components|Heading", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("base", () => (
    <Box paddingProp="16px" widthProp="100%">
      <Heading
        color={color("color", "")}
        level={select("level", levels, 1)}
        title={text("title", "")}
        truncate={boolean("truncate", false)}
        inline={boolean("inline", false)}
        size={select("size", size, "large")}
      >
        {text("text", "Sample text Heading")}
      </Heading>
    </Box>
  ));
