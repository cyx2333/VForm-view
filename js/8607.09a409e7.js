"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[8607],{78607:function(e,t,n){var i=n(41218),o=n(38507).Mode,a=n(45772).l,r=n(48709).l,s=function(){this.HighlightRules=a,this.foldingRules=new r(["diff","@@|\\*{5}"],"i")};i.inherits(s,o),function(){this.$id="ace/mode/diff",this.snippetFileId="ace/snippets/diff"}.call(s.prototype),t.Mode=s},45772:function(e,t,n){var i=n(41218),o=n(98288).r,a=function(){this.$rules={start:[{regex:"^(?:\\*{15}|={67}|-{3}|\\+{3})$",token:"punctuation.definition.separator.diff",name:"keyword"},{regex:"^(@@)(\\s*.+?\\s*)(@@)(.*)$",token:["constant","constant.numeric","constant","comment.doc.tag"]},{regex:"^(\\d+)([,\\d]+)(a|d|c)(\\d+)([,\\d]+)(.*)$",token:["constant.numeric","punctuation.definition.range.diff","constant.function","constant.numeric","punctuation.definition.range.diff","invalid"],name:"meta."},{regex:"^(\\-{3}|\\+{3}|\\*{3})( .+)$",token:["constant.numeric","meta.tag"]},{regex:"^([!+>])(.*?)(\\s*)$",token:["support.constant","text","invalid"]},{regex:"^([<\\-])(.*?)(\\s*)$",token:["support.function","string","invalid"]},{regex:"^(diff)(\\s+--\\w+)?(.+?)( .+)?$",token:["variable","variable","keyword","variable"]},{regex:"^Index.+$",token:"variable"},{regex:"^\\s+$",token:"text"},{regex:"\\s*$",token:"invalid"},{defaultToken:"invisible",caseInsensitive:!0}]}};i.inherits(a,o),t.l=a},48709:function(e,t,n){var i=n(41218),o=n(90807).FoldMode,a=n(73425).Q,r=t.l=function(e,t){this.regExpList=e,this.flag=t,this.foldingStartMarker=RegExp("^("+e.join("|")+")",this.flag)};i.inherits(r,o),function(){this.getFoldWidgetRange=function(e,t,n){for(var i=e.getLine(n),o={row:n,column:i.length},r=this.regExpList,s=1;s<=r.length;s++){var f=RegExp("^("+r.slice(0,s).join("|")+")",this.flag);if(f.test(i))break}for(var c=e.getLength();++n<c;)if(i=e.getLine(n),f.test(i))break;if(n!=o.row+1)return new a(o.row,o.column,n-1,i.length)}}.call(r.prototype)}}]);
//# sourceMappingURL=8607.09a409e7.js.map