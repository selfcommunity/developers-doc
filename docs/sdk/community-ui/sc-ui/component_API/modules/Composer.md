---
id: "Composer"
title: "Module: Composer"
sidebar_label: "Composer"
sidebar_position: 0
custom_edit_url: null
---

## Type aliases

### ComposerProps

Ƭ **ComposerProps**<`D`, `P`\>: `OverrideProps`<`ComposerTypeMap`<`P`, `D`\>, `D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `React.ElementType` = `ComposerTypeMap`[``"defaultComponent"``] |
| `P` | {} |

#### Defined in

[packages/sc-ui/src/components/Composer/Composer.tsx:293](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Composer/Composer.tsx#L293)

## Variables

### MAIN\_VIEW

• `Const` **MAIN\_VIEW**: ``"main"``

#### Defined in

[packages/sc-ui/src/components/Composer/Composer.tsx:295](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Composer/Composer.tsx#L295)

___

### POLL\_VIEW

• `Const` **POLL\_VIEW**: ``"poll"``

#### Defined in

[packages/sc-ui/src/components/Composer/Composer.tsx:297](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Composer/Composer.tsx#L297)

## Functions

### Composer

▸ **Composer**(`props`): `JSX.Element`

> API documentation for the Community-UI Composer component. Learn about the available props and the CSS API.
> The Composer component contains the logic around the creation of [Post](https://developers.selfcommunity.com/docs/apireference/v2/post/create_a_post) and [Discussion](https://developers.selfcommunity.com/docs/apireference/v2/discussion/create_a_discussion) objects.

#### Import
```jsx
import {Composer} from '@selfcommunity/ui';
```
#### Component Name
The name `SCComposer` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCComposer-root|Styles applied to the root element.|
|title|.SCComposer-title|Styles applied to the title element.|
|types|.SCComposer-types|Styles applied to the types element.|
|avatar|.SCComposer-avatar|Styles applied to the avatar element.|
|content|.SCComposer-content|Styles applied to the content.|
|mediaContent|.SCComposer-mediaContent|Styles applied to the media content.|
|audienceContent|.SCComposer-audienceContent|Styles applied to the audience content.|
|locationContent|.SCComposer-locationContent|Styles applied to the location content.|
|block|.SCComposer-block|Styles applied to the block element.|
|editor|.SCComposer-editor|Styles applied to the editor element.|
|divider|.SCComposer-divider|Styles applied to the divider element.|
|medias|.SCComposer-medias|Styles applied to the medias.|
|location|.SCComposer-location|Styles applied to the location element.|
|audience|.SCComposer-audience|Styles applied to the audience element.|
|mediasActions|.SCComposer-mediasActions|Styles applied to the medias actions section.|
|sortableMedia|.SCComposer-sortableMedia|Styles applied to the sortable media element.|
|sortableMediaCover|.SCComposer-sortableMediaCover|Styles applied to the sortable media cover element.|
|links|.SCComposer-links|Styles applied to the links element.|
|actions|.SCComposer-actions|Styles applied to the actions section.|
|actionInput|.SCComposer-actionInput|Styles applied to the action input element.|
|badgeError|.SCComposer-badgeError|Styles applied to the badge error element.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `OverrideProps`<`ComposerTypeMap`<{}, ``"div"``\>, ``"div"``\> |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Composer/Composer.tsx:379](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Composer/Composer.tsx#L379)

___

### ComposerSkeleton

▸ **ComposerSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Composer/Skeleton.tsx:67](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Composer/Skeleton.tsx#L67)
