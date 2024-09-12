---
sidebar_label: Get Event Going Users
sidebar_position: 1
title: Get Event Going Users
---

This endpoint retrieves the list of all the users going to the event identified by `{id}`.

:::info

This operation does not require authentication and subscription if the event is **public**.

This operation requires authentication and being subscribed to the event if the event is **private**.

:::

## HTTP Request

`GET /api/v2/event/{id}/going/`

### Parameters

| Name   | In    | Type    | Required | Description                                        |
|--------|-------|---------|----------|----------------------------------------------------|
| id     | path  | integer | true     | A unique integer value identifying this event      |
| limit  | query | integer | false    | Number of results to return per page               |
| offset | query | integer | false    | The initial index from which to return the results |

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

fetch('/api/v2/event/{id}/going/',
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
curl -X GET /api/v2/event/{id}/going/ \
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
