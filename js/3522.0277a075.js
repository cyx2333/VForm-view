"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[3522],{81746:function(t,e,i){var n=i(41218),r=i(90807).FoldMode,s=i(73425).Q,o=e.l=function(){};n.inherits(o,r),function(){this.commentBlock=function(t,e){var i=/\S/,n=t.getLine(e),r=n.search(i);if(-1!=r&&"#"==n[r]){var o=n.length,a=t.getLength(),h=e,l=e;while(++e<a){n=t.getLine(e);var d=n.search(i);if(-1!=d){if("#"!=n[d])break;l=e}}if(l>h){var f=t.getLine(l).length;return new s(h,o,l,f)}}},this.getFoldWidgetRange=function(t,e,i){var n=this.indentationBlock(t,i);return n||(n=this.commentBlock(t,i),n||void 0)},this.getFoldWidget=function(t,e,i){var n=t.getLine(i),r=n.search(/\S/),s=t.getLine(i+1),o=t.getLine(i-1),a=o.search(/\S/),h=s.search(/\S/);if(-1==r)return t.foldWidgets[i-1]=-1!=a&&a<h?"start":"","";if(-1==a){if(r==h&&"#"==n[r]&&"#"==s[r])return t.foldWidgets[i-1]="",t.foldWidgets[i+1]="","start"}else if(a==r&&"#"==n[r]&&"#"==o[r]&&-1==t.getLine(i-2).search(/\S/))return t.foldWidgets[i-1]="start",t.foldWidgets[i+1]="","";return t.foldWidgets[i-1]=-1!=a&&a<r?"start":"",r<h?"start":""}}.call(o.prototype)},13522:function(t,e,i){var n=i(41218),r=i(38507).Mode,s=i(31109).JadeHighlightRules,o=i(81746).l,a=function(){this.HighlightRules=s,this.foldingRules=new o,this.$behaviour=this.$defaultBehaviour};n.inherits(a,r),function(){this.lineCommentStart="//",this.$id="ace/mode/jade"}.call(a.prototype),e.Mode=a}}]);
//# sourceMappingURL=3522.0277a075.js.map