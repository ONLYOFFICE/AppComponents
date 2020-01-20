import React from "react";
import { storiesOf } from "@storybook/react";
import Link from ".";
import Readme from "./README.md";
import {
  text,
  boolean,
  withKnobs,
  select,
  color,
  number
} from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import { action } from "@storybook/addon-actions";
import Box from "../Box";

const target = ["_blank", "_self", "_parent", "_top"];
const github = "https://github.com/ONLYOFFICE/AppComponents";

function clickActionLink(e) {
  console.log("clickActionLink", e);
  action("actionClick")(e);
}

storiesOf("Components|Link", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => {
    const href = text("href", github);

    const actionProps =
      href && href.length > 0 ? { href } : { onClick: clickActionLink };

    return (
      <Box paddingProp="16px">
        <Link
          type={text("type", "page")}
          color={color("color", "")}
          fontSize={text("fontSize", "13px")}
          fontWeight={text("fontWeight", "400")}
          bold={boolean("bold", false)}
          tabIndex={number("number", -1)}
          target={select("target", target, "_blank")}
          textOverflow={boolean("textOverflow", false)}
          hovered={boolean("hovered", false)}
          noHover={boolean("noHover", false)}
          semitransparent={boolean("semitransparent", false)}
          {...actionProps}
        >
          {text("text", "Simple link")}
        </Link>
      </Box>
    );
  });
