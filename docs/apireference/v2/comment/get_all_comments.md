---
sidebar_label: Get All Comments
sidebar_position: 1
title: Get All Comments
---

This endpoint retrieves all comments.

:::info

If the `discussion` parameter is specified the endpoint retrieves all comments of a
specific [Discussion](/docs/apireference/v2/schemas/discussion).

If the `post` parameter is specified the endpoint retrieves all comments of a
specific [Post](/docs/apireference/v2/schemas/post).

If the `status` parameter is specified the endpoint retrieves all comments of a
specific [Status](/docs/apireference/v2/schemas/status).

If the `user` parameter is specified the endpoint retrieves all comments of a
specific [User](/docs/apireference/v2/schemas/user).

The `discussion`, `post`, `status` and `user` parameters cannot be used together and one of these parameters is
mandatory.

If the `parent` parameter is specified (only with `discussion`, `post` or `status`) the endpoint retrieves all comments
of a specific [Discussion](/docs/apireference/v2/schemas/discussion) , [Post](/docs/apireference/v2/schemas/post)
or [Status](/docs/apireference/v2/schemas/status) that has the passed parent (nested comments).

:::

:::info

It is possible to perform multiple ordering by concatenating the params -connection and -added_at.

:::

:::info

This operation requires authentication only if `content_availability` community option is false

:::

## HTTP Request

`GET /api/v2/comment/`

### Parameters

| Name       | In    | Type    | Required | Description                                                                                                                     |
|------------|-------|---------|----------|---------------------------------------------------------------------------------------------------------------------------------|
| limit      | query | integer | false    | Number of results to return per page.                                                                                           |
| offset     | query | integer | false    | The initial index from which to return the results.                                                                             |
| discussion | query | string  | true     | Id of the [Discussion](/docs/apireference/v2/schemas/discussion), required if both post, status and user parameters are not set |
| post       | query | string  | true     | Id of the [Post](/docs/apireference/v2/schemas/post), required if both discussion, status and user parameters are not set       |
| status     | query | string  | true     | Id of the [Status](/docs/apireference/v2/schemas/status), required if both discussion, post and user parameters are not set     |
| user       | query | string  | true     | Id of the [User](/docs/apireference/v2/schemas/user), required if both discussion, post and status parameters are not set       |
| parent     | query | string  | false    | Id of the parent [Comment](/docs/apireference/v2/schemas/comment), used for retrieve nested comments                            |
| ordering   | query | string  | false    | The field for sorting use - for order desc. Default to `added_at`                                                               |

#### Enumerated Values

| Parameter  | Value      | Description                                                       |
|------------|------------|-------------------------------------------------------------------|
| » ordering | added_at   | Order by added_at comment field                                   |
| » ordering | connection | Order giving pripority to user connections (friends or followers) |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization: 'Bearer {access_token}'
};

fetch('/api/v2/comment/',
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
curl -X GET /api/v2/comment/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
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

| Name       | Type                                                   | Required | Restrictions | Description |
|------------|--------------------------------------------------------|----------|--------------|-------------|
| » count    | integer                                                | false    | none         | none        |
| » next     | string(uri)¦null                                       | false    | none         | none        |
| » previous | string(uri)¦null                                       | false    | none         | none        |
| » results  | list([Comment](/docs/apireference/v2/schemas/comment)) | false    | none         | none        |

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
      "author": {User},
      "added_at": "string",
      "last_edited_at": "string",
      "html": "string",
      "summary": "string",
      "deleted": "boolean",
      "collapsed": "boolean",
      "parent": "integer",
      "in_reply_to": "integer",
      "comment_count": "integer",
      "vote_count": "integer",
      "reactions_count": [{Reaction}],
      "flag_count": "integer",
      "post": {
        "id": "integer",
        "slug": "string"
      },
      "latest_comments": [{Comment}],
      "type": "string",
      "voted": "boolean",
      "reaction": {Reaction}
    }
  ]
}

```

</TabItem>
</Tabs>
````


