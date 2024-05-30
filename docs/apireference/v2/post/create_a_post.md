---
sidebar_label: Create a Post
sidebar_position: 1
title: Create a Post
---

This endpoint creates a post

:::info

This operation requires authentication.

:::

## HTTP Request

`POST /api/v2/post/`

### Parameters

| Name                | In   | Type              | Required | Description                                                                                        |
|---------------------|------|-------------------|----------|----------------------------------------------------------------------------------------------------|
| » text              | body | string            | false    | The content of the post in html format, it can contain some mentions                               |
| » categories        | body | list(integer)     | true     | List of [Category](/docs/apireference/v2/schemas/category) ids                                     |
| » group             | body | integer           | false    | The id of the group                                                                                |
| » medias            | body | list(integer)     | false    | List of [Media](/docs/apireference/v2/schemas/media) (only one media of type share is allowed) ids |
| » location          | body | object¦null       | false    | The Location object to associate at the post                                                       |
| »» location         | body | string¦null       | true     | Location name                                                                                      |
| »» lat              | body | number¦null       | true     | Location latitude                                                                                  |
| »» lng              | body | number¦null       | true     | Location longitude                                                                                 |
| » poll              | body | object¦null       | false    | The poll object to associate to the post                                                           |
| »» title            | body | string            | true     | Poll title                                                                                         |
| »» multiple_choices | body | boolean           | false    | If poll choices can be multiple                                                                    |
| »» expiration_at    | body | string(date-time) | false    | Poll expiration datetime                                                                           |
| »» choices          | body | list(object)      | true     | Poll choices objects                                                                               |
| »»» choice          | body | string            | true     | Poll choice title                                                                                  |
| » addressing        | body | list(integer)     | false    | List of [Tag](/docs/apireference/v2/schemas/tag) ids                                               |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "text": "string",
    "categories": ["integer"],
    "medias": ["integer"],
    "location": {
      "location": "string",
      "lat": "integer",
      "lng": "integer"
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
    "text": "string",
    "categories": ["integer"],
    "medias": ["integer"],
    "location": {
      "location": "string",
      "lat": "integer",
      "lng": "integer"
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
    "addressing": ["integer"],
    "tags": ["integer"]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/post/',
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
curl -X POST /api/v2/post/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --data-raw '{
    "text": "string",
    "categories": ["integer"],
    "medias": ["integer"],
    "location": {
      "location": "string",
      "lat": "integer",
      "lng": "integer"
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
    "addressing": ["integer"],
    "tags": ["integer"]
  }'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Response status code|[Post](/docs/apireference/v2/schemas/post)|

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
  "location": {Location},
  "addressing": ["integer"],
  "tags": ["integer"],
  "poll": {Poll}
}
```

</TabItem>
</Tabs>
````




