---
sidebar_label: Delete a Status
sidebar_position: 1
title: Delete a Status
---

This endpoint deletes a status

:::info

This operation requires authentication. The logged user must be the status creator.

:::

## HTTP Request

`DELETE /api/v2/status/{id}/`

### Parameters

| Name | In   | Type   | Required | Description                                     |
|------|------|--------|----------|-------------------------------------------------|
| id   | path | string | true     | A unique integer value identifying this status. |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
fetch('/api/v2/status/{id}/',
{
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer {access_token}'
  }

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
curl -X DELETE /api/v2/status/{id}/
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description | Schema |
|--------|-----------------------------------------------------------------|-------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code         | None   |






