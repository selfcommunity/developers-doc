---
sidebar_label: Get Moderation Status for a Specific Contribution
sidebar_position: 1
title: Get Moderation Status for a Specific Contribution
---

This endpoint retrieves moderation status for a specific contribution

:::info

This operation requires moderation role.

:::

## HTTP Request

`GET /api/v2/moderation/contribution/{id}/status/`


### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this Contribution|
|contribution_type|body|string|true|Valid values are: post, discussion, status, comment|

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/moderation/contribution/{id}/status/',
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
curl -X GET /api/v2/moderation/contribution/{id}/status/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning| Description    | Schema |
|---|---|----------------|--------|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code| Inline |

#### Status values

| Parameter | Value   |
|-----------|---------|
| status | open    |
| status | ignored |
| status | hidden  |
| status | deleted | 


#### Flag type values

| Parameter | Value | Description |
|-----------|-------|-------------|
| flag_type | 0     | spam        |
| flag_type | 1     | aggressive  |
| flag_type | 2     | vulgar      |
| flag_type | 3     | poor        |
| flag_type | 4     | offtopic    |


### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "status": "string",
    "flag_type": "integer",
    "flag_type_description": "string"
}
```

</TabItem>
</Tabs>
````
