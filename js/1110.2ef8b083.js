"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[1110],{41110:function(e,t,s){s(44114);const{Tokenizer:n}=s(99097),i=s(47266).t;class o{constructor(e,t){this._lines=e.split(/\r\n|\r|\n/),this._states=[],this._tokenizer=t}getTokens(e){const t=this._lines[e],s=this._states[e-1],n=this._tokenizer.getLineTokens(t,s);return this._states[e]=n.state,n.tokens}getLength(){return this._lines.length}}function a(e,t){const s=new o(e,new n(t.getRules()));let a=[];for(let n=0;n<s.getLength();n++){const e=s.getTokens(n);a.push(e.map((e=>({className:i(e.type)?void 0:"ace_"+e.type.replace(/\./g," ace_"),value:e.value}))))}return a}e.exports={tokenize:a}}}]);
//# sourceMappingURL=1110.2ef8b083.js.map