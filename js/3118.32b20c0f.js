"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[3118],{3118:function(e,t,n){var r=n(41218),o=n(38507).Mode,i=n(69577).i,a=n(92060).l,s=function(){this.HighlightRules=i,this.foldingRules=new a,this.$behaviour=this.$defaultBehaviour};r.inherits(s,o),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/d"}.call(s.prototype),t.Mode=s},69577:function(e,t,n){var r=n(41218),o=n(60209).l,i=n(98288).r,a=function(){var e="this|super|import|module|body|mixin|__traits|invariant|alias|asm|delete|typeof|typeid|sizeof|cast|new|in|is|typedef|__vector|__parameters",t="break|case|continue|default|do|else|for|foreach|foreach_reverse|goto|if|return|switch|while|catch|try|throw|finally|version|assert|unittest|with",n="auto|bool|char|dchar|wchar|byte|ubyte|float|double|real|cfloat|creal|cdouble|cent|ifloat|ireal|idouble|int|long|short|void|uint|ulong|ushort|ucent|function|delegate|string|wstring|dstring|size_t|ptrdiff_t|hash_t|Object",r="abstract|align|debug|deprecated|export|extern|const|final|in|inout|out|ref|immutable|lazy|nothrow|override|package|pragma|private|protected|public|pure|scope|shared|__gshared|synchronized|static|volatile",i="class|struct|union|template|interface|enum|macro",a={token:"constant.language.escape",regex:"\\\\(?:(?:x[0-9A-F]{2})|(?:[0-7]{1,3})|(?:['\"\\?0abfnrtv\\\\])|(?:u[0-9a-fA-F]{4})|(?:U[0-9a-fA-F]{8}))"},s="null|true|false|__DATE__|__EOF__|__TIME__|__TIMESTAMP__|__VENDOR__|__VERSION__|__FILE__|__MODULE__|__LINE__|__FUNCTION__|__PRETTY_FUNCTION__",g="/|/\\=|&|&\\=|&&|\\|\\|\\=|\\|\\||\\-|\\-\\=|\\-\\-|\\+|\\+\\=|\\+\\+|\\<|\\<\\=|\\<\\<|\\<\\<\\=|\\<\\>|\\<\\>\\=|\\>|\\>\\=|\\>\\>\\=|\\>\\>\\>\\=|\\>\\>|\\>\\>\\>|\\!|\\!\\=|\\!\\<\\>|\\!\\<\\>\\=|\\!\\<|\\!\\<\\=|\\!\\>|\\!\\>\\=|\\?|\\$|\\=|\\=\\=|\\*|\\*\\=|%|%\\=|\\^|\\^\\=|\\^\\^|\\^\\^\\=|~|~\\=|\\=\\>|#",c=this.$keywords=this.createKeywordMapper({"keyword.modifier":r,"keyword.control":t,"keyword.type":n,keyword:e,"keyword.storage":i,punctation:"\\.|\\,|;|\\.\\.|\\.\\.\\.","keyword.operator":g,"constant.language":s},"identifier"),l="[a-zA-Z_¡-￿][a-zA-Z\\d_¡-￿]*\\b";this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},o.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"star-comment"},{token:"comment.shebang",regex:"^\\s*#!.*"},{token:"comment",regex:"\\/\\+",next:"plus-comment"},{onMatch:function(e,t,n){return n.unshift(this.next,e.substr(2)),"string"},regex:'q"(?:[\\[\\(\\{\\<]+)',next:"operator-heredoc-string"},{onMatch:function(e,t,n){return n.unshift(this.next,e.substr(2)),"string"},regex:'q"(?:[a-zA-Z_]+)$',next:"identifier-heredoc-string"},{token:"string",regex:'[xr]?"',next:"quote-string"},{token:"string",regex:"[xr]?`",next:"backtick-string"},{token:"string",regex:"[xr]?['](?:(?:\\\\.)|(?:[^'\\\\]))*?['][cdw]?"},{token:["keyword","text","paren.lparen"],regex:/(asm)(\s*)({)/,next:"d-asm"},{token:["keyword","text","paren.lparen","constant.language"],regex:"(__traits)(\\s*)(\\()("+l+")"},{token:["keyword","text","variable.module"],regex:"(import|module)(\\s+)((?:"+l+"\\.?)*)"},{token:["keyword.storage","text","entity.name.type"],regex:"("+i+")(\\s*)("+l+")"},{token:["keyword","text","variable.storage","text"],regex:"(alias|typedef)(\\s*)("+l+")(\\s*)"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F_]+(l|ul|u|f|F|L|U|UL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d[\\d_]*(?:(?:\\.[\\d_]*)?(?:[eE][+-]?[\\d_]+)?)?(l|ul|u|f|F|L|U|UL)?\\b"},{token:"entity.other.attribute-name",regex:"@"+l},{token:c,regex:"[a-zA-Z_][a-zA-Z0-9_]*\\b"},{token:"keyword.operator",regex:g},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\.|\\:"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],"star-comment":[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],"plus-comment":[{token:"comment",regex:"\\+\\/",next:"start"},{defaultToken:"comment"}],"quote-string":[a,{token:"string",regex:'"[cdw]?',next:"start"},{defaultToken:"string"}],"backtick-string":[a,{token:"string",regex:"`[cdw]?",next:"start"},{defaultToken:"string"}],"operator-heredoc-string":[{onMatch:function(e,t,n){e=e.substring(e.length-2,e.length-1);var r={">":"<","]":"[",")":"(","}":"{"};return-1!=Object.keys(r).indexOf(e)&&(e=r[e]),e!=n[1]||(n.shift(),n.shift()),"string"},regex:'(?:[\\]\\)}>]+)"',next:"start"},{token:"string",regex:"[^\\]\\)}>]+"}],"identifier-heredoc-string":[{onMatch:function(e,t,n){return e=e.substring(0,e.length-1),e!=n[1]||(n.shift(),n.shift()),"string"},regex:'^(?:[A-Za-z_][a-zA-Z0-9]+)"',next:"start"},{token:"string",regex:"[^\\]\\)}>]+"}],"d-asm":[{token:"paren.rparen",regex:"\\}",next:"start"},{token:"keyword.instruction",regex:"[a-zA-Z]+",next:"d-asm-instruction"},{token:"text",regex:"\\s+"}],"d-asm-instruction":[{token:"constant.language",regex:/AL|AH|AX|EAX|BL|BH|BX|EBX|CL|CH|CX|ECX|DL|DH|DX|EDX|BP|EBP|SP|ESP|DI|EDI|SI|ESI/i},{token:"identifier",regex:"[a-zA-Z]+"},{token:"string",regex:'"[^"]*"'},{token:"comment",regex:"//.*$"},{token:"constant.numeric",regex:"[0-9.xA-F]+"},{token:"punctuation.operator",regex:"\\,"},{token:"punctuation.operator",regex:";",next:"d-asm"},{token:"text",regex:"\\s+"}]},this.embedRules(o,"doc-",[o.getEndRule("start")])};a.metaData={comment:"D language",fileTypes:["d","di"],firstLineMatch:"^#!.*\\b[glr]?dmd\\b.",foldingStartMarker:"(?x)/\\*\\*(?!\\*)|^(?![^{]*?//|[^{]*?/\\*(?!.*?\\*/.*?\\{)).*?\\{\\s*($|//|/\\*(?!.*?\\*/.*\\S))",foldingStopMarker:"(?<!\\*)\\*\\*/|^\\s*\\}",keyEquivalent:"^~D",name:"D",scopeName:"source.d"},r.inherits(a,i),t.i=a},60209:function(e,t,n){var r=n(41218),o=n(98288).r,i=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},i.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}};r.inherits(i,o),i.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},i.getStartRule=function(e){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:e}},i.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.l=i},92060:function(e,t,n){var r=n(41218),o=n(73425).Q,i=n(90807).FoldMode,a=t.l=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(a,i),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var o=this._getFoldWidgetBase(e,t,n);return!o&&this.startRegionRe.test(r)?"start":o},this.getFoldWidgetRange=function(e,t,n,r){var o=e.getLine(n);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,n);var i=o.match(this.foldingStartMarker);if(i){var a=i.index;if(i[1])return this.openingBracketBlock(e,i[1],n,a);var s=e.getCommentFoldRange(n,a+i[0].length,1);return s&&!s.isMultiLine()&&(r?s=this.getSectionRange(e,n):"all"!=t&&(s=null)),s}if("markbegin"!==t){i=o.match(this.foldingStopMarker);if(i){a=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],n,a):e.getCommentFoldRange(n,a,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),r=n.search(/\S/),i=t,a=n.length;t+=1;var s=t,g=e.getLength();while(++t<g){n=e.getLine(t);var c=n.search(/\S/);if(-1!==c){if(r>c)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=i)break;if(l.isMultiLine())t=l.end.row;else if(r==c)break}s=t}}return new o(i,a,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,n){var r=t.search(/\s*$/),i=e.getLength(),a=n,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,g=1;while(++n<i){t=e.getLine(n);var c=s.exec(t);if(c&&(c[1]?g--:g++,!g))break}var l=n;if(l>a)return new o(a,r,l,t.length)}}.call(a.prototype)}}]);
//# sourceMappingURL=3118.32b20c0f.js.map