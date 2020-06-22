function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _createClass(t,r,n){return r&&_defineProperties(t.prototype,r),n&&_defineProperties(t,n),t}function _createForOfIteratorHelper(t,r){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return _arrayLikeToArray(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,r):void 0}}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"S5h/":function(t,r,n){"use strict";n.r(r),n.d(r,"ForumExplorerModule",(function(){return S}));var e=n("ofXK"),o=n("Wp6s"),i=n("tyNb"),a=n("fXoL"),u=n("6oFh");function c(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(r.length<2)return!0;var e,o=r[0],i=_createForOfIteratorHelper(r.slice(1));try{for(i.s();!(e=i.n()).done;){var a=e.value;if(o!==a){if(null===o||null===a)return!1;if(void 0===o||void 0===a)return!1;if(o.id!==a.id||o.name!==a.name||o.description!==a.description||o.creator!==a.creator)return!1}}}catch(u){i.e(u)}finally{i.f()}return!0}var s,f=n("pLZG"),m=n("QQ3A"),l=n("bTqV"),b=function(t){return["/forums/",t]},p=((s=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=a.Gb({type:s,selectors:[["app-forum-info"]],inputs:{forum:"forum"},decls:12,vars:6,consts:[[1,"container"],[1,"name"],[1,"creator"],[1,"desc"],["color","primary","mat-raised-button","",1,"forum-button",3,"routerLink"]],template:function(t,r){1&t&&(a.Rb(0,"div",0),a.Rb(1,"mat-card"),a.Rb(2,"mat-card-header"),a.Rb(3,"mat-card-title",1),a.tc(4),a.Qb(),a.Rb(5,"mat-card-subtitle",2),a.tc(6),a.Qb(),a.Qb(),a.Rb(7,"mat-card-content"),a.Rb(8,"p",3),a.tc(9),a.Qb(),a.Qb(),a.Qb(),a.Rb(10,"button",4),a.tc(11,"Visit Forum "),a.Qb(),a.Qb()),2&t&&(a.Bb(4),a.uc(null==r.forum?null:r.forum.name),a.Bb(2),a.vc("by: ",null==r.forum?null:r.forum.creator,""),a.Bb(3),a.uc(null==r.forum?null:r.forum.description),a.Bb(1),a.gc("routerLink",a.ic(4,b,null==r.forum?null:r.forum.id)))},directives:[o.a,o.c,o.f,o.e,o.b,l.a,i.c],styles:[".container[_ngcontent-%COMP%]{margin:0 -.5rem;display:flex;flex-wrap:wrap;justify-content:flex-end}.container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{flex-basis:400px;flex-grow:1;margin:0 .5rem}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1.2rem;width:7rem;margin:0 .5rem;white-space:normal}@media (max-width:599.9px){.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transform:translate(-35px,-10px);width:8em}}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),s);function d(t,r){1&t&&a.Nb(0,"app-forum-info",1),2&t&&a.gc("forum",r.$implicit)}var g,h,y=((g=function(){function t(r){_classCallCheck(this,t),this.forumService=r}return _createClass(t,[{key:"ngOnInit",value:function(){this._getForums()}},{key:"ngOnDestroy",value:function(){clearTimeout(this.nextUpdate)}},{key:"_getForums",value:function(){var t=this;this.forumService.getForums().pipe(Object(f.a)((function(r){return!function(t,r){if(t===r)return!0;if(null===t||null===r)return!1;if(void 0===t||void 0===r)return!1;if(t.length!==r.length)return!1;for(var n=0;n<t.length;n++)if(!c(t[n],r[n]))return!1;return!0}(r,t.forums)}))).subscribe({next:function(r){return t.forums=r},complete:function(){return t.nextUpdate=setTimeout((function(){return t._getForums()}),5e3)}})}},{key:"addForum",value:function(t){t&&this.forums.push(t)}}]),t}()).\u0275fac=function(t){return new(t||g)(a.Mb(m.a))},g.\u0275cmp=a.Gb({type:g,selectors:[["app-forum-list"]],decls:1,vars:1,consts:[[3,"forum",4,"ngFor","ngForOf"],[3,"forum"]],template:function(t,r){1&t&&a.rc(0,d,1,1,"app-forum-info",0),2&t&&a.gc("ngForOf",r.forums)},directives:[e.h,p],styles:["app-forum-info[_ngcontent-%COMP%]{padding:1em}"]}),g),v=n("3Pt+"),w=n("kmnG"),_=n("qFsG"),C=((h=function(){function t(r,n){_classCallCheck(this,t),this.fb=r,this.forumService=n,this.newForumEvent=new a.n,this.newForumForm=this.fb.group({name:["",[v.j.required,v.j.maxLength(128)]],description:["",[v.j.required]]})}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onSubmit",value:function(t){var r=this,n=Object.assign({id:void 0,creator:void 0},t);this.forumService.addForum(n).subscribe((function(t){return r.newForumEvent.emit(t)}))}},{key:"name",get:function(){return this.newForumForm.get("name")}},{key:"nameErrors",get:function(){return this.name.errors?Object.keys(this.name.errors):[]}},{key:"description",get:function(){return this.newForumForm.get("description")}},{key:"descriptionErrors",get:function(){return this.description.errors?Object.keys(this.description.errors):[]}}]),t}()).\u0275fac=function(t){return new(t||h)(a.Mb(v.b),a.Mb(m.a))},h.\u0275cmp=a.Gb({type:h,selectors:[["app-add-forum"]],viewQuery:function(t,r){var n;1&t&&a.xc(v.d,!0),2&t&&a.jc(n=a.ac())&&(r.form=n.first)},outputs:{newForumEvent:"newForumEvent"},decls:16,vars:4,consts:[[3,"formGroup","ngSubmit"],["ngForm","ngForm"],["formControlName","name","id","name","matInput","","type","text"],["formControlName","description","id","description","matInput","","type","text"],["color","primary","mat-raised-button","","type","submit",1,"button",3,"disabled"]],template:function(t,r){if(1&t){var n=a.Sb();a.Rb(0,"form",0,1),a.Zb("ngSubmit",(function(){a.lc(n);var t=a.kc(1);return r.onSubmit(r.newForumForm.value),t.resetForm()})),a.Rb(2,"mat-form-field"),a.Rb(3,"mat-label"),a.tc(4,"Forum name"),a.Qb(),a.Nb(5,"input",2),a.Rb(6,"mat-error"),a.tc(7),a.Qb(),a.Qb(),a.Rb(8,"mat-form-field"),a.Rb(9,"mat-label"),a.tc(10,"Forum Description"),a.Qb(),a.Nb(11,"textarea",3),a.Rb(12,"mat-error"),a.tc(13),a.Qb(),a.Qb(),a.Rb(14,"button",4),a.tc(15,"Create Forum "),a.Qb(),a.Qb()}2&t&&(a.gc("formGroup",r.newForumForm),a.Bb(7),a.uc(r.nameErrors),a.Bb(6),a.uc(r.descriptionErrors),a.Bb(1),a.gc("disabled",r.newForumForm.invalid))},directives:[v.k,v.g,v.d,w.b,w.e,v.a,_.a,v.f,v.c,w.a,l.a],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}textarea[_ngcontent-%COMP%]{min-height:100px;max-height:300px;height:100%}"]}),h);function F(t,r){if(1&t){var n=a.Sb();a.Rb(0,"app-add-forum",5),a.Zb("newForumEvent",(function(t){return a.lc(n),a.dc(),a.kc(5).addForum(t)})),a.Qb()}}var k=function(){return{return_to_previous:!0}};function x(t,r){1&t&&(a.Rb(0,"button",6),a.tc(1,"Log in to create your own forums! "),a.Qb()),2&t&&a.gc("queryParams",a.hc(1,k))}var O,M,P,Q=[{path:"",component:(O=function(){function t(r,n){_classCallCheck(this,t),this.authService=r,this.route=n}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),O.\u0275fac=function(t){return new(t||O)(a.Mb(u.b),a.Mb(i.a))},O.\u0275cmp=a.Gb({type:O,selectors:[["app-forum-explorer"]],decls:10,vars:2,consts:[[1,"container"],["forumListComponent",""],[1,"spacer"],[3,"newForumEvent",4,"ngIf","ngIfElse"],["log_in_prompt",""],[3,"newForumEvent"],["color","primary","mat-raised-button","","routerLink","/user/login",3,"queryParams"]],template:function(t,r){if(1&t&&(a.Rb(0,"div",0),a.Rb(1,"h2"),a.tc(2,"Forum Explorer"),a.Qb(),a.Nb(3,"hr"),a.Nb(4,"app-forum-list",null,1),a.Nb(6,"div",2),a.rc(7,F,1,0,"app-add-forum",3),a.rc(8,x,2,2,"ng-template",null,4,a.sc),a.Qb()),2&t){var n=a.kc(9);a.Bb(7),a.gc("ngIf",r.authService.isLoggedIn())("ngIfElse",n)}},directives:[y,e.i,C,l.a,i.c],styles:[".container[_ngcontent-%COMP%]{display:block;margin:auto;padding:2em;text-align:center;max-width:1024px}app-forum-list[_ngcontent-%COMP%]{text-align:left}.spacer[_ngcontent-%COMP%]{margin-bottom:1em}app-add-forum[_ngcontent-%COMP%]{max-width:700px;width:100%;display:inline-block}"]}),O)}],R=((P=function t(){_classCallCheck(this,t)}).\u0275mod=a.Kb({type:P}),P.\u0275inj=a.Jb({factory:function(t){return new(t||P)},imports:[[i.e.forChild(Q)],i.e]}),P),S=((M=function t(){_classCallCheck(this,t)}).\u0275mod=a.Kb({type:M}),M.\u0275inj=a.Jb({factory:function(t){return new(t||M)},imports:[[e.b,v.i,_.b,l.b,o.d,R]]}),M)}}]);