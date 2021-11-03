"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4794],{7771:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return o}});var a=n(3117),l=n(102),r=(n(7294),n(3905)),i=["components"],d={sidebar_label:"User",sidebar_position:1,title:"User"},u=void 0,p={unversionedId:"apireference/v2/schemas/user",id:"apireference/v2/schemas/user",isDocsHomePage:!1,title:"User",description:"Properties",source:"@site/docs/apireference/v2/schemas/user.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/user",permalink:"/docs/apireference/v2/schemas/user",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/user.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"User",sidebar_position:1,title:"User"},sidebar:"apireferenceSidebar",previous:{title:"Tag",permalink:"/docs/apireference/v2/schemas/tag"},next:{title:"User Permission",permalink:"/docs/apireference/v2/schemas/user_permission"}},m=[{value:"Properties",id:"properties",children:[],level:4},{value:"Enumerated Values",id:"enumerated-values",children:[],level:4}],s={toc:m};function o(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 0,\n  "username": "string",\n  "real_name": "string",\n  "email": "user@example.com",\n  "email_isvalid": true,\n  "date_joined": "2019-08-24T14:15:22Z",\n  "bio": "string",\n  "location": "string",\n  "location_lat_lng": "string",\n  "position_lat_lng": "string",\n  "date_of_birth": "string",\n  "description": "string",\n  "gender": "Male",\n  "status": "a",\n  "website": "https://example.com",\n  "avatar": "string",\n  "cover": "string",\n  "ext_id": 3,\n  "tags": [],\n  "permission": {\n    "upload_video": false,\n    "create_contribute": true,\n    "create_poll": true,\n    "locate_post": false,\n    "create_post": true,\n    "create_post_with_category": true,\n    "follow_user": true,\n    "request_connection": true,\n    "accept_connection": true\n  },\n  "reputation": 0,\n  "connection_status": "string",\n  "followings_counter": 1,\n  "followers_counter": 0,\n  "posts_counter": 2,\n  "discussions_counter": 4,\n  "statuses_counter": 1,\n  "polls_counter": 6\n}\n\n')),(0,r.kt)("h4",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the user."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"The username of the user. Max 255 characters. Letters, numbers and -/_ characters."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"real_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Real name. Max 255 characters."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"string(email)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Email of the user."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email_isvalid"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Email is valid. Default: False."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date_joined"),(0,r.kt)("td",{parentName:"tr",align:null},"string(date-time)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Date joined to the community."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bio"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"User biography."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"location"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"User location. Max 100 characters."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"location_lat_lng"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},'Location in coordinates. It is populated automatically if "Google Geocoding" integration is active. Format: lat,lng.'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"position_lat_lng"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"User current position. Format: lat,lng."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date_of_birth"),(0,r.kt)("td",{parentName:"tr",align:null},"string(date)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of birth. Format: YYYY-MM-DD (ISO 8601)."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"User description. Max 50 characters."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gender"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"User gender. Values: Male, Female, Unspecified. Default: Unspecified."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"User status. Values: a (approved), b (blocked), d (deleted; soft deleted), u (unregistered; hard deleted). Default: a."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"website"),(0,r.kt)("td",{parentName:"tr",align:null},"string(uri)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"User website. Max 200 characters."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"avatar"),(0,r.kt)("td",{parentName:"tr",align:null},"string(binary)\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Avatar of the user."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cover"),(0,r.kt)("td",{parentName:"tr",align:null},"string(binary)\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Cover of the user."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ext_id"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"The external ID of the user. It is assigned only during signup."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tags"),(0,r.kt)("td",{parentName:"tr",align:null},"[Object]","\xa6[]"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"User's tag list. List of ",(0,r.kt)("a",{parentName:"td",href:"../schemas/tag"},"Tag"),"."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reputation"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"User reputation."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"permission"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../schemas/user_permission"},"UserPermission")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"List of user permission. Only for the resource ",(0,r.kt)("a",{parentName:"td",href:"../user/me/"},"/user/me/"),"."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection_status"),(0,r.kt)("td",{parentName:"tr",align:null},"string\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"The connection status between the request user and this user"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection_requests_sent_counter"),(0,r.kt)("td",{parentName:"tr",align:null},"integer\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of connection requests sent by the user"),(0,r.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,r.kt)("inlineCode",{parentName:"td"},"configurations.follow_enabled")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection_requests_received_counter"),(0,r.kt)("td",{parentName:"tr",align:null},"integer\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of connection requests received by the user"),(0,r.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,r.kt)("inlineCode",{parentName:"td"},"configurations.follow_enabled")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connections_counter"),(0,r.kt)("td",{parentName:"tr",align:null},"integer\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of connections of the user"),(0,r.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,r.kt)("inlineCode",{parentName:"td"},"configurations.follow_enabled")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"followings_counter"),(0,r.kt)("td",{parentName:"tr",align:null},"integer\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of followings of the user"),(0,r.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,r.kt)("inlineCode",{parentName:"td"},"configurations.follow_enabled")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"followers_counter"),(0,r.kt)("td",{parentName:"tr",align:null},"integer\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of followers of the user"),(0,r.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,r.kt)("inlineCode",{parentName:"td"},"configurations.follow_enabled")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"posts_counter"),(0,r.kt)("td",{parentName:"tr",align:null},"integer\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of posts created by the user"),(0,r.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,r.kt)("inlineCode",{parentName:"td"},"configurations.post_type_enabled")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discussions_counter"),(0,r.kt)("td",{parentName:"tr",align:null},"integer\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of discussions created by the user"),(0,r.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,r.kt)("inlineCode",{parentName:"td"},"configurations.post_type_enabled")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"statuses_counter"),(0,r.kt)("td",{parentName:"tr",align:null},"integer\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of statuses created by the user"),(0,r.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,r.kt)("inlineCode",{parentName:"td"},"configurations.status_type_enabled")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"polls_counter"),(0,r.kt)("td",{parentName:"tr",align:null},"integer\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of polls created by the user"),(0,r.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,r.kt)("inlineCode",{parentName:"td"},"addons.polls_enabled")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," or if the user has a staff role")))),(0,r.kt)("h4",{id:"enumerated-values"},"Enumerated Values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gender"),(0,r.kt)("td",{parentName:"tr",align:null},"Male"),(0,r.kt)("td",{parentName:"tr",align:null},"Male")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gender"),(0,r.kt)("td",{parentName:"tr",align:null},"Female"),(0,r.kt)("td",{parentName:"tr",align:null},"Female")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gender"),(0,r.kt)("td",{parentName:"tr",align:null},"Unspecified"),(0,r.kt)("td",{parentName:"tr",align:null},"Unspecified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"Approved")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"Blocked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"Deleted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"u"),(0,r.kt)("td",{parentName:"tr",align:null},"Unregistered (hard deleted)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection_status"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"No connection status between the request user and this user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection_status"),(0,r.kt)("td",{parentName:"tr",align:null},"followed"),(0,r.kt)("td",{parentName:"tr",align:null},"This user is followed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection_status"),(0,r.kt)("td",{parentName:"tr",align:null},"connected"),(0,r.kt)("td",{parentName:"tr",align:null},"This user is connected (friend)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection_status"),(0,r.kt)("td",{parentName:"tr",align:null},"sent_connection_request"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection (friendship) request sent to this user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection_status"),(0,r.kt)("td",{parentName:"tr",align:null},"received_connection_request"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection (friendship) request received from this user")))))}o.isMDXComponent=!0}}]);