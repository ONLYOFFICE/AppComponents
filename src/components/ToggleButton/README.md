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
| `checked`  |  `bool`  |    -     |   -    |    -    | Makes ToggleButton checked.                                    |
| `onChange` |  `func`  |    ✅    |   -    |    -    | Is triggered whenever an ToggleButton is clicked               |
| `disabled` |  `bool`  |    -     |   -    |    -    | Disables the ToggleButton                                      |
| `label`    | `string` |    -     |   -    |    -    | Label of the ToggleButton                                           |
| `reverse`  |  `bool`  |    -     |   -    | `false` | Swaps the ToggleButton and the label                               |
