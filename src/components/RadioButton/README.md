# RadioButton

RadioButton allow you to add radiobutton

### Usage

```js
import { RadioButton } from "asc-web-components";
```

```jsx
<RadioButton name="fruits" value="apple" label="Sweet apple" />
```

### Properties

`<RadioButtonGroup />` props supersede RadioButton props

| Props      |   Type   | Required | Values | Default | Description                                                                               |
| ---------- | :------: | :------: | :----: | :-----: | ----------------------------------------------------------------------------------------- |
| `checked`  |  `bool`  |    -     |   -    | `false` | Used as HTML `checked` property for each `<input>` tag                                    |
| `disabled` |  `bool`  |    -     |   -    | `false` | Used as HTML `disabled` property for each `<input>` tag                                   |
| `label`    | `string` |    -     |   -    |    -    | Name of the radiobutton. If missed, `value` will be used                                  |
| `onClick`  |  `func`  |    -     |   -    |    -    | Allow you to handle clicking events on component                                          |
| `value`    | `string` |    -     |   -    |    -    | Used as HTML `value` property for `<input>` tag. Used for identification each radiobutton |
| `reverse`  |  `bool`  |    -     |   -    | `false` | Swaps the checkbox and the label                                                          |
