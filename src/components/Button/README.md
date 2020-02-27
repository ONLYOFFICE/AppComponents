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
| `primary`  |  `bool`  |    -     |            -            | `false` | Says when the button is primary                       |
| `scale`    |  `bool`  |    -     |            -            | `false` | Scales the width of the button to 100%                |
| `size`     | `oneOf`  |    -     | `base`, `middle`, `big` | `base`  | Sets button size                                      |
| `tabIndex` | `number` |    -     |            -            |  `-1`   | Sets the button tabindex                              |
