# Loader

Loader component is used for displaying loading actions on a page

### Usage

```js
import { Loader } from "app-components";
```

```jsx
<Loader type="base" color="black" size="18px" label="Loading" />
```

### Properties

| Props   |   Type   | Required |           Values            |        Default         | Description |
| ------- | :------: | :------: | :-------------------------: | :--------------------: | ----------- |
| `color` | `string` |    -     |              -              |       `#63686a`        | Font color  |
| `label` | `string` |    -     |              -              | `Loading please wait.` | Text label  |
| `size`  | `string` |    -     |              -              |         `40px`         | Font size   |
| `type`  | `oneOf`  |    -     | `base`, `oval`, `dual-ring` |         `base`         | Loader type |
