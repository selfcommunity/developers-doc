---
sidebar_label: Get List of Flags for a Specific Discussion
sidebar_position: 18
title: Get List of Flags for a Specific Discussion
---

This endpoint retrieves a List of Flags for a Specific Discussion.

:::info

This operation requires moderation role.

:::

## HTTP Request

`GET /api/v2/discussion/{id}/flag/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this discussion|

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

fetch('/api/v2/discussion/{id}/flag/',
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
curl -X GET /api/v2/discussion/{id}/flag/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Flag](/docs/apireference/v2/schemas/flag)|

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
          "user": {
                  "id": "integer",
                  "username": "string",
                  "real_name": "string",
                  "avatar": "string",
                  "ext_id": "integer",
                  "followings_counter": "integer",
                  "followers_counter": "integer",
                  "posts_counter": "integer",
                  "discussions_counter": "integer",
                  "polls_counter": "integer",
                  "connection_status": "string",
                  "categories_counter": "integer",
                  "date_joined": "string",
                  "bio": "string",
                  "location": "string",
                  "location_lat_lng": "string",
                  "position_lat_lng": "string",
                  "date_of_birth": "string",
                  "description": "string",
                  "gender": "string",
                  "website": "string",
                  "cover": "string",
                  "tags": [{Tag}],
                  "reputation": "integer",
                  "community_badge": "boolean",
                  "reg_approved": "boolean",
                  "company_name": "string",
                  "company_role": "string"
          },
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




