(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(8),s=n.n(i),a=(n(14),n(9)),l=n(6),o=n(3),d=n(2),u=n.n(d),j=function(e){return Math.floor(Math.random()*e)};var b={Cube:[{y:0,x:0},{y:1,x:0},{y:1,x:1},{y:0,x:1}],Line:[{y:0,x:0},{y:0,x:1},{y:0,x:2},{y:0,x:3}],T:[{y:0,x:0},{y:0,x:1},{y:0,x:2},{y:1,x:1}],L:[{y:0,x:0},{y:1,x:0},{y:1,x:1},{y:1,x:2}],l2:[{y:0,x:0},{y:1,x:0},{y:1,x:1},{y:1,x:2}],Z:[{y:0,x:0},{y:0,x:1},{y:1,x:1},{y:1,x:2}],Z2:[{y:1,x:0},{y:1,x:1},{y:0,x:1},{y:0,x:2}],U:[{y:1,x:0},{y:0,x:0},{y:0,x:1},{y:0,x:2},{y:1,x:2}]},h={0:"green",1:"blue",2:"yellow",3:"red"},x=function(e){return{width:e.reduce((function(e,t){return e.add(t.x)}),new Set).size,height:e.reduce((function(e,t){return e.add(t.y)}),new Set).size}},f=function(e,t,n){return n.map((function(n){return{y:e-n.y,x:t+n.x}})).filter((function(e){return e.y>=0&&e.x>=0}))},p=function(e){var t=x(e),n=t.width,r=t.height,c=Math.max(n,r),i=new Array(c).fill(null).map((function(){return new Array(c).fill(null).map((function(){return!1}))}));return e.forEach((function(e){return i[e.y][e.x]=!0})),i.reverse()},y=n(0),O=function(e){var t=e.config,n=e.setBlocks,c=e.isFreeBlocks,i=e.onLose,s=e.active,a=Object(r.useState)({array:[],color:""}),l=Object(o.a)(a,2),d=l[0],O=l[1];return Object(r.useEffect)((function(){var e=function(e){var t=Array.from(e);return b[t[j(t.length)]]}(t.blocks),r=h[j(Object.values(h).length)],a=document.querySelector(".animate");if(a){if(s&&e){var l,o=x(e),d=o.width,u=o.height,y=t.size/t.step,v=(l=t.columns-1-d,Math.floor(Math.random()*l)+1),m=0,k=0,w=0;a.style.left=v*t.size+"px",O({array:p(e),color:r});var g=function(n){if(m>0)switch(n.key){case"ArrowLeft":v>0&&c(f(m,v-1,e))&&(w+5>y||c(f(m-1,v-1,e)))&&(v-=1);break;case"ArrowRight":v+x(e).width<t.columns&&c(f(m,v+1,e))&&(w+5>y||c(f(m-1,v+1,e)))&&(v+=1);break;case"ArrowUp":var r=function(e){var t=function(e){e=e.map((function(e){return e.reverse()}));for(var t=0;t<e.length;t++)for(var n=0;n<t;n++){var r=e[t][n];e[t][n]=e[n][t],e[n][t]=r}return e.filter((function(e){return!e.every((function(e){return!1===e}))})),e}(p(e)),n=[];t.reverse().forEach((function(e,t){return e.forEach((function(e,r){return e?n.push({y:t,x:r}):void 0}))}));var r=[],c=[];for(n.forEach((function(e){r.push(e.x),c.push(e.y)}));r.every((function(e){return e>0}));)n.forEach((function(e){return e.x=e.x-1})),r=r.map((function(e){return e-1}));for(;c.every((function(e){return e>0}));)n.forEach((function(e){return e.y=e.y-1})),r=r.map((function(e){return e-1}));return n}(e);v+x(r).width<=t.columns&&c(f(m,v,r))&&c(f(m-1,v,r))&&(e=r);break;case"ArrowDown":k+=5*t.step,w+=5;break;case" ":for(;m+1<t.rows&&c(f(m+1,v,e));)m+=1}},C=setInterval((function(){a&&(k+=t.step,++w>y&&(m<t.rows-1&&c(f(m+1,v,e))?k=(m+=1)*t.size:(k=-200,n(f(m,v,e),r),m<u&&i()),w=0),a.style.left=v*t.size+"px",a.style.top=k+"px",O({array:p(e),color:r}))}),t.interval);return window.addEventListener("keydown",g),function(){window.removeEventListener("keydown",g),C&&clearInterval(C)}}a.style.top="-200px"}}),[s,t,n]),Object(y.jsx)("div",{className:"animate",children:Object(y.jsx)("div",{children:d.array.map((function(e){return Object(y.jsx)(v,{row:e,color:d.color},u()())}))})})},v=function(e){var t=e.row,n=e.color;return Object(y.jsx)("div",{className:"r",children:t.map((function(e){return e?Object(y.jsx)(m,{color:n},u()()):Object(y.jsx)(k,{},u()())}))})},m=function(e){var t=e.color;return Object(y.jsx)("div",{className:"square "+t})},k=function(){return Object(y.jsx)("div",{className:"offset"})},w=function(e){var t=e.active,n=e.selectSpeedHandler,r=e.selectBlocksHandler;return Object(y.jsxs)("div",{className:"sidebar",children:[Object(y.jsxs)("div",{className:"info",children:[Object(y.jsx)("h5",{children:"Info"}),Object(y.jsx)("p",{children:"Arrow left/right : control"}),Object(y.jsx)("p",{children:"Enter : flip"}),Object(y.jsx)("p",{children:"Arrow down : speed"}),Object(y.jsx)("p",{children:"Space : set now"})]}),Object(y.jsxs)("div",{className:"settings",children:[Object(y.jsx)("h5",{children:"Settings"}),Object(y.jsxs)("div",{className:"speed-settings",children:[Object(y.jsx)("div",{children:"Speed : "}),Object(y.jsx)("input",{type:"radio",name:"speed-set",id:"speed1",value:"1",disabled:t,onChange:n}),Object(y.jsx)("label",{htmlFor:"speed1",children:"1"}),Object(y.jsx)("input",{type:"radio",name:"speed-set",id:"speed2",value:"2",disabled:t,onChange:n}),Object(y.jsx)("label",{htmlFor:"speed2",children:"2"}),Object(y.jsx)("input",{type:"radio",name:"speed-set",id:"speed3",value:"3",defaultChecked:!0,disabled:t,onChange:n}),Object(y.jsx)("label",{htmlFor:"speed3",children:"3"}),Object(y.jsx)("input",{type:"radio",name:"speed-set",id:"speed4",value:"4",disabled:t,onChange:n}),Object(y.jsx)("label",{htmlFor:"speed4",children:"4"}),Object(y.jsx)("input",{type:"radio",name:"speed-set",id:"speed5",value:"5",disabled:t,onChange:n}),Object(y.jsx)("label",{htmlFor:"speed5",children:"5"})]}),Object(y.jsxs)("div",{className:"blocks-settings",children:[Object(y.jsx)("div",{children:"Blocks :"}),Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"checkbox",id:"cube",name:"Cube",onChange:r,defaultChecked:!0,disabled:t}),Object(y.jsx)("label",{htmlFor:"cube",children:"Cube"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"checkbox",id:"line",name:"Line",onChange:r,defaultChecked:!0,disabled:t}),Object(y.jsx)("label",{htmlFor:"line",children:"Line"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"checkbox",id:"t",name:"T",onChange:r,defaultChecked:!0,disabled:t}),Object(y.jsx)("label",{htmlFor:"t",children:'"T"'})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"checkbox",id:"l",name:"L",onChange:r,defaultChecked:!0,disabled:t}),Object(y.jsx)("label",{htmlFor:"l",children:'"L"'})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"checkbox",id:"l2",name:"L2",onChange:r,defaultChecked:!0,disabled:t}),Object(y.jsx)("label",{htmlFor:"l2",children:'"L" - 2'})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"checkbox",id:"z",name:"Z",onChange:r,defaultChecked:!0,disabled:t}),Object(y.jsx)("label",{htmlFor:"z",children:'"Z"'})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"checkbox",id:"z2",name:"Z2",onChange:r,defaultChecked:!0,disabled:t}),Object(y.jsx)("label",{htmlFor:"z2",children:'"Z" - 2'})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"checkbox",id:"u",name:"U",onChange:r,defaultChecked:!0,disabled:t}),Object(y.jsx)("label",{htmlFor:"u",children:'"U"'})]})]})]}),Object(y.jsxs)("div",{className:"Link",children:["GitHub - ",Object(y.jsx)("a",{href:"https://github.com/volodya0/tetris",children:"https://github.com/volodya0/tetris"})]})]})},g={rows:15,columns:10,size:40,interval:18,step:2,blocks:new Set(["Cube","Line","T","L","Z","U"])},C=function(){var e=Object(r.useState)(g),t=Object(o.a)(e,2),n=t[0],c=t[1],i=new Array(n.rows).fill(null).map((function(e){return new Array(n.columns).fill(null).map((function(){return{isFill:!1}}))})),s=Object(r.useState)(i),d=Object(o.a)(s,2),j=d[0],b=d[1],h=Object(r.useState)(!1),x=Object(o.a)(h,2),f=x[0],p=x[1],v=Object(r.useState)(0),m=Object(o.a)(v,2),k=m[0],C=m[1],N=function(e){var t=0,r=0;switch(e.target.value){case"1":r=1,t=16;break;case"2":r=1,t=12;break;case"3":r=2,t=18;break;case"4":r=2,t=14;break;case"5":r=2,t=10}c(Object(l.a)(Object(l.a)({},n),{},{step:r,interval:t}))},L=function(){p(!1),b(i),C(0)};return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)("div",{className:"game-container b",id:"game-container",children:[Object(y.jsx)("div",{className:"spawn-element b",children:Object(y.jsx)(O,{config:n,setBlocks:function(e,t){var r=0;b((function(c){for(e.forEach((function(e){var n=e.y,r=e.x;return c[n][r]={isFill:!0,color:t}})),c=c.filter((function(e){return!e.every((function(e){return e.isFill}))}));c.length<n.rows;)c.unshift(new Array(n.columns).fill(null).map((function(){return{isFill:!1}}))),r++;return Object(a.a)(c)})),C((function(e){return e+r}))},isFreeBlocks:function(e){return!!e.every((function(e){var t=e.y,n=e.x;return!1===j[t][n].isFill}))},onLose:function(){p(!1),alert("you score : "+k),L()},active:f})}),Object(y.jsx)("div",{children:j.map((function(e){return Object(y.jsx)(S,{row:e},u()())}))}),Object(y.jsx)("button",{onClick:function(){return p(!0)},children:"Start"}),Object(y.jsx)("button",{onClick:L,children:"Reset"}),Object(y.jsx)(F,{count:k})]}),Object(y.jsx)(w,{active:f,selectSpeedHandler:N,selectBlocksHandler:N})]})},F=function(e){var t=e.count;return Object(r.useEffect)((function(){var e=document.querySelector(".score");e&&(e.style.backgroundColor="gold"),setTimeout((function(){e&&(e.style.backgroundColor="transparent")}),1e3)}),[t]),Object(y.jsxs)("span",{className:"score",children:["Score ",t]})},S=function(e){var t=e.row;return Object(y.jsx)("div",{className:"g-row",children:t.map((function(e){return Object(y.jsx)(N,{field:e},u()())}))})},N=function(e){var t=e.field;return Object(y.jsx)("div",{className:t.isFill?"field fill "+t.color:"field empty"})};var L=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(C,{})})};s.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(L,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6e1b587e.chunk.js.map