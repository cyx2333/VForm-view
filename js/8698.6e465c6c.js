"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[8698],{13432:function(e,t,o){var n=o(41218),s=o(90807).FoldMode,r=t.l=function(e){this.foldingStartMarker=new RegExp("([\\[{])(?:\\s*)$|("+e+")(?:\\s*)(?:#.*)?$")};n.inherits(r,s),function(){this.getFoldWidgetRange=function(e,t,o){var n=e.getLine(o),s=n.match(this.foldingStartMarker);if(s)return s[1]?this.openingBracketBlock(e,s[1],o,s.index):s[2]?this.indentationBlock(e,o,s.index+s[2].length):this.indentationBlock(e,o)}}.call(r.prototype)},98698:function(e,t,o){var n=o(41218),s=o(38507).Mode,r=o(53037).O,i=o(13432).l,a=function(){this.HighlightRules=r,this.foldingRules=new i,this.$behaviour=this.$defaultBehaviour};n.inherits(a,s),function(){this.lineCommentStart="#",this.$id="ace/mode/robot",this.snippetFileId="ace/snippets/robot"}.call(a.prototype),t.Mode=a},53037:function(e,t,o){var n=o(41218),s=o(98288).r,r=function(){var e=new RegExp(/\$\{CURDIR\}|\$\{TEMPDIR\}|\$\{EXECDIR\}|\$\{\/\}|\$\{\:\}|\$\{\\n\}|\$\{true\}|\$\{false\}|\$\{none\}|\$\{null\}|\$\{space(?:\s*\*\s+[0-9]+)?\}|\$\{empty\}|&\{empty\}|@\{empty\}|\$\{TEST NAME\}|@\{TEST[\s_]TAGS\}|\$\{TEST[\s_]DOCUMENTATION\}|\$\{TEST[\s_]STATUS\}|\$\{TEST[\s_]MESSAGE\}|\$\{PREV[\s_]TEST[\s_]NAME\}|\$\{PREV[\s_]TEST[\s_]STATUS\}|\$\{PREV[\s_]TEST[\s_]MESSAGE\}|\$\{SUITE[\s_]NAME\}|\$\{SUITE[\s_]SOURCE\}|\$\{SUITE[\s_]DOCUMENTATION\}|&\{SUITE[\s_]METADATA\}|\$\{SUITE[\s_]STATUS\}|\$\{SUITE[\s_]MESSAGE\}|\$\{KEYWORD[\s_]STATUS\}|\$\{KEYWORD[\s_]MESSAGE\}|\$\{LOG[\s_]LEVEL\}|\$\{OUTPUT[\s_]FILE\}|\$\{LOG[\s_]FILE\}|\$\{REPORT[\s_]FILE\}|\$\{DEBUG[\s_]FILE\}|\$\{OUTPUT[\s_]DIR\}/);this.$rules={start:[{token:"string.robot.header",regex:/^\*{3}\s+(?:settings?|metadata|(?:user )?keywords?|test ?cases?|tasks?|variables?)/,caseInsensitive:!0,push:[{token:"string.robot.header",regex:/$/,next:"pop"},{defaultToken:"string.robot.header"}],comment:"start of a table"},{token:"comment.robot",regex:/(?:^|\s{2,}|\t|\|\s{1,})(?=[^\\])#/,push:[{token:"comment.robot",regex:/$/,next:"pop"},{defaultToken:"comment.robot"}]},{token:"comment",regex:/^\s*\[?Documentation\]?/,caseInsensitive:!0,push:[{token:"comment",regex:/^(?!\s*\.\.\.)/,next:"pop"},{defaultToken:"comment"}]},{token:"storage.type.method.robot",regex:/\[(?:Arguments|Setup|Teardown|Precondition|Postcondition|Template|Return|Timeout)\]/,caseInsensitive:!0,comment:"testcase settings"},{token:"storage.type.method.robot",regex:/\[Tags\]/,caseInsensitive:!0,push:[{token:"storage.type.method.robot",regex:/^(?!\s*\.\.\.)/,next:"pop"},{token:"comment",regex:/^\s*\.\.\./},{defaultToken:"storage.type.method.robot"}],comment:"test tags"},{token:"constant.language",regex:e,caseInsensitive:!0},{token:"entity.name.variable.wrapper",regex:/[$@&%]\{\{?/,push:[{token:"entity.name.variable.wrapper",regex:/\}\}?(\s?=)?/,next:"pop"},{include:"$self"},{token:"entity.name.variable",regex:/./},{defaultToken:"entity.name.variable"}]},{token:"keyword.control.robot",regex:/^[^\s\t*$|]+|(?=^\|)\s+[^\s\t*$|]+/,push:[{token:"keyword.control.robot",regex:/(?=\s{2})|\t|$|\s+(?=\|)/,next:"pop"},{defaultToken:"keyword.control.robot"}]},{token:"constant.numeric.robot",regex:/\b[0-9]+(?:\.[0-9]+)?\b/},{token:"keyword",regex:/\s{2,}(for|in range|in|end|else if|if|else|with name)(\s{2,}|$)/,caseInsensitive:!0},{token:"storage.type.function",regex:/^(?:\s{2,}\s+)[^ \t*$@&%[.|]+/,push:[{token:"storage.type.function",regex:/(?=\s{2})|\t|$|\s+(?=\|)/,next:"pop"},{defaultToken:"storage.type.function"}]}]},this.normalizeRules()};r.metadata={fileTypes:["robot"],name:"Robot",scopeName:"source.robot"},n.inherits(r,s),t.O=r}}]);
//# sourceMappingURL=8698.6e465c6c.js.map