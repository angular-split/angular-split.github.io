(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{gUNX:function(t,n,e){"use strict";e.r(n),e.d(n,"CollapseExpandModule",function(){return d});var o=e("ofXK"),i=e("tyNb"),b=e("vX8g"),c=e("oRDy"),a=e("mrSG"),r=e("AD80"),s=e("fXoL"),l=e("y7ZB"),p=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Object(a.b)(n,t),n.prototype.ngAfterViewInit=function(){},n.prototype.onClose1=function(t){void 0===t&&(t=0),this.areasEl.first.collapse(t)},n.prototype.onClose3=function(t){void 0===t&&(t=0),this.areasEl.last.collapse(t,"left")},n.prototype.onExpand1=function(){this.areasEl.first.expand()},n.prototype.onExpand3=function(){this.areasEl.last.expand()},n.\u0275fac=function(t){return u(t||n)},n.\u0275cmp=s.Eb({type:n,selectors:[["sp-ex-class-collapse"]],viewQuery:function(t,n){if(1&t&&(s.sc(b.c,!0),s.sc(b.b,!0)),2&t){var e=void 0;s.fc(e=s.Vb())&&(n.splitEl=e.first),s.fc(e=s.Vb())&&(n.areasEl=e)}},hostAttrs:[1,"split-example-page"],features:[s.vb],decls:43,vars:4,consts:[[1,"container"],[3,"type"],[1,"split-example"],[3,"unit"],[3,"size"],[2,"height","100%","display","flex","justify-content","center","align-items","center","background-color","antiquewhite"],[2,"height","100%","display","flex","justify-content","center","align-items","center","background-color","gainsboro"],[2,"height","100%","display","flex","justify-content","center","align-items","center","background-color","burlywood"],[1,"btns"],[1,"btn","btn-warning",2,"margin-right","10px",3,"click"],[1,"btn","btn-warning",3,"click"]],template:function(t,n){1&t&&(s.Nb(0,"div",0),s.Lb(1,"sp-example-title",1),s.Nb(2,"div",2),s.Nb(3,"as-split",3),s.Nb(4,"as-split-area",4),s.Nb(5,"div",5),s.oc(6," area #1 "),s.Mb(),s.Mb(),s.Nb(7,"as-split-area"),s.Nb(8,"div",6),s.oc(9," area #2 "),s.Mb(),s.Mb(),s.Nb(10,"as-split-area",4),s.Nb(11,"div",7),s.oc(12," area #3 "),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Lb(13,"br"),s.Nb(14,"ul"),s.Nb(15,"li"),s.Nb(16,"b"),s.oc(17,"collapse(newSize:number = 0)"),s.Mb(),s.oc(18," will force the area the be the width given and its gutter disabled."),s.Mb(),s.Nb(19,"li"),s.Nb(20,"b"),s.oc(21,"expand()"),s.Mb(),s.oc(22," will restore the area to its size before it was collapsed."),s.Mb(),s.Mb(),s.Lb(23,"br"),s.Lb(24,"br"),s.Nb(25,"div",8),s.Nb(26,"div"),s.Nb(27,"button",9),s.Ub("click",function(){return n.onClose1()}),s.oc(28,"Collapse #1 to 0px"),s.Mb(),s.Nb(29,"button",10),s.Ub("click",function(){return n.onClose1(40)}),s.oc(30,"Collapse #1 to 40px"),s.Mb(),s.Mb(),s.Nb(31,"div"),s.Nb(32,"button",9),s.Ub("click",function(){return n.onClose3()}),s.oc(33,"Collapse #3 to 0px"),s.Mb(),s.Nb(34,"button",10),s.Ub("click",function(){return n.onClose3(60)}),s.oc(35,"Collapse #3 to 60px"),s.Mb(),s.Mb(),s.Mb(),s.Nb(36,"div",8),s.Nb(37,"div"),s.Nb(38,"button",9),s.Ub("click",function(){return n.onExpand1()}),s.oc(39,"Expand #1"),s.Mb(),s.Mb(),s.Nb(40,"div"),s.Nb(41,"button",9),s.Ub("click",function(){return n.onExpand3()}),s.oc(42,"Expand #3"),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&t&&(s.yb(1),s.bc("type",n.exampleEnum.COLLAPSE),s.yb(2),s.bc("unit","pixel"),s.yb(1),s.bc("size",200),s.yb(6),s.bc("size",100))},directives:[l.a,b.c,b.b],styles:[".btns[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-around;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n      }"],changeDetection:0}),n}(r.a),u=s.Pb(p),d=function(){function t(){}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(n){return new(n||t)},imports:[[o.c,c.a,i.f.forChild([{path:"",component:p}]),b.a.forChild()]]}),t}()}}]);