"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[7542],{92060:function(t,e,n){var i=n(41218),o=n(73425).Q,r=n(90807).FoldMode,a=e.l=function(t){t&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+t.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+t.end)))};i.inherits(a,r),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(t,e,n){var i=t.getLine(n);if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return"";var o=this._getFoldWidgetBase(t,e,n);return!o&&this.startRegionRe.test(i)?"start":o},this.getFoldWidgetRange=function(t,e,n,i){var o=t.getLine(n);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(t,o,n);var r=o.match(this.foldingStartMarker);if(r){var a=r.index;if(r[1])return this.openingBracketBlock(t,r[1],n,a);var s=t.getCommentFoldRange(n,a+r[0].length,1);return s&&!s.isMultiLine()&&(i?s=this.getSectionRange(t,n):"all"!=e&&(s=null)),s}if("markbegin"!==e){r=o.match(this.foldingStopMarker);if(r){a=r.index+r[0].length;return r[1]?this.closingBracketBlock(t,r[1],n,a):t.getCommentFoldRange(n,a,-1)}}},this.getSectionRange=function(t,e){var n=t.getLine(e),i=n.search(/\S/),r=e,a=n.length;e+=1;var s=e,u=t.getLength();while(++e<u){n=t.getLine(e);var c=n.search(/\S/);if(-1!==c){if(i>c)break;var d=this.getFoldWidgetRange(t,"all",e);if(d){if(d.start.row<=r)break;if(d.isMultiLine())e=d.end.row;else if(i==c)break}s=e}}return new o(r,a,s,t.getLine(s).length)},this.getCommentRegionBlock=function(t,e,n){var i=e.search(/\s*$/),r=t.getLength(),a=n,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,u=1;while(++n<r){e=t.getLine(n);var c=s.exec(e);if(c&&(c[1]?u--:u++,!u))break}var d=n;if(d>a)return new o(a,i,d,e.length)}}.call(a.prototype)},83085:function(t,e,n){var i=n(73425).Q,o=function(){};(function(){this.checkOutdent=function(t,e){return!!/^\s+$/.test(t)&&/^\s*\}/.test(e)},this.autoOutdent=function(t,e){var n=t.getLine(e),o=n.match(/^(\s*\})/);if(!o)return 0;var r=o[1].length,a=t.findMatchingBracket({row:e,column:r});if(!a||a.row==e)return 0;var s=this.$getIndent(t.getLine(a.row));t.replace(new i(e,0,e,r-1),s)},this.$getIndent=function(t){return t.match(/^\s*/)[0]}}).call(o.prototype),e.MatchingBraceOutdent=o},27542:function(t,e,n){var i=n(41218),o=n(38507).Mode,r=n(15809).e,a=n(83085).MatchingBraceOutdent,s=n(92060).l,u=function(){this.HighlightRules=r,this.$outdent=new a,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new s};i.inherits(u,o),function(){this.lineCommentStart="//",this.$quotes={'"':'"'},this.checkOutdent=function(t,e,n){return this.$outdent.checkOutdent(e,n)},this.autoOutdent=function(t,e,n){this.$outdent.autoOutdent(e,n)},this.$id="ace/mode/smithy"}.call(u.prototype),e.Mode=u},15809:function(t,e,n){var i=n(41218),o=n(98288).r,r=function(){this.$rules={start:[{include:"#comment"},{token:["meta.keyword.statement.smithy","variable.other.smithy","text","keyword.operator.smithy"],regex:/^(\$)(\s+.+)(\s*)(=)/},{token:["keyword.statement.smithy","text","entity.name.type.namespace.smithy"],regex:/^(namespace)(\s+)([A-Z-a-z0-9_\.#$-]+)/},{token:["keyword.statement.smithy","text","keyword.statement.smithy","text","entity.name.type.smithy"],regex:/^(use)(\s+)(shape|trait)(\s+)([A-Z-a-z0-9_\.#$-]+)\b/},{token:["keyword.statement.smithy","variable.other.smithy","text","keyword.operator.smithy"],regex:/^(metadata)(\s+.+)(\s*)(=)/},{token:["keyword.statement.smithy","text","entity.name.type.smithy"],regex:/^(apply|byte|short|integer|long|float|double|bigInteger|bigDecimal|boolean|blob|string|timestamp|service|resource|trait|list|map|set|structure|union|document)(\s+)([A-Z-a-z0-9_\.#$-]+)\b/},{token:["keyword.operator.smithy","text","entity.name.type.smithy","text","text","support.function.smithy","text","text","support.function.smithy"],regex:/^(operation)(\s+)([A-Z-a-z0-9_\.#$-]+)(\(.*\))(?:(\s*)(->)(\s*[A-Z-a-z0-9_\.#$-]+))?(?:(\s+)(errors))?/},{include:"#trait"},{token:["support.type.property-name.smithy","punctuation.separator.dictionary.pair.smithy"],regex:/([A-Z-a-z0-9_\.#$-]+)(:)/},{include:"#value"},{token:"keyword.other.smithy",regex:/\->/}],"#comment":[{include:"#doc_comment"},{include:"#line_comment"}],"#doc_comment":[{token:"comment.block.documentation.smithy",regex:/\/\/\/.*/}],"#line_comment":[{token:"comment.line.double-slash.smithy",regex:/\/\/.*/}],"#trait":[{token:["punctuation.definition.annotation.smithy","storage.type.annotation.smithy"],regex:/(@)([0-9a-zA-Z\.#-]+)/},{token:["punctuation.definition.annotation.smithy","punctuation.definition.object.end.smithy","meta.structure.smithy"],regex:/(@)([0-9a-zA-Z\.#-]+)(\()/,push:[{token:"punctuation.definition.object.end.smithy",regex:/\)/,next:"pop"},{include:"#value"},{include:"#object_inner"},{defaultToken:"meta.structure.smithy"}]}],"#value":[{include:"#constant"},{include:"#number"},{include:"#string"},{include:"#array"},{include:"#object"}],"#array":[{token:"punctuation.definition.array.begin.smithy",regex:/\[/,push:[{token:"punctuation.definition.array.end.smithy",regex:/\]/,next:"pop"},{include:"#comment"},{include:"#value"},{token:"punctuation.separator.array.smithy",regex:/,/},{token:"invalid.illegal.expected-array-separator.smithy",regex:/[^\s\]]/},{defaultToken:"meta.structure.array.smithy"}]}],"#constant":[{token:"constant.language.smithy",regex:/\b(?:true|false|null)\b/}],"#number":[{token:"constant.numeric.smithy",regex:/-?(?:0|[1-9]\d*)(?:(?:\.\d+)?(?:[eE][+-]?\d+)?)?/}],"#object":[{token:"punctuation.definition.dictionary.begin.smithy",regex:/\{/,push:[{token:"punctuation.definition.dictionary.end.smithy",regex:/\}/,next:"pop"},{include:"#trait"},{include:"#object_inner"},{defaultToken:"meta.structure.dictionary.smithy"}]}],"#object_inner":[{include:"#comment"},{include:"#string_key"},{token:"punctuation.separator.dictionary.key-value.smithy",regex:/:/,push:[{token:"punctuation.separator.dictionary.pair.smithy",regex:/,|(?=\})/,next:"pop"},{include:"#value"},{token:"invalid.illegal.expected-dictionary-separator.smithy",regex:/[^\s,]/},{defaultToken:"meta.structure.dictionary.value.smithy"}]},{token:"invalid.illegal.expected-dictionary-separator.smithy",regex:/[^\s\}]/}],"#string_key":[{include:"#identifier_key"},{include:"#dquote_key"},{include:"#squote_key"}],"#identifier_key":[{token:"support.type.property-name.smithy",regex:/[A-Z-a-z0-9_\.#$-]+/}],"#dquote_key":[{include:"#dquote"}],"#squote_key":[{include:"#squote"}],"#string":[{include:"#textblock"},{include:"#dquote"},{include:"#squote"},{include:"#identifier"}],"#textblock":[{token:"punctuation.definition.string.begin.smithy",regex:/"""/,push:[{token:"punctuation.definition.string.end.smithy",regex:/"""/,next:"pop"},{token:"constant.character.escape.smithy",regex:/\\./},{defaultToken:"string.quoted.double.smithy"}]}],"#dquote":[{token:"punctuation.definition.string.begin.smithy",regex:/"/,push:[{token:"punctuation.definition.string.end.smithy",regex:/"/,next:"pop"},{token:"constant.character.escape.smithy",regex:/\\./},{defaultToken:"string.quoted.double.smithy"}]}],"#squote":[{token:"punctuation.definition.string.begin.smithy",regex:/'/,push:[{token:"punctuation.definition.string.end.smithy",regex:/'/,next:"pop"},{token:"constant.character.escape.smithy",regex:/\\./},{defaultToken:"string.quoted.single.smithy"}]}],"#identifier":[{token:"storage.type.smithy",regex:/[A-Z-a-z_][A-Z-a-z0-9_\.#$-]*/}]},this.normalizeRules()};r.metaData={name:"Smithy",fileTypes:["smithy"],scopeName:"source.smithy",foldingStartMarker:"(\\{|\\[)\\s*",foldingStopMarker:"\\s*(\\}|\\])"},i.inherits(r,o),e.e=r}}]);
//# sourceMappingURL=7542.5bbcd07a.js.map