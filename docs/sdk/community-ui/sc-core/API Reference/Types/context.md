---
sidebar_label: Context
sidebar_position: 1
title: Context
---


## SCSettingsType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|portal|string|true|The portal|
|locale|[SCLocaleType](#sclocaletype)|false|i18n. Locale: it, en, etc...|
|session|[SCSessionType](#scsessiontype)|true|Object conf of session|
|theme|Record`<string, any>`|false|Object conf of theme|
|router|[SCRoutingContextType](#scroutingcontexttype)|false|Object conf of router|
|contextProviders|`((children) => JSX.Element)[]`|false|List of SC context providers to override the default value. Default context providers: [SCPreferencesProvider](../Providers/SCPreferencesProvider), [SCRoutingProvider](../Providers/SCRoutingProvider), [SCUserProvider](../Providers/SCUserProvider),[SCNotificationProvider](../Providers/SCNotificationProvider), [SCThemeProvider](../Providers/SCThemeProvider), [SCLocaleProvider](../Providers/SCLocaleProvider),[SCPreferencesProvider](../Providers/SCPreferencesProvider)|




## SCLocaleType 

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|default|string|false|Default locale|
|messages|Record`<string, any>`|false|Overrides default messages|





## SCUserContextType 

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|user|[SCUserType](../Types/user)|false|Authenticated User|
|session|[SCSessionType](#scsessiontype)|false|Current session|
|loading|boolean|false|Authentication loading status|
|error|any|false|Error that occurred during authentication|
|logout|`() => void`|false|Triggered when the a user logout is performed|
|setAvatar|`(avatar: string) => void`|false|Handle change avatar|
|setCover|`(cover: string) => void`|false|Handle change cover|
|managers|followed: [SCFollowedManagerType](#scfollowedmanagertype), connections: [SCConnectionsManagerType](#scconnectionsmanagertype),categories:[SCCategoriesManagerType](#sccategoriesmanagertype)|Managers: followed, connections, categories, etc...|



## SCFollowedManagerType 

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|followed|number[]|false|List of all user ids followed by the authenticated user|
|loading|number[]|false|List of all users in loading state|
|isLoading|(user: [SCUserType](../Types/user)) => boolean;|false|List of current users in loading state|
|follow|(user: [SCUserType](../Types/user)) => Promise`<any>`;|false|Handles user follow/unfollow|
|isFollowed|(user: [SCUserType](../Types/user)) => boolean;|false|Handles check if a user follow a user, caching data|
|refresh|`() => void`;|false|Refresh followed|
|emptyCache|`() => void`;|false|Empty cache to revalidate all followed|


## SCCategoriesManagerType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|categories|number[]|false|List of all categories ids followed by the authenticated user|
|loading|number[]|false|List of all categories in loading state|
|isLoading|(category: [SCCategoryType](../Types/category)) => boolean;|false|List of current categories in loading state|
|follow|(category: [SCCategoryType](../Types/category)) => Promise`<any>`;|false|Handles user follow/unfollow categpry|
|isFollowed|(category: [SCCategoryType](../Types/category)) => boolean;|false|Handles check if a user follow a category, caching data|
|refresh|`() => void`;|false|Refresh categories|
|emptyCache|`() => void`;|false|Empty cache to revalidate all categories|



## SCConnectionsManagerType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|connections|number[]|false|List of all users in relations(social graph) with authenticated user|
|loading|number[]|false|List of all users in loading state|
|isLoading|(user: [SCUserType](../Types/user)) => boolean;|false|List of current users in loading state|
|requestConnection|(user: [SCUserType](../Types/user)) => Promise`<any>`;|false|Handles request connection|
|acceptConnection|(user: [SCUserType](../Types/user)) => Promise`<any>`;|false|Handles accept connection|
|status|user: [SCUserType](../Types/user)) => `string`;|false|Checks user status|
|refresh|`() => void`;|false|Refresh connections status|
|emptyCache|`() => void`;|false|Empty cache to revalidate all categories|


## SCSessionType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|string|false|Session types: OAuth, JWT, Cookies|
|clientId|string|false|ClientID: only for OAuth. It will be passed to refreshTokenCallback|
|authToken|[SCAuthTokenType](#scauthtokentype)|false|Access Token|
|refreshTokenCallback|(currentSession) => Promise`<`[SCAuthTokenType](#scauthtokentype)`>`|false|Callback to refresh the token|



## SCAuthTokenType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|accessToken|string|false|Access token|
|refreshToken|string|false|Refresh token|
|tokenType|string|false|Token Type|
|expiresIn|number|false|Token expiration in|
|scope|Array `<`string`>`|false|Token scopes|

## SCContextType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|settings|[SCSettingsType](#scsettingstype)|false|Object conf of router|



## SCContextProviderType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|conf|[SCSettingsType](#scsettingstype)|false|Settings|
|contextProviders|`((children) => JSX.Element)[]`;|false|Providers|
|children|ReactNode|false|Nested children|


## SCPreferencesContextType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|preferences|`Record<string, any>`|false|List of all community preferences|
|features|string[]|false|List of all community enabled features|


## SCThemeContextType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|theme|`Record<string, any>`|false|Theme|
|setTheme|`(theme) => void`;|false|Changes theme|


## SCRoutingContextType 

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|routerLink|`React.ComponentClass<any>`|false|Component|
|routes|`Record<string, string>`|false|Routes|
|url|`(string, object) => string`;|false|Url|


## SCNotificationContextType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|wsInstance|any|false|ws instance|


## SCLocaleContextType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|locale|string|false|Locale: en, it, etc.|
|messages|`Record<any, any>`;|false|Locale messages|
|selectLocale|`(l: string) => void`;|false|Changes locale|


## SCAlertMessagesContextType 

### Properties

|Name|Type|Required|Description|
|[p: string]|any|false|options|