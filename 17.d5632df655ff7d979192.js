(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Jov6:function(n,t,e){"use strict";e.r(t),e.d(t,"MinMaxSplitModule",function(){return m});var i=e("ofXK"),b=e("tyNb"),o=e("vX8g"),c=e("oRDy"),a=e("mrSG"),r=e("AD80"),s=e("fXoL"),M=e("y7ZB"),p=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.restrictMove=!1,t}return Object(a.b)(t,n),t.prototype.log=function(n){console.log("dragEnd ",n.sizes," total > ",n.sizes.reduce(function(n,t){return n+t},0))},t.\u0275fac=function(n){return l(n||t)},t.\u0275cmp=s.Eb({type:t,selectors:[["ng-component"]],hostAttrs:[1,"split-example-page"],features:[s.vb],decls:108,vars:5,consts:[[1,"container"],[3,"type"],[1,"split-example","ex-percent"],["unit","percent","gutterSize","30",3,"restrictMove","dragEnd"],["size","30","minSize","20","maxSize","30"],[1,"txt-min"],[1,"txt-max"],["size","40","minSize","30","maxSize","50"],["size","30","minSize","20","maxSize","50"],[1,"split-example","ex-pixel"],["unit","pixel","gutterSize","30",3,"restrictMove","dragEnd"],["size","200","minSize","100","maxSize","200"],["size","*"],["size","150","lockSize","true"],[1,"txt-minmax"],["size","250","minSize","250","maxSize","400"],[1,"btns"],[1,"btn","btn-warning",3,"click"]],template:function(n,t){1&n&&(s.oc(0),s.Nb(1,"div",0),s.Lb(2,"sp-example-title",1),s.Nb(3,"h5"),s.oc(4,"Percent mode:"),s.Mb(),s.Nb(5,"div",2),s.Nb(6,"as-split",3),s.Ub("dragEnd",function(n){return t.log(n)}),s.Nb(7,"as-split-area",4),s.Nb(8,"p"),s.oc(9,'size="30"'),s.Lb(10,"br"),s.oc(11,'minSize="20"'),s.Lb(12,"br"),s.oc(13,'maxSize="30"'),s.Mb(),s.Nb(14,"div",5),s.Nb(15,"p"),s.oc(16,"MIN"),s.Mb(),s.Mb(),s.Nb(17,"div",6),s.Nb(18,"p"),s.oc(19,"MAX"),s.Mb(),s.Mb(),s.Mb(),s.Nb(20,"as-split-area",7),s.Nb(21,"p"),s.oc(22,'size="40"'),s.Lb(23,"br"),s.oc(24,'minSize="30"'),s.Lb(25,"br"),s.oc(26,'maxSize="50"'),s.Mb(),s.Nb(27,"div",5),s.Nb(28,"p"),s.oc(29,"MIN"),s.Mb(),s.Mb(),s.Nb(30,"div",6),s.Nb(31,"p"),s.oc(32,"MAX"),s.Mb(),s.Mb(),s.Mb(),s.Nb(33,"as-split-area",8),s.Nb(34,"p"),s.oc(35,'size="30"'),s.Lb(36,"br"),s.oc(37,'minSize="20"'),s.Lb(38,"br"),s.oc(39,'maxSize="50"'),s.Mb(),s.Nb(40,"div",5),s.Nb(41,"p"),s.oc(42,"MIN"),s.Mb(),s.Mb(),s.Nb(43,"div",6),s.Nb(44,"p"),s.oc(45,"MAX"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(46,"h5"),s.oc(47,"Pixel mode:"),s.Mb(),s.Nb(48,"div",9),s.Nb(49,"as-split",10),s.Ub("dragEnd",function(n){return t.log(n)}),s.Nb(50,"as-split-area",11),s.Nb(51,"p"),s.oc(52,'size="200"'),s.Lb(53,"br"),s.oc(54,'minSize="100"'),s.Lb(55,"br"),s.oc(56,'maxSize="200"'),s.Mb(),s.Nb(57,"div",5),s.Nb(58,"p"),s.oc(59,"MIN"),s.Mb(),s.Mb(),s.Nb(60,"div",6),s.Nb(61,"p"),s.oc(62,"MAX"),s.Mb(),s.Mb(),s.Mb(),s.Nb(63,"as-split-area",12),s.Nb(64,"p"),s.oc(65,'size="*"'),s.Mb(),s.Nb(66,"div",5),s.Nb(67,"p"),s.oc(68,"MIN"),s.Mb(),s.Mb(),s.Nb(69,"div",6),s.Nb(70,"p"),s.oc(71,"MAX"),s.Mb(),s.Mb(),s.Mb(),s.Nb(72,"as-split-area",13),s.Nb(73,"p"),s.oc(74,'size="150"'),s.Lb(75,"br"),s.oc(76,'lockSize="true"'),s.Lb(77,"br"),s.Lb(78,"br"),s.oc(79,"Same as"),s.Lb(80,"br"),s.oc(81,'minSize="150"'),s.Lb(82,"br"),s.oc(83,'maxSize="150"'),s.Mb(),s.Nb(84,"div",14),s.Nb(85,"p"),s.oc(86,"MIN"),s.Lb(87,"br"),s.oc(88,"&"),s.Lb(89,"br"),s.oc(90,"MAX"),s.Mb(),s.Mb(),s.Mb(),s.Nb(91,"as-split-area",15),s.Nb(92,"p"),s.oc(93,'size="250"'),s.Lb(94,"br"),s.oc(95,'minSize="250"'),s.Lb(96,"br"),s.oc(97,'maxSize="400"'),s.Mb(),s.Nb(98,"div",5),s.Nb(99,"p"),s.oc(100,"MIN"),s.Mb(),s.Mb(),s.Nb(101,"div",6),s.Nb(102,"p"),s.oc(103,"MAX"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Lb(104,"br"),s.Nb(105,"div",16),s.Nb(106,"button",17),s.Ub("click",function(){return t.restrictMove=!t.restrictMove}),s.oc(107),s.Mb(),s.Mb(),s.Mb()),2&n&&(s.qc(" ",t.testChangeDetectorRun()," "),s.yb(2),s.bc("type",t.exampleEnum.MINMAX),s.yb(4),s.bc("restrictMove",t.restrictMove),s.yb(43),s.bc("restrictMove",t.restrictMove),s.yb(58),s.qc(" ",'Restrict move: "'+t.restrictMove+'"'," "))},directives:[M.a,o.c,o.b],styles:[".btns[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n\n      .txt-min[_ngcontent-%COMP%], .txt-max[_ngcontent-%COMP%], .txt-minmax[_ngcontent-%COMP%] {\n        pointer-events: none;\n        position: absolute;\n        opacity: 0;\n        transition: opacity 0.2s;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      .txt-min[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .txt-max[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .txt-minmax[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n        font-size: 30px;\n        font-weight: bold;\n        color: #cccccc;\n        text-align: center;\n      }\n\n      as-split-area[_ngcontent-%COMP%] {\n        background: lightblue;\n        transition: background 0.2s;\n        position: relative;\n        overflow: hidden !important;\n      }\n\n      as-split-area[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n        position: absolute;\n        font-size: 12px;\n        font-weight: bold;\n        padding: 5px;\n        line-height: 12px;\n      }\n\n      as-split-area.as-min[_ngcontent-%COMP%] {\n        background: green;\n      }\n      as-split-area.as-min[_ngcontent-%COMP%]   .txt-min[_ngcontent-%COMP%] {\n        opacity: 1;\n      }\n      as-split-area.as-max[_ngcontent-%COMP%] {\n        background: red;\n      }\n      as-split-area.as-max[_ngcontent-%COMP%]   .txt-max[_ngcontent-%COMP%] {\n        opacity: 1;\n      }\n      as-split-area.as-min.as-max[_ngcontent-%COMP%] {\n        background: #ff77e7;\n      }\n      as-split-area.as-min.as-max[_ngcontent-%COMP%]   .txt-minmax[_ngcontent-%COMP%] {\n        opacity: 1;\n      }"],changeDetection:0}),t}(r.a),l=s.Pb(p),m=function(){function n(){}return n.\u0275mod=s.Ib({type:n}),n.\u0275inj=s.Hb({factory:function(t){return new(t||n)},imports:[[i.c,o.a.forChild(),b.f.forChild([{path:"",component:p}]),c.a]]}),n}()}}]);