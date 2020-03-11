# TextInput

Input field for single-line strings

#### See documentation: https://github.com/text-mask/text-mask

### Usage

```js
import { TextInput } from "app-components";
```

```js
const mask = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];
```

```jsx
<TextInput
  mask={mask}
  value="text"
  onChange={event => alert(event.target.value)}
/>
```

### Properties

| Props               |   Type   | Required |             Values              | Default | Description                                                                                                                                                                                                                                                   |
| ------------------- | :------: | :------: | :-----------------------------: | :-----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`             | `string` |    ✅    |                -                |    -    | Input value                                                                                                                                                                                                                                            |
| `onChange`          |  `func`  |    ✅    |                -                |    -    | Is called with a new value. Is required when input is not read-only. Parent passes it back as `value`                                                                                                                                                        |
| `name`              | `string` |    -     |                -                |    -    | Used as HTML `name` property                                                                                                                                                                                                                                  |
| `type`              | `string` |          |       `text`, `password`        | `text`  | Supported type of the input characters.                                                                                                                                                                                                                           |
| `size`              | `string` |          | `base`, `middle`, `big`, `huge` | `base`  | Supported size of the input characters.                                                                                                                                                                                                                           |
| `placeholder`       | `string` |    -     |                -                |    -    | Placeholder text for the input                                                                                                                                                                                                                                |
| `autoComplete`      | `string` |    -     |                -                |    -    | Used as HTML `autocomplete` property                                                                                                                                                                                                                          |
| `maxLength`         | `number` |    -     |                -                |    -    | Sets the maximum number of characters allowed in the input box.                                                                                                                                                              |
| `tabIndex`          | `number` |    -     |                -                |  `-1`   | The tabIndex attribute specifies the tab order of an element (when the "tab" button is used for navigating).                                                                                                                                                  |
| `error`             |  `bool`  |    -     |                -                |    -    | Indicates that the input field has an error with a red border                                                                                                                                                                                                                       |
| `warning`           |  `bool`  |    -     |                -                |    -    | Indicates that the input field has a warning with a yellow border                                                                                                                                                                                                                     |
| `disabled`          |  `bool`  |    -     |                -                | `false` | Indicates that the input box is disabled                                                                                                                                                                            |
| `scale`             |  `bool`  |    -     |                -                |    -    | Indicates the input field will be scaled to fit the width before the next element                                                                                                                                                                                                                         |
| `readOnly`          |  `bool`  |    -     |                -                | `false` | Indicates that the field is displaying read-only content                                                                                                                                                                                                      |
| `autoFocus`         |  `bool`  |    -     |                -                |    -    | Puts input field in focus at the initial render                                                                                                                                                                                                                       |
| `border`            |  `bool`  |    -     |                -                | `true`  | Indicates that the component contains borders                                                                                                                                                                                                                       |
| `keepCharPositions` |  `bool`  |    -     |                -                | `false` | When true, adding or deleting characters will not affect the positions of existing characters. When false, adding characters causes existing characters to advance. And deleting characters causes existing characters to move back. Can be used only with `mask` prop |
| `mask`              | `array`  |    -     |                -                |    -    | Input text mask                                                                                                                                                                                                                                               |
| `onFocus`           |  `func`  |    -     |                -                |    -    | Is called when the input field is focused                                                                                                                                                                                                                                  |
| `onBlur`            |  `func`  |    -     |                -                |    -    | Is called when the input field is blurred - when the focus is outside the input field                                                                                                                                                                                                                                  |
