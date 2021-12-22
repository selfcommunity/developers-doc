"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[2682],{42656:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return c},default:function(){return u}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=a(26396),o=a(58215),s=["components"],p={sidebar_label:"Update a Specific Category",sidebar_position:5,title:"Update a Specific Category"},d=void 0,m={unversionedId:"apireference/v2/category/update_a_specific_category",id:"apireference/v2/category/update_a_specific_category",isDocsHomePage:!1,title:"Update a Specific Category",description:"This endpoint updates a specific category.",source:"@site/docs/apireference/v2/category/update_a_specific_category.md",sourceDirName:"apireference/v2/category",slug:"/apireference/v2/category/update_a_specific_category",permalink:"/docs/apireference/v2/category/update_a_specific_category",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/category/update_a_specific_category.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Update a Specific Category",sidebar_position:5,title:"Update a Specific Category"},sidebar:"apireferenceSidebar",previous:{title:"Get a Specific Category",permalink:"/docs/apireference/v2/category/get_a_specific_category"},next:{title:"Patch a Specific Category",permalink:"/docs/apireference/v2/category/patch_a_specific_category"}},c=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[{value:"Example Body Parameters",id:"example-body-parameters",children:[],level:4}],level:3},{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[{value:"Example responses",id:"example-responses",children:[],level:3}],level:2}],g={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This endpoint updates a specific category."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This operation requires authentication and admin role."))),(0,i.kt)("h2",{id:"http-request"},"HTTP Request"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT /api/v2/category/{id}/")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"In"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this Category.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"body"),(0,i.kt)("td",{parentName:"tr",align:null},"body"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../schemas/category"},"Category")),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"none")))),(0,i.kt)("h4",{id:"example-body-parameters"},"Example Body Parameters"),(0,i.kt)(l.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "order": 123,\n  "name": "string",\n  "name_synonyms": "string",\n  "slug": "string",\n  "slogan": "string",\n  "html_info": "string",\n  "seo_title": "string",\n  "seo_description": "string",\n  "auto_follow": "none",\n  "active": true,\n  "deleted": false,\n  "image_original": "string",\n  "emotional_image_original": "string",\n  "emotional_image_position": 123,\n  "lastmod_datetime": "2019-08-24T14:15:22Z",\n  "stream_order_by": "recent"\n}\n')))),(0,i.kt)("h3",{id:"example-request"},"Example Request"),(0,i.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const inputBody = \'{\n  "order": 123,\n  "name": "string",\n  "name_synonyms": "string",\n  "slug": "string",\n  "slogan": "string",\n  "html_info": "string",\n  "seo_title": "string",\n  "seo_description": "string",\n  "auto_follow": "none",\n  "active": true,\n  "deleted": false,\n  "image_original": "string",\n  "emotional_image_original": "string",\n  "emotional_image_position": 123,\n  "lastmod_datetime": "2019-08-24T14:15:22Z",\n  "stream_order_by": "recent"\n}\';\nconst headers = {\n  \'Content-Type\':\'application/x-www-form-urlencoded\',\n  \'Accept\':\'application/json\',\n  \'Authorization\': \'Bearer {access_token}\'\n};\n\nfetch(\'/api/v2/category/{id}/\',\n{\n  method: \'PUT\',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n'))),(0,i.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X PUT /api/v2/category/{id}/ \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -H 'Accept: application/json'\n  -H 'Authorization: Bearer {access_token}'\n  --DATA '{body}'\n")))),(0,i.kt)("h2",{id:"responses"},"Responses"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"200"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../schemas/category"},"Category"))))),(0,i.kt)("h3",{id:"example-responses"},"Example responses"),(0,i.kt)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"200",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 0,\n  "tags": [],\n  "order": 123,\n  "name": "string",\n  "name_synonyms": "string",\n  "slug": "string",\n  "slogan": "string",\n  "html_info": "string",\n  "seo_title": "string",\n  "seo_description": "string",\n  "auto_follow": "string",\n  "active": true,\n  "deleted": false,\n  "image_original": "string",\n  "image_bigger": "string",\n  "image_big": "string",\n  "image_medium": "string",\n  "image_small": "string",\n  "emotional_image_original": "string",\n  "emotional_image_position": 123,\n  "lastmod_datetime": "2019-08-24T14:15:22Z",\n  "stream_order_by": "string",\n}\n')))))}u.isMDXComponent=!0}}]);