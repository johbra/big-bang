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
var G__17051__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__17051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17052__i = 0, G__17052__a = new Array(arguments.length -  0);
while (G__17052__i < G__17052__a.length) {G__17052__a[G__17052__i] = arguments[G__17052__i + 0]; ++G__17052__i;}
  args = new cljs.core.IndexedSeq(G__17052__a,0,null);
} 
return G__17051__delegate.call(this,args);};
G__17051.cljs$lang$maxFixedArity = 0;
G__17051.cljs$lang$applyTo = (function (arglist__17053){
var args = cljs.core.seq(arglist__17053);
return G__17051__delegate(args);
});
G__17051.cljs$core$IFn$_invoke$arity$variadic = G__17051__delegate;
return G__17051;
})()
);

(o.error = (function() { 
var G__17054__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__17054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17055__i = 0, G__17055__a = new Array(arguments.length -  0);
while (G__17055__i < G__17055__a.length) {G__17055__a[G__17055__i] = arguments[G__17055__i + 0]; ++G__17055__i;}
  args = new cljs.core.IndexedSeq(G__17055__a,0,null);
} 
return G__17054__delegate.call(this,args);};
G__17054.cljs$lang$maxFixedArity = 0;
G__17054.cljs$lang$applyTo = (function (arglist__17056){
var args = cljs.core.seq(arglist__17056);
return G__17054__delegate(args);
});
G__17054.cljs$core$IFn$_invoke$arity$variadic = G__17054__delegate;
return G__17054;
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
