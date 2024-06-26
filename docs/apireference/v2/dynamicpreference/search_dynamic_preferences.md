---
sidebar_label: Search Dynamic Preferences
sidebar_position: 1
title: Search Dynamic Preferences
---

This endpoint searches dynamic preferences.

:::info

This operation does not require authentication

:::

## HTTP Request

`GET /api/v2/dynamic_preference/search/`

### Parameters

| Name     | In    | Type    | Required | Description                                     |
|----------|-------|---------|----------|-------------------------------------------------|
| limit    | query | integer | false    | Number of results to return per page            |
| offset   | query | integer | false    | The initial index from which to return the results |
| search   | query | string  | false    | A search term                                   |
| section  | query | string  | false    | Filter all preferences in a section             |
| keys     | query | string  | false    | Get a list of specific preferences in the format: section_1.name_1,...,section_n.name_n |
| ordering | query | string  | false    | Which field to use when ordering the results    |

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

fetch('/api/v2/dynamic_preference/search/',
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
curl -X GET /api/v2/dynamic_preference/search/ \
  -H 'Accept: application/json'
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

| Name       | Type                                                                     | Required | Restrictions | Description         |
|------------|--------------------------------------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                                                  | false    | none         | Total results count |
| » next     | string(uri)¦null                                                         | false    | none         | Next page url       |
| » previous | string(uri)¦null                                                         | false    | none         | Previous page url   |
| » results  | [[Dynamic Preference](/docs/apireference/v2/schemas/dynamic_preference)] | false    | none         | List of results     |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": "integer",
  "next": "string(uri)",
  "previous": "string(uri)",
  "results": [
    {
      "id": "integer",
      "section": "string",
      "name": "string",
      "value": "string"
    }
  ]
}
```

</TabItem>
</Tabs>
````




