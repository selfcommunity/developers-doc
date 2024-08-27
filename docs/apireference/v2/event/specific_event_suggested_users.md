---
sidebar_label: Specific Event Suggested Users
sidebar_position: 1
title: Specific Event Suggested Users
---

This endpoint retrieves a generic list of suggested users to invite to a specific event identified by `{id}`. The list is
relative to the currently logged in user.

:::info

This operation requires authentication and that the user is the manager of the event.

:::

## HTTP Request

`GET /api/v2/event/{id}/user/`

### Parameters

| Name   | In    | Type    | Required | Description                                                  |
|--------|-------|---------|----------|--------------------------------------------------------------|
| id     | path  | integer | true     | A unique integer value identifying this event                |
| search | query | string  | false    | A search term. Search in user fields: username and real_name |
| limit  | query | integer | false    | Number of results to return per page                         |
| offset | query | integer | false    | The initial index from which to return the results           |

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

fetch('/api/v2/event/{id}/user/',
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
curl -X GET /api/v2/event/{id}/user/ \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema |
|--------|---------------------------------------------------------|----------------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | Inline |

### Response Schema

Status Code **200**

| Name       | Type                                             | Required | Restrictions | Description         |
|------------|--------------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                          | false    | none         | Total results count |
| » next     | string(uri)¦null                                 | false    | none         | Next page url       |
| » previous | string(uri)¦null                                 | false    | none         | Previous page url   |
| » results  | list([User](/docs/apireference/v2/schemas/user)) | false    | none         | List of results     |
