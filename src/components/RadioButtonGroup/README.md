# RadioButtonGroup

Allows to add a group of radiobuttons

### Usage 

```js
import { RadioButtonGroup } from "app-components";
```

```jsx
<RadioButtonGroup
  name="fruits"
  selected="banana"
  options={[
    { value: "apple", label: "Sweet apple" },
    { value: "banana", label: "Banana" },
    { value: "Mandarin" }
  ]}
/>
```

### Properties

| Props         |   Type    | Required |          Values          |   Default    | Description                                                                                                                                                                                                       |
| ------------- | :-------: | :------: | :----------------------: | :----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`        | `string`  |    ✅    |            -             |      -       | Used as HTML `name` property for ```<input>``` tag. Used for RadioButtonGroup identification                                                                                                                         |
| `options`     | `arrayOf` |    ✅    |            -             |      -       | Array of objects defining a group of radiobuttons. Each element of the group contains `RadioButton` component props                                                                                                                                             |
| `selected`    | `string`  |    ✅    |            -             |      -       | Value of the selected radiobutton                                                                                                                                                                                 |
| `onClick`     |  `func`   |    -     |            -             |      -       | Allows to handle clicking events on `RadioButton` component                                                                                                                                                 |
| `orientation` |  `oneOf`  |    -     | `vertical`, `horizontal` | `horizontal` | Allows to set the position of radiobuttons                                                                                                                                                                                          |
| `disabled`    |  `bool`   |    -     |            -             |   `false`    | Disables all radiobuttons in a group                                                                                                                                                                                |
| `spacing`     | `string`  |    -     |            -             |    `15px`    | Changes the spacing between radiobuttons |
| `width`       | `string`  |    -     |            -             |    `100%`    | Sets the width of RadioButtonGroup container                                                                                              |
