# Link

It is a link with 2 types:

1. page - simple link which refer to other pages and parts of current page;
2. action - link, which usually hasn`t hyperlink and do anything on click - open dropdown, filter data, etc

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

| Props             |       Type       | Required |                  Values                  | Default | Description                                                                                  |
| ----------------- | :--------------: | :------: | :--------------------------------------: | :-----: | -------------------------------------------------------------------------------------------- |
| `color`           |     `string`     |    -     |                    -                     |    -    | Color of link                                                                                |
| `fontSize`        |     `string`     |    -     |                    -                     | `13px`  | Font size of link                                                                            |
| `fontWeight`      | `number, string` |    -     |                    -                     |    -    | Font weight of link                                                                          |
| `href`            |     `string`     |    -     |                    -                     |    -    | Used as HTML `href` property                                                                 |
| `bold`            |      `bool`      |    -     |                    -                     | `false` | Set font weight                                                                              |
| `hovered`         |      `bool`      |    -     |                    -                     | `false` | Set hovered state and effects of link.                                                       |
| `semitransparent` |      `bool`      |    -     |                    -                     | `false` | Set css-property 'opacity'. Usually apply for users with "pending" status                    |
| `textOverflow`    |      `bool`      |    -     |                    -                     | `true`  | Activate or deactivate text-overflow CSS property with ellipsis (' … ') value              |
| `noHover`         |      `bool`      |    -     |                    -                     | `false` | Disables hover styles                                                                        |
| `onClick`         |      `func`      |    -     |                    -                     |    -    | Called by clicking on the link. Only for \'action\' type of link                             |
| `tabIndex`        |     `number`     |    -     |                    -                     |  `-1`   | Used as HTML `tabindex` property                                                             |
| `target`          |     `oneOf`      |    -     | `\_blank`, `\_self`, `\_parent`, `\_top` |    -    | The target attribute specifies where the linked document will open when the link is clicked. |
| `type`            |     `oneOf`      |    -     |             `action`, `page`             | `page`  | Type of link                                                                                 |
