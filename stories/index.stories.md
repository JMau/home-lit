```js script
import { html } from '@open-wc/demoing-storybook';
import '../home-lit.js';

export default {
  title: 'HomeLit',
  component: 'home-lit',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# HomeLit

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add home-lit
```

```js
import 'home-lit/home-lit.js';
```

```js preview-story
export const Simple = () => html`
  <home-lit></home-lit>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <home-lit title="Hello World"></home-lit>
`;
```
