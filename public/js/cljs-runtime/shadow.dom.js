goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16434 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16434(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16435 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16435(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__14910 = coll;
var G__14911 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__14910,G__14911) : shadow.dom.lazy_native_coll_seq.call(null,G__14910,G__14911));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__14941 = arguments.length;
switch (G__14941) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__14949 = arguments.length;
switch (G__14949) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__14959 = arguments.length;
switch (G__14959) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__14978 = arguments.length;
switch (G__14978) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__14992 = arguments.length;
switch (G__14992) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__14997 = arguments.length;
switch (G__14997) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e15009){if((e15009 instanceof Object)){
var e = e15009;
return console.log("didnt support attachEvent",el,e);
} else {
throw e15009;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__15018 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__15019 = null;
var count__15020 = (0);
var i__15021 = (0);
while(true){
if((i__15021 < count__15020)){
var el = chunk__15019.cljs$core$IIndexed$_nth$arity$2(null,i__15021);
var handler_16460__$1 = ((function (seq__15018,chunk__15019,count__15020,i__15021,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15018,chunk__15019,count__15020,i__15021,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16460__$1);


var G__16461 = seq__15018;
var G__16462 = chunk__15019;
var G__16463 = count__15020;
var G__16464 = (i__15021 + (1));
seq__15018 = G__16461;
chunk__15019 = G__16462;
count__15020 = G__16463;
i__15021 = G__16464;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15018);
if(temp__5804__auto__){
var seq__15018__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15018__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15018__$1);
var G__16465 = cljs.core.chunk_rest(seq__15018__$1);
var G__16466 = c__5525__auto__;
var G__16467 = cljs.core.count(c__5525__auto__);
var G__16468 = (0);
seq__15018 = G__16465;
chunk__15019 = G__16466;
count__15020 = G__16467;
i__15021 = G__16468;
continue;
} else {
var el = cljs.core.first(seq__15018__$1);
var handler_16469__$1 = ((function (seq__15018,chunk__15019,count__15020,i__15021,el,seq__15018__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15018,chunk__15019,count__15020,i__15021,el,seq__15018__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16469__$1);


var G__16470 = cljs.core.next(seq__15018__$1);
var G__16471 = null;
var G__16472 = (0);
var G__16473 = (0);
seq__15018 = G__16470;
chunk__15019 = G__16471;
count__15020 = G__16472;
i__15021 = G__16473;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__15050 = arguments.length;
switch (G__15050) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__15061 = cljs.core.seq(events);
var chunk__15062 = null;
var count__15063 = (0);
var i__15064 = (0);
while(true){
if((i__15064 < count__15063)){
var vec__15078 = chunk__15062.cljs$core$IIndexed$_nth$arity$2(null,i__15064);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15078,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15078,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16485 = seq__15061;
var G__16486 = chunk__15062;
var G__16487 = count__15063;
var G__16488 = (i__15064 + (1));
seq__15061 = G__16485;
chunk__15062 = G__16486;
count__15063 = G__16487;
i__15064 = G__16488;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15061);
if(temp__5804__auto__){
var seq__15061__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15061__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15061__$1);
var G__16489 = cljs.core.chunk_rest(seq__15061__$1);
var G__16490 = c__5525__auto__;
var G__16491 = cljs.core.count(c__5525__auto__);
var G__16492 = (0);
seq__15061 = G__16489;
chunk__15062 = G__16490;
count__15063 = G__16491;
i__15064 = G__16492;
continue;
} else {
var vec__15081 = cljs.core.first(seq__15061__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15081,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15081,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16493 = cljs.core.next(seq__15061__$1);
var G__16494 = null;
var G__16495 = (0);
var G__16496 = (0);
seq__15061 = G__16493;
chunk__15062 = G__16494;
count__15063 = G__16495;
i__15064 = G__16496;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__15087 = cljs.core.seq(styles);
var chunk__15088 = null;
var count__15089 = (0);
var i__15090 = (0);
while(true){
if((i__15090 < count__15089)){
var vec__15106 = chunk__15088.cljs$core$IIndexed$_nth$arity$2(null,i__15090);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15106,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15106,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16498 = seq__15087;
var G__16499 = chunk__15088;
var G__16500 = count__15089;
var G__16501 = (i__15090 + (1));
seq__15087 = G__16498;
chunk__15088 = G__16499;
count__15089 = G__16500;
i__15090 = G__16501;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15087);
if(temp__5804__auto__){
var seq__15087__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15087__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15087__$1);
var G__16502 = cljs.core.chunk_rest(seq__15087__$1);
var G__16504 = c__5525__auto__;
var G__16505 = cljs.core.count(c__5525__auto__);
var G__16506 = (0);
seq__15087 = G__16502;
chunk__15088 = G__16504;
count__15089 = G__16505;
i__15090 = G__16506;
continue;
} else {
var vec__15109 = cljs.core.first(seq__15087__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15109,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15109,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16507 = cljs.core.next(seq__15087__$1);
var G__16508 = null;
var G__16509 = (0);
var G__16510 = (0);
seq__15087 = G__16507;
chunk__15088 = G__16508;
count__15089 = G__16509;
i__15090 = G__16510;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__15121_16512 = key;
var G__15121_16513__$1 = (((G__15121_16512 instanceof cljs.core.Keyword))?G__15121_16512.fqn:null);
switch (G__15121_16513__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16517 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_16517,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_16517,"aria-");
}
})())){
el.setAttribute(ks_16517,value);
} else {
(el[ks_16517] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__15150){
var map__15152 = p__15150;
var map__15152__$1 = cljs.core.__destructure_map(map__15152);
var props = map__15152__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15152__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__15153 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15153,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15153,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15153,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__15156 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__15156,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__15156;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__15161 = arguments.length;
switch (G__15161) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__15172){
var vec__15173 = p__15172;
var seq__15174 = cljs.core.seq(vec__15173);
var first__15175 = cljs.core.first(seq__15174);
var seq__15174__$1 = cljs.core.next(seq__15174);
var nn = first__15175;
var first__15175__$1 = cljs.core.first(seq__15174__$1);
var seq__15174__$2 = cljs.core.next(seq__15174__$1);
var np = first__15175__$1;
var nc = seq__15174__$2;
var node = vec__15173;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15176 = nn;
var G__15177 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15176,G__15177) : create_fn.call(null,G__15176,G__15177));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15178 = nn;
var G__15179 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15178,G__15179) : create_fn.call(null,G__15178,G__15179));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__15181 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15181,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15181,(1),null);
var seq__15185_16523 = cljs.core.seq(node_children);
var chunk__15186_16524 = null;
var count__15187_16525 = (0);
var i__15188_16526 = (0);
while(true){
if((i__15188_16526 < count__15187_16525)){
var child_struct_16527 = chunk__15186_16524.cljs$core$IIndexed$_nth$arity$2(null,i__15188_16526);
var children_16528 = shadow.dom.dom_node(child_struct_16527);
if(cljs.core.seq_QMARK_(children_16528)){
var seq__15237_16529 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16528));
var chunk__15239_16530 = null;
var count__15240_16531 = (0);
var i__15241_16532 = (0);
while(true){
if((i__15241_16532 < count__15240_16531)){
var child_16534 = chunk__15239_16530.cljs$core$IIndexed$_nth$arity$2(null,i__15241_16532);
if(cljs.core.truth_(child_16534)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16534);


var G__16535 = seq__15237_16529;
var G__16536 = chunk__15239_16530;
var G__16537 = count__15240_16531;
var G__16538 = (i__15241_16532 + (1));
seq__15237_16529 = G__16535;
chunk__15239_16530 = G__16536;
count__15240_16531 = G__16537;
i__15241_16532 = G__16538;
continue;
} else {
var G__16539 = seq__15237_16529;
var G__16540 = chunk__15239_16530;
var G__16541 = count__15240_16531;
var G__16542 = (i__15241_16532 + (1));
seq__15237_16529 = G__16539;
chunk__15239_16530 = G__16540;
count__15240_16531 = G__16541;
i__15241_16532 = G__16542;
continue;
}
} else {
var temp__5804__auto___16544 = cljs.core.seq(seq__15237_16529);
if(temp__5804__auto___16544){
var seq__15237_16545__$1 = temp__5804__auto___16544;
if(cljs.core.chunked_seq_QMARK_(seq__15237_16545__$1)){
var c__5525__auto___16546 = cljs.core.chunk_first(seq__15237_16545__$1);
var G__16547 = cljs.core.chunk_rest(seq__15237_16545__$1);
var G__16548 = c__5525__auto___16546;
var G__16549 = cljs.core.count(c__5525__auto___16546);
var G__16550 = (0);
seq__15237_16529 = G__16547;
chunk__15239_16530 = G__16548;
count__15240_16531 = G__16549;
i__15241_16532 = G__16550;
continue;
} else {
var child_16551 = cljs.core.first(seq__15237_16545__$1);
if(cljs.core.truth_(child_16551)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16551);


var G__16552 = cljs.core.next(seq__15237_16545__$1);
var G__16553 = null;
var G__16554 = (0);
var G__16555 = (0);
seq__15237_16529 = G__16552;
chunk__15239_16530 = G__16553;
count__15240_16531 = G__16554;
i__15241_16532 = G__16555;
continue;
} else {
var G__16557 = cljs.core.next(seq__15237_16545__$1);
var G__16558 = null;
var G__16559 = (0);
var G__16560 = (0);
seq__15237_16529 = G__16557;
chunk__15239_16530 = G__16558;
count__15240_16531 = G__16559;
i__15241_16532 = G__16560;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16528);
}


var G__16561 = seq__15185_16523;
var G__16562 = chunk__15186_16524;
var G__16563 = count__15187_16525;
var G__16564 = (i__15188_16526 + (1));
seq__15185_16523 = G__16561;
chunk__15186_16524 = G__16562;
count__15187_16525 = G__16563;
i__15188_16526 = G__16564;
continue;
} else {
var temp__5804__auto___16565 = cljs.core.seq(seq__15185_16523);
if(temp__5804__auto___16565){
var seq__15185_16566__$1 = temp__5804__auto___16565;
if(cljs.core.chunked_seq_QMARK_(seq__15185_16566__$1)){
var c__5525__auto___16567 = cljs.core.chunk_first(seq__15185_16566__$1);
var G__16569 = cljs.core.chunk_rest(seq__15185_16566__$1);
var G__16570 = c__5525__auto___16567;
var G__16571 = cljs.core.count(c__5525__auto___16567);
var G__16572 = (0);
seq__15185_16523 = G__16569;
chunk__15186_16524 = G__16570;
count__15187_16525 = G__16571;
i__15188_16526 = G__16572;
continue;
} else {
var child_struct_16573 = cljs.core.first(seq__15185_16566__$1);
var children_16574 = shadow.dom.dom_node(child_struct_16573);
if(cljs.core.seq_QMARK_(children_16574)){
var seq__15261_16576 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16574));
var chunk__15263_16577 = null;
var count__15264_16578 = (0);
var i__15265_16579 = (0);
while(true){
if((i__15265_16579 < count__15264_16578)){
var child_16580 = chunk__15263_16577.cljs$core$IIndexed$_nth$arity$2(null,i__15265_16579);
if(cljs.core.truth_(child_16580)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16580);


var G__16582 = seq__15261_16576;
var G__16583 = chunk__15263_16577;
var G__16584 = count__15264_16578;
var G__16585 = (i__15265_16579 + (1));
seq__15261_16576 = G__16582;
chunk__15263_16577 = G__16583;
count__15264_16578 = G__16584;
i__15265_16579 = G__16585;
continue;
} else {
var G__16586 = seq__15261_16576;
var G__16587 = chunk__15263_16577;
var G__16588 = count__15264_16578;
var G__16589 = (i__15265_16579 + (1));
seq__15261_16576 = G__16586;
chunk__15263_16577 = G__16587;
count__15264_16578 = G__16588;
i__15265_16579 = G__16589;
continue;
}
} else {
var temp__5804__auto___16590__$1 = cljs.core.seq(seq__15261_16576);
if(temp__5804__auto___16590__$1){
var seq__15261_16591__$1 = temp__5804__auto___16590__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15261_16591__$1)){
var c__5525__auto___16592 = cljs.core.chunk_first(seq__15261_16591__$1);
var G__16593 = cljs.core.chunk_rest(seq__15261_16591__$1);
var G__16594 = c__5525__auto___16592;
var G__16595 = cljs.core.count(c__5525__auto___16592);
var G__16596 = (0);
seq__15261_16576 = G__16593;
chunk__15263_16577 = G__16594;
count__15264_16578 = G__16595;
i__15265_16579 = G__16596;
continue;
} else {
var child_16597 = cljs.core.first(seq__15261_16591__$1);
if(cljs.core.truth_(child_16597)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16597);


var G__16598 = cljs.core.next(seq__15261_16591__$1);
var G__16599 = null;
var G__16600 = (0);
var G__16601 = (0);
seq__15261_16576 = G__16598;
chunk__15263_16577 = G__16599;
count__15264_16578 = G__16600;
i__15265_16579 = G__16601;
continue;
} else {
var G__16602 = cljs.core.next(seq__15261_16591__$1);
var G__16603 = null;
var G__16604 = (0);
var G__16605 = (0);
seq__15261_16576 = G__16602;
chunk__15263_16577 = G__16603;
count__15264_16578 = G__16604;
i__15265_16579 = G__16605;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16574);
}


var G__16606 = cljs.core.next(seq__15185_16566__$1);
var G__16607 = null;
var G__16608 = (0);
var G__16609 = (0);
seq__15185_16523 = G__16606;
chunk__15186_16524 = G__16607;
count__15187_16525 = G__16608;
i__15188_16526 = G__16609;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__15387 = cljs.core.seq(node);
var chunk__15389 = null;
var count__15390 = (0);
var i__15391 = (0);
while(true){
if((i__15391 < count__15390)){
var n = chunk__15389.cljs$core$IIndexed$_nth$arity$2(null,i__15391);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16615 = seq__15387;
var G__16616 = chunk__15389;
var G__16617 = count__15390;
var G__16618 = (i__15391 + (1));
seq__15387 = G__16615;
chunk__15389 = G__16616;
count__15390 = G__16617;
i__15391 = G__16618;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15387);
if(temp__5804__auto__){
var seq__15387__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15387__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15387__$1);
var G__16619 = cljs.core.chunk_rest(seq__15387__$1);
var G__16620 = c__5525__auto__;
var G__16621 = cljs.core.count(c__5525__auto__);
var G__16622 = (0);
seq__15387 = G__16619;
chunk__15389 = G__16620;
count__15390 = G__16621;
i__15391 = G__16622;
continue;
} else {
var n = cljs.core.first(seq__15387__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16627 = cljs.core.next(seq__15387__$1);
var G__16628 = null;
var G__16629 = (0);
var G__16630 = (0);
seq__15387 = G__16627;
chunk__15389 = G__16628;
count__15390 = G__16629;
i__15391 = G__16630;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__15495 = arguments.length;
switch (G__15495) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__15530 = arguments.length;
switch (G__15530) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__15626 = arguments.length;
switch (G__15626) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16639 = arguments.length;
var i__5727__auto___16640 = (0);
while(true){
if((i__5727__auto___16640 < len__5726__auto___16639)){
args__5732__auto__.push((arguments[i__5727__auto___16640]));

var G__16641 = (i__5727__auto___16640 + (1));
i__5727__auto___16640 = G__16641;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__15674_16642 = cljs.core.seq(nodes);
var chunk__15675_16643 = null;
var count__15676_16644 = (0);
var i__15677_16645 = (0);
while(true){
if((i__15677_16645 < count__15676_16644)){
var node_16646 = chunk__15675_16643.cljs$core$IIndexed$_nth$arity$2(null,i__15677_16645);
fragment.appendChild(shadow.dom._to_dom(node_16646));


var G__16647 = seq__15674_16642;
var G__16648 = chunk__15675_16643;
var G__16649 = count__15676_16644;
var G__16650 = (i__15677_16645 + (1));
seq__15674_16642 = G__16647;
chunk__15675_16643 = G__16648;
count__15676_16644 = G__16649;
i__15677_16645 = G__16650;
continue;
} else {
var temp__5804__auto___16651 = cljs.core.seq(seq__15674_16642);
if(temp__5804__auto___16651){
var seq__15674_16652__$1 = temp__5804__auto___16651;
if(cljs.core.chunked_seq_QMARK_(seq__15674_16652__$1)){
var c__5525__auto___16653 = cljs.core.chunk_first(seq__15674_16652__$1);
var G__16655 = cljs.core.chunk_rest(seq__15674_16652__$1);
var G__16656 = c__5525__auto___16653;
var G__16657 = cljs.core.count(c__5525__auto___16653);
var G__16658 = (0);
seq__15674_16642 = G__16655;
chunk__15675_16643 = G__16656;
count__15676_16644 = G__16657;
i__15677_16645 = G__16658;
continue;
} else {
var node_16659 = cljs.core.first(seq__15674_16652__$1);
fragment.appendChild(shadow.dom._to_dom(node_16659));


var G__16660 = cljs.core.next(seq__15674_16652__$1);
var G__16661 = null;
var G__16662 = (0);
var G__16663 = (0);
seq__15674_16642 = G__16660;
chunk__15675_16643 = G__16661;
count__15676_16644 = G__16662;
i__15677_16645 = G__16663;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq15666){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15666));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__15685_16665 = cljs.core.seq(scripts);
var chunk__15686_16666 = null;
var count__15687_16667 = (0);
var i__15688_16668 = (0);
while(true){
if((i__15688_16668 < count__15687_16667)){
var vec__15697_16669 = chunk__15686_16666.cljs$core$IIndexed$_nth$arity$2(null,i__15688_16668);
var script_tag_16670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15697_16669,(0),null);
var script_body_16671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15697_16669,(1),null);
eval(script_body_16671);


var G__16672 = seq__15685_16665;
var G__16673 = chunk__15686_16666;
var G__16674 = count__15687_16667;
var G__16675 = (i__15688_16668 + (1));
seq__15685_16665 = G__16672;
chunk__15686_16666 = G__16673;
count__15687_16667 = G__16674;
i__15688_16668 = G__16675;
continue;
} else {
var temp__5804__auto___16676 = cljs.core.seq(seq__15685_16665);
if(temp__5804__auto___16676){
var seq__15685_16677__$1 = temp__5804__auto___16676;
if(cljs.core.chunked_seq_QMARK_(seq__15685_16677__$1)){
var c__5525__auto___16678 = cljs.core.chunk_first(seq__15685_16677__$1);
var G__16679 = cljs.core.chunk_rest(seq__15685_16677__$1);
var G__16680 = c__5525__auto___16678;
var G__16681 = cljs.core.count(c__5525__auto___16678);
var G__16682 = (0);
seq__15685_16665 = G__16679;
chunk__15686_16666 = G__16680;
count__15687_16667 = G__16681;
i__15688_16668 = G__16682;
continue;
} else {
var vec__15702_16683 = cljs.core.first(seq__15685_16677__$1);
var script_tag_16684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15702_16683,(0),null);
var script_body_16685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15702_16683,(1),null);
eval(script_body_16685);


var G__16686 = cljs.core.next(seq__15685_16677__$1);
var G__16687 = null;
var G__16688 = (0);
var G__16689 = (0);
seq__15685_16665 = G__16686;
chunk__15686_16666 = G__16687;
count__15687_16667 = G__16688;
i__15688_16668 = G__16689;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__15705){
var vec__15706 = p__15705;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15706,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15706,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__15717 = arguments.length;
switch (G__15717) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__15721 = cljs.core.seq(style_keys);
var chunk__15722 = null;
var count__15723 = (0);
var i__15724 = (0);
while(true){
if((i__15724 < count__15723)){
var it = chunk__15722.cljs$core$IIndexed$_nth$arity$2(null,i__15724);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16694 = seq__15721;
var G__16695 = chunk__15722;
var G__16696 = count__15723;
var G__16697 = (i__15724 + (1));
seq__15721 = G__16694;
chunk__15722 = G__16695;
count__15723 = G__16696;
i__15724 = G__16697;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15721);
if(temp__5804__auto__){
var seq__15721__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15721__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15721__$1);
var G__16699 = cljs.core.chunk_rest(seq__15721__$1);
var G__16700 = c__5525__auto__;
var G__16701 = cljs.core.count(c__5525__auto__);
var G__16702 = (0);
seq__15721 = G__16699;
chunk__15722 = G__16700;
count__15723 = G__16701;
i__15724 = G__16702;
continue;
} else {
var it = cljs.core.first(seq__15721__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16703 = cljs.core.next(seq__15721__$1);
var G__16704 = null;
var G__16705 = (0);
var G__16706 = (0);
seq__15721 = G__16703;
chunk__15722 = G__16704;
count__15723 = G__16705;
i__15724 = G__16706;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15736,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15747 = k15736;
var G__15747__$1 = (((G__15747 instanceof cljs.core.Keyword))?G__15747.fqn:null);
switch (G__15747__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15736,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15754){
var vec__15756 = p__15754;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15756,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15756,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15735){
var self__ = this;
var G__15735__$1 = this;
return (new cljs.core.RecordIter((0),G__15735__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15737,other15738){
var self__ = this;
var this15737__$1 = this;
return (((!((other15738 == null)))) && ((((this15737__$1.constructor === other15738.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15737__$1.x,other15738.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15737__$1.y,other15738.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15737__$1.__extmap,other15738.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15736){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15806 = k15736;
var G__15806__$1 = (((G__15806 instanceof cljs.core.Keyword))?G__15806.fqn:null);
switch (G__15806__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15736);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15735){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15811 = cljs.core.keyword_identical_QMARK_;
var expr__15812 = k__5309__auto__;
if(cljs.core.truth_((pred__15811.cljs$core$IFn$_invoke$arity$2 ? pred__15811.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15812) : pred__15811.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__15812)))){
return (new shadow.dom.Coordinate(G__15735,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15811.cljs$core$IFn$_invoke$arity$2 ? pred__15811.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15812) : pred__15811.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__15812)))){
return (new shadow.dom.Coordinate(self__.x,G__15735,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15735),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15735){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__15735,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__15742){
var extmap__5342__auto__ = (function (){var G__15837 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15742,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__15742)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15837);
} else {
return G__15837;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__15742),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__15742),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15854,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15888 = k15854;
var G__15888__$1 = (((G__15888 instanceof cljs.core.Keyword))?G__15888.fqn:null);
switch (G__15888__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15854,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15891){
var vec__15892 = p__15891;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15892,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15892,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15853){
var self__ = this;
var G__15853__$1 = this;
return (new cljs.core.RecordIter((0),G__15853__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15855,other15856){
var self__ = this;
var this15855__$1 = this;
return (((!((other15856 == null)))) && ((((this15855__$1.constructor === other15856.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15855__$1.w,other15856.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15855__$1.h,other15856.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15855__$1.__extmap,other15856.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15854){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16011 = k15854;
var G__16011__$1 = (((G__16011 instanceof cljs.core.Keyword))?G__16011.fqn:null);
switch (G__16011__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15854);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15853){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16022 = cljs.core.keyword_identical_QMARK_;
var expr__16023 = k__5309__auto__;
if(cljs.core.truth_((pred__16022.cljs$core$IFn$_invoke$arity$2 ? pred__16022.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16023) : pred__16022.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__16023)))){
return (new shadow.dom.Size(G__15853,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16022.cljs$core$IFn$_invoke$arity$2 ? pred__16022.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16023) : pred__16022.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__16023)))){
return (new shadow.dom.Size(self__.w,G__15853,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15853),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15853){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15853,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15859){
var extmap__5342__auto__ = (function (){var G__16073 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15859,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15859)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16073);
} else {
return G__16073;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15859),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15859),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__16732 = (i + (1));
var G__16733 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16732;
ret = G__16733;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16176){
var vec__16178 = p__16176;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16178,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16186 = arguments.length;
switch (G__16186) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16741 = ps;
var G__16742 = (i + (1));
el__$1 = G__16741;
i = G__16742;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__16239 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16239,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16239,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16239,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16248_16744 = cljs.core.seq(props);
var chunk__16249_16745 = null;
var count__16250_16746 = (0);
var i__16251_16747 = (0);
while(true){
if((i__16251_16747 < count__16250_16746)){
var vec__16265_16748 = chunk__16249_16745.cljs$core$IIndexed$_nth$arity$2(null,i__16251_16747);
var k_16749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16265_16748,(0),null);
var v_16750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16265_16748,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16749);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16749),v_16750);


var G__16752 = seq__16248_16744;
var G__16753 = chunk__16249_16745;
var G__16754 = count__16250_16746;
var G__16755 = (i__16251_16747 + (1));
seq__16248_16744 = G__16752;
chunk__16249_16745 = G__16753;
count__16250_16746 = G__16754;
i__16251_16747 = G__16755;
continue;
} else {
var temp__5804__auto___16756 = cljs.core.seq(seq__16248_16744);
if(temp__5804__auto___16756){
var seq__16248_16757__$1 = temp__5804__auto___16756;
if(cljs.core.chunked_seq_QMARK_(seq__16248_16757__$1)){
var c__5525__auto___16758 = cljs.core.chunk_first(seq__16248_16757__$1);
var G__16759 = cljs.core.chunk_rest(seq__16248_16757__$1);
var G__16760 = c__5525__auto___16758;
var G__16761 = cljs.core.count(c__5525__auto___16758);
var G__16762 = (0);
seq__16248_16744 = G__16759;
chunk__16249_16745 = G__16760;
count__16250_16746 = G__16761;
i__16251_16747 = G__16762;
continue;
} else {
var vec__16272_16763 = cljs.core.first(seq__16248_16757__$1);
var k_16764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16272_16763,(0),null);
var v_16765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16272_16763,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16764);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16764),v_16765);


var G__16770 = cljs.core.next(seq__16248_16757__$1);
var G__16771 = null;
var G__16772 = (0);
var G__16773 = (0);
seq__16248_16744 = G__16770;
chunk__16249_16745 = G__16771;
count__16250_16746 = G__16772;
i__16251_16747 = G__16773;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__16293 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16293,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16293,(1),null);
var seq__16296_16778 = cljs.core.seq(node_children);
var chunk__16298_16779 = null;
var count__16299_16780 = (0);
var i__16300_16782 = (0);
while(true){
if((i__16300_16782 < count__16299_16780)){
var child_struct_16783 = chunk__16298_16779.cljs$core$IIndexed$_nth$arity$2(null,i__16300_16782);
if((!((child_struct_16783 == null)))){
if(typeof child_struct_16783 === 'string'){
var text_16784 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16784),child_struct_16783].join(''));
} else {
var children_16785 = shadow.dom.svg_node(child_struct_16783);
if(cljs.core.seq_QMARK_(children_16785)){
var seq__16351_16786 = cljs.core.seq(children_16785);
var chunk__16353_16787 = null;
var count__16354_16788 = (0);
var i__16355_16789 = (0);
while(true){
if((i__16355_16789 < count__16354_16788)){
var child_16790 = chunk__16353_16787.cljs$core$IIndexed$_nth$arity$2(null,i__16355_16789);
if(cljs.core.truth_(child_16790)){
node.appendChild(child_16790);


var G__16791 = seq__16351_16786;
var G__16792 = chunk__16353_16787;
var G__16793 = count__16354_16788;
var G__16794 = (i__16355_16789 + (1));
seq__16351_16786 = G__16791;
chunk__16353_16787 = G__16792;
count__16354_16788 = G__16793;
i__16355_16789 = G__16794;
continue;
} else {
var G__16795 = seq__16351_16786;
var G__16796 = chunk__16353_16787;
var G__16797 = count__16354_16788;
var G__16798 = (i__16355_16789 + (1));
seq__16351_16786 = G__16795;
chunk__16353_16787 = G__16796;
count__16354_16788 = G__16797;
i__16355_16789 = G__16798;
continue;
}
} else {
var temp__5804__auto___16799 = cljs.core.seq(seq__16351_16786);
if(temp__5804__auto___16799){
var seq__16351_16800__$1 = temp__5804__auto___16799;
if(cljs.core.chunked_seq_QMARK_(seq__16351_16800__$1)){
var c__5525__auto___16801 = cljs.core.chunk_first(seq__16351_16800__$1);
var G__16802 = cljs.core.chunk_rest(seq__16351_16800__$1);
var G__16803 = c__5525__auto___16801;
var G__16804 = cljs.core.count(c__5525__auto___16801);
var G__16805 = (0);
seq__16351_16786 = G__16802;
chunk__16353_16787 = G__16803;
count__16354_16788 = G__16804;
i__16355_16789 = G__16805;
continue;
} else {
var child_16806 = cljs.core.first(seq__16351_16800__$1);
if(cljs.core.truth_(child_16806)){
node.appendChild(child_16806);


var G__16807 = cljs.core.next(seq__16351_16800__$1);
var G__16808 = null;
var G__16809 = (0);
var G__16810 = (0);
seq__16351_16786 = G__16807;
chunk__16353_16787 = G__16808;
count__16354_16788 = G__16809;
i__16355_16789 = G__16810;
continue;
} else {
var G__16811 = cljs.core.next(seq__16351_16800__$1);
var G__16812 = null;
var G__16813 = (0);
var G__16814 = (0);
seq__16351_16786 = G__16811;
chunk__16353_16787 = G__16812;
count__16354_16788 = G__16813;
i__16355_16789 = G__16814;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16785);
}
}


var G__16815 = seq__16296_16778;
var G__16816 = chunk__16298_16779;
var G__16817 = count__16299_16780;
var G__16818 = (i__16300_16782 + (1));
seq__16296_16778 = G__16815;
chunk__16298_16779 = G__16816;
count__16299_16780 = G__16817;
i__16300_16782 = G__16818;
continue;
} else {
var G__16820 = seq__16296_16778;
var G__16821 = chunk__16298_16779;
var G__16822 = count__16299_16780;
var G__16823 = (i__16300_16782 + (1));
seq__16296_16778 = G__16820;
chunk__16298_16779 = G__16821;
count__16299_16780 = G__16822;
i__16300_16782 = G__16823;
continue;
}
} else {
var temp__5804__auto___16824 = cljs.core.seq(seq__16296_16778);
if(temp__5804__auto___16824){
var seq__16296_16825__$1 = temp__5804__auto___16824;
if(cljs.core.chunked_seq_QMARK_(seq__16296_16825__$1)){
var c__5525__auto___16826 = cljs.core.chunk_first(seq__16296_16825__$1);
var G__16827 = cljs.core.chunk_rest(seq__16296_16825__$1);
var G__16828 = c__5525__auto___16826;
var G__16829 = cljs.core.count(c__5525__auto___16826);
var G__16830 = (0);
seq__16296_16778 = G__16827;
chunk__16298_16779 = G__16828;
count__16299_16780 = G__16829;
i__16300_16782 = G__16830;
continue;
} else {
var child_struct_16831 = cljs.core.first(seq__16296_16825__$1);
if((!((child_struct_16831 == null)))){
if(typeof child_struct_16831 === 'string'){
var text_16833 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16833),child_struct_16831].join(''));
} else {
var children_16834 = shadow.dom.svg_node(child_struct_16831);
if(cljs.core.seq_QMARK_(children_16834)){
var seq__16373_16835 = cljs.core.seq(children_16834);
var chunk__16375_16836 = null;
var count__16376_16837 = (0);
var i__16377_16838 = (0);
while(true){
if((i__16377_16838 < count__16376_16837)){
var child_16839 = chunk__16375_16836.cljs$core$IIndexed$_nth$arity$2(null,i__16377_16838);
if(cljs.core.truth_(child_16839)){
node.appendChild(child_16839);


var G__16841 = seq__16373_16835;
var G__16842 = chunk__16375_16836;
var G__16843 = count__16376_16837;
var G__16844 = (i__16377_16838 + (1));
seq__16373_16835 = G__16841;
chunk__16375_16836 = G__16842;
count__16376_16837 = G__16843;
i__16377_16838 = G__16844;
continue;
} else {
var G__16845 = seq__16373_16835;
var G__16846 = chunk__16375_16836;
var G__16847 = count__16376_16837;
var G__16848 = (i__16377_16838 + (1));
seq__16373_16835 = G__16845;
chunk__16375_16836 = G__16846;
count__16376_16837 = G__16847;
i__16377_16838 = G__16848;
continue;
}
} else {
var temp__5804__auto___16850__$1 = cljs.core.seq(seq__16373_16835);
if(temp__5804__auto___16850__$1){
var seq__16373_16851__$1 = temp__5804__auto___16850__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16373_16851__$1)){
var c__5525__auto___16852 = cljs.core.chunk_first(seq__16373_16851__$1);
var G__16853 = cljs.core.chunk_rest(seq__16373_16851__$1);
var G__16854 = c__5525__auto___16852;
var G__16855 = cljs.core.count(c__5525__auto___16852);
var G__16856 = (0);
seq__16373_16835 = G__16853;
chunk__16375_16836 = G__16854;
count__16376_16837 = G__16855;
i__16377_16838 = G__16856;
continue;
} else {
var child_16857 = cljs.core.first(seq__16373_16851__$1);
if(cljs.core.truth_(child_16857)){
node.appendChild(child_16857);


var G__16859 = cljs.core.next(seq__16373_16851__$1);
var G__16860 = null;
var G__16861 = (0);
var G__16862 = (0);
seq__16373_16835 = G__16859;
chunk__16375_16836 = G__16860;
count__16376_16837 = G__16861;
i__16377_16838 = G__16862;
continue;
} else {
var G__16863 = cljs.core.next(seq__16373_16851__$1);
var G__16864 = null;
var G__16865 = (0);
var G__16866 = (0);
seq__16373_16835 = G__16863;
chunk__16375_16836 = G__16864;
count__16376_16837 = G__16865;
i__16377_16838 = G__16866;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16834);
}
}


var G__16867 = cljs.core.next(seq__16296_16825__$1);
var G__16868 = null;
var G__16869 = (0);
var G__16870 = (0);
seq__16296_16778 = G__16867;
chunk__16298_16779 = G__16868;
count__16299_16780 = G__16869;
i__16300_16782 = G__16870;
continue;
} else {
var G__16871 = cljs.core.next(seq__16296_16825__$1);
var G__16872 = null;
var G__16873 = (0);
var G__16874 = (0);
seq__16296_16778 = G__16871;
chunk__16298_16779 = G__16872;
count__16299_16780 = G__16873;
i__16300_16782 = G__16874;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16876 = arguments.length;
var i__5727__auto___16877 = (0);
while(true){
if((i__5727__auto___16877 < len__5726__auto___16876)){
args__5732__auto__.push((arguments[i__5727__auto___16877]));

var G__16879 = (i__5727__auto___16877 + (1));
i__5727__auto___16877 = G__16879;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16410){
var G__16411 = cljs.core.first(seq16410);
var seq16410__$1 = cljs.core.next(seq16410);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16411,seq16410__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
