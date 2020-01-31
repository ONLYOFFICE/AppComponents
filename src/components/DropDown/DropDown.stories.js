import React from "react";
import { storiesOf } from "@storybook/react";
import withReadme from "storybook-readme/with-readme";
import {
  withKnobs,
  boolean,
  select,
  text,
  number
} from "@storybook/addon-knobs/react";
import Readme from "./README.md";
import DropDown from ".";
import DropDownItem from "../DropDownItem";
import Heading from "../Heading";
import Box from "../Box";

storiesOf("Components| DropDown", module)
  .addDecorator(withReadme(Readme))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Box paddingProp="16px">
      <Heading>Base drop-down</Heading>
      <DropDown
        directionX={select("directionX", ["left", "right"], "left")}
        directionY={select("directionY", ["top", "bottom"], "top")}
        manualWidth={text("manualWidth", "260px")}
        manualX={text("manualX", "30px")}
        manualY={text("manualY", "70px")}
        maxHeight={number("maxHeight", 0)}
        open={boolean("open", true)}
      >
        <DropDownItem header label="Category 1" />
        <DropDownItem
          label="Button 1"
          onClick={() => console.log("Button 1 clicked")}
        />
        <DropDownItem
          label="Button 2"
          onClick={() => console.log("Button 2 clicked")}
        />
        <DropDownItem
          label="Button 3"
          onClick={() => console.log("Button 3 clicked")}
        />
        <DropDownItem
          label="Button 4"
          onClick={() => console.log("Button 4 clicked")}
          disabled
        />
        <DropDownItem separator />
        <DropDownItem
          label="Button 5"
          onClick={() => console.log("Button 5 clicked")}
        />
        <DropDownItem
          label="Button 6"
          onClick={() => console.log("Button 6 clicked")}
        />
      </DropDown>
    </Box>
  ));
