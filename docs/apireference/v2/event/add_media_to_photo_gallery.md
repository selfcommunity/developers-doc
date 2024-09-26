---
sidebar_label: Add Media To Event Photo Gallery
sidebar_position: 1
title: Add Media To Event Photo Gallery
---

This endpoint allows the manager to add a new [Media](/docs/apireference/v2/schemas/media) to the photo gallery for the
event identified by `{id}`.

The client must split the file into chunks and send to the server in
series ([Chunk Upload Media](/docs/apireference/v2/media/chunk_upload_media.md)). After all the chunks have been
uploaded the client must call the [Chunk Upload Complete](/docs/apireference/v2/media/chunk_upload_media_complete.md)
endpoint with the given `upload_id` parameter to finalize the upload and retrieve
the [Media](/docs/apireference/v2/schemas/media).

:::info

This operation requires authentication and that the user is the manager of the event.

The user who adds the media to the photo gallery must be the same user who uploaded the media.

:::

## HTTP Request

`POST /api/v2/event/{id}/gallery/`

### Parameters

| Name  | In   | Type    | Required | Description                                                                    |
|-------|------|---------|----------|--------------------------------------------------------------------------------|
| id    | path | integer | true     | A unique integer value identifying this event                                  |
| media | body | integer | true     | id of [Media](/docs/apireference/v2/schemas/media) to add to the photo gallery |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "users": ["integer"]
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/event/{id}/gallery/',
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
curl -X POST /api/v2/event/{id}/gallery/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                       |
|--------|---------------------------------------------------------|----------------------|----------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Media](/docs/apireference/v2/schemas/media) |
