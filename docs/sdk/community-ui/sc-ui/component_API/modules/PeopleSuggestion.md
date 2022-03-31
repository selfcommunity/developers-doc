---
id: "PeopleSuggestion"
title: "Module: PeopleSuggestion"
sidebar_label: "PeopleSuggestion"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [PeopleSuggestionProps](../interfaces/PeopleSuggestion.PeopleSuggestionProps.md)

## Functions

### PeopleSuggestion

▸ **PeopleSuggestion**(`inProps`): `JSX.Element`

> API documentation for the Community-UI People Suggestion component. Learn about the available props and the CSS API.

#### Import

```jsx
import {PeopleSuggestion} from '@selfcommunity/ui';
```

#### Component Name

The name `SCPeopleSuggestion` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCPeopleSuggestion-root|Styles applied to the root element.|
|title|.SCPeopleSuggestion-title|Styles applied to the title element.|
|suggestedUserItem|.SCPeopleSuggestion-suggested-user-item|Styles applied to the suggested user element.|
|noResults|.SCPeopleSuggestion-noResults|Styles applied to the no results section.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `inProps` | [`PeopleSuggestionProps`](../interfaces/PeopleSuggestion.PeopleSuggestionProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/PeopleSuggestion/PeopleSuggestion.tsx:92](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/PeopleSuggestion/PeopleSuggestion.tsx#L92)

___

### PeopleSuggestionSkeleton

▸ **PeopleSuggestionSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/PeopleSuggestion/Skeleton.tsx:23](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/PeopleSuggestion/Skeleton.tsx#L23)
