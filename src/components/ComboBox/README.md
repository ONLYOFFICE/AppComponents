# ComboBox

A component for displaying a customizable list of options.

### Usage

```js
import { ComboBox } from "app-components";
```

```js
const options = [
  {
    key: 1,
    icon: "CatalogEmployeeIcon", // optional item
    label: "Option 1",
    disabled: false, // optional item
    onClick: clickFunction // optional item
  }
];
```

```jsx
<ComboBox
  options={options}
  disabled={false}
  selectedOption={options[0]}
  dropDownMaxHeight={200}
  withoutBorder={false}
  scale={true}
  scaledOptions={true}
  size="content"
  onSelect={option => console.log("selected", option)}
/>
```

Items within the ComboBox may have the following parameters:

- key - option key, may be a string or a number
- label - the displayed text
- icon - optional name of the icon that will be displayed next to the label
- disabled - disables options from the dropdown list
- onClick - the event triggered when a component item is clicked 

ComboBox inherits positioning parameters from DropDown component

To display a custom list of items, you need to use advancedOptions property. Like this:

```js
const advancedOptions = (
  <>
    <DropDownItem>
      <RadioButton value="asc" name="first" label="A-Z" isChecked={true} />
    </DropDownItem>
    <DropDownItem>
      <RadioButton value="desc" name="first" label="Z-A" />
    </DropDownItem>
    <DropDownItem isSeparator />
    <DropDownItem>
      <RadioButton value="first" name="second" label="First name" />
    </DropDownItem>
    <DropDownItem>
      <RadioButton
        value="last"
        name="second"
        label="Last name"
        isChecked={true}
      />
    </DropDownItem>
  </>
);
```

```jsx
<ComboBox
  options={[]} // An empty array will enable advancedOptions
  advancedOptions={advancedOptions}
  onSelect={option => console.log("Selected option", option)}
  selectedOption={{
    key: 0,
    label: "Select"
  }}
  disabled={false}
  scaled={false}
  size="content"
  directionX="right"
>
  <Icons.NavLogoIcon size="medium" key="comboIcon" />
</ComboBox>
```

To use Combobox as a toggle button, use the parameters:

```jsx
<ComboBox
  options={[]} // Required to display correctly
  selectedOption={{
    key: 0,
    label: "Selected option"
  }}
  scaled={false}
  size="content"
  displayType="toggle"
  toggleAction={alert("action")}
>
  <Icons.NavLogoIcon size="medium" key="comboIcon" />
</ComboBox>
```

### Properties

| Props               |   Type    | Required |                   Values                   |  Default  | Description                                                                            |
| ------------------- | :-------: | :------: | :----------------------------------------: | :-------: | -------------------------------------------------------------------------------------- |
| `options`           |  `array`  |    ✅    |                     -                      |     -     | Combo box options                                                                      |
| `selectedOption`    | `object`  |    ✅    |                     -                      |     -     | Sets the option that is selected by the user or is set by default                              |
| `advancedOptions`   | `element` |    -     |                     -                      |     -     | Is used to display a custom list of items - other than the basic ones                  |
| `displayType`       |  `oneOf`  |    -     |            `default`, `toggle`             | `default` | Is used to switch ComboBox to toggle mode to use toggle actions                        |
| `dropDownMaxHeight` | `number`  |    -     |                     -                      |     -     | Height of Dropdown                                                                     |
| `disabled`          |  `bool`   |    -     |                     -                      |  `false`  | Disables the whole component                                                           |
| `onSelect`          |  `func`   |    -     |                     -                      |     -     | The event triggered whenever an option of the ComboBox is selected                     |
| `scaledOptions`     |  `bool`   |    -     |                     -                      |  `false`  | Allows the component`s options container scaling to fit ComboButton width             |
| `toggleAction`      |  `func`   |    -     |                     -                      |     -     | The event triggered when `displayType: toggle` parameter is on                         |
| `size`              |  `oneOf`  |    -     | `base`, `middle`, `big`, `huge`, `content` |  `base`   | Allows to select the component width                                                   |
| `withoutBorder`     |  `bool`   |    -     |                     -                      |  `false`  | Allows to display the component without borders                                        |
| `scaled`            |  `bool`   |    -     |                     -                      |  `true`   | Allows to scale the component to match the parent width                                |

### DropDown properties

| Props                |  Type   | Required |       Values        |  Default  | Description                                                                       |
| -------------------- | :-----: | :------: | :-----------------: | :-------: | --------------------------------------------------------------------------------- |
| `directionX`         | `oneOf` |    -     |   `left`, `right`   |  `left`   | Sets the direction of dropdown menu opening relative to the parent                |
| `directionY`         | `oneOf` |    -     |   `top`, `bottom`   | `bottom`  | Sets the direction of dropdown menu opening relative to the parent                |
| `open`               | `bool`  |    -     |          -          |     -     | Says when the dropdown should be open                                             |
| `clickOutsideAction` | `func`  |    -     | `default`, `toggle` | `default` | Required for determining the resulting action on a click outside DropDown list    |
