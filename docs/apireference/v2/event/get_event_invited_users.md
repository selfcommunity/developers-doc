---
sidebar_label: Get Event Invited Users
sidebar_position: 1
title: Get Event Invited Users
---

This endpoint retrieves the list of all invited users to the event identified by \{id}.

:::info

This operation requires the event manager role.

:::

## HTTP Request

`GET /api/v2/event/{id}/invite/`

### Parameters

| Name   | In    | Type    | Required | Description                                          |
|--------|-------|---------|----------|------------------------------------------------------|
| id     | path  | string  | true     | A unique integer value identifying this event        |
| limit  | query | integer | false    | Number of results to return per page                 |
| offset | query | integer | false    | The initial index from which to return the results   |


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

fetch('/api/v2/event/{id}/invite/',
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
curl -X GET /api/v2/event/{id}/invite/ \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|Inline|

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|Total results count|
|» next|string(uri)¦null|false|none|Next page url|
|» previous|string(uri)¦null|false|none|Previous page url|
|» results|list([User](/docs/apireference/v2/schemas/user))|false|none|List of results. Every items will contain only the following attributes: id, username, real_name, ext_id and avatar|

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
      "deleted" : "boolean",
      "company_name": "string",
      "company_role": "string"
    }
  ]
}
```

</TabItem>
</Tabs>
````




