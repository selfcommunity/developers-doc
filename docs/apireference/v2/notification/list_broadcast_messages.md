---
sidebar_label: List Broadcast Messages
sidebar_position: 5
title: List Broadcast Messages
---

This endpoint lists all broadcast messages.
Broadcast Message is a feature which allows a specific user to send messages and announcements to a larger group of users at once.


:::info

This operation requires authentication

:::

## HTTP Request

`GET /api/v2/notification/banner/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};

fetch('/api/v2/notification/banner/',
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
curl -X GET /api/v2/notification/banner/ \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[TargetedBannerVisibility](../schemas/TargetedBannerTypes/targeted_banner_visibility)|

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|Total results count|
|» next|string(uri)¦null|false|none|Next page url|
|» previous|string(uri)¦null|false|none|Previous page url|
|» results|list([TargetedBannerVisibility](../schemas/TargetedBannerTypes/targeted_banner_visibility))|false|none|List of results|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 0,
      "banner": {
        "html": "<div>Hello!</div>",
        "type_banner": "string"
      },
      "added_at": "2019-08-24T14:15:22Z",
      "disposed_at": "2019-08-24T14:15:22Z",
      "viewed_at": "2019-08-24T14:15:22Z"
    }
  ]
}
```

</TabItem>
</Tabs>
````




