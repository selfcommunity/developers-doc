---
sidebar_label: Locality
sidebar_position: 1
title: Locality
---

```json
{
  "full_address": "string",
  "postal_code": "string",
  "town": "string",
  "province": "string",
  "province_short": "string",
  "region": "string",
  "country": "string",
  "lat": "integer",
  "lng": "integer"
}

```

#### Properties

| Name           | Type    | Required | Restrictions | Description             |
|----------------|---------|----------|--------------|-------------------------|
| full_address   | string  | false    | read-only    | Locality full address   |
| postal_code    | string  | false    | read-only    | Locality postal code    |
| town           | string  | false    | read-only    | Locality town name      |
| province       | string  | false    | read-only    | Locality province name  |
| province_short | string  | false    | read-only    | Locality province short |
| region         | string  | false    | read-only    | Locality region name    |
| country        | string  | false    | read-only    | Locality country name   |
| lat            | integer | false    | read-only    | Locality latitude       |
| lng            | integer | false    | read-only    | Locality longitude      |
