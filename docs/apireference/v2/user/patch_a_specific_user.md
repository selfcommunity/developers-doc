---
sidebar_label: Patch a Specific User
sidebar_position: 1
title: Patch a Specific User
---

This endpoint patches a specific user identified by \{id}

:::info

A user can only update their personal data.

`username` field must be unique and valid (valid characters are: a-z A-Z 0-9 _\-).

:::

:::info

You can use this endpoint to edit a single field passing only the id and the needed field (without mandatory fields).

:::

:::info

If the request will update the avatar or the cover, the 'Content-Type' request header must be set as 'multipart/form-data', otherwise it can be 'application/x-www-form-urlencoded'. 

:::

:::info

This operation requires authentication.

:::

## HTTP Request

`PATCH /api/v2/user/{id}/`

### Parameters

|Name|In|Type|Required| Description                                  |
|---|---|---|---|----------------------------------------------|
|id|path|string|true| A unique integer value identifying this user |
|body|body|[User](/docs/apireference/v2/schemas/user)|false| The request body(user params)                |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = {
  "username": "string",    
  "real_name": "string",
  "bio": "string",
  "location": "string",
  "location_lat_lng": "string",
  "position_lat_lng": "string",
  "date_of_birth": "string",
  "description": "string",
  "avatar": "string",
  "cover": "string",
  "gender": "string",
  "website": "string"
};
const headers = {
  'Content-Type': 'multipart/form-data',
  'Accept': 'application/json',
  'Authorization: Bearer <token>'
};
fetch('/api/v2/user/{id}/',
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
curl -X PATCH /api/v2/user/{id}/ \
  -H 'Content-Type': 'multipart/form-data'
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|[User](/docs/apireference/v2/schemas/user)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": "integer",
  "username": "string",
  "real_name": "string",
  "avatar": "string",
  "ext_id": "string",
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
```

</TabItem>
</Tabs>
````




