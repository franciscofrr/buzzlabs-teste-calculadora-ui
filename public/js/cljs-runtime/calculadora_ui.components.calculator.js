goog.provide('calculadora_ui.components.calculator');
calculadora_ui.components.calculator.currentInput = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
calculadora_ui.components.calculator.previousInput = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
calculadora_ui.components.calculator.operator = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
calculadora_ui.components.calculator.display = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
calculadora_ui.components.calculator.updateDisplay = (function calculadora_ui$components$calculator$updateDisplay(){
return cljs.core.reset_BANG_(calculadora_ui.components.calculator.display,clojure.string.join.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(calculadora_ui.components.calculator.previousInput),cljs.core.deref(calculadora_ui.components.calculator.operator),cljs.core.deref(calculadora_ui.components.calculator.currentInput)], null)));
});
calculadora_ui.components.calculator.appendNumber = (function calculadora_ui$components$calculator$appendNumber(number){
reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(calculadora_ui.components.calculator.currentInput,cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([number], 0));

return calculadora_ui.components.calculator.updateDisplay();
});
calculadora_ui.components.calculator.setOperator = (function calculadora_ui$components$calculator$setOperator(op){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.deref(calculadora_ui.components.calculator.operator))){
cljs.core.reset_BANG_(calculadora_ui.components.calculator.operator,op);

cljs.core.reset_BANG_(calculadora_ui.components.calculator.previousInput,cljs.core.deref(calculadora_ui.components.calculator.currentInput));

cljs.core.reset_BANG_(calculadora_ui.components.calculator.currentInput,"");

return calculadora_ui.components.calculator.updateDisplay();
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["nope"], 0));
}
});
calculadora_ui.components.calculator.clearButton = (function calculadora_ui$components$calculator$clearButton(){
cljs.core.reset_BANG_(calculadora_ui.components.calculator.currentInput,"");

cljs.core.reset_BANG_(calculadora_ui.components.calculator.previousInput,"");

cljs.core.reset_BANG_(calculadora_ui.components.calculator.operator,"");

return calculadora_ui.components.calculator.updateDisplay();
});
calculadora_ui.components.calculator.displayResult = (function calculadora_ui$components$calculator$displayResult(result){
cljs.core.reset_BANG_(calculadora_ui.components.calculator.previousInput,"");

cljs.core.reset_BANG_(calculadora_ui.components.calculator.currentInput,result);

cljs.core.reset_BANG_(calculadora_ui.components.calculator.operator,"");

return cljs.core.reset_BANG_(calculadora_ui.components.calculator.display,result);
});
calculadora_ui.components.calculator.calculate = (function calculadora_ui$components$calculator$calculate(previousInput,operator,currentInput){
var c__17980__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17757__auto__ = (function (state_24139){
var state_val_24140 = (state_24139[(1)]);
if((state_val_24140 === (1))){
var inst_24123 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_24128 = [new cljs.core.Keyword(null,"operatorLeft","operatorLeft",34405499),new cljs.core.Keyword(null,"operationSign","operationSign",-327969841),new cljs.core.Keyword(null,"operatorRight","operatorRight",-923755987)];
var inst_24129 = [previousInput,operator,currentInput];
var inst_24130 = cljs.core.PersistentHashMap.fromArrays(inst_24128,inst_24129);
var inst_24131 = [false,inst_24130];
var inst_24132 = cljs.core.PersistentHashMap.fromArrays(inst_24123,inst_24131);
var inst_24133 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("http://localhost:4000/calculate",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_24132], 0));
var state_24139__$1 = state_24139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24139__$1,(2),inst_24133);
} else {
if((state_val_24140 === (2))){
var inst_24135 = (state_24139[(2)]);
var inst_24136 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_24135);
var inst_24137 = calculadora_ui.components.calculator.displayResult(inst_24136);
var state_24139__$1 = state_24139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24139__$1,inst_24137);
} else {
return null;
}
}
});
return (function() {
var calculadora_ui$components$calculator$calculate_$_state_machine__17758__auto__ = null;
var calculadora_ui$components$calculator$calculate_$_state_machine__17758__auto____0 = (function (){
var statearr_24146 = [null,null,null,null,null,null,null];
(statearr_24146[(0)] = calculadora_ui$components$calculator$calculate_$_state_machine__17758__auto__);

(statearr_24146[(1)] = (1));

return statearr_24146;
});
var calculadora_ui$components$calculator$calculate_$_state_machine__17758__auto____1 = (function (state_24139){
while(true){
var ret_value__17759__auto__ = (function (){try{while(true){
var result__17760__auto__ = switch__17757__auto__(state_24139);
if(cljs.core.keyword_identical_QMARK_(result__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17760__auto__;
}
break;
}
}catch (e24149){var ex__17761__auto__ = e24149;
var statearr_24150_24186 = state_24139;
(statearr_24150_24186[(2)] = ex__17761__auto__);


if(cljs.core.seq((state_24139[(4)]))){
var statearr_24153_24187 = state_24139;
(statearr_24153_24187[(1)] = cljs.core.first((state_24139[(4)])));

} else {
throw ex__17761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24188 = state_24139;
state_24139 = G__24188;
continue;
} else {
return ret_value__17759__auto__;
}
break;
}
});
calculadora_ui$components$calculator$calculate_$_state_machine__17758__auto__ = function(state_24139){
switch(arguments.length){
case 0:
return calculadora_ui$components$calculator$calculate_$_state_machine__17758__auto____0.call(this);
case 1:
return calculadora_ui$components$calculator$calculate_$_state_machine__17758__auto____1.call(this,state_24139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
calculadora_ui$components$calculator$calculate_$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$0 = calculadora_ui$components$calculator$calculate_$_state_machine__17758__auto____0;
calculadora_ui$components$calculator$calculate_$_state_machine__17758__auto__.cljs$core$IFn$_invoke$arity$1 = calculadora_ui$components$calculator$calculate_$_state_machine__17758__auto____1;
return calculadora_ui$components$calculator$calculate_$_state_machine__17758__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_24157 = f__17981__auto__();
(statearr_24157[(6)] = c__17980__auto__);

return statearr_24157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

return c__17980__auto__;
});
var render_fn__23477__auto___24189 = (function calculadora_ui$components$calculator$calculatorComponent(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"calculator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"display",new cljs.core.Keyword(null,"id","id",-1388402092),"display",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(calculadora_ui.components.calculator.display)], null)], null),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"buttons"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.calculator.appendNumber("1");
})], null),"1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.calculator.appendNumber("2");
})], null),"2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.calculator.appendNumber("3");
})], null),"3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.calculator.setOperator("+");
})], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.calculator.appendNumber("4");
})], null),"4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.calculator.appendNumber("5");
})], null),"5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.calculator.appendNumber("6");
})], null),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.calculator.setOperator("-");
})], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.calculator.appendNumber("7");
})], null),"7"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.calculator.appendNumber("8");
})], null),"8"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.calculator.appendNumber("9");
})], null),"9"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.calculator.setOperator("*");
})], null),"*"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.calculator.clearButton();
})], null),"C"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.calculator.appendNumber("0");
})], null),"0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.calculator.setOperator("/");
})], null),"/"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"equals",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora_ui.components.calculator.calculate(cljs.core.deref(calculadora_ui.components.calculator.previousInput),cljs.core.deref(calculadora_ui.components.calculator.operator),cljs.core.deref(calculadora_ui.components.calculator.currentInput));
})], null),"="], null)], null)], null);
});
calculadora_ui.components.calculator.calculatorComponent = reagent.impl.component.memo((function calculadora_ui$components$calculator$calculatorComponent(jsprops__23478__auto__){
var jsprops2__23479__auto__ = ({});
(jsprops2__23479__auto__.reagentRender = render_fn__23477__auto___24189);

Object.assign(jsprops2__23479__auto__,jsprops__23478__auto__);

return reagent.impl.component.functional_render(reagent.impl.template._STAR_current_default_compiler_STAR_,jsprops2__23479__auto__);
}));

(calculadora_ui.components.calculator.calculatorComponent.reagent_component = true);

(calculadora_ui.components.calculator.calculatorComponent.displayName = "calculatorComponent");

Object.defineProperty(calculadora_ui.components.calculator.calculatorComponent,"name",(function (){var obj24176 = ({"value":"calculatorComponent","writable":false});
return obj24176;
})());

//# sourceMappingURL=calculadora_ui.components.calculator.js.map
