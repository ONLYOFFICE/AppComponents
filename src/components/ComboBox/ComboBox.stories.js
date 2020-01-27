import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  boolean,
  select,
  number
} from "@storybook/addon-knobs/react";
import { optionsKnob as options } from "@storybook/addon-knobs";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import ComboBox from ".";
import Button from "../Button";
import Box from "../Box";
import Heading from "../Heading";

const sizeOptions = ["base", "middle", "big", "huge", "content"];

storiesOf("Components|ComboBox", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => {
    const comboOptions = [
      { key: 1, label: "Option 1" },
      { key: 2, label: "Option 2" },
      { key: 3, disabled: true, label: "Option 3" },
      { key: 4, label: "Option 4" },
      { key: 5, label: "Option 5" },
      { key: 6, label: "Option 6" },
      { key: 7, label: "Option 7" }
    ];

    const optionsMultiSelect = options(
      "children",
      {
        button: "button"
      },
      [],
      {
        display: "multi-select"
      }
    );

    let children = [];
    optionsMultiSelect.forEach(function(item, i) {
      switch (item) {
        case "button":
          children.push(<Button label="button" key={i} />);
          break;
        default:
          break;
      }
    });

    const childrenItems = children.length > 0 ? children : null;

    return (
      <Box paddingProp="16px">
        <Heading>Default</Heading>

        <ComboBox
          options={comboOptions}
          onSelect={option => action("Selected option")(option)}
          selectedOption={{
            key: 0,
            label: "Select",
            default: true
          }}
          disabled={boolean("disabled", false)}
          noBorder={boolean("noBorder", false)}
          dropDownMaxHeight={number("dropDownMaxHeight", 0)}
          scaled={boolean("scaled", false)}
          scaledOptions={boolean("scaledOptions", false)}
          size={select("size", sizeOptions, "content")}
        >
          {childrenItems}
        </ComboBox>
      </Box>
    );
  });
