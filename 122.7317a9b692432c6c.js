"use strict";(self.webpackChunkangular_split_app=self.webpackChunkangular_split_app||[]).push([[122],{7122:function(U,f,i){i.r(f),i.d(f,{GeekDemoModule:function(){return D}});var b=i(5134),p=i(6019),s=i(7537),C=i(2979),m=i(4845),v=i(8210),Z=i(7289),_=i(1885),c=i(3841),h=i(9549),M=i(9978),e=i(512),T=i(5666),A=i(3908);function k(l,g){if(1&l&&(e.TgZ(0,"as-split-area",24),e._uU(1),e.qZA()),2&l){var a=e.oxw(),n=a.$implicit,r=a.index;e.Udp("background-color",n.color),e.Q6J("visible",n.visible)("order",r)("size",n.size),e.xp6(1),e.Oqu(n.id)}}function J(l,g){1&l&&e.YNc(0,k,2,6,"as-split-area",23),2&l&&e.Q6J("ngIf",g.$implicit.present)}function x(l,g){if(1&l){var a=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",25),e._uU(2),e.qZA(),e.TgZ(3,"div"),e.TgZ(4,"button",6),e.NdJ("click",function(){var t=e.CHM(a).item;return t.value.present=!t.value.present}),e._uU(5),e.qZA(),e.TgZ(6,"button",6),e.NdJ("click",function(){var t=e.CHM(a).item;return t.value.visible=!t.value.visible}),e._uU(7),e.qZA(),e.TgZ(8,"button",6),e.NdJ("click",function(){var t=e.CHM(a).item;return e.oxw().removeArea(t.value)}),e._uU(9,"Remove"),e.qZA(),e.qZA(),e.qZA()}if(2&l){var n=g.item;e.Gre("area-item id-",n.value.id,""),e.Udp("background-color",n.value.color),e.xp6(2),e.Oqu(n.value.id),e.xp6(2),e.ekj("active",!n.value.present),e.xp6(1),e.hij(" ",'*ngIf="'+n.value.present+'"'," "),e.xp6(1),e.ekj("active",!n.value.visible),e.xp6(1),e.hij(" ",'[visible]="'+n.value.visible+'"'," ")}}var G=function(){var l=function(g){(0,_.Z)(n,g);var a=(0,c.Z)(n);function n(){var r;return(0,b.Z)(this,n),(r=a.apply(this,arguments)).d={dir:"horizontal",restrictMove:!0,useTransition:!0,gutterSize:null,gutterStep:null,width:null,height:null,areas:[{id:d(),color:u(),size:25,present:!0,visible:!0},{id:d(),color:u(),size:50,present:!0,visible:!0},{id:d(),color:u(),size:25,present:!0,visible:!0}]},r}return(0,Z.Z)(n,[{key:"trackByFct",value:function(o,t){return t.id}},{key:"addArea",value:function(){this.d.areas.push({id:d(),color:u(),size:25,present:!0,visible:!0}),this.sortableComponent.writeValue(this.d.areas)}},{key:"removeArea",value:function(o){this.d.areas.splice(this.d.areas.indexOf(o),1),this.sortableComponent.writeValue(this.d.areas)}}]),n}(M.D);return l.\u0275fac=function(){var g;return function(n){return(g||(g=e.n5z(l)))(n||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["sp-ex-geek-demo"]],viewQuery:function(a,n){var r;1&a&&e.Gf(h.Ts,5),2&a&&e.iGM(r=e.CRH())&&(n.sortableComponent=r.first)},hostAttrs:[1,"split-example-page"],features:[e.qOj],decls:66,vars:36,consts:[[1,"container"],[3,"type"],[1,"split-example",2,"background-color","#e5e0e0"],[2,"background-color","#ffffff",3,"direction","restrictMove","gutterSize","gutterStep","useTransition"],["ngFor","",3,"ngForOf","ngForTrackBy"],[1,"opts-prop"],[1,"btn","btn-warning","btn-sm",3,"click"],[1,"btn-group"],["btnRadio","horizontal",1,"btn","btn-warning","btn-sm",3,"ngModel","ngModelChange"],["btnRadio","vertical",1,"btn","btn-warning","btn-sm",3,"ngModel","ngModelChange"],[1,"btn","btn-warning","btn-sm",3,"ngModel","btnRadio","ngModelChange"],["btnRadio","400px",1,"btn","btn-warning","btn-sm",3,"ngModel","ngModelChange"],["btnRadio","600px",1,"btn","btn-warning","btn-sm",3,"ngModel","ngModelChange"],["btnRadio","200px",1,"btn","btn-warning","btn-sm",3,"ngModel","ngModelChange"],["btnRadio","350px",1,"btn","btn-warning","btn-sm",3,"ngModel","ngModelChange"],["btnRadio","7",1,"btn","btn-warning","btn-sm",3,"ngModel","ngModelChange"],["btnRadio","22",1,"btn","btn-warning","btn-sm",3,"ngModel","ngModelChange"],["btnRadio","10",1,"btn","btn-warning","btn-sm",3,"ngModel","ngModelChange"],["btnRadio","50",1,"btn","btn-warning","btn-sm",3,"ngModel","ngModelChange"],[1,"opts-area"],[1,"title"],[3,"ngModel","itemTemplate","ngModelChange"],["itemTemplate",""],[3,"visible","order","size","background-color",4,"ngIf"],[3,"visible","order","size"],[1,"num"]],template:function(a,n){if(1&a&&(e._uU(0),e.TgZ(1,"div",0),e._UZ(2,"sp-example-title",1),e.TgZ(3,"div",2),e.TgZ(4,"as-split",3),e.YNc(5,J,1,1,"ng-template",4),e.qZA(),e.qZA(),e.TgZ(6,"div",5),e.TgZ(7,"div"),e.TgZ(8,"button",6),e.NdJ("click",function(){return n.d.useTransition=!n.d.useTransition}),e._uU(9),e.qZA(),e.qZA(),e.TgZ(10,"div"),e.TgZ(11,"div",7),e.TgZ(12,"label",8),e.NdJ("ngModelChange",function(t){return n.d.dir=t}),e._uU(13,"horizontal"),e.qZA(),e.TgZ(14,"label",9),e.NdJ("ngModelChange",function(t){return n.d.dir=t}),e._uU(15,"vertical"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div"),e.TgZ(17,"label"),e._uU(18,"Width:\xa0"),e.qZA(),e.TgZ(19,"div",7),e.TgZ(20,"label",10),e.NdJ("ngModelChange",function(t){return n.d.width=t}),e._uU(21,"null"),e.qZA(),e.TgZ(22,"label",11),e.NdJ("ngModelChange",function(t){return n.d.width=t}),e._uU(23,"400"),e.qZA(),e.TgZ(24,"label",12),e.NdJ("ngModelChange",function(t){return n.d.width=t}),e._uU(25,"600"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(26,"div"),e.TgZ(27,"label"),e._uU(28,"Height:\xa0"),e.qZA(),e.TgZ(29,"div",7),e.TgZ(30,"label",10),e.NdJ("ngModelChange",function(t){return n.d.height=t}),e._uU(31,"null"),e.qZA(),e.TgZ(32,"label",13),e.NdJ("ngModelChange",function(t){return n.d.height=t}),e._uU(33,"200"),e.qZA(),e.TgZ(34,"label",14),e.NdJ("ngModelChange",function(t){return n.d.height=t}),e._uU(35,"350"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(36,"div"),e.TgZ(37,"label"),e._uU(38,"Gutter size:\xa0"),e.qZA(),e.TgZ(39,"div",7),e.TgZ(40,"label",10),e.NdJ("ngModelChange",function(t){return n.d.gutterSize=t}),e._uU(41,"null"),e.qZA(),e.TgZ(42,"label",15),e.NdJ("ngModelChange",function(t){return n.d.gutterSize=t}),e._uU(43,"7"),e.qZA(),e.TgZ(44,"label",16),e.NdJ("ngModelChange",function(t){return n.d.gutterSize=t}),e._uU(45,"22"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(46,"div"),e.TgZ(47,"label"),e._uU(48,"Gutter step:\xa0"),e.qZA(),e.TgZ(49,"div",7),e.TgZ(50,"label",10),e.NdJ("ngModelChange",function(t){return n.d.gutterStep=t}),e._uU(51,"null"),e.qZA(),e.TgZ(52,"label",17),e.NdJ("ngModelChange",function(t){return n.d.gutterStep=t}),e._uU(53,"10"),e.qZA(),e.TgZ(54,"label",18),e.NdJ("ngModelChange",function(t){return n.d.gutterStep=t}),e._uU(55,"50"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(56,"div",19),e.TgZ(57,"div",20),e.TgZ(58,"label"),e.TgZ(59,"b"),e._uU(60,"Areas (drag elements to change order):"),e.qZA(),e.qZA(),e.TgZ(61,"button",6),e.NdJ("click",function(){return n.addArea()}),e._uU(62,"Add area"),e.qZA(),e.qZA(),e.TgZ(63,"bs-sortable",21),e.NdJ("ngModelChange",function(t){return n.d.areas=t}),e.qZA(),e.YNc(64,x,10,12,"ng-template",null,22,e.W1O),e.qZA(),e.qZA()),2&a){var r=e.MAs(65);e.hij(" ",n.testChangeDetectorRun()," "),e.xp6(2),e.Q6J("type",n.exampleEnum.GEEK),e.xp6(2),e.Udp("width",n.d.width)("height",n.d.height),e.Q6J("direction",n.d.dir)("restrictMove",n.d.restrictMove)("gutterSize",n.d.gutterSize)("gutterStep",n.d.gutterStep)("useTransition",n.d.useTransition),e.xp6(1),e.Q6J("ngForOf",n.d.areas)("ngForTrackBy",n.trackByFct),e.xp6(3),e.ekj("active",!n.d.useTransition),e.xp6(1),e.hij(" ","useTransition: "+n.d.useTransition," "),e.xp6(3),e.Q6J("ngModel",n.d.dir),e.xp6(2),e.Q6J("ngModel",n.d.dir),e.xp6(6),e.Q6J("ngModel",n.d.width)("btnRadio",null),e.xp6(2),e.Q6J("ngModel",n.d.width),e.xp6(2),e.Q6J("ngModel",n.d.width),e.xp6(6),e.Q6J("ngModel",n.d.height)("btnRadio",null),e.xp6(2),e.Q6J("ngModel",n.d.height),e.xp6(2),e.Q6J("ngModel",n.d.height),e.xp6(6),e.Q6J("ngModel",n.d.gutterSize)("btnRadio",null),e.xp6(2),e.Q6J("ngModel",n.d.gutterSize),e.xp6(2),e.Q6J("ngModel",n.d.gutterSize),e.xp6(6),e.Q6J("ngModel",n.d.gutterStep)("btnRadio",null),e.xp6(2),e.Q6J("ngModel",n.d.gutterStep),e.xp6(2),e.Q6J("ngModel",n.d.gutterStep),e.xp6(9),e.Q6J("ngModel",n.d.areas)("itemTemplate",r)}},directives:[T.B,m.Mq,p.sg,A.lz,s.JJ,s.On,h.Ts,p.O5,m.zE],styles:[".as-split-area[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-shadow:2px 0 0 #fff,-2px 0 0 #fff,0 2px 0 #fff,0 -2px 0 #fff,1px 1px #fff,-1px -1px 0 #fff,1px -1px 0 #fff,-1px 1px 0 #fff}.opts-prop[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-around}.opts-prop[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:10px}.opts-area[_ngcontent-%COMP%] > .title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:10px;background-color:#e8e8e8}.area-item[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;padding:4px;cursor:move}.area-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 5px}.num[_ngcontent-%COMP%]{color:#000;text-shadow:2px 0 0 #fff,-2px 0 0 #fff,0 2px 0 #fff,0 -2px 0 #fff,1px 1px #fff,-1px -1px 0 #fff,1px -1px 0 #fff,-1px 1px 0 #fff}label[_ngcontent-%COMP%]{margin:0}"],changeDetection:0}),l}();function d(){return Math.round(1e3*Math.random())}function u(){return"#"+(16777215*Math.random()<<0).toString(16)}var D=function(){var l=function g(){(0,b.Z)(this,g)};return l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[p.ez,v.W,C.Bz.forChild([{path:"",component:G}]),m.fX,s.u5]]}),l}()}}]);