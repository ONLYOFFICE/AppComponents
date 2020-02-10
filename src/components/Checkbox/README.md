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
| `checked`       |  `bool`  |    -     |   -    | `false` | Makes the checkbox checked                                  |
| `disabled`      |  `bool`  |    -     |   -    |    -    | Disables checkbox input                                     |
| `indeterminate` |  `bool`  |    -     |   -    |    -    | If true, a black filled rectangle appears in the checkbox   |
| `label`         | `string` |    -     |   -    |    -    | Checkbox label                                              |
| `onChange`      |  `func`  |    ✅    |   -    |    -    | Returns the value of the `checked` state                   |
| `reverse`       |  `bool`  |    -     |   -    | `false` | Swaps the checkbox and the label                            |
