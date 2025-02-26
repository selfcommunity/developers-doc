---
sidebar_label: Get User's Categories
sidebar_position: 1
title: Get User's Categories
---

This endpoint gets user's categories

:::info

This operation does not require authentication.

:::

## HTTP Request

`GET /api/v2/user/{id}/categories/`

### Parameters

| Name   | In   | Type    | Required | Description                                                                                                  |
|--------|------|---------|----------|--------------------------------------------------------------------------------------------------------------|
| id     | path | string  | true     | A unique integer value identifying this user                                                                 |
| mutual | path | integer | false    | Allowed values: 0-1. Param 0 returns the list of non mutual categories. Param 1 returns only the mutual list |

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

fetch('/api/v2/user/{id}/categories/',
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
curl -X GET /api/v2/user/{id}/categories/ \
  -H 'Accept: application/json'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                             |
|--------|---------------------------------------------------------|----------------------|----------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Category](/docs/apireference/v2/schemas/category) |
