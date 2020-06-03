import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import { BooleanValue } from "react-values";

import Readme from "./README.md";
import SwitchButton from ".";
import Box from "../Box";

storiesOf("Components|SwitchButton", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => {
    return (
      <Box paddingProp="16px">
        <BooleanValue>
          {({ value, toggle }) => (
            <SwitchButton
              disabled={boolean("disabled", value)}
              checked={boolean("checked", false)}
              onChange={e => {
                action("onChange")(e);
                toggle(e.target.checked);
              }}
            />
          )}
        </BooleanValue>
      </Box>
    );
  });