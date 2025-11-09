goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23013 = arguments.length;
var i__5727__auto___23014 = (0);
while(true){
if((i__5727__auto___23014 < len__5726__auto___23013)){
args__5732__auto__.push((arguments[i__5727__auto___23014]));

var G__23015 = (i__5727__auto___23014 + (1));
i__5727__auto___23014 = G__23015;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22437){
var G__22438 = cljs.core.first(seq22437);
var seq22437__$1 = cljs.core.next(seq22437);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22438,seq22437__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22445 = cljs.core.seq(sources);
var chunk__22446 = null;
var count__22447 = (0);
var i__22448 = (0);
while(true){
if((i__22448 < count__22447)){
var map__22458 = chunk__22446.cljs$core$IIndexed$_nth$arity$2(null,i__22448);
var map__22458__$1 = cljs.core.__destructure_map(map__22458);
var src = map__22458__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22458__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22458__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22458__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22458__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22460){var e_23019 = e22460;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23019);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23019.message)].join('')));
}

var G__23020 = seq__22445;
var G__23021 = chunk__22446;
var G__23022 = count__22447;
var G__23023 = (i__22448 + (1));
seq__22445 = G__23020;
chunk__22446 = G__23021;
count__22447 = G__23022;
i__22448 = G__23023;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22445);
if(temp__5804__auto__){
var seq__22445__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22445__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22445__$1);
var G__23024 = cljs.core.chunk_rest(seq__22445__$1);
var G__23025 = c__5525__auto__;
var G__23026 = cljs.core.count(c__5525__auto__);
var G__23027 = (0);
seq__22445 = G__23024;
chunk__22446 = G__23025;
count__22447 = G__23026;
i__22448 = G__23027;
continue;
} else {
var map__22464 = cljs.core.first(seq__22445__$1);
var map__22464__$1 = cljs.core.__destructure_map(map__22464);
var src = map__22464__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22464__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22464__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22464__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22464__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22467){var e_23031 = e22467;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23031);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23031.message)].join('')));
}

var G__23032 = cljs.core.next(seq__22445__$1);
var G__23033 = null;
var G__23034 = (0);
var G__23035 = (0);
seq__22445 = G__23032;
chunk__22446 = G__23033;
count__22447 = G__23034;
i__22448 = G__23035;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22475 = cljs.core.seq(js_requires);
var chunk__22476 = null;
var count__22477 = (0);
var i__22478 = (0);
while(true){
if((i__22478 < count__22477)){
var js_ns = chunk__22476.cljs$core$IIndexed$_nth$arity$2(null,i__22478);
var require_str_23036 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23036);


var G__23037 = seq__22475;
var G__23038 = chunk__22476;
var G__23039 = count__22477;
var G__23040 = (i__22478 + (1));
seq__22475 = G__23037;
chunk__22476 = G__23038;
count__22477 = G__23039;
i__22478 = G__23040;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22475);
if(temp__5804__auto__){
var seq__22475__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22475__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22475__$1);
var G__23044 = cljs.core.chunk_rest(seq__22475__$1);
var G__23045 = c__5525__auto__;
var G__23046 = cljs.core.count(c__5525__auto__);
var G__23047 = (0);
seq__22475 = G__23044;
chunk__22476 = G__23045;
count__22477 = G__23046;
i__22478 = G__23047;
continue;
} else {
var js_ns = cljs.core.first(seq__22475__$1);
var require_str_23048 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23048);


