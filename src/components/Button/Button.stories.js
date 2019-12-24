import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import Button from ".";
import Box from "../Box";

storiesOf("Components|Buttons", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => {
    const sizeOptions = ["base", "medium", "big"];

    return (
      <Box paddingProp="16px">
        <Button
          label={text("label", "Base button")}
          primary={boolean("primary", true)}
          size={select("size", sizeOptions, "big")}
          scale={boolean("scale", false)}
          disabled={boolean("disabled", false)}
          onClick={action("clicked")}
        />
      </Box>
    );
  });
