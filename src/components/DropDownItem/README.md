# DropDownItem

An item used in DropDown component

### Usage

```js
import { DropDownItem } from "app-components";
```

```jsx
<DropDownItem
  separator={false}
  header={false}
  label="Button 1"
  onClick={() => console.log("Button 1 clicked")}
/>
```

The item can act as a separator, header, or container.

When used as a container, it retains all the styling features and positioning. To disable hover effects in container mode, you can use _noHover_ property.

### Properties

| Props         |   Type   | Required | Values |     Default     | Description                                                |
| ------------- | :------: | :------: | :----: | :-------------: | ---------------------------------------------------------- |
| `disabled`    |  `bool`  |    -     |   -    |     `false`     | Says when the dropdown item should be disabled  |
| `header`    |  `bool`  |    -     |   -    |     `false`     | Says when the dropdown item should display as a header    |
| `separator` |  `bool`  |    -     |   -    |     `false`     | Says when the dropdown item should display as a separator |
| `label`       | `string` |    -     |   -    | `Dropdown item` | Dropdown item text                                         |
| `noHover`     |  `bool`  |    -     |   -    |     `false`     | Disables default style hover effect                         |
| `onClick`     |  `func`  |    -     |   -    |        -        | What the DropDown item will trigger when clicked           |
