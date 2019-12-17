# ThemeProvider

Custom theme provider based on [Theme Provider](https://www.styled-components.com/docs/advanced).

List of themes:

- [Base theme](/?path=/story/components-themecomponents--base-theme)
- [Dark theme](/?path=/story/components-themecomponents--dark-theme)

You can change the CSS styles in the theme, and they will be applied to all children components of ThemeProvider

### Usage

```js
import { ThemeProvider } from "app-components";
```

```jsx
const BaseTheme = {
  backgroundColor: "#FFF",
  fontFamily: "sans-serif",
  color: "#333"
};

<ThemeProvider theme={BaseTheme}>
  <Box>
    <Text>Base theme</Text>
    <Text theme={{ color: "red", fontFamily: "Roboto" }}>Override theme</Text>
  </Box>
</ThemeProvider>;
```

### ThemeProvider Properties

| Props   |   Type   | Required | Values |    Default    | Description                                                |
| ------- | :------: | :------: | :----: | :-----------: | ---------------------------------------------------------- |
| `theme` | `object` |    ✅    |   -    | `Base styles` | Provides a theme to all children components |
