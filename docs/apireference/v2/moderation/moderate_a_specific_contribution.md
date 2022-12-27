---
sidebar_label: Moderate a Specific Contribution
sidebar_position: 5
title: Moderate a Specific Contribution
---

This endpoint provides actions for flagged contributions moderation

:::info

This operation requires moderation role.

:::

## HTTP Request

`PATCH /api/v2/moderation/contribution/{id}/`

### Parameters

| Name              | In   | Type    | Required | Description                                                                                                                                                                                             |
|-------------------|------|---------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                | path | string  | true     | A unique integer value identifying this contribution                                                                                                                                                    |
| contribution_type | body | string  | true     | Valid values are: post, discussion, comment                                                                                                                                                             |
| action            | body | string  | true     | Valid values are: scold_author, scold_flagger, ignore, hide, delete                                                                                                                                     |
| user              | body | integer | true     | The user id of the contribution flagger to scold (use only with action=scold_flagger)                                                                                                                   |
| moderation_type   | body | integer | true     | An integer value to describe the moderation activity if action is one between scold_author, hide or delete. This param is not needed if the contribute is already hidden or deleted (you are restoring) |

#### Enumerated Values

|Parameter|Value|Description|
|---|---|---|
|moderation_type|0|spam|
|moderation_type|1|aggressive|
|moderation_type|2|vulgar|
|moderation_type|3|poor|
|moderation_type|4|offtopic|

#### Actions 
The following actions can be performed using this endpoint:

* *scold_author*: scold the author of the post, a kindly notification will be sent to the author of the contribution with moderation_type as the cause
* *scold_flagger*: scold a flagger of the post, a kindly notification will be sent to the author of the flag
* *ignore*: ignore the contribute into the moderation flow (for moderators)
* *hide*: hide the contribution for all community users except for the author with moderation_type as the cause
* *delete*: delete the contribution for all community users with moderation_type as the cause

The following types of actions are "toggle actions" (calling the endpoint twice with the same action will cancel it): ignore, hide and delete.

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "contribution_type": "string",
  "action": "string",
  "moderation_type": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/moderation/contribution/{id}/',
{
  method: 'PATCH',
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
curl -X PATCH /api/v2/moderation/contribution/{id}/ \
  -H 'Authorization: Bearer {access_token}' \
  --form 'contribution_type="post"' \
  --form 'action="scold_author"' \
  --form 'moderation_type="1"'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Response status code|None|




