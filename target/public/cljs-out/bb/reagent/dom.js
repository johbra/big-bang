// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__21104 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__21105 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__21105);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__21106 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__21107 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__21107);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__21106);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__21104);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
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
var G__21109 = arguments.length;
switch (G__21109) {
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
return reagent.dom.render.call(null,comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__21110 = ((cljs.core.map_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.call(null,vec__21110,(0),null);
var callback = cljs.core.nth.call(null,vec__21110,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
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
reagent.ratom.flush_BANG_.call(null);

var seq__21114_21130 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__21115_21131 = null;
var count__21116_21132 = (0);
var i__21117_21133 = (0);
while(true){
if((i__21117_21133 < count__21116_21132)){
var vec__21124_21134 = cljs.core._nth.call(null,chunk__21115_21131,i__21117_21133);
var container_21135 = cljs.core.nth.call(null,vec__21124_21134,(0),null);
var comp_21136 = cljs.core.nth.call(null,vec__21124_21134,(1),null);
reagent.dom.re_render_component.call(null,comp_21136,container_21135);


var G__21137 = seq__21114_21130;
var G__21138 = chunk__21115_21131;
var G__21139 = count__21116_21132;
var G__21140 = (i__21117_21133 + (1));
seq__21114_21130 = G__21137;
chunk__21115_21131 = G__21138;
count__21116_21132 = G__21139;
i__21117_21133 = G__21140;
continue;
} else {
var temp__5804__auto___21141 = cljs.core.seq.call(null,seq__21114_21130);
if(temp__5804__auto___21141){
var seq__21114_21142__$1 = temp__5804__auto___21141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21114_21142__$1)){
var c__5525__auto___21143 = cljs.core.chunk_first.call(null,seq__21114_21142__$1);
var G__21144 = cljs.core.chunk_rest.call(null,seq__21114_21142__$1);
var G__21145 = c__5525__auto___21143;
var G__21146 = cljs.core.count.call(null,c__5525__auto___21143);
var G__21147 = (0);
seq__21114_21130 = G__21144;
chunk__21115_21131 = G__21145;
count__21116_21132 = G__21146;
i__21117_21133 = G__21147;
continue;
} else {
var vec__21127_21148 = cljs.core.first.call(null,seq__21114_21142__$1);
var container_21149 = cljs.core.nth.call(null,vec__21127_21148,(0),null);
var comp_21150 = cljs.core.nth.call(null,vec__21127_21148,(1),null);
reagent.dom.re_render_component.call(null,comp_21150,container_21149);


var G__21151 = cljs.core.next.call(null,seq__21114_21142__$1);
var G__21152 = null;
var G__21153 = (0);
var G__21154 = (0);
seq__21114_21130 = G__21151;
chunk__21115_21131 = G__21152;
count__21116_21132 = G__21153;
i__21117_21133 = G__21154;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