var G__23049 = cljs.core.next(seq__22475__$1);
var G__23050 = null;
var G__23051 = (0);
var G__23052 = (0);
seq__22475 = G__23049;
chunk__22476 = G__23050;
count__22477 = G__23051;
i__22478 = G__23052;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22486){
var map__22487 = p__22486;
var map__22487__$1 = cljs.core.__destructure_map(map__22487);
var msg = map__22487__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22487__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22487__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22491(s__22492){
return (new cljs.core.LazySeq(null,(function (){
var s__22492__$1 = s__22492;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22492__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22497 = cljs.core.first(xs__6360__auto__);
var map__22497__$1 = cljs.core.__destructure_map(map__22497);
var src = map__22497__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22497__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22497__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__22492__$1,map__22497,map__22497__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22487,map__22487__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22491_$_iter__22493(s__22494){
return (new cljs.core.LazySeq(null,((function (s__22492__$1,map__22497,map__22497__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22487,map__22487__$1,msg,info,reload_info){
return (function (){
var s__22494__$1 = s__22494;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22494__$1);
if(temp__5804__auto____$1){
var s__22494__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22494__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22494__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22496 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22495 = (0);
while(true){
if((i__22495 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__22495);
cljs.core.chunk_append(b__22496,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23054 = (i__22495 + (1));
i__22495 = G__23054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22496),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22491_$_iter__22493(cljs.core.chunk_rest(s__22494__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22496),null);
}
} else {
var warning = cljs.core.first(s__22494__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22491_$_iter__22493(cljs.core.rest(s__22494__$2)));
}
} else {
return null;
}
break;
}
});})(s__22492__$1,map__22497,map__22497__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22487,map__22487__$1,msg,info,reload_info))
,null,null));
});})(s__22492__$1,map__22497,map__22497__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22487,map__22487__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22491(cljs.core.rest(s__22492__$1)));
} else {
var G__23055 = cljs.core.rest(s__22492__$1);
s__22492__$1 = G__23055;
continue;
}
} else {
var G__23056 = cljs.core.rest(s__22492__$1);
s__22492__$1 = G__23056;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22499_23057 = cljs.core.seq(warnings);
var chunk__22500_23058 = null;
var count__22501_23059 = (0);
var i__22502_23060 = (0);
while(true){
if((i__22502_23060 < count__22501_23059)){
var map__22514_23061 = chunk__22500_23058.cljs$core$IIndexed$_nth$arity$2(null,i__22502_23060);
var map__22514_23062__$1 = cljs.core.__destructure_map(map__22514_23061);
var w_23063 = map__22514_23062__$1;
var msg_23064__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22514_23062__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22514_23062__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22514_23062__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22514_23062__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23067)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23065),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23066),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23064__$1)].join(''));


var G__23068 = seq__22499_23057;
var G__23069 = chunk__22500_23058;
var G__23070 = count__22501_23059;
var G__23071 = (i__22502_23060 + (1));
seq__22499_23057 = G__23068;
chunk__22500_23058 = G__23069;
count__22501_23059 = G__23070;
i__22502_23060 = G__23071;
continue;
} else {
var temp__5804__auto___23072 = cljs.core.seq(seq__22499_23057);
if(temp__5804__auto___23072){
var seq__22499_23073__$1 = temp__5804__auto___23072;
if(cljs.core.chunked_seq_QMARK_(seq__22499_23073__$1)){
var c__5525__auto___23074 = cljs.core.chunk_first(seq__22499_23073__$1);
var G__23075 = cljs.core.chunk_rest(seq__22499_23073__$1);
var G__23076 = c__5525__auto___23074;
var G__23077 = cljs.core.count(c__5525__auto___23074);
var G__23078 = (0);
seq__22499_23057 = G__23075;
chunk__22500_23058 = G__23076;
count__22501_23059 = G__23077;
i__22502_23060 = G__23078;
continue;
} else {
var map__22517_23079 = cljs.core.first(seq__22499_23073__$1);
var map__22517_23080__$1 = cljs.core.__destructure_map(map__22517_23079);
var w_23081 = map__22517_23080__$1;
var msg_23082__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517_23080__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517_23080__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517_23080__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517_23080__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23085)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23083),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23084),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23082__$1)].join(''));


var G__23086 = cljs.core.next(seq__22499_23073__$1);
var G__23087 = null;
var G__23088 = (0);
var G__23089 = (0);
seq__22499_23057 = G__23086;
chunk__22500_23058 = G__23087;
count__22501_23059 = G__23088;
i__22502_23060 = G__23089;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22483_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22483_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__22523 = node_uri;
G__22523.setQuery(null);

G__22523.setPath(new$);

