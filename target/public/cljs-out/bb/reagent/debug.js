// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__16089__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__16089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16090__i = 0, G__16090__a = new Array(arguments.length -  0);
while (G__16090__i < G__16090__a.length) {G__16090__a[G__16090__i] = arguments[G__16090__i + 0]; ++G__16090__i;}
  args = new cljs.core.IndexedSeq(G__16090__a,0,null);
} 
return G__16089__delegate.call(this,args);};
G__16089.cljs$lang$maxFixedArity = 0;
G__16089.cljs$lang$applyTo = (function (arglist__16091){
var args = cljs.core.seq(arglist__16091);
return G__16089__delegate(args);
});
G__16089.cljs$core$IFn$_invoke$arity$variadic = G__16089__delegate;
return G__16089;
})()
);

(o.error = (function() { 
var G__16092__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__16092 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16093__i = 0, G__16093__a = new Array(arguments.length -  0);
while (G__16093__i < G__16093__a.length) {G__16093__a[G__16093__i] = arguments[G__16093__i + 0]; ++G__16093__i;}
  args = new cljs.core.IndexedSeq(G__16093__a,0,null);
} 
return G__16092__delegate.call(this,args);};
G__16092.cljs$lang$maxFixedArity = 0;
G__16092.cljs$lang$applyTo = (function (arglist__16094){
var args = cljs.core.seq(arglist__16094);
return G__16092__delegate(args);
});
G__16092.cljs$core$IFn$_invoke$arity$variadic = G__16092__delegate;
return G__16092;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
