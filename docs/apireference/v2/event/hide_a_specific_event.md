---
sidebar_label: Hide a Specific Event
sidebar_position: 1
title: Hide a Specific Event
---

This endpoint hides the contents in the feed relative to this event for the logged user. The event must have
`show_on_feed = true` for the current user.

:::info

This operation requires being subscribed to the event.

:::

## HTTP Request

`POST /api/v2/event/{id}/hide/`

### Parameters

| Name | In   | Type    | Required | Description                                   |
|------|------|---------|----------|-----------------------------------------------|
| id   | path | integer | true     | A unique integer value identifying this event |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js

const headers = {
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/event/{id}/hide/',
{
  method: 'POST',
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
curl -X POST /api/v2/event/{id}/hide/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \

```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description          | Schema |
|--------|-----------------------------------------------------------------|----------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code | None   |
