---
sidebar_label: Change User's Settings
sidebar_position: 13
title: Change User's Settings
---

This endpoint changes the user settings for the authenticated user.
See [UserSettings](/docs/apireference/v2/schemas/user_settings) for the list of possible user settings.

:::info

This operation does not require authentication.

:::

## HTTP Request

`PATCH /api/v2/user/{id}/settings/`

### Parameters

|Name|In| Type                                                         |Required| Description                                            |
|---|---|--------------------------------------------------------------|---|--------------------------------------------------------|
|id|path| string                                                       |true| A unique integer value identifying the current user id |
|body|body| [User Settings](/docs/apireference/v2/schemas/user_settings) |false| The request body                                       |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "qa_frequency": "integer"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};

fetch('/api/v2/user/{id}/settings/',
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
curl -X PATCH /api/v2/user/{id}/settings/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|[UserSettings](/docs/apireference/v2/schemas/user_settings)|


