import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StringValue } from "react-values";
import { withKnobs, text, select } from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import PhoneInput from ".";
import Box from "../Box";
import { countryCodes } from "./options";

const locale = countryCodes;

storiesOf("Components|PhoneInput", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => (
    <Box paddingProp="16px">
      <StringValue>
        {({ value, set }) => (
          <PhoneInput
            value={value}
            onChange={e => {
              set(e.target.value);
              action("onChange")(e);
            }}
            name={text("name", "")}
            locale={select("locale", locale, "RU")}
            searchPlaceholderText={text("searchPlaceholderText", "Type to search country")}
            searchEmptyMessage={text("searchEmptyMessage", "Nothing found")}
            onFocus={action("onFocus")}
            onBlur={action("onBlur")}
          />
        )}
      </StringValue>
    </Box>
  ));
