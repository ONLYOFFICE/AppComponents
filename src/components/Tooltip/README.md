# Tooltip

Custom tooltip

### See documentation for more details : https://github.com/wwayne/react-tooltip

### Usage with array

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
| `data-event`      | `string` |    -     |          `click, focus`          |    -    | Custom event that triggers tooltip   |
| `data-for`        | `string` |    ✅    |                -                 |    -    | Is used to display tooltip - corresponds to the tooltip id   |
| `data-offset`     | `string` |    -     | `top`, `left`, `right`, `bottom` |    -    | Offset of the selected tooltip from the parent element set in px |
| `data-place`      | `string` |    -     | `top`, `left`, `right`, `bottom  |    -    | Tooltip placement direction relative to the parent element |
| `data-tip`        | `string` |    -     |                -                 |    -    | Renders custom tooltip content |
| `data-delay-show` | `string` |    -     |                -                 |    -    | Allows to show tooltip with delay. Delay time can be set |
| `data-delay-hide` | `string` |    -     |                -                 |    -    | Allows to hide tooltip with delay. Delay time can be set  |

### React Tooltip Properties

| Props              |      Type      | Required |              Values              | Default | Description                            |
| ------------------ | :------------: | :------: | :------------------------------: | :-----: | -------------------------------------- |
| `effect`           |    `string`    |    -     |         `float`, `solid`         | `float` | Defines tooltip behavior on mouse hover - floating with the cursor (`float`) or remaining still (`solid`) while the cursor is hovering|
| `id`               |    `string`    |    ✅    |                -                 |    -    | Used as HTML id attribute            |
| `maxWidth`         |    `number`    |    -     |                -                 |  `340`  | Sets maximum tooltip width              |
| `offsetBottom`     |    `number`    |    -     |                -                 |    -    | Sets bottom offset from the center of the element the tooltip is attached to (in px). Applies to all tooltips on the page |
| `offsetLeft`       |    `number`    |    -     |                -                 |    -    | Sets left offset from the center of the element the tooltip is attached to (in px). Applies to all tooltips on the page   |
| `offsetRight`      |    `number`    |    -     |                -                 |    -    | Sets right offset from the center of the element the tooltip is attached to (in px). Applies to all tooltips on the page   |
| `offsetTop`        |    `number`    |    -     |                -                 |    -    | Sets top offset from the center of the element it is attached to (in px). Applies to all tooltips on the page  |
| `delayShow`        |    `number`    |    -     |                -                 |    -    | Allows to show tooltip with delay and set a delay time |
| `delayHide`        |    `number`    |    -     |                -                 |    -    | Allows to hide tooltip with delay and set a delay time |
| `place`            |    `string`    |    -     | `top`, `right`, `bottom`, `left` |  `top`  | Defines global tooltip placement - relative to the parent components with `data-for` heading  |
| `getContent`       |     `func`     |    -     |                                  |    -    | Generates tooltip content dynamically depending on the cursor position |
| `overridePosition` |     `func`     |    -     |                -                 |    -    | Overrides standard tooltip position with a custom one |
