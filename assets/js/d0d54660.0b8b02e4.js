"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[7908],{71871:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(67294);function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:l},n)}},76018:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(83117),l=t(67294),r=t(5730),i=t(69143),u=t(86010),o="tabItem_LplD";function s(e){var n,t,r,s=e.lazy,c=e.block,m=e.defaultValue,p=e.values,d=e.groupId,f=e.className,y=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,i.lx)(v,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(n=null!=m?m:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=y[0])?void 0:r.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),h=g.tabGroupChoices,T=g.setTabGroupChoices,I=(0,l.useState)(k),N=I[0],w=I[1],x=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var Z=h[d];null!=Z&&Z!==N&&v.some((function(e){return e.value===Z}))&&w(Z)}var E=function(e){var n=e.currentTarget,t=x.indexOf(n),a=v[t].value;a!==N&&(O(n),w(a),null!=d&&T(d,a))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var l=x.indexOf(e.currentTarget)-1;t=x[l]||x[x.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:E,onClick:E},r,{className:(0,u.Z)("tabs__item",o,null==r?void 0:r.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),s?(0,l.cloneElement)(y.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function c(e){var n=(0,r.Z)();return l.createElement(s,(0,a.Z)({key:String(n)},e))}},9127:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var a=t(83117),l=t(80102),r=(t(67294),t(3905)),i=t(76018),u=t(71871),o=["components"],s={sidebar_label:"Installation",sidebar_position:1,title:"Installation"},c="Installation",m={unversionedId:"sdk/community-ui/getting_started/installation",id:"sdk/community-ui/getting_started/installation",title:"Installation",description:"CommunityUI is available as an npm package.",source:"@site/docs/sdk/community-ui/getting_started/installation.md",sourceDirName:"sdk/community-ui/getting_started",slug:"/sdk/community-ui/getting_started/installation",permalink:"/docs/sdk/community-ui/getting_started/installation",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/getting_started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Installation",sidebar_position:1,title:"Installation"},sidebar:"sdkSidebar",previous:{title:"Introduction",permalink:"/docs/sdk/community-ui/intro"},next:{title:"Usage",permalink:"/docs/sdk/community-ui/getting_started/usage"}},p={},d=[{value:"Dependencies",id:"dependencies",level:3},{value:"Install sc-core:",id:"install-sc-core",level:3},{value:"Install sc-ui package:",id:"install-sc-ui-package",level:3},{value:"Install sc-templates package:",id:"install-sc-templates-package",level:3},{value:"Install sc-i18n:",id:"install-sc-i18n",level:3}],f={toc:d};function y(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"CommunityUI is available as an ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@selfcommunity/community-ui"},"npm package"),"."),(0,r.kt)("p",null,"First install peer dependencies needed to make the library work:"),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-npm"},"npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react-intl\n"))),(0,r.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yarn"},"yarn add @mui/material @mui/icons-material @emotion/react @emotion/styled react-intl\n")))),(0,r.kt)("p",null,"Based on which package you want to install proceed as follows:"),(0,r.kt)("h3",{id:"install-sc-core"},"Install sc-core:"),(0,r.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-npm"},"npm install @selfcommunity/i18n @selfcommunity/core\n"))),(0,r.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yarn"},"yarn add @selfcommunity/i18n @selfcommunity/core\n")))),(0,r.kt)("h3",{id:"install-sc-ui-package"},"Install sc-ui package:"),(0,r.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-npm"},"npm install @selfcommunity/i18n @selfcommunity/core @selfcommunity/ui\n"))),(0,r.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yarn"},"yarn add @selfcommunity/i18n @selfcommunity/core @selfcommunity/ui\n")))),(0,r.kt)("h3",{id:"install-sc-templates-package"},"Install sc-templates package:"),(0,r.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-npm"},"npm install @selfcommunity/i18n @selfcommunity/core @selfcommunity/templates\n"))),(0,r.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yarn"},"yarn add @selfcommunity/i18n @selfcommunity/core @selfcommunity/templates\n")))),(0,r.kt)("h3",{id:"install-sc-i18n"},"Install sc-i18n:"),(0,r.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-npm"},"npm install @selfcommunity/i18n\n"))),(0,r.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yarn"},"yarn add @selfcommunity/i18n\n")))))}y.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),d=l,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||r;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=p;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);