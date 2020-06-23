# SquareButton

Actions with a button.

### Usage

```js
import { SquareButton } from "app-components";
```

```jsx
<SquareButton
  disabled={false}
  onClick={() => alert("Button clicked")}
/>
```

### Properties

| Props      |   Type   | Required |         Values          | Default | Description                                           |
| ---------- | :------: | :------: | :---------------------: | :-----: | ----------------------------------------------------- |
| `disabled` |  `bool`  |    -     |            -            | `false` | Disables the button default functionality             |
| `onClick`  |  `func`  |    -     |            -            |    -    | The event triggered when the button is clicked        |
| `tabIndex` | `number` |    -     |            -            |  `-1`   | The tabIndex attribute specifies the tab order of the button (when the "tab" button is used for navigating).                             |
