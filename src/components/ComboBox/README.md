# ComboBox

Custom combo box input

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

Options have options:

- key - Item key, may be a string or a number
- label - Display text
- icon - Optional name of icon that will be displayed before label
- disabled - Make option disabled
- onClick - On click function

ComboBox perceives all property`s for positioning from DropDown!

If you need to display a custom list of options, you must use advancedOptions property. Like this:

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

To use Combobox as a toggle button, you must declare it according to the parameters:

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
| `selectedOption`    | `object`  |    ✅    |                     -                      |     -     | Selected option                                                                        |
| `advancedOptions`   | `element` |    -     |                     -                      |     -     | If you need display options not basic options                                          |
| `displayType`       |  `oneOf`  |    -     |            `default`, `toggle`             | `default` | Component Display Type                                                                 |
| `dropDownMaxHeight` | `number`  |    -     |                     -                      |     -     | Height of Dropdown                                                                     |
| `disabled`          |  `bool`   |    -     |                     -                      |  `false`  | Indicates that component is disabled                                                   |
| `onSelect`          |  `func`   |    -     |                     -                      |     -     | Will be triggered whenever an ComboBox is selected option                              |
| `scaledOptions`     |  `bool`   |    -     |                     -                      |  `false`  | Indicates that component`s options is scaled by ComboButton                            |
| `toggleAction`      |  `func`   |    -     |                     -                      |     -     | The event will be raised when using `displayType: toggle` when clicking on a component |
| `size`              |  `oneOf`  |    -     | `base`, `middle`, `big`, `huge`, `content` |  `base`   | Select component width, one of default                                                 |
| `withoutBorder`     |  `bool`   |    -     |                     -                      |  `false`  | Indicates that component is displayed without borders                                  |
| `scaled`            |  `bool`   |    -     |                     -                      |  `true`   | Indicates that component is scaled by parent                                           |

### DropDown properties

| Props                |  Type   | Required |       Values        |  Default  | Description                                                                       |
| -------------------- | :-----: | :------: | :-----------------: | :-------: | --------------------------------------------------------------------------------- |
| `directionX`         | `oneOf` |    -     |   `left`, `right`   |  `left`   | Sets the opening direction relative to the parent                                 |
| `directionY`         | `oneOf` |    -     |   `top`, `bottom`   | `bottom`  | Sets the opening direction relative to the parent                                 |
| `open`               | `bool`  |    -     |          -          |     -     | Tells when the dropdown should be opened                                          |
| `clickOutsideAction` | `func`  |    -     | `default`, `toggle` | `default` | Required for determining a click outside DropDown with the withBackdrop parameter |
