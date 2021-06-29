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
var G__19821__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19822__i = 0, G__19822__a = new Array(arguments.length -  0);
while (G__19822__i < G__19822__a.length) {G__19822__a[G__19822__i] = arguments[G__19822__i + 0]; ++G__19822__i;}
  args = new cljs.core.IndexedSeq(G__19822__a,0,null);
} 
return G__19821__delegate.call(this,args);};
G__19821.cljs$lang$maxFixedArity = 0;
G__19821.cljs$lang$applyTo = (function (arglist__19823){
var args = cljs.core.seq(arglist__19823);
return G__19821__delegate(args);
});
G__19821.cljs$core$IFn$_invoke$arity$variadic = G__19821__delegate;
return G__19821;
})()
);

(o.error = (function() { 
var G__19824__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19825__i = 0, G__19825__a = new Array(arguments.length -  0);
while (G__19825__i < G__19825__a.length) {G__19825__a[G__19825__i] = arguments[G__19825__i + 0]; ++G__19825__i;}
  args = new cljs.core.IndexedSeq(G__19825__a,0,null);
} 
return G__19824__delegate.call(this,args);};
G__19824.cljs$lang$maxFixedArity = 0;
G__19824.cljs$lang$applyTo = (function (arglist__19826){
var args = cljs.core.seq(arglist__19826);
return G__19824__delegate(args);
});
G__19824.cljs$core$IFn$_invoke$arity$variadic = G__19824__delegate;
return G__19824;
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
