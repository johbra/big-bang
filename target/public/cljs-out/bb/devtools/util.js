// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('devtools.util');
goog.require('cljs.core');
goog.require('goog.userAgent');
goog.require('clojure.data');
goog.require('devtools.version');
goog.require('devtools.context');
goog.require('cljs.pprint');
goog.require('devtools.prefs');
devtools.util.lib_info_style = "color:black;font-weight:bold;";
devtools.util.reset_style = "color:black";
devtools.util.advanced_build_explanation_url = "https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-custom-formatters-do-not-work-for-advanced-builds";
devtools.util._STAR_custom_formatters_active_STAR_ = false;
devtools.util._STAR_console_open_STAR_ = false;
devtools.util._STAR_custom_formatters_warning_reported_STAR_ = false;
devtools.util.pprint_str = (function devtools$util$pprint_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22912 = arguments.length;
var i__5727__auto___22913 = (0);
while(true){
if((i__5727__auto___22913 < len__5726__auto___22912)){
args__5732__auto__.push((arguments[i__5727__auto___22913]));

var G__22914 = (i__5727__auto___22913 + (1));
i__5727__auto___22913 = G__22914;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22906_22915 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22907_22916 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22908_22917 = true;
var _STAR_print_fn_STAR__temp_val__22909_22918 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22908_22917);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22909_22918);

try{var _STAR_print_level_STAR__orig_val__22910_22919 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__22911_22920 = (300);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__22911_22920);

try{cljs.core.apply.call(null,cljs.pprint.pprint,args);
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__22910_22919);
}}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22907_22916);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22906_22915);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
}));

(devtools.util.pprint_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.util.pprint_str.cljs$lang$applyTo = (function (seq22905){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22905));
}));

devtools.util.make_version_info = (function devtools$util$make_version_info(){
return "1.0.2";
});
devtools.util.make_lib_info = (function devtools$util$make_lib_info(){
return ["CLJS DevTools ",devtools.util.make_version_info.call(null)].join('');
});
devtools.util.get_lib_info = (function devtools$util$get_lib_info(){
return devtools.util.make_lib_info.call(null);
});
devtools.util.get_node_info = (function devtools$util$get_node_info(root){
try{var temp__5808__auto__ = (root["process"]);
if((temp__5808__auto__ == null)){
return null;
} else {
var process__$2 = temp__5808__auto__;
var version = (process__$2["version"]);
var platform = (process__$2["platform"]);
if(cljs.core.truth_((function (){var and__5000__auto__ = version;
if(cljs.core.truth_(and__5000__auto__)){
return platform;
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),version,new cljs.core.Keyword(null,"platform","platform",-1086422114),platform], null);
} else {
return null;
}
}
}catch (e22921){var _ = e22921;
return null;
}});
devtools.util.get_node_description = (function devtools$util$get_node_description(node_info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"platform","platform",-1086422114).cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "?";
}
})()),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "?";
}
})())].join('');
});
devtools.util.in_node_context_QMARK_ = (function devtools$util$in_node_context_QMARK_(){
return (!((devtools.util.get_node_info.call(null,devtools.context.get_root.call(null)) == null)));
});
devtools.util.get_js_context_description = (function devtools$util$get_js_context_description(){
var temp__5802__auto__ = devtools.util.get_node_info.call(null,devtools.context.get_root.call(null));
if(cljs.core.truth_(temp__5802__auto__)){
var node_info = temp__5802__auto__;
return ["node/",devtools.util.get_node_description.call(null,node_info)].join('');
} else {
var user_agent = goog.userAgent.getUserAgentString();
if(cljs.core.empty_QMARK_.call(null,user_agent)){
return "<unknown context>";
} else {
return user_agent;
}
}
});
devtools.util.unknown_feature_msg = (function devtools$util$unknown_feature_msg(feature,known_features,lib_info){
return ["No such feature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)," is currently available in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_info),". ","The list of supported features is ",cljs.core.pr_str.call(null,known_features),"."].join('');
});
devtools.util.feature_not_available_msg = (function devtools$util$feature_not_available_msg(feature){
return ["Feature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)," cannot be installed. ","Unsupported Javascript context: ",devtools.util.get_js_context_description.call(null),"."].join('');
});
devtools.util.custom_formatters_not_active_msg = (function devtools$util$custom_formatters_not_active_msg(){
return ["CLJS DevTools: some custom formatters were not rendered.\n","https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-some-custom-formatters-were-not-rendered"].join('');
});
devtools.util.formatter_key = "devtoolsFormatters";
devtools.util.get_formatters_safe = (function devtools$util$get_formatters_safe(){
var formatters = (devtools.context.get_root.call(null)[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_.call(null,formatters)){
return formatters;
} else {
return [];
}
});
devtools.util.set_formatters_safe_BANG_ = (function devtools$util$set_formatters_safe_BANG_(new_formatters){
if((((new_formatters == null)) || (cljs.core.array_QMARK_.call(null,new_formatters)))){
} else {
throw (new Error("Assert failed: (or (nil? new-formatters) (array? new-formatters))"));
}

return (devtools.context.get_root.call(null)[devtools.util.formatter_key] = ((cljs.core.empty_QMARK_.call(null,new_formatters))?null:new_formatters));
});
devtools.util.print_config_overrides_if_requested_BANG_ = (function devtools$util$print_config_overrides_if_requested_BANG_(msg){
if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"print-config-overrides","print-config-overrides",-274716965)))){
var diff = cljs.core.second.call(null,clojure.data.diff.call(null,cljs.core.deref.call(null,devtools.prefs.default_config),devtools.prefs.get_prefs.call(null)));
if((!(cljs.core.empty_QMARK_.call(null,diff)))){
return devtools.context.get_console.call(null).info(msg,devtools.util.pprint_str.call(null,diff));
} else {
return null;
}
} else {
return null;
}
});

