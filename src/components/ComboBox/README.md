# ComboBox

Custom combo box input

### Usage

```js
import { ComboBox } from "asc-web-components";
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
  selectedOption={{
    key: 0,
    label: "Select"
  }}
  dropDownMaxHeight={200}
  noBorder={false}
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
| `noBorder`          |  `bool`   |    -     |                     -                      |  `false`  | Indicates that component is displayed without borders                                  |
| `scaled`            |  `bool`   |    -     |                     -                      |  `true`   | Indicates that component is scaled by parent                                           |
