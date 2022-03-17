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

[packages/sc-ui/src/components/InlineComposer/InlineComposer.tsx:87](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/InlineComposer/InlineComposer.tsx#L87)

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

[packages/sc-ui/src/components/InlineComposer/InlineComposer.tsx:126](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/InlineComposer/InlineComposer.tsx#L126)

___

### InlineComposerSkeleton

▸ **InlineComposerSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/InlineComposer/Skeleton.tsx:36](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/InlineComposer/Skeleton.tsx#L36)
