goog.provide('calculadora_ui.components.components');
var render_fn__12013__auto___13173 = (function calculadora_ui$components$components$calculatorComponent(display,appendNumber,setOperator,clearButton,calculate){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"calculator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"display",new cljs.core.Keyword(null,"id","id",-1388402092),"display",new cljs.core.Keyword(null,"value","value",305978217),display], null)], null),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"buttons"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (appendNumber.cljs$core$IFn$_invoke$arity$1 ? appendNumber.cljs$core$IFn$_invoke$arity$1("1") : appendNumber.call(null,"1"));
})], null),"1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (appendNumber.cljs$core$IFn$_invoke$arity$1 ? appendNumber.cljs$core$IFn$_invoke$arity$1("2") : appendNumber.call(null,"2"));
})], null),"2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (appendNumber.cljs$core$IFn$_invoke$arity$1 ? appendNumber.cljs$core$IFn$_invoke$arity$1("3") : appendNumber.call(null,"3"));
})], null),"3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (setOperator.cljs$core$IFn$_invoke$arity$1 ? setOperator.cljs$core$IFn$_invoke$arity$1("+") : setOperator.call(null,"+"));
})], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (appendNumber.cljs$core$IFn$_invoke$arity$1 ? appendNumber.cljs$core$IFn$_invoke$arity$1("4") : appendNumber.call(null,"4"));
})], null),"4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (appendNumber.cljs$core$IFn$_invoke$arity$1 ? appendNumber.cljs$core$IFn$_invoke$arity$1("5") : appendNumber.call(null,"5"));
})], null),"5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (appendNumber.cljs$core$IFn$_invoke$arity$1 ? appendNumber.cljs$core$IFn$_invoke$arity$1("6") : appendNumber.call(null,"6"));
})], null),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (setOperator.cljs$core$IFn$_invoke$arity$1 ? setOperator.cljs$core$IFn$_invoke$arity$1("-") : setOperator.call(null,"-"));
})], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (appendNumber.cljs$core$IFn$_invoke$arity$1 ? appendNumber.cljs$core$IFn$_invoke$arity$1("7") : appendNumber.call(null,"7"));
})], null),"7"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (appendNumber.cljs$core$IFn$_invoke$arity$1 ? appendNumber.cljs$core$IFn$_invoke$arity$1("8") : appendNumber.call(null,"8"));
})], null),"8"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (appendNumber.cljs$core$IFn$_invoke$arity$1 ? appendNumber.cljs$core$IFn$_invoke$arity$1("9") : appendNumber.call(null,"9"));
})], null),"9"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (setOperator.cljs$core$IFn$_invoke$arity$1 ? setOperator.cljs$core$IFn$_invoke$arity$1("*") : setOperator.call(null,"*"));
})], null),"*"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (clearButton.cljs$core$IFn$_invoke$arity$0 ? clearButton.cljs$core$IFn$_invoke$arity$0() : clearButton.call(null));
})], null),"C"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (appendNumber.cljs$core$IFn$_invoke$arity$1 ? appendNumber.cljs$core$IFn$_invoke$arity$1("0") : appendNumber.call(null,"0"));
})], null),"0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (setOperator.cljs$core$IFn$_invoke$arity$1 ? setOperator.cljs$core$IFn$_invoke$arity$1("/") : setOperator.call(null,"/"));
})], null),"/"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"equals",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (calculate.cljs$core$IFn$_invoke$arity$0 ? calculate.cljs$core$IFn$_invoke$arity$0() : calculate.call(null));
})], null),"="], null)], null)], null);
});
calculadora_ui.components.components.calculatorComponent = reagent.impl.component.memo((function calculadora_ui$components$components$calculatorComponent(jsprops__12014__auto__){
var jsprops2__12015__auto__ = ({});
(jsprops2__12015__auto__.reagentRender = render_fn__12013__auto___13173);

Object.assign(jsprops2__12015__auto__,jsprops__12014__auto__);

return reagent.impl.component.functional_render(reagent.impl.template._STAR_current_default_compiler_STAR_,jsprops2__12015__auto__);
}));

(calculadora_ui.components.components.calculatorComponent.reagent_component = true);

(calculadora_ui.components.components.calculatorComponent.displayName = "calculatorComponent");

Object.defineProperty(calculadora_ui.components.components.calculatorComponent,"name",(function (){var obj13164 = ({"value":"calculatorComponent","writable":false});
return obj13164;
})());
var render_fn__12013__auto___13174 = (function calculadora_ui$components$components$historyComponent(history,loadHistory){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"historico"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (loadHistory.cljs$core$IFn$_invoke$arity$0 ? loadHistory.cljs$core$IFn$_invoke$arity$0() : loadHistory.call(null));
})], null),"Carregar hist\u00F3rico"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function calculadora_ui$components$components$historyComponent_$_iter__13165(s__13166){
return (new cljs.core.LazySeq(null,(function (){
var s__13166__$1 = s__13166;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13166__$1);
if(temp__5804__auto__){
var s__13166__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13166__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13166__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13168 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13167 = (0);
while(true){
if((i__13167 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__13167);
cljs.core.chunk_append(b__13168,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"operation","operation",-1267664310)], null)," = ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"result","result",1415092211)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null)));

var G__13175 = (i__13167 + (1));
i__13167 = G__13175;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13168),calculadora_ui$components$components$historyComponent_$_iter__13165(cljs.core.chunk_rest(s__13166__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13168),null);
}
} else {
var item = cljs.core.first(s__13166__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"operation","operation",-1267664310)], null)," = ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"result","result",1415092211)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null)),calculadora_ui$components$components$historyComponent_$_iter__13165(cljs.core.rest(s__13166__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(history);
})()], null)], null);
});
calculadora_ui.components.components.historyComponent = reagent.impl.component.memo((function calculadora_ui$components$components$historyComponent(jsprops__12014__auto__){
var jsprops2__12015__auto__ = ({});
(jsprops2__12015__auto__.reagentRender = render_fn__12013__auto___13174);

Object.assign(jsprops2__12015__auto__,jsprops__12014__auto__);

return reagent.impl.component.functional_render(reagent.impl.template._STAR_current_default_compiler_STAR_,jsprops2__12015__auto__);
}));

(calculadora_ui.components.components.historyComponent.reagent_component = true);

(calculadora_ui.components.components.historyComponent.displayName = "historyComponent");

Object.defineProperty(calculadora_ui.components.components.historyComponent,"name",(function (){var obj13172 = ({"value":"historyComponent","writable":false});
return obj13172;
})());

//# sourceMappingURL=calculadora_ui.components.components.js.map
