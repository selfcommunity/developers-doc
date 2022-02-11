---
id: "UserProps"
title: "Interface: UserProps"
sidebar_label: "UserProps"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Hierarchy

- `Pick`<`CardProps`, `Exclude`<keyof `CardProps`, ``"id"``\>\>

  ↳ **`UserProps`**

## Indexable

▪ [p: `string`]: `any`

Any other properties

## Properties

### about

• `Optional` **about**: `string`

#### Inherited from

Pick.about

#### Defined in

node_modules/@types/react/index.d.ts:1859

___

### accessKey

• `Optional` **accessKey**: `string`

#### Inherited from

Pick.accessKey

#### Defined in

node_modules/@types/react/index.d.ts:1835

___

### aria-activedescendant

• `Optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

Pick.aria-activedescendant

#### Defined in

node_modules/@types/react/index.d.ts:1569

___

### aria-atomic

• `Optional` **aria-atomic**: `Booleanish`

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

Pick.aria-atomic

#### Defined in

node_modules/@types/react/index.d.ts:1571

___

### aria-autocomplete

• `Optional` **aria-autocomplete**: ``"list"`` \| ``"none"`` \| ``"inline"`` \| ``"both"``

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

Pick.aria-autocomplete

#### Defined in

node_modules/@types/react/index.d.ts:1576

___

### aria-busy

• `Optional` **aria-busy**: `Booleanish`

Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.

#### Inherited from

Pick.aria-busy

#### Defined in

node_modules/@types/react/index.d.ts:1578

___

### aria-checked

• `Optional` **aria-checked**: false \| true \| ``"true"`` \| ``"false"`` \| ``"mixed"``

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

**`see`** aria-pressed @see aria-selected.

#### Inherited from

Pick.aria-checked

#### Defined in

node_modules/@types/react/index.d.ts:1583

___

### aria-colcount

• `Optional` **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

**`see`** aria-colindex.

#### Inherited from

Pick.aria-colcount

#### Defined in

node_modules/@types/react/index.d.ts:1588

___

### aria-colindex

• `Optional` **aria-colindex**: `number`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

**`see`** aria-colcount @see aria-colspan.

#### Inherited from

Pick.aria-colindex

#### Defined in

node_modules/@types/react/index.d.ts:1593

___

### aria-colspan

• `Optional` **aria-colspan**: `number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

**`see`** aria-colindex @see aria-rowspan.

#### Inherited from

Pick.aria-colspan

#### Defined in

node_modules/@types/react/index.d.ts:1598

___

### aria-controls

• `Optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

**`see`** aria-owns.

#### Inherited from

Pick.aria-controls

#### Defined in

node_modules/@types/react/index.d.ts:1603

___

### aria-current

• `Optional` **aria-current**: false \| true \| ``"time"`` \| ``"true"`` \| ``"false"`` \| ``"step"`` \| ``"date"`` \| ``"page"`` \| ``"location"``

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

Pick.aria-current

#### Defined in

node_modules/@types/react/index.d.ts:1605

___

### aria-describedby

• `Optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

**`see`** aria-labelledby

#### Inherited from

Pick.aria-describedby

#### Defined in

node_modules/@types/react/index.d.ts:1610

___

### aria-details

• `Optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

**`see`** aria-describedby.

#### Inherited from

Pick.aria-details

#### Defined in

node_modules/@types/react/index.d.ts:1615

___

### aria-disabled

• `Optional` **aria-disabled**: `Booleanish`

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

**`see`** aria-hidden @see aria-readonly.

#### Inherited from

Pick.aria-disabled

#### Defined in

node_modules/@types/react/index.d.ts:1620

___

### aria-dropeffect

• `Optional` **aria-dropeffect**: ``"link"`` \| ``"none"`` \| ``"copy"`` \| ``"execute"`` \| ``"move"`` \| ``"popup"``

Indicates what functions can be performed when a dragged object is released on the drop target.

**`deprecated`** in ARIA 1.1

#### Inherited from

Pick.aria-dropeffect

#### Defined in

node_modules/@types/react/index.d.ts:1625

___

### aria-errormessage

• `Optional` **aria-errormessage**: `string`

Identifies the element that provides an error message for the object.

**`see`** aria-invalid @see aria-describedby.

#### Inherited from

Pick.aria-errormessage

#### Defined in

node_modules/@types/react/index.d.ts:1630

___

### aria-expanded

• `Optional` **aria-expanded**: `Booleanish`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

Pick.aria-expanded

#### Defined in

node_modules/@types/react/index.d.ts:1632

___

### aria-flowto

• `Optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

Pick.aria-flowto

#### Defined in

node_modules/@types/react/index.d.ts:1637

___

### aria-grabbed

• `Optional` **aria-grabbed**: `Booleanish`

Indicates an element's "grabbed" state in a drag-and-drop operation.

**`deprecated`** in ARIA 1.1

#### Inherited from

Pick.aria-grabbed

#### Defined in

node_modules/@types/react/index.d.ts:1642

___

### aria-haspopup

• `Optional` **aria-haspopup**: false \| true \| ``"dialog"`` \| ``"menu"`` \| ``"true"`` \| ``"false"`` \| ``"grid"`` \| ``"listbox"`` \| ``"tree"``

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

Pick.aria-haspopup

#### Defined in

node_modules/@types/react/index.d.ts:1644

___

### aria-hidden

• `Optional` **aria-hidden**: `Booleanish`

Indicates whether the element is exposed to an accessibility API.

**`see`** aria-disabled.

#### Inherited from

Pick.aria-hidden

#### Defined in

node_modules/@types/react/index.d.ts:1649

___

### aria-invalid

• `Optional` **aria-invalid**: false \| true \| ``"true"`` \| ``"false"`` \| ``"grammar"`` \| ``"spelling"``

Indicates the entered value does not conform to the format expected by the application.

**`see`** aria-errormessage.

#### Inherited from

Pick.aria-invalid

#### Defined in

node_modules/@types/react/index.d.ts:1654

___

### aria-keyshortcuts

• `Optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

Pick.aria-keyshortcuts

#### Defined in

node_modules/@types/react/index.d.ts:1656

___

### aria-label

• `Optional` **aria-label**: `string`

Defines a string value that labels the current element.

**`see`** aria-labelledby.

#### Inherited from

Pick.aria-label

#### Defined in

node_modules/@types/react/index.d.ts:1661

___

### aria-labelledby

• `Optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

