"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[7946],{8107:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return u},default:function(){return k}});var n=a(3117),l=a(102),r=(a(7294),a(3905)),i=a(6396),s=a(8215),p=["components"],m={sidebar_label:"Get All Embeds",sidebar_position:1,title:"Get All Embeds"},d=void 0,o={unversionedId:"apireference/v2/embed/get_all_embeds",id:"apireference/v2/embed/get_all_embeds",isDocsHomePage:!1,title:"Get All Embeds",description:"This endpoint retrieves all embeds.",source:"@site/docs/apireference/v2/embed/get_all_embeds.md",sourceDirName:"apireference/v2/embed",slug:"/apireference/v2/embed/get_all_embeds",permalink:"/docs/apireference/v2/embed/get_all_embeds",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/embed/get_all_embeds.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get All Embeds",sidebar_position:1,title:"Get All Embeds"},sidebar:"apireferenceSidebar",previous:{title:"Get a Specific Dynamic Preference",permalink:"/docs/apireference/v2/dynamicpreference/get_a_specific_dynamic_preference"},next:{title:"Create an Embed",permalink:"/docs/apireference/v2/embed/create_an_embed"}},u=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[{value:"Response Schema",id:"response-schema",children:[],level:3},{value:"Example responses",id:"example-responses",children:[],level:3}],level:2}],c={toc:u};function k(e){var t=e.components,a=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This endpoint retrieves all embeds."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This operation requires authentication only if ",(0,r.kt)("inlineCode",{parentName:"p"},"content_availability")," community option is false"))),(0,r.kt)("h2",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/v2/embed/")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"In"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of results to return per page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"offset"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"The initial index from which to return the results.")))),(0,r.kt)("h3",{id:"example-request"},"Example Request"),(0,r.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/embed/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,r.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/embed/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n")))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Inline")))),(0,r.kt)("h3",{id:"response-schema"},"Response Schema"),(0,r.kt)("p",null,"Status Code ",(0,r.kt)("strong",{parentName:"p"},"200")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb count"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb next"),(0,r.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb previous"),(0,r.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb results"),(0,r.kt)("td",{parentName:"tr",align:null},"list(",(0,r.kt)("a",{parentName:"td",href:"../schemas/embed"},"Embed"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"none")))),(0,r.kt)("h3",{id:"example-responses"},"Example responses"),(0,r.kt)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"200",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 123,\n  "next": "http://api.example.org/accounts/?offset=400&limit=100",\n  "previous": "http://api.example.org/accounts/?offset=200&limit=100",\n  "results": [\n    {\n      "id": 0,\n      "embed_type": "string",\n      "embed_id": "string",\n      "url": "https://example.com",\n      "metadata": {}\n    }\n  ]\n}\n')))))}k.isMDXComponent=!0}}]);