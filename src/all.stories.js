
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import readme from "../README.md";

storiesOf('Introduction', module)
    .addParameters({ options: { showAddonPanel: false } })
    .add('Getting Started', doc(readme));