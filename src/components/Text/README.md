# Text

Component that displays plain text

## Usage

```js
import { Text } from "app-components";
```

```jsx
<Text as="p" title="Some title">
  Some text
</Text>
```

### If you need to override styles add forwardedAs instead of as

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
| `as`              |     `string`     |    -     |   -    |    `p`    | Sets the tag through which to render the component |
| `title`           |      `bool`      |    -     |   -    |     -     | Title                                              |
| `truncate`        |      `bool`      |    -     |   -    |  `false`  | Disables word wrapping                             |
| `inline`          |      `bool`      |    -     |   -    |  `false`  | Sets the 'display: inline-block' property          |
| `display`         |     `string`     |    -     |   -    |     -     | Sets the 'display' property                        |
| `color`           |     `string`     |    -     |   -    | `#333333` | Specifies the text color                           |
| `bold`            |      `bool`      |    -     |   -    |  `false`  | Sets font weight value ​​to bold                   |
| `italic`          |      `bool`      |    -     |   -    |  `false`  | Sets the font style                                |
| `backgroundColor` |     `string`     |    -     |   -    |     -     | Sets background color                              |
| `fontWeight`      | `number, string` |    -     |   -    |     -     | Sets the font weight                               |