/**
* @constructor
*/
devtools.util.CustomFormattersDetector = (function (){
});

(devtools.util.CustomFormattersDetector.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(devtools.util.CustomFormattersDetector.cljs$lang$type = true);

(devtools.util.CustomFormattersDetector.cljs$lang$ctorStr = "devtools.util/CustomFormattersDetector");

(devtools.util.CustomFormattersDetector.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"devtools.util/CustomFormattersDetector");
}));

/**
 * Positional factory function for devtools.util/CustomFormattersDetector.
 */
devtools.util.__GT_CustomFormattersDetector = (function devtools$util$__GT_CustomFormattersDetector(){
return (new devtools.util.CustomFormattersDetector());
});

devtools.util.make_detector = (function devtools$util$make_detector(){
var detector = (new devtools.util.CustomFormattersDetector());
(detector["header"] = (function (_object,_config){
(devtools.util._STAR_custom_formatters_active_STAR_ = true);

return null;
}));

(detector["hasBody"] = cljs.core.constantly.call(null,false));

(detector["body"] = cljs.core.constantly.call(null,null));

return detector;
});
devtools.util.install_detector_BANG_ = (function devtools$util$install_detector_BANG_(detector){
var formatters = devtools.util.get_formatters_safe.call(null);
formatters.push(detector);

return devtools.util.set_formatters_safe_BANG_.call(null,formatters);
});
devtools.util.uninstall_detector_BANG_ = (function devtools$util$uninstall_detector_BANG_(detector){
var current_formatters = (devtools.context.get_root.call(null)[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_.call(null,current_formatters)){
var new_formatters = current_formatters.filter((function (p1__22922_SHARP_){
return (!(cljs.core._EQ_.call(null,detector,p1__22922_SHARP_)));
}));
return devtools.util.set_formatters_safe_BANG_.call(null,new_formatters);
} else {
return null;
}
});
devtools.util.check_custom_formatters_active_BANG_ = (function devtools$util$check_custom_formatters_active_BANG_(){
if(cljs.core.truth_((function (){var and__5000__auto__ = devtools.util._STAR_console_open_STAR_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not.call(null,devtools.util._STAR_custom_formatters_active_STAR_);
} else {
return and__5000__auto__;
}
})())){
if(cljs.core.truth_(devtools.util._STAR_custom_formatters_warning_reported_STAR_)){
return null;
} else {
(devtools.util._STAR_custom_formatters_warning_reported_STAR_ = true);

return devtools.context.get_console.call(null).warn(devtools.util.custom_formatters_not_active_msg.call(null));
}
} else {
return null;
}
});
devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_ = (function devtools$util$uninstall_detector_and_check_custom_formatters_active_BANG_(detector){
devtools.util.uninstall_detector_BANG_.call(null,detector);

return devtools.util.check_custom_formatters_active_BANG_.call(null);
});
devtools.util.make_detection_printer = (function devtools$util$make_detection_printer(){
var f = (function (){
return null;
});
var G__22923_22924 = f;
var target__17627__auto___22925 = G__22923_22924;
if(cljs.core.truth_(target__17627__auto___22925)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22923_22924)].join(''),"\n","target__17627__auto__"].join('')));
}

(target__17627__auto___22925["toString"] = (function (){
(devtools.util._STAR_console_open_STAR_ = true);

setTimeout(devtools.util.check_custom_formatters_active_BANG_,(0));

return "";
}));


