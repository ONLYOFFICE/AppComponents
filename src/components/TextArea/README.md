# TextArea

TextArea is used for displaying custom textarea

### Usage

```js
import { TextArea } from "app-components";
```

```jsx
<TextArea
  placeholder="Add comment"
  onChange={event => alert(event.target.value)}
  value="value"
/>
```

### Properties

| Props         |   Type   | Required | Values |      Default      | Description                                                                                                 |
| ------------- | :------: | :------: | :----: | :---------------: | ----------------------------------------------------------------------------------------------------------- |
| `value`       | `string` |    ✅    |   -    |         -         | Value for TextArea                                                                                          |
| `onChange`    |  `func`  |    ✅    |   -    |         -         | Allow you to handle changing events of component                                                            |
| `disabled`    |  `bool`  |    -     |   -    |      `false`      | Indicates that the field cannot be used                                                                     |
| `error`       |  `bool`  |    -     |   -    |      `false`      | Indicates that the field has an error                                                                       |
| `warning`     |  `bool`  |    -     |   -    |      `false`      | Indicates that the has a warning                                                                            |
| `readOnly`    |  `bool`  |    -     |   -    |      `false`      | Indicates that the field is displaying read-only content                                                    |
| `name`        | `string` |    -     |   -    |         -         | Used as HTML `name` property                                                                                |
| `height`      | `string` |    -     |   -    | Uses theme height | Sets height in TextArea                                                                                     |
| `width`       | `string` |    -     |   -    | Uses theme width  | Sets width in TextArea                                                                                      |
| `placeholder` | `string` |    -     |   -    |         -         | Placeholder for TextArea                                                                                    |
| `maxLength`   | `number` |    -     |   -    |         -         | The maxlength attribute specifies the maximum number of characters allowed in the input element             |
| `tabIndex`    | `number` |    -     |   -    |         -         | The tabIndex attribute specifies the tab order of an element (when the "tab" button is used for navigating) |
