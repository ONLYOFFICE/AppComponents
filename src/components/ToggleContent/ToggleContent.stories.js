import React from "react";
import { storiesOf } from "@storybook/react";
import ToggleContent from ".";
import Button from "../Button";
import TextInput from "../TextInput";
import Text from "../Text";
import Readme from "./README.md";
import withReadme from "storybook-readme/with-readme";
import { text, withKnobs, boolean } from "@storybook/addon-knobs/react";
import { optionsKnob as options } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Box from "../Box";

storiesOf("Components|ToggleContent", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => {
    const valuesMultiSelect = {
      button: "button",
      text: "text",
      toggleContent: "toggleContent",
      textInput: "textInput"
    };
    const optionsMultiSelect = options(
      "Children",
      valuesMultiSelect,
      ["text"],
      { display: "multi-select" }
    );

    let children = [];
    optionsMultiSelect.forEach(function(item, i) {
      switch (item) {
        case "button":
          children.push(
            <Button
              label={text("Button label", "OK")}
              key={i}
              onClick={action("button clicked!")}
            />
          );
          break;
        case "text":
          children.push(
            <Text key={i}>
              {text(
                "text",
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
              )}
            </Text>
          );
          break;
        case "toggleContent":
          children.push(
            <ToggleContent key={i}>
              {text(
                "text inside another ToogleContent",
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              )}
            </ToggleContent>
          );
          break;
        case "textInput":
          children.push(
            <TextInput
              key={i}
              border
              value="text"
              onChange={event => alert(event.target.value)}
            />
          );
          break;
        default:
          break;
      }
    });

    let open = boolean("open", true);

    return (
      <Box paddingProp="16px">
        <ToggleContent
          label={text("label", "Some label")}
          open={open}
          onChange={checked => {
            window.__STORYBOOK_ADDONS.channel.emit("storybookjs/knobs/change", {
              name: "open",
              value: checked
            });
          }}
        >
          {children}
        </ToggleContent>
      </Box>
    );
  });
