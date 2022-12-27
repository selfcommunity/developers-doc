---
sidebar_label: Get All Flags for a Specific Contribution
sidebar_position: 4
title: Get All Flags for a Specific Contribution
---

This endpoint retrieves all flags for a specific contribution

:::info

This operation requires moderation role.

:::

## HTTP Request

`GET /api/v2/moderation/contribution/{id}/flag/`

### Parameters

|Name|In|Type|Required| Description                                          |
|---|---|---|---|------------------------------------------------------|
|id|path|string|true| A unique integer value identifying this contribution |
|contribution_type|body|string|true| Valid values are: post, discussion, status, comment  |
|flag_type|body|integer|false| Filter results by flag_type                          |

#### Enumerated Values

| Parameter | Value | Description |
|-----------|-------|-------------|
| flag_type | 0     | spam        |
| flag_type | 1     | aggressive  |
| flag_type | 2     | vulgar      |
| flag_type | 3     | poor        |
| flag_type | 4     | offtopic    |

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

fetch('/api/v2/moderation/contribution/{id}/flag/',
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
curl -X GET /api/v2/moderation/contribution/{id}/flag/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|[Flag](/docs/apireference/v2/schemas/flag)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": "integer",
  "next": "string(uri)",
  "previous": "string(uri)",
  "results": [
    {
      "user": {User},
      "added_at": "string",
      "flag_type": "integer",
      "flag_type_description": "string"
    }
  ]
}
```

</TabItem>
</Tabs>
````




