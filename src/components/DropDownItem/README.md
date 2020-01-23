# DropDownItem

Is a item of DropDown component

### Usage

```js
import { DropDownItem } from "app-components";
```

```jsx
<DropDownItem
  isSeparator={false}
  isHeader={false}
  label="Button 1"
  onClick={() => console.log("Button 1 clicked")}
/>
```

An item can act as separator, header, or container.

When used as container, it will retain all styling features and positioning. To disable hover effects in container mode, you can use _noHover_ property.

### Properties

| Props         |   Type   | Required | Values |     Default     | Description                                                |
| ------------- | :------: | :------: | :----: | :-------------: | ---------------------------------------------------------- |
| `disabled`    |  `bool`  |    -     |   -    |     `false`     | Tells when the dropdown item should display like disabled  |
| `isHeader`    |  `bool`  |    -     |   -    |     `false`     | Tells when the dropdown item should display like header    |
| `isSeparator` |  `bool`  |    -     |   -    |     `false`     | Tells when the dropdown item should display like separator |
| `label`       | `string` |    -     |   -    | `Dropdown item` | Dropdown item text                                         |
| `noHover`     |  `bool`  |    -     |   -    |     `false`     | Disable default style hover effect                         |
| `onClick`     |  `func`  |    -     |   -    |        -        | What the dropdown item will trigger when clicked           |
