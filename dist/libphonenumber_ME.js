(function(){var aa=this;function l(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}function m(a,b){function c(){}c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.$=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};var ba=Array.prototype,ca=ba.indexOf?function(a,b,c){return ba.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if("string"==typeof a)return"string"==typeof b&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function da(a,b){a.sort(b||ea)}function ea(a,b){return a>b?1:a<b?-1:0};function fa(a,b){this.g=a;this.h=!!b.m;this.a=b.b;this.l=b.type;this.j=!1;switch(this.a){case ga:case ha:case ia:case ja:case ka:case la:case ma:this.j=!0}this.c=b.defaultValue}var ma=1,la=2,ga=3,ha=4,ia=6,ja=16,ka=18;function na(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};function oa(a,b){this.c=a;this.a={};for(var c=0;c<b.length;c++){var d=b[c];this.a[d.g]=d}}function pa(a){a=na(a.a);da(a,function(a,c){return a.g-c.g});return a};function n(){this.a={};this.g=this.f().a;this.c=this.h=null}function qa(a,b){for(var c=pa(a.f()),d=0;d<c.length;d++){var e=c[d],f=e.g;if(null!=b.a[f]){a.c&&delete a.c[e.g];var g=11==e.a||10==e.a;if(e.h)for(var e=p(b,f)||[],h=0;h<e.length;h++){var k=a,u=f,M=g?e[h].clone():e[h];k.a[u]||(k.a[u]=[]);k.a[u].push(M);k.c&&delete k.c[u]}else e=p(b,f),g?(g=p(a,f))?qa(g,e):q(a,f,e.clone()):q(a,f,e)}}}n.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.a={},a.c&&(a.c={}),qa(a,this));return a};
function p(a,b){var c=a.a[b];if(null==c)return null;if(a.h){if(!(b in a.c)){var d=a.h,e=a.g[b];if(null!=c)if(e.h){for(var f=[],g=0;g<c.length;g++)f[g]=d.c(e,c[g]);c=f}else c=d.c(e,c);return a.c[b]=c}return a.c[b]}return c}function r(a,b,c){var d=p(a,b);return a.g[b].h?d[c||0]:d}function t(a,b){var c;if(null!=a.a[b])c=r(a,b,void 0);else a:{c=a.g[b];if(void 0===c.c){var d=c.l;if(d===Boolean)c.c=!1;else if(d===Number)c.c=0;else if(d===String)c.c=c.j?"0":"";else{c=new d;break a}}c=c.c}return c}
function q(a,b,c){a.a[b]=c;a.c&&(a.c[b]=c)}function v(a,b){delete a.a[b];a.c&&delete a.c[b]}function w(a,b){var c=[],d;for(d in b)0!=d&&c.push(new fa(d,b[d]));return new oa(a,c)};function x(){}x.prototype.a=function(a){new a.c;throw Error("Unimplemented");};x.prototype.c=function(a,b){if(11==a.a||10==a.a)return b instanceof n?b:this.a(a.l.prototype.f(),b);if(14==a.a||!a.j)return b;var c=a.l;if(c===String){if("number"==typeof b)return String(b)}else if(c===Number&&"string"==typeof b&&("Infinity"===b||"-Infinity"===b||"NaN"===b||/^-?[0-9]+$/.test(b)))return Number(b);return b};function y(){}m(y,x);y.prototype.a=function(a,b){var c=new a.c;c.h=this;c.a=b;c.c={};return c};function z(){}m(z,y);z.prototype.c=function(a,b){return 8==a.a?!!b:x.prototype.c.apply(this,arguments)};z.prototype.a=function(a,b){return z.o.a.call(this,a,b)};function A(a,b){null!=a&&this.a.apply(this,arguments)}A.prototype.c="";A.prototype.a=function(a,b,c){this.c+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.c+=arguments[d];return this};A.prototype.toString=function(){return this.c};/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function B(){n.call(this)}var C;m(B,n);function D(){n.call(this)}var E;m(D,n);function F(){n.call(this)}var G;m(F,n);
B.prototype.f=function(){C||(C=w(B,{0:{name:"NumberFormat",i:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,b:9,type:String},2:{name:"format",required:!0,b:9,type:String},3:{name:"leading_digits_pattern",m:!0,b:9,type:String},4:{name:"national_prefix_formatting_rule",b:9,type:String},6:{name:"national_prefix_optional_when_formatting",b:8,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",b:9,type:String}}));return C};B.ctor=B;B.ctor.f=B.prototype.f;
D.prototype.f=function(){E||(E=w(D,{0:{name:"PhoneNumberDesc",i:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",b:9,type:String},3:{name:"possible_number_pattern",b:9,type:String},6:{name:"example_number",b:9,type:String},7:{name:"national_number_matcher_data",b:12,type:String},8:{name:"possible_number_matcher_data",b:12,type:String}}));return E};D.ctor=D;D.ctor.f=D.prototype.f;
F.prototype.f=function(){G||(G=w(F,{0:{name:"PhoneMetadata",i:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",b:11,type:D},2:{name:"fixed_line",b:11,type:D},3:{name:"mobile",b:11,type:D},4:{name:"toll_free",b:11,type:D},5:{name:"premium_rate",b:11,type:D},6:{name:"shared_cost",b:11,type:D},7:{name:"personal_number",b:11,type:D},8:{name:"voip",b:11,type:D},21:{name:"pager",b:11,type:D},25:{name:"uan",b:11,type:D},27:{name:"emergency",b:11,type:D},28:{name:"voicemail",b:11,type:D},24:{name:"no_international_dialling",
b:11,type:D},9:{name:"id",required:!0,b:9,type:String},10:{name:"country_code",b:5,type:Number},11:{name:"international_prefix",b:9,type:String},17:{name:"preferred_international_prefix",b:9,type:String},12:{name:"national_prefix",b:9,type:String},13:{name:"preferred_extn_prefix",b:9,type:String},15:{name:"national_prefix_for_parsing",b:9,type:String},16:{name:"national_prefix_transform_rule",b:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",b:8,defaultValue:!1,type:Boolean},19:{name:"number_format",
m:!0,b:11,type:B},20:{name:"intl_number_format",m:!0,b:11,type:B},22:{name:"main_country_for_code",b:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",b:9,type:String},26:{name:"leading_zero_possible",b:8,defaultValue:!1,type:Boolean}}));return G};F.ctor=F;F.ctor.f=F.prototype.f;function H(){n.call(this)}var I;m(H,n);var ra={w:1,v:5,u:10,s:20};
H.prototype.f=function(){I||(I=w(H,{0:{name:"PhoneNumber",i:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,b:5,type:Number},2:{name:"national_number",required:!0,b:4,type:Number},3:{name:"extension",b:9,type:String},4:{name:"italian_leading_zero",b:8,type:Boolean},8:{name:"number_of_leading_zeros",b:5,defaultValue:1,type:Number},5:{name:"raw_input",b:9,type:String},6:{name:"country_code_source",b:14,defaultValue:1,type:ra},7:{name:"preferred_domestic_carrier_code",b:9,type:String}}));
return I};H.ctor=H;H.ctor.f=H.prototype.f;var J={382:["ME"]},sa={ME:[null,[null,null,"[2-9]\\d{7,8}","\\d{6,9}"],[null,null,"(?:20[2-8]|3(?:0[2-7]|[12][35-7]|3[4-7])|4(?:0[2367]|1[267])|5(?:0[467]|1[267]|2[367]))\\d{5}","\\d{6,8}"],[null,null,"6(?:00\\d|32\\d|[89]\\d{2}|61\\d|7(?:[0-8]\\d|9(?:[3-9]|[0-2]\\d)))\\d{4}","\\d{8,9}"],[null,null,"80\\d{6}","\\d{8}"],[null,null,"(?:9(?:4[1568]|5[178]))\\d{5}","\\d{8}"],[null,null,"NA","NA"],[null,null,"NA","NA"],[null,null,"78[1-9]\\d{5}","\\d{8}"],"ME",382,"00","0",null,null,"0",null,null,null,
[[null,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]|6[036-9]","[2-57-9]|6(?:[03689]|7(?:[0-8]|9[3-9]))"],"0$1","",0],[null,"(67)(9)(\\d{3})(\\d{3})","$1 $2 $3 $4",["679","679[0-2]"],"0$1","",0]],null,[null,null,"NA","NA"],null,null,[null,null,"NA","NA"],[null,null,"77\\d{6}","\\d{8}"],null,null,[null,null,"NA","NA"]]};/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function K(){this.a={}}K.c=function(){return K.a?K.a:K.a=new K};
var L={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},ta={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
7:"7",8:"8",9:"9","+":"+","*":"*"},ua={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",B:"2",
C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},va=/[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?/,N=RegExp("^[+\uff0b]+"),wa=RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),xa=RegExp("[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]"),ya=/[\\\/] *x/,za=RegExp("[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$"),Aa=/(?:.*?[A-Za-z]){3}.*/,Ba=RegExp("(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$",
"i"),Ca=RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$",
"i"),Da=/(\$\d)/,Ea=/\$NP/,Fa=/\$FG/,Ga=/\$CC/;function Ha(a){var b=a.search(xa);0<=b?(a=a.substring(b),a=a.replace(za,""),b=a.search(ya),0<=b&&(a=a.substring(0,b))):a="";return a}function Ia(a){return 2>a.length?!1:O(Ca,a)}function Ja(a){return O(Aa,a)?P(a,ua):P(a,L)}function Ka(a){var b=Ja(a.toString());a.c="";a.a(b)}function P(a,b){for(var c=new A,d,e=a.length,f=0;f<e;++f)d=a.charAt(f),d=b[d.toUpperCase()],null!=d&&c.a(d);return c.toString()}
function La(a){return null!=a&&isNaN(a)&&a.toUpperCase()in sa}function Q(a,b,c){if(0==r(b,2)&&null!=b.a[5]){var d=t(b,5);if(0<d.length)return d}var d=t(b,1),e=R(b);if(0==c)return S(d,0,e,"");if(!(d in J))return e;a=T(a,d,U(d));b=Ma(b,a,c);e=Na(e,a,c);return S(d,c,e,b)}function T(a,b,c){return"001"==c?V(a,""+b):V(a,c)}
function Oa(a,b,c){if(!La(c))return Q(a,b,1);var d=t(b,1),e=R(b);if(!(d in J))return e;if(1==d){if(null!=c&&0<=ca(J[1],c.toUpperCase()))return d+" "+Q(a,b,2)}else if(d==Pa(a,c))return Q(a,b,2);var f=V(a,c),g=t(f,11);c="";O(va,g)?c=g:null!=f.a[17]&&(c=t(f,17));a=T(a,d,U(d));e=Na(e,a,1);b=Ma(b,a,1);return 0<c.length?c+" "+d+" "+e+b:S(d,1,e,b)}function R(a){var b=""+r(a,2);return null!=a.a[4]&&r(a,4)?Array(t(a,8)+1).join("0")+b:b}
function S(a,b,c,d){switch(b){case 0:return"+"+a+c+d;case 1:return"+"+a+" "+c+d;case 3:return"tel:+"+a+"-"+c+d;default:return c+d}}function Na(a,b,c){b=0==(p(b,20)||[]).length||2==c?p(b,19)||[]:p(b,20)||[];b=W(b,a);return null==b?a:Qa(a,b,c,void 0)}function W(a,b){for(var c,d=a.length,e=0;e<d;++e){c=a[e];var f=c.g[3].h?null!=c.a[3]?c.a[3].length:0:null!=c.a[3]?1:0;if(0==f||0==b.search(r(c,3,f-1)))if(f=new RegExp(r(c,1)),O(f,b))return c}return null}
function Qa(a,b,c,d){var e=t(b,2),f=new RegExp(r(b,1)),g=t(b,5),h="";2==c&&null!=d&&0<d.length&&0<g.length?(b=g.replace(Ga,d),e=e.replace(Da,b),h=a.replace(f,e)):(b=t(b,4),h=2==c&&null!=b&&0<b.length?a.replace(f,e.replace(Da,b)):a.replace(f,e));3==c&&(h=h.replace(RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+"),""),h=h.replace(RegExp("[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+",
"g"),"-"));return h}function Ma(a,b,c){return null!=a.a[3]&&0!=r(a,3).length?3==c?";ext="+r(a,3):null!=b.a[13]?r(b,13)+t(a,3):" ext. "+t(a,3):""}function Ra(a,b){return X(a,r(b,1))?X(a,r(b,5))?4:X(a,r(b,4))?3:X(a,r(b,6))?5:X(a,r(b,8))?6:X(a,r(b,7))?7:X(a,r(b,21))?8:X(a,r(b,25))?9:X(a,r(b,28))?10:X(a,r(b,2))?r(b,18)||X(a,r(b,3))?2:0:!r(b,18)&&X(a,r(b,3))?1:-1:-1}
function V(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.a[b];if(null==c){c=sa[b];if(null==c)return null;c=(new z).a(F.f(),c);a.a[b]=c}return c}function X(a,b){return O(t(b,3),a)&&O(t(b,2),a)}function Sa(a,b){var c=Ta(a,b);return Ua(a,b,c)}function Ua(a,b,c){var d=t(b,1),e=T(a,d,c);if(null==e||"001"!=c&&d!=Pa(a,c))return!1;a=R(b);return-1!=Ra(a,e)}
function Ta(a,b){if(null==b)return null;var c=t(b,1),c=J[c];if(null==c)c=null;else if(1==c.length)c=c[0];else a:{for(var d=R(b),e,f=c.length,g=0;g<f;g++){e=c[g];var h=V(a,e);if(null!=h.a[23]){if(0==d.search(r(h,23))){c=e;break a}}else if(-1!=Ra(d,h)){c=e;break a}}c=null}return c}function U(a){a=J[a];return null==a?"ZZ":a[0]}function Pa(a,b){var c=V(a,b);if(null==c)throw"Invalid region code: "+b;return t(c,10)}function Va(a,b){return O(a,b)?0:0==b.search(a)?3:2}
function Wa(a){var b=Y,c=R(a);a=t(a,1);if(!(a in J))return 1;b=T(b,a,U(a));b=r(b,1);b=t(b,3);return Va(b,c)}
function Xa(a,b,c,d,e){if(0==a.length)return 0;a=new A(a);var f;null!=b&&(f=r(b,11));null==f&&(f="NonMatch");var g=a.toString();if(0==g.length)f=20;else if(N.test(g))g=g.replace(N,""),a.c="",a.a(Ja(g)),f=1;else{g=new RegExp(f);Ka(a);f=a.toString();if(0==f.search(g)){var g=f.match(g)[0].length,h=f.substring(g).match(wa);h&&null!=h[1]&&0<h[1].length&&"0"==P(h[1],L)?f=!1:(a.c="",a.a(f.substring(g)),f=!0)}else f=!1;f=f?5:20}d&&q(e,6,f);if(20!=f){if(2>=a.c.length)throw"Phone number too short after IDD";
a:{d=a.toString();if(0!=d.length&&"0"!=d.charAt(0))for(b=d.length,f=1;3>=f&&f<=b;++f)if(a=parseInt(d.substring(0,f),10),a in J){c.a(d.substring(f));c=a;break a}c=0}if(0!=c)return q(e,1,c),c;throw"Invalid country calling code";}if(null!=b&&(f=t(b,10),g=""+f,h=a.toString(),0==h.lastIndexOf(g,0))){var k=new A(h.substring(g.length)),h=r(b,1),g=new RegExp(t(h,2));Ya(k,b,null);b=k.toString();h=t(h,3);if(!O(g,a.toString())&&O(g,b)||3==Va(h,a.toString()))return c.a(b),d&&q(e,6,10),q(e,1,f),f}q(e,1,0);return 0}
function Ya(a,b,c){var d=a.toString(),e=d.length,f=r(b,15);if(0!=e&&null!=f&&0!=f.length&&(f=new RegExp("^(?:"+f+")"),e=f.exec(d))){var g=RegExp,h;h=r(b,1);h=t(h,2);g=new g(h);h=O(g,d);var k=e.length-1;b=r(b,16);if(null==b||0==b.length||null==e[k]||0==e[k].length){if(!h||O(g,d.substring(e[0].length)))null!=c&&0<k&&null!=e[k]&&c.a(e[1]),a.c=""+d.substring(e[0].length)}else if(d=d.replace(f,b),!h||O(g,d))null!=c&&0<k&&c.a(e[1]),a.c=""+d}}
function Z(a,b){var c=Y;if(!La(b)&&0<a.length&&"+"!=a.charAt(0))throw"Invalid country calling code";return Za(c,a,b,!0)}
function Za(a,b,c,d){if(null==b)throw"The string supplied did not seem to be a phone number";if(250<b.length)throw"The string supplied is too long to be a phone number";var e=new A,f=b.indexOf(";phone-context=");if(0<f){var g=f+15;if("+"==b.charAt(g)){var h=b.indexOf(";",g);0<h?e.a(b.substring(g,h)):e.a(b.substring(g))}g=b.indexOf("tel:");e.a(b.substring(0<=g?g+4:0,f))}else e.a(Ha(b));f=e.toString();g=f.indexOf(";isub=");0<g&&(e.c="",e.a(f.substring(0,g)));if(!Ia(e.toString()))throw"The string supplied did not seem to be a phone number";
f=e.toString();if(!(La(c)||null!=f&&0<f.length&&N.test(f)))throw"Invalid country calling code";f=new H;d&&q(f,5,b);a:{b=e.toString();g=b.search(Ba);if(0<=g&&Ia(b.substring(0,g)))for(var h=b.match(Ba),k=h.length,u=1;u<k;++u)if(null!=h[u]&&0<h[u].length){e.c="";e.a(b.substring(0,g));b=h[u];break a}b=""}0<b.length&&q(f,3,b);g=V(a,c);b=new A;h=0;k=e.toString();try{h=Xa(k,g,b,d,f)}catch(M){if("Invalid country calling code"==M&&N.test(k)){if(k=k.replace(N,""),h=Xa(k,g,b,d,f),0==h)throw M;}else throw M;
}0!=h?(e=U(h),e!=c&&(g=T(a,h,e))):(Ka(e),b.a(e.toString()),null!=c?(h=t(g,10),q(f,1,h)):d&&v(f,6));if(2>b.c.length)throw"The string supplied is too short to be a phone number";null!=g&&(a=new A,c=new A(b.toString()),Ya(c,g,a),e=c.toString(),g=r(g,1),g=t(g,3),2!=Va(g,e)&&(b=c,d&&q(f,7,a.toString())));d=b.toString();a=d.length;if(2>a)throw"The string supplied is too short to be a phone number";if(17<a)throw"The string supplied is too long to be a phone number";if(1<d.length&&"0"==d.charAt(0)){q(f,4,
!0);for(a=1;a<d.length-1&&"0"==d.charAt(a);)a++;1!=a&&q(f,8,a)}q(f,2,parseInt(d,10));return f}function O(a,b){var c="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a);return c&&c[0].length==b.length?!0:!1};var Y=K.c();l("phoneUtils.isPossibleNumber",function(a,b){var c=Z(a,b||"us");return 0==Wa(c)});l("phoneUtils.isPossibleNumberWithReason",function(a,b){var c=Z(a,b||"us");return Wa(c)});l("phoneUtils.isValidNumber",function(a,b){var c=Z(a,b||"us");return Sa(Y,c)});l("phoneUtils.isValidNumberForRegion",function(a,b){b=b||"us";var c=Z(a,b);return Ua(Y,c,b)});l("phoneUtils.getRegionCodeForNumber",function(a,b){var c=Z(a,b||"us");return Ta(Y,c)});
l("phoneUtils.getNumberType",function(a,b){var c,d;d=Z(a,b||"us");var e=Y,f=Ta(e,d),e=T(e,t(d,1),f);null==e?d=-1:(d=R(d),d=Ra(d,e));switch(d){case 0:c="FIXED_LINE";break;case 1:c="MOBILE";break;case 2:c="FIXED_LINE_OR_MOBILE";break;case 3:c="TOLL_FREE";break;case 4:c="PREMIUM_RATE";break;case 5:c="SHARED_COST";break;case 6:c="VOIP";break;case 7:c="PERSONAL_NUMBER";break;case 8:c="PAGER";break;case 9:c="UAN";break;case -1:c="UNKNOWN"}return c});
l("phoneUtils.formatE164",function(a,b){var c=Z(a,b||"us");return Q(Y,c,0)});l("phoneUtils.formatNational",function(a,b){var c=Z(a,b||"us");return Q(Y,c,2)});l("phoneUtils.formatInternational",function(a,b){var c=Z(a,b||"us");return Q(Y,c,1)});
l("phoneUtils.formatInOriginalFormat",function(a,b){b=b||"us";var c;c=Z(a,b);var d=b,e=Y,f;if(!(f=null==c.a[5])){if(f=null!=c.a[4])f=t(c,1),f=T(e,f,U(f)),f=!(null!=f&&t(f,26));if(f=!f)if(f=t(c,1),f=T(e,f,U(f)),null==f)f=!1;else{var g=R(c);f=null!=W(p(f,19)||[],g)}}if(f)if(null!=c.a[6]){switch(r(c,6)){case 1:e=Q(e,c,1);break;case 5:e=Oa(e,c,d);break;case 10:e=Q(e,c,1).substring(1);break;default:f=U(t(c,1));var h;d=V(e,f);null==d?h=null:(d=t(d,12),h=0==d.length?null:d=d.replace("~",""));d=Q(e,c,2);
if(null==h||0==h.length){e=d;break}var k;b:{g=t(c,5);g=P(g,L);if(0==g.lastIndexOf(h,0))try{k=Sa(e,Za(e,g.substring(h.length),f,!1));break b}catch(u){}k=!1}if(k){e=d;break}k=V(e,f);f=R(c);k=W(p(k,19)||[],f);if(null==k){e=d;break}f=t(k,4);g=f.indexOf("$1");if(0>=g){e=d;break}f=f.substring(0,g);f=P(f,L);if(0==f.length){e=d;break}k=k.clone();v(k,4);f=[k];k=t(c,1);d=R(c);k in J?(e=T(e,k,U(k)),g="",g=W(f,d),null==g?g=d:(f=g.clone(),g=t(g,4),0<g.length&&(h=t(e,12),0<h.length?(g=g.replace(Ea,h).replace(Fa,
"$1"),q(f,4,g)):v(f,4)),g=Qa(d,f,2)),e=Ma(c,e,2),e=S(k,2,g,e)):e=d}c=t(c,5);null!=e&&0<c.length&&(k=P(e,ta),d=P(c,ta),k!=d&&(e=c));c=e}else c=Q(e,c,2);else c=t(c,5);return c});l("phoneUtils.formatOutOfCountryCallingNumber",function(a,b,c){if(c)return a=Z(a,b),Oa(Y,a,c)});})();
