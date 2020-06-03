# Slider

Minimum length setting

### Usage

```js
import { Slider } from "app-components";
```

```jsx
<Slider
  disabled={false}
  value={5}
  min={1}
  max={30}
  onChange={(value) => alert("The current value: " + value)}
/>
```

### Properties

| Props      |   Type   | Required |         Values          | Default | Description                                           |
| ---------- | :------: | :------: | :---------------------: | :-----: | ----------------------------------------------------- |
| `disabled` |  `bool`  |    -     |            -            | `false` | Disables the slider default functionality             |
| `value`    |  `number`  |    -     |            -            | 5 | Slider value                                              |
| `min`      |  `number`  |    -     |            -            | 0 | Minimum value                                             |
| `max`      |  `number`  |    -     |            -            | 30 | Maximum value                                            |
| `onChange` |  `func`    |    -     |            -            | - |  The event triggered when the slider is change            |


