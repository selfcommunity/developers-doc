## Hierarchy

- `CardProps`

  ↳ **`FeedObjectProps`**
### Properties

- [className](#classname)
- [id](#id)
- [hideFollowAction](#hidefollowaction)
- [hideParticipantsPreview](#hideparticipantspreview)
- [hideShareAction](#hideshareaction)
- [feedObject](#feedobject)
- [feedObjectActivities](#feedobjectactivities)
- [feedObjectId](#feedobjectid)
- [feedObjectType](#feedobjecttype)
- [template](#template)
- [p](#p)

## Properties

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

CardProps.className

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:181](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L181)

___

### id

• `Optional` **id**: `string`

Id of the feedObject

**`default`** `feed_object_<feedObjectType>_<feedObjectId | feedObject.id>`

#### Overrides

CardProps.id

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:175](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L175)

___

### hideFollowAction

• `Optional` **hideFollowAction**: `boolean`

Hide follow action object

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:222](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L222)

___

### hideParticipantsPreview

• `Optional` **hideParticipantsPreview**: `boolean`

Hide Participants preview

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:228](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L228)

___

### hideShareAction

• `Optional` **hideShareAction**: `boolean`

Hide share action object

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:216](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L216)

___

### feedObject

• `Optional` **feedObject**: [SCFeedObjectType](../../sc-core/Api_Reference/Types/feed#scfeedobjecttype)

Feed Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:192](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L192)

___

### feedObjectActivities

• `Optional` **feedObjectActivities**: `any`[]

Feed Object latest activities

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:204](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L204)

___

### feedObjectId

• `Optional` **feedObjectId**: `number`

Id of feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:186](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L186)

___

### feedObjectType

• `Optional` **feedObjectType**: [SCFeedObjectTypologyType](../../sc-core/Api_Reference/Types/feed#scfeedobjecttypologytype)

Feed Object type

**`default`** 'post'

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:198](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L198)

___
### template

• `Optional` **template**: [FeedObjectTemplateType](../Types/feed#feedobjecttemplatetype)

Feed Object template type

**`default`** 'preview'

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:210](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L210)

___

### p

• `Optional` **p**: `string`

Other props

**`default`** 'null'
