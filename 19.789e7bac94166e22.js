"use strict";(self.webpackChunkangular_split_app=self.webpackChunkangular_split_app||[]).push([[19],{4019:function(f,s,a){a.r(s),a.d(s,{DocumentationModule:function(){return b}});var l=a(3144),d=a(5671),r=a(9808),u=a(5358),e=a(8003);function c(t,n){if(1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e.TgZ(6,"code"),e._uU(7),e.qZA(),e.qZA(),e._UZ(8,"td",6),e.qZA()),2&t){var i=n.$implicit;e.xp6(2),e.Oqu(i.name),e.xp6(2),e.Oqu(i.type),e.xp6(3),e.Oqu(i.default),e.xp6(1),e.Q6J("innerHTML",i.details,e.oJD)}}function g(t,n){if(1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e.TgZ(4,"code"),e._uU(5),e.qZA(),e.qZA(),e._UZ(6,"td",6),e.qZA()),2&t){var i=n.$implicit;e.xp6(2),e.Oqu(i.name),e.xp6(3),e.Oqu(i.value),e.xp6(1),e.Q6J("innerHTML",i.details,e.oJD)}}function Z(t,n){if(1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e.TgZ(4,"code"),e._uU(5),e.qZA(),e.qZA(),e._UZ(6,"td",6),e.qZA()),2&t){var i=n.$implicit;e.xp6(2),e.Oqu(i.name),e.xp6(3),e.Oqu(i.type),e.xp6(1),e.Q6J("innerHTML",i.details,e.oJD)}}function m(t,n){if(1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e.TgZ(6,"code"),e._uU(7),e.qZA(),e.qZA(),e._UZ(8,"td",6),e.qZA()),2&t){var i=n.$implicit;e.xp6(2),e.Oqu(i.name),e.xp6(2),e.Oqu(i.type),e.xp6(3),e.Oqu(i.default),e.xp6(1),e.Q6J("innerHTML",i.details,e.oJD)}}function p(t,n){if(1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e.TgZ(2,"code"),e._uU(3),e.qZA(),e.qZA(),e._UZ(4,"td",6),e.qZA()),2&t){var i=n.$implicit;e.xp6(3),e.Oqu(i.name),e.xp6(1),e.Q6J("innerHTML",i.details,e.oJD)}}function A(t,n){if(1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e.TgZ(2,"code"),e._uU(3),e.qZA(),e.qZA(),e._UZ(4,"td",6),e.qZA()),2&t){var i=n.$implicit;e.xp6(3),e.Oqu(i.name),e.xp6(1),e.Q6J("innerHTML",i.details,e.oJD)}}function T(t,n){if(1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e.TgZ(2,"code"),e._uU(3),e.qZA(),e.qZA(),e._UZ(4,"td",6),e.qZA()),2&t){var i=n.$implicit;e.xp6(3),e.Oqu(i.name),e.xp6(1),e.Q6J("innerHTML",i.details,e.oJD)}}var h=function(){var t=(0,l.Z)(function n(){(0,d.Z)(this,n),this.splitDoc={inputs:[{name:"dir",type:"string",default:'"ltr"',details:'Indicates the directionality of the areas: <code>"ltr"</code> (left to right) or <code>"rtl"</code> (right to left).'},{name:"direction",type:"string",default:'"horizontal"',details:'Select split direction: <code>"horizontal"</code> or <code>"vertical"</code>.'},{name:"disabled",type:"boolean",default:"false",details:"Disable the dragging feature (remove cursor/image on gutters). <code>(gutterClick)</code>/<code>(gutterDblClick)</code> still emits."},{name:"gutterDblClickDuration",type:"number",default:"0",details:"Milliseconds to detect a double click on a gutter. Set it around 300-500ms if you want to use <code>(gutterDblClick)</code> event."},{name:"gutterSize",type:"number",default:"11",details:"Gutters's size (dragging elements) in pixels."},{name:"gutterStep",type:"number",default:"1",details:"Gutter step while moving in pixels."},{name:"restrictMove",type:"boolean",default:"false",details:"Set to <code>true</code> if you want to limit gutter move to adjacent areas only."},{name:"unit",type:"string",default:'"percent"',details:'Selected unit you want to use: <code>"percent"</code> or <code>"pixel"</code> to specify area sizes.'},{name:"useTransition",type:"boolean",default:"false",details:'Add transition when toggling visibility using <code>[visible]</code> or <code>[size]</code> changes.<br><u>Warning: Transitions are not working for <a href="https://github.com/philipwalton/flexbugs#flexbug-16">IE/Edge/Safari</a></u>'}],outputs:[{name:"dragEnd",value:"{gutterNum: number, sizes: Array<number>}",details:"Emit when drag ends."},{name:"dragStart",value:"{gutterNum: number, sizes: Array<number>}",details:"Emit when drag starts."},{name:"gutterDblClick",value:"{gutterNum: number, sizes: Array<number>}",details:"Emit when user double clicks on a gutter. See <code>[gutterDblClickDuration]</code> input."},{name:"gutterClick",value:"{gutterNum: number, sizes: Array<number>}",details:"Emit when user clicks on a gutter. See <code>[gutterDblClickDuration]</code> input."},{name:"transitionEnd",value:"Array<number>",details:'Emit when transition ends (could be triggered from <code>[visible]</code> or <code>[size]</code> changes).<br>Only if <code>[useTransition]="true"</code>.<br><u>Warning: Transitions are not working for <a href="https://github.com/philipwalton/flexbugs#flexbug-16">IE/Edge/Safari</a></u>'}],class:[{name:"dragProgress$",type:"Observable<{gutterNum: number, sizes: Array<number>}>",details:"Emit when dragging. Replace old <code>(dragProgress)</code> template event for better flexibility about change detection mechanism.<br><u>Warning: Running outside zone by design, if you need to notify angular add</u> <code>this.splitEl.dragProgress$.subscribe(x => this.ngZone.run(() => this.x = x));</code>"},{name:"getVisibleAreaSizes()",type:"() => Array<number>",details:"Get all <b>visible</b> area sizes."},{name:"setVisibleAreaSizes()",type:"(Array<number>) => boolean",details:"Set all <b>visible</b> area sizes in one go, return a boolean to know if input values were correct. Useful when combined with <code>dragProgress$</code> to sync multiple splits."}]},this.splitAreaDoc={inputs:[{name:"lockSize",type:"boolean",default:"false",details:"Lock area size, same as <code>minSize</code> = <code>maxSize</code> = <code>size</code>.<br><u>Not working when <code>[size]=\"'*'\"</code></u>"},{name:"maxSize",type:"number",default:"null",details:"Maximum pixel or percent size, should be equal to or larger than provided <code>[size]</code>.<br><u>Not working when <code>[size]=\"'*'\"</code></u>"},{name:"minSize",type:"number",default:"null",details:"Minimum pixel or percent size, should be equal to or smaller than provided <code>[size]</code>.<br><u>Not working when <code>[size]=\"'*'\"</code></u>"},{name:"order",type:"number",default:"null",details:"Order of the area. Used to maintain the order of areas when toggling their visibility. Toggling area visibility without specifying an <code>order</code> leads to weird behavior"},{name:"size",type:"number|'*'",default:"-",details:'Size of the area in selected unit (<code>percent</code>/<code>pixel</code>).<br><u>Percent mode:</u> All areas sizes should equal to 100, If not, all areas will have the same size.<br><u>Pixel mode:</u> An area with  wildcard size (<code>[size]="\'*\'"</code>) is mandatory (only one) and can\'t have <code>[visible]="false"</code> or <code>minSize</code>/<code>maxSize</code>/<code>lockSize</code> properties.'},{name:"visible",type:"boolean",default:"true",details:"Hide area visually but still present in the DOM, use <code>ngIf</code> to completely remove it.<br><u>Not working when <code>[size]=\"'*'\"</code></u>"}]},this.cssClasses={split:[{name:"as-init",details:"Added after component initialization."},{name:"as-horizontal / as-vertical",details:'Depends on <code>&lt;as-split [direction]="x"&gt;</code>.'},{name:"as-disabled",details:'Added when <code>&lt;as-split [disabled]="true"&gt;</code>.'},{name:"as-transition",details:'Added when <code>&lt;as-split [useTransition]="true"&gt;</code>.'},{name:"as-dragging",details:"Added while a gutter is dragged."}],area:[{name:"as-split-area",details:"Added on all areas."},{name:"as-hidden",details:'Added when <code>&lt;as-split-area [visible]="false"&gt;</code>.'}],gutter:[{name:"as-split-gutter",details:"Added on all gutters."},{name:"as-dragged",details:"Added on gutter while dragged."}]}});return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["sp-doc"]],decls:107,vars:7,consts:[[1,"container"],[1,"sel"],[1,"selContent"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[2,"width","40%"],[3,"innerHTML"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"h4"),e.TgZ(2,"b"),e._uU(3,"SplitComponent"),e.qZA(),e._uU(4,"\xa0"),e.TgZ(5,"span",1),e._uU(6,"(selector: '"),e.TgZ(7,"span",2),e._uU(8,"as-split"),e.qZA(),e._uU(9,"' / exportAs: '"),e.TgZ(10,"span",2),e._uU(11,"asSplit"),e.qZA(),e._uU(12,"')"),e.qZA(),e.qZA(),e.TgZ(13,"table",3),e.TgZ(14,"thead"),e.TgZ(15,"tr"),e.TgZ(16,"th"),e._uU(17,"@Input()"),e.qZA(),e.TgZ(18,"th"),e._uU(19,"Type"),e.qZA(),e.TgZ(20,"th"),e._uU(21,"Default"),e.qZA(),e.TgZ(22,"th"),e._uU(23,"Details"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"tbody"),e.YNc(25,c,9,4,"tr",4),e.qZA(),e.qZA(),e.TgZ(26,"table",3),e.TgZ(27,"thead"),e.TgZ(28,"tr"),e.TgZ(29,"th"),e._uU(30,"@Output()"),e.qZA(),e.TgZ(31,"th"),e._uU(32,"Value"),e.qZA(),e.TgZ(33,"th"),e._uU(34,"Details"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(35,"tbody"),e.YNc(36,g,7,3,"tr",4),e.qZA(),e.qZA(),e.TgZ(37,"table",3),e.TgZ(38,"thead"),e.TgZ(39,"tr"),e.TgZ(40,"th"),e._uU(41,"Access from TS class"),e.qZA(),e.TgZ(42,"th"),e._uU(43,"Type"),e.qZA(),e.TgZ(44,"th"),e._uU(45,"Details"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(46,"tbody"),e.YNc(47,Z,7,3,"tr",4),e.qZA(),e.qZA(),e._UZ(48,"br"),e._UZ(49,"br"),e.TgZ(50,"h4"),e.TgZ(51,"b"),e._uU(52,"SplitAreaDirective"),e.qZA(),e._uU(53,"\xa0"),e.TgZ(54,"span",1),e._uU(55,"(selector: '"),e.TgZ(56,"span",2),e._uU(57,"as-split-area, [as-split-area]"),e.qZA(),e._uU(58,"' / exportAs: '"),e.TgZ(59,"span",2),e._uU(60,"asSplitArea"),e.qZA(),e._uU(61,"')"),e.qZA(),e.qZA(),e.TgZ(62,"table",3),e.TgZ(63,"thead"),e.TgZ(64,"tr"),e.TgZ(65,"th"),e._uU(66,"@Input()"),e.qZA(),e.TgZ(67,"th"),e._uU(68,"Type"),e.qZA(),e.TgZ(69,"th"),e._uU(70,"Default"),e.qZA(),e.TgZ(71,"th"),e._uU(72,"Details"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(73,"tbody"),e.YNc(74,m,9,4,"tr",4),e.qZA(),e.qZA(),e._UZ(75,"br"),e._UZ(76,"br"),e.TgZ(77,"h4"),e.TgZ(78,"b"),e._uU(79,"CSS classes"),e.qZA(),e.qZA(),e.TgZ(80,"table",3),e.TgZ(81,"thead"),e.TgZ(82,"tr"),e.TgZ(83,"th",5),e._uU(84,"Split element classes"),e.qZA(),e.TgZ(85,"th"),e._uU(86,"Details"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(87,"tbody"),e.YNc(88,p,5,2,"tr",4),e.qZA(),e.qZA(),e.TgZ(89,"table",3),e.TgZ(90,"thead"),e.TgZ(91,"tr"),e.TgZ(92,"th",5),e._uU(93,"Area element classes"),e.qZA(),e.TgZ(94,"th"),e._uU(95,"Details"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(96,"tbody"),e.YNc(97,A,5,2,"tr",4),e.qZA(),e.qZA(),e.TgZ(98,"table",3),e.TgZ(99,"thead"),e.TgZ(100,"tr"),e.TgZ(101,"th",5),e._uU(102,"Gutter element classes"),e.qZA(),e.TgZ(103,"th"),e._uU(104,"Details"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(105,"tbody"),e.YNc(106,T,5,2,"tr",4),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(25),e.Q6J("ngForOf",o.splitDoc.inputs),e.xp6(11),e.Q6J("ngForOf",o.splitDoc.outputs),e.xp6(11),e.Q6J("ngForOf",o.splitDoc.class),e.xp6(27),e.Q6J("ngForOf",o.splitAreaDoc.inputs),e.xp6(14),e.Q6J("ngForOf",o.cssClasses.split),e.xp6(9),e.Q6J("ngForOf",o.cssClasses.area),e.xp6(9),e.Q6J("ngForOf",o.cssClasses.gutter))},directives:[r.sg],styles:["[_nghost-%COMP%]{display:block;width:100%;margin:50px 0}h4[_ngcontent-%COMP%]{margin:20px 0}.sel[_ngcontent-%COMP%]{font-size:16px;color:#adadad}tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{color:#adadad}tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]:first-child, .selContent[_ngcontent-%COMP%]{font-weight:700;color:#ffc421}tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:first-child{font-weight:700}"]}),t}(),b=function(){var t=(0,l.Z)(function n(){(0,d.Z)(this,n)});return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.ez,u.Bz.forChild([{path:"",component:h}])]]}),t}()}}]);