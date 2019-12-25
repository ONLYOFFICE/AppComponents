import { configure, addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { addReadme } from "storybook-readme";
import { withConsole } from "@storybook/addon-console";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts/index";

/*
This is a package to make Story panel load and decode all files stories
Also, because of some internal usage, we cannot use the default babel config (for the library)
with this package.

In order to solve that, it's necessary a custom/simple .babelrc inside .storybook/ folder
*/

/* Add A11y panel */
addDecorator(withA11y);

/* Enable README for all stories */
addDecorator(addReadme);

/* General options for storybook */
addParameters({
  options: {
    name: "App Components Storybook",
    sortStoriesByKind: true,
    showAddonPanel: true,
    addonPanelInRight: true
  },
  /* Options for storybook-readme plugin */
  readme: {
    codeTheme: "github",
    StoryPreview: ({ children }) => children
  }
});

/* automatically import all files ending in *.stories.js inside src folder */
const srcStories = require.context("../src", true, /\.stories\.js$/);
function loadStories() {
  srcStories.keys().forEach(filename => srcStories(filename));
}

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withContexts(contexts));

configure(loadStories, module);
