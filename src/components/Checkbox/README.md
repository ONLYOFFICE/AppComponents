# Checkbox

Custom checkbox input

### Usage

```js
import { Checkbox } from "app-components";
```

```jsx
<Checkbox
  label="check-box"
  checked={false}
  indeterminate={false}
  disabled={false}
  onChange={() => {}}
/>
```

### Properties

| Props           |   Type   | Required | Values | Default | Description                                                 |
| --------------- | :------: | :------: | :----: | :-----: | ----------------------------------------------------------- |
| `checked`       |  `bool`  |    -     |   -    | `false` | The checked property sets the checked state of a checkbox   |
| `disabled`      |  `bool`  |    -     |   -    |    -    | Disables the Checkbox input                                 |
| `indeterminate` |  `bool`  |    -     |   -    |    -    | If true, this state is shown as a rectangle in the checkbox |
| `label`         | `string` |    -     |   -    |    -    | Label of the input                                          |
| `onChange`      |  `func`  |    ✅    |   -    |    -    | Will be triggered whenever an CheckboxInput is clicked      |
| `reverse`       |  `bool`  |    -     |   -    | `false` | Swaps the checkbox and the label                            |
