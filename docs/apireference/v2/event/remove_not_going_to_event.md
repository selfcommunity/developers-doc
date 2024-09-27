---
sidebar_label: Remove Not Going To Event
sidebar_position: 1
title: Remove Not Going To Event
---

This endpoint allows users to remove the choice 'not_going' from the event identified by `{id}`.

:::info

This operation requires authentication and that the user will be not going to the event.

:::

## HTTP Request

`DELETE /api/v2/event/{id}/not_going/`

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
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};
fetch('/api/v2/event/{id}/not_going/',
{
  method: 'DELETE',
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
curl -X DELETE /api/v2/event/{id}/not_going/
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description          | Schema |
|--------|-----------------------------------------------------------------|----------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code | None   |