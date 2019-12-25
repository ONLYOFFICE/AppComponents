# Button

Button is used for a action on a page.

### Usage

```js
import { Button } from "asc-web-components";
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
| `icon`     |  `node`  |    -     |            -            | `null`  | Icon node element                                     |
| `disabled` |  `bool`  |    -     |            -            | `false` | Tells when the button should present a disabled state |
| `label`    | `string` |    -     |            -            |    -    | Button text                                           |
| `onClick`  |  `func`  |    -     |            -            |    -    | What the button will trigger when clicked             |
| `primary`  |  `bool`  |    -     |            -            | `false` | Tells when the button should be primary               |
| `scale`    |  `bool`  |    -     |            -            | `false` | Scale width of button to 100%                         |
| `size`     | `oneOf`  |    -     | `base`, `middle`, `big` | `base`  | Size of button                                        |
| `tabIndex` | `number` |    -     |            -            |  `-1`   | Button tab index                                      |
