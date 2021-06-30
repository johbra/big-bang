// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('bb.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('reagent.dom');
goog.require('bb.my_scetch');
bb.core.main_panel = (function bb$core$main_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"BigBang"], null),bb.my_scetch.my_scetch()], null);
});
bb.core.main = (function bb$core$main(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb.core.main_panel], null),document.getElementById("app"));
});
goog.exportSymbol('bb.core.main', bb.core.main);
bb.core.re_render = (function bb$core$re_render(){
return bb.core.main();
});
if((typeof bb !== 'undefined') && (typeof bb.core !== 'undefined') && (typeof bb.core.start_up !== 'undefined')){
} else {
bb.core.start_up = (function (){
bb.core.main();

return true;
})()
;
}
