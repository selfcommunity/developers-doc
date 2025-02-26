---
sidebar_label: Get All Categories
sidebar_position: 1
title: Get All Categories
---

This endpoint retrieves all categories.

:::info

This operation requires authentication only if `content_availability` community option is false.

:::

:::info

To filter the category list by a tag id please refer
to [Get Categories tagged with a Specific Tag](/docs/apireference/v2/tag/get_categories_tagged_with_a_specific_tag)

:::

## HTTP Request

`GET /api/v2/category/`

### Parameters

| Name    | In    | Type    | Required | Description                                                |
|---------|-------|---------|----------|------------------------------------------------------------|
| limit   | query | integer | false    | Number of results to return per page                       |
| offset  | query | integer | false    | The initial index from which to return the results         |
| search  | query | string  | false    | A search term                                              |
| active  | query | string  | false    | Filter using field active (only if user is administrator)  |
| deleted | query | string  | false    | Filter using field deleted (only if user is administrator) |

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

fetch('/api/v2/category/',
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
curl -X GET /api/v2/category/ \
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

| Name       | Type                                                     | Required | Restrictions | Description         |
|------------|----------------------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                                  | false    | none         | Total results count |
| » next     | string(uri)¦null                                         | false    | none         | Next page url       |
| » previous | string(uri)¦null                                         | false    | none         | Previous page url   |
| » results  | list([Category](/docs/apireference/v2/schemas/category)) | false    | none         | List of results     |
