"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{3821:function(e,t,n){n.r(t);var r=n(7568),a=n(655),s=n(5893),o=n(7294),i=n(8562),c=n(8456),l=n(1931),u=n(2848),d=n(196),h=n(8969),m=n(2980),b=n(7998),p=n(7978),f=function(){var e,t=[{name:"Shiden",url:"wss://shiden.api.onfinality.io/public-ws",subscan_url:"https://shiden.subscan.io/account/"},{name:"Shibuya",url:"wss://rpc.shibuya.astar.network",subscan_url:"https://shibuya.subscan.io/account/"},{name:"Local",url:"ws://127.0.0.1:9944"},{name:"Custom",url:"wss://astar-collator.cielo.works:11443"},],f=(0,o.useState)(0),g=f[0],x=f[1],w=(0,o.useState)(""),v=w[0],S=w[1],j=(0,o.useState)(""),k=j[0],y=j[1],N=(0,o.useState)(""),C=N[0],E=N[1],_=(0,o.useState)(""),$=_[0],B=_[1],A=(0,o.useState)(""),P=A[0],F=A[1],I=(0,o.useState)([]),L=I[0],T=I[1],U=(0,o.useState)(""),O=U[0],R=U[1],Z=(0,o.useState)(),M=Z[0],W=Z[1],Y=(0,o.useState)(""),z=Y[0],q=Y[1],H=(0,o.useState)(""),D=H[0],V=H[1],G=(0,o.useState)(""),J=G[0],K=G[1],X=(0,o.useState)(""),Q=X[0],ee=X[1],et=(0,o.useState)(""),en=et[0],er=et[1],ea=(0,o.useState)(""),es=ea[0],eo=ea[1],ei=(0,o.useState)(""),ec=ei[0],el=ei[1],eu=(0,o.useState)(""),ed=eu[0],eh=eu[1],em=(0,o.useState)(""),eb=em[0],ep=em[1],ef=(0,o.useState)(""),eg=ef[0],ex=ef[1],ew=(0,o.useState)(""),ev=ew[0],eS=ew[1],ej=(0,o.useState)(""),ek=ej[0],ey=ej[1],eN=(0,o.useState)(""),eC=eN[0],eE=eN[1],e_=(e=(0,r.Z)(function(){var e,t,r,s,o;return(0,a.__generator)(this,function(r){switch(r.label){case 0:if(!k||!g)return alert("Please select Blockchain and click 'Set Blockchain' button."),[2];return[4,n.e(225).then(n.bind(n,9225))];case 1:return t=(e=r.sent()).web3Accounts,[4,(0,e.web3Enable)("Showcase PSP34 Mint Sample")];case 2:if(0===r.sent().length)return[2];return[4,t()];case 3:return T(o=r.sent()),O||R(o[0].address),[2]}})}),function(){return e.apply(this,arguments)});function e$(){return(e$=(0,r.Z)(function(){var e,t,n,r,s;return(0,a.__generator)(this,function(a){switch(a.label){case 0:if(!k||!g||0==L.length)return alert("Please select Blockchain and click 'Set Blockchain' button and click 'Set Account' button."),[2];return e=3e11,t=new l.vM(M,u,z),n=L.filter(function(e){return e.address===O}),[4,t.tx["Shiden34Contract::mint"]({gasLimit:e},O,{u64:D})];case 1:if(r=a.sent(),1!=L.length)return[3,3];return[4,(0,p.R0)(L[0].meta.source)];case 2:case 4:return s=a.sent(),[3,5];case 3:if(!(L.length>1))return[3,5];return[4,(0,p.R0)(n[0].meta.source)];case 5:return K(D),r.signAndSend(O,{signer:s.signer},function(e){var t=e.status;t.isInBlock?(console.log("Completed at block hash #".concat(t.asInBlock.toString())),eo("Completed at block hash #"+t.asInBlock.toString()),eB()):t.isFinalized?(console.log("finalized"),eo("finalized"),eB()):(console.log("Current status: ".concat(t.type)),eo("Current status: "+t.type.toString()))}).catch(function(e){console.log(":( transaction failed",e),eo(":( transaction failed: "+e.toString())}),[2]}})})).apply(this,arguments)}function eB(){return eA.apply(this,arguments)}function eA(){return(eA=(0,r.Z)(function(){var e,n,r,s,o,i,c,h,m;return(0,a.__generator)(this,function(e){switch(e.label){case 0:if(!k||!g)return alert("Please select Blockchain and click 'Set Blockchain' button."),[2];return[4,new l.vM(M,u,z).query["shiden34Trait::tokenUri"](z,{value:0,gasLimit:-1},{u64:D})];case 1:return r=(n=e.sent()).result,s=n.output,er(JSON.stringify(r.toHuman())),"Ok"===r.type?"Ok"===(o=s).type?(void 0!==(i=o.inner.toString())&&(el(i),d.Z.get(i).then(function(e){eh(e.data.image.toString()),ep(e.data.image.toString()),ex(e.data.name.toString()),eS(e.data.description.toString())})),"Shiden"===$||"Shibuya"===$?(ey((null===(c=t.filter(function(e){return e.name===$})[0])||void 0===c?void 0:c.subscan_url)+z),eE("Show on Subscan ("+$+")")):eE(""),function(){return eP.apply(this,arguments)}()):"Err"===o.type&&(el(o.inner.toString()),eh(""),ep(""),ex(o.inner.toString()),eS(""),ee("none (TokenNotExists)")):"Err"===r.type&&(el(""),eh(""),ep(""),ex(r.toString()),eS(""),ee("")),[2]}})})).apply(this,arguments)}function eP(){return(eP=(0,r.Z)(function(){var e,t,n,r,s;return(0,a.__generator)(this,function(t){switch(t.label){case 0:return[4,new l.vM(M,u,z).query["psp34::ownerOf"](z,{value:0,gasLimit:-1},{u64:D})];case 1:return(n=t.sent()).gasConsumed,n.result,(s=null===(e=null==(r=n.output)?void 0:r.toHuman())||void 0===e?void 0:e.toString())?ee(s):ee("none"),[2]}})})).apply(this,arguments)}(0,o.useEffect)(function(){});var eF,eI=(eF=(0,r.Z)(function(){var e,n,r,s,o,l;return(0,a.__generator)(this,function(a){switch(a.label){case 0:if(s=null===(e=(r=t.filter(function(e){return e.name===C}))[0])||void 0===e?void 0:e.url,y(null===(n=r[0])||void 0===n?void 0:n.url),!k)return[2];return o=new i.U(s),[4,c.G.create({provider:o})];case 1:return[4,(l=a.sent()).rpc.chain.subscribeNewHeads(function(e){W(l),B(C),x(e.number.toNumber()),S(e.hash.toString()),F(s),console.log(l.hasSubscriptions)})];case 2:return a.sent(),[2]}})}),function(){return eF.apply(this,arguments)});return(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)(h.Z,{}),(0,s.jsxs)("div",{className:"p-3 mt-2 m-auto max-w-6xl w-11/12 border-[#323943] bg-[#121923] border border-1 rounded",children:[(0,s.jsx)("div",{className:"mb-5 text-xl",children:"Select blockchain"}),(0,s.jsx)("button",{className:"bg-[#184e9b] hover:bg-[#1964cf] hover:duration-500 text-white rounded px-4 py-2",onClick:eI,children:"Set Blockchain"}),(0,s.jsxs)("select",{className:"p-3 m-3 mt-0 bg-[#020913] border-2 border-gray-300 rounded",onChange:function(e){console.log(e.target.value),E(e.target.value)},children:[(0,s.jsx)("option",{value:"None",children:"-- select --"}),(0,s.jsx)("option",{value:"Shiden",children:"Shiden"}),(0,s.jsx)("option",{value:"Shibuya",children:"Shibuya"}),(0,s.jsx)("option",{value:"Local",children:"Local"}),(0,s.jsx)("option",{value:"Custom",children:"Custom"})]}),(0,s.jsxs)("div",{className:"p-2 m-2 mt-0",children:["Current Blockchain Name: ",$||"---"]}),(0,s.jsxs)("div",{className:"p-2 m-2 mt-0",children:["Current Blockchain URL: ",P||"---"]}),(0,s.jsxs)("div",{className:"p-1 m-1",children:["Block: ",g||"---"]}),(0,s.jsxs)("div",{className:"p-1 m-auto w-11/12 break-all",children:["Last block hash: ",v||"---"]})]}),(0,s.jsxs)("div",{className:"text-center p-2 mt-5 m-auto max-w-6xl w-11/12 border-[#323943] bg-[#121923] border border-1 rounded",children:[(0,s.jsx)("div",{className:"mb-3 text-xl",children:"Connect Wallet"}),(0,s.jsx)("button",{className:"bg-[#184e9b] hover:bg-[#1964cf] hover:duration-500 disabled:bg-stone-700 text-white rounded px-4 py-2",onClick:e_,children:"Set Account"}),(0,s.jsx)("select",{className:"p-3 m-3 bg-[#020913] border-2 border-gray-300 rounded",onChange:function(e){console.log(e),R(e.target.value)},children:L.map(function(e){return(0,s.jsxs)("option",{value:e.address,children:["[",e.meta.name,"]"]},e.address)})}),(0,s.jsxs)("p",{className:"p-1 m-1 break-all",children:["actingAddress: ",O]})]}),(0,s.jsxs)("div",{className:"text-center p-2 mt-5 m-auto max-w-6xl w-11/12 border-[#323943] bg-[#121923] border border-1 rounded",children:[(0,s.jsx)("div",{className:"mb-3 text-xl",children:"Mint NFT"}),(0,s.jsx)("button",{disabled:!z,className:"bg-[#184e9b] hover:bg-[#1964cf] hover:duration-500 disabled:bg-stone-700 text-white rounded px-4 py-2",onClick:function(){return e$.apply(this,arguments)},children:z?"Mint NFT":"Enter ContractAddress"}),(0,s.jsx)("input",{className:"p-2 m-2 bg-[#020913] border-2 border-gray-300 rounded",onChange:function(e){return q(e.target.value)},placeholder:"ContractAddress"}),(0,s.jsx)("input",{className:"p-2 m-2 bg-[#020913] border-2 w-20 rounded",onChange:function(e){return V(e.target.value)},placeholder:"TokenID"})]}),(0,s.jsxs)("div",{className:"text-center p-2 mt-5 m-auto max-w-6xl w-11/12 border-[#323943] bg-[#121923] border border-1 rounded",children:[(0,s.jsx)("div",{className:"mb-3 text-xl",children:"NFT View"}),(0,s.jsx)("button",{disabled:!z||!D,className:"bg-[#184e9b] hover:bg-[#1964cf] hover:duration-500 disabled:bg-stone-700 text-white rounded px-4 py-2",onClick:eB,children:z||D?"View NFT":"Enter Blank Form"}),(0,s.jsx)("input",{className:"p-2 m-2 bg-[#020913] border-2 border-gray-300 rounded",onChange:function(e){return q(e.target.value)},placeholder:"ContractAddress"}),(0,s.jsx)("input",{className:"p-2 m-2 w-20 bg-[#020913] border-2 border-gray-300 rounded",onChange:function(e){return V(e.target.value)},placeholder:"TokenID"}),(0,s.jsx)("div",{className:"text-center",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{className:"p-2 m-auto w-64",src:eb}),(0,s.jsx)("p",{className:"p-1 m-1 text-xl break-words",children:eg}),(0,s.jsx)("p",{className:"p-1 m-1 break-words",children:ev}),(0,s.jsx)("p",{className:z?"m-1 break-all":"hidden",children:(0,s.jsx)("a",{target:"_blank",rel:"noreferrer",href:ek,children:eC})})]})})]}),(0,s.jsxs)("div",{className:"text-left p-2 mt-5 m-auto max-w-6xl w-11/12 border-[#323943] bg-[#121923] border border-1 rounded",children:[(0,s.jsxs)("p",{className:"p-1 m-1 break-all",children:["Status: ",es]}),(0,s.jsxs)("div",{className:"hidden p-3 m-3",children:["TokenURI: ",J]}),(0,s.jsxs)("p",{className:"p-1 m-1 hidden",children:["Result: ",en]}),(0,s.jsxs)("p",{className:"p-1 m-1 break-all",children:["MetadataUri: ",ec]}),(0,s.jsxs)("p",{className:"p-1 m-1 break-all",children:["ImageUri: ",ed]}),(0,s.jsxs)("p",{className:"p-1 m-1",children:["TokenId: ",D]}),(0,s.jsxs)("p",{className:"p-1 m-1 break-all",children:["OwnerAddress: ",Q]})]}),(0,s.jsx)(b.Z,{}),(0,s.jsx)(m.Z,{})]})};t.default=f},7978:function(e,t,n){n.d(t,{LW:function(){return v},bI:function(){return o},X6:function(){return b},vK:function(){return k},Fm:function(){return y},$y:function(){return j},$R:function(){return S},q$:function(){return C},R0:function(){return N},u4:function(){return E},s0:function(){return _},sy:function(){return p}});var r=n(5442),a=n(9495),s=n(9048);let o={name:"@polkadot/extension-dapp",path:new URL("file:///home/cielo/frontend/psp34-frontend-viewer-sample/node_modules/@polkadot/extension-dapp/packageInfo.js").pathname.substring(0,new URL("file:///home/cielo/frontend/psp34-frontend-viewer-sample/node_modules/@polkadot/extension-dapp/packageInfo.js").pathname.lastIndexOf("/")+1),type:"esm",version:"0.44.6"};var i=n(3836),c=n(5716);let l=(0,c.Y)("\x19Ethereum Signed Message:\n"),u=(0,c.Y)("<Bytes>"),d=(0,c.Y)("</Bytes>"),h=u.length+d.length;function m(e,t){return e.length>=h&&(0,r.S)(e.subarray(0,u.length),u)&&(0,r.S)(e.slice(-d.length),d)||t&&e.length>=l.length&&(0,r.S)(e.subarray(0,l.length),l)}let b=function(e){let t=(0,c.Y)(e);return m(t,!1)?t.subarray(u.length,t.length-d.length):t},p=function(e){let t=(0,c.Y)(e);return m(t,!0)?t:(0,i.d)([u,t,d])},f=window;function g(){return 0!==Object.keys(f.injectedWeb3).length}function x(e){throw Error(`${e}: web3Enable(originName) needs to be called before ${e}`)}function w(e,t,n){return t.map(({address:t,genesisHash:r,name:o,type:i})=>({address:42===t.length?t:(0,a.m)((0,s.m)(t),n),meta:{genesisHash:r,name:o,source:e},type:i}))}f.injectedWeb3=f.injectedWeb3||{};let v=g(),S=null;function j(e,t=[]){var n;if(!e)throw Error("You must pass a name for your app to the web3Enable function");let r=t.length?Promise.all(t.map(e=>e().catch(()=>!1))):Promise.resolve([!0]);return n=()=>r.then(()=>{var t;return Promise.all(Object.entries(f.injectedWeb3).map(([t,{enable:n,version:r}])=>Promise.all([Promise.resolve({name:t,version:r}),n(e).catch(e=>{console.error(`Error initializing ${t}: ${e.message}`)})]))).then(e=>e.filter(e=>!!e[1]).map(([e,t])=>(t.accounts.subscribe||(t.accounts.subscribe=e=>(t.accounts.get().then(e).catch(console.error),()=>{})),{...e,...t}))).catch(()=>[]).then(e=>{let t=e.map(({name:e,version:t})=>`${e}/${t}`);return v=g(),console.log(`web3Enable: Enabled ${e.length} extension${1!==e.length?"s":""}: ${t.join(", ")}`),e})}),S=new Promise(e=>{"complete"===document.readyState?e(n()):window.addEventListener("load",()=>e(n()))})}async function k({accountType:e,extensions:t,ss58Format:n}={}){if(!S)return x("web3Accounts");let r=[],a=await S,s=await Promise.all(a.filter(({name:e})=>!t||t.includes(e)).map(async({accounts:t,name:r})=>{try{let a=await t.get();return w(r,a.filter(({type:t})=>!t||!e||e.includes(t)),n)}catch(s){return[]}}));s.forEach(e=>{r.push(...e)});let o=r.map(({address:e})=>e);return console.log(`web3Accounts: Found ${r.length} address${1!==r.length?"es":""}: ${o.join(", ")}`),r}async function y(e,{extensions:t,ss58Format:n}={}){if(!S)return x("web3AccountsSubscribe");let r={},a=()=>e(Object.entries(r).reduce((e,[t,r])=>(e.push(...w(t,r,n)),e),[])),s=(await S).filter(({name:e})=>!t||t.includes(e)).map(({accounts:{subscribe:e},name:t})=>e(e=>{r[t]=e;try{var n;null===(n=a())||void 0===n||n.catch(console.error)}catch(s){console.error(s)}}));return()=>{s.forEach(e=>{e()})}}async function N(e){if(!S)return x("web3FromSource");let t=await S,n=e&&t.find(({name:t})=>t===e);if(!n)throw Error(`web3FromSource: Unable to find an injected ${e}`);return n}async function C(e){if(!S)return x("web3FromAddress");let t=await k(),n;if(e){let a=(0,s.m)(e);n=t.find(e=>(0,r.S)((0,s.m)(e.address),a))}if(!n)throw Error(`web3FromAddress: Unable to find injected ${e}`);return N(n.meta.source)}async function E(e){let{provider:t}=await N(e);return t?t.listProviders():(console.warn(`Extension ${e} does not expose any provider`),null)}async function _(e,t){let{provider:n}=await N(e);if(!n)throw Error(`Extension ${e} does not expose any provider`);let r=await n.startProvider(t);return{meta:r,provider:n}}}}]);