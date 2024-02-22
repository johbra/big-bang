// Compiled by ClojureScript 1.11.132 {:optimizations :none}
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
var G__20145__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20146__i = 0, G__20146__a = new Array(arguments.length -  0);
while (G__20146__i < G__20146__a.length) {G__20146__a[G__20146__i] = arguments[G__20146__i + 0]; ++G__20146__i;}
  args = new cljs.core.IndexedSeq(G__20146__a,0,null);
} 
return G__20145__delegate.call(this,args);};
G__20145.cljs$lang$maxFixedArity = 0;
G__20145.cljs$lang$applyTo = (function (arglist__20147){
var args = cljs.core.seq(arglist__20147);
return G__20145__delegate(args);
});
G__20145.cljs$core$IFn$_invoke$arity$variadic = G__20145__delegate;
return G__20145;
})()
);

(o.error = (function() { 
var G__20148__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20148 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20149__i = 0, G__20149__a = new Array(arguments.length -  0);
while (G__20149__i < G__20149__a.length) {G__20149__a[G__20149__i] = arguments[G__20149__i + 0]; ++G__20149__i;}
  args = new cljs.core.IndexedSeq(G__20149__a,0,null);
} 
return G__20148__delegate.call(this,args);};
G__20148.cljs$lang$maxFixedArity = 0;
G__20148.cljs$lang$applyTo = (function (arglist__20150){
var args = cljs.core.seq(arglist__20150);
return G__20148__delegate(args);
});
G__20148.cljs$core$IFn$_invoke$arity$variadic = G__20148__delegate;
return G__20148;
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
