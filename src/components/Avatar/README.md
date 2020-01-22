# Avatar

Used to display an avatar or brand.

### Usage

```js
import { Avatar } from "app-components";
```

```jsx
<Avatar size="max" source="" userName="" editing={false} />
```

If you want to create an avatar with initials, only _first letter of first two words_ of line is used.

### Properties

| Props      |   Type   | Required |             Values              | Default  | Description                                  |
| ---------- | :------: | :------: | :-----------------------------: | :------: | -------------------------------------------- |
| `size`     | `oneOf`  |    -     | `max`, `big`, `medium`, `small` | `medium` | Size of avatar                               |
| `source`   | `string` |    -     |                -                |    -     | The address of the image for an image avatar |
| `userName` | `string` |    -     |                -                |    -     | Need to create an avatar with initials       |
