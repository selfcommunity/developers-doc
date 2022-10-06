---
sidebar_label: Get Last Revision of a Legal Page
sidebar_position: 1
title: Get Last Revision of a Legal Page
---

This endpoint retrieves the last revision of a legal page.

:::info

This operation does not require authentication.
If the user is authenticated the 'ack' field will be added to the response with the user's ack status for that document.

:::


## HTTP Request

`GET /api/v2/legal_page/{policy}/`

### Parameters

| Name   | In   | Type   | Required | Description                                 |
|--------|------|--------|----------|---------------------------------------------|
| policy | path | string | true     | Can be one between cookies, tec or privacy. |

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

fetch('/api/v2/legal_page/{policy}/',
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
curl -X GET /api/v2/legal_page/{policy}/ \
  -H 'Accept: application/json' 
```
</TabItem>
</Tabs>
````

## Responses
| Status | Meaning                                                 | Description | Schema                                                 |
|--------|---------------------------------------------------------|-------------|--------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | [Legal Page](/docs/apireference/v2/schemas/legal_page) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
[
    {
      "id": 0,
      "name_and_version": "string",
      "icon_class": "string",
      "label": "string",
      "external_url": "string",
      "html_summary": "string",
      "html_body": "string",
      "order": -2147483648,
      "valid_from": "2019-08-24",
      "valid_to": "2019-08-24",
      "created_at": "2019-08-24T14:15:22Z",
      "created_by": 0,
      "ack": {
          "id": 0,
          "accepted_at": "2022-10-06T10:07:29.079128+02:00",
          "not_accepted_at": null,
          "policy_document": 0,
          "user": 0
      }    
    }
]
```

</TabItem>
</Tabs>
````




