---
sidebar_label: Poll
sidebar_position: 1
title: Poll
---


## SCPollType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|number|false|The ID of the Poll|
|title|string|false|Title of the poll|
|multiple_choices|boolean|false|Poll is multiple choices or not|
|added_at|Date|false|Added at|
|modified_at|Date|false|Modified at|
|closed|boolean|false|Poll is closed or not|
|expiration_at|string/ Date|false|Expiration at|
|hidden|boolean|false|If true, the Poll is not visible|
|choices|[SCPollChoiceType](#scpollchoicetype)[]|false|Choices|



## SCPollChoiceType

### Properties

|Name|Type|Required|Description|
|---|---|---|---
|id|number|false|Id of the poll choice|
|choice|number|false|Poll choice|
|order|number|false|Order in the list of choices|
|added_at|Date|false|Added at|
|deleted|boolean|false|True if the poll is deleted|
|vote_count|number|false|Number of votes|
|voted|boolean|false|True if the logged user has already voted the choice|
