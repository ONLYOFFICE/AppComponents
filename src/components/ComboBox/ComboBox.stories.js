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
import RadioButton from "../RadioButton";
import DropDownItem from "../DropDownItem";
import Box from "../Box";
import Grid from "../Grid";
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

    const optionsMultiSelect = options("children", { button: "button" }, [], {
      display: "multi-select"
    });

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

    const advancedOptions = (
      <>
        <DropDownItem key="1" noHover>
          <RadioButton value="asc" name="first" label="A-Z" checked={true} />
        </DropDownItem>
        <DropDownItem key="2" noHover>
          <RadioButton value="desc" name="first" label="Z-A" />
        </DropDownItem>
        <DropDownItem key="3" separator />
        <DropDownItem key="4" noHover>
          <RadioButton value="first" name="second" label="First name" />
        </DropDownItem>
        <DropDownItem key="5" noHover>
          <RadioButton
            value="last"
            name="second"
            label="Last name"
            checked={true}
          />
        </DropDownItem>
      </>
    );

    const childrenItems = children.length > 0 ? children : null;

    return (
      <Grid columnsProp={["1fr 1fr"]}>
        <Box paddingProp="16px">
          <Heading>Default</Heading>

          <ComboBox
            options={comboOptions}
            selectedOption={comboOptions[0]}
            onSelect={option => action("Selected option")(option)}
            dropDownMaxHeight={number("dropDownMaxHeight", 0)}
            disabled={boolean("disabled", false)}
            withoutBorder={boolean("withoutBorder", false)}
            scaled={boolean("scaled", false)}
            scaledOptions={boolean("scaledOptions", false)}
            size={select("size", sizeOptions, "content")}
            directionX={select("directionX", ["left", "right"], "left")}
            directionY={select("directionY", ["top", "bottom"], "top")}
            open={boolean("open", false)}
          >
            {childrenItems}
          </ComboBox>
        </Box>
        
        <Box paddingProp="16px">
          <Heading>Advanced</Heading>
          <ComboBox
            options={[]}
            advancedOptions={advancedOptions}
            onSelect={option => action("Selected option")(option)}
            selectedOption={{
              key: 0,
              label: "Select",
              default: true
            }}
            disabled={boolean("disabled", false)}
            scaled={false}
            size="content"
            directionX="right"
          >
            {/*{<Icons.NavLogoIcon size="medium" key="comboIcon" />}*/}
          </ComboBox>
        </Box>
      </Grid>
    );
  });
