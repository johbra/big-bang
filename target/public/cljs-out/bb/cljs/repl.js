// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27779){
var map__27780 = p__27779;
var map__27780__$1 = (((((!((map__27780 == null))))?(((((map__27780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27780):map__27780);
var m = map__27780__$1;
var n = cljs.core.get.call(null,map__27780__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27780__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__27782_27814 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27783_27815 = null;
var count__27784_27816 = (0);
var i__27785_27817 = (0);
while(true){
if((i__27785_27817 < count__27784_27816)){
var f_27818 = cljs.core._nth.call(null,chunk__27783_27815,i__27785_27817);
cljs.core.println.call(null,"  ",f_27818);


var G__27819 = seq__27782_27814;
var G__27820 = chunk__27783_27815;
var G__27821 = count__27784_27816;
var G__27822 = (i__27785_27817 + (1));
seq__27782_27814 = G__27819;
chunk__27783_27815 = G__27820;
count__27784_27816 = G__27821;
i__27785_27817 = G__27822;
continue;
} else {
var temp__5735__auto___27823 = cljs.core.seq.call(null,seq__27782_27814);
if(temp__5735__auto___27823){
var seq__27782_27824__$1 = temp__5735__auto___27823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27782_27824__$1)){
var c__4556__auto___27825 = cljs.core.chunk_first.call(null,seq__27782_27824__$1);
var G__27826 = cljs.core.chunk_rest.call(null,seq__27782_27824__$1);
var G__27827 = c__4556__auto___27825;
var G__27828 = cljs.core.count.call(null,c__4556__auto___27825);
var G__27829 = (0);
seq__27782_27814 = G__27826;
chunk__27783_27815 = G__27827;
count__27784_27816 = G__27828;
i__27785_27817 = G__27829;
continue;
} else {
var f_27830 = cljs.core.first.call(null,seq__27782_27824__$1);
cljs.core.println.call(null,"  ",f_27830);


var G__27831 = cljs.core.next.call(null,seq__27782_27824__$1);
var G__27832 = null;
var G__27833 = (0);
var G__27834 = (0);
seq__27782_27814 = G__27831;
chunk__27783_27815 = G__27832;
count__27784_27816 = G__27833;
i__27785_27817 = G__27834;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27835 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27835);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27835)))?cljs.core.second.call(null,arglists_27835):arglists_27835));
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
var seq__27786_27836 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27787_27837 = null;
var count__27788_27838 = (0);
var i__27789_27839 = (0);
while(true){
if((i__27789_27839 < count__27788_27838)){
var vec__27800_27840 = cljs.core._nth.call(null,chunk__27787_27837,i__27789_27839);
var name_27841 = cljs.core.nth.call(null,vec__27800_27840,(0),null);
var map__27803_27842 = cljs.core.nth.call(null,vec__27800_27840,(1),null);
var map__27803_27843__$1 = (((((!((map__27803_27842 == null))))?(((((map__27803_27842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27803_27842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27803_27842):map__27803_27842);
var doc_27844 = cljs.core.get.call(null,map__27803_27843__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27845 = cljs.core.get.call(null,map__27803_27843__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27841);

cljs.core.println.call(null," ",arglists_27845);

if(cljs.core.truth_(doc_27844)){
cljs.core.println.call(null," ",doc_27844);
} else {
}


var G__27846 = seq__27786_27836;
var G__27847 = chunk__27787_27837;
var G__27848 = count__27788_27838;
var G__27849 = (i__27789_27839 + (1));
seq__27786_27836 = G__27846;
chunk__27787_27837 = G__27847;
count__27788_27838 = G__27848;
i__27789_27839 = G__27849;
continue;
} else {
var temp__5735__auto___27850 = cljs.core.seq.call(null,seq__27786_27836);
if(temp__5735__auto___27850){
var seq__27786_27851__$1 = temp__5735__auto___27850;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27786_27851__$1)){
var c__4556__auto___27852 = cljs.core.chunk_first.call(null,seq__27786_27851__$1);
var G__27853 = cljs.core.chunk_rest.call(null,seq__27786_27851__$1);
var G__27854 = c__4556__auto___27852;
var G__27855 = cljs.core.count.call(null,c__4556__auto___27852);
var G__27856 = (0);
seq__27786_27836 = G__27853;
chunk__27787_27837 = G__27854;
count__27788_27838 = G__27855;
i__27789_27839 = G__27856;
continue;
} else {
var vec__27805_27857 = cljs.core.first.call(null,seq__27786_27851__$1);
var name_27858 = cljs.core.nth.call(null,vec__27805_27857,(0),null);
var map__27808_27859 = cljs.core.nth.call(null,vec__27805_27857,(1),null);
var map__27808_27860__$1 = (((((!((map__27808_27859 == null))))?(((((map__27808_27859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27808_27859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27808_27859):map__27808_27859);
var doc_27861 = cljs.core.get.call(null,map__27808_27860__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27862 = cljs.core.get.call(null,map__27808_27860__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27858);

cljs.core.println.call(null," ",arglists_27862);

if(cljs.core.truth_(doc_27861)){
cljs.core.println.call(null," ",doc_27861);
} else {
}


var G__27863 = cljs.core.next.call(null,seq__27786_27851__$1);
var G__27864 = null;
var G__27865 = (0);
var G__27866 = (0);
seq__27786_27836 = G__27863;
chunk__27787_27837 = G__27864;
count__27788_27838 = G__27865;
i__27789_27839 = G__27866;
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

var seq__27810 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27811 = null;
var count__27812 = (0);
var i__27813 = (0);
while(true){
if((i__27813 < count__27812)){
var role = cljs.core._nth.call(null,chunk__27811,i__27813);
var temp__5735__auto___27867__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27867__$1)){
var spec_27868 = temp__5735__auto___27867__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27868));
} else {
}


var G__27869 = seq__27810;
var G__27870 = chunk__27811;
var G__27871 = count__27812;
var G__27872 = (i__27813 + (1));
seq__27810 = G__27869;
chunk__27811 = G__27870;
count__27812 = G__27871;
i__27813 = G__27872;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__27810);
if(temp__5735__auto____$1){
var seq__27810__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27810__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__27810__$1);
var G__27873 = cljs.core.chunk_rest.call(null,seq__27810__$1);
var G__27874 = c__4556__auto__;
var G__27875 = cljs.core.count.call(null,c__4556__auto__);
var G__27876 = (0);
seq__27810 = G__27873;
chunk__27811 = G__27874;
count__27812 = G__27875;
i__27813 = G__27876;
continue;
} else {
var role = cljs.core.first.call(null,seq__27810__$1);
var temp__5735__auto___27877__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27877__$2)){
var spec_27878 = temp__5735__auto___27877__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27878));
} else {
}


var G__27879 = cljs.core.next.call(null,seq__27810__$1);
var G__27880 = null;
var G__27881 = (0);
var G__27882 = (0);
seq__27810 = G__27879;
chunk__27811 = G__27880;
count__27812 = G__27881;
i__27813 = G__27882;
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
var G__27883 = cljs.core.conj.call(null,via,t);
var G__27884 = cljs.core.ex_cause.call(null,t);
via = G__27883;
t = G__27884;
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
var map__27887 = datafied_throwable;
var map__27887__$1 = (((((!((map__27887 == null))))?(((((map__27887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27887):map__27887);
var via = cljs.core.get.call(null,map__27887__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__27887__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__27887__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27888 = cljs.core.last.call(null,via);
var map__27888__$1 = (((((!((map__27888 == null))))?(((((map__27888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27888):map__27888);
var type = cljs.core.get.call(null,map__27888__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__27888__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__27888__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27889 = data;
var map__27889__$1 = (((((!((map__27889 == null))))?(((((map__27889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27889):map__27889);
var problems = cljs.core.get.call(null,map__27889__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__27889__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__27889__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27890 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__27890__$1 = (((((!((map__27890 == null))))?(((((map__27890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27890):map__27890);
var top_data = map__27890__$1;
var source = cljs.core.get.call(null,map__27890__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__27895 = phase;
var G__27895__$1 = (((G__27895 instanceof cljs.core.Keyword))?G__27895.fqn:null);
switch (G__27895__$1) {
case "read-source":
var map__27896 = data;
var map__27896__$1 = (((((!((map__27896 == null))))?(((((map__27896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27896):map__27896);
var line = cljs.core.get.call(null,map__27896__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27896__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27898 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__27898__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27898,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27898);
var G__27898__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27898__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27898__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27898__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27898__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27899 = top_data;
var G__27899__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27899,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27899);
var G__27899__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27899__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27899__$1);
var G__27899__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27899__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27899__$2);
var G__27899__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27899__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27899__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27899__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27899__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27900 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27900,(0),null);
var method = cljs.core.nth.call(null,vec__27900,(1),null);
var file = cljs.core.nth.call(null,vec__27900,(2),null);
var line = cljs.core.nth.call(null,vec__27900,(3),null);
var G__27903 = top_data;
var G__27903__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__27903,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27903);
var G__27903__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__27903__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27903__$1);
var G__27903__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__27903__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27903__$2);
var G__27903__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27903__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27903__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27903__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27903__$4;
}

break;
case "execution":
var vec__27904 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27904,(0),null);
var method = cljs.core.nth.call(null,vec__27904,(1),null);
var file = cljs.core.nth.call(null,vec__27904,(2),null);
var line = cljs.core.nth.call(null,vec__27904,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__27886_SHARP_){
var or__4126__auto__ = (p1__27886_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__27886_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__27907 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27907__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__27907,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27907);
var G__27907__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27907__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27907__$1);
var G__27907__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__27907__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27907__$2);
var G__27907__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__27907__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27907__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27907__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27907__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27895__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27911){
var map__27912 = p__27911;
var map__27912__$1 = (((((!((map__27912 == null))))?(((((map__27912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27912):map__27912);
var triage_data = map__27912__$1;
var phase = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__27914 = phase;
var G__27914__$1 = (((G__27914 instanceof cljs.core.Keyword))?G__27914.fqn:null);
switch (G__27914__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27915_27924 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27916_27925 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27917_27926 = true;
var _STAR_print_fn_STAR__temp_val__27918_27927 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27917_27926);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27918_27927);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__27909_SHARP_){
return cljs.core.dissoc.call(null,p1__27909_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27916_27925);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27915_27924);
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
var _STAR_print_newline_STAR__orig_val__27919_27928 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27920_27929 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27921_27930 = true;
var _STAR_print_fn_STAR__temp_val__27922_27931 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27921_27930);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27922_27931);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__27910_SHARP_){
return cljs.core.dissoc.call(null,p1__27910_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27920_27929);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27919_27928);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27914__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
