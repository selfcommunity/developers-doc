---
sidebar_label: Start An Onboarding Step
sidebar_position: 4
title: Start An Onboarding Step
---

This endpoint start a specific onboarding step.
Some steps do not allow this api call to be performed. In particular for the "contents" and "categories" steps you can
use this api call, otherwise use the
api call [Complete An Onboarding Step](/docs/apireference/v2/onboarding/complete_a_step).
Step status should be "not_started" or "failed".

:::info

This operation requires authentication. The logged user must be the creator of the community (id=1).

:::

## HTTP Request

`POST /api/v2/onboarding/{id}/start/`

### Parameters

| Name       | In    | Type    | Required | Description                                                                                                                                     |
|------------|-------|---------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| id         | path  | integer | true     | A unique integer value identifying this onboarding step                                                                                         |
| num_posts  | query | integer | false    | Number of total posts to be generated; only for step "contents". Only for stage. Default: 10                                                    |
| num_images | query | integer | false    | For each category specify how many images will be generated and then associated to a post; only for step "contents". Only for stage. Default: 1 |
| force      | query | boolean | false    | Force the start even if the status is not "not_started" or "failed". Only for stage                                                             |

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

fetch('/api/v2/onboarding/{id}/start/',
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
curl -X POST /api/v2/onboarding/{id}/start/ \
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
