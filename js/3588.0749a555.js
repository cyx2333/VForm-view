"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[3588],{93588:function(e,t,n){var i=n(41218),o=n(38507).Mode,r=n(78455).O,a=function(){this.HighlightRules=r,this.$behaviour=this.$defaultBehaviour};i.inherits(a,o),function(){this.lineCommentStart=";",this.$id="ace/mode/lisp"}.call(a.prototype),t.Mode=a},78455:function(e,t,n){var i=n(41218),o=n(98288).r,r=function(){var e="case|do|let|loop|if|else|when",t="eq|neq|and|or",n="null|nil",i="cons|car|cdr|cond|lambda|format|setq|setf|quote|eval|append|list|listp|memberp|t|load|progn",o=this.createKeywordMapper({"keyword.control":e,"keyword.operator":t,"constant.language":n,"support.function":i},"identifier",!0);this.$rules={start:[{token:"comment",regex:";.*$"},{token:["storage.type.function-type.lisp","text","entity.name.function.lisp"],regex:"(?:\\b(?:(defun|defmethod|defmacro))\\b)(\\s+)((?:\\w|\\-|\\!|\\?)*)"},{token:["punctuation.definition.constant.character.lisp","constant.character.lisp"],regex:"(#)((?:\\w|[\\\\+-=<>'\"&#])+)"},{token:["punctuation.definition.variable.lisp","variable.other.global.lisp","punctuation.definition.variable.lisp"],regex:"(\\*)(\\S*)(\\*)"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(?:L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(?:L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:o,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"string",regex:'"(?=.)',next:"qqstring"}],qqstring:[{token:"constant.character.escape.lisp",regex:"\\\\."},{token:"string",regex:'[^"\\\\]+'},{token:"string",regex:"\\\\$",next:"qqstring"},{token:"string",regex:'"|$',next:"start"}]}};i.inherits(r,o),t.O=r}}]);
//# sourceMappingURL=3588.0749a555.js.map