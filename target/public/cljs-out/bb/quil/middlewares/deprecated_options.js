// Compiled by ClojureScript 1.10.773 {}
goog.provide('quil.middlewares.deprecated_options');
goog.require('cljs.core');
quil.middlewares.deprecated_options.deprecated = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"decor","decor",-1730969431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Try :features [:present] for similar effect"], null),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:keep-on-top] instead."], null),new cljs.core.Keyword(null,"safe-draw-fn","safe-draw-fn",1454900202),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:no-safe-fns] instead."], null)], null);
quil.middlewares.deprecated_options.check_features_vector = (function quil$middlewares$deprecated_options$check_features_vector(features){
var features__$1 = cljs.core.set.call(null,features);
if(cljs.core.truth_(features__$1.call(null,new cljs.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157)))){
cljs.core.println.call(null,"Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.","Use :feature [:no-safe-fns] now.");
} else {
}

return cljs.core.disj.call(null,features__$1,new cljs.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157));
});
/**
 * Checks `options` map for deprecated options, removes them and
 *   prints messages explaining how to fix them.
 */
quil.middlewares.deprecated_options.deprecated_options = (function quil$middlewares$deprecated_options$deprecated_options(options){
var options__$1 = cljs.core.update_in.call(null,options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336)], null),quil.middlewares.deprecated_options.check_features_vector);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function quil$middlewares$deprecated_options$deprecated_options_$_iter__15543(s__15544){
return (new cljs.core.LazySeq(null,(function (){
var s__15544__$1 = s__15544;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__15544__$1);
if(temp__5735__auto__){
var s__15544__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15544__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15544__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15546 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15545 = (0);
while(true){
if((i__15545 < size__4528__auto__)){
var vec__15547 = cljs.core._nth.call(null,c__4527__auto__,i__15545);
var name = cljs.core.nth.call(null,vec__15547,(0),null);
var value = cljs.core.nth.call(null,vec__15547,(1),null);
cljs.core.chunk_append.call(null,b__15546,(function (){var temp__5733__auto__ = quil.middlewares.deprecated_options.deprecated.call(null,name);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__15550 = temp__5733__auto__;
var version = cljs.core.nth.call(null,vec__15550,(0),null);
var message = cljs.core.nth.call(null,vec__15550,(1),null);
cljs.core.println.call(null,name,"option was removed in Quil",version,".",message);

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})());

var G__15559 = (i__15545 + (1));
i__15545 = G__15559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15546),quil$middlewares$deprecated_options$deprecated_options_$_iter__15543.call(null,cljs.core.chunk_rest.call(null,s__15544__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15546),null);
}
} else {
var vec__15553 = cljs.core.first.call(null,s__15544__$2);
var name = cljs.core.nth.call(null,vec__15553,(0),null);
var value = cljs.core.nth.call(null,vec__15553,(1),null);
return cljs.core.cons.call(null,(function (){var temp__5733__auto__ = quil.middlewares.deprecated_options.deprecated.call(null,name);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__15556 = temp__5733__auto__;
var version = cljs.core.nth.call(null,vec__15556,(0),null);
var message = cljs.core.nth.call(null,vec__15556,(1),null);
cljs.core.println.call(null,name,"option was removed in Quil",version,".",message);

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})(),quil$middlewares$deprecated_options$deprecated_options_$_iter__15543.call(null,cljs.core.rest.call(null,s__15544__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,options__$1);
})()));
});

//# sourceMappingURL=deprecated_options.js.map
