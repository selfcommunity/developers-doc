---
sidebar_label: Create a Status
sidebar_position: 2
title: Create a Status
---

This endpoint creates a status

:::info

This operation requires authentication.

:::

## HTTP Request

`POST /api/v2/status/`

### Parameters

| Name         | In   | Type          | Required | Description                                                                                          |
|--------------|------|---------------|----------|------------------------------------------------------------------------------------------------------|
| » action     | body | string¦null   | true     | The action of the status                                                                             |
| » text       | body | string        | false    | The content of the status in html format, it can contain some [mentions](#selfcommunity-api-mention) |
| » categories | body | list(integer) | true     | List of id of [Category](../schemas/category)                                                            |
| » medias     | body | list(integer) | false    | List of id of [Media](../schemas/media)                                                                  |
| » location   | body | object¦null   | false    | The Location object to associate with the status                                                     |
| »» location  | body | string¦null   | true     | none                                                                                                 |
| »» lat       | body | number¦null   | true     | none                                                                                                 |
| »» lng       | body | number¦null   | true     | none                                                                                                 |
| » addressing | body | list(integer) | false    | List of id of [Tag](../schemas/tag)                                                                      |

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
  "addressing": []
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
  "addressing": []
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/status/',
{
  method: 'POST',
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
curl -X POST /api/v2/status/ \
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
    "addressing": []
  }'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                      | Description | Schema                  |
|--------|--------------------------------------------------------------|-------------|-------------------------|
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | [Status](../schemas/status) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": 0,
  "action": "string",
  "categories": [
    {
      "id": 0,
      "tags": [],
      "order": 123,
      "name": "string",
      "name_synonyms": "string",
      "slug": "string",
      "slogan": "string",
      "html_info": "string",
      "seo_title": "string",
      "seo_description": "string",
      "auto_follow": "string",
      "active": true,
      "deleted": false,
      "image_original": "string",
      "image_bigger": "string",
      "image_big": "string",
      "image_medium": "string",
      "image_small": "string",
      "emotional_image_original": "string",
      "emotional_image_position": 123,
      "lastmod_datetime": "2019-08-24T14:15:22Z",
      "stream_order_by": "string",
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
        "url": "string",
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
  "deleted": true,
  "collapsed": false,
  "comment_count": 0,
  "vote_count": 0,
  "flag_count": 0,
  "share_count": 0,
  "addressing": []
}
```

</TabItem>
</Tabs>
````




