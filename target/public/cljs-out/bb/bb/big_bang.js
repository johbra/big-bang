// Compiled by ClojureScript 1.10.773 {}
goog.provide('bb.big_bang');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('reagent.core');
goog.require('quil.core');
goog.require('quil.middleware');
bb.big_bang.update_state = (function bb$big_bang$update_state(fn,state){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(state).call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state)))){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"size","size",1098693007),fn);
} else {
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.identity);
}
});
bb.big_bang.draw = (function bb$big_bang$draw(draw_figure,state){
quil.core.background.call(null,(127));

quil.core.fill.call(null,(0));

return draw_figure.call(null,state);
});
bb.big_bang.canvas = (function bb$big_bang$canvas(state,events){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (component){
var node = reagent.dom.dom_node.call(null,component);
var width = (800);
var height = (800);
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),node,new cljs.core.Keyword(null,"draw","draw",1358331674),cljs.core.partial.call(null,bb.big_bang.draw,new cljs.core.Keyword(null,"to-draw","to-draw",-1467115105).cljs$core$IFn$_invoke$arity$1(events)),new cljs.core.Keyword(null,"setup","setup",1987730512),(function (){
return state;
}),new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.partial.call(null,bb.big_bang.update_state,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396).cljs$core$IFn$_invoke$arity$1(events)),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"on-key","on-key",1297490032).cljs$core$IFn$_invoke$arity$1(events),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
})], null));
});
bb.big_bang.big_bang = (function bb$big_bang$big_bang(state,events){
var with_let24138 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let24138","with-let24138",-1538211206));
var temp__5739__auto___24140 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___24140 == null)){
} else {
var c__14892__auto___24141 = temp__5739__auto___24140;
if((with_let24138.generation === c__14892__auto___24141.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let24138.generation = c__14892__auto___24141.ratomGeneration);
}


var init24139 = (with_let24138.length === (0));
var running_QMARK_ = ((init24139)?(with_let24138[(0)] = reagent.core.atom.call(null,false)):(with_let24138[(0)]));
var res__14893__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>button","div>button",1195060839),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,running_QMARK_,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref.call(null,running_QMARK_))?"stop":"start")], null),(cljs.core.truth_(cljs.core.deref.call(null,running_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb.big_bang.canvas,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"stop-when","stop-when",752930802).cljs$core$IFn$_invoke$arity$1(events)], null),events], null):null)], null);

return res__14893__auto__;
});

//# sourceMappingURL=big_bang.js.map
