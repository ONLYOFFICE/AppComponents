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
  .addParameters({ options: { showAddonPanel: false } })
  /*.add("Default", () => (
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

        const fill = boolean("fill", false);
        const iconColor = fill
          ? { color: `${color("color", "dimgray")}` }
          : {};

        const stroke = boolean("stroke", false);
        const iconStroke = stroke
          ? { strokeProp: `${color("strokeColor", "dimgray")}` }
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
                fill={fill}
                stroke={stroke}
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
  ));*/
