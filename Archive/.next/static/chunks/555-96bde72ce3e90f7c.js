(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[555],{2555:function(e,t,a){"use strict";var r=a(5893),o=a(6879),s=a(1163),i=a(7294),n=a(8182),l=a(7346),d=a(5005),c=a(6501),u=a(9252),p=a.n(u);let m=()=>{let[e,{isError:t,isLoading:a,isSuccess:u}]=(0,o.fv)(),m=(0,s.useRouter)(),[f,h]=(0,i.useState)({firstname:"",lastname:"",email:"",number:"",edulevel:"",course:""}),{firstname:g,lastname:y,email:b,number:x,edulevel:v,course:w}=f;(0,i.useEffect)(()=>{t&&c.Am.error(t),u&&(c.Am.success("Submitted Successfully"),m.push("/"))});let j=t=>{t.preventDefault();let a={firstname:g,lastname:y,email:b,number:x,edulevel:v,course:w};console.log(a),e(a)},C=e=>{h({...f,[e.target.name]:e.target.value})};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:{width:"100%"},children:(0,r.jsxs)(n.Z,{children:[(0,r.jsxs)("div",{className:p().contentContainer,children:[(0,r.jsx)("h5",{children:"Interested in studying abroad?"}),(0,r.jsx)("h6",{children:"Fill in your details and we’ll call you back!"})]}),(0,r.jsx)("div",{className:p().formcontainer,children:(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)("div",{className:p().basicForm,children:[(0,r.jsx)(l.Z.Control,{type:"text",placeholder:"FirstName",name:"firstname",value:g,onChange:C}),(0,r.jsx)(l.Z.Control,{type:"text",placeholder:"LastName",name:"lastname",value:y,onChange:C})]}),(0,r.jsx)("div",{className:"my-2",children:(0,r.jsx)(l.Z.Control,{type:"email",placeholder:"Email Address",name:"email",value:b,onChange:C})}),(0,r.jsx)("div",{className:"my-2",children:(0,r.jsx)(l.Z.Control,{type:"number",placeholder:"Mobile Number",name:"number",value:x,onChange:C})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z.Label,{htmlFor:"disabledTextInput",children:"Education Level"}),(0,r.jsx)(l.Z.Control,{type:"text",placeholder:"Education level",name:"edulevel",value:v,onChange:C})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z.Label,{htmlFor:"disabledTextInput",children:"Course"}),(0,r.jsx)(l.Z.Control,{type:"string",placeholder:"Course",name:"course",value:w,onChange:C})]})]})}),(0,r.jsx)("div",{className:p().buttonContainer,children:(0,r.jsx)(d.Z,{onClick:j,children:"Help Me Study Abroad"})})]})})})};t.Z=m},9252:function(e){e.exports={contentContainer:"HomeForm_contentContainer__Ov4vQ",basicForm:"HomeForm_basicForm__w_MSA",formcontainer:"HomeForm_formcontainer__vBlNy",buttonContainer:"HomeForm_buttonContainer__7KSIU"}},8182:function(e,t,a){"use strict";a.d(t,{Z:function(){return C}});var r=a(4184),o=a.n(r),s=a(7294),i=a(6792),n=a(6611),l=a(9602),d=a(5893);let c=s.forwardRef(({bsPrefix:e,className:t,variant:a,as:r="img",...s},n)=>{let l=(0,i.vE)(e,"card-img");return(0,d.jsx)(r,{ref:n,className:o()(a?`${l}-${a}`:l,t),...s})});c.displayName="CardImg";var u=a(9059);let p=s.forwardRef(({bsPrefix:e,className:t,as:a="div",...r},n)=>{let l=(0,i.vE)(e,"card-header"),c=(0,s.useMemo)(()=>({cardHeaderBsPrefix:l}),[l]);return(0,d.jsx)(u.Z.Provider,{value:c,children:(0,d.jsx)(a,{ref:n,...r,className:o()(t,l)})})});p.displayName="CardHeader";let m=(0,l.Z)("h5"),f=(0,l.Z)("h6"),h=(0,n.Z)("card-body"),g=(0,n.Z)("card-title",{Component:m}),y=(0,n.Z)("card-subtitle",{Component:f}),b=(0,n.Z)("card-link",{Component:"a"}),x=(0,n.Z)("card-text",{Component:"p"}),v=(0,n.Z)("card-footer"),w=(0,n.Z)("card-img-overlay"),j=s.forwardRef(({bsPrefix:e,className:t,bg:a,text:r,border:s,body:n,children:l,as:c="div",...u},p)=>{let m=(0,i.vE)(e,"card");return(0,d.jsx)(c,{ref:p,...u,className:o()(t,m,a&&`bg-${a}`,r&&`text-${r}`,s&&`border-${s}`),children:n?(0,d.jsx)(h,{children:l}):l})});j.displayName="Card",j.defaultProps={body:!1};var C=Object.assign(j,{Img:c,Title:g,Subtitle:y,Body:h,Link:b,Text:x,Header:p,Footer:v,ImgOverlay:w})},6501:function(e,t,a){"use strict";let r,o;a.d(t,{x7:function(){return eo},Am:function(){return D}});var s,i=a(7294);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",r="",o="";for(let s in e){let i=e[s];"@"==s[0]?"i"==s[1]?a=s+" "+i+";":r+="f"==s[1]?p(i,s):s+"{"+p(i,"k"==s[1]?"":t)+"}":"object"==typeof i?r+=p(i,t?t.replace(/([^,])+/g,e=>s.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=i&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=p.p?p.p(s,i):s+":"+i+";")}return a+(t&&o?t+"{"+o+"}":o)+r},m={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},h=(e,t,a,r,o)=>{var s,i;let n=f(e),l=m[n]||(m[n]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(n));if(!m[l]){let t=n!==e?e:(e=>{let t,a,r=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);m[l]=p(o?{["@keyframes "+l]:t}:t,a?"":"."+l)}let h=a&&m.g?m.g:null;return a&&(m.g=m[l]),s=m[l],i=t,h?i.data=i.data.replace(h,s):-1===i.data.indexOf(s)&&(i.data=r?s+i.data:i.data+s),l},g=(e,t,a)=>e.reduce((e,r,o)=>{let s=t[o];if(s&&s.call){let e=s(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==s?"":s)},"");function y(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let b,x,v,w=y.bind({k:1});function j(e,t){let a=this||{};return function(){let r=arguments;function o(s,i){let n=Object.assign({},s),l=n.className||o.className;a.p=Object.assign({theme:x&&x()},n),a.o=/ *go\d+/.test(l),n.className=y.apply(a,r)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),b(d,n)}return t?t(o):o}}var C=e=>"function"==typeof e,E=(e,t)=>C(e)?e(t):e,N=(r=0,()=>(++r).toString()),k=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},Z=new Map,$=e=>{if(Z.has(e))return;let t=setTimeout(()=>{Z.delete(e),I({type:4,toastId:e})},1e3);Z.set(e,t)},_=e=>{let t=Z.get(e);t&&clearTimeout(t)},F=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&_(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?F(e,{type:1,toast:a}):F(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?$(r):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},O=[],A={toasts:[],pausedAt:void 0},I=e=>{A=F(A,e),O.forEach(e=>{e(A)})},H={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},P=(e={})=>{let[t,a]=(0,i.useState)(A);(0,i.useEffect)(()=>(O.push(a),()=>{let e=O.indexOf(a);e>-1&&O.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||H[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},S=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||N()}),z=e=>(t,a)=>{let r=S(t,e,a);return I({type:2,toast:r}),r.id},D=(e,t)=>z("blank")(e,t);D.error=z("error"),D.success=z("success"),D.loading=z("loading"),D.custom=z("custom"),D.dismiss=e=>{I({type:3,toastId:e})},D.remove=e=>I({type:4,toastId:e}),D.promise=(e,t,a)=>{let r=D.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(D.success(E(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{D.error(E(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var M=(e,t)=>{I({type:1,toast:{id:e,height:t}})},T=()=>{I({type:5,time:Date.now()})},L=e=>{let{toasts:t,pausedAt:a}=P(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&D.dismiss(t.id);return}return setTimeout(()=>D.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,i.useCallback)(()=>{a&&I({type:6,time:Date.now()})},[a]),o=(0,i.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:s}=a||{},i=t.filter(t=>(t.position||s)===(e.position||s)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:T,endPause:r,calculateOffset:o}}},R=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,U=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,q=j("div")`
  position: absolute;
`,K=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Y=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(Q,null,t):t:"blank"===a?null:i.createElement(K,null,i.createElement(B,{...r}),"loading"!==a&&i.createElement(q,null,"error"===a?i.createElement(R,{...r}):i.createElement(U,{...r})))},G=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,J=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,V=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,W=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let a=e.includes("top")?1:-1,[r,o]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(a),J(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:a,children:r})=>{let o=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},s=i.createElement(Y,{toast:e}),n=i.createElement(W,{...e.ariaProps},E(e.message,e));return i.createElement(V,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof r?r({icon:s,message:n}):i.createElement(i.Fragment,null,s,n))});s=i.createElement,p.p=void 0,b=s,x=void 0,v=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:o})=>{let s=i.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return i.createElement("div",{ref:s,className:t,style:a},o)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eo=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:o,containerStyle:s,containerClassName:n})=>{let{toasts:l,handlers:d}=L(a);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(a=>{let s=a.position||t,n=ea(s,d.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return i.createElement(et,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?er:"",style:n},"custom"===a.type?E(a.message,a):o?o(a):i.createElement(ee,{toast:a,position:s}))}))}}}]);