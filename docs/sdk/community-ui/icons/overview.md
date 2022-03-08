---
sidebar_label: Overview
sidebar_position: 1
title: Overview
---

In our library, we use icons through MUI icon [component](https://mui.com/api/icon/) and [font](https://mui.com/components/icons/#icon-font-icons) icons.


### Setup (Google Web Fonts)

All you need to do is to include this line in your html:

```js
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
/>

```
`Icon` will set the outlined variant class name for the Material Icons font.

#### Customization

Material Icons offers five different `font` styles, so you can **customize** the default settings by adding your desired
class at the end of the href link.
Then, insert `baseClassName` prop in your `Icon` component or in your theme.

For Example:

- **1** **Import**:
```js
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons+Rounded"
/>

```
- **2** **Usage**:

- Inclusion through props in the icon component
- 
```jsx
import Icon from '@mui/material/Icon';

<Icon baseClassName="material-icons-rounded">add_circle</Icon>
```
**or**

 - Inclusion through global style in the theme.
```jsx
const theme = createTheme({
  components: {
    MuiIcon: {
      defaultProps: {
        // Replace the `material-icons` default value.
        baseClassName: 'material-icons-rounded',
      },
    },
  },
});

```

### Styling icons 

To style icons follow the [material design guidelines](https://material.io/design/iconography/product-icons.html#design-principles).
