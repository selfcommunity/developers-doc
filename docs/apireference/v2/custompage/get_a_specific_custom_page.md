---
sidebar_label: Get a Specific Custom Page
sidebar_position: 1
title: Get a Specific Custom Page
---

This endpoint retrieves a specific custom page.


:::info

Custom Pages are a "public object" visible both to not authenticated users and in closed communities.

:::


## HTTP Request

`GET /api/v2/custom_page/{id}/` or `GET /api/v2/custom_page/{slug}/`

### Parameters

| Name | In   | Type   | Required | Description                                         |
|------|------|--------|----------|-----------------------------------------------------|
| id   | path | string | true     | A unique integer value identifying this custom page |
| slug | path | string | true     | The slug identifying this custom page               |

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

fetch('/api/v2/custom_page/{id}/' or fetch('/api/v2/custom_page/{slug}/',
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
curl -X GET /api/v2/custom_page/{id}/ or GET /api/v2/custom_page/{slug}/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses
| Status | Meaning                                                 | Description          | Schema                                                   |
|--------|---------------------------------------------------------|----------------------|----------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Custom Page](/docs/apireference/v2/schemas/custom_page) |



