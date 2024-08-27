---
sidebar_label: Get Events Created By
sidebar_position: 1
title: Get Events Created By
---

This endpoint retrieves the list of all the events created by a specific user.

:::info

This operation does not require authentication.

:::

## HTTP Request

`GET /api/v2/event/created/`

### Parameters

| Name       | In    | Type    | Required | Description                                        |
|------------|-------|---------|----------|----------------------------------------------------|
| created_by | query | integer | true     | The integer value identifying the event creator id |
| limit      | query | integer | false    | Number of results to return per page               |
| offset     | query | integer | false    | The initial index from which to return the results |

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

fetch('/api/v2/event/created/?created_by={id}',
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
curl -X GET /api/v2/event/created/?created_by={id} \
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

| Name       | Type                                               | Required | Restrictions | Description         |
|------------|----------------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                            | false    | none         | Total results count |
| » next     | string(uri)¦null                                   | false    | none         | Next page url       |
| » previous | string(uri)¦null                                   | false    | none         | Previous page url   |
| » results  | list([Event](/docs/apireference/v2/schemas/event)) | false    | none         | List of results     |
