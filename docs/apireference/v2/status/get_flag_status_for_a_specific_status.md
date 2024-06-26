---
sidebar_label: Get Flag Status for a Specific Status
sidebar_position: 1
title: Get Flag Status for a Specific Status
---

This endpoint retrieves, if exists, a flag for this contribute created by the user logged

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/status/{id}/flag/status/`

### Parameters

| Name | In   | Type   | Required | Description                                     |
|------|------|--------|----------|-------------------------------------------------|
| id   | path | string | true     | A unique integer value identifying this status. |

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

fetch('/api/v2/status/{id}/flag/status/',
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
curl -X GET /api/v2/status/{id}/flag/status/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description | Schema              |
|--------|---------------------------------------------------------|-------------|---------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code        | [Flag](/docs/apireference/v2/schemas/flag) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "added_at": "string",
  "flag_type": "integer",
  "flag_type_description": "string"
}
```

</TabItem>
</Tabs>
````




