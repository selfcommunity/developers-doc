---
sidebar_label: List of Comment Events
sidebar_position: 1
title: List of Comment Events
---

| Event            | Triggered When                       | Note |
|------------------|--------------------------------------|------|
| comment.created  | a new comment is created             | ---  |
| comment.updated  | a comment is updated                 | ---  |
| comment.deleted  | a comment is deleted                 | ---  |
| comment.restored | a comment is restored after deletion | ---  |

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "id": 0,
        "discussion": 11,
        "author": {
            "id": 1,
            "username": "string",
            "real_name": "string",
            "description": "string",
            "avatar": "string",
            "ext_id": 3,
            "tags": [],
            "reputation": 24,
            "followings_counter": 1,
            "followers_counter": 1,
            "posts_counter": 3,
            "discussions_counter": 5,
            "statuses_counter": 1,
            "polls_counter": 8
        },
        "added_at": "2021-06-07T10:14:52.772383+02:00",
        "html":  "string",
        "summary":  "string",
        "deleted": true,
        "collapsed": false,
        "parent": "string",
        "in_reply_to": "string",
        "comment_count": 0,
        "vote_count": 0,
        "flag_count": 0
    }
}
```

</TabItem>
</Tabs>
````