**`see`** aria-describedby.

#### Inherited from

Pick.aria-labelledby

#### Defined in

node_modules/@types/react/index.d.ts:1666

___

### aria-level

• `Optional` **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

Pick.aria-level

#### Defined in

node_modules/@types/react/index.d.ts:1668

___

### aria-live

• `Optional` **aria-live**: ``"off"`` \| ``"assertive"`` \| ``"polite"``

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

Pick.aria-live

#### Defined in

node_modules/@types/react/index.d.ts:1670

___

### aria-modal

• `Optional` **aria-modal**: `Booleanish`

Indicates whether an element is modal when displayed.

#### Inherited from

Pick.aria-modal

#### Defined in

node_modules/@types/react/index.d.ts:1672

___

### aria-multiline

• `Optional` **aria-multiline**: `Booleanish`

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

Pick.aria-multiline

#### Defined in

node_modules/@types/react/index.d.ts:1674

___

### aria-multiselectable

• `Optional` **aria-multiselectable**: `Booleanish`

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

Pick.aria-multiselectable

#### Defined in

node_modules/@types/react/index.d.ts:1676

___

### aria-orientation

• `Optional` **aria-orientation**: ``"horizontal"`` \| ``"vertical"``

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

Pick.aria-orientation

#### Defined in

node_modules/@types/react/index.d.ts:1678

___

### aria-owns

• `Optional` **aria-owns**: `string`

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

**`see`** aria-controls.

#### Inherited from

Pick.aria-owns

#### Defined in

node_modules/@types/react/index.d.ts:1684

___

### aria-placeholder

• `Optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

Pick.aria-placeholder

#### Defined in

node_modules/@types/react/index.d.ts:1689

___

### aria-posinset

• `Optional` **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`see`** aria-setsize.

#### Inherited from

Pick.aria-posinset

#### Defined in

node_modules/@types/react/index.d.ts:1694

___

### aria-pressed

• `Optional` **aria-pressed**: false \| true \| ``"true"`` \| ``"false"`` \| ``"mixed"``

Indicates the current "pressed" state of toggle buttons.

**`see`** aria-checked @see aria-selected.

#### Inherited from

Pick.aria-pressed

#### Defined in

node_modules/@types/react/index.d.ts:1699

___

### aria-readonly

• `Optional` **aria-readonly**: `Booleanish`

Indicates that the element is not editable, but is otherwise operable.

**`see`** aria-disabled.

#### Inherited from

Pick.aria-readonly

#### Defined in

node_modules/@types/react/index.d.ts:1704

___

### aria-relevant

• `Optional` **aria-relevant**: ``"text"`` \| ``"all"`` \| ``"additions"`` \| ``"additions removals"`` \| ``"additions text"`` \| ``"removals"`` \| ``"removals additions"`` \| ``"removals text"`` \| ``"text additions"`` \| ``"text removals"``

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

**`see`** aria-atomic.

#### Inherited from

Pick.aria-relevant

#### Defined in

node_modules/@types/react/index.d.ts:1709

___

### aria-required

• `Optional` **aria-required**: `Booleanish`

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

Pick.aria-required

#### Defined in

node_modules/@types/react/index.d.ts:1711

___

### aria-roledescription

• `Optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

Pick.aria-roledescription

#### Defined in

node_modules/@types/react/index.d.ts:1713

___

### aria-rowcount

• `Optional` **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

**`see`** aria-rowindex.

#### Inherited from

Pick.aria-rowcount

#### Defined in

node_modules/@types/react/index.d.ts:1718

___

### aria-rowindex

• `Optional` **aria-rowindex**: `number`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

**`see`** aria-rowcount @see aria-rowspan.

#### Inherited from

Pick.aria-rowindex

#### Defined in

node_modules/@types/react/index.d.ts:1723

___

### aria-rowspan

• `Optional` **aria-rowspan**: `number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

**`see`** aria-rowindex @see aria-colspan.

#### Inherited from

Pick.aria-rowspan

#### Defined in

node_modules/@types/react/index.d.ts:1728

___

### aria-selected

• `Optional` **aria-selected**: `Booleanish`

Indicates the current "selected" state of various widgets.

**`see`** aria-checked @see aria-pressed.

#### Inherited from

Pick.aria-selected

#### Defined in

node_modules/@types/react/index.d.ts:1733

___

### aria-setsize

• `Optional` **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`see`** aria-posinset.

#### Inherited from

Pick.aria-setsize

#### Defined in

node_modules/@types/react/index.d.ts:1738

___

### aria-sort

• `Optional` **aria-sort**: ``"none"`` \| ``"ascending"`` \| ``"descending"`` \| ``"other"``

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

Pick.aria-sort

#### Defined in

node_modules/@types/react/index.d.ts:1740

___

### aria-valuemax

• `Optional` **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

Pick.aria-valuemax

#### Defined in

node_modules/@types/react/index.d.ts:1742

___

### aria-valuemin

• `Optional` **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

Pick.aria-valuemin

#### Defined in

node_modules/@types/react/index.d.ts:1744

___

### aria-valuenow

• `Optional` **aria-valuenow**: `number`

Defines the current value for a range widget.

**`see`** aria-valuetext.

#### Inherited from

Pick.aria-valuenow

#### Defined in

node_modules/@types/react/index.d.ts:1749

___

### aria-valuetext

• `Optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

Pick.aria-valuetext

#### Defined in

node_modules/@types/react/index.d.ts:1751

___

### autoCapitalize

• `Optional` **autoCapitalize**: `string`

#### Inherited from

Pick.autoCapitalize

#### Defined in

node_modules/@types/react/index.d.ts:1869

___

### autoCorrect

• `Optional` **autoCorrect**: `string`

#### Inherited from

Pick.autoCorrect

#### Defined in

node_modules/@types/react/index.d.ts:1870

___

### autoHide

• `Optional` **autoHide**: `boolean`

Hides user component

