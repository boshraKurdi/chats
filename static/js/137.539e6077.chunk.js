"use strict";(self.webpackChunkmap=self.webpackChunkmap||[]).push([[137],{2700:(e,s,t)=>{t.r(s),t.d(s,{default:()=>L});var a=t(9407),i=t(3875),r=t(4480),n=t(5874),l=t(4258),c=t(5043),d=t(3003),o=t(2945),h=t(579);function m(){return(0,h.jsxs)("div",{class:"loader-page",children:[(0,h.jsx)("div",{class:"bar1"}),(0,h.jsx)("div",{class:"bar2"}),(0,h.jsx)("div",{class:"bar3"}),(0,h.jsx)("div",{class:"bar4"}),(0,h.jsx)("div",{class:"bar5"}),(0,h.jsx)("div",{class:"bar6"}),(0,h.jsx)("div",{class:"bar7"}),(0,h.jsx)("div",{class:"bar8"}),(0,h.jsx)("div",{class:"bar9"}),(0,h.jsx)("div",{class:"bar10"}),(0,h.jsx)("div",{class:"bar11"}),(0,h.jsx)("div",{class:"bar12"})]})}var x=t(4575);function j(e){let{id:s}=e;const t=(0,x.u)(),j=(0,c.useRef)(null),[p,u]=(0,c.useState)(!1),[g,v]=(0,c.useState)({id:10,chat_id:s,is_f:0,f_id:2,text:""}),{value:y}=(0,d.d4)((e=>e.mode)),f=(0,d.wA)(),{messages:b,loading2:C}=(0,d.d4)((e=>e.chat));(0,c.useEffect)((()=>{f((0,o.B2)(s))}),[f,s]),(0,c.useEffect)((()=>{var e;null===(e=j.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[]);let A=b.map((e=>(0,h.jsxs)("div",{className:e.is_f?"light"===y?"chat-msg light":"chat-msg dark":"light"===y?"chat-msg user light":"chat-msg user dark",children:[(0,h.jsx)("p",{children:e.text}),(0,h.jsx)("span",{className:"time",children:"06:04 PM"})]},e.id)));return(0,h.jsx)(h.Fragment,{children:"pending"===C?(0,h.jsx)(m,{}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"chat-container",children:A}),(0,h.jsx)("div",{ref:j}),(0,h.jsx)("div",{className:"message-box",children:(0,h.jsxs)("form",{style:{display:"flex",alignItems:"center"},children:[(0,h.jsxs)("div",{style:{backgroundColor:t.palette.primary.main},className:"message-content",children:[(0,h.jsxs)("div",{className:"emoji",children:[(0,h.jsx)(r.A,{className:"emo",onClick:e=>{u((e=>!e))}}),(0,h.jsx)("div",{className:"piker",children:(0,h.jsx)(l.Ay,{style:{height:"350px",width:"300px"},open:p,onEmojiClick:function(e){v((s=>({...s,text:s.text+e.emoji}))),u(!1)}})})]}),(0,h.jsx)("input",{type:"text",name:"text",placeholder:"message",value:g.text,onChange:e=>{v({...g,text:e.target.value})}}),(0,h.jsx)(i.A,{}),(0,h.jsx)(a.A,{})]}),(0,h.jsx)("button",{onClick:e=>{!function(e,s){e.preventDefault(),f((0,o.tj)(s)),v({...g,text:""})}(e,g)},style:{marginLeft:"1rem"},className:"micro",children:(0,h.jsx)(n.A,{})})]})})]})})}var p=t(388),u=t(9484);const g=t.p+"static/media/about-coach.dff9558d0b5588f14857.jpg";var v=t(5866);const y=(0,c.memo)((e=>{let{chat:s}=e;const t=(0,d.wA)();return(0,h.jsxs)("div",{onClick:()=>{t((0,v.ly)(s.id)),t((0,v.zj)())},className:"chat-box",id:"Msg",children:[(0,h.jsx)("div",{className:"chat-img",children:(0,h.jsx)("img",{src:g,alt:""})}),(0,h.jsxs)("div",{className:"chat-details",children:[(0,h.jsxs)("div",{className:"chat-title",children:[(0,h.jsx)("h3",{children:s.f_name}),(0,h.jsx)("span",{children:"06:04 PM"})]}),(0,h.jsxs)("div",{className:"chat-msg",children:[(0,h.jsx)("p",{children:s.lastMessage}),(0,h.jsx)("span",{children:"1"})]})]})]})}));var f=t(8185),b=t(1088);function C(){const e=Array(5).fill(0).map(((e,s)=>(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",marginLeft:"1rem"},children:[(0,h.jsx)(b.A,{spacing:1,style:{marginRight:"2rem",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,h.jsx)(f.A,{variant:"rounded",sx:{borderRadius:"50%"},width:50,height:50})}),(0,h.jsxs)(b.A,{spacing:1,style:{flex:"1"},children:[(0,h.jsx)(f.A,{variant:"text",width:150,sx:{fontSize:"1rem"}}),(0,h.jsx)(f.A,{variant:"text",width:150,sx:{fontSize:"1rem"}})]})]},s)));return(0,h.jsx)("div",{style:{display:"flex",gap:"2rem",flexDirection:"column"},children:e})}function A(){return(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",marginLeft:"1rem"},children:[(0,h.jsx)(b.A,{spacing:1,style:{marginRight:"2rem",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,h.jsx)(f.A,{variant:"rounded",sx:{borderRadius:"50%"},width:50,height:50})}),(0,h.jsxs)(b.A,{spacing:1,style:{flex:"1"},children:[(0,h.jsx)(f.A,{variant:"text",width:150,sx:{fontSize:"1rem"}}),(0,h.jsx)(f.A,{variant:"text",width:150,sx:{fontSize:"1rem"}})]})]})}function N(e){let{loading:s,error:t="",children:a,type:i}=e;const r={chat:C,headerChat:A}[i];return"pending"===s?(0,h.jsx)(r,{}):"failed"===s?"error":(0,h.jsx)(h.Fragment,{children:a})}var k=t(7488),w=t(2567),M=t(3438);const S=(0,c.memo)((()=>{const e=(0,x.u)(),s=(0,d.wA)(),{myChats:t,loading:a}=(0,d.d4)((e=>e.chat)),{value:i,open:r}=(0,d.d4)((e=>e.mode)),[n,l]=(0,c.useState)(""),m=(n?t.filter((e=>e.f_name.toLowerCase().includes(n.toLowerCase()))):t).map((e=>(0,h.jsx)(y,{chat:e},e.id)));(0,c.useEffect)((()=>{s((0,o.V7)())}),[s]);const j=(0,c.useCallback)((e=>{l(e.target.value)}),[]),g="light"===i?"dark":"light";return(0,h.jsxs)("div",{style:{backgroundColor:e.palette.primary.main},className:r?"right-side open":"right-side",children:[(0,h.jsx)("div",{className:"before"}),(0,h.jsx)("div",{style:{backgroundColor:e.palette.primary.main},className:"header-container",children:(0,h.jsxs)("div",{className:"chat_header",children:[(0,h.jsx)("div",{className:"toggle-button",onClick:()=>{s((0,v.w9)(g))},children:"light"===i?(0,h.jsx)(k.A,{}):(0,h.jsx)(w.A,{})}),(0,h.jsxs)("div",{className:"dark"===i?"dark search-box":"light search-box",children:[(0,h.jsx)(u.A,{}),(0,h.jsx)("input",{value:n,onChange:j,type:"text",placeholder:"Search"})]}),(0,h.jsx)(M.A,{className:"close",onClick:()=>{s((0,v.vK)())}})]})}),(0,h.jsx)("div",{className:"body-container",children:(0,h.jsx)("div",{className:"chat-list",children:(0,h.jsx)(N,{loading:a,type:"chat",children:m})})}),(0,h.jsx)("div",{className:"pen",children:(0,h.jsx)(p.A,{})})]})}));var _=t(9974),H=t(694),z=t(3887);const I=()=>{const e=(0,z.Ay)("p")((e=>{let{theme:s}=e;return{backgroundColor:s.palette.primary.secondy}})),s=(0,z.Ay)("h3")((e=>{let{theme:s}=e;return{color:s.palette.primary.light}})),t=(0,z.Ay)("a")((e=>{let{theme:s}=e;return{backgroundColor:s.palette.primary.secondy}})),a=(0,z.Ay)("header")((e=>{let{theme:s}=e;return{color:"#fff",backgroundColor:s.palette.primary.main}})),i=(0,z.Ay)("div")((e=>{let{theme:s}=e;return{backgroundColor:s.palette.primary.main}})),r=(0,z.Ay)("h1")((e=>{let{theme:s}=e;return{color:s.palette.primary.title}})),n=(0,z.Ay)("p")((e=>{let{theme:s}=e;return{color:s.palette.primary.contrastText}}));return{MyComponentDivHeader:i,MyComponentContainerLoader:(0,z.Ay)("div")((e=>{let{theme:s}=e;return{background:s.palette.primary.bg}})),MyComponentHeroSubtitleH3:s,MyComponentHeroSubtitle:e,MyComponentHeader:a,MyComponentTitle:r,MyComponentTextP:n,MyComponentHeroSubtitleA:t}};function L(){const{MyComponentDivHeader:e}=I(),{params:s}=(0,d.d4)((e=>e.mode)),t=(0,d.wA)(),{myChat:a,loading3:i}=(0,d.d4)((e=>e.chat));(0,c.useEffect)((()=>{t((0,o.KP)(s))}),[t,s]);const{value:r}=(0,d.d4)((e=>e.mode));return(0,h.jsxs)("main",{className:"chat",children:[(0,h.jsx)(S,{}),(0,h.jsx)("section",{className:"light"===r?"chat_content light":"chat_content dark",children:(0,h.jsxs)("div",{className:"chat_container",id:"chatBox",children:[(0,h.jsxs)(e,{className:"content-header",children:[(0,h.jsx)(H.A,{className:"barsChat",onClick:()=>{t((0,v.vK)())},style:{fontSize:"3rem"}}),(0,h.jsxs)(N,{loading:i,type:"headerChat",children:[(0,h.jsx)("div",{className:"image",children:(0,h.jsx)("img",{src:g,alt:""})}),(0,h.jsxs)("div",{className:"details",children:[(0,h.jsx)("h3",{children:a.f_name}),(0,h.jsx)("span",{children:"last seen 10 minutes ago"})]})]}),(0,h.jsxs)("div",{className:"icons",children:[(0,h.jsx)(_.A,{}),(0,h.jsx)(u.A,{})]})]}),(0,h.jsx)(j,{id:s})]})})]})}}}]);
//# sourceMappingURL=137.539e6077.chunk.js.map