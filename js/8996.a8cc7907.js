"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[8996,3499],{31931:function(e,t,n){var r=n(41218);const{TokenIterator:i}=n(46458);var o=n(24486)._,a=n(43671).XmlBehaviour,s=function(){var e=new a({closeCurlyBraces:!0}).getBehaviours();this.addBehaviours(e),this.inherit(o),this.add("autoclosing-fragment","insertion",(function(e,t,n,r,o){if(">"==o){var a=n.getSelectionRange().start,s=new i(r,a.row,a.column),g=s.getCurrentToken()||s.stepBackward();if(!g)return;if("<"==g.value)return{text:"></>",selection:[1,1]}}}))};r.inherits(s,o),t.d=s},43671:function(e,t,n){var r=n(41218),i=n(94177).Q,o=n(46458).TokenIterator;function a(e,t){return e&&e.type.lastIndexOf(t+".xml")>-1}var s=function(){this.add("string_dquotes","insertion",(function(e,t,n,r,i){if('"'==i||"'"==i){var s=i,g=r.doc.getTextRange(n.getSelectionRange());if(""!==g&&"'"!==g&&'"'!=g&&n.getWrapBehavioursEnabled())return{text:s+g+s,selection:!1};var l=n.getCursorPosition(),u=r.doc.getLine(l.row),c=u.substring(l.column,l.column+1),h=new o(r,l.row,l.column),d=h.getCurrentToken();if(c==s&&(a(d,"attribute-value")||a(d,"string")))return{text:"",selection:[1,1]};if(d||(d=h.stepBackward()),!d)return;while(a(d,"tag-whitespace")||a(d,"whitespace"))d=h.stepBackward();var f=!c||c.match(/\s/);if(a(d,"attribute-equals")&&(f||">"==c)||a(d,"decl-attribute-equals")&&(f||"?"==c))return{text:s+s,selection:[1,1]}}})),this.add("string_dquotes","deletion",(function(e,t,n,r,i){var o=r.doc.getTextRange(i);if(!i.isMultiLine()&&('"'==o||"'"==o)){var a=r.doc.getLine(i.start.row),s=a.substring(i.start.column+1,i.start.column+2);if(s==o)return i.end.column++,i}})),this.add("autoclosing","insertion",(function(e,t,n,r,i){if(">"==i){var s=n.getSelectionRange().start,g=new o(r,s.row,s.column),l=g.getCurrentToken()||g.stepBackward();if(!l||!(a(l,"tag-name")||a(l,"tag-whitespace")||a(l,"attribute-name")||a(l,"attribute-equals")||a(l,"attribute-value")))return;if(a(l,"reference.attribute-value"))return;if(a(l,"attribute-value")){var u=g.getCurrentTokenColumn()+l.value.length;if(s.column<u)return;if(s.column==u){var c=g.stepForward();if(c&&a(c,"attribute-value"))return;g.stepBackward()}}if(/^\s*>/.test(r.getLine(s.row).slice(s.column)))return;while(!a(l,"tag-name"))if(l=g.stepBackward(),"<"==l.value){l=g.stepForward();break}var h=g.getCurrentTokenRow(),d=g.getCurrentTokenColumn();if(a(g.stepBackward(),"end-tag-open"))return;var f=l.value;if(h==s.row&&(f=f.substring(0,s.column-d)),this.voidElements&&this.voidElements.hasOwnProperty(f.toLowerCase()))return;return{text:"></"+f+">",selection:[1,1]}}})),this.add("autoindent","insertion",(function(e,t,n,r,i){if("\n"==i){var s=n.getCursorPosition(),g=r.getLine(s.row),l=new o(r,s.row,s.column),u=l.getCurrentToken();if(a(u,"")&&-1!==u.type.indexOf("tag-close")){if("/>"==u.value)return;while(u&&-1===u.type.indexOf("tag-name"))u=l.stepBackward();if(!u)return;var c=u.value,h=l.getCurrentTokenRow();if(u=l.stepBackward(),!u||-1!==u.type.indexOf("end-tag"))return;if(this.voidElements&&!this.voidElements[c]||!this.voidElements){var d=r.getTokenAt(s.row,s.column+1),f=(g=r.getLine(h),this.$getIndent(g)),p=f+r.getTabString();return d&&"</"===d.value?{text:"\n"+p+"\n"+f,selection:[1,p.length,1,p.length]}:{text:"\n"+p}}}}}))};r.inherits(s,i),t.XmlBehaviour=s},92060:function(e,t,n){var r=n(41218),i=n(73425).Q,o=n(90807).FoldMode,a=t.l=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(a,o),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(r)?"start":i},this.getFoldWidgetRange=function(e,t,n,r){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var o=i.match(this.foldingStartMarker);if(o){var a=o.index;if(o[1])return this.openingBracketBlock(e,o[1],n,a);var s=e.getCommentFoldRange(n,a+o[0].length,1);return s&&!s.isMultiLine()&&(r?s=this.getSectionRange(e,n):"all"!=t&&(s=null)),s}if("markbegin"!==t){o=i.match(this.foldingStopMarker);if(o){a=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],n,a):e.getCommentFoldRange(n,a,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),r=n.search(/\S/),o=t,a=n.length;t+=1;var s=t,g=e.getLength();while(++t<g){n=e.getLine(t);var l=n.search(/\S/);if(-1!==l){if(r>l)break;var u=this.getFoldWidgetRange(e,"all",t);if(u){if(u.start.row<=o)break;if(u.isMultiLine())t=u.end.row;else if(r==l)break}s=t}}return new i(o,a,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,n){var r=t.search(/\s*$/),o=e.getLength(),a=n,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,g=1;while(++n<o){t=e.getLine(n);var l=s.exec(t);if(l&&(l[1]?g--:g++,!g))break}var u=n;if(u>a)return new i(a,r,u,t.length)}}.call(a.prototype)},93229:function(e,t,n){var r=n(41218),i=n(93622).l,o=n(92060).l,a=t.l=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end))),this.xmlFoldMode=new i};r.inherits(a,o),function(){this.getFoldWidgetRangeBase=this.getFoldWidgetRange,this.getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=this.getFoldWidgetBase(e,t,n);return r||this.xmlFoldMode.getFoldWidget(e,t,n)},this.getFoldWidgetRange=function(e,t,n,r){var i=this.getFoldWidgetRangeBase(e,t,n,r);return i||this.xmlFoldMode.getFoldWidgetRange(e,t,n)}}.call(a.prototype)},93622:function(e,t,n){var r=n(41218),i=n(73425).Q,o=n(90807).FoldMode,a=t.l=function(e,t){o.call(this),this.voidElements=e||{},this.optionalEndTags=r.mixin({},this.voidElements),t&&r.mixin(this.optionalEndTags,t)};r.inherits(a,o);var s=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};function g(e,t){return e.type.lastIndexOf(t+".xml")>-1}(function(){this.getFoldWidget=function(e,t,n){var r=this._getFirstTagInLine(e,n);return r?r.closing||!r.tagName&&r.selfClosing?"markbeginend"===t?"end":"":!r.tagName||r.selfClosing||this.voidElements.hasOwnProperty(r.tagName.toLowerCase())||this._findEndTagInLine(e,n,r.tagName,r.end.column)?"":"start":this.getCommentFoldWidget(e,n)},this.getCommentFoldWidget=function(e,t){return/comment/.test(e.getState(t))&&/<!-/.test(e.getLine(t))?"start":""},this._getFirstTagInLine=function(e,t){for(var n=e.getTokens(t),r=new s,i=0;i<n.length;i++){var o=n[i];if(g(o,"tag-open")){if(r.end.column=r.start.column+o.value.length,r.closing=g(o,"end-tag-open"),o=n[++i],!o)return null;if(r.tagName=o.value,""===o.value){if(o=n[++i],!o)return null;r.tagName=o.value}for(r.end.column+=o.value.length,i++;i<n.length;i++)if(o=n[i],r.end.column+=o.value.length,g(o,"tag-close")){r.selfClosing="/>"==o.value;break}return r}if(g(o,"tag-close"))return r.selfClosing="/>"==o.value,r;r.start.column+=o.value.length}return null},this._findEndTagInLine=function(e,t,n,r){for(var i=e.getTokens(t),o=0,a=0;a<i.length;a++){var s=i[a];if(o+=s.value.length,!(o<r-1)&&g(s,"end-tag-open")&&(s=i[a+1],g(s,"tag-name")&&""===s.value&&(s=i[a+2]),s&&s.value==n))return!0}return!1},this.getFoldWidgetRange=function(e,t,n){var r=this._getFirstTagInLine(e,n);if(!r)return this.getCommentFoldWidget(e,n)&&e.getCommentFoldRange(n,e.getLine(n).length);var o=e.getMatchingTags({row:n,column:0});return o?new i(o.openTag.end.row,o.openTag.end.column,o.closeTag.start.row,o.closeTag.start.column):void 0}}).call(a.prototype)},3499:function(e,t,n){var r=n(41218),i=n(38507).Mode,o=n(23952).JavaScriptHighlightRules,a=n(83085).MatchingBraceOutdent,s=n(14943).WorkerClient,g=n(31931).d,l=n(93229).l,u=function(){this.HighlightRules=o,this.$outdent=new a,this.$behaviour=new g,this.foldingRules=new l};r.inherits(u,i),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.$pairQuotesAfter={"`":/\w/},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,e),o=i.tokens,a=i.state;if(o.length&&"comment"==o[o.length-1].type)return r;if("start"==e||"no_regex"==e){var s=t.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);s&&(r+=n)}else if("doc-start"==e&&("start"==a||"no_regex"==a))return"";return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new s(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return t.attachToDocument(e.getDocument()),t.on("annotate",(function(t){e.setAnnotations(t.data)})),t.on("terminate",(function(){e.clearAnnotations()})),t},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}.call(u.prototype),t.Mode=u},83085:function(e,t,n){var r=n(73425).Q,i=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t),i=n.match(/^(\s*\})/);if(!i)return 0;var o=i[1].length,a=e.findMatchingBracket({row:t,column:o});if(!a||a.row==t)return 0;var s=this.$getIndent(e.getLine(a.row));e.replace(new r(t,0,t,o-1),s)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(i.prototype),t.MatchingBraceOutdent=i},58996:function(e,t,n){var r=n(41218),i=n(3499).Mode,o=n(11255).w,a=n(83085).MatchingBraceOutdent,s=n(92060).l,g=function(){this.HighlightRules=o,this.$outdent=new a,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new s};r.inherits(g,i),function(){this.createWorker=function(e){return null},this.$id="ace/mode/sjs"}.call(g.prototype),t.Mode=g},11255:function(e,t,n){n(44114);var r=n(41218),i=n(23952).JavaScriptHighlightRules,o=n(98288).r,a=function(){var e=new i({noES6:!0}),t="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)",n=function(e){return e.isContextAware=!0,e},r=function(e){return{token:e.token,regex:e.regex,next:n((function(t,n){return 0===n.length&&n.unshift(t),n.unshift(e.next),e.next}))}},o=function(e){return{token:e.token,regex:e.regex,next:n((function(e,t){return t.shift(),t[0]||"start"}))}};this.$rules=e.$rules,this.$rules.no_regex=[{token:"keyword",regex:"(waitfor|or|and|collapse|spawn|retract)\\b"},{token:"keyword.operator",regex:"(->|=>|\\.\\.)"},{token:"variable.language",regex:"(hold|default)\\b"},r({token:"string",regex:"`",next:"bstring"}),r({token:"string",regex:'"',next:"qqstring"}),r({token:"string",regex:'"',next:"qqstring"}),{token:["paren.lparen","text","paren.rparen"],regex:"(\\{)(\\s*)(\\|)",next:"block_arguments"}].concat(this.$rules.no_regex),this.$rules.block_arguments=[{token:"paren.rparen",regex:"\\|",next:"no_regex"}].concat(this.$rules.function_arguments),this.$rules.bstring=[{token:"constant.language.escape",regex:t},{token:"string",regex:"\\\\$",next:"bstring"},r({token:"paren.lparen",regex:"\\$\\{",next:"string_interp"}),r({token:"paren.lparen",regex:"\\$",next:"bstring_interp_single"}),o({token:"string",regex:"`"}),{defaultToken:"string"}],this.$rules.qqstring=[{token:"constant.language.escape",regex:t},{token:"string",regex:"\\\\$",next:"qqstring"},r({token:"paren.lparen",regex:"#\\{",next:"string_interp"}),o({token:"string",regex:'"'}),{defaultToken:"string"}];for(var a=[],s=0;s<this.$rules.no_regex.length;s++){var g=this.$rules.no_regex[s],l=String(g.token);-1!=l.indexOf("paren")||g.next&&!g.next.isContextAware||a.push(g)}this.$rules.string_interp=[o({token:"paren.rparen",regex:"\\}"}),r({token:"paren.lparen",regex:"{",next:"string_interp"})].concat(a),this.$rules.bstring_interp_single=[{token:["identifier","paren.lparen"],regex:"(\\w+)(\\()",next:"bstring_interp_single_call"},o({token:"identifier",regex:"\\w*"})],this.$rules.bstring_interp_single_call=[r({token:"paren.lparen",regex:"\\(",next:"bstring_interp_single_call"}),o({token:"paren.rparen",regex:"\\)"})].concat(a)};r.inherits(a,o),t.w=a}}]);
//# sourceMappingURL=8996.a8cc7907.js.map