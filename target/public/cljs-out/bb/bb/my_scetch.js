// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('bb.my_scetch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('bb.big_bang');
bb.my_scetch.number__GT_square = (function bb$my_scetch$number__GT_square(state){
return quil.core.rect.cljs$core$IFn$_invoke$arity$4((200),(200),cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(state));
});
bb.my_scetch.reset = (function bb$my_scetch$reset(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$size,(100));
});
bb.my_scetch.my_scetch = (function bb$my_scetch$my_scetch(){
return bb.big_bang.big_bang(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,(100)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$to_DASH_draw,bb.my_scetch.number__GT_square,cljs.core.cst$kw$on_DASH_tick,(function (p1__16043_SHARP_){
return (p1__16043_SHARP_ - 0.5);
}),cljs.core.cst$kw$on_DASH_key,bb.my_scetch.reset,cljs.core.cst$kw$stop_DASH_when,(function (p1__16044_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16044_SHARP_,(-20));
})], null));
});
