---
sidebar_label: Get An Onboarding Step
sidebar_position: 2
title: Get An Onboarding Step
---

This endpoint retrieves a specific onboarding step.

:::info

This operation requires authentication. The logged user must be the creator of the community (id=1).

:::

## HTTP Request

`GET /api/v2/onboarding/{id}/`

### Parameters

| Name | In   | Type    | Required | Description                                             |
|------|------|---------|----------|---------------------------------------------------------|
| id   | path | integer | true     | A unique integer value identifying this onboarding step |

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

fetch('/api/v2/onboarding/{id}/',
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
curl -X GET /api/v2/onboarding/{id}/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                                           |
|--------|---------------------------------------------------------|----------------------|------------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Onboarding Step](/docs/apireference/v2/schemas/onboarding_step) |
