import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import Button from ".";
//import { Icons } from '../icons';
import { orderBy } from "lodash";
import Box from "../Box";

storiesOf("Components|Buttons", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => {
    const sizeOptions = ["base", "medium", "big"];
    //const iconNames = orderBy(Object.keys(Icons), [name => name.toLowerCase()], ['asc']);

    //const iconName = select("icon", ['', ...iconNames], '');
    //const hintIcon = iconName ? React.createElement(Icons[iconName]) : undefined;

    return (
      <Box paddingProp="16px">
        <Button
          label={text("label", "Base button")}
          primary={boolean("primary", true)}
          size={select("size", sizeOptions, "big")}
          scale={boolean("scale", false)}
          loaded={boolean("loaded", false)}
          hovered={boolean("hovered", false)}
          clicked={boolean("clicked", false)}
          disabled={boolean("disabled", false)}
          onClick={action("clicked")}

          //icon={hintIcon}
        />
      </Box>
    );
  });
