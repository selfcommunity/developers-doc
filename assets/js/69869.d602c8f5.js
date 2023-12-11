(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[69869],{12291:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var o=n(67294),s=n(85893);function a(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),r=n?.props.children;return{mdxAdmonitionTitle:r,rest:a.length>0?(0,s.jsx)(s.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}var r=n(36905),c=n(11614),l=n(18015);const i={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function u(e){let{type:t,className:n,children:o}=e;return(0,s.jsx)("div",{className:(0,r.Z)(l.k.common.admonition,l.k.common.admonitionType(t),i.admonition,n),children:o})}function d(e){let{icon:t,title:n}=e;return(0,s.jsxs)("div",{className:i.admonitionHeading,children:[(0,s.jsx)("span",{className:i.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,s.jsx)("div",{className:i.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:o,children:a,className:r}=e;return(0,s.jsxs)(u,{type:t,className:r,children:[(0,s.jsx)(d,{title:o,icon:n}),(0,s.jsx)(m,{children:a})]})}function f(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const p={icon:(0,s.jsx)(f,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function b(e){return(0,s.jsx)(h,{...p,...e,className:(0,r.Z)("alert alert--secondary",e.className),children:e.children})}function g(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const x={icon:(0,s.jsx)(g,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,s.jsx)(h,{...x,...e,className:(0,r.Z)("alert alert--success",e.className),children:e.children})}function j(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,s.jsx)(j,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function k(e){return(0,s.jsx)(h,{...y,...e,className:(0,r.Z)("alert alert--info",e.className),children:e.children})}function N(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const w={icon:(0,s.jsx)(N,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const B={icon:(0,s.jsx)(C,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const E={icon:(0,s.jsx)(N,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const L={...{note:b,tip:v,info:k,warning:function(e){return(0,s.jsx)(h,{...w,...e,className:(0,r.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(h,{...B,...e,className:(0,r.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(b,{title:"secondary",...e}),important:e=>(0,s.jsx)(k,{title:"important",...e}),success:e=>(0,s.jsx)(v,{title:"success",...e}),caution:function(e){return(0,s.jsx)(h,{...E,...e,className:(0,r.Z)("alert alert--warning",e.className),children:e.children})}}};function I(e){const t=a(e),n=(o=t.type,L[o]||(console.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),L.info));var o;return(0,s.jsx)(n,{...t})}},69112:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ne});var o=n(67294),s=n(32411),a=n(5730),r=n(36905),c=n(70524),l=n(96793);function i(){const{prism:e}=(0,l.L)(),{colorMode:t}=(0,c.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n(18015),d=n(87594),m=n.n(d);const h=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,p={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function b(e,t){const n=e.map((e=>{const{start:n,end:o}=p[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function g(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:a}=t;if(a&&f.test(a)){const e=a.match(f).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=m()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return b(["tex"],t);case"lua":case"haskell":case"sql":return b(["lua"],t);case"wasm":return b(["wasm"],t);default:return b(Object.keys(p).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(o,s),c=n.split("\n"),l=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let m=0;m<c.length;){const e=c[m].match(r);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=`${m},`:u[t]?l[u[t]].start=m:d[t]&&(l[d[t]].range+=`${l[d[t]].start}-${m-1},`),c.splice(m,1)}n=c.join("\n");const h={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;m()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}const x={codeBlockContainer:"codeBlockContainer_Ckt0"};var v=n(85893);function j(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,s]=e;const a=t[o];a&&"string"==typeof s&&(n[a]=s)})),n}(i());return(0,v.jsx)(t,{...n,style:o,className:(0,r.Z)(n.className,x.codeBlockContainer,u.k.common.codeBlock)})}const y={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function k(e){let{children:t,className:n}=e;return(0,v.jsx)(j,{as:"pre",tabIndex:0,className:(0,r.Z)(y.codeBlockStandalone,"thin-scrollbar",n),children:(0,v.jsx)("code",{className:y.codeBlockLines,children:t})})}var N=n(93478);const w={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,s]=(0,o.useState)(),a=(0,o.useCallback)((()=>{s(e.current?.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,o.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=w);const s=(0,N.zX)(t),a=(0,N.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(s);return e&&t.observe(e,a),()=>t.disconnect()}),[e,s,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var B=n(14965);const E={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function L(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:s,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=s({line:t,className:(0,r.Z)(n,o&&E.codeLine)}),l=t.map(((e,t)=>(0,v.jsx)("span",{...a({token:e,key:t})},t)));return(0,v.jsxs)("span",{...c,children:[o?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{className:E.codeLineNumber}),(0,v.jsx)("span",{className:E.codeLineContent,children:l})]}):l,(0,v.jsx)("br",{})]})}var I=n(11614);function Z(e){return(0,v.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,v.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function T(e){return(0,v.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,v.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const S={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function _(e){let{code:t,className:n}=e;const[s,a]=(0,o.useState)(!1),c=(0,o.useRef)(void 0),l=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),s=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const a=document.getSelection(),r=a.rangeCount>0&&a.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}o.remove(),r&&(a.removeAllRanges(),a.addRange(r)),s&&s.focus()}(t),a(!0),c.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),(0,v.jsx)("button",{type:"button","aria-label":s?(0,I.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,I.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,I.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,S.copyButton,s&&S.copyButtonCopied),onClick:l,children:(0,v.jsxs)("span",{className:S.copyButtonIcons,"aria-hidden":"true",children:[(0,v.jsx)(Z,{className:S.copyButtonIcon}),(0,v.jsx)(T,{className:S.copyButtonSuccessIcon})]})})}function V(e){return(0,v.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,v.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const A={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function z(e){let{className:t,onClick:n,isEnabled:o}=e;const s=(0,I.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,v.jsx)("button",{type:"button",onClick:n,className:(0,r.Z)("clean-btn",t,o&&A.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,v.jsx)(V,{className:A.wordWrapButtonIcon,"aria-hidden":"true"})})}function M(e){let{children:t,className:n="",metastring:s,title:a,showLineNumbers:c,language:u}=e;const{prism:{defaultLanguage:d,magicComments:m}}=(0,l.L)(),f=function(e){return e?.toLowerCase()}(u??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d),p=i(),b=function(){const[e,t]=(0,o.useState)(!1),[n,s]=(0,o.useState)(!1),a=(0,o.useRef)(null),r=(0,o.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),c=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");s(n)}),[a]);return C(a,c),(0,o.useEffect)((()=>{c()}),[e,c]),(0,o.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:r}}(),x=function(e){return e?.match(h)?.groups.title??""}(s)||a,{lineClassNames:k,code:N}=g(t,{metastring:s,language:f,magicComments:m}),w=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(s);return(0,v.jsxs)(j,{as:"div",className:(0,r.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`),children:[x&&(0,v.jsx)("div",{className:y.codeBlockTitle,children:x}),(0,v.jsxs)("div",{className:y.codeBlockContent,children:[(0,v.jsx)(B.y$,{theme:p,code:N,language:f??"text",children:e=>{let{className:t,style:n,tokens:o,getLineProps:s,getTokenProps:a}=e;return(0,v.jsx)("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,r.Z)(t,y.codeBlock,"thin-scrollbar"),style:n,children:(0,v.jsx)("code",{className:(0,r.Z)(y.codeBlockLines,w&&y.codeBlockLinesWithNumbering),children:o.map(((e,t)=>(0,v.jsx)(L,{line:e,getLineProps:s,getTokenProps:a,classNames:k[t],showLineNumbers:w},t)))})})}}),(0,v.jsxs)("div",{className:y.buttonGroup,children:[(b.isEnabled||b.isCodeScrollable)&&(0,v.jsx)(z,{className:y.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),(0,v.jsx)(_,{className:y.codeButton,code:N})]})]})]})}function H(e){let{children:t,...n}=e;const s=(0,a.Z)(),r=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof r?M:k;return(0,v.jsx)(c,{...n,children:r},String(s))}var $=n(88746);var R=n(788),q=n(17940);const D={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function W(e){return!!e&&("SUMMARY"===e.tagName||W(e.parentElement))}function P(e,t){return!!e&&(e===t||P(e.parentElement,t))}function O(e){let{summary:t,children:n,...s}=e;const r=(0,a.Z)(),c=(0,o.useRef)(null),{collapsed:l,setCollapsed:i}=(0,q.u)({initialState:!s.open}),[u,d]=(0,o.useState)(s.open),m=o.isValidElement(t)?t:(0,v.jsx)("summary",{children:t??"Details"});return(0,v.jsxs)("details",{...s,ref:c,open:u,"data-collapsed":l,className:(0,R.Z)(D.details,r&&D.isBrowser,s.className),onMouseDown:e=>{W(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;W(t)&&P(t,c.current)&&(e.preventDefault(),l?(i(!1),d(!0)):i(!0))},children:[m,(0,v.jsx)(q.z,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{i(e),d(!e)},children:(0,v.jsx)("div",{className:D.collapsibleContent,children:n})})]})}const U={details:"details_b_Ee"},F="alert alert--info";function G(e){let{...t}=e;return(0,v.jsx)(O,{...t,className:(0,r.Z)(F,U.details,t.className)})}function Y(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.type)),s=(0,v.jsx)(v.Fragment,{children:t.filter((e=>e!==n))});return(0,v.jsx)(G,{...e,summary:n,children:s})}var J=n(34448);function K(e){return(0,v.jsx)(J.Z,{...e})}const X={containsTaskList:"containsTaskList_mC6p"};function Q(e){if(void 0!==e)return(0,r.Z)(e,e?.includes("contains-task-list")&&X.containsTaskList)}const ee={img:"img_ev3q"};var te=n(12291);const ne={Head:s.Z,details:Y,Details:Y,code:function(e){return o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,v.jsx)("code",{...e}):(0,v.jsx)(H,{...e})},a:function(e){return(0,v.jsx)($.Z,{...e})},pre:function(e){return(0,v.jsx)(v.Fragment,{children:e.children})},ul:function(e){return(0,v.jsx)("ul",{...e,className:Q(e.className)})},img:function(e){return(0,v.jsx)("img",{loading:"lazy",...e,className:(t=e.className,(0,r.Z)(t,ee.img))});var t},h1:e=>(0,v.jsx)(K,{as:"h1",...e}),h2:e=>(0,v.jsx)(K,{as:"h2",...e}),h3:e=>(0,v.jsx)(K,{as:"h3",...e}),h4:e=>(0,v.jsx)(K,{as:"h4",...e}),h5:e=>(0,v.jsx)(K,{as:"h5",...e}),h6:e=>(0,v.jsx)(K,{as:"h6",...e}),admonition:te.Z,mermaid:()=>null}},42279:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});n(67294);var o=n(11151),s=n(80064),a=n(85893);function r(e){let{children:t}=e;return(0,a.jsx)(o.Z,{components:s.Z,children:t})}},32342:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});n(67294);var o=n(36905);const s={tabItem:"tabItem_Ymn6"};var a=n(85893);function r(e){let{children:t,hidden:n,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.Z)(s.tabItem,r),hidden:n,children:t})}},71125:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var o=n(67294),s=n(36905),a=n(63735),r=n(16550),c=n(20613),l=n(34423),i=n(20636),u=n(99200);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:s}}=e;return{value:t,label:n,attributes:o,default:s}}))}(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=m(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[i,d]=f({queryString:n,groupId:s}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Nk)(n);return[s,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),g=(()=>{const e=i??p;return h({value:e,tabValues:a})?e:null})();(0,c.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(5730);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function v(e){let{className:t,block:n,selectedValue:o,selectValue:r,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=c[n].value;s!==o&&(i(t),r(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.Z)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=p(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function k(e){const t=(0,b.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},87594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,s,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},11151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c,a:()=>r});var o=n(67294);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);