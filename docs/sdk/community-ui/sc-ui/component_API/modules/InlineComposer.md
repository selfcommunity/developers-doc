---
id: "InlineComposer"
title: "Module: InlineComposer"
sidebar_label: "InlineComposer"
sidebar_position: 0
custom_edit_url: null
---

## Type aliases

### InlineComposerProps

Ƭ **InlineComposerProps**<`D`, `P`\>: `OverrideProps`<`InlineComposerTypeMap`<`P`, `D`\>, `D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `React.ElementType` = `InlineComposerTypeMap`[``"defaultComponent"``] |
| `P` | {} |

#### Defined in

[packages/sc-ui/src/components/InlineComposer/InlineComposer.tsx:86](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-ui/src/components/InlineComposer/InlineComposer.tsx#L86)

## Functions

### InlineComposer

▸ **InlineComposer**(`props`): `JSX.Element`

> API documentation for the Community-UI Inline Composer component. Learn about the available props and the CSS API.

#### Import
```jsx
import {InlineComposer} from '@selfcommunity/ui';
```
#### Component Name
The name `SCInlineComposer` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCInlineComposer-root|Styles applied to the root element.|
|input|.SCInlineComposer-input|Styles applied to the input element.|
|actions|.SCInlineComposer-actions|Styles applied to the actions section.|
|avatar|.SCInlineComposer-avatar|Styles applied to the avatar element.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `OverrideProps`<`InlineComposerTypeMap`<{}, ``"div"``\>, ``"div"``\> |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/InlineComposer/InlineComposer.tsx:125](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-ui/src/components/InlineComposer/InlineComposer.tsx#L125)

___

### InlineComposerSkeleton

▸ **InlineComposerSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/InlineComposer/Skeleton.tsx:34](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-ui/src/components/InlineComposer/Skeleton.tsx#L34)
