---
sidebar_label: User External Provider
sidebar_position: 1
title: User External Provider
---

```json
{
  "user_id": 11,
  "provider": "facebook",
  "ext_id": "12345",
  "profile_url": "https://www.facebook.com/my_profile/",
  "show_in_profile": false
}

```

#### Properties

| Name            | Type    | Required | Description                                                                                                                              |
|-----------------|---------|----------|------------------------------------------------------------------------------------------------------------------------------------------|
| user_id         | integer | true     | The user id                                                                                                                              |
| ext_id          | string  | true     | A unique external id identifying the user                                                                                                |
| provider        | string  | true     | The external provider of the ext_id                                                                                                      |
| profile_url     | string  | false    | An optional url to the social profile; only for providers other than external                                                            |
| metadata        | string  | false    | An optional json only for the external provider                                                                                          |
| show_in_profile | bool    | false    | Default false. An optional flag to indicate if the social association can be showed in the user profile. Provider must not be 'external' |
