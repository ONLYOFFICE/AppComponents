import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import TextArea from ".";
import { StringValue } from "react-values";
import { action } from "@storybook/addon-actions";
import Box from "../Box";

const textLorem = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae`;

storiesOf("Components|TextArea", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => (
    <div>
      <StringValue
        onChange={e => {
          action("onChange")(e);
        }}
        defaultValue={textLorem}
      >
        {({ value, set }) => (
          <Box paddingProp="16px">
            <TextArea
              placeholder={text("placeholder", "Add comment")}
              disabled={boolean("disabled", false)}
              error={boolean("error", false)}
              warning={boolean("warning", false)}
              readOnly={boolean("readOnly", false)}
              maxLength={number("maxLength", 1000)}
              name={text("name", "")}
              tabIndex={number("tabIndex", 1)}
              value={value}
              height={text("height", "90px")}
              width={text("width", "100%")}
              onChange={e => {
                set(e.target.value);
              }}
            />
          </Box>
        )}
      </StringValue>
    </div>
  ));
