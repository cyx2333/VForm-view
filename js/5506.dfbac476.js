"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[5506],{95506:function(e,t,n){var i=n(41218),s=n(41086).HtmlHighlightRules,r=n(23952).JavaScriptHighlightRules,l=function(e,t){for(var n in s.call(this),e||(e="(?:<%|<\\?|{{)"),t||(t="(?:%>|\\?>|}})"),this.$rules)this.$rules[n].unshift({token:"markup.list.meta.tag",regex:e+"(?![>}])[-=]?",push:"ejs-start"});this.embedRules(new r({jsx:!1}).getRules(),"ejs-",[{token:"markup.list.meta.tag",regex:"-?"+t,next:"pop"},{token:"comment",regex:"//.*?"+t,next:"pop"}]),this.normalizeRules()};i.inherits(l,s),t.EjsHighlightRules=l;i=n(41218);var a=n(40377).Mode,u=n(3499).Mode,o=n(43865).Mode,h=(n(17760).Mode,function(){a.call(this),this.HighlightRules=l,this.createModeDelegates({"js-":u,"css-":o,"ejs-":u})});i.inherits(h,a),function(){this.$id="ace/mode/ejs"}.call(h.prototype),t.Mode=h},68406:function(e,t,n){n(44114);var i=n(41218),s=n(90807).FoldMode,r=n(73425).Q,l=n(46458).TokenIterator,a=t.l=function(){};i.inherits(a,s),function(){this.indentKeywords={class:1,def:1,module:1,do:1,unless:1,if:1,while:1,for:1,until:1,begin:1,else:0,elsif:0,rescue:0,ensure:0,when:0,end:-1,case:1,"=begin":1,"=end":-1},this.foldingStartMarker=/(?:\s|^)(def|do|while|class|unless|module|if|for|until|begin|else|elsif|case|rescue|ensure|when)\b|({\s*$)|(=begin)/,this.foldingStopMarker=/(=end(?=$|\s.*$))|(^\s*})|\b(end)\b/,this.getFoldWidget=function(e,t,n){var i=e.getLine(n),s=this.foldingStartMarker.test(i),r=this.foldingStopMarker.test(i);if(s&&!r){var l=i.match(this.foldingStartMarker);if(l[1]){if("if"==l[1]||"else"==l[1]||"while"==l[1]||"until"==l[1]||"unless"==l[1]){if("else"==l[1]&&!1===/^\s*else\s*$/.test(i))return;if(!1===/^\s*(?:if|else|while|until|unless)\s*/.test(i))return}if("when"==l[1]&&!0===/\sthen\s/.test(i))return;if("keyword"===e.getTokenAt(n,l.index+2).type)return"start"}else{if(!l[3])return"start";if("comment.multiline"===e.getTokenAt(n,l.index+1).type)return"start"}}if("markbeginend"!=t||!r||s&&r)return"";l=i.match(this.foldingStopMarker);if("end"===l[3]){if("keyword"===e.getTokenAt(n,l.index+1).type)return"end"}else{if(!l[1])return"end";if("comment.multiline"===e.getTokenAt(n,l.index+1).type)return"end"}},this.getFoldWidgetRange=function(e,t,n){var i=e.doc.getLine(n),s=this.foldingStartMarker.exec(i);if(s)return s[1]||s[3]?this.rubyBlock(e,n,s.index+2):this.openingBracketBlock(e,"{",n,s.index);s=this.foldingStopMarker.exec(i);return s?"end"===s[3]&&"keyword"===e.getTokenAt(n,s.index+1).type||"=end"===s[1]&&"comment.multiline"===e.getTokenAt(n,s.index+1).type?this.rubyBlock(e,n,s.index+1):this.closingBracketBlock(e,"}",n,s.index+s[0].length):void 0},this.rubyBlock=function(e,t,n,i){var s=new l(e,t,n),a=s.getCurrentToken();if(a&&("keyword"==a.type||"comment.multiline"==a.type)){var u=a.value,o=e.getLine(t);switch(a.value){case"if":case"unless":case"while":case"until":var h=new RegExp("^\\s*"+a.value);if(!h.test(o))return;var d=this.indentKeywords[u];break;case"when":if(/\sthen\s/.test(o))return;case"elsif":case"rescue":case"ensure":d=1;break;case"else":h=new RegExp("^\\s*"+a.value+"\\s*$");if(!h.test(o))return;d=1;break;default:d=this.indentKeywords[u];break}var c=[u];if(d){var f=-1===d?e.getLine(t-1).length:e.getLine(t).length,g=t,k=[];if(k.push(s.getCurrentTokenRange()),s.step=-1===d?s.stepBackward:s.stepForward,"comment.multiline"==a.type){while(a=s.step())if("comment.multiline"===a.type)if(1==d){if(f=6,"=end"==a.value)break}else if("=begin"==a.value)break}else while(a=s.step()){var m=!1;if("keyword"===a.type){var p=d*this.indentKeywords[a.value];switch(o=e.getLine(s.getCurrentTokenRow()),a.value){case"do":for(var v=s.$tokenIndex-1;v>=0;v--){var w=s.$rowTokens[v];if(w&&("while"==w.value||"until"==w.value||"for"==w.value)){p=0;break}}break;case"else":h=new RegExp("^\\s*"+a.value+"\\s*$");h.test(o)&&"case"!=u||(p=0,m=!0);break;case"if":case"unless":case"while":case"until":h=new RegExp("^\\s*"+a.value);h.test(o)||(p=0,m=!0);break;case"when":(/\sthen\s/.test(o)||"case"==u)&&(p=0,m=!0);break}if(p>0)c.unshift(a.value);else if(p<=0&&!1===m){if(c.shift(),!c.length){if(("while"==u||"until"==u||"for"==u)&&"do"!=a.value)break;if("do"==a.value&&-1==d&&0!=p)break;if("do"!=a.value)break}0===p&&c.unshift(a.value)}}}if(!a)return null;if(i)return k.push(s.getCurrentTokenRange()),k;t=s.getCurrentTokenRow();if(-1===d){if("comment.multiline"===a.type)var b=6;else b=e.getLine(t).length;return new r(t,b,g-1,f)}return new r(g,f,t-1,e.getLine(t-1).length)}}}}.call(a.prototype)},17760:function(e,t,n){var i=n(41218),s=n(38507).Mode,r=n(80987).RubyHighlightRules,l=n(83085).MatchingBraceOutdent,a=n(73425).Q,u=n(68406).l,o=function(){this.HighlightRules=r,this.$outdent=new l,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new u,this.indentKeywords=this.foldingRules.indentKeywords};i.inherits(o,s),function(){this.lineCommentStart="#",this.getNextLineIndent=function(e,t,n){var i=this.$getIndent(t),s=this.getTokenizer().getLineTokens(t,e),r=s.tokens;if(r.length&&"comment"==r[r.length-1].type)return i;if("start"==e){var l=t.match(/^.*[\{\(\[]\s*$/),a=t.match(/^\s*(class|def|module)\s.*$/),u=t.match(/.*do(\s*|\s+\|.*\|\s*)$/),o=t.match(/^\s*(if|else|when|elsif|unless|while|for|begin|rescue|ensure)\s*/);(l||a||u||o)&&(i+=n)}return i},this.checkOutdent=function(e,t,n){return/^\s+(end|else|rescue|ensure)$/.test(t+n)||this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){var i=t.getLine(n);if(/}/.test(i))return this.$outdent.autoOutdent(t,n);var s=this.$getIndent(i),r=t.getLine(n-1),l=this.$getIndent(r),u=t.getTabString();l.length<=s.length&&s.slice(-u.length)==u&&t.remove(new a(n,s.length-u.length,n,s.length))},this.getMatching=function(e,t,n){if(void 0==t){var i=e.selection.lead;n=i.column,t=i.row}var s=e.getTokenAt(t,n);if(s&&s.value in this.indentKeywords)return this.foldingRules.rubyBlock(e,t,n,!0)},this.$id="ace/mode/ruby",this.snippetFileId="ace/snippets/ruby"}.call(o.prototype),t.Mode=o}}]);
//# sourceMappingURL=5506.dfbac476.js.map