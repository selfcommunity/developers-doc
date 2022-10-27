---
sidebar_label: Search Suggestion
sidebar_position: 1
title: Search Suggestion
---

This endpoint retrieves the list of users and categories that meets the search term entered by the user.

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/suggestion/?search={search}`

### Parameters

| Name   | In    | Type    | Required |Description|
|--------|-------|---------|----------|---|
| search | query  | string  | true     |A search term.|
| limit  | query | integer | false    |Number of results to return per page.|
| offset | query | integer | false    |The initial index from which to return the results.|

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

fetch('/api/v2/suggestion/?search={search}',
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
curl -X GET /api/v2/suggestion/?search={search} \
  -H 'Accept: application/json'

```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Response Schema

Status Code **200**

|Name| Type                                                  |Required|Restrictions|Description|
|---|-------------------------------------------------------|---|---|---|
|» count| integer                                               |false|none|Total results count|
|» next| string(uri)¦null                                      |false|none|Next page url|
|» previous| string(uri)¦null                                      |false|none|Previous page url|
|» results| list([User](/docs/apireference/v2/schemas/user)) and ([Category](/docs/apireference/v2/schemas/category) |false|none|List of results|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "count": 20,
    "next": "https://italiano.quentrix.com/api/v2/suggestion/?limit=10&offset=10&search={search}",
    "previous": null,
    "results": [
  {
    'type': 'user',
    'score': 31,
    'user': {
      'id': 392,
      'username': 'string',
      'real_name': 'string',
      'avatar': 'string',
      'followings_counter': 0,
      'followers_counter': 1,
      'posts_counter': 0,
      'discussions_counter': 0,
      'polls_counter': 0,
      'connection_status': null,
      'categories_counter': 15,
      'date_joined': '2022-08-08T04:43:00+02:00',
      'bio': 'string',
      'location': 'string',
      'location_lat_lng': 'string',
      'position_lat_lng': 'string',
      'date_of_birth': 2019 - 09-23,
      'description': 'string',
      'gender': 'Male',
      'website': 'string',
      'cover': 'string',
      'tags': [],
      'reputation': 6,
      'community_badge': false,
      'company_name': null,
      'company_role': null
    }
  },
  {
    'type': 'category',
    'score': 80,
    'category': {
      'id': 0,
      'tags': [],
      'followed': false,
      'order': 123,
      'name': 'string',
      'name_synonyms': 'string',
      'slug': 'string',
      'slogan': 'string',
      'html_info': 'string',
      'seo_title': 'string',
      'seo_description': 'string',
      'auto_follow': 'none',
      'active': true,
      'image_original': 'string',
      'image_bigger': 'string',
      'image_big': 'string',
      'image_medium': 'string',
      'image_small': 'string',
      'emotional_image_original': 'string',
      'emotional_image_position': 0,
      'lastmod_datetime': '2019-08-24T14:15:22Z',
      'stream_order_by': 'recent',
      'followers_counter': 13
    }
    ]
}
```

</TabItem>
</Tabs>
````




