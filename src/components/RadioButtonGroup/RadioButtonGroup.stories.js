import React from "react";
import { storiesOf } from "@storybook/react";
import withReadme from "storybook-readme/with-readme";
import RadioButtonGroup from ".";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";
import Readme from "./README.md";
import { action } from "@storybook/addon-actions";
import { optionsKnob as options } from "@storybook/addon-knobs";
import Box from "../Box";

storiesOf("Components|RadioButtonGroup", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => {
    const orientation = ["horizontal", "vertical"];
    const values = ["first", "second", "third"];
    const valuesMultiSelect = {
      radio1: "radio1",
      radio2: "radio2",
      radio3: "radio3"
    };

    const optionsMultiSelect = options(
      "options",
      valuesMultiSelect,
      ["radio1", "radio2"],
      {
        display: "multi-select"
      }
    );

    let children = [];
    optionsMultiSelect.forEach(function(item) {
      switch (item) {
        case "radio1":
          children.push({
            value: values[0],
            label: text("label 1", "First radio-button")
          });
          break;
        case "radio2":
          children.push({
            value: values[1],
            label: text("label 2", "Second radio-button")
          });
          break;
        case "radio3":
          children.push({
            value: values[2],
            label: text("label 3", "Third radio-button")
          });
          break;
        default:
          break;
      }
    });

    return (
      <Box paddingProp="16px">
        <RadioButtonGroup
          name={text("name", "group")}
          selected={values[0]}
          options={children}
          orientation={select("orientation", orientation, "horizontal")}
          width={text("width", "100%")}
          disabled={boolean("disabled", false)}
          spacing={text("spacing", "15px")}
          onClick={e => {
            action("onChange")(e);
          }}
        />
      </Box>
    );
  });
