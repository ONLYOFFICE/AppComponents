# ThemeProvider

Custom theme provider based on [Theme Provider](https://www.styled-components.com/docs/advanced).

List of themes:

- [Base theme](/?path=/story/components-themecomponents--base-theme)
- [Dark theme](/?path=/story/components-themecomponents--dark-theme)

You can change the CSS styles in the theme, and they will be applied to all children components of ThemeProvider

### Usage

```js
import { ThemeProvider, Themes } from "app-components";
```

```jsx
const newTheme = {...Themes.Base, color: "red"}

<ThemeProvider theme={newTheme}>
  <Box>
    <Text>Base theme</Text>
  </Box>
</ThemeProvider>;
```

### ThemeProvider Properties

| Props   |   Type   | Required | Values |    Default    | Description                                 |
| ------- | :------: | :------: | :----: | :-----------: | ------------------------------------------- |
| `theme` | `object` |    ✅    |   -    | `Base styles` | Applies a theme to all children components |
