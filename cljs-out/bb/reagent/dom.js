// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
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
var _STAR_always_update_STAR__orig_val__21002 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__21003 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__21003);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__21004 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__21005 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__21005);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__21004);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__21002);
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
var G__21007 = arguments.length;
switch (G__21007) {
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
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__21008 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__21008,(0),null);
var callback = cljs.core.nth.call(null,vec__21008,(1),null);
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

var seq__21012_21028 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__21013_21029 = null;
var count__21014_21030 = (0);
var i__21015_21031 = (0);
while(true){
if((i__21015_21031 < count__21014_21030)){
var vec__21022_21032 = cljs.core._nth.call(null,chunk__21013_21029,i__21015_21031);
var container_21033 = cljs.core.nth.call(null,vec__21022_21032,(0),null);
var comp_21034 = cljs.core.nth.call(null,vec__21022_21032,(1),null);
reagent.dom.re_render_component.call(null,comp_21034,container_21033);


var G__21035 = seq__21012_21028;
var G__21036 = chunk__21013_21029;
var G__21037 = count__21014_21030;
var G__21038 = (i__21015_21031 + (1));
seq__21012_21028 = G__21035;
chunk__21013_21029 = G__21036;
count__21014_21030 = G__21037;
i__21015_21031 = G__21038;
continue;
} else {
var temp__5735__auto___21039 = cljs.core.seq.call(null,seq__21012_21028);
if(temp__5735__auto___21039){
var seq__21012_21040__$1 = temp__5735__auto___21039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21012_21040__$1)){
var c__4556__auto___21041 = cljs.core.chunk_first.call(null,seq__21012_21040__$1);
var G__21042 = cljs.core.chunk_rest.call(null,seq__21012_21040__$1);
var G__21043 = c__4556__auto___21041;
var G__21044 = cljs.core.count.call(null,c__4556__auto___21041);
var G__21045 = (0);
seq__21012_21028 = G__21042;
chunk__21013_21029 = G__21043;
count__21014_21030 = G__21044;
i__21015_21031 = G__21045;
continue;
} else {
var vec__21025_21046 = cljs.core.first.call(null,seq__21012_21040__$1);
var container_21047 = cljs.core.nth.call(null,vec__21025_21046,(0),null);
var comp_21048 = cljs.core.nth.call(null,vec__21025_21046,(1),null);
reagent.dom.re_render_component.call(null,comp_21048,container_21047);


var G__21049 = cljs.core.next.call(null,seq__21012_21040__$1);
var G__21050 = null;
var G__21051 = (0);
var G__21052 = (0);
seq__21012_21028 = G__21049;
chunk__21013_21029 = G__21050;
count__21014_21030 = G__21051;
i__21015_21031 = G__21052;
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
