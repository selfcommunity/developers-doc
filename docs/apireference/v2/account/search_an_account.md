---
sidebar_label: Search a specific account
sidebar_position: 1
title: Search a specific account
---

This endpoint allows to perform  a specific account search.

:::info

This operation requires authentication and admin role.

:::

## HTTP Request

`GET /api/v2/account/search/`

### Parameters

| Name     | In    | Type   | Required | Description                          |
|----------|-------|--------|----------|--------------------------------------|
| username | query | string | false    | The username of the user             |
| email    | query | string | false    | The email of the user                |
| ext_id   | query | string | false    | A unique external id identifying the user |
| provider | query | string | false    | The external provider of the ext_id  |

:::info

You can pass in the query only one between: username, email or the pair ext_id and provider

:::

:::info

If you are using a custom provider you can pass 'external' as provider parameter. 

:::

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

fetch('/api/v2/account/search/',
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
curl -X GET /api/v2/account/search/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description | Schema                                     |
|--------|---------------------------------------------------------|-------------|--------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code        | [User](/docs/apireference/v2/schemas/user) |

:::info

It will return status code 200 if the user is found. If not found it will return 404. If too many parameters or too few parameters are passed it will return 400.

:::

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
  "followings_counter": "integer",
  "followers_counter": "integer",
  "posts_counter": "integer",
  "discussions_counter": "integer",
  "polls_counter": "integer",
  "categories_counter": "integer",
  "email": "string",
  "email_isvalid": "boolean",
  "date_joined": "string",
  "bio": "string",
  "location": "string",
  "location_lat_lng": "string",
  "position_lat_lng": "string",
  "date_of_birth": "string",
  "description": "string",
  "gender": "string",
  "status": "string",
  "website": "string",
  "cover": "string",
  "tags": [{Tag}],
  "ext_id": "integer",
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







