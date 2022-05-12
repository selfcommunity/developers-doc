"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[44392],{71871:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},76018:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(83117),r=a(67294),l=a(5730),i=a(69143),o=a(86010),s="tabItem_LplD";function p(e){var t,a,l,p=e.lazy,m=e.block,u=e.defaultValue,c=e.values,k=e.groupId,d=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=c?c:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),_=(0,i.lx)(N,(function(e,t){return e.value===t.value}));if(_.length>0)throw new Error('Docusaurus error: Duplicate values "'+_.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===u?u:null!=(t=null!=u?u:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==f&&!N.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),b=h.tabGroupChoices,v=h.setTabGroupChoices,y=(0,r.useState)(f),w=y[0],T=y[1],E=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var I=b[k];null!=I&&I!==w&&N.some((function(e){return e.value===I}))&&T(I)}var C=function(e){var t=e.currentTarget,a=E.indexOf(t),n=N[a].value;n!==w&&(x(t),T(n),null!=k&&v(k,n))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;a=E[r]||E[E.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},d)},N.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},13873:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return k}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=a(76018),o=a(71871),s=["components"],p={sidebar_label:"Get All Dynamic Preferences",sidebar_position:1,title:"Get All Dynamic Preferences"},m=void 0,u={unversionedId:"apireference/v2/dynamicpreference/get_all_dynamic_preferences",id:"apireference/v2/dynamicpreference/get_all_dynamic_preferences",title:"Get All Dynamic Preferences",description:"This endpoint retrieves all available dynamic preferences.",source:"@site/docs/apireference/v2/dynamicpreference/get_all_dynamic_preferences.md",sourceDirName:"apireference/v2/dynamicpreference",slug:"/apireference/v2/dynamicpreference/get_all_dynamic_preferences",permalink:"/docs/apireference/v2/dynamicpreference/get_all_dynamic_preferences",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/dynamicpreference/get_all_dynamic_preferences.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get All Dynamic Preferences",sidebar_position:1,title:"Get All Dynamic Preferences"},sidebar:"apireferenceSidebar",previous:{title:"Get Hide Status for a Specific Discussion",permalink:"/docs/apireference/v2/discussion/get_hide_status_for_a_specific_discussion"},next:{title:"Search Dynamic Preferences",permalink:"/docs/apireference/v2/dynamicpreference/search_dynamic_preferences"}},c={},k=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3},{value:"Available Sections",id:"available-sections",level:2},{value:"Addons",id:"addons",level:3},{value:"Advertising",id:"advertising",level:3},{value:"Analytics",id:"analytics",level:3},{value:"Colors",id:"colors",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Covers",id:"covers",level:3},{value:"Images",id:"images",level:3},{value:"Logo",id:"logo",level:3},{value:"Loyalty",id:"loyalty",level:3},{value:"Providers",id:"providers",level:3},{value:"Staff",id:"staff",level:3},{value:"Style",id:"style",level:3},{value:"Text",id:"text",level:3},{value:"Webmaster",id:"webmaster",level:3}],d={toc:k};function g(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This endpoint retrieves all available dynamic preferences."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This operation does not require authentication"))),(0,l.kt)("h2",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/v2/dynamic_preference/")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of results to return per page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial index from which to return the results.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"search"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"A search term.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"section"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Filter all preferences in a section")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ordering"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Which field to use when ordering the results.")))),(0,l.kt)("h3",{id:"example-request"},"Example Request"),(0,l.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json'\n};\n\nfetch('/api/v2/dynamic_preference/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,l.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/dynamic_preference/ \\\n  -H 'Accept: application/json'\n")))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Inline")))),(0,l.kt)("h3",{id:"response-schema"},"Response Schema"),(0,l.kt)("p",null,"Status Code ",(0,l.kt)("strong",{parentName:"p"},"200")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb count"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Total results count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb next"),(0,l.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Next page url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb previous"),(0,l.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Previous page url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb results"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/dynamic_preference"},"DynamicPreference"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"List of results")))),(0,l.kt)("h3",{id:"example-responses"},"Example responses"),(0,l.kt)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"200",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 123,\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n    {\n      "id": 0,\n      "section": "loyalty",\n      "name": "points_make_post",\n      "value": "2"\n    }\n  ]\n}\n')))),(0,l.kt)("h2",{id:"available-sections"},"Available Sections"),(0,l.kt)("h3",{id:"addons"},"Addons"),(0,l.kt)("p",null,"This section contains a collection of modules which can be added as an extra feature."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"loyalty_points_collection"),": This feature allows to enable loyalty points collection."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"polls_enabled"),": This feature allows to enable polls."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"registration_wizard"),": This feature enables registration wizard."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"invite_code"),": This feature enables invitation code."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"closed_community"),": This feature allows to make community closed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"incubator_enabled"),": This feature enables incubator for categories."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"incubator_subscribers"),": Incubator subscribers number to reach."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"incubator_suggestions"),": Number of incubators suggested."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"post_geolocation_enabled"),": This feature enables geolocation for contributions."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cookie_policy_enabled"),": This feature enables Cookie Policy."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tutorial_enabled"),": This feature enables tutorial."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"gdpr_signup_step_enabled"),": This feature enables gdpr signup in steps."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"share_post_on_facebook_enabled"),": This feature allows users to share posts on Facebook."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"share_post_on_twitter_enabled"),": This feature allows users to share posts on Twitter."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"share_post_on_linkedin_enabled"),": This feature allows users to share posts on Linkedin."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"video_upload_enabled"),": This feature enables video upload via vimeo."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"vimeo_token_upload"),": This feature uploads vimeo token."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"vimeo_token_delete"),": This feature deletes vimeo token."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"video_upload_only_for_staff"),": This feature enables video upload only for staff members."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"zapier_enabled"),": This feature enables Zapier."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"custom_code_head"),": Custom code printed in the head section."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"custom_code_body"),": Custom code printed in the body section.")),(0,l.kt)("h3",{id:"advertising"},"Advertising"),(0,l.kt)("p",null,"This section provides the settings for advertising management."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"custom_adv_enabled"),": Enables custom advertising."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"custom_adv_only_for_anonymous_users_enabled"),": Enables custom advertising only for anonymous users."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ads_enabled"),": Enables Google advertising."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ads_verification_code"),": Verification code for Google advertinsing."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ads_manual_enabled"),": Enables Google advertising with manual positioning."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ads_only_for_anonymous_users_enabled"),": Enables Google advertising only for anonymous users."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ads_below_topbar_code"),": Code for showing ads below top bar."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ads_in_post_comments_code"),": Code for showing ads in post comments."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ads_related_posts_column_code"),":Code for showing ads in related posts."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ads_above_footer_bar_code"),": Code for showing ads above footer bar."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ads_footer_sticky_code"),": Code for showing ads in the footer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ads_tools_column_code"),": Code for showing ads in the tools column."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ads_in_stream_code"),": Code for showing ads in stream.")),(0,l.kt)("h3",{id:"analytics"},"Analytics"),(0,l.kt)("p",null,"This section the settings to manage Google Analytics."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"google_analytics_stats_enabled"),": Enables Google Analytics statistics."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"google_analytics_stats_property_id"),": Tracking ID obtained from Google Analytics."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"google_analytics_stats_debug_enabled"),": Enables the debug mode for Google Analytics."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hotjar_stats_enabled"),": Enables Hotjar."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hotjar_stats_tracking_code"),": Hotjar Tracking Code(every account will have its own unique Tracking Code to install.)")),(0,l.kt)("h3",{id:"colors"},"Colors"),(0,l.kt)("p",null,"This sections contains colors preferences for  application elements."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"colorprimary"),": Main color."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"colorsecondary"),": Secondary color."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"colorback"),": Main background color."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"navbarback"),": Navbar background color."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"submenuback"),": Submenu background color.")),(0,l.kt)("h3",{id:"configurations"},"Configurations"),(0,l.kt)("p",null,"This section contains general configurations."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"manual_categories_order_enabled"),": Enables manual categories order."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"follow_enabled"),": Enables Follow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"people_search_enabled"),": Enables people search."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"people_card_with_cover_enabled"),": Enables people card with cover."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"post_only_staff_enabled"),": Enables post only for staff members."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"post_with_categories_only_staff_enabled"),": Enables post with categories only for staff members."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"content_availability"),": Checks content availability."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"users_approval_enabled"),": Enables users approval."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"home_stream_order_by"),": Allows to choose the homepage ordering method."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"explore_stream_enabled"),": Enables explore feed stream."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"explore_stream_order_by"),": Allows to choose the explore feed ordering method."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"stream_quality"),": Enables stream quality."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"discussion_type_enabled"),": Enables discussion type."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"post_type_enabled"),": Enables post type."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"status_type_enabled"),": Enables status type.")),(0,l.kt)("h3",{id:"covers"},"Covers"),(0,l.kt)("p",null,"This section contains covers settings for homepage."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"covers_visibility"),": Allow to decide the number of images visible on the homepage."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cover_1_hp_320"),": Image n.1 in 320 hp."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cover_1_hp_480"),": Image n.1 in 480 hp."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cover_1_hp_767"),": Image n.1 in 767 hp."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cover_1_hp_m1920"),": Image n.1 in 1920 hp."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cover_2_hp_320"),": Image n.2 in 320 hp."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cover_2_hp_480"),": Image n.2 in 480 hp."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cover_2_hp_767"),": Image n.2 in 767 hp."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cover_2_hp_m1920"),": Image n.2 in 1920 hp."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cover_3_hp_320"),": Image n.3 in 320 hp."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cover_3_hp_480"),": Image n.3 in 480 hp."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cover_3_hp_767"),":  Image n.3 in 767 hp."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cover_3_hp_m1920"),": Image n.3 in 1920 hp."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cover_4_hp_320"),": Image n.4 in 320 hp."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cover_4_hp_480"),": Image n.4 in 480 hp."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cover_4_hp_767"),": Image n.4 in 767 hp."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cover_4_hp_m1920"),": Image n.4 in 1920 hp.")),(0,l.kt)("h3",{id:"images"},"Images"),(0,l.kt)("p",null,"This section contains image preferences."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"app_icon"),": Image used for the app icon."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"error_404"),": Image for error 404."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"error_503"),": Image for error 503."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"errorpages_image"),": Image for error pages."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"user_default_cover"),": Default cover for user.")),(0,l.kt)("h3",{id:"logo"},"Logo"),(0,l.kt)("p",null,"This section contains logo preferences."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"logo_dark"),": Dark version of the logo."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"logo_light"),": Light version of the logo."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"navbar_logo"),": Appearance of the navbar logo."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"navbar_logo_mobile"),": Mobile view of the navbar logo .")),(0,l.kt)("h3",{id:"loyalty"},"Loyalty"),(0,l.kt)("p",null,"This section contains all preferences for calibration of loyalty flow."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points_make_discussion"),": Points earned for a new discussion."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points_make_post"),": Points earned for a new post."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points_make_comment"),": Points earned for a comment."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points_receive_vote"),": Points earned for an upvote."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points_connection_or_follower"),": Points earned for a new connection (if connections enabled) or for a new follower (if follow enabled)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points_social_share"),": Points earned when starting a social share of a post or a discussion."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points_app_used"),": Points earned for the first usage of the app (if available)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points_daily_visit"),": Points earned for a daily visit.")),(0,l.kt)("h3",{id:"providers"},"Providers"),(0,l.kt)("p",null,"This section contains providers settings."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fidelitycard_signin_enabled"),": Enables fidelity card signin."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"facebook_signin_enabled"),": Enables Facebook signin."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"facebook_app_key"),": Facebook app key."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"facebook_app_secret"),": Secret key for Facebook."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"twitter_signin_enabled"),": Enables Twitter signin."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"twitter_app_key"),": Twitter app key."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"twitter_app_secret"),": Secret key for Twitter."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"google_signin_enabled"),": Enables Google signin."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"google_app_key"),": Google app key."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"google_app_secret"),": Secret key for Google."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"google_project_id"),": Google project ID."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"google_project_number"),": Google project number."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"google_cloud_messaging_api_key"),": Google Api Key for cloud messaging."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"google_geocoding_api_key"),": Google Api Key for geocoding."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"linkedin_signin_enabled"),": Enables Linkedin signin."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"linkedin_app_key"),": Linkedin app key."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"linkedin_app_secret"),": Secret key for Linkedin."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"apns_push_notifications_cert"),": Apns push notifications."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"app_url_on_app_store"),": App url on App Store."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"app_url_on_google_play"),": App url on Google Store."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"app_schema_url"),": App schema Url."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"app_ios_membership_team_id"),": Ios membership team ID"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"app_ios_bundle_id"),": Ios bundle ID.")),(0,l.kt)("h3",{id:"staff"},"Staff"),(0,l.kt)("p",null,"This section allows to customize staff status section."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"staff_badge_label"),": Label for staff badge."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"staff_badge_icon"),": Icon for staff badge.")),(0,l.kt)("h3",{id:"style"},"Style"),(0,l.kt)("p",null,"This section contains style settings for Community customization."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"font_family"),": List of available fonts."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"custom_css"),": Section where to insert custom css.")),(0,l.kt)("h3",{id:"text"},"Text"),(0,l.kt)("p",null,"This section contains text preferences."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"application_name"),": Application name visible in the browser's tab."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"application_slogan1"),": Title given to the community."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"application_slogan2"),": Slogan for the community."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"application_copyright"),": Copyright for the community."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"errorpages_title"),": Main text used for error pages."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"errorpages_subtitle"),": Secondary text used for error pages.")),(0,l.kt)("h3",{id:"webmaster"},"Webmaster"),(0,l.kt)("p",null,"This section contains the settings for checking the status of indexing and to optimize the visibility of the website."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"google_sitemap_code"),": Google code for sitemap."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"meta_robots"),": Content of the meta tag robots."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"meta_title_home_not_logged"),": Content of the meta tag title for the Homepage (if not logged in)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"meta_description"),": Content of the meta tag description.")))}g.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,d=c["".concat(s,".").concat(k)]||c[k]||u[k]||l;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);