// Compiled by ClojureScript 1.10.773 {}
goog.provide('quil.util');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Function that does nothing.
 */
quil.util.no_fn = (function quil$util$no_fn(){
return null;
});
/**
 * Internal state map used to initiate all sketches.
 */
quil.util.initial_internal_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame-rate","frame-rate",-994918942),(60),new cljs.core.Keyword(null,"looping?","looping?",78344245),true], null);
/**
 * Returns the val associated with `key` in `mappings` or `key` directly if it
 *   is one of the vals in `mappings`. Otherwise throws an exception.
 */
quil.util.resolve_constant_key = (function quil$util$resolve_constant_key(key,mappings){
if(cljs.core.truth_(cljs.core.get.call(null,mappings,key))){
return cljs.core.get.call(null,mappings,key);
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([key]),cljs.core.vals.call(null,mappings)))){
return key;
} else {
throw (new Error(["Expecting a keyword, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),". Expected one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,mappings))))].join('')));

}
}
});
/**
 * Returns the length of the longest key of map `m`. Assumes `m`'s keys are strings
 * and returns 0 if map is empty:
 * 
 * Examples:
 * ```
 * (length-of-longest-key {"foo" 1 "barr" 2 "bazzz" 3}) ;=> 5
 * (length-of-longest-key {}) ;=> 0
 * ```
 */
quil.util.length_of_longest_key = (function quil$util$length_of_longest_key(m){
var or__4126__auto__ = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,(function (p1__19800_SHARP_){
return p1__19800_SHARP_.length();
}),cljs.core.keys.call(null,m))));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
});
/**
 * Generates a padding string with `s` concatenated with `len` times `pad`.
 * May be called without starting string `s` in which case it defaults to the
 * empty string and also without `pad` in which case it defaults to a single
 * space.
 * 
 * Examples:
 * ```
 * (gen-padding "asdf" 5 "b") ;=> "asdfbbbbb"
 * (gen-padding 3 "b")          ;=> "bbb"
 * (gen-padding 3)                ;=> "   "
 * ```
 * 
 */
quil.util.gen_padding = (function quil$util$gen_padding(var_args){
var G__19802 = arguments.length;
switch (G__19802) {
case 1:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.util.gen_padding.cljs$core$IFn$_invoke$arity$1 = (function (len){
return quil.util.gen_padding.call(null,"",len," ");
}));

(quil.util.gen_padding.cljs$core$IFn$_invoke$arity$2 = (function (len,pad){
return quil.util.gen_padding.call(null,"",len,pad);
}));

(quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3 = (function (s,len,pad){
if((len > (0))){
return quil.util.gen_padding.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad)].join(''),(len - (1)),pad);
} else {
return s;
}
}));

(quil.util.gen_padding.cljs$lang$maxFixedArity = 3);

quil.util.print_definition_list = (function quil$util$print_definition_list(definitions){
var longest_key = quil.util.length_of_longest_key.call(null,definitions);
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__19804){
var vec__19805 = p__19804;
var k = cljs.core.nth.call(null,vec__19805,(0),null);
var v = cljs.core.nth.call(null,vec__19805,(1),null);
var len = k.length();
var diff = (longest_key - len);
var pad = quil.util.gen_padding.call(null,diff);
return cljs.core.println.call(null,k,pad,"- ",v);
}),definitions));
});
quil.util.clj_compilation_QMARK_ = (function quil$util$clj_compilation_QMARK_(){
return false;
});
quil.util.prepare_quil_name = (function quil$util$prepare_quil_name(const_keyword){
return clojure.string.replace.call(null,clojure.string.upper_case.call(null,cljs.core.name.call(null,const_keyword)),/-/,"_");
});
quil.util.prepare_quil_clj_constants = (function quil$util$prepare_quil_clj_constants(constants){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__19808_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__19808_SHARP_,cljs.core.symbol.call(null,["PConstants/",quil.util.prepare_quil_name.call(null,p1__19808_SHARP_)].join(''))],null));
}),constants));
});
quil.util.prepare_quil_cljs_constants = (function quil$util$prepare_quil_cljs_constants(constants){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__19809_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__19809_SHARP_,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","p5.prototype","js/p5.prototype",-1153964427,null),null,(1),null)),(new cljs.core.List(null,quil.util.prepare_quil_name.call(null,p1__19809_SHARP_),null,(1),null)))))],null));
}),constants));
});
quil.util.make_quil_constant_map = (function quil$util$make_quil_constant_map(target,const_map_name,const_map){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,const_map_name,null,(1),null)),(new cljs.core.List(null,((cljs.core._EQ_.call(null,target,new cljs.core.Keyword(null,"clj","clj",-660495428)))?quil.util.prepare_quil_clj_constants.call(null,const_map):quil.util.prepare_quil_cljs_constants.call(null,const_map)),null,(1),null)))));
});
var ret__4785__auto___19815 = (function (){
quil.util.generate_quil_constants = (function quil$util$generate_quil_constants(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19816 = arguments.length;
var i__4737__auto___19817 = (0);
while(true){
if((i__4737__auto___19817 < len__4736__auto___19816)){
args__4742__auto__.push((arguments[i__4737__auto___19817]));

var G__19818 = (i__4737__auto___19817 + (1));
i__4737__auto___19817 = G__19818;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return quil.util.generate_quil_constants.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(quil.util.generate_quil_constants.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,target,opts){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.call(null,(function (p1__19810_SHARP_){
return quil.util.make_quil_constant_map.call(null,target,cljs.core.first.call(null,p1__19810_SHARP_),cljs.core.second.call(null,p1__19810_SHARP_));
}),cljs.core.partition.call(null,(2),opts)))));
}));

(quil.util.generate_quil_constants.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(quil.util.generate_quil_constants.cljs$lang$applyTo = (function (seq19811){
var G__19812 = cljs.core.first.call(null,seq19811);
var seq19811__$1 = cljs.core.next.call(null,seq19811);
var G__19813 = cljs.core.first.call(null,seq19811__$1);
var seq19811__$2 = cljs.core.next.call(null,seq19811__$1);
var G__19814 = cljs.core.first.call(null,seq19811__$2);
var seq19811__$3 = cljs.core.next.call(null,seq19811__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19812,G__19813,G__19814,seq19811__$3);
}));

return null;
})()
;
(quil.util.generate_quil_constants.cljs$lang$macro = true);

/**
 * In clojure it does `unchecked-int` and does nothing in cljs.
 *   Needed to handle colors in hex form in clojure.
 */
quil.util.clj_unchecked_int = (function quil$util$clj_unchecked_int(v){
return v;
});

//# sourceMappingURL=util.js.map
