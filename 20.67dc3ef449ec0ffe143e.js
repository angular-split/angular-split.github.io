(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{bqVE:function(i,n,e){"use strict";e.r(n),e.d(n,"SplitTransitionsModule",function(){return M});var t=e("ofXK"),a=e("tyNb"),o=e("vX8g"),s=e("oRDy"),b=e("mrSG"),c=e("AD80"),r=e("R+bW"),l=e("fXoL"),u=e("y7ZB"),p=["logs"];function m(i,n){if(1&i&&(l.Nb(0,"li",22),l.oc(1),l.Mb()),2&i){var e=n.$implicit;l.bc("ngClass",e.type),l.yb(1),l.pc(e.text)}}var d=function(i){function n(){var n=null!==i&&i.apply(this,arguments)||this;return n.action={a1s:25,a2s:50,a3s:25,a1v:!0,a2v:!0,a3v:!0,useTransition:!0},n.logMessages=[],n.only=0,n.keepA=!0,n.keepB=!0,n.keepC=!0,n}return Object(b.b)(n,i),n.prototype.log=function(i){var n=this;this.logMessages.push({type:"transitionEnd",text:Object(r.a)(new Date)+" > transitionEnd event > "+i}),setTimeout(function(){n.logsEl.nativeElement.scroll&&n.logsEl.nativeElement.scroll({top:30*n.logMessages.length})})},n.prototype.left=function(){switch(this.only){case 0:case 2:case 3:return void(this.only=1);case 1:return void(this.only=0)}},n.prototype.center=function(){switch(this.only){case 0:case 1:case 3:return void(this.only=2);case 2:return void(this.only=0)}},n.prototype.right=function(){switch(this.only){case 0:case 1:case 2:return void(this.only=3);case 3:return void(this.only=0)}},n.\u0275fac=function(i){return v(i||n)},n.\u0275cmp=l.Eb({type:n,selectors:[["sp-ex-transitions"]],viewQuery:function(i,n){var e;1&i&&l.sc(p,!0),2&i&&l.fc(e=l.Vb())&&(n.logsEl=e.first)},hostAttrs:[1,"split-example-page"],features:[l.vb],decls:138,vars:53,consts:[[1,"container"],[3,"type"],[1,"split-example"],["direction","horizontal","disabled","true",3,"useTransition","dragEnd","transitionEnd"],["order","1",3,"visible","size"],["order","2",3,"visible","size"],["order","3",3,"visible","size"],[1,"btns"],[1,"btn","btn-warning",3,"click"],[1,"btn-group"],[1,"logs"],["logs",""],[3,"ngClass",4,"ngFor","ngForOf"],[1,"split-example","ex2",2,"height","150px"],["useTransition","true","unit","pixel"],["size","200","minSize","200","order","1",3,"visible"],["size","*","order","2",3,"visible"],["size","200","minSize","200","order","3",3,"visible"],["useTransition","true","unit","percent"],["size","30","minSize","30","order","1",3,"visible"],["size","40","order","2",3,"visible"],["size","30","minSize","30","order","3",3,"visible"],[3,"ngClass"]],template:function(i,n){1&i&&(l.oc(0),l.Nb(1,"div",0),l.Lb(2,"sp-example-title",1),l.Nb(3,"div",2),l.Nb(4,"as-split",3),l.Ub("dragEnd",function(i){return n.action.a1s=i.sizes[0],n.action.a2s=i.sizes[1],n.action.a3s=i.sizes[2]})("transitionEnd",function(i){return n.log(i)}),l.Nb(5,"as-split-area",4),l.Nb(6,"p"),l.oc(7," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "),l.Mb(),l.Mb(),l.Nb(8,"as-split-area",5),l.Nb(9,"p"),l.oc(10," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? "),l.Mb(),l.Mb(),l.Nb(11,"as-split-area",6),l.Nb(12,"p"),l.oc(13," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? "),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Lb(14,"br"),l.Nb(15,"div",7),l.Nb(16,"div"),l.Nb(17,"button",8),l.Ub("click",function(){return n.action.useTransition=!n.action.useTransition}),l.oc(18),l.Mb(),l.Mb(),l.Nb(19,"div",9),l.Nb(20,"label",8),l.Ub("click",function(){return n.action.a1v=!n.action.a1v}),l.oc(21),l.Mb(),l.Nb(22,"label",8),l.Ub("click",function(){return n.action.a2v=!n.action.a2v}),l.oc(23),l.Mb(),l.Nb(24,"label",8),l.Ub("click",function(){return n.action.a3v=!n.action.a3v}),l.oc(25),l.Mb(),l.Mb(),l.Nb(26,"div",9),l.Nb(27,"label",8),l.Ub("click",function(){return n.action.a1s=25,n.action.a2s=50,n.action.a3s=25}),l.oc(28,"Set sizes to 25/50/25"),l.Mb(),l.Nb(29,"label",8),l.Ub("click",function(){return n.action.a1s=40,n.action.a2s=20,n.action.a3s=40}),l.oc(30,"Set sizes to 40/20/40"),l.Mb(),l.Mb(),l.Mb(),l.Nb(31,"div",10),l.Nb(32,"p"),l.oc(33,"Events "),l.Nb(34,"code"),l.oc(35,"(transitionEnd)"),l.Mb(),l.oc(36,":"),l.Mb(),l.Nb(37,"ul",null,11),l.mc(39,m,2,2,"li",12),l.Mb(),l.Mb(),l.Lb(40,"br"),l.Lb(41,"hr"),l.Lb(42,"br"),l.Nb(43,"div",13),l.Nb(44,"as-split",14),l.Nb(45,"as-split-area",15),l.Nb(46,"button",8),l.Ub("click",function(){return n.left()}),l.oc(47),l.Mb(),l.Nb(48,"p"),l.oc(49,"size: 200px"),l.Lb(50,"br"),l.oc(51,"minSize: 200px"),l.Mb(),l.Mb(),l.Nb(52,"as-split-area",16),l.Nb(53,"button",8),l.Ub("click",function(){return n.center()}),l.oc(54),l.Mb(),l.Nb(55,"p"),l.oc(56,"size: *"),l.Mb(),l.Mb(),l.Nb(57,"as-split-area",17),l.Nb(58,"button",8),l.Ub("click",function(){return n.right()}),l.oc(59),l.Mb(),l.Nb(60,"p"),l.oc(61,"size: 200px"),l.Lb(62,"br"),l.oc(63,"minSize: 200px"),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Nb(64,"div",13),l.Nb(65,"as-split",18),l.Nb(66,"as-split-area",19),l.Nb(67,"button",8),l.Ub("click",function(){return n.left()}),l.oc(68),l.Mb(),l.Nb(69,"p"),l.oc(70,"size: 30%"),l.Lb(71,"br"),l.oc(72,"minSize: 30%"),l.Mb(),l.Mb(),l.Nb(73,"as-split-area",20),l.Nb(74,"button",8),l.Ub("click",function(){return n.center()}),l.oc(75),l.Mb(),l.Nb(76,"p"),l.oc(77,"size: 40%"),l.Mb(),l.Mb(),l.Nb(78,"as-split-area",21),l.Nb(79,"button",8),l.Ub("click",function(){return n.right()}),l.oc(80),l.Mb(),l.Nb(81,"p"),l.oc(82,"size: 30%"),l.Lb(83,"br"),l.oc(84,"minSize: 30%"),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Lb(85,"br"),l.Lb(86,"hr"),l.Lb(87,"br"),l.Nb(88,"div",7),l.Nb(89,"div",9),l.Nb(90,"label",8),l.Ub("click",function(){return n.keepA=!n.keepA}),l.oc(91),l.Mb(),l.Nb(92,"label",8),l.Ub("click",function(){return n.keepB=!n.keepB}),l.oc(93),l.Mb(),l.Nb(94,"label",8),l.Ub("click",function(){return n.keepC=!n.keepC}),l.oc(95),l.Mb(),l.Mb(),l.Mb(),l.Nb(96,"div",13),l.Nb(97,"as-split",14),l.Nb(98,"as-split-area",15),l.Nb(99,"p"),l.oc(100,"A"),l.Lb(101,"br"),l.oc(102,"size: 200px"),l.Lb(103,"br"),l.oc(104,"minSize: 200px"),l.Mb(),l.Mb(),l.Nb(105,"as-split-area",16),l.Nb(106,"p"),l.oc(107,"B"),l.Lb(108,"br"),l.oc(109,"size: *"),l.Mb(),l.Mb(),l.Nb(110,"as-split-area",17),l.Nb(111,"p"),l.oc(112,"C"),l.Lb(113,"br"),l.oc(114,"size: 200px"),l.Lb(115,"br"),l.oc(116,"minSize: 200px"),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Nb(117,"div",13),l.Nb(118,"as-split",18),l.Nb(119,"as-split-area",19),l.Nb(120,"p"),l.oc(121,"A"),l.Lb(122,"br"),l.oc(123,"size: 30%"),l.Lb(124,"br"),l.oc(125,"minSize: 30%"),l.Mb(),l.Mb(),l.Nb(126,"as-split-area",20),l.Nb(127,"p"),l.oc(128,"B"),l.Lb(129,"br"),l.oc(130,"size: 40%"),l.Mb(),l.Mb(),l.Nb(131,"as-split-area",21),l.Nb(132,"p"),l.oc(133,"C"),l.Lb(134,"br"),l.oc(135,"size: 30%"),l.Lb(136,"br"),l.oc(137,"minSize: 30%"),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb()),2&i&&(l.qc(" ",n.testChangeDetectorRun()," "),l.yb(2),l.bc("type",n.exampleEnum.TRANSITION),l.yb(2),l.bc("useTransition",n.action.useTransition),l.yb(1),l.bc("visible",n.action.a1v)("size",n.action.a1s),l.yb(3),l.bc("visible",n.action.a2v)("size",n.action.a2s),l.yb(3),l.bc("visible",n.action.a3v)("size",n.action.a3s),l.yb(6),l.Cb("active",!n.action.useTransition),l.yb(1),l.qc(" ","useTransition: "+n.action.useTransition," "),l.yb(2),l.Cb("active",!n.action.a1v),l.yb(1),l.pc("area1: "+n.action.a1v),l.yb(1),l.Cb("active",!n.action.a2v),l.yb(1),l.pc("area2: "+n.action.a2v),l.yb(1),l.Cb("active",!n.action.a3v),l.yb(1),l.pc("area3: "+n.action.a3v),l.yb(2),l.Cb("disabled",25===n.action.a1s||!n.action.a1v||!n.action.a2v||!n.action.a3v),l.yb(2),l.Cb("disabled",40===n.action.a1s||!n.action.a1v||!n.action.a2v||!n.action.a3v),l.yb(10),l.bc("ngForOf",n.logMessages),l.yb(6),l.bc("visible",1===n.only||0===n.only),l.yb(2),l.pc(1===n.only?"LEFT \u2b05\ufe0f":"LEFT \u27a1"),l.yb(5),l.bc("visible",2===n.only||0===n.only),l.yb(2),l.qc(" ",2===n.only?"\u27a1 \ufe0fCENTER \u2b05":"\ufe0f\u2b05 \ufe0fCENTER \u27a1"," "),l.yb(3),l.bc("visible",3===n.only||0===n.only),l.yb(2),l.pc(3===n.only?"\u27a1 RIGHT":"\u2b05\ufe0f RIGHT"),l.yb(7),l.bc("visible",1===n.only||0===n.only),l.yb(2),l.pc(1===n.only?"LEFT \u2b05\ufe0f":"LEFT \u27a1"),l.yb(5),l.bc("visible",2===n.only||0===n.only),l.yb(2),l.qc(" ",2===n.only?"\u27a1 \ufe0fCENTER \u2b05":"\ufe0f\u2b05 \ufe0fCENTER \u27a1"," "),l.yb(3),l.bc("visible",3===n.only||0===n.only),l.yb(2),l.pc(3===n.only?"\u27a1 RIGHT":"\u2b05\ufe0f RIGHT"),l.yb(10),l.Cb("active",!n.keepA),l.yb(1),l.pc("A: "+n.keepA),l.yb(1),l.Cb("active",!n.keepB),l.yb(1),l.pc("B: "+n.keepB),l.yb(1),l.Cb("active",!n.keepC),l.yb(1),l.pc("C: "+n.keepC),l.yb(3),l.bc("visible",n.keepA),l.yb(7),l.bc("visible",n.keepB),l.yb(5),l.bc("visible",n.keepC),l.yb(9),l.bc("visible",n.keepA),l.yb(7),l.bc("visible",n.keepB),l.yb(5),l.bc("visible",n.keepC))},directives:[u.a,o.c,o.b,t.j,t.i],styles:["button[_ngcontent-%COMP%] {\n        margin: 4px;\n      }\n\n      .btns[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-around;\n        flex-wrap: wrap;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-bottom: 10px;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n      }\n\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n        flex: 1 1 20%;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n        flex: 1 1 40%;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n        flex: 1 1 40%;\n      }\n      .logs[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n        margin-bottom: 5px;\n      }\n      .logs[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n        height: 200px;\n        width: 100%;\n        overflow-y: scroll;\n        overflow-x: hidden;\n        border: 1px solid #bfbfbf;\n        background-color: #e8e8e8;\n      }\n\n      .as-split-area[_ngcontent-%COMP%] {\n        background: lightgrey;\n      }\n\n      .as-split-area.as-min[_ngcontent-%COMP%] {\n        background: green;\n      }\n\n      .as-split-area.as-max[_ngcontent-%COMP%] {\n        background: red;\n      }\n\n      [_nghost-%COMP%]   .ex2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n\n      [_nghost-%COMP%]   .ex2[_ngcontent-%COMP%]     .as-transition.as-init:not(.as-dragging) > .as-split-area, [_nghost-%COMP%]     .as-transition.as-init:not(.as-dragging) > .as-split-gutter {\n        transition: flex-basis 1s !important;\n      }"],changeDetection:0}),n}(c.a),v=l.Pb(d),M=function(){function i(){}return i.\u0275mod=l.Ib({type:i}),i.\u0275inj=l.Hb({factory:function(n){return new(n||i)},imports:[[t.c,s.a,a.f.forChild([{path:"",component:d}]),o.a.forChild()]]}),i}()}}]);