**`default`** false

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:65](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/User/User.tsx#L65)

___

### autoSave

• `Optional` **autoSave**: `string`

#### Inherited from

Pick.autoSave

#### Defined in

node_modules/@types/react/index.d.ts:1871

___

### children

• `Optional` **children**: `ReactNode`

The content of the component.

#### Inherited from

Pick.children

#### Defined in

node_modules/@mui/material/Paper/Paper.d.ts:15

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

Pick.className

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:55](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/User/User.tsx#L55)

___

### classes

• `Optional` **classes**: `Partial`<`CardClasses`\> & `Partial`<`Record`<`never`, `string`\>\>

Override or extend the styles applied to the component.

#### Inherited from

Pick.classes

#### Defined in

node_modules/@mui/material/Card/Card.d.ts:17

___

### color

• `Optional` **color**: `string`

#### Inherited from

Pick.color

#### Defined in

node_modules/@types/react/index.d.ts:1872

___

### connectUserButtonProps

• `Optional` **connectUserButtonProps**: `ConnectionButtonProps`

Props to spread to connection button

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:82](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/User/User.tsx#L82)

___

### contentEditable

• `Optional` **contentEditable**: false \| true \| ``"true"`` \| ``"false"`` \| ``"inherit"``

#### Inherited from

Pick.contentEditable

#### Defined in

node_modules/@types/react/index.d.ts:1837

___

### contextMenu

• `Optional` **contextMenu**: `string`

#### Inherited from

Pick.contextMenu

#### Defined in

node_modules/@types/react/index.d.ts:1838

___

### css

• `Optional` **css**: `InterpolationWithTheme`<`any`\>

#### Inherited from

Pick.css

#### Defined in

node_modules/@emotion/core/types/index.d.ts:84

___

### dangerouslySetInnerHTML

• `Optional` **dangerouslySetInnerHTML**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__html` | `string` |

#### Inherited from

Pick.dangerouslySetInnerHTML

#### Defined in

node_modules/@types/react/index.d.ts:1360

___

### datatype

• `Optional` **datatype**: `string`

#### Inherited from

Pick.datatype

#### Defined in

node_modules/@types/react/index.d.ts:1860

___

### defaultChecked

• `Optional` **defaultChecked**: `boolean`

#### Inherited from

Pick.defaultChecked

#### Defined in

node_modules/@types/react/index.d.ts:1829

___

### defaultValue

• `Optional` **defaultValue**: `string` \| `number` \| readonly `string`[]

#### Inherited from

Pick.defaultValue

#### Defined in

node_modules/@types/react/index.d.ts:1830

___

### dir

• `Optional` **dir**: `string`

#### Inherited from

Pick.dir

#### Defined in

node_modules/@types/react/index.d.ts:1839

___

### draggable

• `Optional` **draggable**: `Booleanish`

#### Inherited from

Pick.draggable

#### Defined in

node_modules/@types/react/index.d.ts:1840

___

### elevation

• `Optional` **elevation**: `number`

Shadow depth, corresponds to `dp` in the spec.
It accepts values between 0 and 24 inclusive.

**`default`** 1

#### Inherited from

Pick.elevation

#### Defined in

node_modules/@mui/material/Paper/Paper.d.ts:25

___

### followUserButtonProps

• `Optional` **followUserButtonProps**: [`FollowUserButtonProps`](FollowUserButtonProps)

Props to spread to follow button

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:76](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/User/User.tsx#L76)

___

### hidden

• `Optional` **hidden**: `boolean`

#### Inherited from

Pick.hidden

#### Defined in

node_modules/@types/react/index.d.ts:1841

___

### id

• `Optional` **id**: `number`

Id of user object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:50](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/User/User.tsx#L50)

___

### inlist

• `Optional` **inlist**: `any`

#### Inherited from

Pick.inlist

#### Defined in

node_modules/@types/react/index.d.ts:1861

___

### inputMode

• `Optional` **inputMode**: ``"text"`` \| ``"none"`` \| ``"search"`` \| ``"tel"`` \| ``"url"`` \| ``"email"`` \| ``"numeric"`` \| ``"decimal"``

Hints at the type of data that might be entered by the user while editing the element or its contents

**`see`** https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute

#### Inherited from

Pick.inputMode

#### Defined in

node_modules/@types/react/index.d.ts:1887

___

### is

• `Optional` **is**: `string`

Specify that a standard HTML element should behave like a defined custom built-in element

**`see`** https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is

#### Inherited from

Pick.is

#### Defined in

node_modules/@types/react/index.d.ts:1892

___

### itemID

• `Optional` **itemID**: `string`

#### Inherited from

Pick.itemID

#### Defined in

node_modules/@types/react/index.d.ts:1876

___

### itemProp

• `Optional` **itemProp**: `string`

#### Inherited from

Pick.itemProp

#### Defined in

node_modules/@types/react/index.d.ts:1873

___

### itemRef

• `Optional` **itemRef**: `string`

#### Inherited from

Pick.itemRef

#### Defined in

node_modules/@types/react/index.d.ts:1877

___

### itemScope

• `Optional` **itemScope**: `boolean`

#### Inherited from

Pick.itemScope

#### Defined in

node_modules/@types/react/index.d.ts:1874

___

### itemType

• `Optional` **itemType**: `string`

#### Inherited from

Pick.itemType

#### Defined in

node_modules/@types/react/index.d.ts:1875

___

### key

• `Optional` **key**: `ReactText`

#### Inherited from

Pick.key

#### Defined in

node_modules/@types/react/index.d.ts:137

___

### lang

• `Optional` **lang**: `string`

#### Inherited from

Pick.lang

#### Defined in

node_modules/@types/react/index.d.ts:1843

___

### onAbort

• `Optional` **onAbort**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onAbort

#### Defined in

node_modules/@types/react/index.d.ts:1415

___

### onAbortCapture

• `Optional` **onAbortCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onAbortCapture

#### Defined in

node_modules/@types/react/index.d.ts:1416

___

### onAnimationEnd

• `Optional` **onAnimationEnd**: (`event`: `AnimationEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `AnimationEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onAnimationEnd

#### Defined in

node_modules/@types/react/index.d.ts:1545

___

### onAnimationEndCapture

• `Optional` **onAnimationEndCapture**: (`event`: `AnimationEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `AnimationEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onAnimationEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1546

___

### onAnimationIteration

• `Optional` **onAnimationIteration**: (`event`: `AnimationEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `AnimationEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onAnimationIteration

#### Defined in

node_modules/@types/react/index.d.ts:1547

___

### onAnimationIterationCapture

• `Optional` **onAnimationIterationCapture**: (`event`: `AnimationEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `AnimationEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onAnimationIterationCapture

#### Defined in

node_modules/@types/react/index.d.ts:1548

___

### onAnimationStart

• `Optional` **onAnimationStart**: (`event`: `AnimationEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `AnimationEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onAnimationStart

#### Defined in

node_modules/@types/react/index.d.ts:1543

___

### onAnimationStartCapture

• `Optional` **onAnimationStartCapture**: (`event`: `AnimationEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `AnimationEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onAnimationStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1544

___

### onAuxClick

• `Optional` **onAuxClick**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onAuxClick

#### Defined in

node_modules/@types/react/index.d.ts:1461

___

### onAuxClickCapture

• `Optional` **onAuxClickCapture**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onAuxClickCapture

#### Defined in

node_modules/@types/react/index.d.ts:1462

___

### onBeforeInput

• `Optional` **onBeforeInput**: (`event`: `FormEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FormEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onBeforeInput

#### Defined in

node_modules/@types/react/index.d.ts:1389

___

### onBeforeInputCapture

• `Optional` **onBeforeInputCapture**: (`event`: `FormEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FormEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onBeforeInputCapture

#### Defined in

node_modules/@types/react/index.d.ts:1390

___

### onBlur

• `Optional` **onBlur**: (`event`: `FocusEvent`<`HTMLDivElement`, `Element`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`HTMLDivElement`, `Element`\> |

##### Returns

`void`

#### Inherited from

Pick.onBlur

#### Defined in

node_modules/@types/react/index.d.ts:1383

___

### onBlurCapture

• `Optional` **onBlurCapture**: (`event`: `FocusEvent`<`HTMLDivElement`, `Element`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`HTMLDivElement`, `Element`\> |

##### Returns

`void`

#### Inherited from

Pick.onBlurCapture

#### Defined in

node_modules/@types/react/index.d.ts:1384

___

### onCanPlay

• `Optional` **onCanPlay**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onCanPlay

#### Defined in

node_modules/@types/react/index.d.ts:1417

___

### onCanPlayCapture

• `Optional` **onCanPlayCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onCanPlayCapture

#### Defined in

node_modules/@types/react/index.d.ts:1418

___

### onCanPlayThrough

• `Optional` **onCanPlayThrough**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onCanPlayThrough

#### Defined in

node_modules/@types/react/index.d.ts:1419

___

### onCanPlayThroughCapture

• `Optional` **onCanPlayThroughCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onCanPlayThroughCapture

#### Defined in

node_modules/@types/react/index.d.ts:1420

___

### onChange

• `Optional` **onChange**: (`event`: `FormEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FormEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onChange

#### Defined in

node_modules/@types/react/index.d.ts:1387

___

### onChangeCapture

• `Optional` **onChangeCapture**: (`event`: `FormEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FormEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onChangeCapture

#### Defined in

node_modules/@types/react/index.d.ts:1388

___

### onClick

• `Optional` **onClick**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onClick

#### Defined in

node_modules/@types/react/index.d.ts:1463

___

### onClickCapture

• `Optional` **onClickCapture**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onClickCapture

#### Defined in

node_modules/@types/react/index.d.ts:1464

___

### onCompositionEnd

• `Optional` **onCompositionEnd**: (`event`: `CompositionEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `CompositionEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onCompositionEnd

#### Defined in

node_modules/@types/react/index.d.ts:1373

___

### onCompositionEndCapture

• `Optional` **onCompositionEndCapture**: (`event`: `CompositionEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `CompositionEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onCompositionEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1374

___

### onCompositionStart

• `Optional` **onCompositionStart**: (`event`: `CompositionEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `CompositionEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onCompositionStart

#### Defined in

node_modules/@types/react/index.d.ts:1375

___

### onCompositionStartCapture

• `Optional` **onCompositionStartCapture**: (`event`: `CompositionEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `CompositionEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onCompositionStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1376

___

### onCompositionUpdate

• `Optional` **onCompositionUpdate**: (`event`: `CompositionEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `CompositionEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onCompositionUpdate

#### Defined in

node_modules/@types/react/index.d.ts:1377

___

### onCompositionUpdateCapture

• `Optional` **onCompositionUpdateCapture**: (`event`: `CompositionEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `CompositionEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onCompositionUpdateCapture

#### Defined in

node_modules/@types/react/index.d.ts:1378

___

### onContextMenu

• `Optional` **onContextMenu**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onContextMenu

#### Defined in

node_modules/@types/react/index.d.ts:1465

___

### onContextMenuCapture

• `Optional` **onContextMenuCapture**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onContextMenuCapture

#### Defined in

node_modules/@types/react/index.d.ts:1466

___

### onCopy

• `Optional` **onCopy**: (`event`: `ClipboardEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ClipboardEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onCopy

#### Defined in

node_modules/@types/react/index.d.ts:1365

___

### onCopyCapture

• `Optional` **onCopyCapture**: (`event`: `ClipboardEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ClipboardEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onCopyCapture

#### Defined in

node_modules/@types/react/index.d.ts:1366

___

### onCut

• `Optional` **onCut**: (`event`: `ClipboardEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ClipboardEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onCut

#### Defined in

node_modules/@types/react/index.d.ts:1367

___

### onCutCapture

• `Optional` **onCutCapture**: (`event`: `ClipboardEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ClipboardEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onCutCapture

#### Defined in

node_modules/@types/react/index.d.ts:1368

___

### onDoubleClick

• `Optional` **onDoubleClick**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onDoubleClick

#### Defined in

node_modules/@types/react/index.d.ts:1467

___

### onDoubleClickCapture

• `Optional` **onDoubleClickCapture**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onDoubleClickCapture

#### Defined in

node_modules/@types/react/index.d.ts:1468

___

### onDrag

• `Optional` **onDrag**: (`event`: `DragEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onDrag

#### Defined in

node_modules/@types/react/index.d.ts:1469

___

### onDragCapture

• `Optional` **onDragCapture**: (`event`: `DragEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onDragCapture

#### Defined in

node_modules/@types/react/index.d.ts:1470

___

### onDragEnd

• `Optional` **onDragEnd**: (`event`: `DragEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onDragEnd

#### Defined in

node_modules/@types/react/index.d.ts:1471

___

### onDragEndCapture

• `Optional` **onDragEndCapture**: (`event`: `DragEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onDragEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1472

___

### onDragEnter

• `Optional` **onDragEnter**: (`event`: `DragEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onDragEnter

#### Defined in

node_modules/@types/react/index.d.ts:1473

___

### onDragEnterCapture

• `Optional` **onDragEnterCapture**: (`event`: `DragEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onDragEnterCapture

#### Defined in

node_modules/@types/react/index.d.ts:1474

___

### onDragExit

• `Optional` **onDragExit**: (`event`: `DragEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onDragExit

#### Defined in

node_modules/@types/react/index.d.ts:1475

___

### onDragExitCapture

• `Optional` **onDragExitCapture**: (`event`: `DragEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onDragExitCapture

#### Defined in

node_modules/@types/react/index.d.ts:1476

___

### onDragLeave

• `Optional` **onDragLeave**: (`event`: `DragEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onDragLeave

#### Defined in

node_modules/@types/react/index.d.ts:1477

___

### onDragLeaveCapture

• `Optional` **onDragLeaveCapture**: (`event`: `DragEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onDragLeaveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1478

___

### onDragOver

• `Optional` **onDragOver**: (`event`: `DragEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onDragOver

#### Defined in

node_modules/@types/react/index.d.ts:1479

___

### onDragOverCapture

• `Optional` **onDragOverCapture**: (`event`: `DragEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onDragOverCapture

#### Defined in

node_modules/@types/react/index.d.ts:1480

___

### onDragStart

• `Optional` **onDragStart**: (`event`: `DragEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onDragStart

#### Defined in

node_modules/@types/react/index.d.ts:1481

___

### onDragStartCapture

• `Optional` **onDragStartCapture**: (`event`: `DragEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onDragStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1482

___

### onDrop

• `Optional` **onDrop**: (`event`: `DragEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onDrop

#### Defined in

node_modules/@types/react/index.d.ts:1483

___

### onDropCapture

• `Optional` **onDropCapture**: (`event`: `DragEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onDropCapture

#### Defined in

node_modules/@types/react/index.d.ts:1484

___

### onDurationChange

• `Optional` **onDurationChange**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onDurationChange

#### Defined in

node_modules/@types/react/index.d.ts:1421

___

### onDurationChangeCapture

• `Optional` **onDurationChangeCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onDurationChangeCapture

#### Defined in

node_modules/@types/react/index.d.ts:1422

___

### onEmptied

• `Optional` **onEmptied**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onEmptied

#### Defined in

node_modules/@types/react/index.d.ts:1423

___

### onEmptiedCapture

• `Optional` **onEmptiedCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onEmptiedCapture

#### Defined in

node_modules/@types/react/index.d.ts:1424

___

### onEncrypted

• `Optional` **onEncrypted**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onEncrypted

#### Defined in

node_modules/@types/react/index.d.ts:1425

___

### onEncryptedCapture

• `Optional` **onEncryptedCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onEncryptedCapture

#### Defined in

node_modules/@types/react/index.d.ts:1426

___

### onEnded

• `Optional` **onEnded**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onEnded

#### Defined in

node_modules/@types/react/index.d.ts:1427

___

### onEndedCapture

• `Optional` **onEndedCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onEndedCapture

#### Defined in

node_modules/@types/react/index.d.ts:1428

___

### onError

• `Optional` **onError**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onError

#### Defined in

node_modules/@types/react/index.d.ts:1403

___

### onErrorCapture

• `Optional` **onErrorCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onErrorCapture

#### Defined in

node_modules/@types/react/index.d.ts:1404

___

### onFocus

• `Optional` **onFocus**: (`event`: `FocusEvent`<`HTMLDivElement`, `Element`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`HTMLDivElement`, `Element`\> |

##### Returns

`void`

#### Inherited from

Pick.onFocus

#### Defined in

node_modules/@types/react/index.d.ts:1381

___

### onFocusCapture

• `Optional` **onFocusCapture**: (`event`: `FocusEvent`<`HTMLDivElement`, `Element`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`HTMLDivElement`, `Element`\> |

##### Returns

`void`

#### Inherited from

Pick.onFocusCapture

#### Defined in

node_modules/@types/react/index.d.ts:1382

___

### onGotPointerCapture

• `Optional` **onGotPointerCapture**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onGotPointerCapture

#### Defined in

node_modules/@types/react/index.d.ts:1529

___

### onGotPointerCaptureCapture

• `Optional` **onGotPointerCaptureCapture**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onGotPointerCaptureCapture

#### Defined in

node_modules/@types/react/index.d.ts:1530

___

### onInput

• `Optional` **onInput**: (`event`: `FormEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FormEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onInput

#### Defined in

node_modules/@types/react/index.d.ts:1391

___

### onInputCapture

• `Optional` **onInputCapture**: (`event`: `FormEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FormEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onInputCapture

#### Defined in

node_modules/@types/react/index.d.ts:1392

___

### onInvalid

• `Optional` **onInvalid**: (`event`: `FormEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FormEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onInvalid

#### Defined in

node_modules/@types/react/index.d.ts:1397

___

### onInvalidCapture

• `Optional` **onInvalidCapture**: (`event`: `FormEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FormEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onInvalidCapture

#### Defined in

node_modules/@types/react/index.d.ts:1398

___

### onKeyDown

• `Optional` **onKeyDown**: (`event`: `KeyboardEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onKeyDown

#### Defined in

node_modules/@types/react/index.d.ts:1407

___

### onKeyDownCapture

• `Optional` **onKeyDownCapture**: (`event`: `KeyboardEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onKeyDownCapture

#### Defined in

node_modules/@types/react/index.d.ts:1408

___

### onKeyPress

• `Optional` **onKeyPress**: (`event`: `KeyboardEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onKeyPress

#### Defined in

node_modules/@types/react/index.d.ts:1409

___

### onKeyPressCapture

• `Optional` **onKeyPressCapture**: (`event`: `KeyboardEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onKeyPressCapture

#### Defined in

node_modules/@types/react/index.d.ts:1410

___

### onKeyUp

• `Optional` **onKeyUp**: (`event`: `KeyboardEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onKeyUp

#### Defined in

node_modules/@types/react/index.d.ts:1411

___

### onKeyUpCapture

• `Optional` **onKeyUpCapture**: (`event`: `KeyboardEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onKeyUpCapture

#### Defined in

node_modules/@types/react/index.d.ts:1412

___

### onLoad

• `Optional` **onLoad**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onLoad

#### Defined in

node_modules/@types/react/index.d.ts:1401

___

### onLoadCapture

• `Optional` **onLoadCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onLoadCapture

#### Defined in

node_modules/@types/react/index.d.ts:1402

___

### onLoadStart

• `Optional` **onLoadStart**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onLoadStart

#### Defined in

node_modules/@types/react/index.d.ts:1433

___

### onLoadStartCapture

• `Optional` **onLoadStartCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onLoadStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1434

___

### onLoadedData

• `Optional` **onLoadedData**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onLoadedData

#### Defined in

node_modules/@types/react/index.d.ts:1429

___

### onLoadedDataCapture

• `Optional` **onLoadedDataCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onLoadedDataCapture

#### Defined in

node_modules/@types/react/index.d.ts:1430

___

### onLoadedMetadata

• `Optional` **onLoadedMetadata**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onLoadedMetadata

#### Defined in

node_modules/@types/react/index.d.ts:1431

___

### onLoadedMetadataCapture

• `Optional` **onLoadedMetadataCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onLoadedMetadataCapture

#### Defined in

node_modules/@types/react/index.d.ts:1432

___

### onLostPointerCapture

• `Optional` **onLostPointerCapture**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onLostPointerCapture

#### Defined in

node_modules/@types/react/index.d.ts:1531

___

### onLostPointerCaptureCapture

• `Optional` **onLostPointerCaptureCapture**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onLostPointerCaptureCapture

#### Defined in

node_modules/@types/react/index.d.ts:1532

___

### onMouseDown

• `Optional` **onMouseDown**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onMouseDown

#### Defined in

node_modules/@types/react/index.d.ts:1485

___

### onMouseDownCapture

• `Optional` **onMouseDownCapture**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onMouseDownCapture

#### Defined in

node_modules/@types/react/index.d.ts:1486

___

### onMouseEnter

• `Optional` **onMouseEnter**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onMouseEnter

#### Defined in

node_modules/@types/react/index.d.ts:1487

___

### onMouseLeave

• `Optional` **onMouseLeave**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onMouseLeave

#### Defined in

node_modules/@types/react/index.d.ts:1488

___

### onMouseMove

• `Optional` **onMouseMove**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onMouseMove

#### Defined in

node_modules/@types/react/index.d.ts:1489

___

### onMouseMoveCapture

• `Optional` **onMouseMoveCapture**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onMouseMoveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1490

___

### onMouseOut

• `Optional` **onMouseOut**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onMouseOut

#### Defined in

node_modules/@types/react/index.d.ts:1491

___

### onMouseOutCapture

• `Optional` **onMouseOutCapture**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onMouseOutCapture

#### Defined in

node_modules/@types/react/index.d.ts:1492

___

### onMouseOver

• `Optional` **onMouseOver**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onMouseOver

#### Defined in

node_modules/@types/react/index.d.ts:1493

___

### onMouseOverCapture

• `Optional` **onMouseOverCapture**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onMouseOverCapture

#### Defined in

node_modules/@types/react/index.d.ts:1494

___

### onMouseUp

• `Optional` **onMouseUp**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onMouseUp

#### Defined in

node_modules/@types/react/index.d.ts:1495

___

### onMouseUpCapture

• `Optional` **onMouseUpCapture**: (`event`: `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onMouseUpCapture

#### Defined in

node_modules/@types/react/index.d.ts:1496

___

### onPaste

• `Optional` **onPaste**: (`event`: `ClipboardEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ClipboardEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPaste

#### Defined in

node_modules/@types/react/index.d.ts:1369

___

### onPasteCapture

• `Optional` **onPasteCapture**: (`event`: `ClipboardEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ClipboardEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPasteCapture

#### Defined in

node_modules/@types/react/index.d.ts:1370

___

### onPause

• `Optional` **onPause**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onPause

#### Defined in

node_modules/@types/react/index.d.ts:1435

___

### onPauseCapture

• `Optional` **onPauseCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onPauseCapture

#### Defined in

node_modules/@types/react/index.d.ts:1436

___

### onPlay

• `Optional` **onPlay**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onPlay

#### Defined in

node_modules/@types/react/index.d.ts:1437

___

### onPlayCapture

• `Optional` **onPlayCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onPlayCapture

#### Defined in

node_modules/@types/react/index.d.ts:1438

___

### onPlaying

• `Optional` **onPlaying**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onPlaying

#### Defined in

node_modules/@types/react/index.d.ts:1439

___

### onPlayingCapture

• `Optional` **onPlayingCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onPlayingCapture

#### Defined in

node_modules/@types/react/index.d.ts:1440

___

### onPointerCancel

• `Optional` **onPointerCancel**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPointerCancel

#### Defined in

node_modules/@types/react/index.d.ts:1519

___

### onPointerCancelCapture

• `Optional` **onPointerCancelCapture**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPointerCancelCapture

#### Defined in

node_modules/@types/react/index.d.ts:1520

___

### onPointerDown

• `Optional` **onPointerDown**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPointerDown

#### Defined in

node_modules/@types/react/index.d.ts:1513

___

### onPointerDownCapture

• `Optional` **onPointerDownCapture**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPointerDownCapture

#### Defined in

node_modules/@types/react/index.d.ts:1514

___

### onPointerEnter

• `Optional` **onPointerEnter**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPointerEnter

#### Defined in

node_modules/@types/react/index.d.ts:1521

___

### onPointerEnterCapture

• `Optional` **onPointerEnterCapture**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPointerEnterCapture

#### Defined in

node_modules/@types/react/index.d.ts:1522

___

### onPointerLeave

• `Optional` **onPointerLeave**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPointerLeave

#### Defined in

node_modules/@types/react/index.d.ts:1523

___

### onPointerLeaveCapture

• `Optional` **onPointerLeaveCapture**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPointerLeaveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1524

___

### onPointerMove

• `Optional` **onPointerMove**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPointerMove

#### Defined in

node_modules/@types/react/index.d.ts:1515

___

### onPointerMoveCapture

• `Optional` **onPointerMoveCapture**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPointerMoveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1516

___

### onPointerOut

• `Optional` **onPointerOut**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPointerOut

#### Defined in

node_modules/@types/react/index.d.ts:1527

___

### onPointerOutCapture

• `Optional` **onPointerOutCapture**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPointerOutCapture

#### Defined in

node_modules/@types/react/index.d.ts:1528

___

### onPointerOver

• `Optional` **onPointerOver**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPointerOver

#### Defined in

node_modules/@types/react/index.d.ts:1525

___

### onPointerOverCapture

• `Optional` **onPointerOverCapture**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPointerOverCapture

#### Defined in

node_modules/@types/react/index.d.ts:1526

___

### onPointerUp

• `Optional` **onPointerUp**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPointerUp

#### Defined in

node_modules/@types/react/index.d.ts:1517

___

### onPointerUpCapture

• `Optional` **onPointerUpCapture**: (`event`: `PointerEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onPointerUpCapture

#### Defined in

node_modules/@types/react/index.d.ts:1518

___

### onProgress

• `Optional` **onProgress**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onProgress

#### Defined in

node_modules/@types/react/index.d.ts:1441

___

### onProgressCapture

• `Optional` **onProgressCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onProgressCapture

#### Defined in

node_modules/@types/react/index.d.ts:1442

___

### onRateChange

• `Optional` **onRateChange**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onRateChange

#### Defined in

node_modules/@types/react/index.d.ts:1443

___

### onRateChangeCapture

• `Optional` **onRateChangeCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onRateChangeCapture

#### Defined in

node_modules/@types/react/index.d.ts:1444

___

### onReset

• `Optional` **onReset**: (`event`: `FormEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FormEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onReset

#### Defined in

node_modules/@types/react/index.d.ts:1393

___

### onResetCapture

• `Optional` **onResetCapture**: (`event`: `FormEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FormEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onResetCapture

#### Defined in

node_modules/@types/react/index.d.ts:1394

___

### onScroll

• `Optional` **onScroll**: (`event`: `UIEvent`<`HTMLDivElement`, `UIEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `UIEvent`<`HTMLDivElement`, `UIEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onScroll

#### Defined in

node_modules/@types/react/index.d.ts:1535

___

### onScrollCapture

• `Optional` **onScrollCapture**: (`event`: `UIEvent`<`HTMLDivElement`, `UIEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `UIEvent`<`HTMLDivElement`, `UIEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onScrollCapture

#### Defined in

node_modules/@types/react/index.d.ts:1536

___

### onSeeked

• `Optional` **onSeeked**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onSeeked

#### Defined in

node_modules/@types/react/index.d.ts:1445

___

### onSeekedCapture

• `Optional` **onSeekedCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onSeekedCapture

#### Defined in

node_modules/@types/react/index.d.ts:1446

___

### onSeeking

• `Optional` **onSeeking**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onSeeking

#### Defined in

node_modules/@types/react/index.d.ts:1447

___

### onSeekingCapture

• `Optional` **onSeekingCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onSeekingCapture

#### Defined in

node_modules/@types/react/index.d.ts:1448

___

### onSelect

• `Optional` **onSelect**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onSelect

#### Defined in

node_modules/@types/react/index.d.ts:1499

___

### onSelectCapture

• `Optional` **onSelectCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onSelectCapture

#### Defined in

node_modules/@types/react/index.d.ts:1500

___

### onStalled

• `Optional` **onStalled**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onStalled

#### Defined in

node_modules/@types/react/index.d.ts:1449

___

### onStalledCapture

• `Optional` **onStalledCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onStalledCapture

#### Defined in

node_modules/@types/react/index.d.ts:1450

___

### onSubmit

• `Optional` **onSubmit**: (`event`: `FormEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FormEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onSubmit

#### Defined in

node_modules/@types/react/index.d.ts:1395

___

### onSubmitCapture

• `Optional` **onSubmitCapture**: (`event`: `FormEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FormEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onSubmitCapture

#### Defined in

node_modules/@types/react/index.d.ts:1396

___

### onSuspend

• `Optional` **onSuspend**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onSuspend

#### Defined in

node_modules/@types/react/index.d.ts:1451

___

### onSuspendCapture

• `Optional` **onSuspendCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onSuspendCapture

#### Defined in

node_modules/@types/react/index.d.ts:1452

___

### onTimeUpdate

• `Optional` **onTimeUpdate**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onTimeUpdate

#### Defined in

node_modules/@types/react/index.d.ts:1453

___

### onTimeUpdateCapture

• `Optional` **onTimeUpdateCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onTimeUpdateCapture

#### Defined in

node_modules/@types/react/index.d.ts:1454

___

### onTouchCancel

• `Optional` **onTouchCancel**: (`event`: `TouchEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TouchEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onTouchCancel

#### Defined in

node_modules/@types/react/index.d.ts:1503

___

### onTouchCancelCapture

• `Optional` **onTouchCancelCapture**: (`event`: `TouchEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TouchEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onTouchCancelCapture

#### Defined in

node_modules/@types/react/index.d.ts:1504

___

### onTouchEnd

• `Optional` **onTouchEnd**: (`event`: `TouchEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TouchEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onTouchEnd

#### Defined in

node_modules/@types/react/index.d.ts:1505

___

### onTouchEndCapture

• `Optional` **onTouchEndCapture**: (`event`: `TouchEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TouchEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onTouchEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1506

___

### onTouchMove

• `Optional` **onTouchMove**: (`event`: `TouchEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TouchEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onTouchMove

#### Defined in

node_modules/@types/react/index.d.ts:1507

___

### onTouchMoveCapture

• `Optional` **onTouchMoveCapture**: (`event`: `TouchEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TouchEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onTouchMoveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1508

___

### onTouchStart

• `Optional` **onTouchStart**: (`event`: `TouchEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TouchEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onTouchStart

#### Defined in

node_modules/@types/react/index.d.ts:1509

___

### onTouchStartCapture

• `Optional` **onTouchStartCapture**: (`event`: `TouchEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TouchEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onTouchStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1510

___

### onTransitionEnd

• `Optional` **onTransitionEnd**: (`event`: `TransitionEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TransitionEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onTransitionEnd

#### Defined in

node_modules/@types/react/index.d.ts:1551

___

### onTransitionEndCapture

• `Optional` **onTransitionEndCapture**: (`event`: `TransitionEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TransitionEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onTransitionEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1552

___

### onVolumeChange

• `Optional` **onVolumeChange**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onVolumeChange

#### Defined in

node_modules/@types/react/index.d.ts:1455

___

### onVolumeChangeCapture

• `Optional` **onVolumeChangeCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onVolumeChangeCapture

#### Defined in

node_modules/@types/react/index.d.ts:1456

___

### onWaiting

• `Optional` **onWaiting**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onWaiting

#### Defined in

node_modules/@types/react/index.d.ts:1457

___

### onWaitingCapture

• `Optional` **onWaitingCapture**: (`event`: `SyntheticEvent`<`HTMLDivElement`, `Event`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `SyntheticEvent`<`HTMLDivElement`, `Event`\> |

##### Returns

`void`

#### Inherited from

Pick.onWaitingCapture

#### Defined in

node_modules/@types/react/index.d.ts:1458

___

### onWheel

• `Optional` **onWheel**: (`event`: `WheelEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `WheelEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onWheel

#### Defined in

node_modules/@types/react/index.d.ts:1539

___

### onWheelCapture

• `Optional` **onWheelCapture**: (`event`: `WheelEvent`<`HTMLDivElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `WheelEvent`<`HTMLDivElement`\> |

##### Returns

`void`

#### Inherited from

Pick.onWheelCapture

#### Defined in

node_modules/@types/react/index.d.ts:1540

___

### placeholder

• `Optional` **placeholder**: `string`

#### Inherited from

Pick.placeholder

#### Defined in

node_modules/@types/react/index.d.ts:1844

___

### prefix

• `Optional` **prefix**: `string`

#### Inherited from

Pick.prefix

#### Defined in

node_modules/@types/react/index.d.ts:1862

___

### property

• `Optional` **property**: `string`

#### Inherited from

Pick.property

#### Defined in

node_modules/@types/react/index.d.ts:1863

___

### radioGroup

• `Optional` **radioGroup**: `string`

#### Inherited from

Pick.radioGroup

#### Defined in

node_modules/@types/react/index.d.ts:1853

___

### raised

• `Optional` **raised**: `boolean`

If `true`, the card will use raised styling.

**`default`** false

#### Inherited from

Pick.raised

#### Defined in

node_modules/@mui/material/Card/Card.d.ts:22

___

### ref

• `Optional` **ref**: (`instance`: `HTMLDivElement`) => `void` \| `RefObject`<`HTMLDivElement`\>

#### Inherited from

Pick.ref

#### Defined in

node_modules/@types/react/index.d.ts:824

___

### resource

• `Optional` **resource**: `string`

#### Inherited from

Pick.resource

#### Defined in

node_modules/@types/react/index.d.ts:1864

___

### results

• `Optional` **results**: `number`

#### Inherited from

Pick.results

#### Defined in

node_modules/@types/react/index.d.ts:1878

___

### role

• `Optional` **role**: `AriaRole`

#### Inherited from

Pick.role

#### Defined in

node_modules/@types/react/index.d.ts:1856

___

### security

• `Optional` **security**: `string`

#### Inherited from

Pick.security

#### Defined in

node_modules/@types/react/index.d.ts:1879

___

### slot

• `Optional` **slot**: `string`

#### Inherited from

Pick.slot

#### Defined in

node_modules/@types/react/index.d.ts:1845

___

### spellCheck

• `Optional` **spellCheck**: `Booleanish`

#### Inherited from

Pick.spellCheck

#### Defined in

node_modules/@types/react/index.d.ts:1846

___

### square

• `Optional` **square**: `boolean`

If `true`, rounded corners are disabled.

**`default`** false

#### Inherited from

Pick.square

#### Defined in

node_modules/@mui/material/Paper/Paper.d.ts:30

___

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

Pick.style

#### Defined in

node_modules/@mui/material/OverridableComponent.d.ts:57

___

### suppressContentEditableWarning

• `Optional` **suppressContentEditableWarning**: `boolean`

#### Inherited from

Pick.suppressContentEditableWarning

#### Defined in

node_modules/@types/react/index.d.ts:1831

___

### suppressHydrationWarning

• `Optional` **suppressHydrationWarning**: `boolean`

#### Inherited from

Pick.suppressHydrationWarning

#### Defined in

node_modules/@types/react/index.d.ts:1832

___

### sx

• `Optional` **sx**: `SxProps`<`Theme`\>

The system prop that allows defining system overrides as well as additional CSS styles.

#### Inherited from

Pick.sx

#### Defined in

node_modules/@mui/material/Paper/Paper.d.ts:34

___

### tabIndex

• `Optional` **tabIndex**: `number`

#### Inherited from

Pick.tabIndex

#### Defined in

node_modules/@types/react/index.d.ts:1848

___

### title

• `Optional` **title**: `string`

#### Inherited from

Pick.title

#### Defined in

node_modules/@types/react/index.d.ts:1849

___

### translate

• `Optional` **translate**: ``"yes"`` \| ``"no"``

#### Inherited from

Pick.translate

#### Defined in

node_modules/@types/react/index.d.ts:1850

___

### typeof

• `Optional` **typeof**: `string`

#### Inherited from

Pick.typeof

#### Defined in

node_modules/@types/react/index.d.ts:1865

___

### unselectable

• `Optional` **unselectable**: ``"on"`` \| ``"off"``

#### Inherited from

Pick.unselectable

#### Defined in

node_modules/@types/react/index.d.ts:1880

___

### user

• `Optional` **user**: `SCUserType`

User Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:60](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/User/User.tsx#L60)

___

### variant

• `Optional` **variant**: ``"elevation"`` \| ``"outlined"``

The variant to use.

**`default`** 'elevation'

#### Inherited from

Pick.variant

#### Defined in

node_modules/@mui/material/Paper/Paper.d.ts:39

___

### vocab

• `Optional` **vocab**: `string`

#### Inherited from

Pick.vocab

#### Defined in

node_modules/@types/react/index.d.ts:1866

## Methods

### handleIgnoreAction

▸ `Optional` **handleIgnoreAction**(`u`): `void`

Handles actions ignore

**`default`** null

#### Parameters

| Name | Type |
| :------ | :------ |
| `u` | `any` |

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:70](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/User/User.tsx#L70)
