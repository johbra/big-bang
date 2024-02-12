// Compiled by ClojureScript 1.10.773 {}
goog.provide('bb.my_scetch');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('bb.big_bang');
bb.my_scetch.number__GT_square = (function bb$my_scetch$number__GT_square(state){
return quil.core.rect.call(null,(200),(200),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state));
});
bb.my_scetch.reset = (function bb$my_scetch$reset(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"size","size",1098693007),(100));
});
bb.my_scetch.my_scetch = (function bb$my_scetch$my_scetch(){
return bb.big_bang.big_bang.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(100)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"to-draw","to-draw",-1467115105),bb.my_scetch.number__GT_square,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396),(function (p1__21061_SHARP_){
return (p1__21061_SHARP_ - 0.5);
}),new cljs.core.Keyword(null,"on-key","on-key",1297490032),bb.my_scetch.reset,new cljs.core.Keyword(null,"stop-when","stop-when",752930802),(function (p1__21062_SHARP_){
return cljs.core._EQ_.call(null,p1__21062_SHARP_,(-20));
})], null));
});

//# sourceMappingURL=my_scetch.js.map
