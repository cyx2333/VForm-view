"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[3938,3499],{31931:function(e,t,n){var r=n(41218);const{TokenIterator:i}=n(46458);var o=n(24486)._,a=n(43671).XmlBehaviour,s=function(){var e=new a({closeCurlyBraces:!0}).getBehaviours();this.addBehaviours(e),this.inherit(o),this.add("autoclosing-fragment","insertion",(function(e,t,n,r,o){if(">"==o){var a=n.getSelectionRange().start,s=new i(r,a.row,a.column),l=s.getCurrentToken()||s.stepBackward();if(!l)return;if("<"==l.value)return{text:"></>",selection:[1,1]}}}))};r.inherits(s,o),t.d=s},43671:function(e,t,n){var r=n(41218),i=n(94177).Q,o=n(46458).TokenIterator;function a(e,t){return e&&e.type.lastIndexOf(t+".xml")>-1}var s=function(){this.add("string_dquotes","insertion",(function(e,t,n,r,i){if('"'==i||"'"==i){var s=i,l=r.doc.getTextRange(n.getSelectionRange());if(""!==l&&"'"!==l&&'"'!=l&&n.getWrapBehavioursEnabled())return{text:s+l+s,selection:!1};var g=n.getCursorPosition(),u=r.doc.getLine(g.row),c=u.substring(g.column,g.column+1),d=new o(r,g.row,g.column),h=d.getCurrentToken();if(c==s&&(a(h,"attribute-value")||a(h,"string")))return{text:"",selection:[1,1]};if(h||(h=d.stepBackward()),!h)return;while(a(h,"tag-whitespace")||a(h,"whitespace"))h=d.stepBackward();var f=!c||c.match(/\s/);if(a(h,"attribute-equals")&&(f||">"==c)||a(h,"decl-attribute-equals")&&(f||"?"==c))return{text:s+s,selection:[1,1]}}})),this.add("string_dquotes","deletion",(function(e,t,n,r,i){var o=r.doc.getTextRange(i);if(!i.isMultiLine()&&('"'==o||"'"==o)){var a=r.doc.getLine(i.start.row),s=a.substring(i.start.column+1,i.start.column+2);if(s==o)return i.end.column++,i}})),this.add("autoclosing","insertion",(function(e,t,n,r,i){if(">"==i){var s=n.getSelectionRange().start,l=new o(r,s.row,s.column),g=l.getCurrentToken()||l.stepBackward();if(!g||!(a(g,"tag-name")||a(g,"tag-whitespace")||a(g,"attribute-name")||a(g,"attribute-equals")||a(g,"attribute-value")))return;if(a(g,"reference.attribute-value"))return;if(a(g,"attribute-value")){var u=l.getCurrentTokenColumn()+g.value.length;if(s.column<u)return;if(s.column==u){var c=l.stepForward();if(c&&a(c,"attribute-value"))return;l.stepBackward()}}if(/^\s*>/.test(r.getLine(s.row).slice(s.column)))return;while(!a(g,"tag-name"))if(g=l.stepBackward(),"<"==g.value){g=l.stepForward();break}var d=l.getCurrentTokenRow(),h=l.getCurrentTokenColumn();if(a(l.stepBackward(),"end-tag-open"))return;var f=g.value;if(d==s.row&&(f=f.substring(0,s.column-h)),this.voidElements&&this.voidElements.hasOwnProperty(f.toLowerCase()))return;return{text:"></"+f+">",selection:[1,1]}}})),this.add("autoindent","insertion",(function(e,t,n,r,i){if("\n"==i){var s=n.getCursorPosition(),l=r.getLine(s.row),g=new o(r,s.row,s.column),u=g.getCurrentToken();if(a(u,"")&&-1!==u.type.indexOf("tag-close")){if("/>"==u.value)return;while(u&&-1===u.type.indexOf("tag-name"))u=g.stepBackward();if(!u)return;var c=u.value,d=g.getCurrentTokenRow();if(u=g.stepBackward(),!u||-1!==u.type.indexOf("end-tag"))return;if(this.voidElements&&!this.voidElements[c]||!this.voidElements){var h=r.getTokenAt(s.row,s.column+1),f=(l=r.getLine(d),this.$getIndent(l)),m=f+r.getTabString();return h&&"</"===h.value?{text:"\n"+m+"\n"+f,selection:[1,m.length,1,m.length]}:{text:"\n"+m}}}}}))};r.inherits(s,i),t.XmlBehaviour=s},60209:function(e,t,n){var r=n(41218),i=n(98288).r,o=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},o.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}};r.inherits(o,i),o.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},o.getStartRule=function(e){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:e}},o.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.l=o},92060:function(e,t,n){var r=n(41218),i=n(73425).Q,o=n(90807).FoldMode,a=t.l=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(a,o),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(r)?"start":i},this.getFoldWidgetRange=function(e,t,n,r){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var o=i.match(this.foldingStartMarker);if(o){var a=o.index;if(o[1])return this.openingBracketBlock(e,o[1],n,a);var s=e.getCommentFoldRange(n,a+o[0].length,1);return s&&!s.isMultiLine()&&(r?s=this.getSectionRange(e,n):"all"!=t&&(s=null)),s}if("markbegin"!==t){o=i.match(this.foldingStopMarker);if(o){a=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],n,a):e.getCommentFoldRange(n,a,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),r=n.search(/\S/),o=t,a=n.length;t+=1;var s=t,l=e.getLength();while(++t<l){n=e.getLine(t);var g=n.search(/\S/);if(-1!==g){if(r>g)break;var u=this.getFoldWidgetRange(e,"all",t);if(u){if(u.start.row<=o)break;if(u.isMultiLine())t=u.end.row;else if(r==g)break}s=t}}return new i(o,a,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,n){var r=t.search(/\s*$/),o=e.getLength(),a=n,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,l=1;while(++n<o){t=e.getLine(n);var g=s.exec(t);if(g&&(g[1]?l--:l++,!l))break}var u=n;if(u>a)return new i(a,r,u,t.length)}}.call(a.prototype)},93229:function(e,t,n){var r=n(41218),i=n(93622).l,o=n(92060).l,a=t.l=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end))),this.xmlFoldMode=new i};r.inherits(a,o),function(){this.getFoldWidgetRangeBase=this.getFoldWidgetRange,this.getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=this.getFoldWidgetBase(e,t,n);return r||this.xmlFoldMode.getFoldWidget(e,t,n)},this.getFoldWidgetRange=function(e,t,n,r){var i=this.getFoldWidgetRangeBase(e,t,n,r);return i||this.xmlFoldMode.getFoldWidgetRange(e,t,n)}}.call(a.prototype)},93622:function(e,t,n){var r=n(41218),i=n(73425).Q,o=n(90807).FoldMode,a=t.l=function(e,t){o.call(this),this.voidElements=e||{},this.optionalEndTags=r.mixin({},this.voidElements),t&&r.mixin(this.optionalEndTags,t)};r.inherits(a,o);var s=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};function l(e,t){return e.type.lastIndexOf(t+".xml")>-1}(function(){this.getFoldWidget=function(e,t,n){var r=this._getFirstTagInLine(e,n);return r?r.closing||!r.tagName&&r.selfClosing?"markbeginend"===t?"end":"":!r.tagName||r.selfClosing||this.voidElements.hasOwnProperty(r.tagName.toLowerCase())||this._findEndTagInLine(e,n,r.tagName,r.end.column)?"":"start":this.getCommentFoldWidget(e,n)},this.getCommentFoldWidget=function(e,t){return/comment/.test(e.getState(t))&&/<!-/.test(e.getLine(t))?"start":""},this._getFirstTagInLine=function(e,t){for(var n=e.getTokens(t),r=new s,i=0;i<n.length;i++){var o=n[i];if(l(o,"tag-open")){if(r.end.column=r.start.column+o.value.length,r.closing=l(o,"end-tag-open"),o=n[++i],!o)return null;if(r.tagName=o.value,""===o.value){if(o=n[++i],!o)return null;r.tagName=o.value}for(r.end.column+=o.value.length,i++;i<n.length;i++)if(o=n[i],r.end.column+=o.value.length,l(o,"tag-close")){r.selfClosing="/>"==o.value;break}return r}if(l(o,"tag-close"))return r.selfClosing="/>"==o.value,r;r.start.column+=o.value.length}return null},this._findEndTagInLine=function(e,t,n,r){for(var i=e.getTokens(t),o=0,a=0;a<i.length;a++){var s=i[a];if(o+=s.value.length,!(o<r-1)&&l(s,"end-tag-open")&&(s=i[a+1],l(s,"tag-name")&&""===s.value&&(s=i[a+2]),s&&s.value==n))return!0}return!1},this.getFoldWidgetRange=function(e,t,n){var r=this._getFirstTagInLine(e,n);if(!r)return this.getCommentFoldWidget(e,n)&&e.getCommentFoldRange(n,e.getLine(n).length);var o=e.getMatchingTags({row:n,column:0});return o?new i(o.openTag.end.row,o.openTag.end.column,o.closeTag.start.row,o.closeTag.start.column):void 0}}).call(a.prototype)},3938:function(e,t,n){var r=n(41218),i=n(3499).Mode,o=n(33013).q,a=function(){i.call(this),this.HighlightRules=o,this.$behaviour=this.$defaultBehaviour};r.inherits(a,i),function(){this.createWorker=function(e){return null},this.$id="ace/mode/groovy"}.call(a.prototype),t.Mode=a},33013:function(e,t,n){var r=n(41218),i=n(60209).l,o=n(98288).r,a=function(){var e="assert|with|abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|def|float|native|super|while",t="null|Infinity|NaN|undefined",n="AbstractMethodError|AssertionError|ClassCircularityError|ClassFormatError|Deprecated|EnumConstantNotPresentException|ExceptionInInitializerError|IllegalAccessError|IllegalThreadStateException|InstantiationError|InternalError|NegativeArraySizeException|NoSuchFieldError|Override|Process|ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|SuppressWarnings|TypeNotPresentException|UnknownError|UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|InstantiationException|IndexOutOfBoundsException|ArrayIndexOutOfBoundsException|CloneNotSupportedException|NoSuchFieldException|IllegalArgumentException|NumberFormatException|SecurityException|Void|InheritableThreadLocal|IllegalStateException|InterruptedException|NoSuchMethodException|IllegalAccessException|UnsupportedOperationException|Enum|StrictMath|Package|Compiler|Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|Character|Boolean|StackTraceElement|Appendable|StringBuffer|Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|StackOverflowError|OutOfMemoryError|VirtualMachineError|ArrayStoreException|ClassCastException|LinkageError|NoClassDefFoundError|ClassNotFoundException|RuntimeException|Exception|ThreadDeath|Error|Throwable|System|ClassLoader|Cloneable|Class|CharSequence|Comparable|String|Object",r=this.createKeywordMapper({"variable.language":"this",keyword:e,"support.function":n,"constant.language":t},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},i.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string.regexp",regex:"[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"},{token:"string",regex:'"""',next:"qqstring"},{token:"string",regex:"'''",next:"qstring"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:r,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\?:|\\?\\.|\\*\\.|<=>|=~|==~|\\.@|\\*\\.@|\\.&|as|in|is|!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],qqstring:[{token:"constant.language.escape",regex:/\\(?:u[0-9A-Fa-f]{4}|.|$)/},{token:"constant.language.escape",regex:/\$[\w\d]+/},{token:"constant.language.escape",regex:/\$\{[^"\}]+\}?/},{token:"string",regex:'"{3,5}',next:"start"},{token:"string",regex:".+?"}],qstring:[{token:"constant.language.escape",regex:/\\(?:u[0-9A-Fa-f]{4}|.|$)/},{token:"string",regex:"'{3,5}",next:"start"},{token:"string",regex:".+?"}]},this.embedRules(i,"doc-",[i.getEndRule("start")])};r.inherits(a,o),t.q=a},3499:function(e,t,n){var r=n(41218),i=n(38507).Mode,o=n(23952).JavaScriptHighlightRules,a=n(83085).MatchingBraceOutdent,s=n(14943).WorkerClient,l=n(31931).d,g=n(93229).l,u=function(){this.HighlightRules=o,this.$outdent=new a,this.$behaviour=new l,this.foldingRules=new g};r.inherits(u,i),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.$pairQuotesAfter={"`":/\w/},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,e),o=i.tokens,a=i.state;if(o.length&&"comment"==o[o.length-1].type)return r;if("start"==e||"no_regex"==e){var s=t.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);s&&(r+=n)}else if("doc-start"==e&&("start"==a||"no_regex"==a))return"";return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new s(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return t.attachToDocument(e.getDocument()),t.on("annotate",(function(t){e.setAnnotations(t.data)})),t.on("terminate",(function(){e.clearAnnotations()})),t},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}.call(u.prototype),t.Mode=u},83085:function(e,t,n){var r=n(73425).Q,i=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t),i=n.match(/^(\s*\})/);if(!i)return 0;var o=i[1].length,a=e.findMatchingBracket({row:t,column:o});if(!a||a.row==t)return 0;var s=this.$getIndent(e.getLine(a.row));e.replace(new r(t,0,t,o-1),s)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(i.prototype),t.MatchingBraceOutdent=i}}]);
//# sourceMappingURL=3938.b1391403.js.map