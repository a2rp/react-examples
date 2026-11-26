# Color Picker

Browse named CSS colors or choose a custom color. Review HEX, RGB, and HSL values, copy them, and keep the selected color in the current browser. The app is available at `/apps/color-picker` in the [React Mini Projects](https://github.com/a2rp/react_mini_projects) collection.

## Features

- Browse and select named CSS colors.
- Choose a custom color with the native color input or enter a HEX value.
- Generate a random color.
- View and copy HEX, RGB, and HSL values.
- Keep the selected color between visits using local storage when available.

Color selections stay in this browser; the app does not send them to a server.

## Run locally

From the collection root:

```sh
npm install
npm run dev
```

Open `/apps/color-picker`. Run `npm test`, `npm run lint`, and `npm run build` from the root to check the collection.

## Source

The app source is in [`src/pages/apps/colorPicker`](https://github.com/a2rp/react_mini_projects/tree/main/src/pages/apps/colorPicker).
