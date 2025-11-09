goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18090 = (function (f,blockable,meta18091){
this.f = f;
this.blockable = blockable;
this.meta18091 = meta18091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18092,meta18091__$1){
var self__ = this;
var _18092__$1 = this;
return (new cljs.core.async.t_cljs$core$async18090(self__.f,self__.blockable,meta18091__$1));
}));

(cljs.core.async.t_cljs$core$async18090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18092){
var self__ = this;
var _18092__$1 = this;
return self__.meta18091;
}));

(cljs.core.async.t_cljs$core$async18090.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18090.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18091","meta18091",-544439464,null)], null);
}));

(cljs.core.async.t_cljs$core$async18090.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18090");

(cljs.core.async.t_cljs$core$async18090.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18090");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18090.
 */
cljs.core.async.__GT_t_cljs$core$async18090 = (function cljs$core$async$__GT_t_cljs$core$async18090(f,blockable,meta18091){
return (new cljs.core.async.t_cljs$core$async18090(f,blockable,meta18091));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18084 = arguments.length;
switch (G__18084) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async18090(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18128 = arguments.length;
switch (G__18128) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18134 = arguments.length;
switch (G__18134) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18147 = arguments.length;
switch (G__18147) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20398 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20398) : fn1.call(null,val_20398));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20398) : fn1.call(null,val_20398));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18163 = arguments.length;
switch (G__18163) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___20404 = n;
var x_20405 = (0);
while(true){
if((x_20405 < n__5593__auto___20404)){
(a[x_20405] = x_20405);

var G__20406 = (x_20405 + (1));
x_20405 = G__20406;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18171 = (function (flag,meta18172){
this.flag = flag;
this.meta18172 = meta18172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18173,meta18172__$1){
var self__ = this;
var _18173__$1 = this;
return (new cljs.core.async.t_cljs$core$async18171(self__.flag,meta18172__$1));
}));

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18173){
var self__ = this;
var _18173__$1 = this;
return self__.meta18172;
}));

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18172","meta18172",-1954329518,null)], null);
}));

(cljs.core.async.t_cljs$core$async18171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18171");

(cljs.core.async.t_cljs$core$async18171.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18171.
 */
cljs.core.async.__GT_t_cljs$core$async18171 = (function cljs$core$async$__GT_t_cljs$core$async18171(flag,meta18172){
return (new cljs.core.async.t_cljs$core$async18171(flag,meta18172));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async18171(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18195 = (function (flag,cb,meta18196){
this.flag = flag;
this.cb = cb;
this.meta18196 = meta18196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18197,meta18196__$1){
var self__ = this;
var _18197__$1 = this;
return (new cljs.core.async.t_cljs$core$async18195(self__.flag,self__.cb,meta18196__$1));
}));

(cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18197){
var self__ = this;
var _18197__$1 = this;
return self__.meta18196;
}));

(cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18196","meta18196",1118025744,null)], null);
}));

