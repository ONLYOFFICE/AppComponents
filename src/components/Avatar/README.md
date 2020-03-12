# Avatar

User profile picture or company brand image.

### Usage

```js
import { Avatar } from "app-components";
```

```jsx
<Avatar size="max" source="" userName="" editing={false} />
```

### Properties

| Props      |   Type   | Required |             Values              | Default  | Description                                  |
| ---------- | :------: | :------: | :-----------------------------: | :------: | -------------------------------------------- |
| `size`     | `oneOf`  |    -     | `small`, `medium`, `big`, `max` | `medium` | Image size                                   |
| `source`   | `string` |    -     |                -                |    -     | Image address - local or URL                 |
| `userName` | `string` |    -     |                -                |    -     | Is used to create an avatar with initials - _the first letters of the first two words_ of the line are used |
