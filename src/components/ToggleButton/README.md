# ToggleButton

Custom toggle button input

### Usage

```js
import { ToggleButton } from "app-components";
```

```jsx
<ToggleButton
  label="text"
  onChange={event => console.log(event.target.value)}
  checked={false}
/>
```

#### Properties

| Props      |   Type   | Required | Values | Default | Description                                                    |
| ---------- | :------: | :------: | :----: | :-----: | -------------------------------------------------------------- |
| `checked`  |  `bool`  |    -     |   -    |    -    | The checked property sets the checked state of a ToggleButton. |
| `onChange` |  `func`  |    ✅    |   -    |    -    | Will be triggered whenever an ToggleButton is clicked          |
| `disabled` |  `bool`  |    -     |   -    |    -    | Disables the ToggleButton                                      |
| `label`    | `string` |    -     |   -    |    -    | Label of the input                                             |
| `reverse`  |  `bool`  |    -     |   -    | `false` | Swaps the checkbox and the label                               |
