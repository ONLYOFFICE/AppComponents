# TextInput

Input field for single-line strings

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
| `value`             | `string` |    ✅    |                -                |    -    | Value of the input                                                                                                                                                                                                                                            |
| `onChange`          |  `func`  |    ✅    |                -                |    -    | Called with the new value. Required when input is not read only. Parent should pass it back as `value`                                                                                                                                                        |
| `name`              | `string` |    -     |                -                |    -    | Used as HTML `name` property                                                                                                                                                                                                                                  |
| `type`              | `string` |          |       `text`, `password`        | `text`  | Supported type of the input fields.                                                                                                                                                                                                                           |
| `size`              | `string` |          | `base`, `middle`, `big`, `huge` | `base`  | Supported size of the input fields.                                                                                                                                                                                                                           |
| `placeholder`       | `string` |    -     |                -                |    -    | Placeholder text for the input                                                                                                                                                                                                                                |
| `autoComplete`      | `string` |    -     |                -                |    -    | Used as HTML `autocomplete` property                                                                                                                                                                                                                          |
| `maxLength`         | `number` |    -     |                -                |    -    | The maxlength attribute specifies the maximum number of characters allowed in the input element.                                                                                                                                                              |
| `tabIndex`          | `number` |    -     |                -                |  `-1`   | The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating).                                                                                                                                                  |
| `error`             |  `bool`  |    -     |                -                |    -    | Indicates the input field has an error                                                                                                                                                                                                                        |
| `warning`           |  `bool`  |    -     |                -                |    -    | Indicates the input field has a warning                                                                                                                                                                                                                       |
| `disabled`          |  `bool`  |    -     |                -                | `false` | Indicates that the field cannot be used (e.g not authorised, or changes not saved)                                                                                                                                                                            |
| `scale`             |  `bool`  |    -     |                -                |    -    | Indicates the input field has scale                                                                                                                                                                                                                           |
| `readOnly`          |  `bool`  |    -     |                -                | `false` | Indicates that the field is displaying read-only content                                                                                                                                                                                                      |
| `autoFocus`         |  `bool`  |    -     |                -                |    -    | Focus the input field on initial render                                                                                                                                                                                                                       |
| `border`            |  `bool`  |    -     |                -                | `true`  | Indicates that component contain border                                                                                                                                                                                                                       |
| `keepCharPositions` |  `bool`  |    -     |                -                | `false` | When true, adding or deleting characters will not affect the positions of existing characters. When false, adding characters causes existing characters to advance. And deleting characters causes existing characters to move back. Used only with mask prop |
| `mask`              | `array`  |    -     |                -                |    -    | input text mask                                                                                                                                                                                                                                               |
| `onFocus`           |  `func`  |    -     |                -                |    -    | Called when field is focused                                                                                                                                                                                                                                  |
| `onBlur`            |  `func`  |    -     |                -                |    -    | Called when field is blurred                                                                                                                                                                                                                                  |