return f;
});
devtools.util.wrap_with_custom_formatter_detection_BANG_ = (function devtools$util$wrap_with_custom_formatter_detection_BANG_(f){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-detect-custom-formatters","dont-detect-custom-formatters",-29005804)))){
var detector = devtools.util.make_detector.call(null);
devtools.util.install_detector_BANG_.call(null,detector);

f.call(null,"%c%s","color:transparent",devtools.util.make_detection_printer.call(null));

return setTimeout(cljs.core.partial.call(null,devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_,detector),(0));
} else {
return f.call(null);
}
});
devtools.util.feature_for_display = (function devtools$util$feature_for_display(installed_features,feature){
var color = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),installed_features))?"color:#0000ff":"color:#ccc");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)], null)], null);
});
devtools.util.feature_list_display = (function devtools$util$feature_list_display(installed_features,feature_groups){
var labels = cljs.core.map.call(null,cljs.core.partial.call(null,devtools.util.feature_for_display,installed_features),new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups));
var _STAR_ = (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,accum))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,val))].join(''),cljs.core.concat.call(null,cljs.core.second.call(null,accum),cljs.core.second.call(null,val))], null);
});
return cljs.core.reduce.call(null,_STAR_,cljs.core.first.call(null,labels),cljs.core.rest.call(null,labels));
});
devtools.util.display_banner_BANG_ = (function devtools$util$display_banner_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22933 = arguments.length;
var i__5727__auto___22934 = (0);
while(true){
if((i__5727__auto___22934 < len__5726__auto___22933)){
args__5732__auto__.push((arguments[i__5727__auto___22934]));

var G__22935 = (i__5727__auto___22934 + (1));
i__5727__auto___22934 = G__22935;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (installed_features,feature_groups,fmt,params){
var vec__22930 = devtools.util.feature_list_display.call(null,installed_features,feature_groups);
var fmt_str = cljs.core.nth.call(null,vec__22930,(0),null);
var fmt_params = cljs.core.nth.call(null,vec__22930,(1),null);
return devtools.util.wrap_with_custom_formatter_detection_BANG_.call(null,(function() { 
var G__22936__delegate = function (add_fmt,add_args){
var items = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(add_fmt)].join('')], null),params,fmt_params,add_args);
var console__$1 = devtools.context.get_console.call(null);
return console__$1.info.apply(console__$1,cljs.core.into_array.call(null,items));
};
var G__22936 = function (add_fmt,var_args){
var add_args = null;
if (arguments.length > 1) {
var G__22937__i = 0, G__22937__a = new Array(arguments.length -  1);
while (G__22937__i < G__22937__a.length) {G__22937__a[G__22937__i] = arguments[G__22937__i + 1]; ++G__22937__i;}
  add_args = new cljs.core.IndexedSeq(G__22937__a,0,null);
} 
return G__22936__delegate.call(this,add_fmt,add_args);};
G__22936.cljs$lang$maxFixedArity = 1;
G__22936.cljs$lang$applyTo = (function (arglist__22938){
var add_fmt = cljs.core.first(arglist__22938);
var add_args = cljs.core.rest(arglist__22938);
return G__22936__delegate(add_fmt,add_args);
});
G__22936.cljs$core$IFn$_invoke$arity$variadic = G__22936__delegate;
return G__22936;
})()
);
}));

(devtools.util.display_banner_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(devtools.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq22926){
var G__22927 = cljs.core.first.call(null,seq22926);
var seq22926__$1 = cljs.core.next.call(null,seq22926);
var G__22928 = cljs.core.first.call(null,seq22926__$1);
var seq22926__$2 = cljs.core.next.call(null,seq22926__$1);
var G__22929 = cljs.core.first.call(null,seq22926__$2);
var seq22926__$3 = cljs.core.next.call(null,seq22926__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22927,G__22928,G__22929,seq22926__$3);
}));

