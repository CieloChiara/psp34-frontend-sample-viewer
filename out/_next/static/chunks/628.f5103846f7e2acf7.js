"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[628],{3628:function(e,t,n){n.r(t);var r=n(7568),a=n(655),s=n(5893),i=n(7294),l=n(8562),o=n(8456),u=n(1931),c=n(2848),d=n(196),h=n(8969),m=n(2980),p=n(7998),b=function(){var e=[{name:"Shiden",url:"wss://shiden.api.onfinality.io/public-ws",subscan_url:"https://shiden.subscan.io/account/"},{name:"Shibuya",url:"wss://rpc.shibuya.astar.network",subscan_url:"https://shibuya.subscan.io/account/"},{name:"Local",url:"ws://127.0.0.1:9944"},{name:"Custom",url:"wss://astar-collator.cielo.works:11443"},],t=(0,i.useState)(0),n=t[0],b=t[1],x=(0,i.useState)(""),v=x[0],g=x[1],S=(0,i.useState)(""),f=S[0],j=S[1],N=(0,i.useState)(""),k=N[0],w=N[1],y=(0,i.useState)(""),C=y[0],_=y[1],B=(0,i.useState)(""),E=B[0],L=B[1],Z=(0,i.useState)([]),T=Z[0];Z[1];var O=(0,i.useState)(""),U=(O[0],O[1]),F=(0,i.useState)(),H=F[0],I=F[1],M=(0,i.useState)(""),q=M[0],A=M[1],V=(0,i.useState)(""),D=V[0],G=V[1],J=(0,i.useState)("");J[0],J[1];var P=(0,i.useState)(""),R=P[0],z=P[1],K=(0,i.useState)(""),Q=(K[0],K[1]),W=(0,i.useState)("");W[0],W[1];var X=(0,i.useState)(""),Y=X[0],$=X[1],ee=(0,i.useState)(""),et=ee[0],en=ee[1],er=(0,i.useState)(""),ea=er[0],es=er[1],ei=(0,i.useState)(""),el=ei[0],eo=ei[1],eu=(0,i.useState)(""),ec=eu[0],ed=eu[1],eh=(0,i.useState)(""),em=eh[0],ep=eh[1],eb=(0,i.useState)(""),ex=eb[0],ev=eb[1];function eg(){return(eg=(0,r.Z)(function(){var t,r,s,i,l,o,h,m,p;return(0,a.__generator)(this,function(t){switch(t.label){case 0:if(!f||!n)return alert("Please select Blockchain and click 'Set Blockchain' button."),[2];return[4,new u.vM(H,c,q).query["shiden34Trait::tokenUri"](q,{value:0,gasLimit:-1},{u64:D})];case 1:return s=(r=t.sent()).result,i=r.output,Q(JSON.stringify(s.toHuman())),"Ok"===s.type?"Ok"===(l=i).type?(void 0!==(o=l.inner.toString())&&($(o),d.Z.get(o).then(function(e){en(e.data.image.toString()),es(e.data.image.toString()),eo(e.data.name.toString()),ed(e.data.description.toString())})),"Shiden"===C||"Shibuya"===C?(ep((null===(h=e.filter(function(e){return e.name===C})[0])||void 0===h?void 0:h.subscan_url)+q),ev("Show on Subscan ("+C+")")):ev(""),function(){return eS.apply(this,arguments)}()):"Err"===l.type&&($(l.inner.toString()),en(""),es(""),eo(l.inner.toString()),ed(""),z("none (TokenNotExists)")):"Err"===s.type&&($(""),en(""),es(""),eo(s.toString()),ed(""),z("")),[2]}})})).apply(this,arguments)}function eS(){return(eS=(0,r.Z)(function(){var e,t,n,r,s;return(0,a.__generator)(this,function(t){switch(t.label){case 0:return[4,new u.vM(H,c,q).query["psp34::ownerOf"](q,{value:0,gasLimit:-1},{u64:D})];case 1:return(n=t.sent()).gasConsumed,n.result,(s=null===(e=null==(r=n.output)?void 0:r.toHuman())||void 0===e?void 0:e.toString())?z(s):z("none"),[2]}})})).apply(this,arguments)}(0,i.useEffect)(function(){});var ef,ej=(ef=(0,r.Z)(function(){var t,n,r,s,i,u;return(0,a.__generator)(this,function(a){switch(a.label){case 0:if(s=null===(t=(r=e.filter(function(e){return e.name===k}))[0])||void 0===t?void 0:t.url,j(null===(n=r[0])||void 0===n?void 0:n.url),!s)return[2];return i=new l.U(s),[4,o.G.create({provider:i})];case 1:return[4,(u=a.sent()).rpc.chain.subscribeNewHeads(function(e){I(u),_(k),b(e.number.toNumber()),g(e.hash.toString()),L(s),console.log(u.hasSubscriptions)})];case 2:return a.sent(),[2]}})}),function(){return ef.apply(this,arguments)});return(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)(h.Z,{}),(0,s.jsxs)("div",{className:"p-3 mt-2 m-auto max-w-6xl w-11/12 border-[#323943] bg-[#121923] border border-1 rounded",children:[(0,s.jsx)("div",{className:"mb-5 text-xl",children:"Select blockchain"}),(0,s.jsx)("button",{className:"bg-[#184e9b] hover:bg-[#1964cf] hover:duration-500 text-white rounded px-4 py-2",onClick:ej,children:"Set Blockchain"}),(0,s.jsxs)("select",{className:"p-3 m-3 mt-0 bg-[#020913] border-2 border-gray-300 rounded",onChange:function(e){console.log(e.target.value),w(e.target.value)},children:[(0,s.jsx)("option",{value:"None",children:"-- select --"}),(0,s.jsx)("option",{value:"Shiden",children:"Shiden"}),(0,s.jsx)("option",{value:"Shibuya",children:"Shibuya"}),(0,s.jsx)("option",{value:"Local",children:"Local"}),(0,s.jsx)("option",{value:"Custom",children:"Custom"})]}),(0,s.jsxs)("div",{className:"p-2 m-2 mt-0",children:["Current Blockchain Name: ",C||"---"]}),(0,s.jsxs)("div",{className:"p-2 m-2 mt-0",children:["Current Blockchain URL: ",E||"---"]}),(0,s.jsxs)("div",{className:"p-1 m-1",children:["Block: ",n||"---"]}),(0,s.jsxs)("div",{className:"p-1 m-auto w-11/12 break-all",children:["Last block hash: ",v||"---"]})]}),(0,s.jsx)("div",{className:"text-center mt-5",children:(0,s.jsx)("select",{className:"p-3 m-3 bg-[#020913] border-2 border-gray-300 rounded hidden",onChange:function(e){console.log(e),U(e.target.value)},children:T.map(function(e){return(0,s.jsxs)("option",{value:e.address,children:["[",e.meta.name,"]"]},e.address)})})}),(0,s.jsxs)("div",{className:"text-left p-2 pt-0 mt-5 m-auto max-w-6xl w-11/12 border-[#323943] bg-[#121923] border border-1 rounded",children:[(0,s.jsxs)("div",{className:"text-center mt-4",children:[(0,s.jsx)("div",{className:"mb-3 text-xl",children:"NFT View"}),(0,s.jsx)("button",{disabled:!q||!D,className:"bg-[#184e9b] hover:bg-[#1964cf] hover:duration-500 disabled:bg-stone-700 text-white rounded px-4 py-2",onClick:function(){return eg.apply(this,arguments)},children:q||D?"View NFT":"Enter Blank Form"}),(0,s.jsx)("input",{className:"p-2 m-2 bg-[#020913] border-2 border-gray-300 rounded",onChange:function(e){return A(e.target.value)},placeholder:"ContractAddress"}),(0,s.jsx)("input",{className:"p-2 m-2 w-20 bg-[#020913] border-2 border-gray-300 rounded",onChange:function(e){return G(e.target.value)},placeholder:"TokenID"})]}),(0,s.jsx)("div",{className:"text-center",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{className:"p-2 m-auto w-64",src:ea}),(0,s.jsx)("p",{className:"p-1 m-1 text-xl break-words",children:el}),(0,s.jsx)("p",{className:"p-1 m-1 break-words",children:ec}),(0,s.jsx)("p",{className:q?"m-1 break-all":"hidden",children:(0,s.jsx)("a",{target:"_blank",rel:"noreferrer",href:em,children:ex})})]})}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"p-1 m-1 break-all",children:["MetadataUri: ",Y]}),(0,s.jsxs)("p",{className:"p-1 m-1 break-all",children:["ImageUri: ",et]}),(0,s.jsxs)("p",{className:"p-1 m-1",children:["TokenId: ",D]}),(0,s.jsxs)("p",{className:"p-1 m-1 break-all",children:["OwnerAddress: ",R]})]})]}),(0,s.jsx)(p.Z,{}),(0,s.jsx)(m.Z,{})]})};t.default=b}}]);