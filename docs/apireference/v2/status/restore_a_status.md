---
sidebar_label: Restore a Status
sidebar_position: 1
title: Restore a Status
---

This endpoint restores a status

:::info

This operation requires authentication. Who can restore a status depends on who deleted it (moderators > administrators of the group > author):

* a moderator can always restore it;
* an administrator of the group the status is addressed to (or of the community) can restore it, unless it was deleted by a moderator;
* the author can restore it only if he deleted it himself, not if it was deleted by an administrator of the group or by a moderator.

:::

## HTTP Request

`POST /api/v2/status/{id}/restore/`

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
fetch('/api/v2/status/{id}/restore/',
{
  method: 'POST',
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
curl -X POST /api/v2/status/{id}/restore/
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description | Schema |
|--------|-----------------------------------------------------------------|-------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code         | None   |
| 400 | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The status is not deleted | Error |
| 403 | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | The user cannot restore the status: it was deleted by someone with a higher role | Error |
| 404 | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The status does not exist | Error |
