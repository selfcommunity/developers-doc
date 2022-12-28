---
sidebar_label: Get All Last Revisions
sidebar_position: 1
title: Get All Last Revisions
---

This endpoint retrieves all last revisions of legal pages.

:::info

This operation does not require authentication.
If the user is authenticated the 'ack' field will be added to the response with the user's ack status for that document.

:::


## HTTP Request

`GET /api/v2/legal_page/last_revisions/`

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

fetch('/api/v2/legal_page/last_revisions/',
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
curl -X GET /api/v2/legal_page/last_revisions/ \
  -H 'Accept: application/json' 
```
</TabItem>
</Tabs>
````

## Responses
| Status | Meaning                                                 | Description | Value/Schema                                                 |
|--------|---------------------------------------------------------|-------------|--------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code        | list([Legal Page](/docs/apireference/v2/schemas/legal_page)) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": "integer",
  "name_and_version": "string",
  "icon_class": "string",
  "label": "string",
  "external_url": "string",
  "html_summary": "string",
  "html_body": "string",
  "order": "integer",
  "valid_from": "string",
  "valid_to": "string",
  "created_at": "string",
  "created_by": "integer",
  "ack": {
      "id": "integer",
      "accepted_at": "string",
      "not_accepted_at": "string",
      "policy_document": "integer",
      "user": "integer"
  }      
}
```

</TabItem>
</Tabs>
````




