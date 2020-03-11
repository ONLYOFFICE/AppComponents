# Tooltip

Custom tooltip

#### See documentation: https://github.com/wwayne/react-tooltip

```js
import { Tooltip, Link, Text, Box } from "app-components";
```

```js
const arrayUsers = [
  {
    key: "user_1",
    name: "Bob",
    email: "Bob1@gmail.com",
    position: "developer"
  },
  {
    key: "user_2",
    name: "John",
    email: "John@gmail.com",
    position: "developer"
  },
  {
    key: "user_3",
    name: "Kevin",
    email: "Kevin@gmail.com",
    position: "developer"
  },
  {
    key: "user_4",
    name: "Alex",
    email: "Alex@gmail.com",
    position: "developer"
  },
  {
    key: "user_5",
    name: "Tomas",
    email: "Tomas@gmail.com",
    position: "developer"
  }
];
```

```jsx
  <h5 style={{ marginLeft: -5 }}>Hover group</h5>
  <Link data-for="group" data-tip={0}>Bob</Link><br />
  <Link data-for="group" data-tip={1}>John</Link><br />
  <Link data-for="group" data-tip={2}>Kevin</Link><br />
  <Link data-for="group" data-tip={3}>Alex</Link><br />
  <Link data-for="group" data-tip={4}>Tomas</Link>
```

```jsx
<Tooltip
  id="group"
  offsetRight={90}
  getContent={dataTip =>
    dataTip ? (
      <Box>
        <Text isBold={true} fontSize="16px">
          {arrayUsers[dataTip].name}
        </Text>
        <Text color="#A3A9AE" fontSize="13px">
          {arrayUsers[dataTip].email}
        </Text>
        <Text fontSize="13px">{arrayUsers[dataTip].position}</Text>
      </Box>
    ) : null
  }
/>
```

### YouComponent Properties

| Props             |   Type   | Required |              Values              | Default | Description                       |
| ----------------- | :------: | :------: | :------------------------------: | :-----: | --------------------------------- |
| `data-event`      | `string` |    -     |          `click, focus`          |    -    | Custom event that triggers the tooltip   |
| `data-for`        | `string` |    ✅    |                -                 |    -    | Is necessary to display the tooltip. Id of the element Corresponds to the id of Tooltip  |
| `data-offset`     | `string` |    -     | `top`, `left`, `right`, `bottom` |    -    | Offset of the current tooltip from the parent component     |
| `data-place`      | `string` |    -     | `top`, `right`, `bottom`, `left` |    -    | Tooltip placement                 |
| `data-tip`        | `string` |    -     |                -                 |    -    | Required to render custom content of the tooltip |
| `data-delay-show` | `string` |    -     |                -                 |    -    | Shows tooltip with a delay        |
| `data-delay-hide` | `string` |    -     |                -                 |    -    | Hides tooltip with a delay        |

### ReactTooltip Properties

| Props              |      Type      | Required |              Values              | Default | Description                            |
| ------------------ | :------------: | :------: | :------------------------------: | :-----: | -------------------------------------- |
| `effect`           |    `string`    |    -     |         `float`, `solid`         | `float` | Behavior of tooltip                    |
| `id`               |    `string`    |    ✅    |                -                 |    -    | Used as HTML id attribute - like in data-for            |
| `maxWidth`         |    `number`    |    -     |                -                 |  `340`  | Sets max width of tooltip               |
| `offsetBottom`     |    `number`    |    -     |                -                 |    -    | Sets a bottom offset for all tooltips on page     |
| `offsetLeft`       |    `number`    |    -     |                -                 |    -    | Sets a bottom offset for all tooltips on page       |
| `offsetRight`      |    `number`    |    -     |                -                 |    -    | Sets a bottom offset for all tooltips on page      |
| `offsetTop`        |    `number`    |    -     |                -                 |    -    | Sets a bottom offset for all tooltips on page        |
| `delayShow`        |    `number`    |    -     |                -                 |    -    | Shows tooltip with a delay                     |
| `delayHide`        |    `number`    |    -     |                -                 |    -    | Hides tooltip with a delay                     |
| `place`            |    `string`    |    -     | `top`, `right`, `bottom`, `left` |  `top`  | Global tooltip placement               |
| `getContent`       |     `func`     |    -     |                                  |    -    | Generates the tooltip content dynamically   |
| `overridePosition` |     `func`     |    -     |                -                 |    -    | Replaces the standard tooltip position |
