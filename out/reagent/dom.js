// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__2309 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__2310 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__2310);

try{var G__2311 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__2312 = container;
var G__2313 = (function (){
var _STAR_always_update_STAR__orig_val__2314 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__2315 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__2315);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__2314);
}});
return reagent.dom.global$module$react_dom.render(G__2311,G__2312,G__2313);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__2309);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__2317 = arguments.length;
switch (G__2317) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__2318 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$compiler.cljs$core$IFn$_invoke$arity$1(callback_or_compiler),cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2318,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2318,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__2322_2338 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__2323_2339 = null;
var count__2324_2340 = (0);
var i__2325_2341 = (0);
while(true){
if((i__2325_2341 < count__2324_2340)){
var vec__2332_2342 = chunk__2323_2339.cljs$core$IIndexed$_nth$arity$2(null,i__2325_2341);
var container_2343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2332_2342,(0),null);
var comp_2344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2332_2342,(1),null);
reagent.dom.re_render_component(comp_2344,container_2343);


var G__2345 = seq__2322_2338;
var G__2346 = chunk__2323_2339;
var G__2347 = count__2324_2340;
var G__2348 = (i__2325_2341 + (1));
seq__2322_2338 = G__2345;
chunk__2323_2339 = G__2346;
count__2324_2340 = G__2347;
i__2325_2341 = G__2348;
continue;
} else {
var temp__5804__auto___2349 = cljs.core.seq(seq__2322_2338);
if(temp__5804__auto___2349){
var seq__2322_2350__$1 = temp__5804__auto___2349;
if(cljs.core.chunked_seq_QMARK_(seq__2322_2350__$1)){
var c__5525__auto___2351 = cljs.core.chunk_first(seq__2322_2350__$1);
var G__2352 = cljs.core.chunk_rest(seq__2322_2350__$1);
var G__2353 = c__5525__auto___2351;
var G__2354 = cljs.core.count(c__5525__auto___2351);
var G__2355 = (0);
seq__2322_2338 = G__2352;
chunk__2323_2339 = G__2353;
count__2324_2340 = G__2354;
i__2325_2341 = G__2355;
continue;
} else {
var vec__2335_2356 = cljs.core.first(seq__2322_2350__$1);
var container_2357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2335_2356,(0),null);
var comp_2358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2335_2356,(1),null);
reagent.dom.re_render_component(comp_2358,container_2357);


var G__2359 = cljs.core.next(seq__2322_2350__$1);
var G__2360 = null;
var G__2361 = (0);
var G__2362 = (0);
seq__2322_2338 = G__2359;
chunk__2323_2339 = G__2360;
count__2324_2340 = G__2361;
i__2325_2341 = G__2362;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
