"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[48610],{37542:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(67294),r=a(86010),n=a(44286),s=a(88746);const i="sidebar_a9qW",m="sidebarItemTitle_uKok",o="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",g="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD";var u=a(11614);function p(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(i,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))))))}function h(e){const{sidebar:t,toc:a,children:s,...i}=e,m=t&&t.items.length>0;return l.createElement(n.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},87606:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),r=a(11614),n=a(61428);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},s&&l.createElement(n.Z,{permalink:s,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},86100:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(67294),r=a(86010),n=a(11614),s=a(88746),i=a(51402),m=a(87139),o=a(79861),c=a(26815),g=a(3043);const d="blogPostTitle_rzP5",u="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j";var h=a(41921);const E="image_o0gy";function b(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:s,email:i}=t,m=n||i&&`mailto:${i}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement("span",{className:"avatar__photo-link avatar__photo"},l.createElement(b,{href:m},l.createElement("img",{className:E,src:s,alt:a}))),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(b,{href:m,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const _="authorCol_FlmR",f="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function Z(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?f:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?N:_),key:t},l.createElement(v,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function k(e){const t=function(){const{selectMessage:e}=(0,m.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,i.C)(),{children:E,frontMatter:b,assets:v,metadata:_,truncated:f,isBlogPostPage:N=!1}=e,{date:k,formattedDate:P,permalink:T,tags:w,readingTime:y,title:I,editUrl:L,authors:M}=_,R=v.image??b.image,A=!N&&f,x=w.length>0,U=N?"h1":"h2";return l.createElement("article",{className:N?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(U,{className:d,itemProp:"headline"},N?I:l.createElement(s.Z,{itemProp:"url",to:T},I)),l.createElement("div",{className:(0,r.Z)(u,"margin-vert--md")},l.createElement("time",{dateTime:k,itemProp:"datePublished"},P),void 0!==y&&l.createElement(l.Fragment,null," \xb7 ",t(y))),l.createElement(Z,{authors:M,assets:v})),R&&l.createElement("meta",{itemProp:"image",content:a(R,{absolute:!0})}),l.createElement("div",{id:N?o.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.Z,null,E)),(x||f)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",N&&p)},x&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":A})},l.createElement(h.Z,{tags:w})),N&&L&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(g.Z,{editUrl:L})),A&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":x})},l.createElement(s.Z,{to:_.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:I})},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},82100:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(67294),r=a(88746),n=a(37542),s=a(86100),i=a(11614),m=a(87139),o=a(87606),c=a(55912),g=a(86010);function d(e){const{metadata:t,items:a,sidebar:d,listMetadata:u}=e,{allTagsPath:p,name:h,count:E}=t,b=function(){const{selectMessage:e}=(0,m.c2)();return t=>e(t,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),v=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:b(E),tagName:h});return l.createElement(m.FG,{className:(0,g.Z)(m.kM.wrapper.blogPages,m.kM.page.blogTagPostListPage)},l.createElement(m.d,{title:v}),l.createElement(c.Z,{tag:"blog_tags_posts"}),l.createElement(n.Z,{sidebar:d},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,v),l.createElement(r.Z,{href:p},l.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})),l.createElement(o.Z,{metadata:u})))}},3043:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(67294),r=a(11614),n=a(83117),s=a(86010);const i="iconEdit_dcUD";function m(e){let{className:t,...a}=e;return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var o=a(87139);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},l.createElement(m,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},61428:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(67294),r=a(88746);function n(e){const{permalink:t,title:a,subLabel:n}=e;return l.createElement(r.Z,{className:"pagination-nav__link",to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}},63865:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),r=a(86010),n=a(88746);const s="tag_hD8n",i="tagRegular_D6E_",m="tagWithCount_i0QQ";function o(e){const{permalink:t,name:a,count:o}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(s,o?m:i)},a,o&&l.createElement("span",null,o))}},41921:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),r=a(86010),n=a(11614),s=a(63865);const i="tags_XVD_",m="tag_JSN8";function o(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:m},l.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);