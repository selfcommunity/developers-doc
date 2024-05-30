---
sidebar_label: Me
sidebar_position: 1
title: Me
---

This endpoint returns the user identified by the authentication token

:::info

This operation requires authentication or simply JWT token.

:::

## HTTP Request

`GET /api/v2/user/me/`

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

fetch('/api/v2/user/me/',
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
curl -X GET /api/v2/user/me/ \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description | Schema |
|--------|---------------------------------------------------------|-------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code        | Inline |

### Response Schema

Status Code **200**

| Name                                | Type                                                            | Required | Restrictions | Description                                                                                                                      | 
|-------------------------------------|-----------------------------------------------------------------|----------|--------------|----------------------------------------------------------------------------------------------------------------------------------|
| id                                  | integer                                                         | false    | read-only    | A unique integer value identifying this user                                                                                     |                                                                                             
| username                            | string                                                          | false    | read-only    | The username of the user. Max 255 characters. Letters, numbers and -/_ characters                                                |                                                                                             
| real_name                           | string                                                          | false    | none         | Real name. Max 255 characters                                                                                                    |                                                                                             
| avatar                              | string(binary)¦null                                             | false    | none         | Avatar of the user                                                                                                               |                                                                                             
| ext_id                              | integer                                                         | false    | read-only    | The external ID of the user. It is assigned only during signup                                                                   |                                                                                             
| followings_counter                  | integer¦null                                                    | false    | read-only    | Number of followings of the user. Only if dynamic preference `configurations.follow_enabled` is `true`                           |                      
| followers_counter                   | integer¦null                                                    | false    | read-only    | Number of followers of the user.  Only if dynamic preference `configurations.follow_enabled` is `true`                           |                      
| posts_counter                       | integer¦null                                                    | false    | read-only    | Number of posts created by the user. Only if dynamic preference `configurations.post_type_enabled` is `true`                     |                    
| discussions_counter                 | integer¦null                                                    | false    | read-only    | Number of discussions created by the user. Only if dynamic preference `configurations.post_type_enabled` is `true`               |                     
| polls_counter                       | integer¦null                                                    | false    | read-only    | Number of polls created by the user. Only if dynamic preference `addons.polls_enabled` is `true` or if the user has a staff role |  
| connection_status                   | string¦null                                                     | false    | read-only    | The connection status between the request user and this user                                                                     |                                                                                             
| email                               | string                                                          | false    | none         | The user email                                                                                                                   |                                                                                             
| email_isvalid                       | boolean                                                         | false    | none         | If the user email is valid                                                                                                       |                                                                                             
| categories_counter                  | integer¦null                                                    | false    | read-only    | Number of categories followed by the user                                                                                        |                                                                                             
| bio                                 | string                                                          | false    | none         | User biography                                                                                                                   |                                                                                             
| location                            | string                                                          | false    | none         | User location. Max 100 characters                                                                                                |                                                                                             
| location_lat_lng                    | string                                                          | false    | none         | Location in coordinates. It is populated automatically if "Google Geocoding" integration is active. Format: lat,lng              |                                                                                             
| position_lat_lng                    | string                                                          | false    | none         | User current position. Format: lat,lng                                                                                           |                                                                                             
| date_of_birth                       | string(date)                                                    | false    | none         | Date of birth. Format: YYYY-MM-DD (ISO 8601)                                                                                     |                                                                                             
| description                         | string                                                          | false    | none         | User description. Max 50 characters                                                                                              |                                                                                             
| gender                              | string                                                          | false    | none         | User gender. Values: Male, Female, Unspecified. Default: Unspecified                                                             |                                                                                             
| website                             | string(uri)                                                     | false    | none         | User website. Max 200 characters.                                                                                                |                                                                                             
| cover                               | string(binary)¦null                                             | false    | none         | The user cover                                                                                                                   |                                                                                             
| tags                                | [Tag](/docs/apireference/v2/schemas/tag)¦[]                     | false    | none         | User's tag list. List of [Tag](/docs/apireference/v2/schemas/tag)                                                                |                                                                                             
| reputation                          | integer                                                         | false    | read-only    | User reputation.                                                                                                                 |                                                                                             
| community_badge                     | boolean                                                         | false    | read-only    | Community badge active. Default: False.                                                                                          |                                                                                             
| reg_approved                        | boolean                                                         | false    | read-only    | Registration approved (false only if users_approval_enabled=true and the user is not approved)                                   |                                                                                             
| permission                          | [UserPermission](/docs/apireference/v2/schemas/user_permission) | false    | read-only    | List of user permissions                                                                                                         |                                                                                             
| role                                | string                                                          | false    | read-only    | The user role                                                                                                                    |                                                                                             
| unseen_interactions_counter         | integer                                                         | false    | read-only    | The unseen interaction number                                                                                                    |
| unseen_notification_banners_counter | integer                                                         | false    | read-only    | The unseen notification banners number                                                                                           |
| company_name                        | string                                                          | false    | read-only    | User company name                                                                                                                |                                                                                             
| company_role                        | string                                                          | false    | read-only    | User company role                                                                                                                |                                                                                             

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
  "ext_id": "integer",
  "followings_counter": "integer",
  "followers_counter": "integer",
  "posts_counter": "integer",
  "discussions_counter": "integer",
  "polls_counter": "integer",
  "connection_status": "string",
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
  "website": "string",
  "cover": "string",
  "tags": [{Tag}],
  "reputation": "integer",
  "community_badge": "boolean",
  "reg_approved": "boolean",
  "permission": {UserPermission},
  "role": "string",
  "unseen_interactions_counter": "integer",
  "unseen_notification_banners_counter": "integer",
  "deleted" : "boolean",
  "company_name": "string",
  "company_role": "string"
}
```

</TabItem>
</Tabs>
````




