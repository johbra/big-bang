// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
goog.require('goog.object');
goog.scope(function(){
quil.sketch.goog$module$goog$object = goog.module.get('goog.object');
});
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(p5.prototype["JAVA2D"]),cljs.core.cst$kw$p2d,(p5.prototype["P2D"]),cljs.core.cst$kw$p3d,(p5.prototype["P3D"]),cljs.core.cst$kw$opengl,(p5.prototype["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p3d,mode)){
return (p5.prototype["WEBGL"]);
} else {
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
}
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var temp__5804__auto__ = applet.quil_canvas;
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
var inner_canvas = el.querySelector("canvas");
applet.resizeCanvas(width,height);

inner_canvas.setAttribute("width",width);

inner_canvas.setAttribute("height",height);

(inner_canvas.style["width"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''));

(inner_canvas.style["height"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join(''));

(applet.width = window.parseInt(goog.style.getComputedStyle(inner_canvas,"width")));

return (applet.height = window.parseInt(goog.style.getComputedStyle(inner_canvas,"height")));
} else {
return null;
}
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__1321 = arguments.length;
switch (G__1321) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)));
}));

(quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)),quil.sketch.resolve_renderer(mode));
}));

(quil.sketch.size.cljs$lang$maxFixedArity = 3);

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__1323 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouseWheel,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__1324 = null;
var count__1325 = (0);
var i__1326 = (0);
while(true){
if((i__1326 < count__1325)){
var vec__1337 = chunk__1324.cljs$core$IIndexed$_nth$arity$2(null,i__1326);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1337,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1337,(1),null);
var temp__5804__auto___1347 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5804__auto___1347)){
var handler_1348 = temp__5804__auto___1347;
(prc[cljs.core.name(processing_name)] = ((function (seq__1323,chunk__1324,count__1325,i__1326,handler_1348,temp__5804__auto___1347,vec__1337,processing_name,quil_name){
return (function() { 
var G__1349__delegate = function (args){
var _STAR_applet_STAR__orig_val__1340 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__1341 = prc;
(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__1341);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_1348,args);
}finally {(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__1340);
}};
var G__1349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1350__i = 0, G__1350__a = new Array(arguments.length -  0);
while (G__1350__i < G__1350__a.length) {G__1350__a[G__1350__i] = arguments[G__1350__i + 0]; ++G__1350__i;}
  args = new cljs.core.IndexedSeq(G__1350__a,0,null);
} 
return G__1349__delegate.call(this,args);};
G__1349.cljs$lang$maxFixedArity = 0;
G__1349.cljs$lang$applyTo = (function (arglist__1351){
var args = cljs.core.seq(arglist__1351);
return G__1349__delegate(args);
});
G__1349.cljs$core$IFn$_invoke$arity$variadic = G__1349__delegate;
return G__1349;
})()
;})(seq__1323,chunk__1324,count__1325,i__1326,handler_1348,temp__5804__auto___1347,vec__1337,processing_name,quil_name))
);
} else {
}


var G__1352 = seq__1323;
var G__1353 = chunk__1324;
var G__1354 = count__1325;
var G__1355 = (i__1326 + (1));
seq__1323 = G__1352;
chunk__1324 = G__1353;
count__1325 = G__1354;
i__1326 = G__1355;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__1323);
if(temp__5804__auto__){
var seq__1323__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__1323__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__1323__$1);
var G__1356 = cljs.core.chunk_rest(seq__1323__$1);
var G__1357 = c__5525__auto__;
var G__1358 = cljs.core.count(c__5525__auto__);
var G__1359 = (0);
seq__1323 = G__1356;
chunk__1324 = G__1357;
count__1325 = G__1358;
i__1326 = G__1359;
continue;
} else {
var vec__1342 = cljs.core.first(seq__1323__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1342,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1342,(1),null);
var temp__5804__auto___1360__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5804__auto___1360__$1)){
var handler_1361 = temp__5804__auto___1360__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__1323,chunk__1324,count__1325,i__1326,handler_1361,temp__5804__auto___1360__$1,vec__1342,processing_name,quil_name,seq__1323__$1,temp__5804__auto__){
return (function() { 
var G__1362__delegate = function (args){
var _STAR_applet_STAR__orig_val__1345 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__1346 = prc;
(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__1346);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_1361,args);
}finally {(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__1345);
}};
var G__1362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1363__i = 0, G__1363__a = new Array(arguments.length -  0);
while (G__1363__i < G__1363__a.length) {G__1363__a[G__1363__i] = arguments[G__1363__i + 0]; ++G__1363__i;}
  args = new cljs.core.IndexedSeq(G__1363__a,0,null);
} 
return G__1362__delegate.call(this,args);};
G__1362.cljs$lang$maxFixedArity = 0;
G__1362.cljs$lang$applyTo = (function (arglist__1364){
var args = cljs.core.seq(arglist__1364);
return G__1362__delegate(args);
});
G__1362.cljs$core$IFn$_invoke$arity$variadic = G__1362__delegate;
return G__1362;
})()
;})(seq__1323,chunk__1324,count__1325,i__1326,handler_1361,temp__5804__auto___1360__$1,vec__1342,processing_name,quil_name,seq__1323__$1,temp__5804__auto__))
);
} else {
}


