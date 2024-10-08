---
sidebar_label: Get All Onboarding Steps
sidebar_position: 1
title: Get All Onboarding Steps
---

This endpoint retrieves all onboarding steps.

:::info
This operation requires authentication. The logged user must be the creator of the community (id=1).
:::

:::warning
The onboarding APIs are not available for Enterprise plans.
:::

## HTTP Request

`GET /api/v2/onboarding/`

### Parameters

| Name   | In    | Type    | Required | Description                                               |
|--------|-------|---------|----------|-----------------------------------------------------------|
| search | query | string  | false    | Search for a specific step by name starting from a string |
| limit  | query | integer | false    | Number of results to return per page                      |
| offset | query | integer | false    | The initial index from which to return the results        |

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

fetch('/api/v2/onboarding/',
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
curl -X GET /api/v2/onboarding/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
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

| Name       | Type                                                                   | Required | Restrictions | Description         |
|------------|------------------------------------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                                                | false    | none         | Total results count |
| » next     | string(uri)¦null                                                       | false    | none         | Next page url       |
| » previous | string(uri)¦null                                                       | false    | none         | Previous page url   |
| » results  | list([Onboarding Step](/docs/apireference/v2/schemas/onboarding_step)) | false    | none         | List of results     |

### Example responses

````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": "integer",
  "next": "string(uri)",
  "previous": "string(uri)",
  "results": [{Onboarding Step}]
}
```

</TabItem>
</Tabs>
````
