"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[5779],{18210:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return o},default:function(){return u}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],d={sidebar_label:"Embed",sidebar_position:1,title:"Embed"},m=void 0,s={unversionedId:"apireference/v2/schemas/embed",id:"apireference/v2/schemas/embed",isDocsHomePage:!1,title:"Embed",description:"Properties",source:"@site/docs/apireference/v2/schemas/embed.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/embed",permalink:"/docs/apireference/v2/schemas/embed",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/embed.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Embed",sidebar_position:1,title:"Embed"},sidebar:"apireferenceSidebar",previous:{title:"Dynamic Preference",permalink:"/docs/apireference/v2/schemas/dynamic_preference"},next:{title:"Endpoint",permalink:"/docs/apireference/v2/schemas/endpoint"}},o=[{value:"Properties",id:"properties",children:[{value:"Enumerated Values",id:"enumerated-values",children:[],level:6}],level:4}],p={toc:o};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 0,\n  "embed_type": "string",\n  "embed_id": "string",\n  "url": "https://example.com",\n  "metadata": {}\n}\n\n')),(0,l.kt)("h4",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"embed_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of the embed, can be any string except ",(0,l.kt)("inlineCode",{parentName:"td"},"sc_vimeo"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sc_link")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"sc_shared_object")," that are used for embedded objects auomatically created by the community")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"embed_id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"External id for the embed object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Url for the resource, if any")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metadata"),(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Metadata associated to this embed. It mus be a valid json object. For embed_type ",(0,l.kt)("inlineCode",{parentName:"td"},"sc_vimeo")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"sc_link")," it contains metadata associated with the external resource. For embed_type ",(0,l.kt)("inlineCode",{parentName:"td"},"sc_shared_object")," it contains a field ",(0,l.kt)("inlineCode",{parentName:"td"},"type")," that is the type of the object (",(0,l.kt)("a",{parentName:"td",href:"../schemas/discussion"},"Discussion")," or ",(0,l.kt)("a",{parentName:"td",href:"../schemas/post"},"Post"),") and a field ",(0,l.kt)("inlineCode",{parentName:"td"},"id")," that contains the id of the object shared")))),(0,l.kt)("h6",{id:"enumerated-values"},"Enumerated Values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"embed_type"),(0,l.kt)("td",{parentName:"tr",align:null},"sc_vimeo"),(0,l.kt)("td",{parentName:"tr",align:null},"Embed of type video uploaded on vimeo platform (when enabled). This type is used internally by the community.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"embed_type"),(0,l.kt)("td",{parentName:"tr",align:null},"sc_link"),(0,l.kt)("td",{parentName:"tr",align:null},"Embed of type link. This type is used internally by the community.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"embed_type"),(0,l.kt)("td",{parentName:"tr",align:null},"sc_shared_object"),(0,l.kt)("td",{parentName:"tr",align:null},"Embed of type shared object. This type is used internally by the community when the user share a ",(0,l.kt)("a",{parentName:"td",href:"../schemas/discussion"},"Discussion")," or ",(0,l.kt)("a",{parentName:"td",href:"../schemas/post"},"Post"),".")))))}u.isMDXComponent=!0}}]);