var G__1365 = cljs.core.next(seq__1323__$1);
var G__1366 = null;
var G__1367 = (0);
var G__1368 = (0);
seq__1323 = G__1365;
chunk__1324 = G__1366;
count__1325 = G__1367;
i__1326 = G__1368;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.in_fullscreen_QMARK_ = (function quil$sketch$in_fullscreen_QMARK_(){
var or__5002__auto__ = document.fullscreenElement;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return document.mozFullScreenElement;
}
});
/**
 * Adds fullscreen support for the provided `p5` object.
 *   Fullscreen is enabled when the user presses `F11`. We turn
 *   the sketch `<canvas>` element to fullscreen storing the old size
 *   in an `atom`. When the user cancels fullscreen (`F11` or `Esc`)
 *   we resize the sketch back to the old size.
 */
quil.sketch.add_fullscreen_support = (function quil$sketch$add_fullscreen_support(applet){
var old_size = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var adjust_canvas_size = (function (){
if(cljs.core.truth_(quil.sketch.in_fullscreen_QMARK_())){
cljs.core.reset_BANG_(old_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [applet.width,applet.height], null));

return quil.sketch.set_size(applet,window.screen.width,window.screen.height);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(quil.sketch.set_size,applet,cljs.core.deref(old_size));
}
});
goog.events.listen(window,goog.events.EventType.KEYDOWN,(function (event){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"F11")) && (cljs.core.not(quil.sketch.in_fullscreen_QMARK_())))){
event.preventDefault();

var canvas = applet.quil_canvas;
if(cljs.core.truth_(canvas.requestFullscreen)){
return canvas.requestFullscreen();
} else {
if(cljs.core.truth_(canvas.mozRequestFullScreen)){
return canvas.mozRequestFullScreen();
} else {
return console.warn("Fullscreen mode is not supported in current browser.");

}
}
} else {
return null;
}
}));

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

return goog.events.listen(document,"fullscreenerror",(function (p1__1369_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__1369_SHARP_);
}));
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__1372 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__1371 = (function (p1__1370_SHARP_){
return (p1__1370_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__1370_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__1370_SHARP_.call(null,options));
});
return fexpr__1371(G__1372);
})()], 0));
var sketch_size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__1373_1376 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__1373_1376.cljs$core$IFn$_invoke$arity$0 ? fexpr__1373_1376.cljs$core$IFn$_invoke$arity$0() : fexpr__1373_1376.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__1374 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__1374.cljs$core$IFn$_invoke$arity$0 ? fexpr__1374.cljs$core$IFn$_invoke$arity$0() : fexpr__1374.call(null));
} else {
return null;
}
});
var mouse_wheel = (function (){var temp__5804__auto__ = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto__)){
var wheel_handler = temp__5804__auto__;
return (function (evt){
var G__1375 = quil.sketch.goog$module$goog$object.get.call(null,evt,"delta");
return (wheel_handler.cljs$core$IFn$_invoke$arity$1 ? wheel_handler.cljs$core$IFn$_invoke$arity$1(G__1375) : wheel_handler.call(null,G__1375));
});
} else {
return null;
}
})();
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var sketch = (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

(prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));

