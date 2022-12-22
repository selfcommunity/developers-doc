---
sidebar_label: Generate Data Portability
sidebar_position: 1
title: Generate Data Portability
---

This endpoint generates data portability.

:::info

This operation requires authentication.

:::


## HTTP Request

`POST /api/v2/udp/`



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

fetch('/api/v2/udp/',
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
curl -X POST /api/v2/udp/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````


## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|


### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computing|boolean|false|read-only|Is still processing your data?|
|send_email|boolean|false|read-only|Has already sent the email?|
|requested_at|string(date-time)|false|read-only|Request date time|
|generated_at|string(date-time)|false|read-only|Generation date time|
|email_sent_at|string(date-time)|false|read-only|Email sent date time|
|downloaded_at|string(date-time)|false|read-only|Download date time|


### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "computing": "boolean",
    "send_email": "boolean",
    "requested_at": "string",
    "generated_at": "string",
    "email_sent_at": "string",
    "downloaded_at": "string"
}
```

</TabItem>
</Tabs>
````




