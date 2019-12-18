import React from "react";
import { storiesOf } from "@storybook/react";
import withReadme from "storybook-readme/with-readme";
import {
  withKnobs,
  select,
  color,
  boolean
} from "@storybook/addon-knobs/react";
import Readme from "./README.md";
import Box from "../Box";
import { Icons } from ".";

const iconNames = Object.keys(Icons);

storiesOf("Components|Icons", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => (
    <Box
      displayProp="grid"
      style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}
    >
      {Object.values(Icons).map((Icon, index) => {
        const sizeValue = select(
          "size",
          ["small", "medium", "big", "scale"],
          "big"
        );

        const isFill = boolean("isfill", false);
        const iconColor = isFill
          ? { color: `${color("color", "dimgray")}` }
          : {};

        const isStroke = boolean("isStroke", false);
        const iconStroke = isStroke
          ? { stroke: `${color("stroke", "dimgray")}` }
          : {};

        const containerWidth =
          sizeValue === "scale"
            ? {
                width: `${select(
                  "container width",
                  ["100", "200", "300", "400"],
                  "100"
                )}px`
              }
            : {};
        return (
          <Box
            paddingProp="16px"
            displayProp="flex"
            flexDirection="column"
            alignItems="center"
            key={index}
          >
            <Box marginProp="16px 0" style={containerWidth}>
              <Icon
                isfill={isFill}
                isStroke={isStroke}
                size={sizeValue}
                {...iconColor}
                {...iconStroke}
              />
            </Box>
            <span>{iconNames[index]}</span>
          </Box>
        );
      })}
    </Box>
  ));
