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

| Props         |   Type   | Required | Values | Default | Description                                              |
| ------------- | :------: | :------: | :----: | :-----: | -------------------------------------------------------- |
| `value`       | `string` |    ✅    |   -    |    -    | Value for TextArea                                       |
| `onChange`    |  `func`  |    ✅    |   -    |    -    | Allow you to handle changing events of component         |
| `disabled`    |  `bool`  |    -     |   -    | `false` | Indicates that the field cannot be used                  |
| `readOnly`    |  `bool`  |    -     |   -    | `false` | Indicates that the field is displaying read-only content |
| `name`        | `string` |    -     |   -    |    -    | Used as HTML `name` property                             |
| `placeholder` | `string` |    -     |   -    |    -    | Placeholder for TextArea                                 |