return G__22523;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22526){
var map__22527 = p__22526;
var map__22527__$1 = cljs.core.__destructure_map(map__22527);
var msg = map__22527__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22527__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22527__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22528 = cljs.core.seq(updates);
var chunk__22530 = null;
var count__22531 = (0);
var i__22532 = (0);
while(true){
if((i__22532 < count__22531)){
var path = chunk__22530.cljs$core$IIndexed$_nth$arity$2(null,i__22532);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22793_23090 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22797_23091 = null;
var count__22798_23092 = (0);
var i__22799_23093 = (0);
while(true){
if((i__22799_23093 < count__22798_23092)){
var node_23094 = chunk__22797_23091.cljs$core$IIndexed$_nth$arity$2(null,i__22799_23093);
if(cljs.core.not(node_23094.shadow$old)){
var path_match_23095 = shadow.cljs.devtools.client.browser.match_paths(node_23094.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23095)){
var new_link_23096 = (function (){var G__22830 = node_23094.cloneNode(true);
G__22830.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23095),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22830;
})();
(node_23094.shadow$old = true);

(new_link_23096.onload = ((function (seq__22793_23090,chunk__22797_23091,count__22798_23092,i__22799_23093,seq__22528,chunk__22530,count__22531,i__22532,new_link_23096,path_match_23095,node_23094,path,map__22527,map__22527__$1,msg,updates,reload_info){
return (function (e){
var seq__22831_23098 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22833_23099 = null;
var count__22834_23100 = (0);
var i__22835_23101 = (0);
while(true){
if((i__22835_23101 < count__22834_23100)){
var map__22840_23102 = chunk__22833_23099.cljs$core$IIndexed$_nth$arity$2(null,i__22835_23101);
var map__22840_23103__$1 = cljs.core.__destructure_map(map__22840_23102);
var task_23104 = map__22840_23103__$1;
var fn_str_23105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22840_23103__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22840_23103__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23107 = goog.getObjectByName(fn_str_23105,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23106)].join(''));

(fn_obj_23107.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23107.cljs$core$IFn$_invoke$arity$2(path,new_link_23096) : fn_obj_23107.call(null,path,new_link_23096));


var G__23108 = seq__22831_23098;
var G__23109 = chunk__22833_23099;
var G__23110 = count__22834_23100;
var G__23111 = (i__22835_23101 + (1));
seq__22831_23098 = G__23108;
chunk__22833_23099 = G__23109;
count__22834_23100 = G__23110;
i__22835_23101 = G__23111;
continue;
} else {
var temp__5804__auto___23112 = cljs.core.seq(seq__22831_23098);
if(temp__5804__auto___23112){
var seq__22831_23113__$1 = temp__5804__auto___23112;
if(cljs.core.chunked_seq_QMARK_(seq__22831_23113__$1)){
var c__5525__auto___23114 = cljs.core.chunk_first(seq__22831_23113__$1);
var G__23115 = cljs.core.chunk_rest(seq__22831_23113__$1);
var G__23116 = c__5525__auto___23114;
var G__23117 = cljs.core.count(c__5525__auto___23114);
var G__23118 = (0);
seq__22831_23098 = G__23115;
chunk__22833_23099 = G__23116;
count__22834_23100 = G__23117;
i__22835_23101 = G__23118;
continue;
} else {
var map__22841_23119 = cljs.core.first(seq__22831_23113__$1);
var map__22841_23120__$1 = cljs.core.__destructure_map(map__22841_23119);
var task_23121 = map__22841_23120__$1;
var fn_str_23122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22841_23120__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22841_23120__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23124 = goog.getObjectByName(fn_str_23122,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23123)].join(''));

(fn_obj_23124.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23124.cljs$core$IFn$_invoke$arity$2(path,new_link_23096) : fn_obj_23124.call(null,path,new_link_23096));


var G__23125 = cljs.core.next(seq__22831_23113__$1);
var G__23126 = null;
var G__23127 = (0);
var G__23128 = (0);
seq__22831_23098 = G__23125;
chunk__22833_23099 = G__23126;
count__22834_23100 = G__23127;
i__22835_23101 = G__23128;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23094);
});})(seq__22793_23090,chunk__22797_23091,count__22798_23092,i__22799_23093,seq__22528,chunk__22530,count__22531,i__22532,new_link_23096,path_match_23095,node_23094,path,map__22527,map__22527__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23095], 0));

goog.dom.insertSiblingAfter(new_link_23096,node_23094);


var G__23129 = seq__22793_23090;
var G__23130 = chunk__22797_23091;
var G__23131 = count__22798_23092;
var G__23132 = (i__22799_23093 + (1));
seq__22793_23090 = G__23129;
chunk__22797_23091 = G__23130;
count__22798_23092 = G__23131;
i__22799_23093 = G__23132;
continue;
} else {
var G__23133 = seq__22793_23090;
var G__23134 = chunk__22797_23091;
var G__23135 = count__22798_23092;
var G__23136 = (i__22799_23093 + (1));
seq__22793_23090 = G__23133;
chunk__22797_23091 = G__23134;
count__22798_23092 = G__23135;
i__22799_23093 = G__23136;
continue;
}
} else {
var G__23137 = seq__22793_23090;
var G__23138 = chunk__22797_23091;
var G__23139 = count__22798_23092;
var G__23140 = (i__22799_23093 + (1));
seq__22793_23090 = G__23137;
chunk__22797_23091 = G__23138;
count__22798_23092 = G__23139;
i__22799_23093 = G__23140;
continue;
}
} else {
var temp__5804__auto___23141 = cljs.core.seq(seq__22793_23090);
if(temp__5804__auto___23141){
var seq__22793_23142__$1 = temp__5804__auto___23141;
if(cljs.core.chunked_seq_QMARK_(seq__22793_23142__$1)){
var c__5525__auto___23143 = cljs.core.chunk_first(seq__22793_23142__$1);
var G__23144 = cljs.core.chunk_rest(seq__22793_23142__$1);
var G__23145 = c__5525__auto___23143;
var G__23146 = cljs.core.count(c__5525__auto___23143);
var G__23147 = (0);
seq__22793_23090 = G__23144;
chunk__22797_23091 = G__23145;
count__22798_23092 = G__23146;
i__22799_23093 = G__23147;
continue;
} else {
var node_23148 = cljs.core.first(seq__22793_23142__$1);
if(cljs.core.not(node_23148.shadow$old)){
var path_match_23149 = shadow.cljs.devtools.client.browser.match_paths(node_23148.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23149)){
var new_link_23150 = (function (){var G__22842 = node_23148.cloneNode(true);
G__22842.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23149),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22842;
})();
(node_23148.shadow$old = true);

(new_link_23150.onload = ((function (seq__22793_23090,chunk__22797_23091,count__22798_23092,i__22799_23093,seq__22528,chunk__22530,count__22531,i__22532,new_link_23150,path_match_23149,node_23148,seq__22793_23142__$1,temp__5804__auto___23141,path,map__22527,map__22527__$1,msg,updates,reload_info){
return (function (e){
var seq__22844_23151 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22846_23152 = null;
var count__22847_23153 = (0);
var i__22848_23154 = (0);
while(true){
if((i__22848_23154 < count__22847_23153)){
var map__22858_23155 = chunk__22846_23152.cljs$core$IIndexed$_nth$arity$2(null,i__22848_23154);
var map__22858_23156__$1 = cljs.core.__destructure_map(map__22858_23155);
var task_23157 = map__22858_23156__$1;
var fn_str_23158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22858_23156__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22858_23156__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23160 = goog.getObjectByName(fn_str_23158,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23159)].join(''));

(fn_obj_23160.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23160.cljs$core$IFn$_invoke$arity$2(path,new_link_23150) : fn_obj_23160.call(null,path,new_link_23150));


var G__23161 = seq__22844_23151;
var G__23162 = chunk__22846_23152;
var G__23163 = count__22847_23153;
var G__23164 = (i__22848_23154 + (1));
seq__22844_23151 = G__23161;
chunk__22846_23152 = G__23162;
count__22847_23153 = G__23163;
i__22848_23154 = G__23164;
continue;
} else {
var temp__5804__auto___23165__$1 = cljs.core.seq(seq__22844_23151);
if(temp__5804__auto___23165__$1){
var seq__22844_23166__$1 = temp__5804__auto___23165__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22844_23166__$1)){
var c__5525__auto___23170 = cljs.core.chunk_first(seq__22844_23166__$1);
var G__23171 = cljs.core.chunk_rest(seq__22844_23166__$1);
var G__23172 = c__5525__auto___23170;
var G__23173 = cljs.core.count(c__5525__auto___23170);
var G__23174 = (0);
seq__22844_23151 = G__23171;
chunk__22846_23152 = G__23172;
count__22847_23153 = G__23173;
i__22848_23154 = G__23174;
continue;
} else {
var map__22859_23175 = cljs.core.first(seq__22844_23166__$1);
var map__22859_23176__$1 = cljs.core.__destructure_map(map__22859_23175);
var task_23177 = map__22859_23176__$1;
var fn_str_23178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22859_23176__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22859_23176__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23180 = goog.getObjectByName(fn_str_23178,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23179)].join(''));

(fn_obj_23180.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23180.cljs$core$IFn$_invoke$arity$2(path,new_link_23150) : fn_obj_23180.call(null,path,new_link_23150));


var G__23181 = cljs.core.next(seq__22844_23166__$1);
var G__23182 = null;
var G__23183 = (0);
var G__23184 = (0);
seq__22844_23151 = G__23181;
chunk__22846_23152 = G__23182;
count__22847_23153 = G__23183;
i__22848_23154 = G__23184;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23148);
});})(seq__22793_23090,chunk__22797_23091,count__22798_23092,i__22799_23093,seq__22528,chunk__22530,count__22531,i__22532,new_link_23150,path_match_23149,node_23148,seq__22793_23142__$1,temp__5804__auto___23141,path,map__22527,map__22527__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23149], 0));

goog.dom.insertSiblingAfter(new_link_23150,node_23148);


var G__23186 = cljs.core.next(seq__22793_23142__$1);
var G__23187 = null;
var G__23188 = (0);
var G__23189 = (0);
seq__22793_23090 = G__23186;
chunk__22797_23091 = G__23187;
count__22798_23092 = G__23188;
i__22799_23093 = G__23189;
continue;
} else {
var G__23190 = cljs.core.next(seq__22793_23142__$1);
var G__23191 = null;
var G__23192 = (0);
var G__23193 = (0);
seq__22793_23090 = G__23190;
chunk__22797_23091 = G__23191;
count__22798_23092 = G__23192;
i__22799_23093 = G__23193;
continue;
}
} else {
var G__23194 = cljs.core.next(seq__22793_23142__$1);
var G__23195 = null;
var G__23196 = (0);
var G__23197 = (0);
seq__22793_23090 = G__23194;
chunk__22797_23091 = G__23195;
count__22798_23092 = G__23196;
i__22799_23093 = G__23197;
continue;
}
}
} else {
}
}
break;
}


