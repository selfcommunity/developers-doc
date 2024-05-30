---
sidebar_label: Unflag a Specific Status
sidebar_position: 1
title: Unflag a Specific Status
---

This endpoint removes a flag for a specific status

:::info

This operation requires authentication.

:::

## HTTP Request

`POST /api/v2/status/{id}/flag/`

### Parameters

| Name      | In   | Type    | Required | Description                                     |
|-----------|------|---------|----------|-------------------------------------------------|
| id        | path | string  | true     | A unique integer value identifying this status. |
| flag_type | body | integer | true     | An integer from 0 to 4                          |

#### Enumerated Values

| Parameter | Value | Description |
|-----------|-------|-------------|
| flag_type | 0     | spam        |
| flag_type | 1     | aggressive  |
| flag_type | 2     | vulgar      |
| flag_type | 3     | poor        |
| flag_type | 4     | offtopic    |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "flag_type": "boolean"
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
  "flag_type": "boolean"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/status/{id}/flag/',
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
curl -X POST /api/v2/status/{id}/flag/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --data-raw '{
    "flag_type": "boolean"
  }'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description | Schema |
|--------|-----------------------------------------------------------------|-------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code        | None   |






