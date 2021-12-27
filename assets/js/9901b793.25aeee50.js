"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[5461],{9457:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return u},default:function(){return g}});var n=a(83117),s=a(80102),r=(a(67294),a(3905)),i=a(26396),l=a(58215),o=["components"],p={sidebar_label:"Delete a Single Message",sidebar_position:5,title:"Delete a Single Message"},d=void 0,m={unversionedId:"apireference/v2/privatemessage/delete_a_single_message",id:"apireference/v2/privatemessage/delete_a_single_message",isDocsHomePage:!1,title:"Delete a Single Message",description:"This endpoint deletes a message.",source:"@site/docs/apireference/v2/privatemessage/delete_a_single_message.md",sourceDirName:"apireference/v2/privatemessage",slug:"/apireference/v2/privatemessage/delete_a_single_message",permalink:"/docs/apireference/v2/privatemessage/delete_a_single_message",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/privatemessage/delete_a_single_message.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Delete a Single Message",sidebar_position:5,title:"Delete a Single Message"},sidebar:"apireferenceSidebar",previous:{title:"Send a Message",permalink:"/docs/apireference/v2/privatemessage/send_a_message"},next:{title:"Delete a Thread",permalink:"/docs/apireference/v2/privatemessage/delete_a_thread"}},u=[{value:"HTTP Request",id:"http-request",children:[{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[],level:2}],c={toc:u};function g(e){var t=e.components,a=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This endpoint deletes a message."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This operation requires authentication. The logged user must be the message sender."))),(0,r.kt)("h2",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DELETE /api/v2/pm/{id}/")),(0,r.kt)("h3",{id:"example-request"},"Example Request"),(0,r.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\nconst headers = {\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/pm/{id}/',\n{\n  method: 'DELETE',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X DELETE /api/v2/pm/{id}/ \\\n  -H 'Authorization: Bearer {access_token}'\n")))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"204"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.5"},"No Content")),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))))}g.isMDXComponent=!0}}]);