return (prc.quil_internal_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(quil.util.initial_internal_state));
});
return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5804__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5804__auto__)){
var proc_obj = temp__5804__auto__;
return proc_obj.remove();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__5732__auto__ = [];
var len__5726__auto___1378 = arguments.length;
var i__5727__auto___1379 = (0);
while(true){
if((i__5727__auto___1379 < len__5726__auto___1378)){
args__5732__auto__.push((arguments[i__5727__auto___1379]));

var G__1380 = (i__5727__auto___1379 + (1));
i__5727__auto___1379 = G__1380;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
var renderer = (function (){var or__5002__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
var host_elem__$1 = ((typeof host_elem === 'string')?document.getElementById(host_elem):host_elem);
if(cljs.core.truth_(host_elem__$1)){
if(cljs.core.truth_(host_elem__$1.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem__$1.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
(host_elem__$1.processing_context = renderer);
}

quil.sketch.destroy_previous_sketch(host_elem__$1);

var proc_obj = (new p5(quil.sketch.make_sketch(opts_map),host_elem__$1));
(host_elem__$1.processing_obj = proc_obj);

(proc_obj.quil_canvas = host_elem__$1);

quil.sketch.add_fullscreen_support(proc_obj);

return proc_obj;
} else {
return console.error((cljs.core.truth_(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
}));

(quil.sketch.sketch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(quil.sketch.sketch.cljs$lang$applyTo = (function (seq1377){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1377));
}));

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__1389 = quil.sketch.empty_body_QMARK_();
var seq__1381_1390 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__1382_1391 = null;
var count__1383_1392 = (0);
var i__1384_1393 = (0);
while(true){
if((i__1384_1393 < count__1383_1392)){
var sk_1394 = chunk__1382_1391.cljs$core$IIndexed$_nth$arity$2(null,i__1384_1393);
if(add_elem_QMARK__1389){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_1394));
} else {
}

var fexpr__1387_1395 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_1394);
(fexpr__1387_1395.cljs$core$IFn$_invoke$arity$0 ? fexpr__1387_1395.cljs$core$IFn$_invoke$arity$0() : fexpr__1387_1395.call(null));


var G__1396 = seq__1381_1390;
var G__1397 = chunk__1382_1391;
var G__1398 = count__1383_1392;
var G__1399 = (i__1384_1393 + (1));
seq__1381_1390 = G__1396;
chunk__1382_1391 = G__1397;
count__1383_1392 = G__1398;
i__1384_1393 = G__1399;
continue;
} else {
var temp__5804__auto___1400 = cljs.core.seq(seq__1381_1390);
if(temp__5804__auto___1400){
var seq__1381_1401__$1 = temp__5804__auto___1400;
if(cljs.core.chunked_seq_QMARK_(seq__1381_1401__$1)){
var c__5525__auto___1402 = cljs.core.chunk_first(seq__1381_1401__$1);
var G__1403 = cljs.core.chunk_rest(seq__1381_1401__$1);
var G__1404 = c__5525__auto___1402;
var G__1405 = cljs.core.count(c__5525__auto___1402);
var G__1406 = (0);
seq__1381_1390 = G__1403;
chunk__1382_1391 = G__1404;
count__1383_1392 = G__1405;
i__1384_1393 = G__1406;
continue;
} else {
var sk_1407 = cljs.core.first(seq__1381_1401__$1);
if(add_elem_QMARK__1389){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_1407));
} else {
}

var fexpr__1388_1408 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_1407);
(fexpr__1388_1408.cljs$core$IFn$_invoke$arity$0 ? fexpr__1388_1408.cljs$core$IFn$_invoke$arity$0() : fexpr__1388_1408.call(null));


var G__1409 = cljs.core.next(seq__1381_1401__$1);
var G__1410 = null;
var G__1411 = (0);
var G__1412 = (0);
seq__1381_1390 = G__1409;
chunk__1382_1391 = G__1410;
count__1383_1392 = G__1411;
i__1384_1393 = G__1412;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
