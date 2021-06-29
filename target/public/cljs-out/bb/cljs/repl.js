// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16815){
var map__16816 = p__16815;
var map__16816__$1 = (((((!((map__16816 == null))))?(((((map__16816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16816):map__16816);
var m = map__16816__$1;
var n = cljs.core.get.call(null,map__16816__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__16816__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16818_16850 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16819_16851 = null;
var count__16820_16852 = (0);
var i__16821_16853 = (0);
while(true){
if((i__16821_16853 < count__16820_16852)){
var f_16854 = cljs.core._nth.call(null,chunk__16819_16851,i__16821_16853);
cljs.core.println.call(null,"  ",f_16854);


var G__16855 = seq__16818_16850;
var G__16856 = chunk__16819_16851;
var G__16857 = count__16820_16852;
var G__16858 = (i__16821_16853 + (1));
seq__16818_16850 = G__16855;
chunk__16819_16851 = G__16856;
count__16820_16852 = G__16857;
i__16821_16853 = G__16858;
continue;
} else {
var temp__5735__auto___16859 = cljs.core.seq.call(null,seq__16818_16850);
if(temp__5735__auto___16859){
var seq__16818_16860__$1 = temp__5735__auto___16859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16818_16860__$1)){
var c__4556__auto___16861 = cljs.core.chunk_first.call(null,seq__16818_16860__$1);
var G__16862 = cljs.core.chunk_rest.call(null,seq__16818_16860__$1);
var G__16863 = c__4556__auto___16861;
var G__16864 = cljs.core.count.call(null,c__4556__auto___16861);
var G__16865 = (0);
seq__16818_16850 = G__16862;
chunk__16819_16851 = G__16863;
count__16820_16852 = G__16864;
i__16821_16853 = G__16865;
continue;
} else {
var f_16866 = cljs.core.first.call(null,seq__16818_16860__$1);
cljs.core.println.call(null,"  ",f_16866);


var G__16867 = cljs.core.next.call(null,seq__16818_16860__$1);
var G__16868 = null;
var G__16869 = (0);
var G__16870 = (0);
seq__16818_16850 = G__16867;
chunk__16819_16851 = G__16868;
count__16820_16852 = G__16869;
i__16821_16853 = G__16870;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16871 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_16871);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_16871)))?cljs.core.second.call(null,arglists_16871):arglists_16871));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16822_16872 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16823_16873 = null;
var count__16824_16874 = (0);
var i__16825_16875 = (0);
while(true){
if((i__16825_16875 < count__16824_16874)){
var vec__16836_16876 = cljs.core._nth.call(null,chunk__16823_16873,i__16825_16875);
var name_16877 = cljs.core.nth.call(null,vec__16836_16876,(0),null);
var map__16839_16878 = cljs.core.nth.call(null,vec__16836_16876,(1),null);
var map__16839_16879__$1 = (((((!((map__16839_16878 == null))))?(((((map__16839_16878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16839_16878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16839_16878):map__16839_16878);
var doc_16880 = cljs.core.get.call(null,map__16839_16879__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16881 = cljs.core.get.call(null,map__16839_16879__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16877);

cljs.core.println.call(null," ",arglists_16881);

if(cljs.core.truth_(doc_16880)){
cljs.core.println.call(null," ",doc_16880);
} else {
}


var G__16882 = seq__16822_16872;
var G__16883 = chunk__16823_16873;
var G__16884 = count__16824_16874;
var G__16885 = (i__16825_16875 + (1));
seq__16822_16872 = G__16882;
chunk__16823_16873 = G__16883;
count__16824_16874 = G__16884;
i__16825_16875 = G__16885;
continue;
} else {
var temp__5735__auto___16886 = cljs.core.seq.call(null,seq__16822_16872);
if(temp__5735__auto___16886){
var seq__16822_16887__$1 = temp__5735__auto___16886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16822_16887__$1)){
var c__4556__auto___16888 = cljs.core.chunk_first.call(null,seq__16822_16887__$1);
var G__16889 = cljs.core.chunk_rest.call(null,seq__16822_16887__$1);
var G__16890 = c__4556__auto___16888;
var G__16891 = cljs.core.count.call(null,c__4556__auto___16888);
var G__16892 = (0);
seq__16822_16872 = G__16889;
chunk__16823_16873 = G__16890;
count__16824_16874 = G__16891;
i__16825_16875 = G__16892;
continue;
} else {
var vec__16841_16893 = cljs.core.first.call(null,seq__16822_16887__$1);
var name_16894 = cljs.core.nth.call(null,vec__16841_16893,(0),null);
var map__16844_16895 = cljs.core.nth.call(null,vec__16841_16893,(1),null);
var map__16844_16896__$1 = (((((!((map__16844_16895 == null))))?(((((map__16844_16895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16844_16895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16844_16895):map__16844_16895);
var doc_16897 = cljs.core.get.call(null,map__16844_16896__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16898 = cljs.core.get.call(null,map__16844_16896__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16894);

cljs.core.println.call(null," ",arglists_16898);

if(cljs.core.truth_(doc_16897)){
cljs.core.println.call(null," ",doc_16897);
} else {
}


var G__16899 = cljs.core.next.call(null,seq__16822_16887__$1);
var G__16900 = null;
var G__16901 = (0);
var G__16902 = (0);
seq__16822_16872 = G__16899;
chunk__16823_16873 = G__16900;
count__16824_16874 = G__16901;
i__16825_16875 = G__16902;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__16846 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16847 = null;
var count__16848 = (0);
var i__16849 = (0);
while(true){
if((i__16849 < count__16848)){
var role = cljs.core._nth.call(null,chunk__16847,i__16849);
var temp__5735__auto___16903__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___16903__$1)){
var spec_16904 = temp__5735__auto___16903__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16904));
} else {
}


var G__16905 = seq__16846;
var G__16906 = chunk__16847;
var G__16907 = count__16848;
var G__16908 = (i__16849 + (1));
seq__16846 = G__16905;
chunk__16847 = G__16906;
count__16848 = G__16907;
i__16849 = G__16908;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__16846);
if(temp__5735__auto____$1){
var seq__16846__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16846__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16846__$1);
var G__16909 = cljs.core.chunk_rest.call(null,seq__16846__$1);
var G__16910 = c__4556__auto__;
var G__16911 = cljs.core.count.call(null,c__4556__auto__);
var G__16912 = (0);
seq__16846 = G__16909;
chunk__16847 = G__16910;
count__16848 = G__16911;
i__16849 = G__16912;
continue;
} else {
var role = cljs.core.first.call(null,seq__16846__$1);
var temp__5735__auto___16913__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___16913__$2)){
var spec_16914 = temp__5735__auto___16913__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16914));
} else {
}


var G__16915 = cljs.core.next.call(null,seq__16846__$1);
var G__16916 = null;
var G__16917 = (0);
var G__16918 = (0);
seq__16846 = G__16915;
chunk__16847 = G__16916;
count__16848 = G__16917;
i__16849 = G__16918;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__16919 = cljs.core.conj.call(null,via,t);
var G__16920 = cljs.core.ex_cause.call(null,t);
via = G__16919;
t = G__16920;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__16923 = datafied_throwable;
var map__16923__$1 = (((((!((map__16923 == null))))?(((((map__16923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16923):map__16923);
var via = cljs.core.get.call(null,map__16923__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__16923__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__16923__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__16924 = cljs.core.last.call(null,via);
var map__16924__$1 = (((((!((map__16924 == null))))?(((((map__16924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16924):map__16924);
var type = cljs.core.get.call(null,map__16924__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__16924__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__16924__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__16925 = data;
var map__16925__$1 = (((((!((map__16925 == null))))?(((((map__16925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16925):map__16925);
var problems = cljs.core.get.call(null,map__16925__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__16925__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__16925__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__16926 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__16926__$1 = (((((!((map__16926 == null))))?(((((map__16926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16926):map__16926);
var top_data = map__16926__$1;
var source = cljs.core.get.call(null,map__16926__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__16931 = phase;
var G__16931__$1 = (((G__16931 instanceof cljs.core.Keyword))?G__16931.fqn:null);
switch (G__16931__$1) {
case "read-source":
var map__16932 = data;
var map__16932__$1 = (((((!((map__16932 == null))))?(((((map__16932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16932):map__16932);
var line = cljs.core.get.call(null,map__16932__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__16932__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__16934 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__16934__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__16934,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16934);
var G__16934__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__16934__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16934__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__16934__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16934__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__16935 = top_data;
var G__16935__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__16935,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16935);
var G__16935__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__16935__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16935__$1);
var G__16935__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__16935__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16935__$2);
var G__16935__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__16935__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16935__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__16935__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16935__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__16936 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__16936,(0),null);
var method = cljs.core.nth.call(null,vec__16936,(1),null);
var file = cljs.core.nth.call(null,vec__16936,(2),null);
var line = cljs.core.nth.call(null,vec__16936,(3),null);
var G__16939 = top_data;
var G__16939__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__16939,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__16939);
var G__16939__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__16939__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__16939__$1);
var G__16939__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__16939__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__16939__$2);
var G__16939__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__16939__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16939__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__16939__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16939__$4;
}

break;
case "execution":
var vec__16940 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__16940,(0),null);
var method = cljs.core.nth.call(null,vec__16940,(1),null);
var file = cljs.core.nth.call(null,vec__16940,(2),null);
var line = cljs.core.nth.call(null,vec__16940,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__16922_SHARP_){
var or__4126__auto__ = (p1__16922_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__16922_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__16943 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__16943__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__16943,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__16943);
var G__16943__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__16943__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16943__$1);
var G__16943__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__16943__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__16943__$2);
var G__16943__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__16943__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__16943__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__16943__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16943__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16931__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__16947){
var map__16948 = p__16947;
var map__16948__$1 = (((((!((map__16948 == null))))?(((((map__16948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16948):map__16948);
var triage_data = map__16948__$1;
var phase = cljs.core.get.call(null,map__16948__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__16948__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__16948__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__16948__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__16948__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__16948__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__16948__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__16948__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__16950 = phase;
var G__16950__$1 = (((G__16950 instanceof cljs.core.Keyword))?G__16950.fqn:null);
switch (G__16950__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16951_16960 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16952_16961 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16953_16962 = true;
var _STAR_print_fn_STAR__temp_val__16954_16963 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16953_16962);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16954_16963);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__16945_SHARP_){
return cljs.core.dissoc.call(null,p1__16945_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16952_16961);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16951_16960);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16955_16964 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16956_16965 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16957_16966 = true;
var _STAR_print_fn_STAR__temp_val__16958_16967 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16957_16966);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16958_16967);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__16946_SHARP_){
return cljs.core.dissoc.call(null,p1__16946_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16956_16965);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16955_16964);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16950__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
