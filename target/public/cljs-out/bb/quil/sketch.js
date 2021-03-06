// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.object');
goog.require('goog.events.EventType');
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
var temp__5735__auto__ = applet.quil_canvas;
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
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
var G__13339 = arguments.length;
switch (G__13339) {
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
var seq__13341 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouseWheel,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__13342 = null;
var count__13343 = (0);
var i__13344 = (0);
while(true){
if((i__13344 < count__13343)){
var vec__13355 = chunk__13342.cljs$core$IIndexed$_nth$arity$2(null,i__13344);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13355,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13355,(1),null);
var temp__5735__auto___13365 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5735__auto___13365)){
var handler_13366 = temp__5735__auto___13365;
(prc[cljs.core.name(processing_name)] = ((function (seq__13341,chunk__13342,count__13343,i__13344,handler_13366,temp__5735__auto___13365,vec__13355,processing_name,quil_name){
return (function() { 
var G__13367__delegate = function (args){
var _STAR_applet_STAR__orig_val__13358 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__13359 = prc;
(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__13359);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_13366,args);
}finally {(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__13358);
}};
var G__13367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13368__i = 0, G__13368__a = new Array(arguments.length -  0);
while (G__13368__i < G__13368__a.length) {G__13368__a[G__13368__i] = arguments[G__13368__i + 0]; ++G__13368__i;}
  args = new cljs.core.IndexedSeq(G__13368__a,0,null);
} 
return G__13367__delegate.call(this,args);};
G__13367.cljs$lang$maxFixedArity = 0;
G__13367.cljs$lang$applyTo = (function (arglist__13369){
var args = cljs.core.seq(arglist__13369);
return G__13367__delegate(args);
});
G__13367.cljs$core$IFn$_invoke$arity$variadic = G__13367__delegate;
return G__13367;
})()
;})(seq__13341,chunk__13342,count__13343,i__13344,handler_13366,temp__5735__auto___13365,vec__13355,processing_name,quil_name))
);
} else {
}


var G__13370 = seq__13341;
var G__13371 = chunk__13342;
var G__13372 = count__13343;
var G__13373 = (i__13344 + (1));
seq__13341 = G__13370;
chunk__13342 = G__13371;
count__13343 = G__13372;
i__13344 = G__13373;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13341);
if(temp__5735__auto__){
var seq__13341__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13341__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__13341__$1);
var G__13374 = cljs.core.chunk_rest(seq__13341__$1);
var G__13375 = c__4556__auto__;
var G__13376 = cljs.core.count(c__4556__auto__);
var G__13377 = (0);
seq__13341 = G__13374;
chunk__13342 = G__13375;
count__13343 = G__13376;
i__13344 = G__13377;
continue;
} else {
var vec__13360 = cljs.core.first(seq__13341__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13360,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13360,(1),null);
var temp__5735__auto___13378__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5735__auto___13378__$1)){
var handler_13379 = temp__5735__auto___13378__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__13341,chunk__13342,count__13343,i__13344,handler_13379,temp__5735__auto___13378__$1,vec__13360,processing_name,quil_name,seq__13341__$1,temp__5735__auto__){
return (function() { 
var G__13380__delegate = function (args){
var _STAR_applet_STAR__orig_val__13363 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__13364 = prc;
(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__13364);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_13379,args);
}finally {(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__13363);
}};
var G__13380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13381__i = 0, G__13381__a = new Array(arguments.length -  0);
while (G__13381__i < G__13381__a.length) {G__13381__a[G__13381__i] = arguments[G__13381__i + 0]; ++G__13381__i;}
  args = new cljs.core.IndexedSeq(G__13381__a,0,null);
} 
return G__13380__delegate.call(this,args);};
G__13380.cljs$lang$maxFixedArity = 0;
G__13380.cljs$lang$applyTo = (function (arglist__13382){
var args = cljs.core.seq(arglist__13382);
return G__13380__delegate(args);
});
G__13380.cljs$core$IFn$_invoke$arity$variadic = G__13380__delegate;
return G__13380;
})()
;})(seq__13341,chunk__13342,count__13343,i__13344,handler_13379,temp__5735__auto___13378__$1,vec__13360,processing_name,quil_name,seq__13341__$1,temp__5735__auto__))
);
} else {
}


var G__13383 = cljs.core.next(seq__13341__$1);
var G__13384 = null;
var G__13385 = (0);
var G__13386 = (0);
seq__13341 = G__13383;
chunk__13342 = G__13384;
count__13343 = G__13385;
i__13344 = G__13386;
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
var or__4126__auto__ = document.fullscreenElement;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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

