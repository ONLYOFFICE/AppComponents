# Text

Displays plain text

## Usage

```js
import { Text } from "app-components";
```

```jsx
<Text as="p" title="Some title">
  Some text
</Text>
```

### If you need to override styles add 'forwardedAs' instead of 'as'

```js
const StyledText = styled(Text)`
  &:hover {
    border-bottom: 1px dotted;
  }
`;
```

```jsx
<StyledText forwardedAs="span" title="Some title">
  Some text
</StyledText>
```

### Properties

| Props             |       Type       | Required | Values |  Default  | Description                                        |
| ----------------- | :--------------: | :------: | :----: | :-------: | -------------------------------------------------- |
| `fontSize`        | `number, string` |    -     |   -    |   `13`    | Sets the font size                                 |
| `as`              |     `string`     |    -     |   -    |    `p`    | Sets the tag through which the component is rendered |
| `title`           |      `bool`      |    -     |   -    |     -     | Title text                                             |
| `truncate`        |      `bool`      |    -     |   -    |  `false`  | Disables word wrapping                             |
| `display`         |     `string`     |    -     |   -    |     -     | Sets the 'display' property                        |
| `inline`          |      `bool`      |    -     |   -    |  `false`  | Sets the 'display: inline-block' property          |
| `color`           |     `string`     |    -     |   -    | `#333333` | Sets the text color                           |
| `bold`            |      `bool`      |    -     |   -    |  `false`  | Sets the font weight value ​​to bold                   |
| `italic`          |      `bool`      |    -     |   -    |  `false`  | Sets font style to italic                               |
| `backgroundColor` |     `string`     |    -     |   -    |     -     | Sets the background color                              |
| `fontWeight`      | `number, string` |    -     |   -    |     -     | Sets the font weight                               |
