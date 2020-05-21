# SwitchButton

Actions with a button.

### Usage

```js
import { SwitchButton } from "app-components";
```

```jsx
<SwitchButton
  disabled={false}
  checked={false}
  onClick={() => alert("SwitchButton clicked")}
/>
```

### Properties

| Props      |   Type   | Required |         Values          | Default | Description                                           |
| ---------- | :------: | :------: | :---------------------: | :-----: | ----------------------------------------------------- |
| `disabled` |  `bool`  |    -     |            -            | `false` | Disables the button default functionality             |
| `onClick`  |  `func`  |    -     |            -            |    -    | The event triggered when the button is clicked        |
| `checked`  |  `bool`  |    -     |            -            | `false` | Makes SwitchButton checked.                           |

