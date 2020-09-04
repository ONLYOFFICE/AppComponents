import React from "react";
import { storiesOf } from "@storybook/react";
import { BooleanValue, StringValue } from "react-values";
import Box from "../Box";
import Grid from "../Grid";
import Text from "../Text";
import Heading from "../Heading";
import Link from "../Link";
import Tooltip from "../Tooltip";
import Button from "../Button";
import Loader from "../Loader";
import ComboBox from "../ComboBox";
import TextInput from "../TextInput";
import FixedInput from "../FixedInput";
import DatePicker from "../DatePicker";
import TextArea from "../TextArea";

import RadioButtonGroup from "../RadioButtonGroup";
import Checkbox from "../Checkbox";
import ToggleButton from "../ToggleButton";
import Scrollbar from "../Scrollbar";
import Calendar from "../Calendar";
import Avatar from "../Avatar";
import ToggleContent from "../ToggleContent";
import PhoneInput from "../PhoneInput";
import SwitchButton from "../SwitchButton";
import Slider from "../Slider";
import SquareButton from "../SquareButton";
import RoundButton from "../RoundButton";

const github = "https://github.com/ONLYOFFICE/AppComponents";
const arrayUsers = [
  { key: "user_1", name: "Bob", email: "Bob@gmail.com", position: "developer" },
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
  }
];

const options = [
  { key: 0, label: "Option 1", disabled: false, onClick: () => {} },
  { key: 1, label: "Option 2", disabled: false, onClick: () => {} },
  { key: 2, label: "Option 3", disabled: true, onClick: () => {} },
  { key: 3, label: "Option 4", disabled: false, onClick: () => {} }
];

storiesOf("Components|All", module)
  .addParameters({ options: { showAddonPanel: false } })
  .add("All", () => (
    <Grid gridGap="15px" columnsProp="400px">
      <Box paddingProp="16px" widthProp="100%">
        <Box paddingProp="8px">
          <Heading>Heading text</Heading>
        </Box>

        <Box paddingProp="8px">
          <Text>Base text</Text>
        </Box>

        <Box paddingProp="8px">
          <Box>
            <Link type="page" href={github}>
              Black page link
            </Link>
          </Box>
          <Box>
            <Link type="page" href={github} hovered>
              Hovered page link
            </Link>
          </Box>
          <Box>
            <Link type="action">Action link</Link>
          </Box>
          <Box>
            <Link type="action" hovered>
              Hovered action link
            </Link>
          </Box>
        </Box>

        <Box paddingProp="8px">
          <Box>
            <Text fontSize="16px" fontWeight={600}>
              Tooltip group:
            </Text>
            <Box paddingProp="8px 0">
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
            </Box>

            <Tooltip
              id="group"
              delayHide={100}
              offsetRight={60}
              getContent={dataTip =>
                dataTip && (
                  <>
                    <Text isBold={true} fontSize="16px">
                      {arrayUsers[dataTip].name}
                    </Text>
                    <Text color="#A3A9AE" fontSize="13px">
                      {arrayUsers[dataTip].email}
                    </Text>
                    <Text fontSize="13px">{arrayUsers[dataTip].position}</Text>
                  </>
                )
              }
            />
          </Box>
        </Box>

        <Box paddingProp="8px">
          <Button
            style={{ marginRight: "16px" }}
            size="big"
            primary
            label="Button"
          />
          <Button size="big" label="Button" />
        </Box>
        <Box paddingProp="8px">
          <BooleanValue>
            {({ value, toggle }) => (
              <SwitchButton
                checked={value}
                onChange={e => toggle(e.target.checked)}
              />
            )}
          </BooleanValue>
        </Box>
        <Box paddingProp="8px">
          <Slider />
        </Box>
        <Box paddingProp="8px 16px">
          <Loader type="base" size="30px" label="Loading..." />
        </Box>
        <Box paddingProp="8px 0px 8px 60px">
          <Loader type="oval" label="Loading" />
        </Box>
        <Box paddingProp="8px 0px 8px 60px">
          <Loader type="dual-ring" label="Loading" />
        </Box>
      </Box>

      <Box paddingProp="16px" widthProp="100%">
        <Box paddingProp="8px">
          <ComboBox
            options={options}
            selectedOption={options[0]}
            dropDownMaxHeight={200}
            scaledOptions
            size="content"
            onSelect={option => console.log("Selected", option)}
            scaled
          />
        </Box>
        <Box paddingProp="8px">
          <StringValue>
            {({ value, set }) => (
              <TextInput
                placeholder="Add comment"
                onChange={event => set(event.target.value)}
                value={value}
              />
            )}
          </StringValue>
        </Box>
        <Box paddingProp="8px">
          <StringValue>
            {({ value, set }) => (
              <FixedInput
                placeholder="Add comment"
                onChange={event => set(event.target.value)}
                fixedText=".com"
                value={value}
              />
            )}
          </StringValue>
        </Box>
        <Box paddingProp="8px">
          <DatePicker />
        </Box>
        <Box paddingProp="8px">
          <StringValue>
            {({ value, set }) => (
              <TextArea
                placeholder="Add comment"
                onChange={event => set(event.target.value)}
                value={value}
              />
            )}
          </StringValue>
        </Box>

        <Box marginProp="8px">
          <RadioButtonGroup
            name="fruits"
            selected="banana"
            options={[
              { value: "apple", label: "Apple" },
              { value: "banana", label: "Banana" },
              { value: "mandarin", label: "Mandarin" }
            ]}
          />
        </Box>

        <BooleanValue>
          {({ value, toggle }) => (
            <Box displayProp="flex" paddingProp="8px">
              <Box marginProp="0 8px 0 0">
                <Checkbox
                  label="Checkbox"
                  checked={value}
                  onChange={e => {
                    toggle(e.target.checked);
                  }}
                />
              </Box>
              <Checkbox
                label="Indeterminate"
                checked={value}
                indeterminate
                onChange={e => {
                  toggle(e.target.checked);
                }}
              />
            </Box>
          )}
        </BooleanValue>
        <BooleanValue>
          {({ value, toggle }) => (
            <Box paddingProp="8px">
              <ToggleButton
                label="ToggleButton"
                checked={value}
                onChange={e => {
                  toggle(e.target.checked);
                }}
              />
            </Box>
          )}
        </BooleanValue>
        <Box paddingProp="8px">
          <Scrollbar stype="mediumBlack" style={{ width: 350, height: 200 }}>
            ================================================================
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
            ================================================================
          </Scrollbar>
        </Box>
      </Box>
      <Box paddingProp="16px" widthProp="100%">
        <Box paddingProp="8px">
          <Calendar />
        </Box>
        <Box paddingProp="8px" marginProp="30px 0px 0px 40px">
          <Avatar size="max" userName="New user" />
        </Box>
        <Box paddingProp="8px" marginProp="0px 0px 0px 24px">
          <ToggleContent label="Toggle content">
            <Text>Toggle content text</Text>
          </ToggleContent>
        </Box>
      </Box>

      <Box paddingProp="16px" widthProp="100%">
        <Box paddingProp="8px">
          <PhoneInput locale="BY" />
        </Box>
        <Box paddingProp="8px">
          <SquareButton />
        </Box>
        <Box paddingProp="8px">
          <RoundButton type="minus" />
        </Box>
        <Box paddingProp="8px">
          <RoundButton type="plus" />
        </Box>
      </Box>
    </Grid>
  ));
