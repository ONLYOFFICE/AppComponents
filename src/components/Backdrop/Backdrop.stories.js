import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { BooleanValue } from "react-values";
import withReadme from "storybook-readme/with-readme";
import { withKnobs, number } from "@storybook/addon-knobs/react";
import Readme from "./README.md";
import Box from "../Box";
import Backdrop from ".";
import Button from "../Button";

storiesOf("Components|Backdrop", module)
  .addDecorator(withReadme(Readme))
  .addDecorator(withKnobs)
  .add("base", () => (
    <Box paddingProp="16px">
      <BooleanValue>
        {({ value, toggle }) => (
          <Box>
            <Button
              label="Show Backdrop"
              primary
              size="medium"
              disabled={value}
              onClick={e => {
                action("onShow")(e);
                toggle(true);
              }}
            />
            <Backdrop
              visible={value}
              zIndex={number("zIndex", 1)}
              onClick={e => {
                action("onHide")(e);
                toggle(false);
              }}
            />
          </Box>
        )}
      </BooleanValue>
    </Box>
  ));