return goog.events.listen(document,"fullscreenerror",(function (p1__13387_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__13387_SHARP_);
}));
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__13390 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__13389 = (function (p1__13388_SHARP_){
return (p1__13388_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13388_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__13388_SHARP_.call(null,options));
});
return fexpr__13389(G__13390);
})()], 0));
var sketch_size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__13391_13394 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__13391_13394.cljs$core$IFn$_invoke$arity$0 ? fexpr__13391_13394.cljs$core$IFn$_invoke$arity$0() : fexpr__13391_13394.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__13392 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__13392.cljs$core$IFn$_invoke$arity$0 ? fexpr__13392.cljs$core$IFn$_invoke$arity$0() : fexpr__13392.call(null));
} else {
return null;
}
});
var mouse_wheel = (function (){var temp__5735__auto__ = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5735__auto__)){
var wheel_handler = temp__5735__auto__;
return (function (evt){
var G__13393 = goog.object.get(evt,"delta");
return (wheel_handler.cljs$core$IFn$_invoke$arity$1 ? wheel_handler.cljs$core$IFn$_invoke$arity$1(G__13393) : wheel_handler.call(null,G__13393));
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
var temp__5735__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5735__auto__)){
var proc_obj = temp__5735__auto__;
return proc_obj.remove();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13396 = arguments.length;
var i__4737__auto___13397 = (0);
while(true){
if((i__4737__auto___13397 < len__4736__auto___13396)){
args__4742__auto__.push((arguments[i__4737__auto___13397]));

var G__13398 = (i__4737__auto___13397 + (1));
i__4737__auto___13397 = G__13398;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
var renderer = (function (){var or__4126__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
(quil.sketch.sketch.cljs$lang$applyTo = (function (seq13395){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13395));
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
var add_elem_QMARK__13407 = quil.sketch.empty_body_QMARK_();
var seq__13399_13408 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__13400_13409 = null;
var count__13401_13410 = (0);
var i__13402_13411 = (0);
while(true){
if((i__13402_13411 < count__13401_13410)){
var sk_13412 = chunk__13400_13409.cljs$core$IIndexed$_nth$arity$2(null,i__13402_13411);
if(add_elem_QMARK__13407){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_13412));
} else {
}

var fexpr__13405_13413 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_13412);
(fexpr__13405_13413.cljs$core$IFn$_invoke$arity$0 ? fexpr__13405_13413.cljs$core$IFn$_invoke$arity$0() : fexpr__13405_13413.call(null));


var G__13414 = seq__13399_13408;
var G__13415 = chunk__13400_13409;
var G__13416 = count__13401_13410;
var G__13417 = (i__13402_13411 + (1));
seq__13399_13408 = G__13414;
chunk__13400_13409 = G__13415;
count__13401_13410 = G__13416;
i__13402_13411 = G__13417;
continue;
} else {
var temp__5735__auto___13418 = cljs.core.seq(seq__13399_13408);
if(temp__5735__auto___13418){
var seq__13399_13419__$1 = temp__5735__auto___13418;
if(cljs.core.chunked_seq_QMARK_(seq__13399_13419__$1)){
var c__4556__auto___13420 = cljs.core.chunk_first(seq__13399_13419__$1);
var G__13421 = cljs.core.chunk_rest(seq__13399_13419__$1);
var G__13422 = c__4556__auto___13420;
var G__13423 = cljs.core.count(c__4556__auto___13420);
var G__13424 = (0);
seq__13399_13408 = G__13421;
chunk__13400_13409 = G__13422;
count__13401_13410 = G__13423;
i__13402_13411 = G__13424;
continue;
} else {
var sk_13425 = cljs.core.first(seq__13399_13419__$1);
if(add_elem_QMARK__13407){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_13425));
} else {
}

var fexpr__13406_13426 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_13425);
(fexpr__13406_13426.cljs$core$IFn$_invoke$arity$0 ? fexpr__13406_13426.cljs$core$IFn$_invoke$arity$0() : fexpr__13406_13426.call(null));


var G__13427 = cljs.core.next(seq__13399_13419__$1);
var G__13428 = null;
var G__13429 = (0);
var G__13430 = (0);
seq__13399_13408 = G__13427;
chunk__13400_13409 = G__13428;
count__13401_13410 = G__13429;
i__13402_13411 = G__13430;
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
