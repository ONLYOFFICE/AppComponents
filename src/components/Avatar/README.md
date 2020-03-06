# Avatar

User profile picture or company brand image.

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
| `size`     | `oneOf`  |    -     | `small`, `medium`, `big`, `max` | `medium` | Size of the Avatar image                            |
| `source`   | `string` |    -     |                -                |    -     | The address of the image                     |
| `userName` | `string` |    -     |                -                |    -     | Is used to create an avatar with initials    |
