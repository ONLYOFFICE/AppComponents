import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import Avatar from ".";
import Box from "../Box";

const sizeOptions = ["small", "medium", "big", "max"];

storiesOf("Components|Avatar", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("base", () => {
    const size = select("size", sizeOptions, "max");

    return (
      <Box paddingProp="16px">
        <Avatar
          size={size}
          source={text("source", "")}
          userName={text("userName", "")}
        />
      </Box>
    );
  });
