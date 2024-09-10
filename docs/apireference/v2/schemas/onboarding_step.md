---
sidebar_label: Onboarding Step
sidebar_position: 1
title: Onboarding Step
---

```json
{
  "id": "integer",
  "step": {},
  "status": {},
  "completion_percentage": "integer",
  "results": []
}

```

#### Properties

| Name                  | Type                                                                                                   | Required | Restrictions | Description                                                                                                                                                     |
|-----------------------|--------------------------------------------------------------------------------------------------------|----------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                    | integer                                                                                                | false    | read-only    | Unique integer value identifying this onboarding step                                                                                                           |                                                                         |
| step                  | [step](/docs/apireference/v2/schemas/onboarding_step#enumerated-values)                                | false    | read-only    | Unique name of the onboarding step                                                                                                                              |
| status                | [status](/docs/apireference/v2/schemas/onboarding_step#enumerated-values)                              | false    | read-only    | Enum to define the status of the onboarding step                                                                                                                |
| completion_percentage | integer                                                                                                | false    | read-only    | The percentage of completion of the onboarding step (0-100)                                                                                                     |
| results               | list([Feed](/docs/apireference/v2/schemas/feed) or [Category](/docs/apireference/v2/schemas/category)) | false    | read-only    | List of [Feed](/docs/apireference/v2/schemas/feed) created (for step contents) or [Category](/docs/apireference/v2/schemas/category) modified (step categories) | 

#### Enumerated Values

| Property | Value       | Description                                                                 |
|----------|-------------|-----------------------------------------------------------------------------|
| step     | contents    | Identify the onboarding step about contents                                 |
| step     | categories  | Identify the onboarding step about categories                               |
| step     | appearance  | Identify the onboarding step about appearance                               |
| step     | profile     | Identify the onboarding step about profile                                  |
| step     | invite      | Identify the onboarding step about invite                                   |
| step     | app         | Identify the onboarding step about app                                      |
| status   | not_started | The onboarding step is not yet started                                      |
| status   | in_progress | The onboarding step is in progress (only for steps contents and categories) |
| status   | completed   | The onboarding step is completed                                            |
| status   | failed      | The onboarding step is failed                                               |
