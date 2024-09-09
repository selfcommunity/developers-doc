---
sidebar_label: Update Multi Dynamic Preferences
sidebar_position: 1
title: Update Multi Dynamic Preferences
---

This endpoint patches a specific dynamic preference or a set of dynamic preferences; only some preferences are
updatable:

- Section `colors`:
    - `colorback`
    - `colorprimary`
    - `colorsecondary`
    - `font_color`
    - `font_color_secondary`
    - `navbarback`
- Section `logo`:
    - `logo_dark`
    - `logo_light`
    - `navbar_logo`
    - `navbar_logo_mobile`
- Section `text`:
    - `application_slogan1`
    - `application_slogan2`

:::info

This operation requires admin role.

:::

## HTTP Request

`PATCH /api/v2/dynamic_preference/`

### Parameters

| Name            | In   | Type            | Required | Description                                                             |
|-----------------|------|-----------------|----------|-------------------------------------------------------------------------|
| preference_name | body | preference_type | true     | Update the `preference_name` dynamic preference with the relative value |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "colorback": "#fdfdfd",
    "colorprimary": "#555555",
    "colorsecondary": "#B20404",
    "font_color": "#333333",
    "font_color_secondary": "#666666",
    "navbarback": "#ffffff"
}
```

</TabItem>
</Tabs>
````

### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
    "colorback": "#fdfdfd",
    "colorprimary": "#555555",
    "colorsecondary": "#B20404",
    "font_color": "#333333",
    "font_color_secondary": "#666666",
    "navbarback": "#ffffff"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/dynamic_preference/',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

</TabItem>
<TabItem value="bash">

```bash
# You can also use wget
curl -X PATCH /api/v2/dynamic_preference/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                                                                 |
|--------|---------------------------------------------------------|----------------------|----------------------------------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | A dictionary of [Dynamic Preference](/docs/apireference/v2/schemas/dynamic_preference) |

### Example responses

````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "colorback": {
        "section": "colors",
        "name": "colorback",
        "value": "#fdfdfd",
        "help": "Originally gray.",
        "type": "color"
    },
    "colorprimary": {
        "section": "colors",
        "name": "colorprimary",
        "value": "#555555",
        "help": "Originally ottanio.",
        "type": "color"
    },
    "colorsecondary": {
        "section": "colors",
        "name": "colorsecondary",
        "value": "#B20404",
        "help": "Originally red.",
        "type": "color"
    },
    "font_color": {
        "section": "colors",
        "name": "font_color",
        "value": "#333333",
        "help": "Font color (primary).",
        "type": "color"
    },
    "font_color_secondary": {
        "section": "colors",
        "name": "font_color_secondary",
        "value": "#666666",
        "help": "Font color secondary (auto-generated from font_color).",
        "type": "color"
    },
    "navbarback": {
        "section": "colors",
        "name": "navbarback",
        "value": "#ffffff",
        "help": "First main bar. Originally ottanio.",
        "type": "color"
    }
}
```

</TabItem>
</Tabs>
````
