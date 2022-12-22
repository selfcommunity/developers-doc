---
sidebar_label: Get All Dynamic Preferences
sidebar_position: 1
title: Get All Dynamic Preferences
---

This endpoint retrieves all available dynamic preferences.

:::info

This operation does not require authentication

:::


## HTTP Request

`GET /api/v2/dynamic_preference/`

### Parameters

| Name     | In    | Type    | Required | Description                                         |
|----------|-------|---------|----------|-----------------------------------------------------|
| limit    | query | integer | false    | Number of results to return per page.               |
| offset   | query | integer | false    | The initial index from which to return the results. |
| search   | query | string  | false    | A search term.                                      |
| section  | query | string  | false    | Filter all preferences in a section                 |
| ordering | query | string  | false    | Which field to use when ordering the results.       |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/dynamic_preference/',
{
  method: 'GET',
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

</TabItem>
<TabItem value="bash">

```bash
# You can also use wget
curl -X GET /api/v2/dynamic_preference/ \
  -H 'Accept: application/json'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description | Schema |
|--------|---------------------------------------------------------|-------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline |

### Response Schema

Status Code **200**

| Name       | Type                                            | Required | Restrictions | Description         |
|------------|-------------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                         | false    | none         | Total results count |
| » next     | string(uri)¦null                                | false    | none         | Next page url       |
| » previous | string(uri)¦null                                | false    | none         | Previous page url   |
| » results  | [[DynamicPreference](/docs/apireference/v2/schemas/dynamic_preference)] | false    | none         | List of results     |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": "integer",
  "next": "string(uri)",
  "previous": "string(uri)",
  "results": [
    {
      "id": "integer",
      "section": "string",
      "name": "string",
      "value": "string"
    }
  ]
}
```

</TabItem>
</Tabs>
````


## Available Sections

### Addons

This section contains a collection of modules which can be added as an extra feature.

* **loyalty_points_collection**: This feature allows to enable loyalty points collection.
* **polls_enabled**: This feature allows to enable polls.
* **registration_wizard**: This feature enables registration wizard.
* **invite_code**: This feature enables invitation code.
* **closed_community**: This feature allows to make community closed.
* **incubator_enabled**: This feature enables incubator for categories.
* **incubator_subscribers**: Incubator subscribers number to reach.
* **incubator_suggestions**: Number of incubators suggested.
* **post_geolocation_enabled**: This feature enables geolocation for contributions.
* **cookie_policy_enabled**: This feature enables Cookie Policy.
* **tutorial_enabled**: This feature enables tutorial.
* **gdpr_signup_step_enabled**: This feature enables gdpr signup in steps.
* **share_post_on_facebook_enabled**: This feature allows users to share posts on Facebook.
* **share_post_on_twitter_enabled**: This feature allows users to share posts on Twitter.
* **share_post_on_linkedin_enabled**: This feature allows users to share posts on Linkedin.
* **video_upload_enabled**: This feature enables video upload via vimeo.
* **vimeo_token_upload**: This feature uploads vimeo token.
* **vimeo_token_delete**: This feature deletes vimeo token.
* **video_upload_only_for_staff**: This feature enables video upload only for staff members.
* **zapier_enabled**: This feature enables Zapier.
* **custom_code_head**: Custom code printed in the head section.
* **custom_code_body**: Custom code printed in the body section.

### Advertising

This section provides the settings for advertising management.

* **custom_adv_enabled**: Enables custom advertising.
* **custom_adv_only_for_anonymous_users_enabled**: Enables custom advertising only for anonymous users.
* **ads_enabled**: Enables Google advertising.
* **ads_verification_code**: Verification code for Google advertinsing.
* **ads_manual_enabled**: Enables Google advertising with manual positioning.
* **ads_only_for_anonymous_users_enabled**: Enables Google advertising only for anonymous users.
* **ads_below_topbar_code**: Code for showing ads below top bar.
* **ads_in_post_comments_code**: Code for showing ads in post comments.
* **ads_related_posts_column_code**:Code for showing ads in related posts.
* **ads_above_footer_bar_code**: Code for showing ads above footer bar.
* **ads_footer_sticky_code**: Code for showing ads in the footer.
* **ads_tools_column_code**: Code for showing ads in the tools column.
* **ads_in_stream_code**: Code for showing ads in stream.

### Analytics

This section the settings to manage Google Analytics.

* **google_analytics_stats_enabled**: Enables Google Analytics statistics.
* **google_analytics_stats_property_id**: Tracking ID obtained from Google Analytics.
* **google_analytics_stats_debug_enabled**: Enables the debug mode for Google Analytics.
* **hotjar_stats_enabled**: Enables Hotjar.
* **hotjar_stats_tracking_code**: Hotjar Tracking Code(every account will have its own unique Tracking Code to install.)

### Colors

This sections contains colors preferences for  application elements.

* **colorprimary**: Main color.
* **colorsecondary**: Secondary color.
* **colorback**: Main background color.
* **navbarback**: Navbar background color.
* **submenuback**: Submenu background color.

### Configurations

This section contains general configurations.

* **manual_categories_order_enabled**: Enables manual categories order.
* **follow_enabled**: Enables Follow.
* **people_search_enabled**: Enables people search.
* **people_card_with_cover_enabled**: Enables people card with cover.
* **post_only_staff_enabled**: Enables post only for staff members.
* **post_with_categories_only_staff_enabled**: Enables post with categories only for staff members.
* **content_availability**: Checks content availability.
* **users_approval_enabled**: Enables users approval.
* **home_stream_order_by**: Allows to choose the homepage ordering method.
* **explore_stream_enabled**: Enables explore feed stream.
* **explore_stream_order_by**: Allows to choose the explore feed ordering method.
* **stream_quality**: Enables stream quality.
* **discussion_type_enabled**: Enables discussion type.
* **post_type_enabled**: Enables post type.
* **status_type_enabled**: Enables status type.

### Covers

This section contains covers settings for homepage.

* **covers_visibility**: Allow to decide the number of images visible on the homepage.
* **cover_1_hp_320**: Image n.1 in 320 hp.
* **cover_1_hp_480**: Image n.1 in 480 hp.
* **cover_1_hp_767**: Image n.1 in 767 hp.
* **cover_1_hp_m1920**: Image n.1 in 1920 hp.
* **cover_2_hp_320**: Image n.2 in 320 hp.
* **cover_2_hp_480**: Image n.2 in 480 hp.
* **cover_2_hp_767**: Image n.2 in 767 hp.
* **cover_2_hp_m1920**: Image n.2 in 1920 hp.
* **cover_3_hp_320**: Image n.3 in 320 hp.
* **cover_3_hp_480**: Image n.3 in 480 hp.
* **cover_3_hp_767**:  Image n.3 in 767 hp.
* **cover_3_hp_m1920**: Image n.3 in 1920 hp.
* **cover_4_hp_320**: Image n.4 in 320 hp.
* **cover_4_hp_480**: Image n.4 in 480 hp.
* **cover_4_hp_767**: Image n.4 in 767 hp.
* **cover_4_hp_m1920**: Image n.4 in 1920 hp.

### Images

This section contains image preferences.

* **app_icon**: Image used for the app icon.
* **error_404**: Image for error 404.
* **error_503**: Image for error 503.
* **errorpages_image**: Image for error pages.
* **user_default_cover**: Default cover for user.

### Logo

This section contains logo preferences.

* **logo_dark**: Dark version of the logo.
* **logo_light**: Light version of the logo.
* **navbar_logo**: Appearance of the navbar logo.
* **navbar_logo_mobile**: Mobile view of the navbar logo .

### Loyalty 

This section contains all preferences for calibration of loyalty flow.

* **points_make_discussion**: Points earned for a new discussion.
* **points_make_post**: Points earned for a new post.
* **points_make_comment**: Points earned for a comment.
* **points_receive_vote**: Points earned for an upvote.
* **points_connection_or_follower**: Points earned for a new connection (if connections enabled) or for a new follower (if follow enabled).
* **points_social_share**: Points earned when starting a social share of a post or a discussion.
* **points_app_used**: Points earned for the first usage of the app (if available).
* **points_daily_visit**: Points earned for a daily visit.

### Providers 

This section contains providers settings.

* **fidelitycard_signin_enabled**: Enables fidelity card signin.
* **facebook_signin_enabled**: Enables Facebook signin.
* **facebook_app_key**: Facebook app key.
* **facebook_app_secret**: Secret key for Facebook.
* **twitter_signin_enabled**: Enables Twitter signin.
* **twitter_app_key**: Twitter app key.
* **twitter_app_secret**: Secret key for Twitter.
* **google_signin_enabled**: Enables Google signin.
* **google_app_key**: Google app key.
* **google_app_secret**: Secret key for Google.
* **google_project_id**: Google project ID.
* **google_project_number**: Google project number.
* **google_cloud_messaging_api_key**: Google Api Key for cloud messaging.
* **google_geocoding_api_key**: Google Api Key for geocoding.
* **linkedin_signin_enabled**: Enables Linkedin signin.
* **linkedin_app_key**: Linkedin app key.
* **linkedin_app_secret**: Secret key for Linkedin.
* **apns_push_notifications_cert**: Apns push notifications.
* **app_url_on_app_store**: App url on App Store.
* **app_url_on_google_play**: App url on Google Store.
* **app_schema_url**: App schema Url.
* **app_ios_membership_team_id**: Ios membership team ID
* **app_ios_bundle_id**: Ios bundle ID.

### Staff

This section allows to customize staff status section.

* **staff_badge_label**: Label for staff badge.
* **staff_badge_icon**: Icon for staff badge.

### Style

This section contains style settings for Community customization.

* **font_family**: List of available fonts.
* **custom_css**: Section where to insert custom css.

### Text

This section contains text preferences.

* **application_name**: Application name visible in the browser's tab.
* **application_slogan1**: Title given to the community.
* **application_slogan2**: Slogan for the community.
* **application_copyright**: Copyright for the community.
* **errorpages_title**: Main text used for error pages.
* **errorpages_subtitle**: Secondary text used for error pages.

### Webmaster

This section contains the settings for checking the status of indexing and to optimize the visibility of the website.

* **google_sitemap_code**: Google code for sitemap.
* **meta_robots**: Content of the meta tag robots.
* **meta_title_home_not_logged**: Content of the meta tag title for the Homepage (if not logged in).
* **meta_description**: Content of the meta tag description.