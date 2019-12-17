import React from "react";
import { storiesOf } from "@storybook/react";
import {
  text,
  boolean,
  withKnobs,
  color,
  number,
  select
} from "@storybook/addon-knobs/react";
import Text from ".";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import Box from "../Box";

const textTags = ["p", "span", "div"];

storiesOf("Components|Text", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => (
    <Box paddingProp="16px" widthProp="100%">
      <Text
        title={text("title", "")}
        as={select("as", textTags, "p")}
        fontSize={number("fontSize", 13)}
        fontWeight={number("fontWeight")}
        truncate={boolean("truncate", false)}
        color={color("color", "")}
        backgroundColor={color("backgroundColor", "")}
        isBold={boolean("isBold", false)}
        isItalic={boolean("isItalic", false)}
        isInline={boolean("isInline", false)}
        display={text("display")}
      >
        {text("Text", "Sample text")}
      </Text>
    </Box>
  ));