var G__23198 = seq__22528;
var G__23199 = chunk__22530;
var G__23200 = count__22531;
var G__23201 = (i__22532 + (1));
seq__22528 = G__23198;
chunk__22530 = G__23199;
count__22531 = G__23200;
i__22532 = G__23201;
continue;
} else {
var G__23202 = seq__22528;
var G__23203 = chunk__22530;
var G__23204 = count__22531;
var G__23205 = (i__22532 + (1));
seq__22528 = G__23202;
chunk__22530 = G__23203;
count__22531 = G__23204;
i__22532 = G__23205;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22528);
if(temp__5804__auto__){
var seq__22528__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22528__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22528__$1);
var G__23206 = cljs.core.chunk_rest(seq__22528__$1);
var G__23207 = c__5525__auto__;
var G__23208 = cljs.core.count(c__5525__auto__);
var G__23209 = (0);
seq__22528 = G__23206;
chunk__22530 = G__23207;
count__22531 = G__23208;
i__22532 = G__23209;
continue;
} else {
var path = cljs.core.first(seq__22528__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22860_23210 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22864_23211 = null;
var count__22865_23212 = (0);
var i__22866_23213 = (0);
while(true){
if((i__22866_23213 < count__22865_23212)){
var node_23214 = chunk__22864_23211.cljs$core$IIndexed$_nth$arity$2(null,i__22866_23213);
if(cljs.core.not(node_23214.shadow$old)){
var path_match_23215 = shadow.cljs.devtools.client.browser.match_paths(node_23214.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23215)){
var new_link_23217 = (function (){var G__22919 = node_23214.cloneNode(true);
G__22919.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23215),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22919;
})();
(node_23214.shadow$old = true);

(new_link_23217.onload = ((function (seq__22860_23210,chunk__22864_23211,count__22865_23212,i__22866_23213,seq__22528,chunk__22530,count__22531,i__22532,new_link_23217,path_match_23215,node_23214,path,seq__22528__$1,temp__5804__auto__,map__22527,map__22527__$1,msg,updates,reload_info){
return (function (e){
var seq__22920_23218 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22922_23219 = null;
var count__22923_23220 = (0);
var i__22924_23221 = (0);
while(true){
if((i__22924_23221 < count__22923_23220)){
var map__22934_23222 = chunk__22922_23219.cljs$core$IIndexed$_nth$arity$2(null,i__22924_23221);
var map__22934_23223__$1 = cljs.core.__destructure_map(map__22934_23222);
var task_23224 = map__22934_23223__$1;
var fn_str_23225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934_23223__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934_23223__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23228 = goog.getObjectByName(fn_str_23225,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23226)].join(''));

(fn_obj_23228.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23228.cljs$core$IFn$_invoke$arity$2(path,new_link_23217) : fn_obj_23228.call(null,path,new_link_23217));


var G__23229 = seq__22920_23218;
var G__23230 = chunk__22922_23219;
var G__23231 = count__22923_23220;
var G__23232 = (i__22924_23221 + (1));
seq__22920_23218 = G__23229;
chunk__22922_23219 = G__23230;
count__22923_23220 = G__23231;
i__22924_23221 = G__23232;
continue;
} else {
var temp__5804__auto___23236__$1 = cljs.core.seq(seq__22920_23218);
if(temp__5804__auto___23236__$1){
var seq__22920_23237__$1 = temp__5804__auto___23236__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22920_23237__$1)){
var c__5525__auto___23238 = cljs.core.chunk_first(seq__22920_23237__$1);
var G__23239 = cljs.core.chunk_rest(seq__22920_23237__$1);
var G__23240 = c__5525__auto___23238;
var G__23241 = cljs.core.count(c__5525__auto___23238);
var G__23242 = (0);
seq__22920_23218 = G__23239;
chunk__22922_23219 = G__23240;
count__22923_23220 = G__23241;
i__22924_23221 = G__23242;
continue;
} else {
var map__22937_23243 = cljs.core.first(seq__22920_23237__$1);
var map__22937_23244__$1 = cljs.core.__destructure_map(map__22937_23243);
var task_23245 = map__22937_23244__$1;
var fn_str_23246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22937_23244__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22937_23244__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23248 = goog.getObjectByName(fn_str_23246,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23247)].join(''));

(fn_obj_23248.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23248.cljs$core$IFn$_invoke$arity$2(path,new_link_23217) : fn_obj_23248.call(null,path,new_link_23217));


var G__23250 = cljs.core.next(seq__22920_23237__$1);
var G__23251 = null;
var G__23252 = (0);
var G__23253 = (0);
seq__22920_23218 = G__23250;
chunk__22922_23219 = G__23251;
count__22923_23220 = G__23252;
i__22924_23221 = G__23253;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23214);
});})(seq__22860_23210,chunk__22864_23211,count__22865_23212,i__22866_23213,seq__22528,chunk__22530,count__22531,i__22532,new_link_23217,path_match_23215,node_23214,path,seq__22528__$1,temp__5804__auto__,map__22527,map__22527__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23215], 0));

goog.dom.insertSiblingAfter(new_link_23217,node_23214);


var G__23254 = seq__22860_23210;
var G__23255 = chunk__22864_23211;
var G__23256 = count__22865_23212;
var G__23257 = (i__22866_23213 + (1));
seq__22860_23210 = G__23254;
chunk__22864_23211 = G__23255;
count__22865_23212 = G__23256;
i__22866_23213 = G__23257;
continue;
} else {
var G__23258 = seq__22860_23210;
var G__23259 = chunk__22864_23211;
var G__23260 = count__22865_23212;
var G__23261 = (i__22866_23213 + (1));
seq__22860_23210 = G__23258;
chunk__22864_23211 = G__23259;
count__22865_23212 = G__23260;
i__22866_23213 = G__23261;
continue;
}
} else {
var G__23262 = seq__22860_23210;
var G__23263 = chunk__22864_23211;
var G__23264 = count__22865_23212;
var G__23265 = (i__22866_23213 + (1));
seq__22860_23210 = G__23262;
chunk__22864_23211 = G__23263;
count__22865_23212 = G__23264;
i__22866_23213 = G__23265;
continue;
}
} else {
var temp__5804__auto___23266__$1 = cljs.core.seq(seq__22860_23210);
if(temp__5804__auto___23266__$1){
var seq__22860_23267__$1 = temp__5804__auto___23266__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22860_23267__$1)){
var c__5525__auto___23268 = cljs.core.chunk_first(seq__22860_23267__$1);
var G__23269 = cljs.core.chunk_rest(seq__22860_23267__$1);
var G__23270 = c__5525__auto___23268;
var G__23271 = cljs.core.count(c__5525__auto___23268);
var G__23272 = (0);
seq__22860_23210 = G__23269;
chunk__22864_23211 = G__23270;
count__22865_23212 = G__23271;
i__22866_23213 = G__23272;
continue;
} else {
var node_23273 = cljs.core.first(seq__22860_23267__$1);
if(cljs.core.not(node_23273.shadow$old)){
var path_match_23274 = shadow.cljs.devtools.client.browser.match_paths(node_23273.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23274)){
var new_link_23276 = (function (){var G__22941 = node_23273.cloneNode(true);
G__22941.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23274),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22941;
})();
(node_23273.shadow$old = true);

(new_link_23276.onload = ((function (seq__22860_23210,chunk__22864_23211,count__22865_23212,i__22866_23213,seq__22528,chunk__22530,count__22531,i__22532,new_link_23276,path_match_23274,node_23273,seq__22860_23267__$1,temp__5804__auto___23266__$1,path,seq__22528__$1,temp__5804__auto__,map__22527,map__22527__$1,msg,updates,reload_info){
return (function (e){
var seq__22942_23277 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22944_23278 = null;
var count__22945_23279 = (0);
var i__22946_23280 = (0);
while(true){
if((i__22946_23280 < count__22945_23279)){
var map__22952_23281 = chunk__22944_23278.cljs$core$IIndexed$_nth$arity$2(null,i__22946_23280);
var map__22952_23282__$1 = cljs.core.__destructure_map(map__22952_23281);
var task_23283 = map__22952_23282__$1;
var fn_str_23284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952_23282__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952_23282__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23286 = goog.getObjectByName(fn_str_23284,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23285)].join(''));

(fn_obj_23286.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23286.cljs$core$IFn$_invoke$arity$2(path,new_link_23276) : fn_obj_23286.call(null,path,new_link_23276));


var G__23287 = seq__22942_23277;
var G__23288 = chunk__22944_23278;
var G__23289 = count__22945_23279;
var G__23290 = (i__22946_23280 + (1));
seq__22942_23277 = G__23287;
chunk__22944_23278 = G__23288;
count__22945_23279 = G__23289;
i__22946_23280 = G__23290;
continue;
} else {
var temp__5804__auto___23291__$2 = cljs.core.seq(seq__22942_23277);
if(temp__5804__auto___23291__$2){
var seq__22942_23292__$1 = temp__5804__auto___23291__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22942_23292__$1)){
var c__5525__auto___23293 = cljs.core.chunk_first(seq__22942_23292__$1);
var G__23294 = cljs.core.chunk_rest(seq__22942_23292__$1);
var G__23295 = c__5525__auto___23293;
var G__23296 = cljs.core.count(c__5525__auto___23293);
var G__23297 = (0);
seq__22942_23277 = G__23294;
chunk__22944_23278 = G__23295;
count__22945_23279 = G__23296;
i__22946_23280 = G__23297;
continue;
} else {
var map__22953_23298 = cljs.core.first(seq__22942_23292__$1);
var map__22953_23299__$1 = cljs.core.__destructure_map(map__22953_23298);
var task_23300 = map__22953_23299__$1;
var fn_str_23301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22953_23299__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22953_23299__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23303 = goog.getObjectByName(fn_str_23301,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23302)].join(''));

(fn_obj_23303.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23303.cljs$core$IFn$_invoke$arity$2(path,new_link_23276) : fn_obj_23303.call(null,path,new_link_23276));


var G__23304 = cljs.core.next(seq__22942_23292__$1);
var G__23305 = null;
var G__23306 = (0);
var G__23307 = (0);
seq__22942_23277 = G__23304;
chunk__22944_23278 = G__23305;
count__22945_23279 = G__23306;
i__22946_23280 = G__23307;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23273);
});})(seq__22860_23210,chunk__22864_23211,count__22865_23212,i__22866_23213,seq__22528,chunk__22530,count__22531,i__22532,new_link_23276,path_match_23274,node_23273,seq__22860_23267__$1,temp__5804__auto___23266__$1,path,seq__22528__$1,temp__5804__auto__,map__22527,map__22527__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23274], 0));

