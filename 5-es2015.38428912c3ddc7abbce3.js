(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"S5h/":function(t,r,n){"use strict";n.r(r),n.d(r,"ForumExplorerModule",(function(){return M}));var e=n("ofXK"),o=n("Wp6s"),i=n("tyNb"),c=n("fXoL"),u=n("6oFh");function a(...t){if(t.length<2)return!0;const r=t[0];for(const n of t.slice(1))if(r!==n){if(null===r||null===n)return!1;if(void 0===r||void 0===n)return!1;if(r.id!==n.id||r.name!==n.name||r.description!==n.description||r.creator!==n.creator)return!1}return!0}var s=n("pLZG"),m=n("QQ3A"),f=n("bTqV");const b=function(t){return["/forums/",t]};let l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["app-forum-info"]],inputs:{forum:"forum"},decls:12,vars:6,consts:[[1,"container"],[1,"name"],[1,"creator"],[1,"desc"],["color","primary","mat-raised-button","",1,"forum-button",3,"routerLink"]],template:function(t,r){1&t&&(c.Rb(0,"div",0),c.Rb(1,"mat-card"),c.Rb(2,"mat-card-header"),c.Rb(3,"mat-card-title",1),c.tc(4),c.Qb(),c.Qb(),c.Rb(5,"mat-card-subtitle",2),c.tc(6),c.Qb(),c.Rb(7,"mat-card-content"),c.Rb(8,"p",3),c.tc(9),c.Qb(),c.Qb(),c.Qb(),c.Rb(10,"button",4),c.tc(11,"Visit Forum "),c.Qb(),c.Qb()),2&t&&(c.Bb(4),c.uc(null==r.forum?null:r.forum.name),c.Bb(2),c.uc(null==r.forum?null:r.forum.creator),c.Bb(3),c.uc(null==r.forum?null:r.forum.description),c.Bb(1),c.gc("routerLink",c.ic(4,b,null==r.forum?null:r.forum.id)))},directives:[o.a,o.c,o.f,o.e,o.b,f.a,i.c],styles:[".container[_ngcontent-%COMP%]{margin:0 -.5rem;display:flex;flex-wrap:wrap;justify-content:flex-end}.container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{flex-basis:400px;flex-grow:1;margin:0 .5rem}.container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{float:right;margin-bottom:0}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1.2rem;width:7rem;margin:0 .5rem;white-space:normal}@media (max-width:599.9px){.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transform:translate(-35px,-10px);width:8em}}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),t})();function p(t,r){1&t&&c.Nb(0,"app-forum-info",1),2&t&&c.gc("forum",r.$implicit)}let d=(()=>{class t{constructor(t){this.forumService=t}ngOnInit(){this._getForums()}ngOnDestroy(){clearTimeout(this.nextUpdate)}_getForums(){this.forumService.getForums().pipe(Object(s.a)(t=>!function(t,r){if(t===r)return!0;if(null===t||null===r)return!1;if(void 0===t||void 0===r)return!1;if(t.length!==r.length)return!1;for(let n=0;n<t.length;n++)if(!a(t[n],r[n]))return!1;return!0}(t,this.forums))).subscribe({next:t=>this.forums=t,complete:()=>this.nextUpdate=setTimeout(()=>this._getForums(),5e3)})}addForum(t){t&&this.forums.push(t)}}return t.\u0275fac=function(r){return new(r||t)(c.Mb(m.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-forum-list"]],decls:1,vars:1,consts:[[3,"forum",4,"ngFor","ngForOf"],[3,"forum"]],template:function(t,r){1&t&&c.rc(0,p,1,1,"app-forum-info",0),2&t&&c.gc("ngForOf",r.forums)},directives:[e.h,l],styles:["app-forum-info[_ngcontent-%COMP%]{padding:1em}"]}),t})();var g=n("3Pt+"),h=n("kmnG"),F=n("qFsG");let v=(()=>{class t{constructor(t,r){this.fb=t,this.forumService=r,this.newForumEvent=new c.n,this.newForumForm=this.fb.group({name:["",[g.j.required,g.j.maxLength(128)]],description:["",[g.j.required]]})}get name(){return this.newForumForm.get("name")}get nameErrors(){return this.name.errors?Object.keys(this.name.errors):[]}get description(){return this.newForumForm.get("description")}get descriptionErrors(){return this.description.errors?Object.keys(this.description.errors):[]}ngOnInit(){}onSubmit(t){const r=Object.assign({id:void 0,creator:void 0},t);this.forumService.addForum(r).subscribe(t=>this.newForumEvent.emit(t))}}return t.\u0275fac=function(r){return new(r||t)(c.Mb(g.b),c.Mb(m.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-add-forum"]],viewQuery:function(t,r){var n;1&t&&c.xc(g.d,!0),2&t&&c.jc(n=c.ac())&&(r.form=n.first)},outputs:{newForumEvent:"newForumEvent"},decls:16,vars:4,consts:[[3,"formGroup","ngSubmit"],["ngForm","ngForm"],["formControlName","name","id","name","matInput","","type","text"],["formControlName","description","id","description","matInput","","type","text"],["color","primary","mat-raised-button","","type","submit",1,"button",3,"disabled"]],template:function(t,r){if(1&t){const t=c.Sb();c.Rb(0,"form",0,1),c.Zb("ngSubmit",(function(){c.lc(t);const n=c.kc(1);return r.onSubmit(r.newForumForm.value),n.resetForm()})),c.Rb(2,"mat-form-field"),c.Rb(3,"mat-label"),c.tc(4,"Forum name"),c.Qb(),c.Nb(5,"input",2),c.Rb(6,"mat-error"),c.tc(7),c.Qb(),c.Qb(),c.Rb(8,"mat-form-field"),c.Rb(9,"mat-label"),c.tc(10,"Forum Description"),c.Qb(),c.Nb(11,"textarea",3),c.Rb(12,"mat-error"),c.tc(13),c.Qb(),c.Qb(),c.Rb(14,"button",4),c.tc(15,"Create Forum "),c.Qb(),c.Qb()}2&t&&(c.gc("formGroup",r.newForumForm),c.Bb(7),c.uc(r.nameErrors),c.Bb(6),c.uc(r.descriptionErrors),c.Bb(1),c.gc("disabled",r.newForumForm.invalid))},directives:[g.k,g.g,g.d,h.b,h.e,g.a,F.a,g.f,g.c,h.a,f.a],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}textarea[_ngcontent-%COMP%]{min-height:100px;max-height:300px;height:100%}"]}),t})();function w(t,r){if(1&t){const t=c.Sb();c.Rb(0,"app-add-forum",5),c.Zb("newForumEvent",(function(r){return c.lc(t),c.dc(),c.kc(5).addForum(r)})),c.Qb()}}const x=function(){return{return_to_previous:!0}};function y(t,r){1&t&&(c.Rb(0,"button",6),c.tc(1,"Log in to create your own forums! "),c.Qb()),2&t&&c.gc("queryParams",c.hc(1,x))}const O=[{path:"",component:(()=>{class t{constructor(t,r){this.authService=t,this.route=r}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)(c.Mb(u.b),c.Mb(i.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-forum-explorer"]],decls:10,vars:2,consts:[[1,"container"],["forumListComponent",""],[1,"spacer"],[3,"newForumEvent",4,"ngIf","ngIfElse"],["log_in_prompt",""],[3,"newForumEvent"],["color","primary","mat-raised-button","","routerLink","/user/login",3,"queryParams"]],template:function(t,r){if(1&t&&(c.Rb(0,"div",0),c.Rb(1,"h2"),c.tc(2,"Forum Explorer"),c.Qb(),c.Nb(3,"hr"),c.Nb(4,"app-forum-list",null,1),c.Nb(6,"div",2),c.rc(7,w,1,0,"app-add-forum",3),c.rc(8,y,2,2,"ng-template",null,4,c.sc),c.Qb()),2&t){const t=c.kc(9);c.Bb(7),c.gc("ngIf",r.authService.isLoggedIn())("ngIfElse",t)}},directives:[d,e.i,v,f.a,i.c],styles:[".container[_ngcontent-%COMP%]{display:block;margin:auto;padding:2em;text-align:center;max-width:1024px}app-forum-list[_ngcontent-%COMP%]{text-align:left}.spacer[_ngcontent-%COMP%]{margin-bottom:1em}app-add-forum[_ngcontent-%COMP%]{max-width:700px;width:100%;display:inline-block}"]}),t})()}];let _=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(r){return new(r||t)},imports:[[i.e.forChild(O)],i.e]}),t})(),M=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(r){return new(r||t)},imports:[[e.b,g.i,F.b,f.b,o.d,_]]}),t})()}}]);