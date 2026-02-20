---
sidebar_label: Build a Webhook Endpoint
sidebar_position: 2
title: Build a Webhook Endpoint
---

### Build a webhook endpoint
*For testing purpose you can create a webhook receiver using [RequestBin](https://requestbin.com/)

The first step to adding webhooks to your SeflCommunity integration is to build your own custom endpoint. Creating a webhook endpoint on your server is no different from creating any page on your website. 


#### Expected data
For each event occurrence, SelfCommunity POSTs the webhook data to your endpoint in JSON format. The full event details are included and can be used directly after parsing the JSON. Thus, at minimum, the webhook endpoint needs to expect data through a POST request and confirm successful receipt of that data.


#### Response code
To acknowledge receipt of an event, your endpoint must return a 2xx HTTP status code to SelfCommunity. All response codes outside this range, including 3xx codes, indicate to SelfCommunity that you did not receive the event.

If SelfCommunity does not receive a 2xx HTTP status code, the notification attempt is repeated. We will try 5 more times: after 5, 25, 125, 625, 3125 seconds. If it still fails for each of those attempts, it is counted as one non-successful delivery.

Because properly acknowledging receipt of the webhook notification is so important, your endpoint should return a 2xx HTTP status code prior to any complex logic that could cause a timeout.

:::info

A URL redirection or a “Not Modified” response is treated as a failure. SelfCommunity ignores any other information returned in the request headers or request body.

:::



#### Check the webhook signatures
SelfCommunity sign the webhook events it sends to your endpoints by including a signature in each event’s SelfCommunity-Signature header. This allows you to verify that the events were sent by SelfCommunity, not by a third party. 

Before you can verify signatures, you need to retrieve your endpoint’s secret from your Dashboard’s Webhooks settings. Select an endpoint that you want to obtain the secret for, then click the Click to reveal button.

SelfCommunity generates a unique secret key for each endpoint. If you use multiple endpoints, you must obtain a secret for each one you want to verify signatures on. After this setup, SelfCommunity starts to sign each webhook it sends to the endpoint.

**Signature Verification**
The SelfCommunity-Signature header included in each signed event contains a timestamp and one or more signatures. The timestamp is prefixed by t=, and each signature is prefixed by a scheme. Schemes start with v, followed by an integer. Currently, the only valid live signature scheme is v0.

```
SelfCommunity-Signature:
t=1492774577,
v1=5257a869e7ecebeda32affa62cdca3fa51cad7e77a0e56ff536d0ce8e108d8bd,
v0=6ffbb59b2300aae63f272406069a9788598b792a944a07aba816edb039989a39
```

Note that newlines have been added for clarity, but a real SelfCommunity-Signature header is on a single line.

SelfCommunity generates signatures using a hash-based message authentication code (HMAC) with SHA-256.

To verify webhook event signatures, you can create a custom solution by following these steps.

*Step 1: Extract the timestamp and signatures from the header*
Split the header, using the , character as the separator, to get a list of elements. Then split each element, using the = character as the separator, to get a prefix and value pair.

The value for the prefix t corresponds to the timestamp, and v1 corresponds to the signature (or signatures). You can discard all other elements.

*Step 2: Prepare the signed_payload string*
The signed_payload string is created by concatenating:

The timestamp (as a string)
The character .
The actual JSON payload (i.e., the request body)

*Step 3: Determine the expected signature*
Compute an HMAC with the SHA256 hash function. Use the endpoint’s signing secret as the key, and use the signed_payload string as the message.

*Step 4: Compare the signatures*
Compare the signature (or signatures) in the header to the expected signature. For an equality match, compute the difference between the current timestamp and the received timestamp, then decide if the difference is within your tolerance.

To protect against timing attacks, use a constant-time string comparison to compare the expected signature to each of the received signatures.