# RadioButton

Allows to add a custom radiobutton

### Usage

```js
import { RadioButton } from "app-components";
```

```jsx
<RadioButton name="fruits" value="apple" label="Sweet apple" />
```

### Properties

| Props      |   Type   | Required | Values | Default | Description                                                                               |
| ---------- | :------: | :------: | :----: | :-----: | ----------------------------------------------------------------------------------------- |
| `checked`  |  `bool`  |    -     |   -    | `false` | Used as HTML `checked` property for each `<input>` tag                                    |
| `disabled` |  `bool`  |    -     |   -    | `false` | Used as HTML `disabled` property for each `<input>` tag                                   |
| `label`    | `string` |    -     |   -    |    -    | Name of the radiobutton. If `label` value is missing, `value` prop will be used                                  |
| `onClick`  |  `func`  |    -     |   -    |    -    | Allows  to handle clicking events                                                         |
| `value`    | `string` |    -     |   -    |    -    | Used as HTML `value` property for `<input>` tag. Used for identification of each radiobutton    |
| `reverse`  |  `bool`  |    -     |   -    | `false` | Swaps the checkbox and the label                                                          |
