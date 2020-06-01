import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, number, text } from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import { BooleanValue } from "react-values";

import Readme from "./README.md";
import Slider from ".";
import Box from "../Box";

storiesOf("Components|Slider", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => {
    return (
      <Box paddingProp="16px">
        <BooleanValue>
          <Slider 
            disabled={boolean("disabled", false)}
            value={text("value", "5")}
            max={number('max', 30)}
            min={number('min', 0)}
            onChange={e => {
              action("onChange")(e);
              window.__STORYBOOK_ADDONS.channel.emit("storybookjs/knobs/change", {
                name: "value",
                value: e
              })  
            }}
            />
        </BooleanValue>
      </Box>
    );
  });