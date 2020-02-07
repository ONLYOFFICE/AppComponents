import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select, date } from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import DatePicker from ".";
import Box from "../Box";

function myDateKnob(name, defaultValue) {
  const stringTimestamp = date(name, defaultValue);
  return new Date(stringTimestamp);
}

const locales = [
  "az",
  "zh-cn",
  "cs",
  "nl",
  "en-gb",
  "en",
  "fi",
  "fr",
  "de",
  "de-ch",
  "el",
  "it",
  "ja",
  "ko",
  "lv",
  "pl",
  "pt",
  "pt-br",
  "ru",
  "sk",
  "sl",
  "es",
  "tr",
  "uk",
  "vi"
];

storiesOf("Components|DatePicker", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("base", () => (
    <Box paddingProp="16px">
      <DatePicker
        onChange={date => {
          action("Selected date")(date);
        }}
        selectedDate={myDateKnob("selectedDate", new Date())}
        minDate={myDateKnob("minDate", new Date("1970/01/01"))}
        maxDate={myDateKnob(
          "maxDate",
          new Date(new Date().getFullYear() + 1 + "/01/01")
        )}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        error={boolean("error", false)}
        open={boolean("open", false)}
        locale={select("locale", locales, "en")}
      />
    </Box>
  ));
