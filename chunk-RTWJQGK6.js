import{Db as t,Eb as i,Fb as n,Ra as o,Wb as e,Yb as p,db as m,ic as d,ub as l}from"./chunk-GR3MIE2K.js";import"./chunk-4CLCTAJ7.js";var x=(()=>{class a{constructor(){this.version=d.full,this.code1="npm install angular-split",this.code2=`// For NgModule based apps:
import { AngularSplitModule } from 'angular-split';

@NgModule({
  imports: [
    AngularSplitModule,
    ...
  ],
  ...
})
export class AppModule {}


// For standalone apps
@Component({
  ...
  imports: [SplitComponent, SplitAreaComponent, ...] // Or use AngularSplitModule
})`,this.code3=`<div style="width: 500px; height: 500px; background: yellow;">
  <as-split direction="horizontal">
    <as-split-area [size]="40">
      <p>LEFT</p>
    </as-split-area>
    <as-split-area [size]="60">
      <p>RIGHT</p>
    </as-split-area>
  </as-split>
</div>`,this.code4="@use/@import 'angular-split/theme';",this.code5="provideAngularSplitOptions({...})"}static{this.\u0275fac=function(s){return new(s||a)}}static{this.\u0275cmp=m({type:a,selectors:[["sp-home"]],decls:72,vars:6,consts:[[1,"container"],[1,"jumbotron"],[1,"text-center"],["src","/assets/logo.svg","height","100","alt","",1,"m-auto"],[1,"mt-3"],[1,"mt-3","text-muted"],["href","https://www.npmjs.com/package/angular-split"],["src","https://img.shields.io/npm/v/angular-split/latest.svg?style=flat-square","alt","npm latest version","height","18"],["src","https://img.shields.io/npm/v/angular-split/next.svg?style=flat-square","alt","npm next version","height","18"],["href","https://discord.gg/Qm9MPCg"],["src","https://img.shields.io/discord/748677963142135818?color=7289DA&label=Angular%20Discord&logo=discord&logoColor=white&style=flat-square","alt","Angular Discord","height","18"],[3,"innerText"],["alt","Angular Discord","src","https://img.shields.io/discord/748677963142135818?color=7289DA&label=Angular%20Discord&logo=discord&logoColor=white&style=flat-square"],["href","https://stackblitz.com/fork/angular-split-demo","target","_blank"],["href","https://github.com/bertrandg"],["href","https://github.com/beeman"]],template:function(s,r){s&1&&(t(0,"div",0)(1,"div",1)(2,"div",2),n(3,"img",3),t(4,"h1",4),e(5,"angular-split"),i(),t(6,"h4"),e(7,"Angular UI library to split views and allow dragging to resize areas using CSS grid layout."),i(),t(8,"h5",5),e(9),i(),t(10,"a",6),n(11,"img",7),i(),e(12,"\xA0"),t(13,"a",6),n(14,"img",8),i(),e(15,"\xA0"),t(16,"a",9),n(17,"img",10),i()(),n(18,"br"),t(19,"h5"),e(20,"Install npm module:"),i(),n(21,"pre",11)(22,"br"),t(23,"h5"),e(24,"Add to your app:"),i(),n(25,"pre",11)(26,"br"),t(27,"h5"),e(28,"Define splits in your template:"),i(),n(29,"pre",11)(30,"br"),t(31,"h5"),e(32,"Add css theme in styles.css/scss for variables type hints (optional):"),i(),n(33,"pre",11)(34,"br"),t(35,"h5"),e(36,"Override global options (optional):"),i(),e(37," Global options can be declared on any injector level (root or any other injector). The global options can be partially overridden at a lower level. That means you can declare for root a set of options and override part of them on a route provider keeping the other options the same as in root. "),n(38,"pre",11)(39,"br"),t(40,"h5"),e(41,"Support:"),i(),e(42," If you have an issue using the library, feel free to join our chat! We are part of the "),t(43,"a",9),e(44,"Angular Community"),i(),e(45," Discord and you can ask questions in the "),t(46,"strong"),e(47,"#questions"),i(),e(48," channel or "),t(49,"strong"),e(50,"Help"),i(),e(51," forum there. "),t(52,"div",2)(53,"a",9),n(54,"img",12),i()(),t(55,"h5"),e(56,"Bug report:"),i(),t(57,"p"),e(58," If you find a bug, open an issue with a "),t(59,"a",13),e(60,"StackBlitz"),i(),e(61," demo showing it. "),i(),t(62,"h5"),e(63,"Credits:"),i(),t(64,"p"),e(65," This library is built by "),t(66,"a",14),e(67,"Bertrand Gaillard"),i(),e(68," and maintained by "),t(69,"a",15),e(70,"Bram Borggreve"),i(),e(71,". "),i()()()),s&2&&(o(9),p("Running on Angular v",r.version,"."),o(12),l("innerText",r.code1),o(4),l("innerText",r.code2),o(4),l("innerText",r.code3),o(4),l("innerText",r.code4),o(5),l("innerText",r.code5))},styles:["[_nghost-%COMP%]{display:block;width:100%;margin:80px 0 50px}h1[_ngcontent-%COMP%]{color:#ffc421;margin-bottom:30px}h1[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{color:#000}.jumbotron[_ngcontent-%COMP%]{margin-bottom:0}.jumbotron[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:20px}"]})}}return a})();export{x as HomeComponent};
