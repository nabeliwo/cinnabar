!function(e){function t(t){for(var n,o,i=t[0],c=t[1],s=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&d.push(l[o][0]),l[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(p&&p(t);d.length;)d.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==l[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},l={0:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var p=c;r.push([18,1]),a()}({18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),o=a.n(r),i=a(1),c=a(6),s=a.n(c);const p={xxs:8,xs:16,s:24,m:32,l:40,xl:48,xxl:56},u={s:11,m:14,l:18,xl:24},d="#fafafa",m="#1491c1",b=(e,t)=>{const[a,l]=Object(n.useState)(!1),[r,o]=Object(n.useState)(0),[i,c]=Object(n.useState)(-1),s=Object(n.useCallback)(()=>{a||o(setInterval(()=>{c(t=>t===e-1?0:t+1)},t))},[a,e,t]),p=()=>{l(!1),clearInterval(r),c(-1),o(0)};return{step:i,stop:p,toggle:()=>{a?p():a||(clearInterval(r),s(),l(!0))},active:a}},x={8:"8",16:"16",32:"32"};const f=["arp_1","arp_2","arp_3","arp_4","crash_1","crash_2","hihat_1","hihat_2","hihat_3","hihat_4","hihat_5","hihat_6","hihat_7","kick_1","kick_2","kick_3","kick_4","kick_5","kick_6","kick_7","kick_8","kick_9","kick_10","kick_11","kick_12","openhat_1","openhat_2","openhat_3","openhat_4","openhat_5","openhat_6","openhat_7","parc_1","parc_2","parc_3","parc_4","parc_5","parc_6","parc_7","parc_8","parc_9","parc_10","parc_11","parc_12","pulse_1","pulse_2","pulse_3","pulse_4","pulse_5","pulse_6","pulse_7","pulse_8","pulse_9","pulse_10","sfx_1","sfx_2","sfx_3","sfx_4","snare_1","snare_2","snare_3","snare_4","snare_5","snare_6"].map(e=>({name:e,path:`/assets/audio/${e}.wav`,element:null})),h=["crash_1","hihat_2","snare_3","kick_4"],g=e=>{const t=[],a=document.getElementById("audios");if(a){for(;a.lastChild;)a.removeChild(a.lastChild);return e.forEach(({name:e,path:n},l)=>{const r=document.createElement("audio");r.id=`audio-${e}-${l}`,r.src=n,a.appendChild(r),t.push({name:e,path:n,element:r})}),t}};var v=a(10);const _=({width:e,value:t,options:a,onChange:n})=>l.a.createElement($,{width:e},l.a.createElement(k,null,l.a.createElement(v.a,{size:13,color:m})),l.a.createElement(E,{value:t,onChange:e=>n(e.currentTarget.value)},a.map(e=>l.a.createElement("option",{key:e.value,value:e.value},e.label)))),$=i.default.div`
  ${({width:e})=>i.css`
    position: relative;
    width: ${e}px;
  `}
`,E=i.default.select`
  position: relative;
  width: 100%;
  padding: 3px ${p.xxs}px;
  padding-right: ${p.s}px;
  border-radius: 4px;
  border: 1px solid ${m};
  background-color: transparent;
  font-size: ${u.s}px;
  color: ${m};
  outline: none;
  box-sizing: border-box;
  appearance: none;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0 0 3px 2px ${m};
  }
`,k=i.default.span`
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translateY(-50%);
`,y=({currentStep:e,stepIndex:t,resourceIndex:a,cellSize:r,playAudio:o})=>{const[i,c]=Object(n.useState)(!1),s=Object(n.useCallback)(()=>{c(!i)},[i]);return e===t&&i&&o(a),l.a.createElement(w,{className:i?"active":"",cellSize:r,onClick:s})},w=i.default.div`
  ${({cellSize:e})=>i.css`
    width: ${e}px;
    height: ${e}px;
    border-radius: 4px;
    border: 1px solid ${m};
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 3px 2px ${m};
    }

    &.active {
      background-color: #0087ff;
      box-shadow: 0 0 12px 0 rgba(0, 135, 255, 0.8);
    }
  `}
`,j=[{value:"",label:"select"},...f.map(e=>({value:e.name,label:e.name}))],O=({beatNum:e,step:t,audios:a,playAudio:n,selectAudio:r,addAudio:o})=>l.a.createElement(C,{allSteps:4*e},l.a.createElement(S,null,l.a.createElement(z,null,a.map((e,t)=>l.a.createElement("li",{key:`resource-${t}-${e.name}`},l.a.createElement(_,{width:72,value:e.name,options:j,onChange:e=>r(e,t)})))),l.a.createElement(B,null,l.a.createElement(N,{onClick:o},"＋"))),l.a.createElement(P,null,t>=0&&l.a.createElement(A,{step:t}),l.a.createElement(I,{part:1,beat:e}),l.a.createElement(I,{part:2,beat:e}),l.a.createElement(I,{part:3,beat:e}),l.a.createElement(M,null,a.map((a,r)=>l.a.createElement("li",{key:`sequence-${r}-${a.name}`},[...Array(4*e)].map((e,o)=>l.a.createElement(T,{key:`sequence-${r}-${a.name}-${o}`},l.a.createElement(y,{currentStep:t,stepIndex:o,resourceIndex:r,cellSize:20,playAudio:n})))))))),C=i.default.div`
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  padding: ${p.xs}px;

  ${({allSteps:e})=>i.css`
    position: relative;
    width: ${20*e+8*(e-1)+72+p.xs}px;
  `}
`,S=i.default.div`
  padding-right: ${p.xs}px;
`,z=i.default.ul`
  > li:not(:first-child) {
    margin-top: ${8}px;
  }
`,B=i.default.div`
  display: flex;
  justify-content: center;
  margin-top: ${p.xs}px;
`,N=i.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 1px 0 0 1px;
  border-radius: 50%;
  background-color: ${m};
  color: ${d};
  font-size: ${u.l}px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 0 3px 2px ${m};
  }
`,P=i.default.div`
  position: relative;
`,A=i.default.div`
  ${({step:e})=>i.css`
    opacity: 0.3;
    position: absolute;
    top: -${4}px;
    left: ${28*e-4}px;
    width: ${28}px;
    height: calc(100% + ${8}px);
    background-color: #fff;
  `}
`,I=i.default.div`
  ${({part:e,beat:t})=>i.css`
    position: absolute;
    top: -${4}px;
    left: ${20*e*t+8*(e*t-1)+4}px;
    opacity: 0.4;
    width: 1px;
    height: calc(100% + ${8}px);
    background-color: #fff;
    content: '';
  `}
`,M=i.default.ul`
  > li {
    display: inline-block;
    margin: 0 -${4}px;

    &:not(:first-child) {
      margin-top: ${8}px;
    }
  }
`,T=i.default.div`
  display: inline-block;
  margin: 0 ${4}px;
`,F=({beat:e,step:t,stop:a})=>{const[r,o]=Object(n.useState)([]),i=Object(n.useCallback)(e=>{const t=r[e];t&&t.element&&(t.element.pause(),t.element.currentTime=0,t.element.play())},[r]),c=Object(n.useCallback)((e,t)=>{const n=f.find(t=>t.name===e);if(!n)return;a();const l=r.map((e,a)=>a===t?n:e),i=g(l);i&&o(i)},[r,a]),s=Object(n.useCallback)(()=>{o([...r,{name:"",path:"",element:null}])},[r]);return Object(n.useEffect)(()=>{const e=g(h.map(e=>f.find(t=>t.name===e)).filter(e=>e));e&&o(e)},[]),l.a.createElement(O,{beatNum:Number(e),step:t,audios:r,playAudio:i,selectAudio:c,addAudio:s})},H=i.default.ul`
  display: flex;
  align-items: center;

  > li:not(:first-child) {
    margin-left: ${p.xs}px;
  }
`,q=i.default.div`
  display: flex;
  align-items: center;
`,G=i.default.div`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
`,J=i.default.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:hover + span,
  &:focus + span {
    box-shadow: 0 0 3px 2px ${m};
  }

  &:checked + span::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${m};
    transform: translate(-50%, -50%);
    content: '';
    pointer-events: none;
  }
`,L=i.default.span`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid ${m};
  box-sizing: border-box;
`,K=i.default.label`
  padding-left: ${p.xxs}px;
  font-size: ${u.m}px;
  cursor: pointer;
`,R=i.default.input`
  padding: 4px ${p.xxs}px;
  border-radius: 4px;
  border: 1px solid ${m};
  font-size: ${u.m}px;

  &:hover,
  &:focus {
    box-shadow: 0 0 3px 2px ${m};
  }
`,W=({beat:e,setBeat:t,bpm:a,setBpm:n,active:r,toggle:o})=>l.a.createElement(Y,null,l.a.createElement(X,null,l.a.createElement("li",null,l.a.createElement(D,null,l.a.createElement(Q,{onClick:o},r?l.a.createElement(V,null):l.a.createElement(U,null)))),l.a.createElement("li",null,l.a.createElement(Z,null,"Beat"),l.a.createElement(ee,{id:"beat-controll",radios:[{value:x[8],label:x[8]},{value:x[16],label:x[16]},{value:x[32],label:x[32]}],value:e,onChange:t})),l.a.createElement("li",null,l.a.createElement(Z,null,"BPM"),l.a.createElement(te,{type:"number",value:a,onChange:e=>n(e)})))),Y=i.default.div`
  padding: ${p.xs}px;
  border-radius: 4px;
  background-color: #28282c;
`,D=i.default.div`
  padding: 6px 0;
`,Q=i.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${m};
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 3px 2px ${m};
  }
`,U=i.default.div`
  margin-left: 3px;
  border: 8px solid transparent;
  border-right: 0;
  border-left: 14px solid ${m};
`,V=i.default.div`
  width: 16px;
  height: 16px;
  background-color: ${m};
`,X=i.default.ul`
  display: flex;
  align-items: flex-start;

  > li:not(:first-child) {
    margin-left: ${p.s}px;
  }
`,Z=i.default.p`
  margin-bottom: ${p.xxs}px;
  font-size: ${u.l}px;
`,ee=Object(i.default)(({id:e,radios:t,value:a,className:n="",onChange:r})=>l.a.createElement(H,{className:n},t.map(t=>{const n=`${e}-radio-group-${t.value}`;return l.a.createElement("li",{key:n},l.a.createElement(q,null,l.a.createElement(G,null,l.a.createElement(J,{id:n,type:"radio",value:t.value,checked:a===t.value,onChange:e=>r(e.currentTarget.value)}),l.a.createElement(L,null)),l.a.createElement(K,{htmlFor:n},t.value)))})))`
  padding-top: 6px;
`,te=Object(i.default)(({type:e,value:t,className:a="",onChange:n})=>l.a.createElement(R,{className:a,type:e,value:t,onChange:e=>n(e.currentTarget.value)}))`
  width: 40px;
`,ae=({step:e,beat:t,setBeat:a,bpm:n,setBpm:r,active:o,toggle:i,stop:c})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{beat:t,step:e,stop:c}),l.a.createElement(ne,null,l.a.createElement(W,{beat:t,setBeat:a,bpm:n,setBpm:r,active:o,toggle:i}))),ne=i.default.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${p.xs}px;
  box-sizing: border-box;
`,le=()=>{const[e,t]=Object(n.useState)(120),[a,r]=Object(n.useState)(x[8]),o=Number(a),{step:i,stop:c,toggle:s,active:p}=b(4*o,((e,t)=>60/e*(4/t)*1e3)(e,o));((e,t,a=window)=>{const l=Object(n.useRef)();Object(n.useEffect)(()=>{l.current=t},[t]),Object(n.useEffect)(()=>{const t=e=>{l.current&&l.current(e)};return a.addEventListener(e,t),()=>{a.removeEventListener(e,t)}},[e,a])})("keydown",Object(n.useCallback)(e=>{32===e.keyCode&&s()},[s]));return l.a.createElement(ae,{step:i,beat:a,setBeat:e=>{!function(e){if(!Object.values(x).includes(e))throw new Error(`Expected 'value' to be beatEnum('8' or '16' or '32'), but received ${e}`)}(e),r(e),c()},bpm:e,setBpm:e=>{const a=Number(e);a>0&&(t(a),c())},active:p,toggle:s,stop:c})},re=i.createGlobalStyle`
  ${s.a}

  html {
    font-size: 62.5%;
  }
  body {
    min-height: 100vh;
    background-color: #010101;
    color: ${d};
    word-wrap: break-word;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, 'メイリオ', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    vertical-align: middle;
  }
  input, button, textarea {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    background-color: inherit;
    color: inherit;
  }
`;var oe;oe=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(re,null),l.a.createElement(le,null)),o.a.render(l.a.createElement(oe,null),document.getElementById("root"))}});