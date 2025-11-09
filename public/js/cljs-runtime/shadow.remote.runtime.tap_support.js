goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__21894,p__21895){
var map__21896 = p__21894;
var map__21896__$1 = cljs.core.__destructure_map(map__21896);
var svc = map__21896__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21896__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21896__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21896__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21897 = p__21895;
var map__21897__$1 = cljs.core.__destructure_map(map__21897);
var msg = map__21897__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21897__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21897__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21897__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21897__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__21907,p__21908){
var map__21909 = p__21907;
var map__21909__$1 = cljs.core.__destructure_map(map__21909);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21909__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__21910 = p__21908;
var map__21910__$1 = cljs.core.__destructure_map(map__21910);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21910__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__21914,p__21915){
var map__21920 = p__21914;
var map__21920__$1 = cljs.core.__destructure_map(map__21920);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21920__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21920__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21921 = p__21915;
var map__21921__$1 = cljs.core.__destructure_map(map__21921);
var msg = map__21921__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21921__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__21925,tid){
var map__21926 = p__21925;
var map__21926__$1 = cljs.core.__destructure_map(map__21926);
var svc = map__21926__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21926__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__21937 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__21938 = null;
var count__21939 = (0);
var i__21940 = (0);
while(true){
if((i__21940 < count__21939)){
var vec__21952 = chunk__21938.cljs$core$IIndexed$_nth$arity$2(null,i__21940);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21952,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21952,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21967 = seq__21937;
var G__21968 = chunk__21938;
var G__21969 = count__21939;
var G__21970 = (i__21940 + (1));
seq__21937 = G__21967;
chunk__21938 = G__21968;
count__21939 = G__21969;
i__21940 = G__21970;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21937);
if(temp__5804__auto__){
var seq__21937__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21937__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21937__$1);
var G__21971 = cljs.core.chunk_rest(seq__21937__$1);
var G__21972 = c__5525__auto__;
var G__21973 = cljs.core.count(c__5525__auto__);
var G__21974 = (0);
seq__21937 = G__21971;
chunk__21938 = G__21972;
count__21939 = G__21973;
i__21940 = G__21974;
continue;
} else {
var vec__21957 = cljs.core.first(seq__21937__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21957,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21957,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21975 = cljs.core.next(seq__21937__$1);
var G__21976 = null;
var G__21977 = (0);
var G__21978 = (0);
seq__21937 = G__21975;
chunk__21938 = G__21976;
count__21939 = G__21977;
i__21940 = G__21978;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__21927_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__21927_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__21928_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__21928_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__21929_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__21929_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__21931_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__21931_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__21961){
var map__21962 = p__21961;
var map__21962__$1 = cljs.core.__destructure_map(map__21962);
var svc = map__21962__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21962__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21962__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
