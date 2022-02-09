
## Hierarchy

- `Pick`<`CardProps`, `Exclude`<keyof `CardProps`, ``"id"``\>\>

  ↳ **`CategoryProps`**

### Properties


- [autoHide](#autohide)
- [className](#classname)
- [id](#id)
- [popular](#popular)
- [category](#category)
- [followCategoryButtonProps](#followcategorybuttonprops)
- [p](#p)

## Properties

### autoHide

• `Optional` **autoHide**: `boolean`

Hides this component

**`default`** false

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:56](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Category/Category.tsx#L56)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

Pick.className

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:46](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Category/Category.tsx#L46)

___

### id

• `Optional` **id**: `number`

Id of category object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:41](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Category/Category.tsx#L41)

___

### popular

• `Optional` **popular**: `boolean`

Renders different section for popular categories list

**`default`** false

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:61](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Category/Category.tsx#L61)

___


### category

• `Optional` **category**: [SCCategoryType](../../sc-core/Api_Reference/Types/category#properties)

Category Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:51](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Category/Category.tsx#L51)

___


### followCategoryButtonProps

• `Optional` **followCategoryButtonProps**: [`FollowCategoryButtonProps`](FollowCategoryButtonProps)

Props to spread to follow button

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:66](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Category/Category.tsx#L66)

___

### p

• `Optional` **p**: `string`

Other props

**`default`** 'null'