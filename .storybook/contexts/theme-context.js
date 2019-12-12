import PropTypes from "prop-types";
import ThemeProvider from "../../src/components/Theme-provider/";
import { Base, Dark } from "../../src/themes/index";

const ThemeWrapper = props => (
  <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>
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
