"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[22729],{71871:function(t,e,n){n.d(e,{Z:function(){return r}});var a=n(67294);function r(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},76018:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(83117),r=n(67294),l=n(5730),i=n(69143),o=n(86010),s="tabItem_LplD";function u(t){var e,n,l,u=t.lazy,d=t.block,p=t.defaultValue,m=t.values,c=t.groupId,f=t.className,k=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:k.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),N=(0,i.lx)(g,(function(t,e){return t.value===e.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(e=null!=p?p:null==(n=k.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=k[0])?void 0:l.props.value;if(null!==h&&!g.some((function(t){return t.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,i.UB)(),b=v.tabGroupChoices,y=v.setTabGroupChoices,_=(0,r.useState)(h),w=_[0],T=_[1],x=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var O=b[c];null!=O&&O!==w&&g.some((function(t){return t.value===O}))&&T(O)}var j=function(t){var e=t.currentTarget,n=x.indexOf(e),a=g[n].value;a!==w&&(E(e),T(a),null!=c&&y(c,a))},P=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=x.indexOf(t.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(t.currentTarget)-1;n=x[r]||x[x.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},g.map((function(t){var e=t.value,n=t.label,l=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:function(t){return x.push(t)},onKeyDown:P,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":w===e})}),null!=n?n:e)}))),u?(0,r.cloneElement)(k.filter((function(t){return t.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==w})}))))}function d(t){var e=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(e)},t))}},17262:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=n(76018),o=n(71871),s=["components"],u={sidebar_label:"List User's Notification",sidebar_position:1,title:"List User's Notification"},d=void 0,p={unversionedId:"apireference/v2/notification/list_users_notification",id:"apireference/v2/notification/list_users_notification",title:"List User's Notification",description:"List all user notifications (in aggregate form) related to the community",source:"@site/docs/apireference/v2/notification/list_users_notification.md",sourceDirName:"apireference/v2/notification",slug:"/apireference/v2/notification/list_users_notification",permalink:"/docs/apireference/v2/notification/list_users_notification",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/notification/list_users_notification.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"List User's Notification",sidebar_position:1,title:"List User's Notification"},sidebar:"apireferenceSidebar",previous:{title:"Get Moderation Status for a Specific Contribution",permalink:"/docs/apireference/v2/moderation/get_moderation_status_for a specific_contribution"},next:{title:"Mark Read Notifications",permalink:"/docs/apireference/v2/notification/mark_read_notifications"}},m={},c=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3},{value:"Notification types:",id:"notification-types",level:4}],f={toc:c};function k(t){var e=t.components,u=(0,r.Z)(t,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,u,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"List all user notifications (in aggregate form) related to the community"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Notifications include all possible interactions with other users of the community, such as replies, comments to the same post, mentions, requests for friendship etc."))),(0,l.kt)("p",null,"Example previews:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Notification",src:n(79324).Z,width:"491",height:"289"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Notification",src:n(79215).Z,width:"489",height:"156"})),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"When calling this resource the notifications included in the list are automatically marked as read."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This operation requires authentication"))),(0,l.kt)("h2",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/v2/notification/")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"next_id"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Next page id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"previous_id"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Previous page id")))),(0,l.kt)("p",null,"*if both parameters are sent previous_id takes precedence"),(0,l.kt)("h3",{id:"example-request"},"Example Request"),(0,l.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization: Bearer <token>'\n};\n\nfetch('/api/v2/notification/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,l.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/notification/ \\\n  -H 'Accept: application/json'\n  -H \"Authorization: Bearer <token>\"\n")))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Inline")))),(0,l.kt)("h3",{id:"response-schema"},"Response Schema"),(0,l.kt)("p",null,"Status Code ",(0,l.kt)("strong",{parentName:"p"},"200")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"next"),(0,l.kt)("td",{parentName:"tr",align:null},"string\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Next page url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"previous"),(0,l.kt)("td",{parentName:"tr",align:null},"string\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Previous page url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"results"),(0,l.kt)("td",{parentName:"tr",align:null},"list(",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/notification"},"Notification"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"List of notification results")))),(0,l.kt)("h3",{id:"example-responses"},"Example responses"),(0,l.kt)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"200",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "next": "string",\n  "previous": "string",\n  "results": [\n    {\n        "is_new": false,\n        "sid": "1905252769000",\n        "post": {...},\n        "aggregated": [\n            {\n                "is_new": false,\n                "sid": 16456592493610000000054923,\n                "type": "comment",\n                "active_at": "2020-10-26T15:55:05.984561+01:00",\n                "comment": {...}\n\n            },\n            {\n                "is_new": false,\n                "sid": 18952592493610000000055990,\n                "type": "nested_comment",\n                "active_at": "2020-10-25T15:30:01.982831+01:00",\n                "comment": {...}\n            }\n        ]\n    },\n    {\n       "is_new": false,\n       "sid": "1435259289000",\n       "aggregated": [\n            {\n              "is_new": false,\n              "type": "connection_accept",\n              "sid": 13452592763610000000054490,\n              "active_at": "2020-10-23T12:20:03.982632+01:00",\n              "accept_user": {...}\n            }\n       ]\n    }\n  ]\n}\n')))),(0,l.kt)("h4",{id:"notification-types"},"Notification types:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Audience"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"comment*"),(0,l.kt)("td",{parentName:"tr",align:null},"comment of first level"),(0,l.kt)("td",{parentName:"tr",align:null},"participants of the discussion/post, including those who follow the post")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nested_comment*"),(0,l.kt)("td",{parentName:"tr",align:null},"comment of second level"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the top-level comment (unless the user has hidden it) and the authors of the siblings comments")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mention*"),(0,l.kt)("td",{parentName:"tr",align:null},"user mention"),(0,l.kt)("td",{parentName:"tr",align:null},"who is mentioned in the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vote_up*"),(0,l.kt)("td",{parentName:"tr",align:null},"vote up a post/discussion/status/comment"),(0,l.kt)("td",{parentName:"tr",align:null},"who received the voteup")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"follow*"),(0,l.kt)("td",{parentName:"tr",align:null},"follow a post/discussion/status"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the content (discussion/post/status)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"private_message*"),(0,l.kt)("td",{parentName:"tr",align:null},"private message"),(0,l.kt)("td",{parentName:"tr",align:null},"recipient of the message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deleted_for_advertising"),(0,l.kt)("td",{parentName:"tr",align:null},"deleted content by moderators with motivation the content is advertising"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deleted_for_aggressive"),(0,l.kt)("td",{parentName:"tr",align:null},"deleted content by moderators with motivation the content is aggressive"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deleted_for_vulgar"),(0,l.kt)("td",{parentName:"tr",align:null},"deleted content by moderators with motivation the content is vulgar"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deleted_for_poor"),(0,l.kt)("td",{parentName:"tr",align:null},"deleted content by moderators with motivation the content is poor"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deleted_for_offtopic"),(0,l.kt)("td",{parentName:"tr",align:null},"deleted content by moderators with motivation the content is offtopic"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"undeleted_for"),(0,l.kt)("td",{parentName:"tr",align:null},"the content has been rehabilitated by the moderators"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collapsed_for_advertising"),(0,l.kt)("td",{parentName:"tr",align:null},"only for comments, hidden content by moderator with motivation the content is advertising"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collapsed_for_aggressive"),(0,l.kt)("td",{parentName:"tr",align:null},"only for comments, hidden content by moderator with motivation the content is aggressive"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collapsed_for_vulgar"),(0,l.kt)("td",{parentName:"tr",align:null},"only for comments, hidden content by moderator with motivation the content is vulgar"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collapsed_for_poor"),(0,l.kt)("td",{parentName:"tr",align:null},"only for comments, hidden content by moderator with motivation the content is poor"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collapsed_for_offtopic"),(0,l.kt)("td",{parentName:"tr",align:null},"only for comments, hidden content by moderator with motivation the content is offtopic"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection_request"),(0,l.kt)("td",{parentName:"tr",align:null},"connect request"),(0,l.kt)("td",{parentName:"tr",align:null},"user who receives the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection_accept"),(0,l.kt)("td",{parentName:"tr",align:null},"connection accept"),(0,l.kt)("td",{parentName:"tr",align:null},"who had requested friendship")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user_follow"),(0,l.kt)("td",{parentName:"tr",align:null},"follow user"),(0,l.kt)("td",{parentName:"tr",align:null},"user followed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kindly_notice_advertising"),(0,l.kt)("td",{parentName:"tr",align:null},"content author notified for advertising content (via moderation)"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kindly_notice_aggressive"),(0,l.kt)("td",{parentName:"tr",align:null},"content author notified for advertising content (via moderation)"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kindly_notice_vulgar"),(0,l.kt)("td",{parentName:"tr",align:null},"content author notified for advertising content (via moderation)"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kindly_notice_poor"),(0,l.kt)("td",{parentName:"tr",align:null},"content author notified for advertising content (via moderation)"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kindly_notice_offtopic"),(0,l.kt)("td",{parentName:"tr",align:null},"content author notified for advertising content (via moderation)"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the contribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kindly_notice_flag"),(0,l.kt)("td",{parentName:"tr",align:null},"flag author notified for bad flagging (via moderation)"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the flag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blocked_user"),(0,l.kt)("td",{parentName:"tr",align:null},"user blocked"),(0,l.kt)("td",{parentName:"tr",align:null},"blocked user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unblocked_user"),(0,l.kt)("td",{parentName:"tr",align:null},"user unblocked"),(0,l.kt)("td",{parentName:"tr",align:null},"unblocked user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"custom_notification"),(0,l.kt)("td",{parentName:"tr",align:null},"custom notification"),(0,l.kt)("td",{parentName:"tr",align:null},"user followers/connections")))),(0,l.kt)("p",null,"*notifications of this type, if chronologically consecutive, can be aggregated"))}k.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(n),c=r,f=m["".concat(s,".").concat(c)]||m[c]||p[c]||l;return n?a.createElement(f,i(i({ref:e},d),{},{components:n})):a.createElement(f,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79324:function(t,e,n){e.Z=n.p+"assets/images/notification_aggregate_1-ccfe5e99ac1fe432fd882c3fa17e2a8c.png"},79215:function(t,e,n){e.Z=n.p+"assets/images/notification_aggregate_2-f4ac10556024a3d5aed0faa0203ae07d.png"}}]);