(cljs.core.async.t_cljs$core$async18195.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18195");

(cljs.core.async.t_cljs$core$async18195.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18195");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18195.
 */
cljs.core.async.__GT_t_cljs$core$async18195 = (function cljs$core$async$__GT_t_cljs$core$async18195(flag,cb,meta18196){
return (new cljs.core.async.t_cljs$core$async18195(flag,cb,meta18196));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async18195(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18201_SHARP_){
var G__18225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18201_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18225) : fret.call(null,G__18225));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18202_SHARP_){
var G__18226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18202_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18226) : fret.call(null,G__18226));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20410 = (i + (1));
i = G__20410;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20412 = arguments.length;
var i__5727__auto___20413 = (0);
while(true){
if((i__5727__auto___20413 < len__5726__auto___20412)){
args__5732__auto__.push((arguments[i__5727__auto___20413]));

var G__20415 = (i__5727__auto___20413 + (1));
i__5727__auto___20413 = G__20415;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18251){
var map__18252 = p__18251;
var map__18252__$1 = cljs.core.__destructure_map(map__18252);
var opts = map__18252__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18240){
var G__18245 = cljs.core.first(seq18240);
var seq18240__$1 = cljs.core.next(seq18240);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18245,seq18240__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18277 = arguments.length;
switch (G__18277) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17980__auto___20417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_18319){
var state_val_18320 = (state_18319[(1)]);
if((state_val_18320 === (7))){
var inst_18314 = (state_18319[(2)]);
var state_18319__$1 = state_18319;
var statearr_18322_20418 = state_18319__$1;
(statearr_18322_20418[(2)] = inst_18314);

(statearr_18322_20418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18320 === (1))){
var state_18319__$1 = state_18319;
var statearr_18323_20419 = state_18319__$1;
(statearr_18323_20419[(2)] = null);

(statearr_18323_20419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18320 === (4))){
var inst_18296 = (state_18319[(7)]);
var inst_18296__$1 = (state_18319[(2)]);
var inst_18298 = (inst_18296__$1 == null);
var state_18319__$1 = (function (){var statearr_18324 = state_18319;
(statearr_18324[(7)] = inst_18296__$1);

return statearr_18324;
})();
if(cljs.core.truth_(inst_18298)){
var statearr_18325_20421 = state_18319__$1;
(statearr_18325_20421[(1)] = (5));

} else {
var statearr_18326_20422 = state_18319__$1;
(statearr_18326_20422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18320 === (13))){
var state_18319__$1 = state_18319;
var statearr_18328_20423 = state_18319__$1;
(statearr_18328_20423[(2)] = null);

(statearr_18328_20423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18320 === (6))){
var inst_18296 = (state_18319[(7)]);
var state_18319__$1 = state_18319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18319__$1,(11),to,inst_18296);
} else {
if((state_val_18320 === (3))){
var inst_18316 = (state_18319[(2)]);
var state_18319__$1 = state_18319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18319__$1,inst_18316);
} else {
if((state_val_18320 === (12))){
var state_18319__$1 = state_18319;
var statearr_18329_20424 = state_18319__$1;
(statearr_18329_20424[(2)] = null);

(statearr_18329_20424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18320 === (2))){
var state_18319__$1 = state_18319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18319__$1,(4),from);
} else {
if((state_val_18320 === (11))){
var inst_18307 = (state_18319[(2)]);
var state_18319__$1 = state_18319;
if(cljs.core.truth_(inst_18307)){
var statearr_18330_20425 = state_18319__$1;
(statearr_18330_20425[(1)] = (12));

} else {
var statearr_18331_20426 = state_18319__$1;
(statearr_18331_20426[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18320 === (9))){
var state_18319__$1 = state_18319;
var statearr_18332_20427 = state_18319__$1;
(statearr_18332_20427[(2)] = null);

(statearr_18332_20427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18320 === (5))){
var state_18319__$1 = state_18319;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18334_20428 = state_18319__$1;
(statearr_18334_20428[(1)] = (8));

} else {
var statearr_18335_20429 = state_18319__$1;
(statearr_18335_20429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18320 === (14))){
var inst_18312 = (state_18319[(2)]);
var state_18319__$1 = state_18319;
var statearr_18336_20430 = state_18319__$1;
(statearr_18336_20430[(2)] = inst_18312);

(statearr_18336_20430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18320 === (10))){
var inst_18304 = (state_18319[(2)]);
var state_18319__$1 = state_18319;
var statearr_18337_20431 = state_18319__$1;
(statearr_18337_20431[(2)] = inst_18304);

(statearr_18337_20431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18320 === (8))){
var inst_18301 = cljs.core.async.close_BANG_(to);
var state_18319__$1 = state_18319;
var statearr_18338_20432 = state_18319__$1;
(statearr_18338_20432[(2)] = inst_18301);

(statearr_18338_20432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17758__auto__ = null;
var cljs$core$async$state_machine__17758__auto____0 = (function (){
var statearr_18339 = [null,null,null,null,null,null,null,null];
(statearr_18339[(0)] = cljs$core$async$state_machine__17758__auto__);

(statearr_18339[(1)] = (1));

return statearr_18339;
});
var cljs$core$async$state_machine__17758__auto____1 = (function (state_18319){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_18319);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e18340){var ex__17761__auto__ = e18340;
var statearr_18341_20433 = state_18319;
(statearr_18341_20433[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_18319[(4)]))){
var statearr_18343_20434 = state_18319;
(statearr_18343_20434[(1)] = cljs.core.first((state_18319[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20435 = state_18319;
state_18319 = G__20435;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$state_machine__17758__auto__ = function(state_18319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17758__auto____1.call(this,state_18319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17758__auto____0;
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17758__auto____1;
return cljs$core$async$state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18344 = f__17981__auto__();
(statearr_18344[(6)] = c__17980__auto___20417);

return statearr_18344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__18346){
var vec__18347 = p__18346;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18347,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18347,(1),null);
var job = vec__18347;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17980__auto___20437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_18354){
var state_val_18355 = (state_18354[(1)]);
if((state_val_18355 === (1))){
var state_18354__$1 = state_18354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18354__$1,(2),res,v);
} else {
if((state_val_18355 === (2))){
var inst_18351 = (state_18354[(2)]);
var inst_18352 = cljs.core.async.close_BANG_(res);
var state_18354__$1 = (function (){var statearr_18356 = state_18354;
(statearr_18356[(7)] = inst_18351);

return statearr_18356;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18354__$1,inst_18352);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____0 = (function (){
var statearr_18357 = [null,null,null,null,null,null,null,null];
(statearr_18357[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__);

(statearr_18357[(1)] = (1));

return statearr_18357;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____1 = (function (state_18354){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_18354);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e18359){var ex__17761__auto__ = e18359;
var statearr_18360_20441 = state_18354;
(statearr_18360_20441[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_18354[(4)]))){
var statearr_18361_20442 = state_18354;
(statearr_18361_20442[(1)] = cljs.core.first((state_18354[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20444 = state_18354;
state_18354 = G__20444;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__ = function(state_18354){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____1.call(this,state_18354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18362 = f__17981__auto__();
(statearr_18362[(6)] = c__17980__auto___20437);

return statearr_18362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18363){
var vec__18364 = p__18363;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18364,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18364,(1),null);
var job = vec__18364;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___20445 = n;
var __20446 = (0);
while(true){
if((__20446 < n__5593__auto___20445)){
var G__18368_20448 = type;
var G__18368_20449__$1 = (((G__18368_20448 instanceof cljs.core.Keyword))?G__18368_20448.fqn:null);
switch (G__18368_20449__$1) {
case "compute":
var c__17980__auto___20451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20446,c__17980__auto___20451,G__18368_20448,G__18368_20449__$1,n__5593__auto___20445,jobs,results,process__$1,async){
return (function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = ((function (__20446,c__17980__auto___20451,G__18368_20448,G__18368_20449__$1,n__5593__auto___20445,jobs,results,process__$1,async){
return (function (state_18381){
var state_val_18382 = (state_18381[(1)]);
if((state_val_18382 === (1))){
var state_18381__$1 = state_18381;
var statearr_18384_20452 = state_18381__$1;
(statearr_18384_20452[(2)] = null);

(statearr_18384_20452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (2))){
var state_18381__$1 = state_18381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18381__$1,(4),jobs);
} else {
if((state_val_18382 === (3))){
var inst_18379 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18381__$1,inst_18379);
} else {
if((state_val_18382 === (4))){
var inst_18371 = (state_18381[(2)]);
var inst_18372 = process__$1(inst_18371);
var state_18381__$1 = state_18381;
if(cljs.core.truth_(inst_18372)){
var statearr_18385_20453 = state_18381__$1;
(statearr_18385_20453[(1)] = (5));

} else {
var statearr_18386_20454 = state_18381__$1;
(statearr_18386_20454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (5))){
var state_18381__$1 = state_18381;
var statearr_18388_20455 = state_18381__$1;
(statearr_18388_20455[(2)] = null);

(statearr_18388_20455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (6))){
var state_18381__$1 = state_18381;
var statearr_18389_20456 = state_18381__$1;
(statearr_18389_20456[(2)] = null);

(statearr_18389_20456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (7))){
var inst_18377 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
var statearr_18390_20457 = state_18381__$1;
(statearr_18390_20457[(2)] = inst_18377);

(statearr_18390_20457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20446,c__17980__auto___20451,G__18368_20448,G__18368_20449__$1,n__5593__auto___20445,jobs,results,process__$1,async))
;
return ((function (__20446,switch__17757__auto__,c__17980__auto___20451,G__18368_20448,G__18368_20449__$1,n__5593__auto___20445,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____0 = (function (){
var statearr_18391 = [null,null,null,null,null,null,null];
(statearr_18391[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__);

(statearr_18391[(1)] = (1));

return statearr_18391;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____1 = (function (state_18381){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_18381);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e18392){var ex__17761__auto__ = e18392;
var statearr_18394_20458 = state_18381;
(statearr_18394_20458[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_18381[(4)]))){
var statearr_18395_20459 = state_18381;
(statearr_18395_20459[(1)] = cljs.core.first((state_18381[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20460 = state_18381;
state_18381 = G__20460;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__ = function(state_18381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____1.call(this,state_18381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__;
})()
;})(__20446,switch__17757__auto__,c__17980__auto___20451,G__18368_20448,G__18368_20449__$1,n__5593__auto___20445,jobs,results,process__$1,async))
})();
var state__17982__auto__ = (function (){var statearr_18396 = f__17981__auto__();
(statearr_18396[(6)] = c__17980__auto___20451);

return statearr_18396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
});})(__20446,c__17980__auto___20451,G__18368_20448,G__18368_20449__$1,n__5593__auto___20445,jobs,results,process__$1,async))
);


break;
case "async":
var c__17980__auto___20461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20446,c__17980__auto___20461,G__18368_20448,G__18368_20449__$1,n__5593__auto___20445,jobs,results,process__$1,async){
return (function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = ((function (__20446,c__17980__auto___20461,G__18368_20448,G__18368_20449__$1,n__5593__auto___20445,jobs,results,process__$1,async){
return (function (state_18410){
var state_val_18411 = (state_18410[(1)]);
if((state_val_18411 === (1))){
var state_18410__$1 = state_18410;
var statearr_18412_20462 = state_18410__$1;
(statearr_18412_20462[(2)] = null);

(statearr_18412_20462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (2))){
var state_18410__$1 = state_18410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18410__$1,(4),jobs);
} else {
if((state_val_18411 === (3))){
var inst_18408 = (state_18410[(2)]);
var state_18410__$1 = state_18410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18410__$1,inst_18408);
} else {
if((state_val_18411 === (4))){
var inst_18399 = (state_18410[(2)]);
var inst_18400 = async(inst_18399);
var state_18410__$1 = state_18410;
if(cljs.core.truth_(inst_18400)){
var statearr_18414_20463 = state_18410__$1;
(statearr_18414_20463[(1)] = (5));

} else {
var statearr_18415_20464 = state_18410__$1;
(statearr_18415_20464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (5))){
var state_18410__$1 = state_18410;
var statearr_18416_20465 = state_18410__$1;
(statearr_18416_20465[(2)] = null);

(statearr_18416_20465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (6))){
var state_18410__$1 = state_18410;
var statearr_18417_20466 = state_18410__$1;
(statearr_18417_20466[(2)] = null);

(statearr_18417_20466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (7))){
var inst_18406 = (state_18410[(2)]);
var state_18410__$1 = state_18410;
var statearr_18419_20468 = state_18410__$1;
(statearr_18419_20468[(2)] = inst_18406);

(statearr_18419_20468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20446,c__17980__auto___20461,G__18368_20448,G__18368_20449__$1,n__5593__auto___20445,jobs,results,process__$1,async))
;
return ((function (__20446,switch__17757__auto__,c__17980__auto___20461,G__18368_20448,G__18368_20449__$1,n__5593__auto___20445,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____0 = (function (){
var statearr_18420 = [null,null,null,null,null,null,null];
(statearr_18420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__);

(statearr_18420[(1)] = (1));

return statearr_18420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____1 = (function (state_18410){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_18410);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e18421){var ex__17761__auto__ = e18421;
var statearr_18422_20469 = state_18410;
(statearr_18422_20469[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_18410[(4)]))){
var statearr_18423_20470 = state_18410;
(statearr_18423_20470[(1)] = cljs.core.first((state_18410[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20471 = state_18410;
state_18410 = G__20471;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__ = function(state_18410){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____1.call(this,state_18410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__;
})()
;})(__20446,switch__17757__auto__,c__17980__auto___20461,G__18368_20448,G__18368_20449__$1,n__5593__auto___20445,jobs,results,process__$1,async))
})();
var state__17982__auto__ = (function (){var statearr_18424 = f__17981__auto__();
(statearr_18424[(6)] = c__17980__auto___20461);

return statearr_18424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
});})(__20446,c__17980__auto___20461,G__18368_20448,G__18368_20449__$1,n__5593__auto___20445,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18368_20449__$1)].join('')));

}

var G__20472 = (__20446 + (1));
__20446 = G__20472;
continue;
} else {
}
break;
}

var c__17980__auto___20473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_18447){
var state_val_18448 = (state_18447[(1)]);
if((state_val_18448 === (7))){
var inst_18443 = (state_18447[(2)]);
var state_18447__$1 = state_18447;
var statearr_18450_20475 = state_18447__$1;
(statearr_18450_20475[(2)] = inst_18443);

(statearr_18450_20475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18448 === (1))){
var state_18447__$1 = state_18447;
var statearr_18451_20476 = state_18447__$1;
(statearr_18451_20476[(2)] = null);

(statearr_18451_20476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18448 === (4))){
var inst_18428 = (state_18447[(7)]);
var inst_18428__$1 = (state_18447[(2)]);
var inst_18429 = (inst_18428__$1 == null);
var state_18447__$1 = (function (){var statearr_18452 = state_18447;
(statearr_18452[(7)] = inst_18428__$1);

return statearr_18452;
})();
if(cljs.core.truth_(inst_18429)){
var statearr_18453_20478 = state_18447__$1;
(statearr_18453_20478[(1)] = (5));

} else {
var statearr_18454_20479 = state_18447__$1;
(statearr_18454_20479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18448 === (6))){
var inst_18433 = (state_18447[(8)]);
var inst_18428 = (state_18447[(7)]);
var inst_18433__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18434 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18435 = [inst_18428,inst_18433__$1];
var inst_18436 = (new cljs.core.PersistentVector(null,2,(5),inst_18434,inst_18435,null));
var state_18447__$1 = (function (){var statearr_18455 = state_18447;
(statearr_18455[(8)] = inst_18433__$1);

return statearr_18455;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18447__$1,(8),jobs,inst_18436);
} else {
if((state_val_18448 === (3))){
var inst_18445 = (state_18447[(2)]);
var state_18447__$1 = state_18447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18447__$1,inst_18445);
} else {
if((state_val_18448 === (2))){
var state_18447__$1 = state_18447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18447__$1,(4),from);
} else {
if((state_val_18448 === (9))){
var inst_18440 = (state_18447[(2)]);
var state_18447__$1 = (function (){var statearr_18457 = state_18447;
(statearr_18457[(9)] = inst_18440);

return statearr_18457;
})();
var statearr_18458_20480 = state_18447__$1;
(statearr_18458_20480[(2)] = null);

(statearr_18458_20480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18448 === (5))){
var inst_18431 = cljs.core.async.close_BANG_(jobs);
var state_18447__$1 = state_18447;
var statearr_18459_20481 = state_18447__$1;
(statearr_18459_20481[(2)] = inst_18431);

(statearr_18459_20481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18448 === (8))){
var inst_18433 = (state_18447[(8)]);
var inst_18438 = (state_18447[(2)]);
var state_18447__$1 = (function (){var statearr_18460 = state_18447;
(statearr_18460[(10)] = inst_18438);

return statearr_18460;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18447__$1,(9),results,inst_18433);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____0 = (function (){
var statearr_18461 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__);

(statearr_18461[(1)] = (1));

return statearr_18461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____1 = (function (state_18447){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_18447);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e18463){var ex__17761__auto__ = e18463;
var statearr_18464_20483 = state_18447;
(statearr_18464_20483[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_18447[(4)]))){
var statearr_18465_20484 = state_18447;
(statearr_18465_20484[(1)] = cljs.core.first((state_18447[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20485 = state_18447;
state_18447 = G__20485;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__ = function(state_18447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____1.call(this,state_18447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18466 = f__17981__auto__();
(statearr_18466[(6)] = c__17980__auto___20473);

return statearr_18466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


var c__17980__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_18505){
var state_val_18506 = (state_18505[(1)]);
if((state_val_18506 === (7))){
var inst_18501 = (state_18505[(2)]);
var state_18505__$1 = state_18505;
var statearr_18507_20488 = state_18505__$1;
(statearr_18507_20488[(2)] = inst_18501);

(statearr_18507_20488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18506 === (20))){
var state_18505__$1 = state_18505;
var statearr_18508_20489 = state_18505__$1;
(statearr_18508_20489[(2)] = null);

(statearr_18508_20489[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18506 === (1))){
var state_18505__$1 = state_18505;
var statearr_18510_20490 = state_18505__$1;
(statearr_18510_20490[(2)] = null);

(statearr_18510_20490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18506 === (4))){
var inst_18469 = (state_18505[(7)]);
var inst_18469__$1 = (state_18505[(2)]);
var inst_18470 = (inst_18469__$1 == null);
var state_18505__$1 = (function (){var statearr_18511 = state_18505;
(statearr_18511[(7)] = inst_18469__$1);

return statearr_18511;
})();
if(cljs.core.truth_(inst_18470)){
var statearr_18512_20492 = state_18505__$1;
(statearr_18512_20492[(1)] = (5));

} else {
var statearr_18513_20493 = state_18505__$1;
(statearr_18513_20493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18506 === (15))){
var inst_18483 = (state_18505[(8)]);
var state_18505__$1 = state_18505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18505__$1,(18),to,inst_18483);
} else {
if((state_val_18506 === (21))){
var inst_18496 = (state_18505[(2)]);
var state_18505__$1 = state_18505;
var statearr_18514_20495 = state_18505__$1;
(statearr_18514_20495[(2)] = inst_18496);

(statearr_18514_20495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18506 === (13))){
var inst_18498 = (state_18505[(2)]);
var state_18505__$1 = (function (){var statearr_18515 = state_18505;
(statearr_18515[(9)] = inst_18498);

return statearr_18515;
})();
var statearr_18516_20497 = state_18505__$1;
(statearr_18516_20497[(2)] = null);

(statearr_18516_20497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18506 === (6))){
var inst_18469 = (state_18505[(7)]);
var state_18505__$1 = state_18505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18505__$1,(11),inst_18469);
} else {
if((state_val_18506 === (17))){
var inst_18491 = (state_18505[(2)]);
var state_18505__$1 = state_18505;
if(cljs.core.truth_(inst_18491)){
var statearr_18517_20498 = state_18505__$1;
(statearr_18517_20498[(1)] = (19));

} else {
var statearr_18519_20499 = state_18505__$1;
(statearr_18519_20499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18506 === (3))){
var inst_18503 = (state_18505[(2)]);
var state_18505__$1 = state_18505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18505__$1,inst_18503);
} else {
if((state_val_18506 === (12))){
var inst_18479 = (state_18505[(10)]);
var state_18505__$1 = state_18505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18505__$1,(14),inst_18479);
} else {
if((state_val_18506 === (2))){
var state_18505__$1 = state_18505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18505__$1,(4),results);
} else {
if((state_val_18506 === (19))){
var state_18505__$1 = state_18505;
var statearr_18520_20501 = state_18505__$1;
(statearr_18520_20501[(2)] = null);

(statearr_18520_20501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18506 === (11))){
var inst_18479 = (state_18505[(2)]);
var state_18505__$1 = (function (){var statearr_18521 = state_18505;
(statearr_18521[(10)] = inst_18479);

return statearr_18521;
})();
var statearr_18522_20503 = state_18505__$1;
(statearr_18522_20503[(2)] = null);

(statearr_18522_20503[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18506 === (9))){
var state_18505__$1 = state_18505;
var statearr_18523_20504 = state_18505__$1;
(statearr_18523_20504[(2)] = null);

(statearr_18523_20504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18506 === (5))){
var state_18505__$1 = state_18505;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18524_20506 = state_18505__$1;
(statearr_18524_20506[(1)] = (8));

} else {
var statearr_18526_20507 = state_18505__$1;
(statearr_18526_20507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18506 === (14))){
var inst_18483 = (state_18505[(8)]);
var inst_18485 = (state_18505[(11)]);
var inst_18483__$1 = (state_18505[(2)]);
var inst_18484 = (inst_18483__$1 == null);
var inst_18485__$1 = cljs.core.not(inst_18484);
var state_18505__$1 = (function (){var statearr_18527 = state_18505;
(statearr_18527[(8)] = inst_18483__$1);

(statearr_18527[(11)] = inst_18485__$1);

return statearr_18527;
})();
if(inst_18485__$1){
var statearr_18528_20508 = state_18505__$1;
(statearr_18528_20508[(1)] = (15));

} else {
var statearr_18529_20509 = state_18505__$1;
(statearr_18529_20509[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18506 === (16))){
var inst_18485 = (state_18505[(11)]);
var state_18505__$1 = state_18505;
var statearr_18530_20510 = state_18505__$1;
(statearr_18530_20510[(2)] = inst_18485);

(statearr_18530_20510[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18506 === (10))){
var inst_18476 = (state_18505[(2)]);
var state_18505__$1 = state_18505;
var statearr_18531_20511 = state_18505__$1;
(statearr_18531_20511[(2)] = inst_18476);

(statearr_18531_20511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18506 === (18))){
var inst_18488 = (state_18505[(2)]);
var state_18505__$1 = state_18505;
var statearr_18532_20512 = state_18505__$1;
(statearr_18532_20512[(2)] = inst_18488);

(statearr_18532_20512[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18506 === (8))){
var inst_18473 = cljs.core.async.close_BANG_(to);
var state_18505__$1 = state_18505;
var statearr_18533_20513 = state_18505__$1;
(statearr_18533_20513[(2)] = inst_18473);

(statearr_18533_20513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____0 = (function (){
var statearr_18535 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18535[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__);

(statearr_18535[(1)] = (1));

return statearr_18535;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____1 = (function (state_18505){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_18505);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e18536){var ex__17761__auto__ = e18536;
var statearr_18537_20514 = state_18505;
(statearr_18537_20514[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_18505[(4)]))){
var statearr_18538_20515 = state_18505;
(statearr_18538_20515[(1)] = cljs.core.first((state_18505[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20516 = state_18505;
state_18505 = G__20516;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__ = function(state_18505){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____1.call(this,state_18505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18539 = f__17981__auto__();
(statearr_18539[(6)] = c__17980__auto__);

return statearr_18539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

return c__17980__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18542 = arguments.length;
switch (G__18542) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18544 = arguments.length;
switch (G__18544) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18547 = arguments.length;
switch (G__18547) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17980__auto___20523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_18574){
var state_val_18575 = (state_18574[(1)]);
if((state_val_18575 === (7))){
var inst_18570 = (state_18574[(2)]);
var state_18574__$1 = state_18574;
var statearr_18577_20524 = state_18574__$1;
(statearr_18577_20524[(2)] = inst_18570);

(statearr_18577_20524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18575 === (1))){
var state_18574__$1 = state_18574;
var statearr_18578_20525 = state_18574__$1;
(statearr_18578_20525[(2)] = null);

(statearr_18578_20525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18575 === (4))){
var inst_18551 = (state_18574[(7)]);
var inst_18551__$1 = (state_18574[(2)]);
var inst_18552 = (inst_18551__$1 == null);
var state_18574__$1 = (function (){var statearr_18579 = state_18574;
(statearr_18579[(7)] = inst_18551__$1);

return statearr_18579;
})();
if(cljs.core.truth_(inst_18552)){
var statearr_18580_20526 = state_18574__$1;
(statearr_18580_20526[(1)] = (5));

} else {
var statearr_18581_20527 = state_18574__$1;
(statearr_18581_20527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18575 === (13))){
var state_18574__$1 = state_18574;
var statearr_18584_20528 = state_18574__$1;
(statearr_18584_20528[(2)] = null);

(statearr_18584_20528[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18575 === (6))){
var inst_18551 = (state_18574[(7)]);
var inst_18557 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18551) : p.call(null,inst_18551));
var state_18574__$1 = state_18574;
if(cljs.core.truth_(inst_18557)){
var statearr_18585_20529 = state_18574__$1;
(statearr_18585_20529[(1)] = (9));

} else {
var statearr_18586_20530 = state_18574__$1;
(statearr_18586_20530[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18575 === (3))){
var inst_18572 = (state_18574[(2)]);
var state_18574__$1 = state_18574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18574__$1,inst_18572);
} else {
if((state_val_18575 === (12))){
var state_18574__$1 = state_18574;
var statearr_18587_20535 = state_18574__$1;
(statearr_18587_20535[(2)] = null);

(statearr_18587_20535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18575 === (2))){
var state_18574__$1 = state_18574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18574__$1,(4),ch);
} else {
if((state_val_18575 === (11))){
var inst_18551 = (state_18574[(7)]);
var inst_18561 = (state_18574[(2)]);
var state_18574__$1 = state_18574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18574__$1,(8),inst_18561,inst_18551);
} else {
if((state_val_18575 === (9))){
var state_18574__$1 = state_18574;
var statearr_18588_20540 = state_18574__$1;
(statearr_18588_20540[(2)] = tc);

(statearr_18588_20540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18575 === (5))){
var inst_18554 = cljs.core.async.close_BANG_(tc);
var inst_18555 = cljs.core.async.close_BANG_(fc);
var state_18574__$1 = (function (){var statearr_18589 = state_18574;
(statearr_18589[(8)] = inst_18554);

return statearr_18589;
})();
var statearr_18590_20541 = state_18574__$1;
(statearr_18590_20541[(2)] = inst_18555);

(statearr_18590_20541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18575 === (14))){
var inst_18568 = (state_18574[(2)]);
var state_18574__$1 = state_18574;
var statearr_18593_20542 = state_18574__$1;
(statearr_18593_20542[(2)] = inst_18568);

(statearr_18593_20542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18575 === (10))){
var state_18574__$1 = state_18574;
var statearr_18594_20543 = state_18574__$1;
(statearr_18594_20543[(2)] = fc);

(statearr_18594_20543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18575 === (8))){
var inst_18563 = (state_18574[(2)]);
var state_18574__$1 = state_18574;
if(cljs.core.truth_(inst_18563)){
var statearr_18595_20544 = state_18574__$1;
(statearr_18595_20544[(1)] = (12));

} else {
var statearr_18596_20545 = state_18574__$1;
(statearr_18596_20545[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17758__auto__ = null;
var cljs$core$async$state_machine__17758__auto____0 = (function (){
var statearr_18597 = [null,null,null,null,null,null,null,null,null];
(statearr_18597[(0)] = cljs$core$async$state_machine__17758__auto__);

(statearr_18597[(1)] = (1));

return statearr_18597;
});
var cljs$core$async$state_machine__17758__auto____1 = (function (state_18574){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_18574);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e18598){var ex__17761__auto__ = e18598;
var statearr_18599_20550 = state_18574;
(statearr_18599_20550[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_18574[(4)]))){
var statearr_18600_20551 = state_18574;
(statearr_18600_20551[(1)] = cljs.core.first((state_18574[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20552 = state_18574;
state_18574 = G__20552;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$state_machine__17758__auto__ = function(state_18574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17758__auto____1.call(this,state_18574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17758__auto____0;
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17758__auto____1;
return cljs$core$async$state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18601 = f__17981__auto__();
(statearr_18601[(6)] = c__17980__auto___20523);

return statearr_18601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17980__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_18624){
var state_val_18625 = (state_18624[(1)]);
if((state_val_18625 === (7))){
var inst_18619 = (state_18624[(2)]);
var state_18624__$1 = state_18624;
var statearr_18626_20553 = state_18624__$1;
(statearr_18626_20553[(2)] = inst_18619);

(statearr_18626_20553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18625 === (1))){
var inst_18602 = init;
var inst_18603 = inst_18602;
var state_18624__$1 = (function (){var statearr_18627 = state_18624;
(statearr_18627[(7)] = inst_18603);

return statearr_18627;
})();
var statearr_18628_20554 = state_18624__$1;
(statearr_18628_20554[(2)] = null);

(statearr_18628_20554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18625 === (4))){
var inst_18606 = (state_18624[(8)]);
var inst_18606__$1 = (state_18624[(2)]);
var inst_18607 = (inst_18606__$1 == null);
var state_18624__$1 = (function (){var statearr_18630 = state_18624;
(statearr_18630[(8)] = inst_18606__$1);

return statearr_18630;
})();
if(cljs.core.truth_(inst_18607)){
var statearr_18631_20555 = state_18624__$1;
(statearr_18631_20555[(1)] = (5));

} else {
var statearr_18632_20556 = state_18624__$1;
(statearr_18632_20556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18625 === (6))){
var inst_18606 = (state_18624[(8)]);
var inst_18610 = (state_18624[(9)]);
var inst_18603 = (state_18624[(7)]);
var inst_18610__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18603,inst_18606) : f.call(null,inst_18603,inst_18606));
var inst_18611 = cljs.core.reduced_QMARK_(inst_18610__$1);
var state_18624__$1 = (function (){var statearr_18633 = state_18624;
(statearr_18633[(9)] = inst_18610__$1);

return statearr_18633;
})();
if(inst_18611){
var statearr_18634_20557 = state_18624__$1;
(statearr_18634_20557[(1)] = (8));

} else {
var statearr_18635_20558 = state_18624__$1;
(statearr_18635_20558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18625 === (3))){
var inst_18621 = (state_18624[(2)]);
var state_18624__$1 = state_18624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18624__$1,inst_18621);
} else {
if((state_val_18625 === (2))){
var state_18624__$1 = state_18624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18624__$1,(4),ch);
} else {
if((state_val_18625 === (9))){
var inst_18610 = (state_18624[(9)]);
var inst_18603 = inst_18610;
var state_18624__$1 = (function (){var statearr_18636 = state_18624;
(statearr_18636[(7)] = inst_18603);

return statearr_18636;
})();
var statearr_18637_20559 = state_18624__$1;
(statearr_18637_20559[(2)] = null);

(statearr_18637_20559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18625 === (5))){
var inst_18603 = (state_18624[(7)]);
var state_18624__$1 = state_18624;
var statearr_18638_20560 = state_18624__$1;
(statearr_18638_20560[(2)] = inst_18603);

(statearr_18638_20560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18625 === (10))){
var inst_18617 = (state_18624[(2)]);
var state_18624__$1 = state_18624;
var statearr_18639_20561 = state_18624__$1;
(statearr_18639_20561[(2)] = inst_18617);

(statearr_18639_20561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18625 === (8))){
var inst_18610 = (state_18624[(9)]);
var inst_18613 = cljs.core.deref(inst_18610);
var state_18624__$1 = state_18624;
var statearr_18640_20566 = state_18624__$1;
(statearr_18640_20566[(2)] = inst_18613);

(statearr_18640_20566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17758__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17758__auto____0 = (function (){
var statearr_18641 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18641[(0)] = cljs$core$async$reduce_$_state_machine__17758__auto__);

(statearr_18641[(1)] = (1));

return statearr_18641;
});
var cljs$core$async$reduce_$_state_machine__17758__auto____1 = (function (state_18624){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_18624);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e18642){var ex__17761__auto__ = e18642;
var statearr_18643_20567 = state_18624;
(statearr_18643_20567[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_18624[(4)]))){
var statearr_18644_20568 = state_18624;
(statearr_18644_20568[(1)] = cljs.core.first((state_18624[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20569 = state_18624;
state_18624 = G__20569;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17758__auto__ = function(state_18624){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17758__auto____1.call(this,state_18624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17758__auto____0;
cljs$core$async$reduce_$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17758__auto____1;
return cljs$core$async$reduce_$_state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18645 = f__17981__auto__();
(statearr_18645[(6)] = c__17980__auto__);

return statearr_18645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

return c__17980__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17980__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_18651){
var state_val_18652 = (state_18651[(1)]);
if((state_val_18652 === (1))){
var inst_18646 = cljs.core.async.reduce(f__$1,init,ch);
var state_18651__$1 = state_18651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18651__$1,(2),inst_18646);
} else {
if((state_val_18652 === (2))){
var inst_18648 = (state_18651[(2)]);
var inst_18649 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18648) : f__$1.call(null,inst_18648));
var state_18651__$1 = state_18651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18651__$1,inst_18649);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17758__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17758__auto____0 = (function (){
var statearr_18656 = [null,null,null,null,null,null,null];
(statearr_18656[(0)] = cljs$core$async$transduce_$_state_machine__17758__auto__);

(statearr_18656[(1)] = (1));

return statearr_18656;
});
var cljs$core$async$transduce_$_state_machine__17758__auto____1 = (function (state_18651){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_18651);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e18657){var ex__17761__auto__ = e18657;
var statearr_18658_20570 = state_18651;
(statearr_18658_20570[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_18651[(4)]))){
var statearr_18659_20571 = state_18651;
(statearr_18659_20571[(1)] = cljs.core.first((state_18651[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20572 = state_18651;
state_18651 = G__20572;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17758__auto__ = function(state_18651){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17758__auto____1.call(this,state_18651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17758__auto____0;
cljs$core$async$transduce_$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17758__auto____1;
return cljs$core$async$transduce_$_state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18662 = f__17981__auto__();
(statearr_18662[(6)] = c__17980__auto__);

return statearr_18662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

return c__17980__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18668 = arguments.length;
switch (G__18668) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17980__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_18697){
var state_val_18698 = (state_18697[(1)]);
if((state_val_18698 === (7))){
var inst_18676 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
var statearr_18703_20577 = state_18697__$1;
(statearr_18703_20577[(2)] = inst_18676);

(statearr_18703_20577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (1))){
var inst_18669 = cljs.core.seq(coll);
var inst_18670 = inst_18669;
var state_18697__$1 = (function (){var statearr_18704 = state_18697;
(statearr_18704[(7)] = inst_18670);

return statearr_18704;
})();
var statearr_18706_20578 = state_18697__$1;
(statearr_18706_20578[(2)] = null);

(statearr_18706_20578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (4))){
var inst_18670 = (state_18697[(7)]);
var inst_18674 = cljs.core.first(inst_18670);
var state_18697__$1 = state_18697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18697__$1,(7),ch,inst_18674);
} else {
if((state_val_18698 === (13))){
var inst_18691 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
var statearr_18710_20579 = state_18697__$1;
(statearr_18710_20579[(2)] = inst_18691);

(statearr_18710_20579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (6))){
var inst_18679 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
if(cljs.core.truth_(inst_18679)){
var statearr_18712_20580 = state_18697__$1;
(statearr_18712_20580[(1)] = (8));

} else {
var statearr_18715_20581 = state_18697__$1;
(statearr_18715_20581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (3))){
var inst_18695 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18697__$1,inst_18695);
} else {
if((state_val_18698 === (12))){
var state_18697__$1 = state_18697;
var statearr_18718_20582 = state_18697__$1;
(statearr_18718_20582[(2)] = null);

(statearr_18718_20582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (2))){
var inst_18670 = (state_18697[(7)]);
var state_18697__$1 = state_18697;
if(cljs.core.truth_(inst_18670)){
var statearr_18722_20583 = state_18697__$1;
(statearr_18722_20583[(1)] = (4));

} else {
var statearr_18723_20584 = state_18697__$1;
(statearr_18723_20584[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (11))){
var inst_18688 = cljs.core.async.close_BANG_(ch);
var state_18697__$1 = state_18697;
var statearr_18725_20585 = state_18697__$1;
(statearr_18725_20585[(2)] = inst_18688);

(statearr_18725_20585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (9))){
var state_18697__$1 = state_18697;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18729_20586 = state_18697__$1;
(statearr_18729_20586[(1)] = (11));

} else {
var statearr_18730_20587 = state_18697__$1;
(statearr_18730_20587[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (5))){
var inst_18670 = (state_18697[(7)]);
var state_18697__$1 = state_18697;
var statearr_18732_20588 = state_18697__$1;
(statearr_18732_20588[(2)] = inst_18670);

(statearr_18732_20588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (10))){
var inst_18693 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
var statearr_18736_20589 = state_18697__$1;
(statearr_18736_20589[(2)] = inst_18693);

(statearr_18736_20589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (8))){
var inst_18670 = (state_18697[(7)]);
var inst_18683 = cljs.core.next(inst_18670);
var inst_18670__$1 = inst_18683;
var state_18697__$1 = (function (){var statearr_18738 = state_18697;
(statearr_18738[(7)] = inst_18670__$1);

return statearr_18738;
})();
var statearr_18739_20590 = state_18697__$1;
(statearr_18739_20590[(2)] = null);

(statearr_18739_20590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17758__auto__ = null;
var cljs$core$async$state_machine__17758__auto____0 = (function (){
var statearr_18743 = [null,null,null,null,null,null,null,null];
(statearr_18743[(0)] = cljs$core$async$state_machine__17758__auto__);

(statearr_18743[(1)] = (1));

return statearr_18743;
});
var cljs$core$async$state_machine__17758__auto____1 = (function (state_18697){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_18697);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e18745){var ex__17761__auto__ = e18745;
var statearr_18746_20592 = state_18697;
(statearr_18746_20592[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_18697[(4)]))){
var statearr_18750_20593 = state_18697;
(statearr_18750_20593[(1)] = cljs.core.first((state_18697[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20598 = state_18697;
state_18697 = G__20598;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$state_machine__17758__auto__ = function(state_18697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17758__auto____1.call(this,state_18697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17758__auto____0;
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17758__auto____1;
return cljs$core$async$state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18752 = f__17981__auto__();
(statearr_18752[(6)] = c__17980__auto__);

return statearr_18752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

return c__17980__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18765 = arguments.length;
switch (G__18765) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20600 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20600(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20601 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20601(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20606 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20606(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20610 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20610(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18794 = (function (ch,cs,meta18795){
this.ch = ch;
this.cs = cs;
this.meta18795 = meta18795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18796,meta18795__$1){
var self__ = this;
var _18796__$1 = this;
return (new cljs.core.async.t_cljs$core$async18794(self__.ch,self__.cs,meta18795__$1));
}));

(cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18796){
var self__ = this;
var _18796__$1 = this;
return self__.meta18795;
}));

(cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18795","meta18795",1334808094,null)], null);
}));

(cljs.core.async.t_cljs$core$async18794.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18794");

(cljs.core.async.t_cljs$core$async18794.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18794");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18794.
 */
cljs.core.async.__GT_t_cljs$core$async18794 = (function cljs$core$async$__GT_t_cljs$core$async18794(ch,cs,meta18795){
return (new cljs.core.async.t_cljs$core$async18794(ch,cs,meta18795));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async18794(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17980__auto___20614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_18974){
var state_val_18975 = (state_18974[(1)]);
if((state_val_18975 === (7))){
var inst_18966 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_18981_20616 = state_18974__$1;
(statearr_18981_20616[(2)] = inst_18966);

(statearr_18981_20616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (20))){
var inst_18855 = (state_18974[(7)]);
var inst_18870 = cljs.core.first(inst_18855);
var inst_18872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18870,(0),null);
var inst_18873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18870,(1),null);
var state_18974__$1 = (function (){var statearr_18985 = state_18974;
(statearr_18985[(8)] = inst_18872);

return statearr_18985;
})();
if(cljs.core.truth_(inst_18873)){
var statearr_18988_20617 = state_18974__$1;
(statearr_18988_20617[(1)] = (22));

} else {
var statearr_18989_20618 = state_18974__$1;
(statearr_18989_20618[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (27))){
var inst_18909 = (state_18974[(9)]);
var inst_18902 = (state_18974[(10)]);
var inst_18820 = (state_18974[(11)]);
var inst_18904 = (state_18974[(12)]);
var inst_18909__$1 = cljs.core._nth(inst_18902,inst_18904);
var inst_18912 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18909__$1,inst_18820,done);
var state_18974__$1 = (function (){var statearr_18995 = state_18974;
(statearr_18995[(9)] = inst_18909__$1);

return statearr_18995;
})();
if(cljs.core.truth_(inst_18912)){
var statearr_18998_20620 = state_18974__$1;
(statearr_18998_20620[(1)] = (30));

} else {
var statearr_19000_20621 = state_18974__$1;
(statearr_19000_20621[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (1))){
var state_18974__$1 = state_18974;
var statearr_19002_20623 = state_18974__$1;
(statearr_19002_20623[(2)] = null);

(statearr_19002_20623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (24))){
var inst_18855 = (state_18974[(7)]);
var inst_18878 = (state_18974[(2)]);
var inst_18879 = cljs.core.next(inst_18855);
var inst_18829 = inst_18879;
var inst_18830 = null;
var inst_18831 = (0);
var inst_18832 = (0);
var state_18974__$1 = (function (){var statearr_19006 = state_18974;
(statearr_19006[(13)] = inst_18878);

(statearr_19006[(14)] = inst_18829);

(statearr_19006[(15)] = inst_18830);

(statearr_19006[(16)] = inst_18831);

(statearr_19006[(17)] = inst_18832);

return statearr_19006;
})();
var statearr_19008_20624 = state_18974__$1;
(statearr_19008_20624[(2)] = null);

(statearr_19008_20624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (39))){
var state_18974__$1 = state_18974;
var statearr_19016_20625 = state_18974__$1;
(statearr_19016_20625[(2)] = null);

(statearr_19016_20625[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (4))){
var inst_18820 = (state_18974[(11)]);
var inst_18820__$1 = (state_18974[(2)]);
var inst_18821 = (inst_18820__$1 == null);
var state_18974__$1 = (function (){var statearr_19020 = state_18974;
(statearr_19020[(11)] = inst_18820__$1);

return statearr_19020;
})();
if(cljs.core.truth_(inst_18821)){
var statearr_19021_20627 = state_18974__$1;
(statearr_19021_20627[(1)] = (5));

} else {
var statearr_19023_20628 = state_18974__$1;
(statearr_19023_20628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (15))){
var inst_18829 = (state_18974[(14)]);
var inst_18830 = (state_18974[(15)]);
var inst_18831 = (state_18974[(16)]);
var inst_18832 = (state_18974[(17)]);
var inst_18850 = (state_18974[(2)]);
var inst_18852 = (inst_18832 + (1));
var tmp19012 = inst_18829;
var tmp19013 = inst_18830;
var tmp19014 = inst_18831;
var inst_18829__$1 = tmp19012;
var inst_18830__$1 = tmp19013;
var inst_18831__$1 = tmp19014;
var inst_18832__$1 = inst_18852;
var state_18974__$1 = (function (){var statearr_19027 = state_18974;
(statearr_19027[(14)] = inst_18829__$1);

(statearr_19027[(15)] = inst_18830__$1);

(statearr_19027[(18)] = inst_18850);

(statearr_19027[(16)] = inst_18831__$1);

(statearr_19027[(17)] = inst_18832__$1);

return statearr_19027;
})();
var statearr_19029_20637 = state_18974__$1;
(statearr_19029_20637[(2)] = null);

(statearr_19029_20637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (21))){
var inst_18882 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_19036_20640 = state_18974__$1;
(statearr_19036_20640[(2)] = inst_18882);

(statearr_19036_20640[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (31))){
var inst_18909 = (state_18974[(9)]);
var inst_18916 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18909);
var state_18974__$1 = state_18974;
var statearr_19040_20641 = state_18974__$1;
(statearr_19040_20641[(2)] = inst_18916);

(statearr_19040_20641[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (32))){
var inst_18902 = (state_18974[(10)]);
var inst_18903 = (state_18974[(19)]);
var inst_18901 = (state_18974[(20)]);
var inst_18904 = (state_18974[(12)]);
var inst_18918 = (state_18974[(2)]);
var inst_18919 = (inst_18904 + (1));
var tmp19033 = inst_18902;
var tmp19034 = inst_18903;
var tmp19035 = inst_18901;
var inst_18901__$1 = tmp19035;
var inst_18902__$1 = tmp19033;
var inst_18903__$1 = tmp19034;
var inst_18904__$1 = inst_18919;
var state_18974__$1 = (function (){var statearr_19043 = state_18974;
(statearr_19043[(10)] = inst_18902__$1);

(statearr_19043[(19)] = inst_18903__$1);

(statearr_19043[(21)] = inst_18918);

(statearr_19043[(20)] = inst_18901__$1);

(statearr_19043[(12)] = inst_18904__$1);

return statearr_19043;
})();
var statearr_19047_20649 = state_18974__$1;
(statearr_19047_20649[(2)] = null);

(statearr_19047_20649[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (40))){
var inst_18935 = (state_18974[(22)]);
var inst_18940 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18935);
var state_18974__$1 = state_18974;
var statearr_19049_20651 = state_18974__$1;
(statearr_19049_20651[(2)] = inst_18940);

(statearr_19049_20651[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (33))){
var inst_18922 = (state_18974[(23)]);
var inst_18925 = cljs.core.chunked_seq_QMARK_(inst_18922);
var state_18974__$1 = state_18974;
if(inst_18925){
var statearr_19053_20653 = state_18974__$1;
(statearr_19053_20653[(1)] = (36));

} else {
var statearr_19055_20654 = state_18974__$1;
(statearr_19055_20654[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (13))){
var inst_18842 = (state_18974[(24)]);
var inst_18846 = cljs.core.async.close_BANG_(inst_18842);
var state_18974__$1 = state_18974;
var statearr_19059_20655 = state_18974__$1;
(statearr_19059_20655[(2)] = inst_18846);

(statearr_19059_20655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (22))){
var inst_18872 = (state_18974[(8)]);
var inst_18875 = cljs.core.async.close_BANG_(inst_18872);
var state_18974__$1 = state_18974;
var statearr_19060_20664 = state_18974__$1;
(statearr_19060_20664[(2)] = inst_18875);

(statearr_19060_20664[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (36))){
var inst_18922 = (state_18974[(23)]);
var inst_18928 = cljs.core.chunk_first(inst_18922);
var inst_18930 = cljs.core.chunk_rest(inst_18922);
var inst_18932 = cljs.core.count(inst_18928);
var inst_18901 = inst_18930;
var inst_18902 = inst_18928;
var inst_18903 = inst_18932;
var inst_18904 = (0);
var state_18974__$1 = (function (){var statearr_19064 = state_18974;
(statearr_19064[(10)] = inst_18902);

(statearr_19064[(19)] = inst_18903);

(statearr_19064[(20)] = inst_18901);

(statearr_19064[(12)] = inst_18904);

return statearr_19064;
})();
var statearr_19065_20669 = state_18974__$1;
(statearr_19065_20669[(2)] = null);

(statearr_19065_20669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (41))){
var inst_18922 = (state_18974[(23)]);
var inst_18942 = (state_18974[(2)]);
var inst_18943 = cljs.core.next(inst_18922);
var inst_18901 = inst_18943;
var inst_18902 = null;
var inst_18903 = (0);
var inst_18904 = (0);
var state_18974__$1 = (function (){var statearr_19066 = state_18974;
(statearr_19066[(10)] = inst_18902);

(statearr_19066[(19)] = inst_18903);

(statearr_19066[(20)] = inst_18901);

(statearr_19066[(12)] = inst_18904);

(statearr_19066[(25)] = inst_18942);

return statearr_19066;
})();
var statearr_19067_20671 = state_18974__$1;
(statearr_19067_20671[(2)] = null);

(statearr_19067_20671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (43))){
var state_18974__$1 = state_18974;
var statearr_19068_20676 = state_18974__$1;
(statearr_19068_20676[(2)] = null);

(statearr_19068_20676[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (29))){
var inst_18951 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_19071_20677 = state_18974__$1;
(statearr_19071_20677[(2)] = inst_18951);

(statearr_19071_20677[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (44))){
var inst_18963 = (state_18974[(2)]);
var state_18974__$1 = (function (){var statearr_19072 = state_18974;
(statearr_19072[(26)] = inst_18963);

return statearr_19072;
})();
var statearr_19073_20678 = state_18974__$1;
(statearr_19073_20678[(2)] = null);

(statearr_19073_20678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (6))){
var inst_18892 = (state_18974[(27)]);
var inst_18891 = cljs.core.deref(cs);
var inst_18892__$1 = cljs.core.keys(inst_18891);
var inst_18893 = cljs.core.count(inst_18892__$1);
var inst_18894 = cljs.core.reset_BANG_(dctr,inst_18893);
var inst_18900 = cljs.core.seq(inst_18892__$1);
var inst_18901 = inst_18900;
var inst_18902 = null;
var inst_18903 = (0);
var inst_18904 = (0);
var state_18974__$1 = (function (){var statearr_19074 = state_18974;
(statearr_19074[(10)] = inst_18902);

(statearr_19074[(19)] = inst_18903);

(statearr_19074[(28)] = inst_18894);

(statearr_19074[(27)] = inst_18892__$1);

(statearr_19074[(20)] = inst_18901);

(statearr_19074[(12)] = inst_18904);

return statearr_19074;
})();
var statearr_19079_20682 = state_18974__$1;
(statearr_19079_20682[(2)] = null);

(statearr_19079_20682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (28))){
var inst_18922 = (state_18974[(23)]);
var inst_18901 = (state_18974[(20)]);
var inst_18922__$1 = cljs.core.seq(inst_18901);
var state_18974__$1 = (function (){var statearr_19080 = state_18974;
(statearr_19080[(23)] = inst_18922__$1);

return statearr_19080;
})();
if(inst_18922__$1){
var statearr_19085_20683 = state_18974__$1;
(statearr_19085_20683[(1)] = (33));

} else {
var statearr_19086_20684 = state_18974__$1;
(statearr_19086_20684[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (25))){
var inst_18903 = (state_18974[(19)]);
var inst_18904 = (state_18974[(12)]);
var inst_18906 = (inst_18904 < inst_18903);
var inst_18907 = inst_18906;
var state_18974__$1 = state_18974;
if(cljs.core.truth_(inst_18907)){
var statearr_19088_20689 = state_18974__$1;
(statearr_19088_20689[(1)] = (27));

} else {
var statearr_19089_20690 = state_18974__$1;
(statearr_19089_20690[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (34))){
var state_18974__$1 = state_18974;
var statearr_19090_20691 = state_18974__$1;
(statearr_19090_20691[(2)] = null);

(statearr_19090_20691[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (17))){
var state_18974__$1 = state_18974;
var statearr_19091_20692 = state_18974__$1;
(statearr_19091_20692[(2)] = null);

(statearr_19091_20692[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (3))){
var inst_18968 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18974__$1,inst_18968);
} else {
if((state_val_18975 === (12))){
var inst_18887 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_19092_20696 = state_18974__$1;
(statearr_19092_20696[(2)] = inst_18887);

(statearr_19092_20696[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (2))){
var state_18974__$1 = state_18974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18974__$1,(4),ch);
} else {
if((state_val_18975 === (23))){
var state_18974__$1 = state_18974;
var statearr_19097_20701 = state_18974__$1;
(statearr_19097_20701[(2)] = null);

(statearr_19097_20701[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (35))){
var inst_18949 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_19101_20706 = state_18974__$1;
(statearr_19101_20706[(2)] = inst_18949);

(statearr_19101_20706[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (19))){
var inst_18855 = (state_18974[(7)]);
var inst_18860 = cljs.core.chunk_first(inst_18855);
var inst_18861 = cljs.core.chunk_rest(inst_18855);
var inst_18862 = cljs.core.count(inst_18860);
var inst_18829 = inst_18861;
var inst_18830 = inst_18860;
var inst_18831 = inst_18862;
var inst_18832 = (0);
var state_18974__$1 = (function (){var statearr_19103 = state_18974;
(statearr_19103[(14)] = inst_18829);

(statearr_19103[(15)] = inst_18830);

(statearr_19103[(16)] = inst_18831);

(statearr_19103[(17)] = inst_18832);

return statearr_19103;
})();
var statearr_19104_20716 = state_18974__$1;
(statearr_19104_20716[(2)] = null);

(statearr_19104_20716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (11))){
var inst_18829 = (state_18974[(14)]);
var inst_18855 = (state_18974[(7)]);
var inst_18855__$1 = cljs.core.seq(inst_18829);
var state_18974__$1 = (function (){var statearr_19108 = state_18974;
(statearr_19108[(7)] = inst_18855__$1);

return statearr_19108;
})();
if(inst_18855__$1){
var statearr_19110_20717 = state_18974__$1;
(statearr_19110_20717[(1)] = (16));

} else {
var statearr_19111_20718 = state_18974__$1;
(statearr_19111_20718[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (9))){
var inst_18889 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_19112_20723 = state_18974__$1;
(statearr_19112_20723[(2)] = inst_18889);

(statearr_19112_20723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (5))){
var inst_18827 = cljs.core.deref(cs);
var inst_18828 = cljs.core.seq(inst_18827);
var inst_18829 = inst_18828;
var inst_18830 = null;
var inst_18831 = (0);
var inst_18832 = (0);
var state_18974__$1 = (function (){var statearr_19116 = state_18974;
(statearr_19116[(14)] = inst_18829);

(statearr_19116[(15)] = inst_18830);

(statearr_19116[(16)] = inst_18831);

(statearr_19116[(17)] = inst_18832);

return statearr_19116;
})();
var statearr_19118_20727 = state_18974__$1;
(statearr_19118_20727[(2)] = null);

(statearr_19118_20727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (14))){
var state_18974__$1 = state_18974;
var statearr_19119_20731 = state_18974__$1;
(statearr_19119_20731[(2)] = null);

(statearr_19119_20731[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (45))){
var inst_18959 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_19120_20732 = state_18974__$1;
(statearr_19120_20732[(2)] = inst_18959);

(statearr_19120_20732[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (26))){
var inst_18892 = (state_18974[(27)]);
var inst_18953 = (state_18974[(2)]);
var inst_18955 = cljs.core.seq(inst_18892);
var state_18974__$1 = (function (){var statearr_19125 = state_18974;
(statearr_19125[(29)] = inst_18953);

return statearr_19125;
})();
if(inst_18955){
var statearr_19126_20733 = state_18974__$1;
(statearr_19126_20733[(1)] = (42));

} else {
var statearr_19127_20738 = state_18974__$1;
(statearr_19127_20738[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (16))){
var inst_18855 = (state_18974[(7)]);
var inst_18858 = cljs.core.chunked_seq_QMARK_(inst_18855);
var state_18974__$1 = state_18974;
if(inst_18858){
var statearr_19128_20742 = state_18974__$1;
(statearr_19128_20742[(1)] = (19));

} else {
var statearr_19129_20747 = state_18974__$1;
(statearr_19129_20747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (38))){
var inst_18946 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_19131_20751 = state_18974__$1;
(statearr_19131_20751[(2)] = inst_18946);

(statearr_19131_20751[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (30))){
var state_18974__$1 = state_18974;
var statearr_19132_20752 = state_18974__$1;
(statearr_19132_20752[(2)] = null);

(statearr_19132_20752[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (10))){
var inst_18830 = (state_18974[(15)]);
var inst_18832 = (state_18974[(17)]);
var inst_18841 = cljs.core._nth(inst_18830,inst_18832);
var inst_18842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18841,(0),null);
var inst_18843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18841,(1),null);
var state_18974__$1 = (function (){var statearr_19133 = state_18974;
(statearr_19133[(24)] = inst_18842);

return statearr_19133;
})();
if(cljs.core.truth_(inst_18843)){
var statearr_19134_20761 = state_18974__$1;
(statearr_19134_20761[(1)] = (13));

} else {
var statearr_19135_20762 = state_18974__$1;
(statearr_19135_20762[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (18))){
var inst_18885 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_19136_20766 = state_18974__$1;
(statearr_19136_20766[(2)] = inst_18885);

(statearr_19136_20766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (42))){
var state_18974__$1 = state_18974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18974__$1,(45),dchan);
} else {
if((state_val_18975 === (37))){
var inst_18922 = (state_18974[(23)]);
var inst_18820 = (state_18974[(11)]);
var inst_18935 = (state_18974[(22)]);
var inst_18935__$1 = cljs.core.first(inst_18922);
var inst_18936 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18935__$1,inst_18820,done);
var state_18974__$1 = (function (){var statearr_19144 = state_18974;
(statearr_19144[(22)] = inst_18935__$1);

return statearr_19144;
})();
if(cljs.core.truth_(inst_18936)){
var statearr_19146_20780 = state_18974__$1;
(statearr_19146_20780[(1)] = (39));

} else {
var statearr_19147_20781 = state_18974__$1;
(statearr_19147_20781[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (8))){
var inst_18831 = (state_18974[(16)]);
var inst_18832 = (state_18974[(17)]);
var inst_18834 = (inst_18832 < inst_18831);
var inst_18835 = inst_18834;
var state_18974__$1 = state_18974;
if(cljs.core.truth_(inst_18835)){
var statearr_19148_20783 = state_18974__$1;
(statearr_19148_20783[(1)] = (10));

} else {
var statearr_19149_20784 = state_18974__$1;
(statearr_19149_20784[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17758__auto__ = null;
var cljs$core$async$mult_$_state_machine__17758__auto____0 = (function (){
var statearr_19154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19154[(0)] = cljs$core$async$mult_$_state_machine__17758__auto__);

(statearr_19154[(1)] = (1));

return statearr_19154;
});
var cljs$core$async$mult_$_state_machine__17758__auto____1 = (function (state_18974){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_18974);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e19158){var ex__17761__auto__ = e19158;
var statearr_19159_20795 = state_18974;
(statearr_19159_20795[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_18974[(4)]))){
var statearr_19161_20796 = state_18974;
(statearr_19161_20796[(1)] = cljs.core.first((state_18974[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20802 = state_18974;
state_18974 = G__20802;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17758__auto__ = function(state_18974){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17758__auto____1.call(this,state_18974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17758__auto____0;
cljs$core$async$mult_$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17758__auto____1;
return cljs$core$async$mult_$_state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19162 = f__17981__auto__();
(statearr_19162[(6)] = c__17980__auto___20614);

return statearr_19162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19168 = arguments.length;
switch (G__19168) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20821 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20821(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20828 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20828(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20833 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20833(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20835 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20835(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20837 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20837(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20841 = arguments.length;
var i__5727__auto___20842 = (0);
while(true){
if((i__5727__auto___20842 < len__5726__auto___20841)){
args__5732__auto__.push((arguments[i__5727__auto___20842]));

var G__20843 = (i__5727__auto___20842 + (1));
i__5727__auto___20842 = G__20843;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19211){
var map__19212 = p__19211;
var map__19212__$1 = cljs.core.__destructure_map(map__19212);
var opts = map__19212__$1;
var statearr_19213_20845 = state;
(statearr_19213_20845[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19217_20846 = state;
(statearr_19217_20846[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_19219_20848 = state;
(statearr_19219_20848[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19203){
var G__19204 = cljs.core.first(seq19203);
var seq19203__$1 = cljs.core.next(seq19203);
var G__19205 = cljs.core.first(seq19203__$1);
var seq19203__$2 = cljs.core.next(seq19203__$1);
var G__19206 = cljs.core.first(seq19203__$2);
var seq19203__$3 = cljs.core.next(seq19203__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19204,G__19205,G__19206,seq19203__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19225 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19226){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19226 = meta19226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19227,meta19226__$1){
var self__ = this;
var _19227__$1 = this;
return (new cljs.core.async.t_cljs$core$async19225(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19226__$1));
}));

(cljs.core.async.t_cljs$core$async19225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19227){
var self__ = this;
var _19227__$1 = this;
return self__.meta19226;
}));

(cljs.core.async.t_cljs$core$async19225.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19225.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19225.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19225.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19225.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19225.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19225.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19225.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19226","meta19226",-67283600,null)], null);
}));

(cljs.core.async.t_cljs$core$async19225.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19225");

(cljs.core.async.t_cljs$core$async19225.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19225");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19225.
 */
cljs.core.async.__GT_t_cljs$core$async19225 = (function cljs$core$async$__GT_t_cljs$core$async19225(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19226){
return (new cljs.core.async.t_cljs$core$async19225(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19226));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async19225(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__17980__auto___20862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_19297){
var state_val_19298 = (state_19297[(1)]);
if((state_val_19298 === (7))){
var inst_19257 = (state_19297[(2)]);
var state_19297__$1 = state_19297;
if(cljs.core.truth_(inst_19257)){
var statearr_19299_20867 = state_19297__$1;
(statearr_19299_20867[(1)] = (8));

} else {
var statearr_19300_20868 = state_19297__$1;
(statearr_19300_20868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (20))){
var inst_19250 = (state_19297[(7)]);
var state_19297__$1 = state_19297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19297__$1,(23),out,inst_19250);
} else {
if((state_val_19298 === (1))){
var inst_19233 = calc_state();
var inst_19234 = cljs.core.__destructure_map(inst_19233);
var inst_19235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19234,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19234,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19234,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19238 = inst_19233;
var state_19297__$1 = (function (){var statearr_19302 = state_19297;
(statearr_19302[(8)] = inst_19236);

(statearr_19302[(9)] = inst_19237);

(statearr_19302[(10)] = inst_19238);

(statearr_19302[(11)] = inst_19235);

return statearr_19302;
})();
var statearr_19304_20869 = state_19297__$1;
(statearr_19304_20869[(2)] = null);

(statearr_19304_20869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (24))){
var inst_19241 = (state_19297[(12)]);
var inst_19238 = inst_19241;
var state_19297__$1 = (function (){var statearr_19305 = state_19297;
(statearr_19305[(10)] = inst_19238);

return statearr_19305;
})();
var statearr_19306_20871 = state_19297__$1;
(statearr_19306_20871[(2)] = null);

(statearr_19306_20871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (4))){
var inst_19250 = (state_19297[(7)]);
var inst_19252 = (state_19297[(13)]);
var inst_19249 = (state_19297[(2)]);
var inst_19250__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19249,(0),null);
var inst_19251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19249,(1),null);
var inst_19252__$1 = (inst_19250__$1 == null);
var state_19297__$1 = (function (){var statearr_19307 = state_19297;
(statearr_19307[(7)] = inst_19250__$1);

(statearr_19307[(13)] = inst_19252__$1);

(statearr_19307[(14)] = inst_19251);

return statearr_19307;
})();
if(cljs.core.truth_(inst_19252__$1)){
var statearr_19308_20876 = state_19297__$1;
(statearr_19308_20876[(1)] = (5));

} else {
var statearr_19309_20877 = state_19297__$1;
(statearr_19309_20877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (15))){
var inst_19242 = (state_19297[(15)]);
var inst_19271 = (state_19297[(16)]);
var inst_19271__$1 = cljs.core.empty_QMARK_(inst_19242);
var state_19297__$1 = (function (){var statearr_19310 = state_19297;
(statearr_19310[(16)] = inst_19271__$1);

return statearr_19310;
})();
if(inst_19271__$1){
var statearr_19311_20880 = state_19297__$1;
(statearr_19311_20880[(1)] = (17));

} else {
var statearr_19312_20881 = state_19297__$1;
(statearr_19312_20881[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (21))){
var inst_19241 = (state_19297[(12)]);
var inst_19238 = inst_19241;
var state_19297__$1 = (function (){var statearr_19315 = state_19297;
(statearr_19315[(10)] = inst_19238);

return statearr_19315;
})();
var statearr_19316_20882 = state_19297__$1;
(statearr_19316_20882[(2)] = null);

(statearr_19316_20882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (13))){
var inst_19264 = (state_19297[(2)]);
var inst_19265 = calc_state();
var inst_19238 = inst_19265;
var state_19297__$1 = (function (){var statearr_19317 = state_19297;
(statearr_19317[(17)] = inst_19264);

(statearr_19317[(10)] = inst_19238);

return statearr_19317;
})();
var statearr_19318_20887 = state_19297__$1;
(statearr_19318_20887[(2)] = null);

(statearr_19318_20887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (22))){
var inst_19291 = (state_19297[(2)]);
var state_19297__$1 = state_19297;
var statearr_19319_20888 = state_19297__$1;
(statearr_19319_20888[(2)] = inst_19291);

(statearr_19319_20888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (6))){
var inst_19251 = (state_19297[(14)]);
var inst_19255 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19251,change);
var state_19297__$1 = state_19297;
var statearr_19320_20889 = state_19297__$1;
(statearr_19320_20889[(2)] = inst_19255);

(statearr_19320_20889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (25))){
var state_19297__$1 = state_19297;
var statearr_19321_20890 = state_19297__$1;
(statearr_19321_20890[(2)] = null);

(statearr_19321_20890[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (17))){
var inst_19243 = (state_19297[(18)]);
var inst_19251 = (state_19297[(14)]);
var inst_19273 = (inst_19243.cljs$core$IFn$_invoke$arity$1 ? inst_19243.cljs$core$IFn$_invoke$arity$1(inst_19251) : inst_19243.call(null,inst_19251));
var inst_19274 = cljs.core.not(inst_19273);
var state_19297__$1 = state_19297;
var statearr_19324_20895 = state_19297__$1;
(statearr_19324_20895[(2)] = inst_19274);

(statearr_19324_20895[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (3))){
var inst_19295 = (state_19297[(2)]);
var state_19297__$1 = state_19297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19297__$1,inst_19295);
} else {
if((state_val_19298 === (12))){
var state_19297__$1 = state_19297;
var statearr_19325_20896 = state_19297__$1;
(statearr_19325_20896[(2)] = null);

(statearr_19325_20896[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (2))){
var inst_19238 = (state_19297[(10)]);
var inst_19241 = (state_19297[(12)]);
var inst_19241__$1 = cljs.core.__destructure_map(inst_19238);
var inst_19242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19241__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19241__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19241__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19297__$1 = (function (){var statearr_19326 = state_19297;
(statearr_19326[(18)] = inst_19243);

(statearr_19326[(12)] = inst_19241__$1);

(statearr_19326[(15)] = inst_19242);

return statearr_19326;
})();
return cljs.core.async.ioc_alts_BANG_(state_19297__$1,(4),inst_19244);
} else {
if((state_val_19298 === (23))){
var inst_19282 = (state_19297[(2)]);
var state_19297__$1 = state_19297;
if(cljs.core.truth_(inst_19282)){
var statearr_19327_20898 = state_19297__$1;
(statearr_19327_20898[(1)] = (24));

} else {
var statearr_19328_20899 = state_19297__$1;
(statearr_19328_20899[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (19))){
var inst_19277 = (state_19297[(2)]);
var state_19297__$1 = state_19297;
var statearr_19329_20900 = state_19297__$1;
(statearr_19329_20900[(2)] = inst_19277);

(statearr_19329_20900[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (11))){
var inst_19251 = (state_19297[(14)]);
var inst_19261 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19251);
var state_19297__$1 = state_19297;
var statearr_19330_20901 = state_19297__$1;
(statearr_19330_20901[(2)] = inst_19261);

(statearr_19330_20901[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (9))){
var inst_19268 = (state_19297[(19)]);
var inst_19242 = (state_19297[(15)]);
var inst_19251 = (state_19297[(14)]);
var inst_19268__$1 = (inst_19242.cljs$core$IFn$_invoke$arity$1 ? inst_19242.cljs$core$IFn$_invoke$arity$1(inst_19251) : inst_19242.call(null,inst_19251));
var state_19297__$1 = (function (){var statearr_19331 = state_19297;
(statearr_19331[(19)] = inst_19268__$1);

return statearr_19331;
})();
if(cljs.core.truth_(inst_19268__$1)){
var statearr_19332_20903 = state_19297__$1;
(statearr_19332_20903[(1)] = (14));

} else {
var statearr_19333_20904 = state_19297__$1;
(statearr_19333_20904[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (5))){
var inst_19252 = (state_19297[(13)]);
var state_19297__$1 = state_19297;
var statearr_19334_20906 = state_19297__$1;
(statearr_19334_20906[(2)] = inst_19252);

(statearr_19334_20906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (14))){
var inst_19268 = (state_19297[(19)]);
var state_19297__$1 = state_19297;
var statearr_19335_20909 = state_19297__$1;
(statearr_19335_20909[(2)] = inst_19268);

(statearr_19335_20909[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (26))){
var inst_19287 = (state_19297[(2)]);
var state_19297__$1 = state_19297;
var statearr_19337_20911 = state_19297__$1;
(statearr_19337_20911[(2)] = inst_19287);

(statearr_19337_20911[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (16))){
var inst_19279 = (state_19297[(2)]);
var state_19297__$1 = state_19297;
if(cljs.core.truth_(inst_19279)){
var statearr_19339_20912 = state_19297__$1;
(statearr_19339_20912[(1)] = (20));

} else {
var statearr_19340_20913 = state_19297__$1;
(statearr_19340_20913[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (10))){
var inst_19293 = (state_19297[(2)]);
var state_19297__$1 = state_19297;
var statearr_19341_20918 = state_19297__$1;
(statearr_19341_20918[(2)] = inst_19293);

(statearr_19341_20918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (18))){
var inst_19271 = (state_19297[(16)]);
var state_19297__$1 = state_19297;
var statearr_19342_20919 = state_19297__$1;
(statearr_19342_20919[(2)] = inst_19271);

(statearr_19342_20919[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19298 === (8))){
var inst_19250 = (state_19297[(7)]);
var inst_19259 = (inst_19250 == null);
var state_19297__$1 = state_19297;
if(cljs.core.truth_(inst_19259)){
var statearr_19347_20920 = state_19297__$1;
(statearr_19347_20920[(1)] = (11));

} else {
var statearr_19348_20921 = state_19297__$1;
(statearr_19348_20921[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17758__auto__ = null;
var cljs$core$async$mix_$_state_machine__17758__auto____0 = (function (){
var statearr_19349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19349[(0)] = cljs$core$async$mix_$_state_machine__17758__auto__);

(statearr_19349[(1)] = (1));

return statearr_19349;
});
var cljs$core$async$mix_$_state_machine__17758__auto____1 = (function (state_19297){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_19297);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e19351){var ex__17761__auto__ = e19351;
var statearr_19353_20922 = state_19297;
(statearr_19353_20922[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_19297[(4)]))){
var statearr_19355_20923 = state_19297;
(statearr_19355_20923[(1)] = cljs.core.first((state_19297[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20924 = state_19297;
state_19297 = G__20924;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17758__auto__ = function(state_19297){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17758__auto____1.call(this,state_19297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17758__auto____0;
cljs$core$async$mix_$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17758__auto____1;
return cljs$core$async$mix_$_state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19358 = f__17981__auto__();
(statearr_19358[(6)] = c__17980__auto___20862);

return statearr_19358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20930 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20930(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20935 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20935(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20937 = (function() {
var G__20938 = null;
var G__20938__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20938__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20938 = function(p,v){
switch(arguments.length){
case 1:
return G__20938__1.call(this,p);
case 2:
return G__20938__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20938.cljs$core$IFn$_invoke$arity$1 = G__20938__1;
G__20938.cljs$core$IFn$_invoke$arity$2 = G__20938__2;
return G__20938;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19399 = arguments.length;
switch (G__19399) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20937(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20937(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19414 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19415){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19415 = meta19415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19416,meta19415__$1){
var self__ = this;
var _19416__$1 = this;
return (new cljs.core.async.t_cljs$core$async19414(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19415__$1));
}));

(cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19416){
var self__ = this;
var _19416__$1 = this;
return self__.meta19415;
}));

(cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19415","meta19415",1970918886,null)], null);
}));

(cljs.core.async.t_cljs$core$async19414.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19414");

(cljs.core.async.t_cljs$core$async19414.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19414");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19414.
 */
cljs.core.async.__GT_t_cljs$core$async19414 = (function cljs$core$async$__GT_t_cljs$core$async19414(ch,topic_fn,buf_fn,mults,ensure_mult,meta19415){
return (new cljs.core.async.t_cljs$core$async19414(ch,topic_fn,buf_fn,mults,ensure_mult,meta19415));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19410 = arguments.length;
switch (G__19410) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19408_SHARP_){
if(cljs.core.truth_((p1__19408_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19408_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19408_SHARP_.call(null,topic)))){
return p1__19408_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19408_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async19414(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__17980__auto___20968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_19504){
var state_val_19505 = (state_19504[(1)]);
if((state_val_19505 === (7))){
var inst_19500 = (state_19504[(2)]);
var state_19504__$1 = state_19504;
var statearr_19506_20975 = state_19504__$1;
(statearr_19506_20975[(2)] = inst_19500);

(statearr_19506_20975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (20))){
var state_19504__$1 = state_19504;
var statearr_19507_20976 = state_19504__$1;
(statearr_19507_20976[(2)] = null);

(statearr_19507_20976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (1))){
var state_19504__$1 = state_19504;
var statearr_19512_20977 = state_19504__$1;
(statearr_19512_20977[(2)] = null);

(statearr_19512_20977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (24))){
var inst_19483 = (state_19504[(7)]);
var inst_19492 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19483);
var state_19504__$1 = state_19504;
var statearr_19513_20978 = state_19504__$1;
(statearr_19513_20978[(2)] = inst_19492);

(statearr_19513_20978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (4))){
var inst_19430 = (state_19504[(8)]);
var inst_19430__$1 = (state_19504[(2)]);
var inst_19431 = (inst_19430__$1 == null);
var state_19504__$1 = (function (){var statearr_19514 = state_19504;
(statearr_19514[(8)] = inst_19430__$1);

return statearr_19514;
})();
if(cljs.core.truth_(inst_19431)){
var statearr_19519_20979 = state_19504__$1;
(statearr_19519_20979[(1)] = (5));

} else {
var statearr_19520_20980 = state_19504__$1;
(statearr_19520_20980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (15))){
var inst_19477 = (state_19504[(2)]);
var state_19504__$1 = state_19504;
var statearr_19521_20981 = state_19504__$1;
(statearr_19521_20981[(2)] = inst_19477);

(statearr_19521_20981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (21))){
var inst_19497 = (state_19504[(2)]);
var state_19504__$1 = (function (){var statearr_19522 = state_19504;
(statearr_19522[(9)] = inst_19497);

return statearr_19522;
})();
var statearr_19523_20982 = state_19504__$1;
(statearr_19523_20982[(2)] = null);

(statearr_19523_20982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (13))){
var inst_19456 = (state_19504[(10)]);
var inst_19458 = cljs.core.chunked_seq_QMARK_(inst_19456);
var state_19504__$1 = state_19504;
if(inst_19458){
var statearr_19524_20983 = state_19504__$1;
(statearr_19524_20983[(1)] = (16));

} else {
var statearr_19525_20984 = state_19504__$1;
(statearr_19525_20984[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (22))){
var inst_19489 = (state_19504[(2)]);
var state_19504__$1 = state_19504;
if(cljs.core.truth_(inst_19489)){
var statearr_19526_20985 = state_19504__$1;
(statearr_19526_20985[(1)] = (23));

} else {
var statearr_19527_20986 = state_19504__$1;
(statearr_19527_20986[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (6))){
var inst_19430 = (state_19504[(8)]);
var inst_19485 = (state_19504[(11)]);
var inst_19483 = (state_19504[(7)]);
var inst_19483__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19430) : topic_fn.call(null,inst_19430));
var inst_19484 = cljs.core.deref(mults);
var inst_19485__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19484,inst_19483__$1);
var state_19504__$1 = (function (){var statearr_19530 = state_19504;
(statearr_19530[(11)] = inst_19485__$1);

(statearr_19530[(7)] = inst_19483__$1);

return statearr_19530;
})();
if(cljs.core.truth_(inst_19485__$1)){
var statearr_19531_20989 = state_19504__$1;
(statearr_19531_20989[(1)] = (19));

} else {
var statearr_19532_20990 = state_19504__$1;
(statearr_19532_20990[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (25))){
var inst_19494 = (state_19504[(2)]);
var state_19504__$1 = state_19504;
var statearr_19533_20992 = state_19504__$1;
(statearr_19533_20992[(2)] = inst_19494);

(statearr_19533_20992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (17))){
var inst_19456 = (state_19504[(10)]);
var inst_19468 = cljs.core.first(inst_19456);
var inst_19469 = cljs.core.async.muxch_STAR_(inst_19468);
var inst_19470 = cljs.core.async.close_BANG_(inst_19469);
var inst_19471 = cljs.core.next(inst_19456);
var inst_19440 = inst_19471;
var inst_19441 = null;
var inst_19442 = (0);
var inst_19443 = (0);
var state_19504__$1 = (function (){var statearr_19537 = state_19504;
(statearr_19537[(12)] = inst_19442);

(statearr_19537[(13)] = inst_19440);

(statearr_19537[(14)] = inst_19441);

(statearr_19537[(15)] = inst_19470);

(statearr_19537[(16)] = inst_19443);

return statearr_19537;
})();
var statearr_19538_20995 = state_19504__$1;
(statearr_19538_20995[(2)] = null);

(statearr_19538_20995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (3))){
var inst_19502 = (state_19504[(2)]);
var state_19504__$1 = state_19504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19504__$1,inst_19502);
} else {
if((state_val_19505 === (12))){
var inst_19479 = (state_19504[(2)]);
var state_19504__$1 = state_19504;
var statearr_19539_20996 = state_19504__$1;
(statearr_19539_20996[(2)] = inst_19479);

(statearr_19539_20996[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (2))){
var state_19504__$1 = state_19504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19504__$1,(4),ch);
} else {
if((state_val_19505 === (23))){
var state_19504__$1 = state_19504;
var statearr_19540_20997 = state_19504__$1;
(statearr_19540_20997[(2)] = null);

(statearr_19540_20997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (19))){
var inst_19430 = (state_19504[(8)]);
var inst_19485 = (state_19504[(11)]);
var inst_19487 = cljs.core.async.muxch_STAR_(inst_19485);
var state_19504__$1 = state_19504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19504__$1,(22),inst_19487,inst_19430);
} else {
if((state_val_19505 === (11))){
var inst_19440 = (state_19504[(13)]);
var inst_19456 = (state_19504[(10)]);
var inst_19456__$1 = cljs.core.seq(inst_19440);
var state_19504__$1 = (function (){var statearr_19541 = state_19504;
(statearr_19541[(10)] = inst_19456__$1);

return statearr_19541;
})();
if(inst_19456__$1){
var statearr_19542_21003 = state_19504__$1;
(statearr_19542_21003[(1)] = (13));

} else {
var statearr_19543_21004 = state_19504__$1;
(statearr_19543_21004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (9))){
var inst_19481 = (state_19504[(2)]);
var state_19504__$1 = state_19504;
var statearr_19544_21010 = state_19504__$1;
(statearr_19544_21010[(2)] = inst_19481);

(statearr_19544_21010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (5))){
var inst_19437 = cljs.core.deref(mults);
var inst_19438 = cljs.core.vals(inst_19437);
var inst_19439 = cljs.core.seq(inst_19438);
var inst_19440 = inst_19439;
var inst_19441 = null;
var inst_19442 = (0);
var inst_19443 = (0);
var state_19504__$1 = (function (){var statearr_19545 = state_19504;
(statearr_19545[(12)] = inst_19442);

(statearr_19545[(13)] = inst_19440);

(statearr_19545[(14)] = inst_19441);

(statearr_19545[(16)] = inst_19443);

return statearr_19545;
})();
var statearr_19546_21018 = state_19504__$1;
(statearr_19546_21018[(2)] = null);

(statearr_19546_21018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (14))){
var state_19504__$1 = state_19504;
var statearr_19550_21020 = state_19504__$1;
(statearr_19550_21020[(2)] = null);

(statearr_19550_21020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (16))){
var inst_19456 = (state_19504[(10)]);
var inst_19463 = cljs.core.chunk_first(inst_19456);
var inst_19464 = cljs.core.chunk_rest(inst_19456);
var inst_19465 = cljs.core.count(inst_19463);
var inst_19440 = inst_19464;
var inst_19441 = inst_19463;
var inst_19442 = inst_19465;
var inst_19443 = (0);
var state_19504__$1 = (function (){var statearr_19551 = state_19504;
(statearr_19551[(12)] = inst_19442);

(statearr_19551[(13)] = inst_19440);

(statearr_19551[(14)] = inst_19441);

(statearr_19551[(16)] = inst_19443);

return statearr_19551;
})();
var statearr_19552_21026 = state_19504__$1;
(statearr_19552_21026[(2)] = null);

(statearr_19552_21026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (10))){
var inst_19442 = (state_19504[(12)]);
var inst_19440 = (state_19504[(13)]);
var inst_19441 = (state_19504[(14)]);
var inst_19443 = (state_19504[(16)]);
var inst_19448 = cljs.core._nth(inst_19441,inst_19443);
var inst_19450 = cljs.core.async.muxch_STAR_(inst_19448);
var inst_19451 = cljs.core.async.close_BANG_(inst_19450);
var inst_19452 = (inst_19443 + (1));
var tmp19547 = inst_19442;
var tmp19548 = inst_19440;
var tmp19549 = inst_19441;
var inst_19440__$1 = tmp19548;
var inst_19441__$1 = tmp19549;
var inst_19442__$1 = tmp19547;
var inst_19443__$1 = inst_19452;
var state_19504__$1 = (function (){var statearr_19553 = state_19504;
(statearr_19553[(12)] = inst_19442__$1);

(statearr_19553[(13)] = inst_19440__$1);

(statearr_19553[(14)] = inst_19441__$1);

(statearr_19553[(17)] = inst_19451);

(statearr_19553[(16)] = inst_19443__$1);

return statearr_19553;
})();
var statearr_19554_21027 = state_19504__$1;
(statearr_19554_21027[(2)] = null);

(statearr_19554_21027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (18))){
var inst_19474 = (state_19504[(2)]);
var state_19504__$1 = state_19504;
var statearr_19555_21029 = state_19504__$1;
(statearr_19555_21029[(2)] = inst_19474);

(statearr_19555_21029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (8))){
var inst_19442 = (state_19504[(12)]);
var inst_19443 = (state_19504[(16)]);
var inst_19445 = (inst_19443 < inst_19442);
var inst_19446 = inst_19445;
var state_19504__$1 = state_19504;
if(cljs.core.truth_(inst_19446)){
var statearr_19557_21030 = state_19504__$1;
(statearr_19557_21030[(1)] = (10));

} else {
var statearr_19558_21031 = state_19504__$1;
(statearr_19558_21031[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17758__auto__ = null;
var cljs$core$async$state_machine__17758__auto____0 = (function (){
var statearr_19559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19559[(0)] = cljs$core$async$state_machine__17758__auto__);

(statearr_19559[(1)] = (1));

return statearr_19559;
});
var cljs$core$async$state_machine__17758__auto____1 = (function (state_19504){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_19504);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e19563){var ex__17761__auto__ = e19563;
var statearr_19564_21042 = state_19504;
(statearr_19564_21042[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_19504[(4)]))){
var statearr_19565_21043 = state_19504;
(statearr_19565_21043[(1)] = cljs.core.first((state_19504[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21044 = state_19504;
state_19504 = G__21044;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$state_machine__17758__auto__ = function(state_19504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17758__auto____1.call(this,state_19504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17758__auto____0;
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17758__auto____1;
return cljs$core$async$state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19566 = f__17981__auto__();
(statearr_19566[(6)] = c__17980__auto___20968);

return statearr_19566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19572 = arguments.length;
switch (G__19572) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19574 = arguments.length;
switch (G__19574) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19604 = arguments.length;
switch (G__19604) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17980__auto___21075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_19665){
var state_val_19666 = (state_19665[(1)]);
if((state_val_19666 === (7))){
var state_19665__$1 = state_19665;
var statearr_19667_21082 = state_19665__$1;
(statearr_19667_21082[(2)] = null);

(statearr_19667_21082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (1))){
var state_19665__$1 = state_19665;
var statearr_19668_21084 = state_19665__$1;
(statearr_19668_21084[(2)] = null);

(statearr_19668_21084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (4))){
var inst_19622 = (state_19665[(7)]);
var inst_19623 = (state_19665[(8)]);
var inst_19625 = (inst_19623 < inst_19622);
var state_19665__$1 = state_19665;
if(cljs.core.truth_(inst_19625)){
var statearr_19669_21089 = state_19665__$1;
(statearr_19669_21089[(1)] = (6));

} else {
var statearr_19670_21090 = state_19665__$1;
(statearr_19670_21090[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (15))){
var inst_19651 = (state_19665[(9)]);
var inst_19656 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19651);
var state_19665__$1 = state_19665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19665__$1,(17),out,inst_19656);
} else {
if((state_val_19666 === (13))){
var inst_19651 = (state_19665[(9)]);
var inst_19651__$1 = (state_19665[(2)]);
var inst_19652 = cljs.core.some(cljs.core.nil_QMARK_,inst_19651__$1);
var state_19665__$1 = (function (){var statearr_19671 = state_19665;
(statearr_19671[(9)] = inst_19651__$1);

return statearr_19671;
})();
if(cljs.core.truth_(inst_19652)){
var statearr_19672_21091 = state_19665__$1;
(statearr_19672_21091[(1)] = (14));

} else {
var statearr_19673_21092 = state_19665__$1;
(statearr_19673_21092[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (6))){
var state_19665__$1 = state_19665;
var statearr_19674_21093 = state_19665__$1;
(statearr_19674_21093[(2)] = null);

(statearr_19674_21093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (17))){
var inst_19658 = (state_19665[(2)]);
var state_19665__$1 = (function (){var statearr_19676 = state_19665;
(statearr_19676[(10)] = inst_19658);

return statearr_19676;
})();
var statearr_19677_21095 = state_19665__$1;
(statearr_19677_21095[(2)] = null);

(statearr_19677_21095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (3))){
var inst_19663 = (state_19665[(2)]);
var state_19665__$1 = state_19665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19665__$1,inst_19663);
} else {
if((state_val_19666 === (12))){
var _ = (function (){var statearr_19678 = state_19665;
(statearr_19678[(4)] = cljs.core.rest((state_19665[(4)])));

return statearr_19678;
})();
var state_19665__$1 = state_19665;
var ex19675 = (state_19665__$1[(2)]);
var statearr_19679_21096 = state_19665__$1;
(statearr_19679_21096[(5)] = ex19675);


if((ex19675 instanceof Object)){
var statearr_19684_21097 = state_19665__$1;
(statearr_19684_21097[(1)] = (11));

(statearr_19684_21097[(5)] = null);

} else {
throw ex19675;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (2))){
var inst_19621 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19622 = cnt;
var inst_19623 = (0);
var state_19665__$1 = (function (){var statearr_19692 = state_19665;
(statearr_19692[(11)] = inst_19621);

(statearr_19692[(7)] = inst_19622);

(statearr_19692[(8)] = inst_19623);

return statearr_19692;
})();
var statearr_19693_21099 = state_19665__$1;
(statearr_19693_21099[(2)] = null);

(statearr_19693_21099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (11))){
var inst_19630 = (state_19665[(2)]);
var inst_19631 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19665__$1 = (function (){var statearr_19694 = state_19665;
(statearr_19694[(12)] = inst_19630);

return statearr_19694;
})();
var statearr_19695_21104 = state_19665__$1;
(statearr_19695_21104[(2)] = inst_19631);

(statearr_19695_21104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (9))){
var inst_19623 = (state_19665[(8)]);
var _ = (function (){var statearr_19696 = state_19665;
(statearr_19696[(4)] = cljs.core.cons((12),(state_19665[(4)])));

return statearr_19696;
})();
var inst_19637 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19623) : chs__$1.call(null,inst_19623));
var inst_19638 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19623) : done.call(null,inst_19623));
var inst_19639 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19637,inst_19638);
var ___$1 = (function (){var statearr_19697 = state_19665;
(statearr_19697[(4)] = cljs.core.rest((state_19665[(4)])));

return statearr_19697;
})();
var state_19665__$1 = state_19665;
var statearr_19698_21109 = state_19665__$1;
(statearr_19698_21109[(2)] = inst_19639);

(statearr_19698_21109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (5))){
var inst_19649 = (state_19665[(2)]);
var state_19665__$1 = (function (){var statearr_19699 = state_19665;
(statearr_19699[(13)] = inst_19649);

return statearr_19699;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19665__$1,(13),dchan);
} else {
if((state_val_19666 === (14))){
var inst_19654 = cljs.core.async.close_BANG_(out);
var state_19665__$1 = state_19665;
var statearr_19700_21110 = state_19665__$1;
(statearr_19700_21110[(2)] = inst_19654);

(statearr_19700_21110[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (16))){
var inst_19661 = (state_19665[(2)]);
var state_19665__$1 = state_19665;
var statearr_19701_21111 = state_19665__$1;
(statearr_19701_21111[(2)] = inst_19661);

(statearr_19701_21111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (10))){
var inst_19623 = (state_19665[(8)]);
var inst_19642 = (state_19665[(2)]);
var inst_19643 = (inst_19623 + (1));
var inst_19623__$1 = inst_19643;
var state_19665__$1 = (function (){var statearr_19702 = state_19665;
(statearr_19702[(8)] = inst_19623__$1);

(statearr_19702[(14)] = inst_19642);

return statearr_19702;
})();
var statearr_19703_21115 = state_19665__$1;
(statearr_19703_21115[(2)] = null);

(statearr_19703_21115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (8))){
var inst_19647 = (state_19665[(2)]);
var state_19665__$1 = state_19665;
var statearr_19704_21116 = state_19665__$1;
(statearr_19704_21116[(2)] = inst_19647);

(statearr_19704_21116[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17758__auto__ = null;
var cljs$core$async$state_machine__17758__auto____0 = (function (){
var statearr_19705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19705[(0)] = cljs$core$async$state_machine__17758__auto__);

(statearr_19705[(1)] = (1));

return statearr_19705;
});
var cljs$core$async$state_machine__17758__auto____1 = (function (state_19665){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_19665);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e19706){var ex__17761__auto__ = e19706;
var statearr_19707_21118 = state_19665;
(statearr_19707_21118[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_19665[(4)]))){
var statearr_19708_21119 = state_19665;
(statearr_19708_21119[(1)] = cljs.core.first((state_19665[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21120 = state_19665;
state_19665 = G__21120;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$state_machine__17758__auto__ = function(state_19665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17758__auto____1.call(this,state_19665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17758__auto____0;
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17758__auto____1;
return cljs$core$async$state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19709 = f__17981__auto__();
(statearr_19709[(6)] = c__17980__auto___21075);

return statearr_19709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19712 = arguments.length;
switch (G__19712) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17980__auto___21127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_19750){
var state_val_19751 = (state_19750[(1)]);
if((state_val_19751 === (7))){
var inst_19727 = (state_19750[(7)]);
var inst_19728 = (state_19750[(8)]);
var inst_19727__$1 = (state_19750[(2)]);
var inst_19728__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19727__$1,(0),null);
var inst_19730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19727__$1,(1),null);
var inst_19731 = (inst_19728__$1 == null);
var state_19750__$1 = (function (){var statearr_19754 = state_19750;
(statearr_19754[(7)] = inst_19727__$1);

(statearr_19754[(8)] = inst_19728__$1);

(statearr_19754[(9)] = inst_19730);

return statearr_19754;
})();
if(cljs.core.truth_(inst_19731)){
var statearr_19755_21131 = state_19750__$1;
(statearr_19755_21131[(1)] = (8));

} else {
var statearr_19756_21132 = state_19750__$1;
(statearr_19756_21132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (1))){
var inst_19717 = cljs.core.vec(chs);
var inst_19718 = inst_19717;
var state_19750__$1 = (function (){var statearr_19757 = state_19750;
(statearr_19757[(10)] = inst_19718);

return statearr_19757;
})();
var statearr_19758_21133 = state_19750__$1;
(statearr_19758_21133[(2)] = null);

(statearr_19758_21133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (4))){
var inst_19718 = (state_19750[(10)]);
var state_19750__$1 = state_19750;
return cljs.core.async.ioc_alts_BANG_(state_19750__$1,(7),inst_19718);
} else {
if((state_val_19751 === (6))){
var inst_19746 = (state_19750[(2)]);
var state_19750__$1 = state_19750;
var statearr_19759_21134 = state_19750__$1;
(statearr_19759_21134[(2)] = inst_19746);

(statearr_19759_21134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (3))){
var inst_19748 = (state_19750[(2)]);
var state_19750__$1 = state_19750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19750__$1,inst_19748);
} else {
if((state_val_19751 === (2))){
var inst_19718 = (state_19750[(10)]);
var inst_19720 = cljs.core.count(inst_19718);
var inst_19721 = (inst_19720 > (0));
var state_19750__$1 = state_19750;
if(cljs.core.truth_(inst_19721)){
var statearr_19761_21137 = state_19750__$1;
(statearr_19761_21137[(1)] = (4));

} else {
var statearr_19762_21138 = state_19750__$1;
(statearr_19762_21138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (11))){
var inst_19718 = (state_19750[(10)]);
var inst_19739 = (state_19750[(2)]);
var tmp19760 = inst_19718;
var inst_19718__$1 = tmp19760;
var state_19750__$1 = (function (){var statearr_19763 = state_19750;
(statearr_19763[(10)] = inst_19718__$1);

(statearr_19763[(11)] = inst_19739);

return statearr_19763;
})();
var statearr_19764_21143 = state_19750__$1;
(statearr_19764_21143[(2)] = null);

(statearr_19764_21143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (9))){
var inst_19728 = (state_19750[(8)]);
var state_19750__$1 = state_19750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19750__$1,(11),out,inst_19728);
} else {
if((state_val_19751 === (5))){
var inst_19744 = cljs.core.async.close_BANG_(out);
var state_19750__$1 = state_19750;
var statearr_19765_21144 = state_19750__$1;
(statearr_19765_21144[(2)] = inst_19744);

(statearr_19765_21144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (10))){
var inst_19742 = (state_19750[(2)]);
var state_19750__$1 = state_19750;
var statearr_19766_21145 = state_19750__$1;
(statearr_19766_21145[(2)] = inst_19742);

(statearr_19766_21145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (8))){
var inst_19718 = (state_19750[(10)]);
var inst_19727 = (state_19750[(7)]);
var inst_19728 = (state_19750[(8)]);
var inst_19730 = (state_19750[(9)]);
var inst_19734 = (function (){var cs = inst_19718;
var vec__19723 = inst_19727;
var v = inst_19728;
var c = inst_19730;
return (function (p1__19710_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19710_SHARP_);
});
})();
var inst_19735 = cljs.core.filterv(inst_19734,inst_19718);
var inst_19718__$1 = inst_19735;
var state_19750__$1 = (function (){var statearr_19770 = state_19750;
(statearr_19770[(10)] = inst_19718__$1);

return statearr_19770;
})();
var statearr_19771_21147 = state_19750__$1;
(statearr_19771_21147[(2)] = null);

(statearr_19771_21147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17758__auto__ = null;
var cljs$core$async$state_machine__17758__auto____0 = (function (){
var statearr_19772 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19772[(0)] = cljs$core$async$state_machine__17758__auto__);

(statearr_19772[(1)] = (1));

return statearr_19772;
});
var cljs$core$async$state_machine__17758__auto____1 = (function (state_19750){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_19750);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e19773){var ex__17761__auto__ = e19773;
var statearr_19774_21148 = state_19750;
(statearr_19774_21148[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_19750[(4)]))){
var statearr_19775_21149 = state_19750;
(statearr_19775_21149[(1)] = cljs.core.first((state_19750[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21150 = state_19750;
state_19750 = G__21150;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$state_machine__17758__auto__ = function(state_19750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17758__auto____1.call(this,state_19750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17758__auto____0;
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17758__auto____1;
return cljs$core$async$state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19776 = f__17981__auto__();
(statearr_19776[(6)] = c__17980__auto___21127);

return statearr_19776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19791 = arguments.length;
switch (G__19791) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17980__auto___21156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_19825){
var state_val_19826 = (state_19825[(1)]);
if((state_val_19826 === (7))){
var inst_19804 = (state_19825[(7)]);
var inst_19804__$1 = (state_19825[(2)]);
var inst_19805 = (inst_19804__$1 == null);
var inst_19806 = cljs.core.not(inst_19805);
var state_19825__$1 = (function (){var statearr_19830 = state_19825;
(statearr_19830[(7)] = inst_19804__$1);

return statearr_19830;
})();
if(inst_19806){
var statearr_19831_21158 = state_19825__$1;
(statearr_19831_21158[(1)] = (8));

} else {
var statearr_19836_21159 = state_19825__$1;
(statearr_19836_21159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (1))){
var inst_19792 = (0);
var state_19825__$1 = (function (){var statearr_19840 = state_19825;
(statearr_19840[(8)] = inst_19792);

return statearr_19840;
})();
var statearr_19841_21160 = state_19825__$1;
(statearr_19841_21160[(2)] = null);

(statearr_19841_21160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (4))){
var state_19825__$1 = state_19825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19825__$1,(7),ch);
} else {
if((state_val_19826 === (6))){
var inst_19820 = (state_19825[(2)]);
var state_19825__$1 = state_19825;
var statearr_19849_21165 = state_19825__$1;
(statearr_19849_21165[(2)] = inst_19820);

(statearr_19849_21165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (3))){
var inst_19822 = (state_19825[(2)]);
var inst_19823 = cljs.core.async.close_BANG_(out);
var state_19825__$1 = (function (){var statearr_19850 = state_19825;
(statearr_19850[(9)] = inst_19822);

return statearr_19850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19825__$1,inst_19823);
} else {
if((state_val_19826 === (2))){
var inst_19792 = (state_19825[(8)]);
var inst_19798 = (inst_19792 < n);
var state_19825__$1 = state_19825;
if(cljs.core.truth_(inst_19798)){
var statearr_19851_21166 = state_19825__$1;
(statearr_19851_21166[(1)] = (4));

} else {
var statearr_19852_21167 = state_19825__$1;
(statearr_19852_21167[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (11))){
var inst_19792 = (state_19825[(8)]);
var inst_19809 = (state_19825[(2)]);
var inst_19813 = (inst_19792 + (1));
var inst_19792__$1 = inst_19813;
var state_19825__$1 = (function (){var statearr_19855 = state_19825;
(statearr_19855[(10)] = inst_19809);

(statearr_19855[(8)] = inst_19792__$1);

return statearr_19855;
})();
var statearr_19856_21168 = state_19825__$1;
(statearr_19856_21168[(2)] = null);

(statearr_19856_21168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (9))){
var state_19825__$1 = state_19825;
var statearr_19857_21169 = state_19825__$1;
(statearr_19857_21169[(2)] = null);

(statearr_19857_21169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (5))){
var state_19825__$1 = state_19825;
var statearr_19858_21170 = state_19825__$1;
(statearr_19858_21170[(2)] = null);

(statearr_19858_21170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (10))){
var inst_19817 = (state_19825[(2)]);
var state_19825__$1 = state_19825;
var statearr_19859_21171 = state_19825__$1;
(statearr_19859_21171[(2)] = inst_19817);

(statearr_19859_21171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (8))){
var inst_19804 = (state_19825[(7)]);
var state_19825__$1 = state_19825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19825__$1,(11),out,inst_19804);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17758__auto__ = null;
var cljs$core$async$state_machine__17758__auto____0 = (function (){
var statearr_19860 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19860[(0)] = cljs$core$async$state_machine__17758__auto__);

(statearr_19860[(1)] = (1));

return statearr_19860;
});
var cljs$core$async$state_machine__17758__auto____1 = (function (state_19825){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_19825);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e19861){var ex__17761__auto__ = e19861;
var statearr_19862_21173 = state_19825;
(statearr_19862_21173[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_19825[(4)]))){
var statearr_19863_21175 = state_19825;
(statearr_19863_21175[(1)] = cljs.core.first((state_19825[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21176 = state_19825;
state_19825 = G__21176;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$state_machine__17758__auto__ = function(state_19825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17758__auto____1.call(this,state_19825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17758__auto____0;
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17758__auto____1;
return cljs$core$async$state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19864 = f__17981__auto__();
(statearr_19864[(6)] = c__17980__auto___21156);

return statearr_19864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19869 = (function (f,ch,meta19867,_,fn1,meta19870){
this.f = f;
this.ch = ch;
this.meta19867 = meta19867;
this._ = _;
this.fn1 = fn1;
this.meta19870 = meta19870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19871,meta19870__$1){
var self__ = this;
var _19871__$1 = this;
return (new cljs.core.async.t_cljs$core$async19869(self__.f,self__.ch,self__.meta19867,self__._,self__.fn1,meta19870__$1));
}));

(cljs.core.async.t_cljs$core$async19869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19871){
var self__ = this;
var _19871__$1 = this;
return self__.meta19870;
}));

(cljs.core.async.t_cljs$core$async19869.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19865_SHARP_){
var G__19874 = (((p1__19865_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19865_SHARP_) : self__.f.call(null,p1__19865_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19874) : f1.call(null,G__19874));
});
}));

(cljs.core.async.t_cljs$core$async19869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19867","meta19867",-920161830,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19866","cljs.core.async/t_cljs$core$async19866",790421431,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19870","meta19870",-2089681782,null)], null);
}));

(cljs.core.async.t_cljs$core$async19869.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19869");

(cljs.core.async.t_cljs$core$async19869.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19869");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19869.
 */
cljs.core.async.__GT_t_cljs$core$async19869 = (function cljs$core$async$__GT_t_cljs$core$async19869(f,ch,meta19867,_,fn1,meta19870){
return (new cljs.core.async.t_cljs$core$async19869(f,ch,meta19867,_,fn1,meta19870));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19866 = (function (f,ch,meta19867){
this.f = f;
this.ch = ch;
this.meta19867 = meta19867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19868,meta19867__$1){
var self__ = this;
var _19868__$1 = this;
return (new cljs.core.async.t_cljs$core$async19866(self__.f,self__.ch,meta19867__$1));
}));

(cljs.core.async.t_cljs$core$async19866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19868){
var self__ = this;
var _19868__$1 = this;
return self__.meta19867;
}));

(cljs.core.async.t_cljs$core$async19866.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19866.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19866.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19866.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19866.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async19869(self__.f,self__.ch,self__.meta19867,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19886 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19886) : self__.f.call(null,G__19886));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19866.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19866.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19867","meta19867",-920161830,null)], null);
}));

(cljs.core.async.t_cljs$core$async19866.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19866");

(cljs.core.async.t_cljs$core$async19866.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19866");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19866.
 */
cljs.core.async.__GT_t_cljs$core$async19866 = (function cljs$core$async$__GT_t_cljs$core$async19866(f,ch,meta19867){
return (new cljs.core.async.t_cljs$core$async19866(f,ch,meta19867));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19866(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19889 = (function (f,ch,meta19890){
this.f = f;
this.ch = ch;
this.meta19890 = meta19890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19891,meta19890__$1){
var self__ = this;
var _19891__$1 = this;
return (new cljs.core.async.t_cljs$core$async19889(self__.f,self__.ch,meta19890__$1));
}));

(cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19891){
var self__ = this;
var _19891__$1 = this;
return self__.meta19890;
}));

(cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19890","meta19890",1743142528,null)], null);
}));

(cljs.core.async.t_cljs$core$async19889.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19889");

(cljs.core.async.t_cljs$core$async19889.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19889");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19889.
 */
cljs.core.async.__GT_t_cljs$core$async19889 = (function cljs$core$async$__GT_t_cljs$core$async19889(f,ch,meta19890){
return (new cljs.core.async.t_cljs$core$async19889(f,ch,meta19890));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19889(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19892 = (function (p,ch,meta19893){
this.p = p;
this.ch = ch;
this.meta19893 = meta19893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19894,meta19893__$1){
var self__ = this;
var _19894__$1 = this;
return (new cljs.core.async.t_cljs$core$async19892(self__.p,self__.ch,meta19893__$1));
}));

(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19894){
var self__ = this;
var _19894__$1 = this;
return self__.meta19893;
}));

(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19893","meta19893",115764348,null)], null);
}));

(cljs.core.async.t_cljs$core$async19892.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19892");

(cljs.core.async.t_cljs$core$async19892.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19892");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19892.
 */
cljs.core.async.__GT_t_cljs$core$async19892 = (function cljs$core$async$__GT_t_cljs$core$async19892(p,ch,meta19893){
return (new cljs.core.async.t_cljs$core$async19892(p,ch,meta19893));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async19892(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19908 = arguments.length;
switch (G__19908) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17980__auto___21194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_19930){
var state_val_19931 = (state_19930[(1)]);
if((state_val_19931 === (7))){
var inst_19926 = (state_19930[(2)]);
var state_19930__$1 = state_19930;
var statearr_19932_21195 = state_19930__$1;
(statearr_19932_21195[(2)] = inst_19926);

(statearr_19932_21195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (1))){
var state_19930__$1 = state_19930;
var statearr_19933_21196 = state_19930__$1;
(statearr_19933_21196[(2)] = null);

(statearr_19933_21196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (4))){
var inst_19912 = (state_19930[(7)]);
var inst_19912__$1 = (state_19930[(2)]);
var inst_19913 = (inst_19912__$1 == null);
var state_19930__$1 = (function (){var statearr_19934 = state_19930;
(statearr_19934[(7)] = inst_19912__$1);

return statearr_19934;
})();
if(cljs.core.truth_(inst_19913)){
var statearr_19935_21198 = state_19930__$1;
(statearr_19935_21198[(1)] = (5));

} else {
var statearr_19936_21199 = state_19930__$1;
(statearr_19936_21199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (6))){
var inst_19912 = (state_19930[(7)]);
var inst_19917 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19912) : p.call(null,inst_19912));
var state_19930__$1 = state_19930;
if(cljs.core.truth_(inst_19917)){
var statearr_19937_21203 = state_19930__$1;
(statearr_19937_21203[(1)] = (8));

} else {
var statearr_19938_21204 = state_19930__$1;
(statearr_19938_21204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (3))){
var inst_19928 = (state_19930[(2)]);
var state_19930__$1 = state_19930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19930__$1,inst_19928);
} else {
if((state_val_19931 === (2))){
var state_19930__$1 = state_19930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19930__$1,(4),ch);
} else {
if((state_val_19931 === (11))){
var inst_19920 = (state_19930[(2)]);
var state_19930__$1 = state_19930;
var statearr_19939_21205 = state_19930__$1;
(statearr_19939_21205[(2)] = inst_19920);

(statearr_19939_21205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (9))){
var state_19930__$1 = state_19930;
var statearr_19940_21206 = state_19930__$1;
(statearr_19940_21206[(2)] = null);

(statearr_19940_21206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (5))){
var inst_19915 = cljs.core.async.close_BANG_(out);
var state_19930__$1 = state_19930;
var statearr_19943_21207 = state_19930__$1;
(statearr_19943_21207[(2)] = inst_19915);

(statearr_19943_21207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (10))){
var inst_19923 = (state_19930[(2)]);
var state_19930__$1 = (function (){var statearr_19944 = state_19930;
(statearr_19944[(8)] = inst_19923);

return statearr_19944;
})();
var statearr_19945_21212 = state_19930__$1;
(statearr_19945_21212[(2)] = null);

(statearr_19945_21212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (8))){
var inst_19912 = (state_19930[(7)]);
var state_19930__$1 = state_19930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19930__$1,(11),out,inst_19912);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17758__auto__ = null;
var cljs$core$async$state_machine__17758__auto____0 = (function (){
var statearr_19947 = [null,null,null,null,null,null,null,null,null];
(statearr_19947[(0)] = cljs$core$async$state_machine__17758__auto__);

(statearr_19947[(1)] = (1));

return statearr_19947;
});
var cljs$core$async$state_machine__17758__auto____1 = (function (state_19930){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_19930);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e19948){var ex__17761__auto__ = e19948;
var statearr_19949_21213 = state_19930;
(statearr_19949_21213[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_19930[(4)]))){
var statearr_19951_21214 = state_19930;
(statearr_19951_21214[(1)] = cljs.core.first((state_19930[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21215 = state_19930;
state_19930 = G__21215;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$state_machine__17758__auto__ = function(state_19930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17758__auto____1.call(this,state_19930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17758__auto____0;
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17758__auto____1;
return cljs$core$async$state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19952 = f__17981__auto__();
(statearr_19952[(6)] = c__17980__auto___21194);

return statearr_19952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19954 = arguments.length;
switch (G__19954) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17980__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_20035){
var state_val_20036 = (state_20035[(1)]);
if((state_val_20036 === (7))){
var inst_20029 = (state_20035[(2)]);
var state_20035__$1 = state_20035;
var statearr_20046_21217 = state_20035__$1;
(statearr_20046_21217[(2)] = inst_20029);

(statearr_20046_21217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (20))){
var inst_19990 = (state_20035[(7)]);
var inst_20010 = (state_20035[(2)]);
var inst_20011 = cljs.core.next(inst_19990);
var inst_19976 = inst_20011;
var inst_19977 = null;
var inst_19978 = (0);
var inst_19979 = (0);
var state_20035__$1 = (function (){var statearr_20047 = state_20035;
(statearr_20047[(8)] = inst_19979);

(statearr_20047[(9)] = inst_19978);

(statearr_20047[(10)] = inst_20010);

(statearr_20047[(11)] = inst_19976);

(statearr_20047[(12)] = inst_19977);

return statearr_20047;
})();
var statearr_20048_21218 = state_20035__$1;
(statearr_20048_21218[(2)] = null);

(statearr_20048_21218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (1))){
var state_20035__$1 = state_20035;
var statearr_20050_21219 = state_20035__$1;
(statearr_20050_21219[(2)] = null);

(statearr_20050_21219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (4))){
var inst_19964 = (state_20035[(13)]);
var inst_19964__$1 = (state_20035[(2)]);
var inst_19965 = (inst_19964__$1 == null);
var state_20035__$1 = (function (){var statearr_20051 = state_20035;
(statearr_20051[(13)] = inst_19964__$1);

return statearr_20051;
})();
if(cljs.core.truth_(inst_19965)){
var statearr_20052_21221 = state_20035__$1;
(statearr_20052_21221[(1)] = (5));

} else {
var statearr_20053_21222 = state_20035__$1;
(statearr_20053_21222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (15))){
var state_20035__$1 = state_20035;
var statearr_20057_21223 = state_20035__$1;
(statearr_20057_21223[(2)] = null);

(statearr_20057_21223[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (21))){
var state_20035__$1 = state_20035;
var statearr_20060_21224 = state_20035__$1;
(statearr_20060_21224[(2)] = null);

(statearr_20060_21224[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (13))){
var inst_19979 = (state_20035[(8)]);
var inst_19978 = (state_20035[(9)]);
var inst_19976 = (state_20035[(11)]);
var inst_19977 = (state_20035[(12)]);
var inst_19986 = (state_20035[(2)]);
var inst_19987 = (inst_19979 + (1));
var tmp20054 = inst_19978;
var tmp20055 = inst_19976;
var tmp20056 = inst_19977;
var inst_19976__$1 = tmp20055;
var inst_19977__$1 = tmp20056;
var inst_19978__$1 = tmp20054;
var inst_19979__$1 = inst_19987;
var state_20035__$1 = (function (){var statearr_20064 = state_20035;
(statearr_20064[(8)] = inst_19979__$1);

(statearr_20064[(9)] = inst_19978__$1);

(statearr_20064[(14)] = inst_19986);

(statearr_20064[(11)] = inst_19976__$1);

(statearr_20064[(12)] = inst_19977__$1);

return statearr_20064;
})();
var statearr_20067_21229 = state_20035__$1;
(statearr_20067_21229[(2)] = null);

(statearr_20067_21229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (22))){
var state_20035__$1 = state_20035;
var statearr_20068_21230 = state_20035__$1;
(statearr_20068_21230[(2)] = null);

(statearr_20068_21230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (6))){
var inst_19964 = (state_20035[(13)]);
var inst_19974 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19964) : f.call(null,inst_19964));
var inst_19975 = cljs.core.seq(inst_19974);
var inst_19976 = inst_19975;
var inst_19977 = null;
var inst_19978 = (0);
var inst_19979 = (0);
var state_20035__$1 = (function (){var statearr_20069 = state_20035;
(statearr_20069[(8)] = inst_19979);

(statearr_20069[(9)] = inst_19978);

(statearr_20069[(11)] = inst_19976);

(statearr_20069[(12)] = inst_19977);

return statearr_20069;
})();
var statearr_20070_21234 = state_20035__$1;
(statearr_20070_21234[(2)] = null);

(statearr_20070_21234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (17))){
var inst_19990 = (state_20035[(7)]);
var inst_20003 = cljs.core.chunk_first(inst_19990);
var inst_20004 = cljs.core.chunk_rest(inst_19990);
var inst_20005 = cljs.core.count(inst_20003);
var inst_19976 = inst_20004;
var inst_19977 = inst_20003;
var inst_19978 = inst_20005;
var inst_19979 = (0);
var state_20035__$1 = (function (){var statearr_20072 = state_20035;
(statearr_20072[(8)] = inst_19979);

(statearr_20072[(9)] = inst_19978);

(statearr_20072[(11)] = inst_19976);

(statearr_20072[(12)] = inst_19977);

return statearr_20072;
})();
var statearr_20073_21235 = state_20035__$1;
(statearr_20073_21235[(2)] = null);

(statearr_20073_21235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (3))){
var inst_20031 = (state_20035[(2)]);
var state_20035__$1 = state_20035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20035__$1,inst_20031);
} else {
if((state_val_20036 === (12))){
var inst_20019 = (state_20035[(2)]);
var state_20035__$1 = state_20035;
var statearr_20078_21236 = state_20035__$1;
(statearr_20078_21236[(2)] = inst_20019);

(statearr_20078_21236[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (2))){
var state_20035__$1 = state_20035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20035__$1,(4),in$);
} else {
if((state_val_20036 === (23))){
var inst_20027 = (state_20035[(2)]);
var state_20035__$1 = state_20035;
var statearr_20079_21241 = state_20035__$1;
(statearr_20079_21241[(2)] = inst_20027);

(statearr_20079_21241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (19))){
var inst_20014 = (state_20035[(2)]);
var state_20035__$1 = state_20035;
var statearr_20080_21243 = state_20035__$1;
(statearr_20080_21243[(2)] = inst_20014);

(statearr_20080_21243[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (11))){
var inst_19990 = (state_20035[(7)]);
var inst_19976 = (state_20035[(11)]);
var inst_19990__$1 = cljs.core.seq(inst_19976);
var state_20035__$1 = (function (){var statearr_20081 = state_20035;
(statearr_20081[(7)] = inst_19990__$1);

return statearr_20081;
})();
if(inst_19990__$1){
var statearr_20082_21246 = state_20035__$1;
(statearr_20082_21246[(1)] = (14));

} else {
var statearr_20083_21247 = state_20035__$1;
(statearr_20083_21247[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (9))){
var inst_20021 = (state_20035[(2)]);
var inst_20022 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20035__$1 = (function (){var statearr_20085 = state_20035;
(statearr_20085[(15)] = inst_20021);

return statearr_20085;
})();
if(cljs.core.truth_(inst_20022)){
var statearr_20086_21251 = state_20035__$1;
(statearr_20086_21251[(1)] = (21));

} else {
var statearr_20087_21252 = state_20035__$1;
(statearr_20087_21252[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (5))){
var inst_19967 = cljs.core.async.close_BANG_(out);
var state_20035__$1 = state_20035;
var statearr_20088_21253 = state_20035__$1;
(statearr_20088_21253[(2)] = inst_19967);

(statearr_20088_21253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (14))){
var inst_19990 = (state_20035[(7)]);
var inst_20001 = cljs.core.chunked_seq_QMARK_(inst_19990);
var state_20035__$1 = state_20035;
if(inst_20001){
var statearr_20096_21254 = state_20035__$1;
(statearr_20096_21254[(1)] = (17));

} else {
var statearr_20097_21255 = state_20035__$1;
(statearr_20097_21255[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (16))){
var inst_20017 = (state_20035[(2)]);
var state_20035__$1 = state_20035;
var statearr_20098_21256 = state_20035__$1;
(statearr_20098_21256[(2)] = inst_20017);

(statearr_20098_21256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20036 === (10))){
var inst_19979 = (state_20035[(8)]);
var inst_19977 = (state_20035[(12)]);
var inst_19984 = cljs.core._nth(inst_19977,inst_19979);
var state_20035__$1 = state_20035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20035__$1,(13),out,inst_19984);
} else {
if((state_val_20036 === (18))){
var inst_19990 = (state_20035[(7)]);
var inst_20008 = cljs.core.first(inst_19990);
var state_20035__$1 = state_20035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20035__$1,(20),out,inst_20008);
} else {
if((state_val_20036 === (8))){
var inst_19979 = (state_20035[(8)]);
var inst_19978 = (state_20035[(9)]);
var inst_19981 = (inst_19979 < inst_19978);
var inst_19982 = inst_19981;
var state_20035__$1 = state_20035;
if(cljs.core.truth_(inst_19982)){
var statearr_20100_21262 = state_20035__$1;
(statearr_20100_21262[(1)] = (10));

} else {
var statearr_20101_21263 = state_20035__$1;
(statearr_20101_21263[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17758__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17758__auto____0 = (function (){
var statearr_20102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20102[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17758__auto__);

(statearr_20102[(1)] = (1));

return statearr_20102;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17758__auto____1 = (function (state_20035){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_20035);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e20105){var ex__17761__auto__ = e20105;
var statearr_20106_21264 = state_20035;
(statearr_20106_21264[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_20035[(4)]))){
var statearr_20107_21265 = state_20035;
(statearr_20107_21265[(1)] = cljs.core.first((state_20035[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21266 = state_20035;
state_20035 = G__21266;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17758__auto__ = function(state_20035){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17758__auto____1.call(this,state_20035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17758__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17758__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_20110 = f__17981__auto__();
(statearr_20110[(6)] = c__17980__auto__);

return statearr_20110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

return c__17980__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20112 = arguments.length;
switch (G__20112) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20116 = arguments.length;
switch (G__20116) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20118 = arguments.length;
switch (G__20118) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17980__auto___21273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_20153){
var state_val_20154 = (state_20153[(1)]);
if((state_val_20154 === (7))){
var inst_20142 = (state_20153[(2)]);
var state_20153__$1 = state_20153;
var statearr_20158_21274 = state_20153__$1;
(statearr_20158_21274[(2)] = inst_20142);

(statearr_20158_21274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (1))){
var inst_20124 = null;
var state_20153__$1 = (function (){var statearr_20159 = state_20153;
(statearr_20159[(7)] = inst_20124);

return statearr_20159;
})();
var statearr_20161_21277 = state_20153__$1;
(statearr_20161_21277[(2)] = null);

(statearr_20161_21277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (4))){
var inst_20127 = (state_20153[(8)]);
var inst_20127__$1 = (state_20153[(2)]);
var inst_20128 = (inst_20127__$1 == null);
var inst_20129 = cljs.core.not(inst_20128);
var state_20153__$1 = (function (){var statearr_20165 = state_20153;
(statearr_20165[(8)] = inst_20127__$1);

return statearr_20165;
})();
if(inst_20129){
var statearr_20166_21279 = state_20153__$1;
(statearr_20166_21279[(1)] = (5));

} else {
var statearr_20167_21280 = state_20153__$1;
(statearr_20167_21280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (6))){
var state_20153__$1 = state_20153;
var statearr_20168_21282 = state_20153__$1;
(statearr_20168_21282[(2)] = null);

(statearr_20168_21282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (3))){
var inst_20144 = (state_20153[(2)]);
var inst_20145 = cljs.core.async.close_BANG_(out);
var state_20153__$1 = (function (){var statearr_20169 = state_20153;
(statearr_20169[(9)] = inst_20144);

return statearr_20169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20153__$1,inst_20145);
} else {
if((state_val_20154 === (2))){
var state_20153__$1 = state_20153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20153__$1,(4),ch);
} else {
if((state_val_20154 === (11))){
var inst_20127 = (state_20153[(8)]);
var inst_20136 = (state_20153[(2)]);
var inst_20124 = inst_20127;
var state_20153__$1 = (function (){var statearr_20176 = state_20153;
(statearr_20176[(7)] = inst_20124);

(statearr_20176[(10)] = inst_20136);

return statearr_20176;
})();
var statearr_20177_21283 = state_20153__$1;
(statearr_20177_21283[(2)] = null);

(statearr_20177_21283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (9))){
var inst_20127 = (state_20153[(8)]);
var state_20153__$1 = state_20153;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20153__$1,(11),out,inst_20127);
} else {
if((state_val_20154 === (5))){
var inst_20124 = (state_20153[(7)]);
var inst_20127 = (state_20153[(8)]);
var inst_20131 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20127,inst_20124);
var state_20153__$1 = state_20153;
if(inst_20131){
var statearr_20185_21284 = state_20153__$1;
(statearr_20185_21284[(1)] = (8));

} else {
var statearr_20186_21285 = state_20153__$1;
(statearr_20186_21285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (10))){
var inst_20139 = (state_20153[(2)]);
var state_20153__$1 = state_20153;
var statearr_20187_21286 = state_20153__$1;
(statearr_20187_21286[(2)] = inst_20139);

(statearr_20187_21286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (8))){
var inst_20124 = (state_20153[(7)]);
var tmp20178 = inst_20124;
var inst_20124__$1 = tmp20178;
var state_20153__$1 = (function (){var statearr_20188 = state_20153;
(statearr_20188[(7)] = inst_20124__$1);

return statearr_20188;
})();
var statearr_20189_21287 = state_20153__$1;
(statearr_20189_21287[(2)] = null);

(statearr_20189_21287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17758__auto__ = null;
var cljs$core$async$state_machine__17758__auto____0 = (function (){
var statearr_20191 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20191[(0)] = cljs$core$async$state_machine__17758__auto__);

(statearr_20191[(1)] = (1));

return statearr_20191;
});
var cljs$core$async$state_machine__17758__auto____1 = (function (state_20153){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_20153);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e20192){var ex__17761__auto__ = e20192;
var statearr_20194_21288 = state_20153;
(statearr_20194_21288[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_20153[(4)]))){
var statearr_20195_21289 = state_20153;
(statearr_20195_21289[(1)] = cljs.core.first((state_20153[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21290 = state_20153;
state_20153 = G__21290;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$state_machine__17758__auto__ = function(state_20153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17758__auto____1.call(this,state_20153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17758__auto____0;
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17758__auto____1;
return cljs$core$async$state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_20196 = f__17981__auto__();
(statearr_20196[(6)] = c__17980__auto___21273);

return statearr_20196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20203 = arguments.length;
switch (G__20203) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17980__auto___21296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_20247){
var state_val_20248 = (state_20247[(1)]);
if((state_val_20248 === (7))){
var inst_20243 = (state_20247[(2)]);
var state_20247__$1 = state_20247;
var statearr_20250_21297 = state_20247__$1;
(statearr_20250_21297[(2)] = inst_20243);

(statearr_20250_21297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20248 === (1))){
var inst_20209 = (new Array(n));
var inst_20210 = inst_20209;
var inst_20211 = (0);
var state_20247__$1 = (function (){var statearr_20256 = state_20247;
(statearr_20256[(7)] = inst_20211);

(statearr_20256[(8)] = inst_20210);

return statearr_20256;
})();
var statearr_20257_21300 = state_20247__$1;
(statearr_20257_21300[(2)] = null);

(statearr_20257_21300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20248 === (4))){
var inst_20214 = (state_20247[(9)]);
var inst_20214__$1 = (state_20247[(2)]);
var inst_20215 = (inst_20214__$1 == null);
var inst_20216 = cljs.core.not(inst_20215);
var state_20247__$1 = (function (){var statearr_20258 = state_20247;
(statearr_20258[(9)] = inst_20214__$1);

return statearr_20258;
})();
if(inst_20216){
var statearr_20259_21302 = state_20247__$1;
(statearr_20259_21302[(1)] = (5));

} else {
var statearr_20260_21303 = state_20247__$1;
(statearr_20260_21303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20248 === (15))){
var inst_20237 = (state_20247[(2)]);
var state_20247__$1 = state_20247;
var statearr_20261_21304 = state_20247__$1;
(statearr_20261_21304[(2)] = inst_20237);

(statearr_20261_21304[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20248 === (13))){
var state_20247__$1 = state_20247;
var statearr_20262_21305 = state_20247__$1;
(statearr_20262_21305[(2)] = null);

(statearr_20262_21305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20248 === (6))){
var inst_20211 = (state_20247[(7)]);
var inst_20233 = (inst_20211 > (0));
var state_20247__$1 = state_20247;
if(cljs.core.truth_(inst_20233)){
var statearr_20263_21306 = state_20247__$1;
(statearr_20263_21306[(1)] = (12));

} else {
var statearr_20264_21307 = state_20247__$1;
(statearr_20264_21307[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20248 === (3))){
var inst_20245 = (state_20247[(2)]);
var state_20247__$1 = state_20247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20247__$1,inst_20245);
} else {
if((state_val_20248 === (12))){
var inst_20210 = (state_20247[(8)]);
var inst_20235 = cljs.core.vec(inst_20210);
var state_20247__$1 = state_20247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20247__$1,(15),out,inst_20235);
} else {
if((state_val_20248 === (2))){
var state_20247__$1 = state_20247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20247__$1,(4),ch);
} else {
if((state_val_20248 === (11))){
var inst_20226 = (state_20247[(2)]);
var inst_20228 = (new Array(n));
var inst_20210 = inst_20228;
var inst_20211 = (0);
var state_20247__$1 = (function (){var statearr_20269 = state_20247;
(statearr_20269[(7)] = inst_20211);

(statearr_20269[(8)] = inst_20210);

(statearr_20269[(10)] = inst_20226);

return statearr_20269;
})();
var statearr_20270_21309 = state_20247__$1;
(statearr_20270_21309[(2)] = null);

(statearr_20270_21309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20248 === (9))){
var inst_20210 = (state_20247[(8)]);
var inst_20224 = cljs.core.vec(inst_20210);
var state_20247__$1 = state_20247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20247__$1,(11),out,inst_20224);
} else {
if((state_val_20248 === (5))){
var inst_20211 = (state_20247[(7)]);
var inst_20210 = (state_20247[(8)]);
var inst_20219 = (state_20247[(11)]);
var inst_20214 = (state_20247[(9)]);
var inst_20218 = (inst_20210[inst_20211] = inst_20214);
var inst_20219__$1 = (inst_20211 + (1));
var inst_20220 = (inst_20219__$1 < n);
var state_20247__$1 = (function (){var statearr_20271 = state_20247;
(statearr_20271[(12)] = inst_20218);

(statearr_20271[(11)] = inst_20219__$1);

return statearr_20271;
})();
if(cljs.core.truth_(inst_20220)){
var statearr_20275_21311 = state_20247__$1;
(statearr_20275_21311[(1)] = (8));

} else {
var statearr_20277_21312 = state_20247__$1;
(statearr_20277_21312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20248 === (14))){
var inst_20240 = (state_20247[(2)]);
var inst_20241 = cljs.core.async.close_BANG_(out);
var state_20247__$1 = (function (){var statearr_20282 = state_20247;
(statearr_20282[(13)] = inst_20240);

return statearr_20282;
})();
var statearr_20286_21316 = state_20247__$1;
(statearr_20286_21316[(2)] = inst_20241);

(statearr_20286_21316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20248 === (10))){
var inst_20231 = (state_20247[(2)]);
var state_20247__$1 = state_20247;
var statearr_20287_21317 = state_20247__$1;
(statearr_20287_21317[(2)] = inst_20231);

(statearr_20287_21317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20248 === (8))){
var inst_20210 = (state_20247[(8)]);
var inst_20219 = (state_20247[(11)]);
var tmp20281 = inst_20210;
var inst_20210__$1 = tmp20281;
var inst_20211 = inst_20219;
var state_20247__$1 = (function (){var statearr_20288 = state_20247;
(statearr_20288[(7)] = inst_20211);

(statearr_20288[(8)] = inst_20210__$1);

return statearr_20288;
})();
var statearr_20289_21318 = state_20247__$1;
(statearr_20289_21318[(2)] = null);

(statearr_20289_21318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17758__auto__ = null;
var cljs$core$async$state_machine__17758__auto____0 = (function (){
var statearr_20290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20290[(0)] = cljs$core$async$state_machine__17758__auto__);

(statearr_20290[(1)] = (1));

return statearr_20290;
});
var cljs$core$async$state_machine__17758__auto____1 = (function (state_20247){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_20247);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e20291){var ex__17761__auto__ = e20291;
var statearr_20292_21323 = state_20247;
(statearr_20292_21323[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_20247[(4)]))){
var statearr_20293_21325 = state_20247;
(statearr_20293_21325[(1)] = cljs.core.first((state_20247[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21329 = state_20247;
state_20247 = G__21329;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$state_machine__17758__auto__ = function(state_20247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17758__auto____1.call(this,state_20247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17758__auto____0;
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17758__auto____1;
return cljs$core$async$state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_20294 = f__17981__auto__();
(statearr_20294[(6)] = c__17980__auto___21296);

return statearr_20294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20299 = arguments.length;
switch (G__20299) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17980__auto___21331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_20344){
var state_val_20345 = (state_20344[(1)]);
if((state_val_20345 === (7))){
var inst_20340 = (state_20344[(2)]);
var state_20344__$1 = state_20344;
var statearr_20346_21337 = state_20344__$1;
(statearr_20346_21337[(2)] = inst_20340);

(statearr_20346_21337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20345 === (1))){
var inst_20300 = [];
var inst_20301 = inst_20300;
var inst_20302 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20344__$1 = (function (){var statearr_20347 = state_20344;
(statearr_20347[(7)] = inst_20302);

(statearr_20347[(8)] = inst_20301);

return statearr_20347;
})();
var statearr_20348_21338 = state_20344__$1;
(statearr_20348_21338[(2)] = null);

(statearr_20348_21338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20345 === (4))){
var inst_20305 = (state_20344[(9)]);
var inst_20305__$1 = (state_20344[(2)]);
var inst_20306 = (inst_20305__$1 == null);
var inst_20307 = cljs.core.not(inst_20306);
var state_20344__$1 = (function (){var statearr_20349 = state_20344;
(statearr_20349[(9)] = inst_20305__$1);

return statearr_20349;
})();
if(inst_20307){
var statearr_20350_21339 = state_20344__$1;
(statearr_20350_21339[(1)] = (5));

} else {
var statearr_20351_21340 = state_20344__$1;
(statearr_20351_21340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20345 === (15))){
var inst_20301 = (state_20344[(8)]);
var inst_20332 = cljs.core.vec(inst_20301);
var state_20344__$1 = state_20344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20344__$1,(18),out,inst_20332);
} else {
if((state_val_20345 === (13))){
var inst_20327 = (state_20344[(2)]);
var state_20344__$1 = state_20344;
var statearr_20352_21342 = state_20344__$1;
(statearr_20352_21342[(2)] = inst_20327);

(statearr_20352_21342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20345 === (6))){
var inst_20301 = (state_20344[(8)]);
var inst_20329 = inst_20301.length;
var inst_20330 = (inst_20329 > (0));
var state_20344__$1 = state_20344;
if(cljs.core.truth_(inst_20330)){
var statearr_20353_21345 = state_20344__$1;
(statearr_20353_21345[(1)] = (15));

} else {
var statearr_20354_21346 = state_20344__$1;
(statearr_20354_21346[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20345 === (17))){
var inst_20337 = (state_20344[(2)]);
var inst_20338 = cljs.core.async.close_BANG_(out);
var state_20344__$1 = (function (){var statearr_20355 = state_20344;
(statearr_20355[(10)] = inst_20337);

return statearr_20355;
})();
var statearr_20356_21347 = state_20344__$1;
(statearr_20356_21347[(2)] = inst_20338);

(statearr_20356_21347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20345 === (3))){
var inst_20342 = (state_20344[(2)]);
var state_20344__$1 = state_20344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20344__$1,inst_20342);
} else {
if((state_val_20345 === (12))){
var inst_20301 = (state_20344[(8)]);
var inst_20320 = cljs.core.vec(inst_20301);
var state_20344__$1 = state_20344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20344__$1,(14),out,inst_20320);
} else {
if((state_val_20345 === (2))){
var state_20344__$1 = state_20344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20344__$1,(4),ch);
} else {
if((state_val_20345 === (11))){
var inst_20309 = (state_20344[(11)]);
var inst_20305 = (state_20344[(9)]);
var inst_20301 = (state_20344[(8)]);
var inst_20317 = inst_20301.push(inst_20305);
var tmp20357 = inst_20301;
var inst_20301__$1 = tmp20357;
var inst_20302 = inst_20309;
var state_20344__$1 = (function (){var statearr_20359 = state_20344;
(statearr_20359[(7)] = inst_20302);

(statearr_20359[(12)] = inst_20317);

(statearr_20359[(8)] = inst_20301__$1);

return statearr_20359;
})();
var statearr_20360_21348 = state_20344__$1;
(statearr_20360_21348[(2)] = null);

(statearr_20360_21348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20345 === (9))){
var inst_20302 = (state_20344[(7)]);
var inst_20313 = cljs.core.keyword_identical_QMARK_(inst_20302,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20344__$1 = state_20344;
var statearr_20361_21349 = state_20344__$1;
(statearr_20361_21349[(2)] = inst_20313);

(statearr_20361_21349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20345 === (5))){
var inst_20309 = (state_20344[(11)]);
var inst_20302 = (state_20344[(7)]);
var inst_20305 = (state_20344[(9)]);
var inst_20310 = (state_20344[(13)]);
var inst_20309__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20305) : f.call(null,inst_20305));
var inst_20310__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20309__$1,inst_20302);
var state_20344__$1 = (function (){var statearr_20365 = state_20344;
(statearr_20365[(11)] = inst_20309__$1);

(statearr_20365[(13)] = inst_20310__$1);

return statearr_20365;
})();
if(inst_20310__$1){
var statearr_20366_21350 = state_20344__$1;
(statearr_20366_21350[(1)] = (8));

} else {
var statearr_20367_21351 = state_20344__$1;
(statearr_20367_21351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20345 === (14))){
var inst_20309 = (state_20344[(11)]);
var inst_20305 = (state_20344[(9)]);
var inst_20322 = (state_20344[(2)]);
var inst_20323 = [];
var inst_20324 = inst_20323.push(inst_20305);
var inst_20301 = inst_20323;
var inst_20302 = inst_20309;
var state_20344__$1 = (function (){var statearr_20368 = state_20344;
(statearr_20368[(7)] = inst_20302);

(statearr_20368[(14)] = inst_20322);

(statearr_20368[(15)] = inst_20324);

(statearr_20368[(8)] = inst_20301);

return statearr_20368;
})();
var statearr_20369_21352 = state_20344__$1;
(statearr_20369_21352[(2)] = null);

(statearr_20369_21352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20345 === (16))){
var state_20344__$1 = state_20344;
var statearr_20370_21353 = state_20344__$1;
(statearr_20370_21353[(2)] = null);

(statearr_20370_21353[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20345 === (10))){
var inst_20315 = (state_20344[(2)]);
var state_20344__$1 = state_20344;
if(cljs.core.truth_(inst_20315)){
var statearr_20374_21354 = state_20344__$1;
(statearr_20374_21354[(1)] = (11));

} else {
var statearr_20375_21355 = state_20344__$1;
(statearr_20375_21355[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20345 === (18))){
var inst_20334 = (state_20344[(2)]);
var state_20344__$1 = state_20344;
var statearr_20376_21356 = state_20344__$1;
(statearr_20376_21356[(2)] = inst_20334);

(statearr_20376_21356[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20345 === (8))){
var inst_20310 = (state_20344[(13)]);
var state_20344__$1 = state_20344;
var statearr_20377_21359 = state_20344__$1;
(statearr_20377_21359[(2)] = inst_20310);

(statearr_20377_21359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17758__auto__ = null;
var cljs$core$async$state_machine__17758__auto____0 = (function (){
var statearr_20378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20378[(0)] = cljs$core$async$state_machine__17758__auto__);

(statearr_20378[(1)] = (1));

return statearr_20378;
});
var cljs$core$async$state_machine__17758__auto____1 = (function (state_20344){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_20344);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e20379){var ex__17761__auto__ = e20379;
var statearr_20380_21365 = state_20344;
(statearr_20380_21365[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_20344[(4)]))){
var statearr_20381_21366 = state_20344;
(statearr_20381_21366[(1)] = cljs.core.first((state_20344[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21371 = state_20344;
state_20344 = G__21371;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
cljs$core$async$state_machine__17758__auto__ = function(state_20344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17758__auto____1.call(this,state_20344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17758__auto____0;
cljs$core$async$state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17758__auto____1;
return cljs$core$async$state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_20382 = f__17981__auto__();
(statearr_20382[(6)] = c__17980__auto___21331);

return statearr_20382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
