import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import SquareButton from ".";
import Box from "../Box";

storiesOf("Components|SquareButton", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => {
    return (
      <Box paddingProp="16px">
        <SquareButton
          disabled={boolean("disabled", false)}
          onClick={action("clicked")}
        />
      </Box>
    );
  });
