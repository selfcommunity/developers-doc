---
sidebar_label: Complete An Onboarding Step
sidebar_position: 3
title: Complete An Onboarding Step
---

This endpoint mark completed a specific onboarding step.
Some steps do not allow this api call to be performed. In particular for the "contents" and "categories" steps use the
api call [Start An Onboarding Step](/docs/apireference/v2/onboarding/start_a_step).
Step status should be "not_started" or "failed".

:::info
This operation requires authentication. The logged user must be the creator of the community (id=1).
:::

:::warning
The onboarding APIs are not available for Enterprise plans.
:::

## HTTP Request

`POST /api/v2/onboarding/{id}/complete/`

### Parameters

| Name | In   | Type    | Required | Description                                             |
|------|------|---------|----------|---------------------------------------------------------|
| id   | path | integer | true     | A unique integer value identifying this onboarding step |

### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/onboarding/{id}/complete/',
{
  method: 'POST',
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
curl -X POST /api/v2/onboarding/{id}/complete/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                                           |
|--------|---------------------------------------------------------|----------------------|------------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Onboarding Step](/docs/apireference/v2/schemas/onboarding_step) |
