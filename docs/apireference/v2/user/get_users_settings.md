---
sidebar_label: Get User's Settings
sidebar_position: 1
title: Get User's Settings
---

This endpoint retrieves all current user's settings for the authenticated user.
See [UserSettings](/docs/apireference/v2/schemas/user_settings) for the list of possible user settings.


:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/user/{id}/settings/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying the current user id|

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};

fetch('/api/v2/user/{id}/settings/',
{
  method: 'GET',
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
curl -X POST /api/v2/user/{id}/settings/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description| Schema                                                       |
|---|---|---|--------------------------------------------------------------|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3."integer")|Response status code| [User Settings](/docs/apireference/v2/schemas/user_settings) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "qa_frequency": "integer",
  "email_notification_not_qa": "integer",
  "mobile_notifications_scmty": "integer",
  "toast_notifications_emit_sound": "integer",
  "show_toast_notifications": "integer"
}
```

</TabItem>
</Tabs>
````




