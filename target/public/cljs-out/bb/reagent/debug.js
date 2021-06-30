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
var G__15190__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15191__i = 0, G__15191__a = new Array(arguments.length -  0);
while (G__15191__i < G__15191__a.length) {G__15191__a[G__15191__i] = arguments[G__15191__i + 0]; ++G__15191__i;}
  args = new cljs.core.IndexedSeq(G__15191__a,0,null);
} 
return G__15190__delegate.call(this,args);};
G__15190.cljs$lang$maxFixedArity = 0;
G__15190.cljs$lang$applyTo = (function (arglist__15192){
var args = cljs.core.seq(arglist__15192);
return G__15190__delegate(args);
});
G__15190.cljs$core$IFn$_invoke$arity$variadic = G__15190__delegate;
return G__15190;
})()
);

(o.error = (function() { 
var G__15193__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15194__i = 0, G__15194__a = new Array(arguments.length -  0);
while (G__15194__i < G__15194__a.length) {G__15194__a[G__15194__i] = arguments[G__15194__i + 0]; ++G__15194__i;}
  args = new cljs.core.IndexedSeq(G__15194__a,0,null);
} 
return G__15193__delegate.call(this,args);};
G__15193.cljs$lang$maxFixedArity = 0;
G__15193.cljs$lang$applyTo = (function (arglist__15195){
var args = cljs.core.seq(arglist__15195);
return G__15193__delegate(args);
});
G__15193.cljs$core$IFn$_invoke$arity$variadic = G__15193__delegate;
return G__15193;
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
