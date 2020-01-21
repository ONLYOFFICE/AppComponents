import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, number } from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import Tooltip from "./";
import Link from "../Link";
import Text from "../Text";
import Heading from "../Heading";
import Box from "../Box";
import Grid from "../Grid";

const arrayEffects = ["float", "solid"];
const arrayPlaces = ["top", "right", "bottom", "left"];

storiesOf("Components|Tooltip", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("Default", () => {
    return (
      <Box paddingProp="16px 0">
        <Box marginProp="100px 0 0 200px">
          <Link data-for="link" data-tip="Bob Johnston">
            Bob Johnston
          </Link>
        </Box>

        <Tooltip
          id="link"
          effect={select("effect", arrayEffects, "float")}
          place={select("place", arrayPlaces, "top")}
          offsetTop={number("offsetTop", 0)}
          offsetRight={number("offsetRight", 0)}
          offsetBottom={number("offsetBottom", 0)}
          offsetLeft={number("offsetLeft", 0)}
          delayShow={number("delayShow", 0)}
          delayHide={number("delayHide", 0)}
          getContent={dataTip => (
            <Box>
              <Text bold fontSize="16px">
                {dataTip}
              </Text>
              <Text color="#A3A9AE" fontSize="13px">
                BobJohnston@gmail.com
              </Text>
              <Text fontSize="13px">Developer</Text>
            </Box>
          )}
        />
      </Box>
    );
  });

const arrayUsers = [
  {
    key: "user_1",
    name: "Bob",
    email: "Bob@gmail.com",
    position: "developer"
  },
  {
    key: "user_2",
    name: "John",
    email: "John@gmail.com",
    position: "developer"
  },
  {
    key: "user_3",
    name: "Kevin",
    email: "Kevin@gmail.com",
    position: "developer"
  },
  {
    key: "user_4",
    name: "Alex",
    email: "Alex@gmail.com",
    position: "developer"
  },
  {
    key: "user_5",
    name: "Tomas",
    email: "Tomas@gmail.com",
    position: "developer"
  }
];

storiesOf("Components|Tooltip", module)
  .addDecorator(withReadme(Readme))
  .add("All", () => {
    return (
      <Grid columnsProp={["1fr 1fr"]}>
        <Box paddingProp="24px">
          <Box marginProp="50px 0 0 40px">
            <Heading>Hover on me</Heading>
            <Box paddingProp="8px 4px">
              <Link data-for="link" data-tip="Bob Johnston">
                Bob Johnston
              </Link>
            </Box>
          </Box>
          <Tooltip id="link" offsetRight={90} effect="solid">
            <Box>
              <Text isBold={true} fontSize="16px">
                Bob Johnston
              </Text>
              <Text color="#A3A9AE" fontSize="13px">
                BobJohnston@gmail.com
              </Text>
              <Text fontSize="13px">Developer</Text>
            </Box>
          </Tooltip>
        </Box>

        <Box paddingProp="24px">
          <Box marginProp="50px 0 0 0">
            <Heading>Hover group</Heading>
            <Box paddingProp="8px 4px">
              <Box>
                <Link data-for="group" data-tip={0}>
                  Bob
                </Link>
              </Box>

              <Box>
                <Link data-for="group" data-tip={1}>
                  John
                </Link>
              </Box>

              <Box>
                <Link data-for="group" data-tip={2}>
                  Kevin
                </Link>
              </Box>

              <Box>
                <Link data-for="group" data-tip={3}>
                  Alex
                </Link>
              </Box>

              <Box>
                <Link data-for="group" data-tip={4}>
                  Tomas
                </Link>
              </Box>
            </Box>
          </Box>

          <Tooltip
            id="group"
            offsetRight={60}
            delayHide={100}
            getContent={dataTip =>
              dataTip && (
                <Box>
                  <Text isBold={true} fontSize="16px">
                    {arrayUsers[dataTip].name}
                  </Text>
                  <Text color="#A3A9AE" fontSize="13px">
                    {arrayUsers[dataTip].email}
                  </Text>
                  <Text fontSize="13px">{arrayUsers[dataTip].position}</Text>
                </Box>
              )
            }
          />
        </Box>
      </Grid>
    );
  });
