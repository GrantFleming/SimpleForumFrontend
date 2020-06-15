function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _createClass(t,n,r){return n&&_defineProperties(t.prototype,n),r&&_defineProperties(t,r),t}function _createForOfIteratorHelper(t,n){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=_unsupportedIterableToArray(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function _unsupportedIterableToArray(t,n){if(t){if("string"==typeof t)return _arrayLikeToArray(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,n):void 0}}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"S5h/":function(t,n,r){"use strict";r.r(n),r.d(n,"ForumExplorerModule",(function(){return S}));var e=r("ofXK"),o=r("Wp6s"),i=r("tyNb"),a=r("fXoL"),u=r("6oFh");function c(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(n.length<2)return!0;var e,o=n[0],i=_createForOfIteratorHelper(n.slice(1));try{for(i.s();!(e=i.n()).done;){var a=e.value;if(o!==a){if(null===o||null===a)return!1;if(void 0===o||void 0===a)return!1;if(o.id!==a.id||o.name!==a.name||o.description!==a.description)return!1}}}catch(u){i.e(u)}finally{i.f()}return!0}var s,f=r("pLZG"),m=r("QQ3A"),l=r("bTqV"),p=function(t){return["/forums/",t]},b=((s=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=a.Gb({type:s,selectors:[["app-forum-info"]],inputs:{forum:"forum"},decls:10,vars:5,consts:[[1,"container"],[1,"name"],[1,"desc"],["color","primary","mat-raised-button","",1,"forum-button",3,"routerLink"]],template:function(t,n){1&t&&(a.Rb(0,"div",0),a.Rb(1,"mat-card"),a.Rb(2,"mat-card-header"),a.Rb(3,"mat-card-title",1),a.tc(4),a.Qb(),a.Qb(),a.Rb(5,"mat-card-content"),a.Rb(6,"p",2),a.tc(7),a.Qb(),a.Qb(),a.Qb(),a.Rb(8,"button",3),a.tc(9,"Visit Forum "),a.Qb(),a.Qb()),2&t&&(a.Bb(4),a.uc(null==n.forum?null:n.forum.name),a.Bb(3),a.uc(null==n.forum?null:n.forum.description),a.Bb(1),a.gc("routerLink",a.ic(3,p,null==n.forum?null:n.forum.id)))},directives:[o.a,o.c,o.f,o.b,l.a,i.c],styles:[".container[_ngcontent-%COMP%]{margin:0 -.5rem;display:flex;flex-wrap:wrap;justify-content:flex-end}.container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{flex-basis:400px;flex-grow:1;margin:0 .5rem}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1.2rem;width:7rem;margin:0 .5rem;white-space:normal}@media (max-width:599.9px){.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transform:translate(-35px,-10px);width:8em}}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),s);function d(t,n){1&t&&a.Nb(0,"app-forum-info",1),2&t&&a.gc("forum",n.$implicit)}var g,h,y=((g=function(){function t(n){_classCallCheck(this,t),this.forumService=n}return _createClass(t,[{key:"ngOnInit",value:function(){this._getForums()}},{key:"ngOnDestroy",value:function(){clearTimeout(this.nextUpdate)}},{key:"_getForums",value:function(){var t=this;this.forumService.getForums().pipe(Object(f.a)((function(n){return!function(t,n){if(t===n)return!0;if(null===t||null===n)return!1;if(void 0===t||void 0===n)return!1;if(t.length!==n.length)return!1;for(var r=0;r<t.length;r++)if(!c(t[r],n[r]))return!1;return!0}(n,t.forums)}))).subscribe({next:function(n){return t.forums=n},complete:function(){return t.nextUpdate=setTimeout((function(){return t._getForums()}),5e3)}})}},{key:"addForum",value:function(t){t&&this.forums.push(t)}}]),t}()).\u0275fac=function(t){return new(t||g)(a.Mb(m.a))},g.\u0275cmp=a.Gb({type:g,selectors:[["app-forum-list"]],decls:1,vars:1,consts:[[3,"forum",4,"ngFor","ngForOf"],[3,"forum"]],template:function(t,n){1&t&&a.rc(0,d,1,1,"app-forum-info",0),2&t&&a.gc("ngForOf",n.forums)},directives:[e.h,b],styles:["app-forum-info[_ngcontent-%COMP%]{padding:1em}"]}),g),v=r("3Pt+"),w=r("kmnG"),_=r("qFsG"),C=((h=function(){function t(n,r){_classCallCheck(this,t),this.fb=n,this.forumService=r,this.newForumEvent=new a.n,this.newForumForm=this.fb.group({name:["",[v.j.required,v.j.maxLength(128)]],description:["",[v.j.required]]})}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onSubmit",value:function(t){var n=this,r=Object.assign({id:null},t);this.forumService.addForum(r).subscribe((function(t){return n.newForumEvent.emit(t)}))}},{key:"name",get:function(){return this.newForumForm.get("name")}},{key:"nameErrors",get:function(){return this.name.errors?Object.keys(this.name.errors):[]}},{key:"description",get:function(){return this.newForumForm.get("description")}},{key:"descriptionErrors",get:function(){return this.description.errors?Object.keys(this.description.errors):[]}}]),t}()).\u0275fac=function(t){return new(t||h)(a.Mb(v.b),a.Mb(m.a))},h.\u0275cmp=a.Gb({type:h,selectors:[["app-add-forum"]],viewQuery:function(t,n){var r;1&t&&a.xc(v.d,!0),2&t&&a.jc(r=a.ac())&&(n.form=r.first)},outputs:{newForumEvent:"newForumEvent"},decls:16,vars:4,consts:[[3,"formGroup","ngSubmit"],["ngForm","ngForm"],["formControlName","name","id","name","matInput","","type","text"],["formControlName","description","id","description","matInput","","type","text"],["color","primary","mat-raised-button","","type","submit",1,"button",3,"disabled"]],template:function(t,n){if(1&t){var r=a.Sb();a.Rb(0,"form",0,1),a.Zb("ngSubmit",(function(){a.lc(r);var t=a.kc(1);return n.onSubmit(n.newForumForm.value),t.resetForm()})),a.Rb(2,"mat-form-field"),a.Rb(3,"mat-label"),a.tc(4,"Forum name"),a.Qb(),a.Nb(5,"input",2),a.Rb(6,"mat-error"),a.tc(7),a.Qb(),a.Qb(),a.Rb(8,"mat-form-field"),a.Rb(9,"mat-label"),a.tc(10,"Forum Description"),a.Qb(),a.Nb(11,"textarea",3),a.Rb(12,"mat-error"),a.tc(13),a.Qb(),a.Qb(),a.Rb(14,"button",4),a.tc(15,"Create Forum "),a.Qb(),a.Qb()}2&t&&(a.gc("formGroup",n.newForumForm),a.Bb(7),a.uc(n.nameErrors),a.Bb(6),a.uc(n.descriptionErrors),a.Bb(1),a.gc("disabled",n.newForumForm.invalid))},directives:[v.k,v.g,v.d,w.b,w.e,v.a,_.a,v.f,v.c,w.a,l.a],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}textarea[_ngcontent-%COMP%]{min-height:100px;max-height:300px;height:100%}"]}),h);function F(t,n){if(1&t){var r=a.Sb();a.Rb(0,"app-add-forum",5),a.Zb("newForumEvent",(function(t){return a.lc(r),a.dc(),a.kc(5).addForum(t)})),a.Qb()}}var k=function(){return{return_to_previous:!0}};function x(t,n){1&t&&(a.Rb(0,"button",6),a.tc(1,"Log in to create your own forums! "),a.Qb()),2&t&&a.gc("queryParams",a.hc(1,k))}var O,M,P,Q=[{path:"",component:(O=function(){function t(n,r){_classCallCheck(this,t),this.authService=n,this.route=r}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),O.\u0275fac=function(t){return new(t||O)(a.Mb(u.b),a.Mb(i.a))},O.\u0275cmp=a.Gb({type:O,selectors:[["app-forum-explorer"]],decls:10,vars:2,consts:[[1,"container"],["forumListComponent",""],[1,"spacer"],[3,"newForumEvent",4,"ngIf","ngIfElse"],["log_in_prompt",""],[3,"newForumEvent"],["color","primary","mat-raised-button","","routerLink","/user/login",3,"queryParams"]],template:function(t,n){if(1&t&&(a.Rb(0,"div",0),a.Rb(1,"h2"),a.tc(2,"Forum Explorer"),a.Qb(),a.Nb(3,"hr"),a.Nb(4,"app-forum-list",null,1),a.Nb(6,"div",2),a.rc(7,F,1,0,"app-add-forum",3),a.rc(8,x,2,2,"ng-template",null,4,a.sc),a.Qb()),2&t){var r=a.kc(9);a.Bb(7),a.gc("ngIf",n.authService.isLoggedIn())("ngIfElse",r)}},directives:[y,e.i,C,l.a,i.c],styles:[".container[_ngcontent-%COMP%]{display:block;margin:auto;padding:2em;text-align:center;max-width:1024px}app-forum-list[_ngcontent-%COMP%]{text-align:left}.spacer[_ngcontent-%COMP%]{margin-bottom:1em}app-add-forum[_ngcontent-%COMP%]{max-width:700px;width:100%;display:inline-block}"]}),O)}],R=((P=function t(){_classCallCheck(this,t)}).\u0275mod=a.Kb({type:P}),P.\u0275inj=a.Jb({factory:function(t){return new(t||P)},imports:[[i.e.forChild(Q)],i.e]}),P),S=((M=function t(){_classCallCheck(this,t)}).\u0275mod=a.Kb({type:M}),M.\u0275inj=a.Jb({factory:function(t){return new(t||M)},imports:[[e.b,v.i,_.b,l.b,o.d,R]]}),M)}}]);