devtools.util.display_banner_if_needed_BANG_ = (function devtools$util$display_banner_if_needed_BANG_(features_to_install,feature_groups){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-banner","dont-display-banner",-1175550370)))){
var banner = "Installing %c%s%c and enabling features";
return devtools.util.display_banner_BANG_.call(null,features_to_install,feature_groups,banner,devtools.util.lib_info_style,devtools.util.get_lib_info.call(null),devtools.util.reset_style);
} else {
return (devtools.util._STAR_custom_formatters_active_STAR_ = true);
}
});
devtools.util.report_unknown_features_BANG_ = (function devtools$util$report_unknown_features_BANG_(features,known_features){
var lib_info = devtools.util.get_lib_info.call(null);
var seq__22939 = cljs.core.seq.call(null,features);
var chunk__22940 = null;
var count__22941 = (0);
var i__22942 = (0);
while(true){
if((i__22942 < count__22941)){
var feature = cljs.core._nth.call(null,chunk__22940,i__22942);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features))){
devtools.context.get_console.call(null).warn(devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}


var G__22943 = seq__22939;
var G__22944 = chunk__22940;
var G__22945 = count__22941;
var G__22946 = (i__22942 + (1));
seq__22939 = G__22943;
chunk__22940 = G__22944;
count__22941 = G__22945;
i__22942 = G__22946;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22939);
if(temp__5804__auto__){
var seq__22939__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22939__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22939__$1);
var G__22947 = cljs.core.chunk_rest.call(null,seq__22939__$1);
var G__22948 = c__5525__auto__;
var G__22949 = cljs.core.count.call(null,c__5525__auto__);
var G__22950 = (0);
seq__22939 = G__22947;
chunk__22940 = G__22948;
count__22941 = G__22949;
i__22942 = G__22950;
continue;
} else {
var feature = cljs.core.first.call(null,seq__22939__$1);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features))){
devtools.context.get_console.call(null).warn(devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}


var G__22951 = cljs.core.next.call(null,seq__22939__$1);
var G__22952 = null;
var G__22953 = (0);
var G__22954 = (0);
seq__22939 = G__22951;
chunk__22940 = G__22952;
count__22941 = G__22953;
i__22942 = G__22954;
continue;
}
} else {
return null;
}
}
break;
}
});
devtools.util.is_known_feature_QMARK_ = (function devtools$util$is_known_feature_QMARK_(known_features,feature){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features));
});
devtools.util.convert_legacy_feature = (function devtools$util$convert_legacy_feature(feature){
var G__22955 = feature;
var G__22955__$1 = (((G__22955 instanceof cljs.core.Keyword))?G__22955.fqn:null);
switch (G__22955__$1) {
case "custom-formatters":
return new cljs.core.Keyword(null,"formatters","formatters",-1875637118);

break;
case "sanity-hints":
return new cljs.core.Keyword(null,"hints","hints",-991113151);

break;
default:
return feature;

}
});
devtools.util.convert_legacy_features = (function devtools$util$convert_legacy_features(features){
return cljs.core.map.call(null,devtools.util.convert_legacy_feature,features);
});
devtools.util.sanititze_features_BANG_ = (function devtools$util$sanititze_features_BANG_(features,feature_groups){
var known_features = new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups);
var features__$1 = devtools.util.convert_legacy_features.call(null,features);
devtools.util.report_unknown_features_BANG_.call(null,features__$1,known_features);

return cljs.core.filter.call(null,cljs.core.partial.call(null,devtools.util.is_known_feature_QMARK_,known_features),features__$1);
});
devtools.util.resolve_features_BANG_ = (function devtools$util$resolve_features_BANG_(features_desc,feature_groups){
var features = (cljs.core.truth_((function (){var and__5000__auto__ = (features_desc instanceof cljs.core.Keyword);
if(and__5000__auto__){
return features_desc.call(null,feature_groups);
} else {
return and__5000__auto__;
}
})())?features_desc.call(null,feature_groups):(((features_desc == null))?new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(feature_groups):((cljs.core.seqable_QMARK_.call(null,features_desc))?features_desc:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features_desc], null)
)));
return devtools.util.sanititze_features_BANG_.call(null,features,feature_groups);
});
devtools.util.under_advanced_build_QMARK_ = (function devtools$util$under_advanced_build_QMARK_(){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"disable-advanced-mode-check","disable-advanced-mode-check",-968346539)))){
return ((function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o22957 = temp__5802__auto__;
return (o22957["version"]);
} else {
return null;
}
})() == null);
} else {
return null;
}
});
devtools.util.display_advanced_build_warning_if_needed_BANG_ = (function devtools$util$display_advanced_build_warning_if_needed_BANG_(){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-advanced-build-warning","dont-display-advanced-build-warning",-91321563)))){
var banner = ["%cNOT%c installing %c%s%c under advanced build. See ",devtools.util.advanced_build_explanation_url,"."].join('');
return devtools.context.get_console.call(null).warn(banner,"font-weight:bold",devtools.util.reset_style,devtools.util.lib_info_style,devtools.util.get_lib_info.call(null),devtools.util.reset_style);
} else {
return null;
}
});
devtools.util.install_feature_BANG_ = (function devtools$util$install_feature_BANG_(feature,features_to_install,available_fn,install_fn){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),features_to_install))){
if(cljs.core.truth_((function (){var or__5002__auto__ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"bypass-availability-checks","bypass-availability-checks",1934691680));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return available_fn.call(null,feature);
}
})())){
return install_fn.call(null);
} else {
return devtools.context.get_console.call(null).warn(devtools.util.feature_not_available_msg.call(null,feature));
}
} else {
return null;
}
});

//# sourceMappingURL=util.js.map
