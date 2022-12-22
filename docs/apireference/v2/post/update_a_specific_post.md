---
sidebar_label: Update a specific Post
sidebar_position: 5
title: Update a specific Post
---

This endpoint updates a specific post

:::info

This operation requires authentication. The logged user must be the post creator.

:::

## HTTP Request

`PUT /api/v2/post/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|» text|body|string|false|The content of the post in html format, it can contain some mentions|
|» categories|body|list(integer)|true|List of id of [Category](/docs/apireference/v2/schemas/category)|
|» medias|body|list(integer)|false|List of id of [Media](/docs/apireference/v2/schemas/media)|
|» location|body|object¦null|false|The Location object to associate at the post|
|»» location|body|string¦null|true|none|
|»» lat|body|number¦null|true|none|
|»» lng|body|number¦null|true|none|
|» poll|body|object¦null|false|The poll object to associate at the post|
|»» title|body|string|true|none|
|»» multiple_choices|body|boolean|false|none|
|»» expiration_at|body|string(date-time)|false|none|
|»» choices|body|list(object)|true|none|
|»»» choice|body|string|true|none|
|» addressing|body|list(integer)|false|List of id of [Tag](/docs/apireference/v2/schemas/tag)|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "text": "string",
    "categories": [integer],
    "medias": [integer],
    "location": {
      "location": "string",
      "lat": "integer,
      "lng": "integer
    },
    "poll": {
      "title": "string",
      "multiple_choices": "boolean",
      "closed": "boolean",
      "expiration_at": "string",
      "choices": [
        {
          "choice": "string"
        }
      ]
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
    "text": "string",
    "categories": [integer],
    "medias": [integer],
    "location": {
      "location": "string",
      "lat": "integer,
      "lng": "integer
    },
    "poll": {
      "title": "string",
      "multiple_choices": "boolean",
      "closed": "boolean",
      "expiration_at": "string",
      "choices": [
        {
          "choice": "string"
        }
      ]
    },
    "addressing": [integer]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/post/{id}/',
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
curl -X PUT /api/v2/post/{id}/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --data-raw '{
    "text": "string",
    "categories": [integer],
    "medias": [integer],
    "location": {
      "location": "string",
      "lat": "integer,
      "lng": "integer
    },
    "poll": {
      "title": "string",
      "multiple_choices": "boolean",
      "closed": "boolean",
      "expiration_at": "string",
      "choices": [
        {
          "choice": "string"
        }
      ]
    },
    "addressing": [integer]
  }'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Post](/docs/apireference/v2/schemas/post)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": "integer",
  "type": "string",
  "last_activity_at": "string",
  "author": {},
  "added_at": "string",
  "last_edited_at": "string",
  "html": "string",
  "summary": "string",
  "deleted": "boolean",
  "collapsed": "boolean",
  "comment_count": "integer",
  "view_count": "integer",
  "vote_count": "integer",
  "reactions_count": [],
  "voted": "boolean",
  "reaction": {},
  "follower_count": "integer",
  "followed": "boolean",
  "suspended": "boolean",
  "flag_count": "integer",
  "share_count": "integer",
  "slug": "string",
  "categories": [],
  "medias": [],
  "location": {},
  "addressing": [],
  "poll": {}
}
```

</TabItem>
</Tabs>
````




