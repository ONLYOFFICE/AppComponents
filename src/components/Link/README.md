# Link

It is a link of 2 types:

1. page - a simple link which refers to other pages and parts of the current page;
2. action - a link, which usually doesn't have a hyperlink and does nothing on click (open dropdown, filter data, etc.)

### Usage

```js
import { Link } from "app-components";
```

```jsx
<Link type="page" color="black" href="https://github.com" bold={true}>
  Bold page link
</Link>
```

### Properties

| Props             |       Type       | Required |                Values                | Default | Description                                                                                  |
| ----------------- | :--------------: | :------: | :----------------------------------: | :-----: | -------------------------------------------------------------------------------------------- |
| `color`           |     `string`     |    -     |                  -                   |    -    | Link font color                                                                              |
| `fontSize`        |     `string`     |    -     |                  -                   | `13px`  | Link font size                                                                          |
| `fontWeight`      | `number, string` |    -     |                  -                   |    -    | Link font weight                                                                        |
| `href`            |     `string`     |    -     |                  -                   |    -    | Used as HTML 'href' property                                                                 |
| `bold`            |      `bool`      |    -     |                  -                   | `false` | Sets font weight                                                                              |
| `hovered`         |      `bool`      |    -     |                  -                   | `false` | Sets the component in hovered state and makes the link text underlined.                                                       |
| `semitransparent` |      `bool`      |    -     |                  -                   | `false` | Sets css 'opacity' property. Usually applies to users with 'pending' status                    |
| `textOverflow`    |      `bool`      |    -     |                  -                   | `true`  | Activates or deactivates text-overflow CSS property with ellipsis ('…') value                |
| `noHover`         |      `bool`      |    -     |                  -                   | `false` | Disables hover styles                                                                        |
| `onClick`         |      `func`      |    -     |                  -                   |    -    | Is called by clicking on the link. Only for 'action' type of link                             |
| `tabIndex`        |     `number`     |    -     |                  -                   |  `-1`   | The tabIndex attribute specifies the Link tab order (when the "tab" button is used for navigating)               |
| `target`          |     `oneOf`      |    -     | `_blank`, `_self`, `_parent`, `_top` |    -    | The target attribute specifies where the linked document will open when the link is clicked. |
| `type`            |     `oneOf`      |    -     |           `action`, `page`           | `page`  | Link type                                                                               |
