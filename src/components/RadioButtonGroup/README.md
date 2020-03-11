# RadioButtonGroup

Allows you to add a group radiobuttons

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
| `name`        | `string`  |    ✅    |            -             |      -       | Used as HTML `name` property for `<input>` tag. Used for RadioButtonGroup identification                                                                                                                         |
| `options`     | `arrayOf` |    ✅    |            -             |      -       | Array of objects, contains props for each `RadioButton` component                                                                                                                                             |
| `selected`    | `string`  |    ✅    |            -             |      -       | Value of the selected radiobutton                                                                                                                                                                                 |
| `onClick`     |  `func`   |    -     |            -             |      -       | Allows to handle clicking events on `RadioButton` component                                                                                                                                                |
| `orientation` |  `oneOf`  |    -     | `vertical`, `horizontal` | `horizontal` | Changes the position of radiobuttons                                                                                                                                                                                          |
| `disabled`    |  `bool`   |    -     |            -             |   `false`    | Disabling all radiobuttons in a group                                                                                                                                                                                |
| `spacing`     | `string`  |    -     |            -             |    `15px`    | Changes the spacing between radiobuttons. If orientation is `horizontal`, it is `margin-left`(applies to all radiobuttons, except for the first one), if orientation is `vertical`, it is `margin-bottom`(applies to all radiobuttons, except for the last one) |
| `width`       | `string`  |    -     |            -             |    `100%`    | Width of RadioButtonGroup container                                                                                                                                                                               |
