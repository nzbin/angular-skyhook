(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"8Ubn":function(n,l,e){"use strict";e.r(l);var t=e("LoAr"),i=function(){return function(){}}(),r=e("C9Ky"),o=e("O/wF"),u=e("8dL6"),d=function(){return function(){this.preview=!1,this.placeholder=!1}}(),a=t["ɵcrt"]({encapsulation:0,styles:[['[_nghost-%COMP%]{display:block}*[_ngcontent-%COMP%]{-webkit-box-sizing:border-box;box-sizing:border-box}.card[_ngcontent-%COMP%]{padding:8px;border-radius:4px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.16);box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.16)}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.card--preview[_ngcontent-%COMP%]{-webkit-transform:rotate(-2deg);transform:rotate(-2deg);width:100%;height:100%;-webkit-box-shadow:0 8px 16px rgba(0,0,0,.25),0 6px 6px rgba(0,0,0,.13);box-shadow:0 8px 16px rgba(0,0,0,.25),0 6px 6px rgba(0,0,0,.13)}.card--placeholder[_ngcontent-%COMP%]{background:0 0;-webkit-box-shadow:none;box-shadow:none}.card--placeholder[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{visibility:hidden}.card--placeholder[_ngcontent-%COMP%]::before{content:"";border-radius:4px;background:rgba(0,0,0,.13);-webkit-box-shadow:inset 0 3px 7px rgba(0,0,0,.13),inset 0 1px 3px rgba(0,0,0,.22);box-shadow:inset 0 3px 7px rgba(0,0,0,.13),inset 0 1px 3px rgba(0,0,0,.22);position:absolute;top:0;left:0;width:100%;height:100%}']],data:{}});function s(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,2,"div",[["class","card"]],[[2,"card--preview",null],[2,"card--placeholder",null]],null,null,null,null)),(n()(),t["ɵeld"](1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["ɵted"](2,null,["",""]))],null,(function(n,l){var e=l.component;n(l,0,0,e.preview,e.placeholder),n(l,2,0,e.card.title)}))}var c=e("WT9V"),p=e("r6jt"),g=e("glzE"),b=e("w5k/"),x=e("D57K"),h={LIST:"SIMPLE_KANBAN_LIST",CARD:"SIMPLE_KANBAN_CARD"},f=e("6BAR"),m=function(){function n(){var n=this;this.initialTree=[{id:1,title:"To Do",cards:[{listId:1,id:10,title:"Write a new song"},{listId:1,id:20,title:"Put the lyrics to music"}]},{id:2,title:"Doing",cards:[{listId:2,id:30,title:"Rig up the speakers"}]},{id:3,title:"Done",cards:[]}],this.savedTree=this.initialTree,this.tree=this.initialTree,this.boardSpec={type:h.LIST,trackBy:function(n){return n.id},hover:function(l){n.tree=n.moveList(l)},drop:function(l){n.tree=n.savedTree=n.moveList(l)},endDrag:function(l){n.tree=n.savedTree}},this.listSpec={type:h.CARD,trackBy:function(n){return n.id},hover:function(l){n.tree=n.moveCard(l)},drop:function(l){n.tree=n.savedTree=n.moveCard(l)},endDrag:function(l){n.tree=n.savedTree}}}return n.prototype.moveList=function(n){return Object(f.b)(this.savedTree,(function(l){n.isInternal&&l.splice(n.index,1),l.splice(n.hover.index,0,n.data)}))},n.prototype.moveCard=function(n){return Object(f.b)(this.savedTree,(function(l){var e=n.listId,t=n.index,i=n.hover,r=i.listId,o=i.index;console.info("from",e,t,"to",r,o);var u=l.find((function(n){return n.id===e})),d=l.find((function(n){return n.id===r}));if(u&&(n.isInternal&&u.cards.splice(t,1),d)){var a=Object(x.__assign)({},n.data,{listId:r});d.cards.splice(o,0,a)}}))},n}(),v=function(n,l){this.specs=n,this.render=l,this.preview=!1,this.addCard=new t.EventEmitter,this.placeholder$=this.render&&this.render.source.listen((function(n){return n.isDragging()})),this.isOver$=this.render&&this.render.target.listen((function(n){return n.canDrop()&&n.isOver()})),this.trackById=function(n,l){return l.id}},w=t["ɵcrt"]({encapsulation:0,styles:[['*[_ngcontent-%COMP%]{-webkit-box-sizing:border-box;box-sizing:border-box}.cards-container[_ngcontent-%COMP%]{min-height:20px}.cards-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-bottom:6px}.list[_ngcontent-%COMP%]{position:relative;width:240px;padding:8px;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#eee;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.16);box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.16)}.list--preview[_ngcontent-%COMP%]{-webkit-box-shadow:0 14px 28px rgba(0,0,0,.2),0 10px 10px rgba(0,0,0,.1);box-shadow:0 14px 28px rgba(0,0,0,.2),0 10px 10px rgba(0,0,0,.1)}.list--placeholder[_ngcontent-%COMP%]{background:0 0;-webkit-box-shadow:none;box-shadow:none}.list--placeholder[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{visibility:hidden}.list--placeholder[_ngcontent-%COMP%]::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.13);border-radius:4px;-webkit-box-shadow:inset 0 3px 7px rgba(0,0,0,.13),inset 0 1px 3px rgba(0,0,0,.22);box-shadow:inset 0 3px 7px rgba(0,0,0,.13),inset 0 1px 3px rgba(0,0,0,.22)}.handle[_ngcontent-%COMP%]{margin:-8px;padding:8px}.handle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 8px}']],data:{}});function k(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,4,"kanban-card",[],null,null,null,s,a)),t["ɵdid"](1,671744,null,0,p.d,[t.ElementRef,t.NgZone],{dragSource:[0,"dragSource"],noHTML5Preview:[1,"noHTML5Preview"]},null),t["ɵdid"](2,4931584,[["render",4]],0,g.f,[p.g,t.ElementRef],{context:[0,"context"]},null),t["ɵdid"](3,49152,null,0,d,[],{card:[0,"card"],placeholder:[1,"placeholder"]},null),t["ɵpid"](131072,c.AsyncPipe,[t.ChangeDetectorRef])],(function(n,l){n(l,1,0,t["ɵnov"](l,2).source,!0),n(l,2,0,l.context.$implicit),n(l,3,0,l.context.$implicit.data,t["ɵunv"](l,3,1,t["ɵnov"](l,4).transform(t["ɵnov"](l,2).isDragging$)))}),null)}function C(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,1,"kanban-card",[],null,null,null,s,a)),t["ɵdid"](1,49152,null,0,d,[],{card:[0,"card"]},null)],(function(n,l){n(l,1,0,l.context.$implicit)}),null)}function y(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,2,"div",[["class","cards-container"]],null,null,null,null,null)),(n()(),t["ɵand"](16777216,null,null,1,null,C)),t["ɵdid"](2,278528,null,0,c.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null)],(function(n,l){var e=l.component;n(l,2,0,e.list.cards,e.trackById)}),null)}function O(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,12,"div",[["class","list"]],[[2,"list--preview",null],[2,"list--placeholder",null]],null,null,null,null)),t["ɵpid"](131072,c.AsyncPipe,[t.ChangeDetectorRef]),(n()(),t["ɵeld"](2,0,null,null,3,"div",[["class","handle"]],null,null,null,null,null)),t["ɵdid"](3,671744,null,0,p.d,[t.ElementRef,t.NgZone],{dragSource:[0,"dragSource"],noHTML5Preview:[1,"noHTML5Preview"]},null),(n()(),t["ɵeld"](4,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t["ɵted"](5,null,["",""])),(n()(),t["ɵeld"](6,0,null,null,5,"skyhook-sortable-list",[["class","cards-container"]],null,null,null,b.b,b.a)),t["ɵprd"](6144,null,g.b,null,[g.d]),t["ɵdid"](8,6012928,null,1,g.d,[p.g,t.ElementRef,t.ChangeDetectorRef],{listId:[0,"listId"],spec:[1,"spec"],children:[2,"children"]},null),t["ɵqud"](603979776,1,{ssRenderTemplates:1}),(n()(),t["ɵand"](0,[[1,2]],null,1,null,k)),t["ɵdid"](11,16384,null,0,g.g,[],null,null),(n()(),t["ɵand"](0,[["plain",2]],null,0,null,y))],(function(n,l){var e=l.component;n(l,3,0,null==e.render?null:e.render.source,!0),n(l,8,0,e.list.id,e.specs.listSpec,e.list.cards)}),(function(n,l){var e=l.component;n(l,0,0,e.preview,t["ɵunv"](l,0,1,t["ɵnov"](l,1).transform(null==e.render?null:e.render.isDragging$))),n(l,5,0,e.list.title)}))}var M=e("lWex"),_=e("yziD"),P=function(){function n(n){this.specs=n,this.ItemTypes=h}return n.prototype.addCard=function(n,l){},n.prototype.removeCard=function(n){},n}(),S=t["ɵcrt"]({encapsulation:0,styles:[["*[_ngcontent-%COMP%]{-webkit-box-sizing:border-box;box-sizing:border-box}.kanban-root[_ngcontent-%COMP%]{background:#50ddb0;-webkit-box-flex:1;flex:1;display:-webkit-box;display:flex;min-height:500px;overflow-x:scroll;padding:8px;-webkit-box-pack:start;justify-content:flex-start}.kanban-root[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:8px}.trash-zone[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;text-align:right}"]],data:{}});function R(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,3,"kanban-card",[],null,null,null,s,a)),t["ɵprd"](512,null,c["ɵNgStyleImpl"],c["ɵNgStyleR2Impl"],[t.ElementRef,t.KeyValueDiffers,t.Renderer2]),t["ɵdid"](2,278528,null,0,c.NgStyle,[c["ɵNgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),t["ɵdid"](3,49152,null,0,d,[],{card:[0,"card"],preview:[1,"preview"]},null)],(function(n,l){var e=l.parent.context.item.size.style();n(l,2,0,e),n(l,3,0,l.parent.context.item.data,!0)}),null)}function T(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,3,"kanban-list",[],null,null,null,O,w)),t["ɵprd"](512,null,c["ɵNgStyleImpl"],c["ɵNgStyleR2Impl"],[t.ElementRef,t.KeyValueDiffers,t.Renderer2]),t["ɵdid"](2,278528,null,0,c.NgStyle,[c["ɵNgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),t["ɵdid"](3,49152,null,0,v,[m,[2,g.f]],{list:[0,"list"],preview:[1,"preview"]},null)],(function(n,l){var e=l.parent.context.item.size.style();n(l,2,0,e),n(l,3,0,l.parent.context.item.data,!0)}),null)}function I(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,5,null,null,null,null,null,null,null)),t["ɵdid"](1,16384,null,0,c.NgSwitch,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),t["ɵand"](16777216,[[1,2]],null,1,null,R)),t["ɵdid"](3,278528,null,0,c.NgSwitchCase,[t.ViewContainerRef,t.TemplateRef,c.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),t["ɵand"](16777216,[[1,2]],null,1,null,T)),t["ɵdid"](5,278528,null,0,c.NgSwitchCase,[t.ViewContainerRef,t.TemplateRef,c.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),t["ɵand"](0,null,null,0))],(function(n,l){var e=l.component;n(l,1,0,l.context.$implicit),n(l,3,0,e.ItemTypes.CARD),n(l,5,0,e.ItemTypes.LIST)}),null)}function D(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,2,"kanban-list",[],null,[[null,"addCard"]],(function(n,l,e){var t=!0;return"addCard"===l&&(t=!1!==n.component.addCard(n.context.$implicit.data.id,e)&&t),t}),O,w)),t["ɵdid"](1,4931584,null,0,g.f,[p.g,t.ElementRef],{context:[0,"context"]},null),t["ɵdid"](2,49152,null,0,v,[m,[2,g.f]],{list:[0,"list"]},{addCard:"addCard"})],(function(n,l){n(l,1,0,l.context.$implicit),n(l,2,0,l.context.$implicit.data)}),null)}function N(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,3,"skyhook-preview",[],null,null,null,M.b,M.a)),t["ɵdid"](1,180224,null,1,_.c,[p.g,p.b],{allBackends:[0,"allBackends"]},null),t["ɵqud"](603979776,1,{content:0}),(n()(),t["ɵand"](0,[[1,2]],null,0,null,I)),(n()(),t["ɵeld"](4,0,null,null,5,"skyhook-sortable-list",[["class","kanban-root"],["ssSortableTrigger","fixed"]],null,null,null,b.b,b.a)),t["ɵprd"](6144,null,g.b,null,[g.d]),t["ɵdid"](6,6012928,null,1,g.d,[p.g,t.ElementRef,t.ChangeDetectorRef],{listId:[0,"listId"],horizontal:[1,"horizontal"],spec:[2,"spec"],children:[3,"children"],hoverTrigger:[4,"hoverTrigger"]},null),t["ɵqud"](603979776,2,{ssRenderTemplates:1}),(n()(),t["ɵand"](0,[[2,2]],null,1,null,D)),t["ɵdid"](9,16384,null,0,g.g,[],null,null)],(function(n,l){var e=l.component;n(l,1,0,!0),n(l,6,0,888,!0,e.specs.boardSpec,e.specs.tree,"fixed")}),null)}var z=function(){function n(n,l){this.dnd=n,this.el=l,this.cardSpill=Object(g.i)(this.dnd,h.CARD,{})}return n.prototype.ngAfterViewInit=function(){},n.prototype.ngOnDestroy=function(){this.cardSpill.unsubscribe()},n}(),L=t["ɵcrt"]({encapsulation:0,styles:[["*[_ngcontent-%COMP%]{-webkit-box-sizing:border-box;box-sizing:border-box}[_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.relative[_ngcontent-%COMP%]{position:relative}.text[_ngcontent-%COMP%]{background:#fff;max-width:800px}.span[_ngcontent-%COMP%]{border-radius:4px;padding:0 2px}.span--darkblue[_ngcontent-%COMP%]{background:#50ddb0;color:#fff}.span--light[_ngcontent-%COMP%]{background:#eee;color:#000;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.16);box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.16)}"]],data:{}});function A(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,24,"div",[["class","text"]],null,null,null,null,null)),(n()(),t["ɵeld"](1,0,null,null,1,"app-example-link",[["path","sortable/simple-kanban"]],null,null,null,o.b,o.a)),t["ɵdid"](2,49152,null,0,u.a,[],{path:[0,"path"]},null),(n()(),t["ɵeld"](3,0,null,null,10,"p",[],null,null,null,null,null)),(n()(),t["ɵted"](-1,null,[" This example uses "])),(n()(),t["ɵeld"](5,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["ɵted"](-1,null,["@angular-skyhook/sortable"])),(n()(),t["ɵted"](-1,null,[". It's similar to the other one, but doesn't use "])),(n()(),t["ɵeld"](8,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["ɵted"](-1,null,["@ngrx"])),(n()(),t["ɵted"](-1,null,[", just "])),(n()(),t["ɵeld"](11,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["ɵted"](-1,null,["Immer"])),(n()(),t["ɵted"](-1,null,[". There are two kinds of sortable in play here: "])),(n()(),t["ɵeld"](14,0,null,null,10,"ul",[],null,null,null,null,null)),(n()(),t["ɵeld"](15,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["ɵted"](-1,null,["One "])),(n()(),t["ɵeld"](17,0,null,null,1,"span",[["class","span span--darkblue"]],null,null,null,null,null)),(n()(),t["ɵted"](-1,null,["horizontal"])),(n()(),t["ɵted"](-1,null,[" one, whose 'cards' are the vertical lists. Try grabbing a whole list by its header, and reordering."])),(n()(),t["ɵeld"](20,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["ɵted"](-1,null,["Many "])),(n()(),t["ɵeld"](22,0,null,null,1,"span",[["class","span span--light"]],null,null,null,null,null)),(n()(),t["ɵted"](-1,null,["vertical"])),(n()(),t["ɵted"](-1,null,[" ones, which contain the kanban cards. Try moving the cards between lists."])),(n()(),t["ɵeld"](25,0,null,null,2,"div",[["class","relative"]],null,null,null,null,null)),(n()(),t["ɵeld"](26,0,null,null,1,"kanban-board",[],null,null,null,N,S)),t["ɵdid"](27,49152,null,0,P,[m],null,null)],(function(n,l){n(l,2,0,"sortable/simple-kanban")}),null)}function E(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,1,"kanban-container",[],null,null,null,A,L)),t["ɵdid"](1,4374528,null,0,z,[p.g,t.ElementRef],null,null)],null,null)}var B=t["ɵccf"]("kanban-container",z,E,{},{},[]),$=e("IfiR"),F=e("JqZp"),j=e("981U");e.d(l,"KanbanModuleNgFactory",(function(){return K}));var K=t["ɵcmf"](i,[],(function(n){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[r.a,B]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[t.LOCALE_ID,[2,c["ɵangular_packages_common_common_a"]]]),t["ɵmpd"](4608,$.e,$.e,[]),t["ɵmpd"](4608,$.t,$.t,[]),t["ɵmpd"](4608,m,m,[]),t["ɵmpd"](1073742336,c.CommonModule,c.CommonModule,[]),t["ɵmpd"](1073742336,F.a,F.a,[]),t["ɵmpd"](1073742336,p.f,p.f,[]),t["ɵmpd"](1073742336,_.b,_.b,[]),t["ɵmpd"](1073742336,g.e,g.e,[]),t["ɵmpd"](1073742336,$.s,$.s,[]),t["ɵmpd"](1073742336,$.q,$.q,[]),t["ɵmpd"](1073742336,j.o,j.o,[[2,j.t],[2,j.k]]),t["ɵmpd"](1073742336,i,i,[]),t["ɵmpd"](1024,j.i,(function(){return[[{path:"",component:z}]]}),[])])}))}}]);