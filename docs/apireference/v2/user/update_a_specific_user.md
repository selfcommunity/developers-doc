---
sidebar_label: Update a Specific User
sidebar_position: 1
title: Update a Specific User
---

This endpoint updates the profile of a user identified by \{id}. A user can only update their personal data.

:::info

`username` field must be unique and valid (valid characters are: a-z A-Z 0-9 _\-).

:::

:::info

If the request will update the avatar or the cover the 'Content-Type' request header must be set as 'multipart/form-data', otherwise it can be 'application/x-www-form-urlencoded'. 

:::

:::info

This operation requires authentication.

:::

## HTTP Request

`PUT /api/v2/user/{id}/`

### Parameters

| Name | In   | Type                                       | Required | Description                                  |
|------|------|--------------------------------------------|----------|----------------------------------------------|
| id   | path | string                                     | true     | A unique integer value identifying this user. |
| body | body | [User](/docs/apireference/v2/schemas/user) | true     | The request body(user params to update)      |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "username": "string",
  "real_name": "string",
  "bio": "string",
  "location": "string",
  "location_lat_lng": "string",
  "position_lat_lng": "string",
  "date_of_birth": "string",
  "description": "string",
  "gender": "string",
  "avatar": "string",
  "cover": "string",
  "website": "string"
}
```

</TabItem>
</Tabs>
````

### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "username": "string",
  "real_name": "string",
  "bio": "string",
  "location": "string",
  "location_lat_lng": "string",
  "position_lat_lng": "string",
  "date_of_birth": "string",
  "description": "string",
  "gender": "string",
  "avatar": "string",
  "cover": "string",
  "website": "string"
}';
const headers = {
  'Content-Type': 'multipart/form-data',
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};

fetch('/api/v2/user/{id}/',
{
  method: 'PUT',
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
curl -X PUT /api/v2/user/{id}/ \
  -H 'Content-Type':'multipart/form-data'
  -H 'Accept: application/json'
  -H 'Authorization: Bearer <token>'
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




