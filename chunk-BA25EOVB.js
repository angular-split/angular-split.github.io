import{a as k,b as he,c as pe,d as me}from"./chunk-WMURG36E.js";import{e as fe,f as _e,g as be,i as ve}from"./chunk-W2ITQ2AK.js";import"./chunk-IK75PPQG.js";import{h as le,i as de,j as ue,k as ce,l as ge}from"./chunk-KUIU3T4D.js";import{$b as f,Bb as ee,Cb as te,Db as s,Eb as l,Fb as ie,Jb as M,Lb as b,Mb as v,Pb as ne,Qb as re,Ra as c,Rb as oe,Sa as C,Tb as ae,U as w,Ub as se,V as N,Vb as E,Wa as q,Wb as g,Xb as I,Yb as V,Za as K,Zb as p,_b as m,ac as x,db as A,dc as z,f as L,fb as B,ga as j,ha as d,hb as X,hc as O,ia as u,ja as Z,jb as y,lc as H,oa as Q,ta as U,tb as D,ub as h,vb as R,wb as S,xb as J,yb as Y,zb as $}from"./chunk-GR3MIE2K.js";import"./chunk-UPEGBOOY.js";import"./chunk-4CLCTAJ7.js";var Me={provide:k,useExisting:w(()=>De),multi:!0},De=(()=>{class o{constructor(){this.btnCheckboxTrue=!0,this.btnCheckboxFalse=!1,this.state=!1,this.isDisabled=!1,this.onChange=Function.prototype,this.onTouched=Function.prototype}onClick(){this.isDisabled||(this.toggle(!this.state),this.onChange(this.value))}ngOnInit(){this.toggle(this.trueValue===this.value)}get trueValue(){return typeof this.btnCheckboxTrue<"u"?this.btnCheckboxTrue:!0}get falseValue(){return typeof this.btnCheckboxFalse<"u"?this.btnCheckboxFalse:!1}toggle(t){this.state=t,this.value=this.state?this.trueValue:this.falseValue}writeValue(t){this.state=this.trueValue===t,this.value=t?this.trueValue:this.falseValue}setDisabledState(t){this.isDisabled=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275dir=B({type:o,selectors:[["","btnCheckbox",""]],hostVars:3,hostBindings:function(i,e){i&1&&b("click",function(){return e.onClick()}),i&2&&(D("aria-pressed",e.state),S("active",e.state))},inputs:{btnCheckboxTrue:"btnCheckboxTrue",btnCheckboxFalse:"btnCheckboxFalse"},features:[x([Me])]})}}return o})(),Ie={provide:k,useExisting:w(()=>F),multi:!0},F=(()=>{class o{get value(){return this.group?this.group.value:this._value}set value(t){if(this.group){this.group.value=t;return}this._value=t,this._onChange(t)}get disabled(){return this._disabled}set disabled(t){this.setDisabledState(t)}get controlOrGroupDisabled(){return this.disabled||this.group&&this.group.disabled?!0:void 0}get hasDisabledClass(){return this.controlOrGroupDisabled&&!this.isActive}get isActive(){return this.btnRadio===this.value}get tabindex(){if(!this.controlOrGroupDisabled)return this.isActive||this.group==null?0:-1}get hasFocus(){return this._hasFocus}constructor(t,i,e,r){this.el=t,this.cdr=i,this.renderer=e,this.group=r,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.uncheckable=!1,this.role="radio",this._disabled=!1,this._hasFocus=!1}toggleIfAllowed(){this.canToggle()&&(this.uncheckable&&this.btnRadio===this.value?this.value=void 0:this.value=this.btnRadio)}onSpacePressed(t){this.toggleIfAllowed(),t.preventDefault()}focus(){this.el.nativeElement.focus()}onFocus(){this._hasFocus=!0}onBlur(){this._hasFocus=!1,this.onTouched()}canToggle(){return!this.controlOrGroupDisabled&&(this.uncheckable||this.btnRadio!==this.value)}ngOnChanges(t){"uncheckable"in t&&(this.uncheckable=this.uncheckable!==!1&&typeof this.uncheckable<"u")}_onChange(t){if(this.group){this.group.value=t;return}this.onTouched(),this.onChange(t)}writeValue(t){this.value=t,this.cdr.markForCheck()}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){if(this._disabled=t,t){this.renderer.setAttribute(this.el.nativeElement,"disabled","disabled");return}this.renderer.removeAttribute(this.el.nativeElement,"disabled")}static{this.\u0275fac=function(i){return new(i||o)(C(U),C(H),C(q),C(w(()=>we),8))}}static{this.\u0275dir=B({type:o,selectors:[["","btnRadio",""]],hostVars:8,hostBindings:function(i,e){i&1&&b("click",function(){return e.toggleIfAllowed()})("keydown.space",function(a){return e.onSpacePressed(a)})("focus",function(){return e.onFocus()})("blur",function(){return e.onBlur()}),i&2&&(D("aria-disabled",e.controlOrGroupDisabled)("aria-checked",e.isActive)("role",e.role)("tabindex",e.tabindex),S("disabled",e.hasDisabledClass)("active",e.isActive))},inputs:{btnRadio:"btnRadio",uncheckable:"uncheckable",value:"value",disabled:"disabled"},features:[x([Ie]),j]})}}return o})(),xe={provide:k,useExisting:w(()=>we),multi:!0},we=(()=>{class o{constructor(t){this.cdr=t,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.role="radiogroup",this._disabled=!1}get value(){return this._value}set value(t){this._value=t,this.onChange(t)}get disabled(){return this._disabled}get tabindex(){return this._disabled?null:0}writeValue(t){this._value=t,this.cdr.markForCheck()}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.radioButtons&&(this._disabled=t,this.radioButtons.forEach(i=>{i.setDisabledState(t)}),this.cdr.markForCheck())}onFocus(){if(this._disabled)return;let t=this.getActiveOrFocusedRadio();if(t){t.focus();return}if(this.radioButtons){let i=this.radioButtons.find(e=>!e.disabled);i&&i.focus()}}onBlur(){this.onTouched&&this.onTouched()}selectNext(t){this.selectInDirection("next"),t.preventDefault()}selectPrevious(t){this.selectInDirection("previous"),t.preventDefault()}selectInDirection(t){if(this._disabled)return;function i(r,a){let T=(r+(t==="next"?1:-1))%a.length;return T<0&&(T=a.length-1),T}let e=this.getActiveOrFocusedRadio();if(e&&this.radioButtons){let r=this.radioButtons.toArray(),a=r.indexOf(e);for(let n=i(a,r);n!==a;n=i(n,r))if(r[n].canToggle()){r[n].toggleIfAllowed(),r[n].focus();break}}}getActiveOrFocusedRadio(){if(this.radioButtons)return this.radioButtons.find(t=>t.isActive)||this.radioButtons.find(t=>t.hasFocus)}static{this.\u0275fac=function(i){return new(i||o)(C(H))}}static{this.\u0275dir=B({type:o,selectors:[["","btnRadioGroup",""]],contentQueries:function(i,e,r){if(i&1&&ne(r,F,4),i&2){let a;re(a=oe())&&(e.radioButtons=a)}},hostVars:2,hostBindings:function(i,e){i&1&&b("focus",function(){return e.onFocus()})("blur",function(){return e.onBlur()})("keydown.ArrowRight",function(a){return e.selectNext(a)})("keydown.ArrowDown",function(a){return e.selectNext(a)})("keydown.ArrowLeft",function(a){return e.selectPrevious(a)})("keydown.ArrowUp",function(a){return e.selectPrevious(a)}),i&2&&D("role",e.role)("tabindex",e.tabindex)},features:[x([xe])]})}}return o})();var ke=(o,_)=>[o,_],Te=(o,_)=>({item:o,index:_});function Ve(o,_){if(o&1){let t=M();s(0,"div",4),b("dragover",function(e){d(t);let r=v();return u(r.onItemDragover(e,0))})("dragenter",function(e){d(t);let r=v();return u(r.cancelEvent(e))}),g(1),l()}if(o&2){let t=v();h("ngClass",t.placeholderClass)("ngStyle",t.placeholderStyle),c(),I(t.placeholderItem)}}function Ae(o,_){}function Be(o,_){if(o&1){let t=M();s(0,"div",5),b("dragstart",function(e){let r=d(t),a=r.$implicit,n=r.index,T=v();return u(T.onItemDragstart(e,a,n))})("dragend",function(e){d(t);let r=v();return u(r.resetActiveItem(e))})("dragover",function(e){let r=d(t).index,a=v();return u(a.onItemDragover(e,r))})("dragenter",function(e){d(t);let r=v();return u(r.cancelEvent(e))}),y(1,Ae,0,0,"ng-template",6),l()}if(o&2){let t=_.$implicit,i=_.index,e=v(),r=E(4);h("ngClass",z(5,ke,e.itemClass,i===e.activeItem?e.itemActiveClass:""))("ngStyle",e.getItemStyle(i===e.activeItem)),D("aria-grabbed",i===e.activeItem),c(),h("ngTemplateOutlet",e.itemTemplate||r)("ngTemplateOutletContext",z(8,Te,t,i))}}function Re(o,_){if(o&1&&g(0),o&2){let t=_.item;I(t.value)}}var Ee=(()=>{class o{constructor(){this.onCapture=new L}dragStart(t){this.draggableItem=t}getItem(){return this.draggableItem}captureItem(t,i){return this.draggableItem&&this.draggableItem.overZoneIndex!==t&&(this.draggableItem.lastZoneIndex=this.draggableItem.overZoneIndex,this.draggableItem.overZoneIndex=t,this.onCapture.next(this.draggableItem),this.draggableItem=Object.assign({},this.draggableItem,{overZoneIndex:t,i})),this.draggableItem}onCaptureItem(){return this.onCapture}static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"platform"})}}return o})(),P=(()=>{class o{static{this.globalZoneIndex=0}get items(){return this._items}set items(t){this._items=t;let i=this.items.map(e=>e.initData);this.onChanged(i),this.onChange.emit(i)}constructor(t){this.wrapperClass="",this.wrapperStyle={},this.itemClass="",this.itemStyle={},this.itemActiveClass="",this.itemActiveStyle={},this.placeholderClass="",this.placeholderStyle={},this.placeholderItem="",this.onChange=new Q,this.showPlaceholder=!1,this.activeItem=-1,this.onTouched=Function.prototype,this.onChanged=Function.prototype,this._items=[],this.transfer=t,this.currentZoneIndex=o.globalZoneIndex++,this.transfer.onCaptureItem().subscribe(i=>this.onDrop(i))}onItemDragstart(t,i,e){this.initDragstartEvent(t),this.onTouched(),this.transfer.dragStart({event:t,item:i,i:e,initialIndex:e,lastZoneIndex:this.currentZoneIndex,overZoneIndex:this.currentZoneIndex})}onItemDragover(t,i){if(!this.transfer.getItem())return;t.preventDefault();let e=this.transfer.captureItem(this.currentZoneIndex,this.items.length),r=[];e&&(this.items.length?e.i>i?r=[...this.items.slice(0,i),e.item,...this.items.slice(i,e.i),...this.items.slice(e.i+1)]:r=[...this.items.slice(0,e.i),...this.items.slice(e.i+1,i+1),e.item,...this.items.slice(i+1)]:r=[e.item],this.items=r,e.i=i,this.activeItem=i,this.updatePlaceholderState())}cancelEvent(t){!this.transfer.getItem()||!t||t.preventDefault()}onDrop(t){t&&t.overZoneIndex!==this.currentZoneIndex&&t.lastZoneIndex===this.currentZoneIndex&&(this.items=this.items.filter((i,e)=>e!==t.i),this.updatePlaceholderState()),this.resetActiveItem()}resetActiveItem(t){this.cancelEvent(t),this.activeItem=-1}registerOnChange(t){this.onChanged=t}registerOnTouched(t){this.onTouched=t}writeValue(t){t?this.items=t.map((i,e)=>({id:e,initData:i,value:this.fieldName?i[this.fieldName]:i})):this.items=[],this.updatePlaceholderState()}updatePlaceholderState(){this.showPlaceholder=!this._items.length}getItemStyle(t){return t?Object.assign({},this.itemStyle,this.itemActiveStyle):this.itemStyle}initDragstartEvent(t){t.dataTransfer?.setData("Text","placeholder")}static{this.\u0275fac=function(i){return new(i||o)(C(Ee))}}static{this.\u0275cmp=A({type:o,selectors:[["bs-sortable"]],inputs:{fieldName:"fieldName",wrapperClass:"wrapperClass",wrapperStyle:"wrapperStyle",itemClass:"itemClass",itemStyle:"itemStyle",itemActiveClass:"itemActiveClass",itemActiveStyle:"itemActiveStyle",placeholderClass:"placeholderClass",placeholderStyle:"placeholderStyle",placeholderItem:"placeholderItem",itemTemplate:"itemTemplate"},outputs:{onChange:"onChange"},exportAs:["bs-sortable"],features:[x([{provide:k,useExisting:w(()=>o),multi:!0}])],decls:5,vars:4,consts:[["defItemTemplate",""],[3,"dragover","dragenter","drop","mouseleave","ngClass","ngStyle"],[3,"ngClass","ngStyle","dragover","dragenter",4,"ngIf"],["draggable","true","aria-dropeffect","move",3,"ngClass","ngStyle","dragstart","dragend","dragover","dragenter",4,"ngFor","ngForOf"],[3,"dragover","dragenter","ngClass","ngStyle"],["draggable","true","aria-dropeffect","move",3,"dragstart","dragend","dragover","dragenter","ngClass","ngStyle"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,e){if(i&1){let r=M();s(0,"div",1),b("dragover",function(n){return d(r),u(e.cancelEvent(n))})("dragenter",function(n){return d(r),u(e.cancelEvent(n))})("drop",function(n){return d(r),u(e.resetActiveItem(n))})("mouseleave",function(n){return d(r),u(e.resetActiveItem(n))}),y(1,Ve,2,3,"div",2)(2,Be,2,11,"div",3),l(),y(3,Re,1,1,"ng-template",null,0,O)}i&2&&(h("ngClass",e.wrapperClass)("ngStyle",e.wrapperStyle),c(),h("ngIf",e.showPlaceholder),c(),h("ngForOf",e.items))},dependencies:[le,ce,ue,de,ge],encapsulation:2})}}return o})();function Oe(o,_){if(o&1&&(s(0,"as-split-area",23),g(1),l()),o&2){let t=v().$implicit;R("background-color",t.color),h("visible",t.visible)("size",t.size),c(),I(t.id)}}function Fe(o,_){if(o&1&&y(0,Oe,2,5,"as-split-area",22),o&2){let t=_.$implicit;$(t.present?0:-1)}}function Pe(o,_){if(o&1){let t=M();s(0,"div")(1,"div",24),g(2),l(),s(3,"div")(4,"button",6),b("click",function(){let e=d(t).item;return u(e.value.present=!e.value.present)}),g(5),l(),s(6,"button",6),b("click",function(){let e=d(t).item,r=v();return u(e.value.visible?r.hideArea(e.value):r.showArea(e.value))}),g(7),l(),s(8,"button",6),b("click",function(){let e=d(t).item,r=v();return u(r.removeArea(e.value))}),g(9,"Remove"),l()()()}if(o&2){let t=_.item;Y("area-item id-",t.value.id,""),R("background-color",t.value.color),c(2),I(t.value.id),c(2),S("active",!t.value.present),c(),V(" ",'*ngIf="'+t.value.present+'"'," "),c(),S("active",!t.value.visible),c(),V(" ",'[visible]="'+t.value.visible+'"'," ")}}var ft=(()=>{class o extends ve{constructor(){super(...arguments),this.sortableComponent=K(P),this.class="split-example-page",this.d={dir:"horizontal",restrictMove:!0,useTransition:!0,gutterSize:null,gutterStep:null,width:null,height:null,areas:[{id:G(),color:W(),size:25,present:!0,visible:!0},{id:G(),color:W(),size:50,present:!0,visible:!0},{id:G(),color:W(),size:25,present:!0,visible:!0}]}}trackByFct(t,i){return i.id}addArea(){this.d.areas.push({id:G(),color:W(),size:25,present:!0,visible:!0}),this.alignAreaSizes(),this.sortableComponent().writeValue(this.d.areas)}removeArea(t){this.d.areas.splice(this.d.areas.indexOf(t),1),this.alignAreaSizes(),this.sortableComponent().writeValue(this.d.areas)}hideArea(t){this.d.areas.find(i=>i===t).visible=!1,this.alignAreaSizes()}showArea(t){this.d.areas.find(i=>i===t).visible=!0,this.alignAreaSizes()}alignAreaSizes(){this.d.areas.filter(t=>t.visible).forEach((t,i,e)=>t.size=100/e.length)}static{this.\u0275fac=(()=>{let t;return function(e){return(t||(t=Z(o)))(e||o)}})()}static{this.\u0275cmp=A({type:o,selectors:[["sp-ex-geek-demo"]],viewQuery:function(i,e){i&1&&ae(e.sortableComponent,P,5),i&2&&se()},hostVars:2,hostBindings:function(i,e){i&2&&J(e.class)},features:[X],decls:67,vars:34,consts:[["itemTemplate",""],[1,"container"],[3,"type"],[1,"split-example",2,"background-color","#e5e0e0"],["gutterClickDeltaPx","0",2,"background-color","#ffffff",3,"direction","restrictMove","gutterSize","gutterStep","useTransition"],[1,"opts-prop"],[1,"btn","btn-warning","btn-sm",3,"click"],[1,"btn-group"],["btnRadio","horizontal",1,"btn","btn-warning","btn-sm",3,"ngModelChange","ngModel"],["btnRadio","vertical",1,"btn","btn-warning","btn-sm",3,"ngModelChange","ngModel"],[1,"btn","btn-warning","btn-sm",3,"ngModelChange","ngModel","btnRadio"],["btnRadio","400px",1,"btn","btn-warning","btn-sm",3,"ngModelChange","ngModel"],["btnRadio","600px",1,"btn","btn-warning","btn-sm",3,"ngModelChange","ngModel"],["btnRadio","200px",1,"btn","btn-warning","btn-sm",3,"ngModelChange","ngModel"],["btnRadio","350px",1,"btn","btn-warning","btn-sm",3,"ngModelChange","ngModel"],["btnRadio","7",1,"btn","btn-warning","btn-sm",3,"ngModelChange","ngModel"],["btnRadio","22",1,"btn","btn-warning","btn-sm",3,"ngModelChange","ngModel"],["btnRadio","10",1,"btn","btn-warning","btn-sm",3,"ngModelChange","ngModel"],["btnRadio","50",1,"btn","btn-warning","btn-sm",3,"ngModelChange","ngModel"],[1,"opts-area"],[1,"title"],[3,"ngModelChange","ngModel","itemTemplate"],[3,"visible","size","background-color"],[3,"visible","size"],[1,"num"]],template:function(i,e){if(i&1){let r=M();g(0),s(1,"div",1),ie(2,"sp-example-title",2),s(3,"div",3)(4,"as-split",4),ee(5,Fe,1,1,null,null,e.trackByFct,!0),l()(),s(7,"div",5)(8,"div")(9,"button",6),b("click",function(){return d(r),u(e.d.useTransition=!e.d.useTransition)}),g(10),l()(),s(11,"div")(12,"div",7)(13,"label",8),f("ngModelChange",function(n){return d(r),m(e.d.dir,n)||(e.d.dir=n),u(n)}),g(14,"horizontal"),l(),s(15,"label",9),f("ngModelChange",function(n){return d(r),m(e.d.dir,n)||(e.d.dir=n),u(n)}),g(16,"vertical"),l()()(),s(17,"div")(18,"label"),g(19,"Width:\xA0"),l(),s(20,"div",7)(21,"label",10),f("ngModelChange",function(n){return d(r),m(e.d.width,n)||(e.d.width=n),u(n)}),g(22,"null"),l(),s(23,"label",11),f("ngModelChange",function(n){return d(r),m(e.d.width,n)||(e.d.width=n),u(n)}),g(24,"400"),l(),s(25,"label",12),f("ngModelChange",function(n){return d(r),m(e.d.width,n)||(e.d.width=n),u(n)}),g(26,"600"),l()()(),s(27,"div")(28,"label"),g(29,"Height:\xA0"),l(),s(30,"div",7)(31,"label",10),f("ngModelChange",function(n){return d(r),m(e.d.height,n)||(e.d.height=n),u(n)}),g(32,"null"),l(),s(33,"label",13),f("ngModelChange",function(n){return d(r),m(e.d.height,n)||(e.d.height=n),u(n)}),g(34,"200"),l(),s(35,"label",14),f("ngModelChange",function(n){return d(r),m(e.d.height,n)||(e.d.height=n),u(n)}),g(36,"350"),l()()(),s(37,"div")(38,"label"),g(39,"Gutter size:\xA0"),l(),s(40,"div",7)(41,"label",10),f("ngModelChange",function(n){return d(r),m(e.d.gutterSize,n)||(e.d.gutterSize=n),u(n)}),g(42,"null"),l(),s(43,"label",15),f("ngModelChange",function(n){return d(r),m(e.d.gutterSize,n)||(e.d.gutterSize=n),u(n)}),g(44,"7"),l(),s(45,"label",16),f("ngModelChange",function(n){return d(r),m(e.d.gutterSize,n)||(e.d.gutterSize=n),u(n)}),g(46,"22"),l()()(),s(47,"div")(48,"label"),g(49,"Gutter step:\xA0"),l(),s(50,"div",7)(51,"label",10),f("ngModelChange",function(n){return d(r),m(e.d.gutterStep,n)||(e.d.gutterStep=n),u(n)}),g(52,"null"),l(),s(53,"label",17),f("ngModelChange",function(n){return d(r),m(e.d.gutterStep,n)||(e.d.gutterStep=n),u(n)}),g(54,"10"),l(),s(55,"label",18),f("ngModelChange",function(n){return d(r),m(e.d.gutterStep,n)||(e.d.gutterStep=n),u(n)}),g(56,"50"),l()()()(),s(57,"div",19)(58,"div",20)(59,"label")(60,"b"),g(61,"Areas (drag elements to change order):"),l()(),s(62,"button",6),b("click",function(){return d(r),u(e.addArea())}),g(63,"Add area"),l()(),s(64,"bs-sortable",21),f("ngModelChange",function(n){return d(r),m(e.d.areas,n)||(e.d.areas=n),u(n)}),l(),y(65,Pe,10,12,"ng-template",null,0,O),l()()}if(i&2){let r=E(66);V(" ",e.testChangeDetectorRun()," "),c(2),h("type",e.exampleEnum.GEEK),c(2),R("width",e.d.width)("height",e.d.height),h("direction",e.d.dir)("restrictMove",e.d.restrictMove)("gutterSize",e.d.gutterSize)("gutterStep",e.d.gutterStep)("useTransition",e.d.useTransition),c(),te(e.d.areas),c(4),S("active",!e.d.useTransition),c(),V(" ","useTransition: "+e.d.useTransition," "),c(3),p("ngModel",e.d.dir),c(2),p("ngModel",e.d.dir),c(6),p("ngModel",e.d.width),h("btnRadio",null),c(2),p("ngModel",e.d.width),c(2),p("ngModel",e.d.width),c(6),p("ngModel",e.d.height),h("btnRadio",null),c(2),p("ngModel",e.d.height),c(2),p("ngModel",e.d.height),c(6),p("ngModel",e.d.gutterSize),h("btnRadio",null),c(2),p("ngModel",e.d.gutterSize),c(2),p("ngModel",e.d.gutterSize),c(6),p("ngModel",e.d.gutterStep),h("btnRadio",null),c(2),p("ngModel",e.d.gutterStep),c(2),p("ngModel",e.d.gutterStep),c(9),p("ngModel",e.d.areas),h("itemTemplate",r)}},dependencies:[P,me,he,pe,F,_e,fe,be],styles:[".as-split-area[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-shadow:2px 0 0 #fff,-2px 0 0 #fff,0 2px 0 #fff,0 -2px 0 #fff,1px 1px #fff,-1px -1px 0 #fff,1px -1px 0 #fff,-1px 1px 0 #fff}.opts-prop[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-around}.opts-prop[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:10px}.opts-area[_ngcontent-%COMP%] > .title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:10px;background-color:#e8e8e8}.area-item[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;padding:4px;cursor:move}.area-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 5px}.num[_ngcontent-%COMP%]{color:#000;text-shadow:2px 0 0 #fff,-2px 0 0 #fff,0 2px 0 #fff,0 -2px 0 #fff,1px 1px #fff,-1px -1px 0 #fff,1px -1px 0 #fff,-1px 1px 0 #fff}label[_ngcontent-%COMP%]{margin:0}"],changeDetection:0})}}return o})();function G(){return Math.round(Math.random()*1e3)}function W(){return"#"+(Math.random()*16777215<<0).toString(16)}export{ft as GeekDemoComponent};
