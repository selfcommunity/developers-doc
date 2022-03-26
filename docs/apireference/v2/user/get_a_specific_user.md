---
sidebar_label: Get a Specific User
sidebar_position: 4
title: Get a Specific User
---

This endpoint retrieves a specific user's profile identified by {id}

:::info

This operation does not require authentication.

:::

## HTTP Request

`GET /api/v2/user/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this user.|

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/user/{id}/',
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
curl -X GET /api/v2/user/{id}/ \
  -H 'Accept: application/json'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[User](/docs/apireference/v2/schemas/user)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": 0,
  "username": "string",
  "real_name": "string",
  "email": "user@example.com",
  "email_isvalid": true,
  "date_joined": "2019-08-24T14:15:22Z",
  "bio": "string",
  "location": "string",
  "location_lat_lng": "string",
  "position_lat_lng": "string",
  "date_of_birth": "2019-09-23",
  "description": "string",
  "gender": "Male",
  "status": "a",
  "website": "https://example.com",
  "avatar": "string",
  "cover": "string",
  "ext_id": 3,
  "tags": [],
  "reputation": 39,
  "connection_status": "string",
  "followings_counter": 7,
  "followers_counter": 2,
  "posts_counter": 4,
  "discussions_counter": 3,
  "statuses_counter": 0,
  "polls_counter": 1
}
```

</TabItem>
</Tabs>
````




