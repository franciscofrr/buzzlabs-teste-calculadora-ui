goog.provide('calculadora_ui.components.history');
calculadora_ui.components.history.historyData = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
calculadora_ui.components.history.loadHistory = (function calculadora_ui$components$history$loadHistory(historyRes){
return cljs.core.reset_BANG_(calculadora_ui.components.history.historyData,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(historyRes),"]"].join('')));
});
calculadora_ui.components.history.history = (function calculadora_ui$components$history$history(){
var c__17980__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_24109){
var state_val_24110 = (state_24109[(1)]);
if((state_val_24110 === (1))){
var inst_24100 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_24101 = [false];
var inst_24102 = cljs.core.PersistentHashMap.fromArrays(inst_24100,inst_24101);
var inst_24103 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("http://localhost:4000/history",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_24102], 0));
var state_24109__$1 = state_24109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24109__$1,(2),inst_24103);
} else {
if((state_val_24110 === (2))){
var inst_24105 = (state_24109[(2)]);
var inst_24106 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_24105);
var inst_24107 = calculadora_ui.components.history.loadHistory(inst_24106);
var state_24109__$1 = state_24109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24109__$1,inst_24107);
} else {
return null;
}
}
});
return (function() {
var calculadora_ui$components$history$history_$_state_machine__17758__auto__ = null;
var calculadora_ui$components$history$history_$_state_machine__17758__auto____0 = (function (){
var statearr_24115 = [null,null,null,null,null,null,null];
(statearr_24115[(0)] = calculadora_ui$components$history$history_$_state_machine__17758__auto__);

(statearr_24115[(1)] = (1));

return statearr_24115;
});
var calculadora_ui$components$history$history_$_state_machine__17758__auto____1 = (function (state_24109){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_24109);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e24116){var ex__17761__auto__ = e24116;
var statearr_24117_24155 = state_24109;
(statearr_24117_24155[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_24109[(4)]))){
var statearr_24118_24156 = state_24109;
(statearr_24118_24156[(1)] = cljs.core.first((state_24109[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24158 = state_24109;
state_24109 = G__24158;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
calculadora_ui$components$history$history_$_state_machine__17758__auto__ = function(state_24109){
switch(arguments.length){
case 0:
return calculadora_ui$components$history$history_$_state_machine__17758__auto____0.call(this);
case 1:
return calculadora_ui$components$history$history_$_state_machine__17758__auto____1.call(this,state_24109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
calculadora_ui$components$history$history_$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = calculadora_ui$components$history$history_$_state_machine__17758__auto____0;
calculadora_ui$components$history$history_$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = calculadora_ui$components$history$history_$_state_machine__17758__auto____1;
return calculadora_ui$components$history$history_$_state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_24120 = f__17981__auto__();
(statearr_24120[(6)] = c__17980__auto__);

return statearr_24120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

return c__17980__auto__;
});
var render_fn__23477__auto___24159 = (function calculadora_ui$components$history$historyComponent(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"historico"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"history-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.history.history();
})], null),"Carregar hist\u00F3rico"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function calculadora_ui$components$history$historyComponent_$_iter__24124(s__24125){
return (new cljs.core.LazySeq(null,(function (){
var s__24125__$1 = s__24125;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24125__$1);
if(temp__5804__auto__){
var s__24125__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24125__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__24125__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__24127 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__24126 = (0);
while(true){
if((i__24126 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__24126);
cljs.core.chunk_append(b__24127,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"operation","operation",-1267664310)], null)," = ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"result","result",1415092211)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null)));

var G__24163 = (i__24126 + (1));
i__24126 = G__24163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24127),calculadora_ui$components$history$historyComponent_$_iter__24124(cljs.core.chunk_rest(s__24125__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24127),null);
}
} else {
var item = cljs.core.first(s__24125__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"operation","operation",-1267664310)], null)," = ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"result","result",1415092211)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null)),calculadora_ui$components$history$historyComponent_$_iter__24124(cljs.core.rest(s__24125__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(calculadora_ui.components.history.historyData));
})()], null)], null);
});
calculadora_ui.components.history.historyComponent = reagent.impl.component.memo((function calculadora_ui$components$history$historyComponent(jsprops__23478__auto__){
var jsprops2__23479__auto__ = ({});
(jsprops2__23479__auto__.reagentRender = render_fn__23477__auto___24159);

Object.assign(jsprops2__23479__auto__,jsprops__23478__auto__);

return reagent.impl.component.functional_render(reagent.impl.template._STAR_current_default_compiler_STAR_,jsprops2__23479__auto__);
}));

(calculadora_ui.components.history.historyComponent.reagent_component = true);

(calculadora_ui.components.history.historyComponent.displayName = "historyComponent");

Object.defineProperty(calculadora_ui.components.history.historyComponent,"name",(function (){var obj24148 = ({"value":"historyComponent","writable":false});
return obj24148;
})());

//# sourceMappingURL=calculadora_ui.components.history.js.map
