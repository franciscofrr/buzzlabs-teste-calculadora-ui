goog.provide('calculadora_ui.controller');
calculadora_ui.controller.calculate = (function calculadora_ui$controller$calculate(previousInput,operator,currentInput){
var c__11745__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11746__auto__ = (function (){var switch__11624__auto__ = (function (state_19006){
var state_val_19007 = (state_19006[(1)]);
if((state_val_19007 === (1))){
var inst_18994 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_18995 = [new cljs.core.Keyword(null,"operatorLeft","operatorLeft",34405499),new cljs.core.Keyword(null,"operationSign","operationSign",-327969841),new cljs.core.Keyword(null,"operatorRight","operatorRight",-923755987)];
var inst_18996 = [previousInput,operator,currentInput];
var inst_18997 = cljs.core.PersistentHashMap.fromArrays(inst_18995,inst_18996);
var inst_18998 = [false,inst_18997];
var inst_18999 = cljs.core.PersistentHashMap.fromArrays(inst_18994,inst_18998);
var inst_19000 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("http://localhost:4000/calculate",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18999], 0));
var state_19006__$1 = state_19006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19006__$1,(2),inst_19000);
} else {
if((state_val_19007 === (2))){
var inst_19002 = (state_19006[(2)]);
var inst_19003 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_19002);
var inst_19004 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19003);
var state_19006__$1 = state_19006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19006__$1,inst_19004);
} else {
return null;
}
}
});
return (function() {
var calculadora_ui$controller$calculate_$_state_machine__11625__auto__ = null;
var calculadora_ui$controller$calculate_$_state_machine__11625__auto____0 = (function (){
var statearr_19008 = [null,null,null,null,null,null,null];
(statearr_19008[(0)] = calculadora_ui$controller$calculate_$_state_machine__11625__auto__);

(statearr_19008[(1)] = (1));

return statearr_19008;
});
var calculadora_ui$controller$calculate_$_state_machine__11625__auto____1 = (function (state_19006){
while(true){
var ret_value__11626__auto__ = (function (){try{while(true){
var result__11627__auto__ = switch__11624__auto__(state_19006);
if(cljs.core.keyword_identical_QMARK_(result__11627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11627__auto__;
}
break;
}
}catch (e19009){var ex__11628__auto__ = e19009;
var statearr_19010_19029 = state_19006;
(statearr_19010_19029[(2)] = ex__11628__auto__);


if(cljs.core.seq((state_19006[(4)]))){
var statearr_19011_19030 = state_19006;
(statearr_19011_19030[(1)] = cljs.core.first((state_19006[(4)])));

} else {
throw ex__11628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19031 = state_19006;
state_19006 = G__19031;
continue;
} else {
return ret_value__11626__auto__;
}
break;
}
});
calculadora_ui$controller$calculate_$_state_machine__11625__auto__ = function(state_19006){
switch(arguments.length){
case 0:
return calculadora_ui$controller$calculate_$_state_machine__11625__auto____0.call(this);
case 1:
return calculadora_ui$controller$calculate_$_state_machine__11625__auto____1.call(this,state_19006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
calculadora_ui$controller$calculate_$_state_machine__11625__auto__.cljs$core$IFn$_invoke$arity$0 = calculadora_ui$controller$calculate_$_state_machine__11625__auto____0;
calculadora_ui$controller$calculate_$_state_machine__11625__auto__.cljs$core$IFn$_invoke$arity$1 = calculadora_ui$controller$calculate_$_state_machine__11625__auto____1;
return calculadora_ui$controller$calculate_$_state_machine__11625__auto__;
})()
})();
var state__11747__auto__ = (function (){var statearr_19012 = f__11746__auto__();
(statearr_19012[(6)] = c__11745__auto__);

return statearr_19012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11747__auto__);
}));

return c__11745__auto__;
});
calculadora_ui.controller.history = (function calculadora_ui$controller$history(){
var c__11745__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11746__auto__ = (function (){var switch__11624__auto__ = (function (state_19022){
var state_val_19023 = (state_19022[(1)]);
if((state_val_19023 === (1))){
var inst_19013 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_19014 = [false];
var inst_19015 = cljs.core.PersistentHashMap.fromArrays(inst_19013,inst_19014);
var inst_19016 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("http://localhost:4000/history",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19015], 0));
var state_19022__$1 = state_19022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19022__$1,(2),inst_19016);
} else {
if((state_val_19023 === (2))){
var inst_19018 = (state_19022[(2)]);
var inst_19019 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_19018);
var inst_19020 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19019);
var state_19022__$1 = state_19022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19022__$1,inst_19020);
} else {
return null;
}
}
});
return (function() {
var calculadora_ui$controller$history_$_state_machine__11625__auto__ = null;
var calculadora_ui$controller$history_$_state_machine__11625__auto____0 = (function (){
var statearr_19024 = [null,null,null,null,null,null,null];
(statearr_19024[(0)] = calculadora_ui$controller$history_$_state_machine__11625__auto__);

(statearr_19024[(1)] = (1));

return statearr_19024;
});
var calculadora_ui$controller$history_$_state_machine__11625__auto____1 = (function (state_19022){
while(true){
var ret_value__11626__auto__ = (function (){try{while(true){
var result__11627__auto__ = switch__11624__auto__(state_19022);
if(cljs.core.keyword_identical_QMARK_(result__11627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11627__auto__;
}
break;
}
}catch (e19025){var ex__11628__auto__ = e19025;
var statearr_19026_19032 = state_19022;
(statearr_19026_19032[(2)] = ex__11628__auto__);


if(cljs.core.seq((state_19022[(4)]))){
var statearr_19027_19033 = state_19022;
(statearr_19027_19033[(1)] = cljs.core.first((state_19022[(4)])));

} else {
throw ex__11628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19034 = state_19022;
state_19022 = G__19034;
continue;
} else {
return ret_value__11626__auto__;
}
break;
}
});
calculadora_ui$controller$history_$_state_machine__11625__auto__ = function(state_19022){
switch(arguments.length){
case 0:
return calculadora_ui$controller$history_$_state_machine__11625__auto____0.call(this);
case 1:
return calculadora_ui$controller$history_$_state_machine__11625__auto____1.call(this,state_19022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
calculadora_ui$controller$history_$_state_machine__11625__auto__.cljs$core$IFn$_invoke$arity$0 = calculadora_ui$controller$history_$_state_machine__11625__auto____0;
calculadora_ui$controller$history_$_state_machine__11625__auto__.cljs$core$IFn$_invoke$arity$1 = calculadora_ui$controller$history_$_state_machine__11625__auto____1;
return calculadora_ui$controller$history_$_state_machine__11625__auto__;
})()
})();
var state__11747__auto__ = (function (){var statearr_19028 = f__11746__auto__();
(statearr_19028[(6)] = c__11745__auto__);

return statearr_19028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11747__auto__);
}));

return c__11745__auto__;
});

//# sourceMappingURL=calculadora_ui.controller.js.map
