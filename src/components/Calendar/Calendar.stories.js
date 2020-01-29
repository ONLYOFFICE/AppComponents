import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, date } from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import Calendar from ".";
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

const arraySize = ["base", "big"];

storiesOf("Components|Calendar", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => (
    <Box paddingProp="16px">
      <Calendar
        onChange={date => {
          action("Selected date")(date);
        }}
        selectedDate={myDateKnob("selectedDate", new Date("09/12/2019"))}
        openToDate={myDateKnob("openToDate", new Date("09/12/2019"))}
        minDate={myDateKnob("minDate", new Date("09/12/2019"))}
        maxDate={myDateKnob(
          "maxDate",
          new Date(new Date().getFullYear() + 1 + "/01/01")
        )}
        locale={select("locale", locales, "en")}
        size={select("size", arraySize, "base")}
      />
    </Box>
  ));
