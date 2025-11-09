goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__22921 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22922 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22922);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__22947 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22948 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22948);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22947);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22921);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__23011 = arguments.length;
switch (G__23011) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__23070 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23070,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23070,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__23165_23230 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__23166_23231 = null;
var count__23167_23232 = (0);
var i__23168_23233 = (0);
while(true){
if((i__23168_23233 < count__23167_23232)){
var vec__23220_23235 = chunk__23166_23231.cljs$core$IIndexed$_nth$arity$2(null,i__23168_23233);
var container_23236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23220_23235,(0),null);
var comp_23237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23220_23235,(1),null);
reagent.dom.re_render_component(comp_23237,container_23236);


var G__23238 = seq__23165_23230;
var G__23239 = chunk__23166_23231;
var G__23240 = count__23167_23232;
var G__23241 = (i__23168_23233 + (1));
seq__23165_23230 = G__23238;
chunk__23166_23231 = G__23239;
count__23167_23232 = G__23240;
i__23168_23233 = G__23241;
continue;
} else {
var temp__5804__auto___23242 = cljs.core.seq(seq__23165_23230);
if(temp__5804__auto___23242){
var seq__23165_23243__$1 = temp__5804__auto___23242;
if(cljs.core.chunked_seq_QMARK_(seq__23165_23243__$1)){
var c__5525__auto___23244 = cljs.core.chunk_first(seq__23165_23243__$1);
var G__23245 = cljs.core.chunk_rest(seq__23165_23243__$1);
var G__23246 = c__5525__auto___23244;
var G__23247 = cljs.core.count(c__5525__auto___23244);
var G__23248 = (0);
seq__23165_23230 = G__23245;
chunk__23166_23231 = G__23246;
count__23167_23232 = G__23247;
i__23168_23233 = G__23248;
continue;
} else {
var vec__23223_23249 = cljs.core.first(seq__23165_23243__$1);
var container_23250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23223_23249,(0),null);
var comp_23251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23223_23249,(1),null);
reagent.dom.re_render_component(comp_23251,container_23250);


var G__23252 = cljs.core.next(seq__23165_23243__$1);
var G__23253 = null;
var G__23254 = (0);
var G__23255 = (0);
seq__23165_23230 = G__23252;
chunk__23166_23231 = G__23253;
count__23167_23232 = G__23254;
i__23168_23233 = G__23255;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
