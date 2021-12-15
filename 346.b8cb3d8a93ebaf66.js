"use strict";(self.webpackChunkangular_split_app=self.webpackChunkangular_split_app||[]).push([[346],{6346:function(M,m,e){e.r(m),e.d(m,{SyncSplitModule:function(){return J}});var c=e(5134),v=e(6019),f=e(2979),p=e(4845),A=e(8210),Z=e(7289),d=e(1885),C=e(3841),z=e(3719),u=e(4753),h=e(9978),T=e(1245),t=e(512),E=e(5666),U=["mySplitA"],B=["mySplitB"],b=["mySplitC"],V=function(){var s=function(r){(0,d.Z)(i,r);var l=(0,C.Z)(i);function i(){var n;return(0,c.Z)(this,i),(n=l.apply(this,arguments)).sizes=[25,75],n}return(0,Z.Z)(i,[{key:"ngAfterViewInit",value:function(){var o=this;this.sub=(0,z.T)(this.mySplitAEl.dragProgress$.pipe((0,u.U)(function(a){return{name:"A",data:a}})),this.mySplitBEl.dragProgress$.pipe((0,u.U)(function(a){return{name:"B",data:a}})),this.mySplitCEl.dragProgress$.pipe((0,u.U)(function(a){return{name:"C",data:a}}))).subscribe(function(a){if("A"===a.name){var S=o.mySplitAEl.getVisibleAreaSizes();o.mySplitBEl.setVisibleAreaSizes(S),o.mySplitCEl.setVisibleAreaSizes(S)}else if("B"===a.name){var y=o.mySplitBEl.getVisibleAreaSizes();o.mySplitAEl.setVisibleAreaSizes(y),o.mySplitCEl.setVisibleAreaSizes(y)}else if("C"===a.name){var g=o.mySplitCEl.getVisibleAreaSizes();o.mySplitAEl.setVisibleAreaSizes(g),o.mySplitBEl.setVisibleAreaSizes(g)}console.log("".concat((0,T.p)(new Date)," > dragProgress$ observable emitted, splits synchronized but current component change detection didn't run! (from split ").concat(a.name,")"))})}},{key:"test",value:function(){}},{key:"ngOnDestroy",value:function(){this.sub&&this.sub.unsubscribe()}}]),i}(h.D);return s.\u0275fac=function(){var r;return function(i){return(r||(r=t.n5z(s)))(i||s)}}(),s.\u0275cmp=t.Xpm({type:s,selectors:[["sp-ex-sync"]],viewQuery:function(l,i){var n;1&l&&(t.Gf(U,5),t.Gf(B,5),t.Gf(b,5)),2&l&&(t.iGM(n=t.CRH())&&(i.mySplitAEl=n.first),t.iGM(n=t.CRH())&&(i.mySplitBEl=n.first),t.iGM(n=t.CRH())&&(i.mySplitCEl=n.first))},hostAttrs:[1,"split-example-page"],features:[t.qOj],decls:31,vars:8,consts:[[1,"container"],[3,"type"],[1,"split-example"],["direction","vertical"],["as-split-area","","size","20"],["direction","horizontal"],["mySplitA",""],["as-split-area","",3,"size"],[3,"size"],["mySplitB",""],["size","60"],["mySplitC",""],[1,"btn","btn-warning",3,"click"]],template:function(l,i){1&l&&(t._uU(0),t.TgZ(1,"div",0),t._UZ(2,"sp-example-title",1),t.TgZ(3,"div",2),t.TgZ(4,"as-split",3),t.TgZ(5,"div",4),t.TgZ(6,"as-split",5,6),t.TgZ(8,"div",7),t._uU(9,"A 1"),t.qZA(),t.TgZ(10,"as-split-area",8),t._uU(11,"A 2"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",4),t.TgZ(13,"as-split",5,9),t.TgZ(15,"div",7),t._uU(16,"B 1"),t.qZA(),t.TgZ(17,"as-split-area",8),t._uU(18,"B 2"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"as-split-area",10),t.TgZ(20,"as-split",5,11),t.TgZ(22,"as-split-area",8),t._uU(23,"C 1"),t.qZA(),t.TgZ(24,"div",7),t._uU(25," C 2"),t._UZ(26,"br"),t._uU(27," Open devTools to view console.log() statements."),t._UZ(28,"br"),t.TgZ(29,"button",12),t.NdJ("click",function(){return i.test()}),t._uU(30,"Trigger change detection"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&l&&(t.hij(" ",i.testChangeDetectorRun()," "),t.xp6(2),t.Q6J("type",i.exampleEnum.SYNC),t.xp6(6),t.Q6J("size",i.sizes[0]),t.xp6(2),t.Q6J("size",i.sizes[1]),t.xp6(5),t.Q6J("size",i.sizes[0]),t.xp6(2),t.Q6J("size",i.sizes[1]),t.xp6(5),t.Q6J("size",i.sizes[0]),t.xp6(2),t.Q6J("size",i.sizes[1]))},directives:[E.B,p.Mq,p.zE],encapsulation:2,changeDetection:0}),s}(),J=function(){var s=function r(){(0,c.Z)(this,r)};return s.\u0275fac=function(l){return new(l||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[v.ez,A.W,f.Bz.forChild([{path:"",component:V}]),p.fX]]}),s}()}}]);