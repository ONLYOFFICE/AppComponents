import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select } from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import RoundButton from ".";
import Box from "../Box";

storiesOf("Components|RoundButton", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => {

    const typeOptions = ["plus", "minus"];

    return (
      <Box paddingProp="16px">
        <RoundButton
          disabled={boolean("disabled", false)}
          type={select("type", typeOptions, "plus")}
          onClick={action("clicked")}
        />
      </Box>
    );
  });
