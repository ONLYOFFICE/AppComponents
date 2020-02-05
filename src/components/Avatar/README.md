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
| `size`     | `oneOf`  |    -     | `small`, `medium`, `big`, `max` | `medium` | User profile picture size                    |
| `source`   | `string` |    -     |                -                |    -     | URL or location of the file used to create user profile picture |
| `userName` | `string` |    -     |                -                |    -     | User profile picture with user initials. __NB__: If you want to create a profile picture with initials, only _the first letters of the first two words_ of the line are used       |
