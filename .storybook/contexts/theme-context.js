import PropTypes from "prop-types";
import ThemeProvider from "../../src/components/ThemeProvider/";
import { Base, Dark } from "../../src/themes/index";

const ThemeWrapper = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

ThemeWrapper.propTypes = {
  theme: PropTypes.any
};

const themeParams = [
  {
    name: "Default Theme",
    props: { theme: Base },
    default: true
  },
  {
    name: "Dark Theme",
    props: { theme: Dark }
  }
];

const ThemeContext = {
  icon: "photo",
  title: "Themes",
  components: [ThemeWrapper],
  params: themeParams,
  options: {
    deep: true,
    disable: false,
    cancelable: false
  }
};

export default ThemeContext;
