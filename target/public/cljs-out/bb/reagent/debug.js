// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__12916__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12917__i = 0, G__12917__a = new Array(arguments.length -  0);
while (G__12917__i < G__12917__a.length) {G__12917__a[G__12917__i] = arguments[G__12917__i + 0]; ++G__12917__i;}
  args = new cljs.core.IndexedSeq(G__12917__a,0,null);
} 
return G__12916__delegate.call(this,args);};
G__12916.cljs$lang$maxFixedArity = 0;
G__12916.cljs$lang$applyTo = (function (arglist__12918){
var args = cljs.core.seq(arglist__12918);
return G__12916__delegate(args);
});
G__12916.cljs$core$IFn$_invoke$arity$variadic = G__12916__delegate;
return G__12916;
})()
);

(o.error = (function() { 
var G__12919__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12920__i = 0, G__12920__a = new Array(arguments.length -  0);
while (G__12920__i < G__12920__a.length) {G__12920__a[G__12920__i] = arguments[G__12920__i + 0]; ++G__12920__i;}
  args = new cljs.core.IndexedSeq(G__12920__a,0,null);
} 
return G__12919__delegate.call(this,args);};
G__12919.cljs$lang$maxFixedArity = 0;
G__12919.cljs$lang$applyTo = (function (arglist__12921){
var args = cljs.core.seq(arglist__12921);
return G__12919__delegate(args);
});
G__12919.cljs$core$IFn$_invoke$arity$variadic = G__12919__delegate;
return G__12919;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
