"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[3089],{8665:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(102),l=a(7294),n=a(6010),i=a(1607),s=a(9960),m="sidebar_2ahu",o="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",d="sidebarItem_2UVv",u="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",p=a(5999);function v(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:d},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var E=["sidebar","toc","children"];var h=function(e){var t=e.sidebar,a=e.toc,s=e.children,m=(0,r.Z)(e,E),o=t&&t.items.length>0;return l.createElement(i.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(v,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},2754:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(7294),l=a(2263),n=a(8665),i=a(8561),s=a(9960),m=a(5999);var o=function(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(s.Z,{className:"pagination-nav__link",to:a},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.createElement(s.Z,{className:"pagination-nav__link",to:l},r.createElement("div",{className:"pagination-nav__label"},r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=a(9521);var d=function(e){var t=e.metadata,a=e.items,s=e.sidebar,m=(0,l.Z)().siteConfig.title,d=t.blogDescription,u=t.blogTitle,g="/"===t.permalink?m:u;return r.createElement(n.Z,{title:g,description:d,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(o,{metadata:t}))}},8561:function(e,t,a){a.d(t,{Z:function(){return b}});var r=a(7294),l=a(6010),n=a(3905),i=a(5999),s=a(9960),m=a(4996),o=a(9521),c=a(7707),d=a(6753),u="blogPostTitle_GeHD",g="blogPostData_291c",p="blogPostDetailsFull_3kfx",v=a(62),E="image_1yU8";var h=function(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:E,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},f="authorCol_1R69";function _(e){var t=e.authors,a=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var n;return r.createElement("div",{className:(0,l.Z)("col col--6",f),key:t},r.createElement(h,{author:Object.assign({},e,{imageURL:null!=(n=a.authorsImageUrls[t])?n:e.imageURL})}))})))}var b=function(e){var t,a,E,h,f=(E=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return E(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,m.C)().withBaseUrl,N=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,y=void 0!==w&&w,L=P.date,M=P.formattedDate,U=P.permalink,x=P.tags,I=P.readingTime,B=P.title,A=P.editUrl,R=P.authors,C=null!=(t=k.image)?t:Z.image,D=!y&&T,H=x.length>0;return r.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(h=y?"h1":"h2",r.createElement("header",null,r.createElement(h,{className:u,itemProp:"headline"},y?B:r.createElement(s.Z,{itemProp:"url",to:U},B)),r.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:L,itemProp:"datePublished"},M),void 0!==I&&r.createElement(r.Fragment,null," \xb7 ",f(I))),r.createElement(_,{authors:R,assets:k}))),C&&r.createElement("meta",{itemProp:"image",content:b(C,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:c.Z},N)),(H||T)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[p]=y,a))},H&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":D})},r.createElement(v.Z,{tags:x})),y&&A&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.Z,{editUrl:A})),D&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":H})},r.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+B},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6753:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(7294),l=a(5999),n=a(3117),i=a(102),s=a(6010),m="iconEdit_2_ui",o=["className"],c=function(e){var t=e.className,a=(0,i.Z)(e,o);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},d=a(9521);function u(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},r.createElement(c,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),l=a(6010),n=a(9960),i="tag_1Okp",s="tagRegular_3MiF",m="tagWithCount_1HU1";var o=function(e){var t,a=e.permalink,o=e.name,c=e.count;return r.createElement(n.Z,{href:a,className:(0,l.Z)(i,(t={},t[s]=!c,t[m]=c,t))},o,c&&r.createElement("span",null,c))}},62:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),l=a(6010),n=a(5999),i=a(7774),s="tags_2ga9",m="tag_11ep";function o(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:m},r.createElement(i.Z,{name:t,permalink:a}))}))))}},2838:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(3117),l=a(102),n=a(7294),i=a(6010),s=a(9960),m=a(9521),o=a(4996),c=a(3919),d="footerLogoLink_qW4Z",u=a(9750),g=a(541),p=["to","href","label","prependBaseUrlToHref"];function v(e){var t=e.to,a=e.href,i=e.label,m=e.prependBaseUrlToHref,d=(0,l.Z)(e,p),u=(0,o.Z)(t),v=(0,o.Z)(a,{forcePrependBaseUrl:!0});return n.createElement(s.Z,(0,r.Z)({className:"footer__link-item"},a?{href:m?v:a}:{to:u},d),a&&!(0,c.Z)(a)?n.createElement("span",null,i,n.createElement(g.Z,null)):i)}var E=function(e){var t=e.sources,a=e.alt;return n.createElement(u.Z,{className:"footer__logo",alt:a,sources:t})};var h=function(){var e=(0,m.LU)().footer,t=e||{},a=t.copyright,r=t.links,l=void 0===r?[]:r,c=t.logo,u=void 0===c?{}:c,g={light:(0,o.Z)(u.src),dark:(0,o.Z)(u.srcDark||u.src)};return e?n.createElement("footer",{className:(0,i.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},n.createElement("path",{d:"M1200 120L0 16.48 0 0 1200 0 1200 120z",className:"shape-fill"})),n.createElement("div",{className:"container"},l&&l.length>0&&n.createElement("div",{className:"row footer__links"},l.map((function(e,t){return n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(v,e))}))):null)}))),(u||a)&&n.createElement("div",{className:"footer__bottom text--center"},u&&(u.src||u.srcDark)&&n.createElement("div",{className:"margin-bottom--sm"},u.href?n.createElement(s.Z,{href:u.href,className:d},n.createElement(E,{alt:u.alt,sources:g})):n.createElement(E,{alt:u.alt,sources:g})),a?n.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);