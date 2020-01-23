import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import DropDown from "../DropDown";
import DropDownItem from ".";
import Box from "../Box";

storiesOf("Components | DropDownItem", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => {
    const header = boolean("Show category`s", true);
    const separator = boolean("Show separator", true);
    const direction = select("direction", ["left", "right"], "left");

    return (
      <Box paddingProp="16px">
        <DropDown directionX={direction} manualY="1%" open={true}>
          <DropDownItem header={header} label={header ? "Category" : ""} />
          <DropDownItem
            label="Button 1"
            onClick={() => console.log("Button 1 clicked")}
          />
          <DropDownItem
            label="Button 2"
            onClick={() => console.log("Button 2 clicked")}
          />
          <DropDownItem
            disabled
            label="Button 3"
            onClick={() => console.log("Button 3 clicked")}
          />
          <DropDownItem
            label="Button 4"
            onClick={() => console.log("Button 4 clicked")}
          />
          <DropDownItem separator={separator} />
          <DropDownItem header={header} label={header ? "Category" : ""} />
          <DropDownItem
            label="Button 5"
            onClick={() => console.log("Button 5 clicked")}
          />
          <DropDownItem
            disabled
            label="Button 6"
            onClick={() => console.log("Button 6 clicked")}
          />
        </DropDown>
      </Box>
    );
  });
