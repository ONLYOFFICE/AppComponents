# DropDown

A dropdown menu with any number of actions

### Usage

```js
import { DropDown } from "app-components";
```

```jsx
<DropDown open={false}></DropDown>
```

By default, it is used with DropDownItem elements as children.

If you want to display a custom element, place it among component children, but take into account that the styling will be applied to the whole component.

When using the component, note that the parent must have _position: relative_ CSS property. Otherwise, DropDown menu will appear outside the parent's borders.

### Properties

| Props                   |   Type   | Required |     Values      | Default  | Description                                                                           |
| ----------------------- | :------: | :------: | :-------------: | :------: | ------------------------------------------------------------------------------------- |
| `clickOutsideAction`    |  `func`  |    -     |        -        |    -     | Is required to relate a click outside DropDown with DropDown    |
| `enableOnClickOutside`  |  `func`  |    -     |        -        |    -     | Enables outside click listening by setting up the event listening bindings.           |
| `disableOnClickOutside` |  `func`  |    -     |        -        |    -     | Disables outside click listening by explicitly removing the event listening bindings. |
| `directionX`            | `oneOf`  |    -     | `left`, `right` |  `left`  | Sets the direction of dropdown menu opening relative to the parent                    |
| `directionY`            | `oneOf`  |    -     | `top`, `bottom` | `bottom` | Sets the direction of dropdown menu opening relative to the parent                    |
| `manualWidth`           | `string` |    -     |        -        |    -     | Specifies the exact width of the component in percent            |
| `manualX`               | `string` |    -     |        -        |    -     | Specifies the exact distance from the parent component along the horizontal axis                   |
| `manualY`               | `string` |    -     |        -        |    -     | Specifies the exact distance from the parent component along the vertical axis                   |
| `maxHeight`             | `number` |    -     |        -        |    -     | Sets the DropDown height at which a scrollbar appears                                                |
| `open`                  |  `bool`  |    -     |        -        | `false`  | Says when the dropdown should be open                                              |
