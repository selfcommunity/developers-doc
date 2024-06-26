---
sidebar_label: Create a Discussion
sidebar_position: 1
title: Create a Discussion
---

This endpoint creates a discussion.

:::info

This operation requires authentication

:::

## HTTP Request

`POST /api/v2/discussion/`

### Parameters

:::info

By passing a category id that has parents defined, the system will automatically ascend the category graph based on the parents and will also automatically add the parents category ids to the discussion.

:::

| Name                | In   | Type              | Required | Description                                                                                          |
|---------------------|------|-------------------|----------|------------------------------------------------------------------------------------------------------|
| » title             | body | string¦null       | true     | The title of the discussion                                                                          |
| » text              | body | string            | false    | The content of the discussion in html format, it can contain some mentions                           |
| » categories        | body | list(integer)     | true     | List of id of [Category](/docs/apireference/v2/schemas/category)                                     |
| » group             | body | integer           | false    | The id of the group                                                                                  |
| » medias            | body | list(integer)     | false    | List of id of [Media](/docs/apireference/v2/schemas/media) (only one media of type share is allowed) |
| » location          | body | object¦null       | false    | The Location object to associate at the discussion                                                   |
| »» location         | body | string¦null       | true     | The location name                                                                                    |
| »» lat              | body | number¦null       | true     | The location latitude                                                                                |
| »» lng              | body | number¦null       | true     | The location longitude                                                                               |
| » poll              | body | object¦null       | false    | The poll object to associate at the discussion                                                       |
| »» title            | body | string            | true     | The poll title                                                                                       |
| »» multiple_choices | body | boolean           | false    | If poll has multiple choices                                                                         |
| »» expiration_at    | body | string(date-time) | false    | Poll expiration datetime                                                                             |
| »» choices          | body | list(object)      | true     | Poll choices                                                                                         |
| »»» choice          | body | string            | true     | Poll choice obj                                                                                      |
| » addressing        | body | list(integer)     | false    | List of [Tag](/docs/apireference/v2/schemas/tag) ids                                                 |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "title": "string",
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
const inputBody = {
    "title": "string",
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
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/discussion/',
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
curl -X POST /api/v2/discussion/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --data-raw '{
    "title": "string",
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
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Response status code|[Discussion](/docs/apireference/v2/schemas/discussion)|

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
  "location": "string",
  "addressing": ["integer"],
  "tags": ["integer"],
  "poll": {Poll},
  "title": "string"
}
```

</TabItem>
</Tabs>
````




