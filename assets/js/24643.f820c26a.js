"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[24643],{24643:(t,e,a)=>{a.d(e,{Z:()=>y});var o=a(97582),i=a(67294),n=a(90948),l=a(25662),r=a(86886),s=a(93946),c=a(67564),d=a(57922),m=a(15861),u=a(67720),p=a(48542),g=a(94253),f=a(34386),A=a(84808),b=a(24243),E=a(24085),h=a(76171),Z=a(13391),C=a(65580),v=a(97265),W=a(44012),x=a(94184),k=a.n(x),M=a(63902),w=a(29360),H=a(54545);const Q="SCPlatformWidget";var B=a(96514);const S={root:`${Q}-root`,title:`${Q}-title`,content:`${Q}-content`,actions:`${Q}-actions`,action:`${Q}-action`,actionHighlighted:`${Q}-action-highlighted`,tutorial:`${Q}-tutorial`,tutorialContent:`${Q}-tutorial-content`,tutorialTitle:`${Q}-tutorial-title`,tutorialTitleClose:`${Q}-tutorial-title-close`,tutorialDesc:`${Q}-tutorial-desc`,tutorialOpen:`${Q}-tutorial-open`,divider:`${Q}-divider`,tutorialControls:`${Q}-tutorial-controls`,btnStep:`${Q}-btn-step`,btnPreviousStep:`${Q}-btn-previous-step`,btnNextStep:`${Q}-btn-next-step`},D=(0,n.ZP)(M.Z,{name:Q,slot:"Root"})((({theme:t})=>({padding:"0px !important",[`&.${S.tutorialOpen}`]:{position:"relative",zIndex:t.zIndex.drawer+2,[`& .${S.tutorial}`]:{padding:0}},[`& .${S.title}`]:{display:"flex",justifyContent:"center",marginBottom:t.spacing(1)},[`& .${S.content}`]:{padding:`${t.spacing(2)} 0 0 0`,backgroundColor:"#EFEFEF"},[`& .${S.actions}`]:{display:"flex",paddingBottom:0,boxShadow:"inset -1px -3px 7px -4px #CECECE","-webkit-overflow-scrolling":"touch",overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","-ms-overflow-style":"none","&::-webkit-scrollbar":{display:"none"}},[`& .${S.action}`]:{padding:`0px 2px ${t.spacing(2)} 2px`,display:"flex",flexGrow:1,justifyContent:"center","& .MuiButton-root":{color:t.palette.getContrastText(t.palette.common.white),backgroundColor:t.palette.common.white,"&:hover":{color:t.palette.getContrastText(t.palette.primary.main),backgroundColor:t.palette.primary.main}}},[`& .${S.tutorialContent}`]:{width:"100%"},[`& .${S.divider}`]:{paddingTop:t.spacing()},[`& .${S.tutorialTitle}`]:{position:"relative",fontWeight:700,fontSize:15,padding:`${t.spacing(3)} ${t.spacing()} ${t.spacing()} ${t.spacing(3)}`},[`& .${S.tutorialTitleClose}`]:{position:"absolute",top:t.spacing(3),right:t.spacing(3)},[`& .${S.tutorialDesc}`]:{fontSize:14,fontWeight:500,color:t.palette.grey[700],padding:`0px ${t.spacing(3)} ${t.spacing()} ${t.spacing(3)}`},[`& .${S.tutorialControls}`]:{padding:t.spacing(2)},[`& .${S.actionHighlighted}`]:{position:"relative","&:before":{content:'""',display:"block",position:"absolute",bottom:-11,width:10,height:10,transform:"translateY(-50%) rotate(45deg)",boxShadow:"0px -20px 20px 0px #CECECE",zIndex:0,backgroundColor:t.palette.common.white},"& .MuiButton-root":{backgroundColor:t.palette.primary.main,color:t.palette.common.white}},[`& .${S.btnStep}`]:{borderRadius:3}})));const y=function(t){var e;const a=(0,w.Z)({props:t,name:Q}),{autoHide:n,className:x,title:M=null,startActions:y=[],endActions:N=[],hideConsoleAction:P=!1,hideModerationAction:T=!1,hideHubAction:U=!1,hideContactUsAction:G=!1,onHeightChange:I}=a,J=(0,o._T)(a,["autoHide","className","title","startActions","endActions","hideConsoleAction","hideModerationAction","hideHubAction","hideContactUsAction","onHeightChange"]),O=(0,h.RM)(),j=(0,i.useContext)(Z.K8),[z,X]=(0,i.useState)(0),[K,Y]=(0,i.useState)(!1),q=(0,i.useMemo)((()=>C.GJ(j.user)),[j.user]),L=(0,i.useMemo)((()=>C.hz(j.user)),[j.user]),R=(0,i.useMemo)((()=>C.vJ(j.user)),[j.user]),F=(0,i.useMemo)((()=>{var t;return 1===(null===(t=null==j?void 0:j.user)||void 0===t?void 0:t.id)}),[j.user]),$=O.settings.portal.includes("stage"),V=[...y,...!q&&!L||P?[]:[{render:i.createElement(l.Z,{variant:"outlined",size:"small",onClick:()=>ot("")},i.createElement(W.Z,{id:"ui.platformWidget.adm",defaultMessage:"ui.platformWidget.adm"})),title:i.createElement(W.Z,{id:"ui.platformWidget.adm",defaultMessage:"ui.platformWidget.adm"}),content:i.createElement(W.Z,{id:"ui.platformWidget.adm.desc",defaultMessage:"ui.platformWidget.adm.desc"})}],...!q&&!R||T?[]:[{render:i.createElement(l.Z,{variant:"outlined",size:"small",onClick:()=>ot("/moderation/flags/")},i.createElement(W.Z,{id:"ui.platformWidget.mod",defaultMessage:"ui.platformWidget.mod"})),title:i.createElement(W.Z,{id:"ui.platformWidget.mod",defaultMessage:"ui.platformWidget.mod"}),content:i.createElement(W.Z,{id:"ui.platformWidget.mod.desc",defaultMessage:"ui.platformWidget.mod.desc"})}],...q&&F&&!U?[{render:i.createElement(l.Z,{variant:"outlined",size:"small",component:v.Z,to:$?"https://hub.stage.quentrix.com/":"https://hub.selfcommunity.com/",target:"_blank"},i.createElement(W.Z,{id:"ui.platformWidget.hub",defaultMessage:"ui.platformWidget.hub"})),title:i.createElement(W.Z,{id:"ui.platformWidget.hub",defaultMessage:"ui.platformWidget.hub"}),content:i.createElement(W.Z,{id:"ui.platformWidget.hub.desc",defaultMessage:"ui.platformWidget.hub.desc"})}]:[],...F&&!G?[{render:i.createElement(l.Z,{variant:"outlined",size:"small",component:v.Z,to:$?"https://hub.stage.quentrix.com/dashboard/account/contact-us":"https://hub.selfcommunity.com/dashboard/account/contact-us",target:"_blank"},i.createElement(W.Z,{id:"ui.platformWidget.contactUs",defaultMessage:"ui.platformWidget.contactUs"})),title:i.createElement(W.Z,{id:"ui.platformWidget.contactUs",defaultMessage:"ui.platformWidget.contactUs"}),content:i.createElement(W.Z,{id:"ui.platformWidget.contactUs.desc",defaultMessage:"ui.platformWidget.contactUs.desc"})}]:[],...N],_=(0,i.useCallback)((()=>{X(0),Y(!0),I&&I()}),[X,Y,I]),tt=(0,i.useCallback)((()=>{Y(!1),X(0),I&&I()}),[Y,X,I]),et=(0,i.useCallback)((()=>{z>0?X((t=>t-1)):tt(),I&&I()}),[z,X,tt,I]),at=(0,i.useCallback)((()=>{z<V.length-1?X((t=>t+1)):tt(),I&&I()}),[V,z,X,tt,I]);function ot(t){b.Z.request({url:E.Z.Platform.url(),method:E.Z.Platform.method,params:{next:t}}).then((t=>{const e=t.data.platform_url;window.open(e,"_blank").focus()})).catch((t=>{console.log(t)}))}const it=i.createElement(r.ZP,{container:!0,spacing:q?1:3,justifyContent:"center",className:S.tutorial},!K&&i.createElement(r.ZP,{item:!0,xs:"auto",alignItems:"center",justifyContent:"center"},i.createElement(s.Z,{size:"medium",onClick:_},i.createElement(c.Z,null,"info"))),i.createElement(d.Z,{in:K,className:S.tutorialContent},K&&i.createElement(r.ZP,{item:!0,xs:"auto"},i.createElement(m.Z,{variant:"body2",className:S.tutorialTitle,component:"div"},i.createElement(B.Z,{in:!0,timeout:1e3},i.createElement("span",null,V[z].title)),i.createElement(s.Z,{size:"small",className:S.tutorialTitleClose,onClick:tt},i.createElement(c.Z,null,"close"))),i.createElement(B.Z,{in:!0,timeout:1200},i.createElement(m.Z,{variant:"body2",className:S.tutorialDesc},V[z].content)),i.createElement(u.Z,{className:S.divider}),i.createElement(p.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,className:S.tutorialControls},i.createElement(l.Z,{variant:"text",size:"small",onClick:et,className:k()(S.btnStep,S.btnPreviousStep)},0===z?i.createElement(W.Z,{id:"ui.platformWidget.tutorial.skip",defaultMessage:"ui.platformWidget.tutorial.skip"}):i.createElement(W.Z,{id:"ui.platformWidget.tutorial.previous",defaultMessage:"ui.platformWidget.tutorial.previous"})),i.createElement(m.Z,{component:"div"},z+1,"/",V.length),i.createElement(l.Z,{variant:"contained",size:"small",color:"primary",onClick:at,className:k()(S.btnStep,S.btnNextStep)},z===V.length-1?i.createElement(W.Z,{id:"ui.platformWidget.tutorial.close",defaultMessage:"ui.platformWidget.tutorial.close"}):i.createElement(W.Z,{id:"ui.platformWidget.tutorial.next",defaultMessage:"ui.platformWidget.tutorial.next"})))))),nt=i.createElement(r.ZP,{container:!0,spacing:q?1:3,justifyContent:"center",className:S.content},i.createElement(r.ZP,{item:!0,xs:12},M||i.createElement(g.Z,{className:S.title},i.createElement(f.Z,{title:i.createElement(W.Z,{id:"ui.platformWidget.title.tooltip",defaultMessage:"ui.platformWidget.title.tooltip"}),placement:"top"},i.createElement("img",{src:"data:image/png;base64,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",alt:"logo"})))),i.createElement(r.ZP,{item:!0,xs:12,className:S.actions},i.createElement(r.ZP,{item:!0,xs:1,className:S.action}),V.map(((t,e)=>i.createElement(r.ZP,{key:e,item:!0,xs:"auto",className:k()(S.action,{[S.actionHighlighted]:z===e&&K})},t.render))),i.createElement(r.ZP,{item:!0,xs:1,className:S.action})));return!n&&(null===(e=null==j?void 0:j.user)||void 0===e?void 0:e.role)?i.createElement(i.Fragment,null,i.createElement(D,Object.assign({className:k()(S.root,x,{[S.tutorialOpen]:K})},J),nt,it),i.createElement(A.Z,{sx:{color:"#fff",zIndex:t=>t.zIndex.drawer+1},open:K,onClick:tt})):i.createElement(H.Z,null)}}}]);