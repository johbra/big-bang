// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('bb.big_bang');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.dom');
goog.require('reagent.core');
goog.require('quil.core');
goog.require('quil.middleware');
bb.big_bang.update_state = (function bb$big_bang$update_state(fn,state){
if(cljs.core.not((function (){var G__16036 = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(state);
var fexpr__16035 = cljs.core.cst$kw$stop.cljs$core$IFn$_invoke$arity$1(state);
return (fexpr__16035.cljs$core$IFn$_invoke$arity$1 ? fexpr__16035.cljs$core$IFn$_invoke$arity$1(G__16036) : fexpr__16035.call(null,G__16036));
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$size,fn);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$size,cljs.core.identity);
}
});
bb.big_bang.draw = (function bb$big_bang$draw(draw_figure,state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((127));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

return (draw_figure.cljs$core$IFn$_invoke$arity$1 ? draw_figure.cljs$core$IFn$_invoke$arity$1(state) : draw_figure.call(null,state));
});
bb.big_bang.canvas = (function bb$big_bang$canvas(state,events){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (component){
var node = reagent.dom.dom_node(component);
var width = (800);
var height = (800);
return quil.core.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,node,cljs.core.cst$kw$draw,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bb.big_bang.draw,cljs.core.cst$kw$to_DASH_draw.cljs$core$IFn$_invoke$arity$1(events)),cljs.core.cst$kw$setup,(function (){
return state;
}),cljs.core.cst$kw$update,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bb.big_bang.update_state,cljs.core.cst$kw$on_DASH_tick.cljs$core$IFn$_invoke$arity$1(events)),cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$on_DASH_key.cljs$core$IFn$_invoke$arity$1(events),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null)], 0));
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null);
})], null));
});
bb.big_bang.big_bang = (function bb$big_bang$big_bang(state,events){
var with_let16037 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let16037);
var temp__5739__auto___16039 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___16039 == null)){
} else {
var c__13104__auto___16040 = temp__5739__auto___16039;
if((with_let16037.generation === c__13104__auto___16040.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16037.generation = c__13104__auto___16040.ratomGeneration);
}


var init16038 = (with_let16037.length === (0));
var running_QMARK_ = ((init16038)?(with_let16037[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let16037[(0)]));
var res__13105__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_GT_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(running_QMARK_,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(running_QMARK_))?"stop":"start")], null),(cljs.core.truth_(cljs.core.deref(running_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb.big_bang.canvas,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$size,cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$stop,cljs.core.cst$kw$stop_DASH_when.cljs$core$IFn$_invoke$arity$1(events)], null),events], null):null)], null);

return res__13105__auto__;
});
