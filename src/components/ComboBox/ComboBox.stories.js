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
import DropDownItem from "../DropDownItem";
import Box from "../Box";
import Grid from "../Grid";
import Heading from "../Heading";
import { Base } from "../../themes";
import RadioButtonGroup from "../RadioButtonGroup";

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

    const theme = { ...Base, ...Base.radioButton };

    const items = [
      { value: "first", label: "A-Z" },
      { value: "second", label: "Z-A" }
    ];

    const items2 = [
      { value: "first", label: "First name" },
      { value: "last", label: "Last name" }
    ];

    const advancedOptions = (
      <>
        <DropDownItem key="1" noHover>
          <RadioButtonGroup
            theme={theme}
            name="group"
            selected="first"
            options={items}
            orientation="vertical"
            width="100%"
            spacing="0px"
          />
        </DropDownItem>
        <DropDownItem key="2" separator />
        <DropDownItem key="3" noHover>
          <RadioButtonGroup
            theme={theme}
            name="group"
            selected="last"
            options={items2}
            orientation="vertical"
            width="100%"
            spacing="0px"
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
