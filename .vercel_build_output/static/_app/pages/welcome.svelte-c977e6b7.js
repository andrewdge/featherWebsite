import{S as Y,i as Z,s as ee,e as h,j as W,t as y,c as f,a as p,d as o,l as A,g as E,_ as K,b as i,f as F,E as s,J as te,F as Q,u as ae,$ as ne,O as se}from"../chunks/vendor-8bebd811.js";function le(D){let t;return{c(){t=y("Done!")},l(e){t=E(e,"Done!")},m(e,r){F(e,t,r)},d(e){e&&o(t)}}}function oe(D){let t;return{c(){t=y("Downloading...")},l(e){t=E(e,"Downloading...")},m(e,r){F(e,t,r)},d(e){e&&o(t)}}}function ie(D){let t;return{c(){t=y("Download Feather")},l(e){t=E(e,"Download Feather")},m(e,r){F(e,t,r)},d(e){e&&o(t)}}}function re(D){let t,e,r,u,_,n,V,v,l,a,g,w,I,B,x,O,b,P,k,$,G,T,X,S,R,q;function C(m,j){if(m[0]==="DOWNLOAD")return ie;if(m[0]==="DOWNLOADING")return oe;if(m[0]==="DONE")return le}let N=C(D),c=N&&N(D);return{c(){t=h("div"),e=h("div"),r=h("div"),u=W(),_=h("div"),n=y("Welcome to Feather!"),V=W(),v=h("div"),l=W(),a=h("div"),g=y("Thanks for signing up."),w=W(),I=h("div"),B=W(),x=h("div"),O=h("p"),b=h("span"),c&&c.c(),P=W(),k=h("span"),$=y("if you haven't already."),G=h("br"),T=y(" Or go to the app and login if it's already installed."),X=W(),S=h("div"),this.h()},l(m){t=f(m,"DIV",{id:!0,class:!0});var j=p(t);e=f(j,"DIV",{id:!0,class:!0});var d=p(e);r=f(d,"DIV",{style:!0}),p(r).forEach(o),u=A(d),_=f(d,"DIV",{id:!0,class:!0});var J=p(_);n=E(J,"Welcome to Feather!"),J.forEach(o),V=A(d),v=f(d,"DIV",{class:!0}),p(v).forEach(o),l=A(d),a=f(d,"DIV",{id:!0,class:!0});var U=p(a);g=E(U,"Thanks for signing up."),U.forEach(o),w=A(d),I=f(d,"DIV",{class:!0}),p(I).forEach(o),B=A(d),x=f(d,"DIV",{id:!0,class:!0});var z=p(x);O=f(z,"P",{class:!0});var L=p(O);b=f(L,"SPAN",{class:!0});var H=p(b);c&&c.l(H),H.forEach(o),P=A(L),k=f(L,"SPAN",{class:!0});var M=p(k);$=E(M,"if you haven't already."),G=f(M,"BR",{}),T=E(M," Or go to the app and login if it's already installed."),M.forEach(o),L.forEach(o),z.forEach(o),X=A(d),S=f(d,"DIV",{class:!0}),p(S).forEach(o),d.forEach(o),j.forEach(o),this.h()},h(){K(r,"width","100%"),K(r,"height","30px"),i(_,"id","welcome-head"),i(_,"class","svelte-vs3jv7"),i(v,"class","spacer text svelte-vs3jv7"),i(a,"id","thanks-head"),i(a,"class","svelte-vs3jv7"),i(I,"class","spacer text two svelte-vs3jv7"),i(b,"class","butt svelte-vs3jv7"),i(k,"class","trans svelte-vs3jv7"),i(O,"class","svelte-vs3jv7"),i(x,"id","download-head"),i(x,"class","svelte-vs3jv7"),i(S,"class","spacer text three svelte-vs3jv7"),i(e,"id","center-container"),i(e,"class","svelte-vs3jv7"),i(t,"id","welcome"),i(t,"class","svelte-vs3jv7")},m(m,j){F(m,t,j),s(t,e),s(e,r),s(e,u),s(e,_),s(_,n),s(e,V),s(e,v),s(e,l),s(e,a),s(a,g),s(e,w),s(e,I),s(e,B),s(e,x),s(x,O),s(O,b),c&&c.m(b,null),s(O,P),s(O,k),s(k,$),s(k,G),s(k,T),s(e,X),s(e,S),R||(q=te(b,"click",D[1].download),R=!0)},p(m,[j]){N!==(N=C(m))&&(c&&c.d(1),c=N&&N(m),c&&(c.c(),c.m(b,null)))},i:Q,o:Q,d(m){m&&o(t),c&&c.d(),R=!1,q()}}}function ce(D,t,e){let r,u,_,n={windows:"",mac:"",mac64:"",linux:""},V;ae(async()=>{console.log("This works: ",window.navigator.userAgent),u={Value:await window.navigator.userAgent,contains:function(a){return this.Value.indexOf(a)>=0},lacks:function(a){return this.Value.indexOf(a)<0},match:function(a){return this.Value.match(a)},matches:function(a){return this.Value.match(a)!=null}},_=()=>{let l=null;var a="(n/a)",g;switch(!0){case(u.contains("OS X")&&u.lacks("Android")):g=u.match(/OS X ((\d+[._])+\d+)\b/),a=g[1].replace(/_/g,"."),parseFloat(a)<10.15?l="Mac OS":l="Mac OS 64";break;case(u.contains("like Mac OS X")&&u.contains("iPhone")):l="iOS";break;case u.contains("Windows"):l="Windows";break;case(u.contains("Linux")&&u.lacks("Android")):l="Linux";break}return l},V=l=>{v.download(),fetch("https://api.github.com/repos/AO-Design-Inc/Feather-Releases/releases/latest").then(a=>a.json()).then(a=>{console.log("A",l);for(let g=0;g<a.assets.length;g++){let w=a.assets[g].browser_download_url;w.endsWith(".exe")===!0&&n.windows===""&&(n.windows=w),w.endsWith(".12.dmg")===!0&&n.mac===""&&(n.mac=w),w.endsWith("arm64.dmg")===!0&&n.mac64===""&&(n.mac64=w),w.endsWith(".AppImage")===!0&&n.linux===""&&(n.linux=w)}if(l==="Mac OS")return console.log("Downloading Mac Build",n.mac),window.open(n.mac,"download"),v.done(),n.mac;if(l==="Windows")return console.log("Downloading Windows Build",n.windows),window.open(n.windows,"download"),v.done(),n.windows;if(l==="Linux")return console.log("Downloading Linux Build",n.linux),window.open(n.linux,"download"),v.done(),n.linux;if(l==="Mac OS 64")return console.log("Downloading Mac 64 Build",n.mac64),window.open(n.mac64,"download"),v.done(),n.mac64}).catch(a=>console.log("Error: ",a))}});const v=ne("DOWNLOAD",{DOWNLOAD:{download:"DOWNLOADING"},DOWNLOADING:{_enter(){_(),V(_())},done:"DONE"},DONE:{_enter(){this.change.debounce(6e3)},change:"DOWNLOAD"}});return se(D,v,l=>e(0,r=l)),[r,v]}class ue extends Y{constructor(t){super();Z(this,t,ce,re,ee,{})}}export{ue as default};
