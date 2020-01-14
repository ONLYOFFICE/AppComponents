import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StringValue } from "react-values";
import {
  withKnobs,
  boolean,
  text,
  select,
  number
} from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import TextInput from ".";
import Box from "../Box";

const sizeOptions = ["base", "middle", "big", "huge"];

storiesOf("Components|TextInput", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("text", () => (
    <Box paddingProp="16px">
      <StringValue
        onChange={e => {
          action("onChange")(e);
        }}
      >
        {({ value, set }) => (
          <TextInput
            name={text("name", "")}
            placeholder={text("placeholder", "This is placeholder")}
            maxLength={number("maxLength", 255)}
            size={select("size", sizeOptions, "base")}
            autoFocus={boolean("autoFocus", false)}
            disabled={boolean("disabled", false)}
            readOnly={boolean("readOnly", false)}
            error={boolean("error", false)}
            warning={boolean("warning", false)}
            scale={boolean("scale", false)}
            autoComplete={text("autoComplete", "off")}
            tabIndex={number("tabIndex", 1)}
            border={boolean("border", true)}
            mask={text("mask", null)}
            value={value}
            onBlur={action("onBlur")}
            onFocus={action("onFocus")}
            onChange={e => {
              set(e.target.value);
            }}
          />
        )}
      </StringValue>
    </Box>
  ));
