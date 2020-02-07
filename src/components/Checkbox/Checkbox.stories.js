import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { BooleanValue } from "react-values";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import Checkbox from ".";
import Box from "../Box";

storiesOf("Components|Checkbox", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => (
    <Box paddingProp="16px" widthProp="100%">
      <BooleanValue>
        {({ value, toggle }) => (
          <Checkbox
            label={text("label", "Checkbox")}
            checked={value}
            indeterminate={boolean("indeterminate", false)}
            disabled={boolean("disabled", false)}
            reverse={boolean("reverse", false)}
            onChange={e => {
              action("onChange")(e);
              toggle(e.target.checked);
            }}
          />
        )}
      </BooleanValue>
    </Box>
  ));
