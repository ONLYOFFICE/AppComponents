# Button

Actions with a button.

### Usage

```js
import { Button } from "app-components";
```

```jsx
<Button
  size="base"
  disabled={false}
  onClick={() => alert("Button clicked")}
  label="OK"
/>
```

### Properties

| Props      |   Type   | Required |         Values          | Default | Description                                           |
| ---------- | :------: | :------: | :---------------------: | :-----: | ----------------------------------------------------- |
| `disabled` |  `bool`  |    -     |            -            | `false` | Disables the button default functionality             |
| `label`    | `string` |    -     |            -            |    -    | Allows to enter button text                           |
| `onClick`  |  `func`  |    -     |            -            |    -    | The event triggered when the button is clicked        |
| `primary`  |  `bool`  |    -     |            -            | `false` | Indicates which button is primary - highlights it with color                      |
| `scale`    |  `bool`  |    -     |            -            | `false` | Scales the button width to 100%                       |
| `size`     | `oneOf`  |    -     | `base`, `middle`, `big` | `base`  | Sets the button size                                      |
| `tabIndex` | `number` |    -     |            -            |  `-1`   | The tabIndex attribute specifies the tab order of the button (when the "tab" button is used for navigating).                             |
