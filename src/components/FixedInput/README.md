# FixedInput

Text box for single-line strings with fixed block

#### See documentation: https://github.com/text-mask/text-mask

### Usage

```js
import { FixedInput } from "app-components";
```

```js
const mask = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];
```

```jsx
<FixedInput = {
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
| `type`              | `string` |          |       `text`, `password`        | `text`  | Supported type of input characters.                                                                                                                                                                                                                           |
| `size`              | `string` |          | `base`, `middle`, `big`, `huge` | `base`  | Supported size of input characters.                                                                                                                                                                                                                           |
| `placeholder`       | `string` |    -     |                -                |    -    | Placeholder text for the input                                                                                                                                                                                                                                |
| `autoComplete`      | `string` |    -     |                -                |    -    | Used as HTML `autocomplete` attribute                                                                                                                                                                                                                          |
| `maxLength`         | `number` |    -     |                -                |    -    | Sets the maximum number of characters allowed in the input box.                                                                                                                                                              |
| `tabIndex`          | `number` |    -     |                -                |  `-1`   | The tabIndex attribute specifies the tab order of the text box (when the "tab" button is used for navigating).                                                                                                                                                  |
| `error`             |  `bool`  |    -     |                -                |    -    | Indicates with a red border that the input field has an error                                                                                                                                                                                                                      |
| `warning`           |  `bool`  |    -     |                -                |    -    | Indicates with a yellow border that the input field has a warning                                                                                                                                                                                                                     |
| `disabled`          |  `bool`  |    -     |                -                | `false` | Indicates that the input box is disabled
| `scale`             |  `bool`  |    -     |                -                |    -    | Makes the input field stretch to fit the page width or the distance till the next element on the page                                                                                                                                                                                                                           |
| `readOnly`          |  `bool`  |    -     |                -                | `false` | Indicates that the field is displaying read-only content                                                                                                                                                                                                      |
| `autoFocus`         |  `bool`  |    -     |                -                |    -    | Puts input field in focus at the initial render                                                                                                                                                                                                                       |
| `border`            |  `bool`  |    -     |                -                | `true`  | Indicates that the component contains borders                                                                                                                                                                                                                       |
| `keepCharPositions` |  `bool`  |    -     |                -                | `false` | When true, adding or deleting characters will not affect the positions of existing characters. When false, adding characters makes existing characters move to the right of the cursor. Deleting characters makes existing characters move left following the cursor. Can be used only with `mask` prop |
| `mask`              | `array`  |    -     |                -                |    -    | Input text mask                                                                                                                                                                                                                                               |
| `onFocus`           |  `func`  |    -     |                -                |    -    | Is called when the input field is focused                                                                                                                                                                                                                                  |
| `onBlur`            |  `func`  |    -     |                -                |    -    | Is called when the input field is blurred - when the focus is outside the input field                                                                                                                                                                                                                                  |
| `fixedText`       | `string` |    -     |                -                |    -    | Placeholder text for the fixed component
