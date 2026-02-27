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

You can use this endpoint to edit a single field passing only the id and the necessary field (without mandatory fields).

:::

:::info

If the request updates the avatar or the cover, the 'Content-Type' request header must be set as 'multipart/form-data',
otherwise it can be 'application/x-www-form-urlencoded'.

:::

:::info

This operation requires authentication.

:::

## HTTP Request

`PATCH /api/v2/user/{id}/`

### Parameters

| Name | In   | Type                                       | Required | Description                                  |
|------|------|--------------------------------------------|----------|----------------------------------------------|
| id   | path | string                                     | true     | A unique integer value identifying this user |
| body | body | [User](/docs/apireference/v2/schemas/user) | false    | The request body(user params)                |

:::info

In this endpoint you can send the avatar_base64 as base64 encoded strings in alternative to the avatar field.
The avatar_base64 field must be sent in the body of the request.
The avatar field must be sent as a multipart/form-data.

avatar_base64 example:

image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=

:::

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

| Status | Meaning                                                 | Description          | Schema                                     |
|--------|---------------------------------------------------------|----------------------|--------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [User](/docs/apireference/v2/schemas/user) |

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




