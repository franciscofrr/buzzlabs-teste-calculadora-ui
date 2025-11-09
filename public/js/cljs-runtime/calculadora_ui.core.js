goog.provide('calculadora_ui.core');
calculadora_ui.core.mainView = (function calculadora_ui$core$mainView(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"main"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculadora_ui.components.calculator.calculatorComponent], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculadora_ui.components.history.historyComponent], null)], null);
});
if((typeof calculadora_ui !== 'undefined') && (typeof calculadora_ui.core !== 'undefined') && (typeof calculadora_ui.core.root !== 'undefined')){
} else {
calculadora_ui.core.root = reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("app"));
}
calculadora_ui.core.init_BANG_ = (function calculadora_ui$core$init_BANG_(){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(calculadora_ui.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculadora_ui.core.mainView], null));
});
goog.exportSymbol('calculadora_ui.core.init_BANG_', calculadora_ui.core.init_BANG_);

//# sourceMappingURL=calculadora_ui.core.js.map
