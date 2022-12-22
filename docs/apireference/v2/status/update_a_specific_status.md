---
sidebar_label: Update a specific Status
sidebar_position: 5
title: Update a specific Status
---

This endpoint updates a specific status

:::info

This operation requires authentication. The logged user must be the status creator.

:::

## HTTP Request

`PUT /api/v2/status/{id}/`

### Parameters

| Name         | In   | Type          | Required | Description                                                                                          |
|--------------|------|---------------|----------|------------------------------------------------------------------------------------------------------|
| » action     | body | string¦null   | true     | The action of the status                                                                             |
| » text       | body | string        | false    | The content of the status in html format, it can contain some mentions |
| » categories | body | list(integer) | true     | List of id of [Category](/docs/apireference/v2/schemas/category)                                                            |
| » medias     | body | list(integer) | false    | List of id of [Media](/docs/apireference/v2/schemas/media)                                                                  |
| » location   | body | object¦null   | false    | The Location object to associate with the status                                                     |
| »» location  | body | string¦null   | true     | none                                                                                                 |
| »» lat       | body | number¦null   | true     | none                                                                                                 |
| »» lng       | body | number¦null   | true     | none                                                                                                 |
| » addressing | body | list(integer) | false    | List of id of [Tag](/docs/apireference/v2/schemas/tag)                                                                      |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "action": "string",
  "text": "string",
  "categories": [0],
  "medias": [0],
  "location": {
    "location": "string",
    "lat": 0,
    "lng": 0
  },
  "addressing": [integer]
}
```

</TabItem>
</Tabs>
````

### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "action": "string",
  "text": "string",
  "categories": [0],
  "medias": [0],
  "location": {
    "location": "string",
    "lat": 0,
    "lng": 0
  },
  "addressing": [integer]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/status/{id}/',
{
  method: 'PUT',
  body: inputBody,
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
curl -X PUT /api/v2/status/{id}/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --data-raw '{
    "action": "string",
    "text": "string",
    "categories": [0],
    "medias": [0],
    "location": {
      "location": "string",
      "lat": 0,
      "lng": 0
    },
    "addressing": [integer]
  }'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description | Schema                              |
|--------|---------------------------------------------------------|-------------|-------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | [Status](/docs/apireference/v2/schemas/status) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": "integer",
  "type": "status",
  "action": "string",
  "categories": [
    {
      "id": 0,
      "tags": [],
      "followed": false,
      "order": 123,
      "name": "string",
      "name_synonyms": "string",
      "slug": "string",
      "slogan": "string",
      "html_info": "string",
      "seo_title": "string",
      "seo_description": "string",
      "auto_follow": "none",
      "active": "boolean",
      "image_original": "string",
      "image_bigger": "string",
      "image_big": "string",
      "image_medium": "string",
      "image_small": "string",
      "emotional_image_original": "string",
      "emotional_image_position": 0,
      "lastmod_datetime": "2019-08-24T14:15:22Z",
      "stream_order_by": "recent",
      "followers_counter": 13
    }
  ],
  "medias": [
    {
      "id": 0,
      "added_at": "2019-08-24T14:15:22Z",
      "type": "url",
      "title": "string",
      "description": "string",
      "url": "https://example.com",
      "image": "string",
      "image_width": 0,
      "image_height": 0,
      "order": 0,
      "embed": {
        "id": 0,
        "embed_type": "string",
        "embed_id": "string",
        "url": "string(uri)",
        "metadata": {}
      }
    }
  ],
  "location": {
    "location": "string",
    "lat": 0,
    "lng": 0
  },
  "last_activity_at": "2019-08-24T14:15:22Z",
  "last_edited_at": "2019-08-25T14:15:22Z",
  "author": {
    "id": 0,
    "username": "string",
    "real_name": "string",
    "date_joined": "2019-08-24T14:15:22Z",
    "bio": "string",
    "location": "string",
    "location_lat_lng": "string",
    "position_lat_lng": "string",
    "date_of_birth": "string",
    "description": "string",
    "gender": "Male",
    "website": "https://example.com",
    "avatar": "string",
    "cover": "string",
    "ext_id": "string",
    "tags": [],
    "reputation": 111,
    "followings_counter": 0,
    "followers_counter": 0,
    "posts_counter": 0,
    "discussions_counter": 0,
    "statuses_counter": 0,
    "polls_counter": 0
  },
  "added_at": "2019-08-24T14:15:22Z",
  "html": "string",
  "summary": "string",
  "deleted": "boolean",
  "collapsed": false,
  "comment_count": 0,
  "vote_count": 0,
  "followed": false,
  "suspended": "boolean",
  "flag_count": 0,
  "share_count": 0,
  "addressing": [integer]
}
```

</TabItem>
</Tabs>
````