goog.dom.insertSiblingAfter(new_link_23276,node_23273);


var G__23308 = cljs.core.next(seq__22860_23267__$1);
var G__23309 = null;
var G__23310 = (0);
var G__23311 = (0);
seq__22860_23210 = G__23308;
chunk__22864_23211 = G__23309;
count__22865_23212 = G__23310;
i__22866_23213 = G__23311;
continue;
} else {
var G__23318 = cljs.core.next(seq__22860_23267__$1);
var G__23319 = null;
var G__23320 = (0);
var G__23321 = (0);
seq__22860_23210 = G__23318;
chunk__22864_23211 = G__23319;
count__22865_23212 = G__23320;
i__22866_23213 = G__23321;
continue;
}
} else {
var G__23322 = cljs.core.next(seq__22860_23267__$1);
var G__23323 = null;
var G__23324 = (0);
var G__23325 = (0);
seq__22860_23210 = G__23322;
chunk__22864_23211 = G__23323;
count__22865_23212 = G__23324;
i__22866_23213 = G__23325;
continue;
}
}
} else {
}
}
break;
}


var G__23326 = cljs.core.next(seq__22528__$1);
var G__23327 = null;
var G__23328 = (0);
var G__23329 = (0);
seq__22528 = G__23326;
chunk__22530 = G__23327;
count__22531 = G__23328;
i__22532 = G__23329;
continue;
} else {
var G__23330 = cljs.core.next(seq__22528__$1);
var G__23331 = null;
var G__23332 = (0);
var G__23333 = (0);
seq__22528 = G__23330;
chunk__22530 = G__23331;
count__22531 = G__23332;
i__22532 = G__23333;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__22958 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__22958) : success.call(null,G__22958));
}catch (e22957){var e = e22957;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__22962,success,fail){
var map__22963 = p__22962;
var map__22963__$1 = cljs.core.__destructure_map(map__22963);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22963__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__22965 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__22965) : success.call(null,G__22965));
}catch (e22964){var e = e22964;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22966,done,error){
var map__22967 = p__22966;
var map__22967__$1 = cljs.core.__destructure_map(map__22967);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22967__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22970,done,error){
var map__22971 = p__22970;
var map__22971__$1 = cljs.core.__destructure_map(map__22971);
var msg = map__22971__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22971__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22971__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22971__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22978){
var map__22979 = p__22978;
var map__22979__$1 = cljs.core.__destructure_map(map__22979);
var src = map__22979__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22979__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22981 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22981) : done.call(null,G__22981));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22982){
var map__22983 = p__22982;
var map__22983__$1 = cljs.core.__destructure_map(map__22983);
var msg__$1 = map__22983__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22984){var ex = e22984;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22991){
var map__22992 = p__22991;
var map__22992__$1 = cljs.core.__destructure_map(map__22992);
var env = map__22992__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23005){
var map__23006 = p__23005;
var map__23006__$1 = cljs.core.__destructure_map(map__23006);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23006__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23006__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__23008){
var map__23009 = p__23008;
var map__23009__$1 = cljs.core.__destructure_map(map__23009);
var svc = map__23009__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
