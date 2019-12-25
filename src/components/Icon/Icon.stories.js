import React from "react";
import { storiesOf } from "@storybook/react";
import {
  text,
  boolean,
  withKnobs,
  color,
  select
} from "@storybook/addon-knobs/react";
import Icon from ".";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import Box from "../Box";

const size = ["small", "medium", "big", "scale"];
const svgUrls = ["/search.svg", "/logo.svg"]

const svg = () => (<svg height="100" width="100">
<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
Sorry, your browser does not support inline SVG.  
</svg>);

storiesOf("Components|Icon", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("base", () => (
    <Box paddingProp="16px" widthProp="100%">
      <Icon
        svgSource={select("svgSource", svgUrls, "/search.svg")}
        color={color("color", "")}
        strokeProp={color("strokeProp", "")}
        size={select("size", size, "medium")}
        fill={boolean("fill", false)}
        stroke={boolean("stroke", false)}
        fillPath={text("fillPath", "*")}
        strokePath={text("strokePath", "*")}
      />
      <Icon
        svgSource={"/search.svg"}
      />
    </Box>
  ));
