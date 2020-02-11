import React from "react";
import { storiesOf } from "@storybook/react";
import withReadme from "storybook-readme/with-readme";
import RadioButton from ".";
import { withKnobs, text, boolean } from "@storybook/addon-knobs/react";
import Readme from "./README.md";
import Box from "../Box";

storiesOf("Components|RadioButton", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => {
    return (
      <Box paddingProp="16px">
        <RadioButton
          value={text("value", "value")}
          label={text("label", "Radio-button")}
          disabled={boolean("disabled", false)}
          checked={boolean("checked", false)}
          reverse={boolean("reverse", false)}
          onClick={e => {
            window.__STORYBOOK_ADDONS.channel.emit("storybookjs/knobs/change", {
              name: "checked",
              value: e.target.checked
            });
            console.log("onChange", e);
          }}
        />
      </Box>
    );
  });
