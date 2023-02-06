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

| Name         | In   | Type          | Required | Description                                                            |
|--------------|------|---------------|----------|------------------------------------------------------------------------|
| » action     | body | string¦null   | true     | The action of the status                                               |
| » text       | body | string        | false    | The content of the status in html format, it can contain some mentions |
| » categories | body | list(integer) | true     | List of  [Category](/docs/apireference/v2/schemas/category) ids        |
| » medias     | body | list(integer) | false    | List of  [Media](/docs/apireference/v2/schemas/media)  ids             |
| » location   | body | object¦null   | false    | The Location object to associate with the status                       |
| »» location  | body | string¦null   | true     | Location name                                                          |
| »» lat       | body | number¦null   | true     | Location latitude                                                      |
| »» lng       | body | number¦null   | true     | Location Longitude                                                     |
| » addressing | body | list(integer) | false    | List of [Tag](/docs/apireference/v2/schemas/tag) ids                   |

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
  "categories": ["integer"],
  "medias": ["integer"],
  "location": {
    "location": "string",
      "lat": "integer",
      "lng": "integer"
  },
  "addressing": ["integer"],
  "tags": ["integer"]
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
  "categories": ["integer"],
  "medias": ["integer"],
  "location": {
    "location": "string",
      "lat": "integer",
      "lng": "integer"
  },
  "addressing": ["integer"],
  "tags": ["integer"]
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
      "categories": ["integer"],
      "medias": ["integer"],
      "location": {
        "location": "string",
          "lat": "integer",
          "lng": "integer"
      },
      "addressing": ["integer"],
      "tags": ["integer"]
  }'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description | Schema                              |
|--------|---------------------------------------------------------|-------------|-------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code         | [Status](/docs/apireference/v2/schemas/status) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": "integer",
  "type": "string",
  "last_activity_at": "string",
  "author": {User},
  "added_at": "string",
  "last_edited_at": "string",
  "html": "string",
  "summary": "string",
  "deleted": "boolean",
  "collapsed": "boolean",
  "comment_count": "integer",
  "view_count": "integer",
  "vote_count": "integer",
  "reactions_count": [{Reaction}],
  "voted": "boolean",
  "reaction": {Reaction},
  "follower_count": "integer",
  "followed": "boolean",
  "suspended": "boolean",
  "flag_count": "integer",
  "share_count": "integer",
  "slug": "string",
  "categories": [{Category}],
  "medias": [{Media}],
  "location": {Locality},
  "addressing": ["integer"],
  "tags": ["integer"]
}
```

</TabItem>
</Tabs>
````




