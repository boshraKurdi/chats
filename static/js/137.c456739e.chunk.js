"use strict";(self.webpackChunkmap=self.webpackChunkmap||[]).push([[137],{2700:(e,s,t)=>{t.r(s),t.d(s,{default:()=>I});var a=t(4858),n=t(9407),i=t(3875),r=t(4480),l=t(5874),c=t(5043),d=t(3887);const o=()=>{const e=(0,d.Ay)("p")((e=>{let{theme:s}=e;return{backgroundColor:s.palette.primary.secondy}})),s=(0,d.Ay)("h3")((e=>{let{theme:s}=e;return{color:s.palette.primary.light}})),t=(0,d.Ay)("a")((e=>{let{theme:s}=e;return{backgroundColor:s.palette.primary.secondy}})),a=(0,d.Ay)("header")((e=>{let{theme:s}=e;return{color:"#fff",backgroundColor:s.palette.primary.main}})),n=(0,d.Ay)("div")((e=>{let{theme:s}=e;return{backgroundColor:s.palette.primary.main}})),i=(0,d.Ay)("h1")((e=>{let{theme:s}=e;return{color:s.palette.primary.title}})),r=(0,d.Ay)("p")((e=>{let{theme:s}=e;return{color:s.palette.primary.contrastText}}));return{MyComponentDivHeader:n,MyComponentContainerLoader:(0,d.Ay)("div")((e=>{let{theme:s}=e;return{background:s.palette.primary.bg}})),MyComponentHeroSubtitleH3:s,MyComponentHeroSubtitle:e,MyComponentHeader:a,MyComponentTitle:i,MyComponentTextP:r,MyComponentHeroSubtitleA:t}};var h=t(3003),m=t(2945),x=t(579);function j(){return(0,x.jsxs)("div",{class:"loader-page",children:[(0,x.jsx)("div",{class:"bar1"}),(0,x.jsx)("div",{class:"bar2"}),(0,x.jsx)("div",{class:"bar3"}),(0,x.jsx)("div",{class:"bar4"}),(0,x.jsx)("div",{class:"bar5"}),(0,x.jsx)("div",{class:"bar6"}),(0,x.jsx)("div",{class:"bar7"}),(0,x.jsx)("div",{class:"bar8"}),(0,x.jsx)("div",{class:"bar9"}),(0,x.jsx)("div",{class:"bar10"}),(0,x.jsx)("div",{class:"bar11"}),(0,x.jsx)("div",{class:"bar12"})]})}function p(e){let{id:s}=e;const t=(0,c.useRef)(null),{MyComponentDivHeader:d}=o(),{value:p}=(0,h.d4)((e=>e.mode)),{register:u,handleSubmit:g}=(0,a.mN)(),v=(0,h.wA)(),{messages:y,loading2:f}=(0,h.d4)((e=>e.chat));(0,c.useEffect)((()=>{v((0,m.B2)(s))}),[v,s]),(0,c.useEffect)((()=>{var e;null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[]);let b=y.map((e=>(0,x.jsxs)("div",{className:e.is_f?"light"===p?"chat-msg user light":"chat-msg user dark":"light"===p?"chat-msg light":"chat-msg dark",children:[(0,x.jsx)("p",{children:e.text}),(0,x.jsx)("span",{className:"time",children:"06:04 PM"})]},e.id)));return(0,x.jsx)(x.Fragment,{children:"pending"===f?(0,x.jsx)(j,{}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"chat-container",children:b}),(0,x.jsx)("div",{ref:t}),(0,x.jsx)("div",{className:"message-box",children:(0,x.jsxs)("form",{onSubmit:g((async e=>{console.log("store")})),style:{display:"flex",alignItems:"center"},children:[(0,x.jsxs)(d,{className:"message-content",children:[(0,x.jsx)(r.A,{}),(0,x.jsx)("input",{type:"text",name:"text",...u("text")}),(0,x.jsx)("input",{type:"hidden",value:s,name:"chat_id",...u("chat_id")}),(0,x.jsx)("input",{type:"hidden",value:"0",name:"is_f",...u("is_f")}),(0,x.jsx)("input",{type:"hidden",value:"10",name:"id",...u("id")}),(0,x.jsx)("input",{type:"hidden",value:"2",name:"f_id",...u("f_id")}),(0,x.jsx)(i.A,{}),(0,x.jsx)(n.A,{})]}),(0,x.jsx)("button",{style:{marginLeft:"1rem"},className:"micro",children:(0,x.jsx)(l.A,{})})]})})]})})}var u=t(388),g=t(9484);const v=t.p+"static/media/about-coach.dff9558d0b5588f14857.jpg";var y=t(5866);function f(e){let{chat:s}=e;const t=(0,h.wA)();return(0,x.jsxs)("div",{onClick:()=>{t((0,y.ly)(s.id))},className:"chat-box",id:"Msg",children:[(0,x.jsx)("div",{className:"chat-img",children:(0,x.jsx)("img",{src:v,alt:""})}),(0,x.jsxs)("div",{className:"chat-details",children:[(0,x.jsxs)("div",{className:"chat-title",children:[(0,x.jsx)("h3",{children:s.f_name}),(0,x.jsx)("span",{children:"06:04 PM"})]}),(0,x.jsxs)("div",{className:"chat-msg",children:[(0,x.jsx)("p",{children:s.lastMessage}),(0,x.jsx)("span",{children:"1"})]})]})]})}var b=t(8185),A=t(1088);function C(){const e=Array(5).fill(0).map(((e,s)=>(0,x.jsxs)("div",{style:{display:"flex",alignItems:"center",marginLeft:"1rem"},children:[(0,x.jsx)(A.A,{spacing:1,style:{marginRight:"2rem",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,x.jsx)(b.A,{variant:"rounded",sx:{borderRadius:"50%"},width:50,height:50})}),(0,x.jsxs)(A.A,{spacing:1,style:{flex:"1"},children:[(0,x.jsx)(b.A,{variant:"text",width:150,sx:{fontSize:"1rem"}}),(0,x.jsx)(b.A,{variant:"text",width:150,sx:{fontSize:"1rem"}})]})]},s)));return(0,x.jsx)("div",{style:{display:"flex",gap:"2rem",flexDirection:"column"},children:e})}function N(){return(0,x.jsxs)("div",{style:{display:"flex",alignItems:"center",marginLeft:"1rem"},children:[(0,x.jsx)(A.A,{spacing:1,style:{marginRight:"2rem",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,x.jsx)(b.A,{variant:"rounded",sx:{borderRadius:"50%"},width:50,height:50})}),(0,x.jsxs)(A.A,{spacing:1,style:{flex:"1"},children:[(0,x.jsx)(b.A,{variant:"text",width:150,sx:{fontSize:"1rem"}}),(0,x.jsx)(b.A,{variant:"text",width:150,sx:{fontSize:"1rem"}})]})]})}function k(e){let{loading:s,error:t="",children:a,type:n}=e;const i={chat:C,headerChat:N}[n];return"pending"===s?(0,x.jsx)(i,{}):"failed"===s?"error":(0,x.jsx)(x.Fragment,{children:a})}var M=t(7488),w=t(2567);function _(){const[e,s]=(0,c.useState)(""),{MyComponentDivHeader:t}=o(),a=(0,h.wA)(),{myChats:n,loading:i}=(0,h.d4)((e=>e.chat)),{value:r}=(0,h.d4)((e=>e.mode)),l=n.map((e=>(0,x.jsx)(f,{chat:e},e.id)));(0,c.useEffect)((()=>{a((0,m.V7)())}),[a]);const d="light"===r?"dark":"light";return(0,x.jsxs)(t,{className:"right-side",children:[(0,x.jsx)(t,{className:"header-container",children:(0,x.jsxs)("div",{className:"chat_header",children:[(0,x.jsx)("div",{className:"toggle-button",onClick:()=>{a((0,y.w9)(d))},children:"light"===r?(0,x.jsx)(M.A,{}):(0,x.jsx)(w.A,{})}),(0,x.jsxs)("div",{className:"search-box",children:[(0,x.jsx)(g.A,{}),(0,x.jsx)("input",{value:e,onChange:e=>{s(e.target.value),console.log("search")},type:"text",placeholder:"Search"})]})]})}),(0,x.jsx)("div",{className:"body-container",children:(0,x.jsx)("div",{className:"chat-list",children:(0,x.jsx)(k,{loading:i,type:"chat",children:l})})}),(0,x.jsx)("div",{className:"pen",children:(0,x.jsx)(u.A,{})})]})}var S=t(9974),H=t(694);function I(){const{MyComponentDivHeader:e}=o(),{params:s}=(0,h.d4)((e=>e.mode)),t=(0,h.wA)(),{myChat:a,loading3:n}=(0,h.d4)((e=>e.chat));(0,c.useEffect)((()=>{t((0,m.KP)(s))}),[t,s]);const{value:i}=(0,h.d4)((e=>e.mode));return(0,x.jsxs)("main",{className:"chat",children:[(0,x.jsx)(_,{}),(0,x.jsx)("section",{className:"light"===i?"chat_content light":"chat_content dark",children:(0,x.jsxs)("div",{className:"chat_container",id:"chatBox",children:[(0,x.jsxs)(e,{className:"content-header",children:[(0,x.jsx)(H.A,{className:"barsChat",style:{fontSize:"3rem"}}),(0,x.jsxs)(k,{loading:n,type:"headerChat",children:[(0,x.jsx)("div",{className:"image",children:(0,x.jsx)("img",{src:v,alt:""})}),(0,x.jsxs)("div",{className:"details",children:[(0,x.jsx)("h3",{children:a.f_name}),(0,x.jsx)("span",{children:"last seen 10 minutes ago"})]})]}),(0,x.jsxs)("div",{className:"icons",children:[(0,x.jsx)(S.A,{}),(0,x.jsx)(g.A,{})]})]}),(0,x.jsx)(p,{id:s})]})})]})}}}]);
//# sourceMappingURL=137.c456739e.chunk.js.map