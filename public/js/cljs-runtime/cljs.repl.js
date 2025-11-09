goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20591){
var map__20597 = p__20591;
var map__20597__$1 = cljs.core.__destructure_map(map__20597);
var m = map__20597__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20597__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20597__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20602_20999 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20603_21000 = null;
var count__20604_21001 = (0);
var i__20605_21002 = (0);
while(true){
if((i__20605_21002 < count__20604_21001)){
var f_21005 = chunk__20603_21000.cljs$core$IIndexed$_nth$arity$2(null,i__20605_21002);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21005], 0));


var G__21006 = seq__20602_20999;
var G__21007 = chunk__20603_21000;
var G__21008 = count__20604_21001;
var G__21009 = (i__20605_21002 + (1));
seq__20602_20999 = G__21006;
chunk__20603_21000 = G__21007;
count__20604_21001 = G__21008;
i__20605_21002 = G__21009;
continue;
} else {
var temp__5804__auto___21011 = cljs.core.seq(seq__20602_20999);
if(temp__5804__auto___21011){
var seq__20602_21012__$1 = temp__5804__auto___21011;
if(cljs.core.chunked_seq_QMARK_(seq__20602_21012__$1)){
var c__5525__auto___21013 = cljs.core.chunk_first(seq__20602_21012__$1);
var G__21014 = cljs.core.chunk_rest(seq__20602_21012__$1);
var G__21015 = c__5525__auto___21013;
var G__21016 = cljs.core.count(c__5525__auto___21013);
var G__21017 = (0);
seq__20602_20999 = G__21014;
chunk__20603_21000 = G__21015;
count__20604_21001 = G__21016;
i__20605_21002 = G__21017;
continue;
} else {
var f_21019 = cljs.core.first(seq__20602_21012__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21019], 0));


var G__21021 = cljs.core.next(seq__20602_21012__$1);
var G__21022 = null;
var G__21023 = (0);
var G__21024 = (0);
seq__20602_20999 = G__21021;
chunk__20603_21000 = G__21022;
count__20604_21001 = G__21023;
i__20605_21002 = G__21024;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21025 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21025], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21025)))?cljs.core.second(arglists_21025):arglists_21025)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20629_21032 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20630_21033 = null;
var count__20631_21034 = (0);
var i__20632_21035 = (0);
while(true){
if((i__20632_21035 < count__20631_21034)){
var vec__20656_21036 = chunk__20630_21033.cljs$core$IIndexed$_nth$arity$2(null,i__20632_21035);
var name_21037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20656_21036,(0),null);
var map__20659_21038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20656_21036,(1),null);
var map__20659_21039__$1 = cljs.core.__destructure_map(map__20659_21038);
var doc_21040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20659_21039__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20659_21039__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21037], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21041], 0));

if(cljs.core.truth_(doc_21040)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21040], 0));
} else {
}


var G__21045 = seq__20629_21032;
var G__21046 = chunk__20630_21033;
var G__21047 = count__20631_21034;
var G__21048 = (i__20632_21035 + (1));
seq__20629_21032 = G__21045;
chunk__20630_21033 = G__21046;
count__20631_21034 = G__21047;
i__20632_21035 = G__21048;
continue;
} else {
var temp__5804__auto___21049 = cljs.core.seq(seq__20629_21032);
if(temp__5804__auto___21049){
var seq__20629_21051__$1 = temp__5804__auto___21049;
if(cljs.core.chunked_seq_QMARK_(seq__20629_21051__$1)){
var c__5525__auto___21052 = cljs.core.chunk_first(seq__20629_21051__$1);
var G__21053 = cljs.core.chunk_rest(seq__20629_21051__$1);
var G__21054 = c__5525__auto___21052;
var G__21055 = cljs.core.count(c__5525__auto___21052);
var G__21056 = (0);
seq__20629_21032 = G__21053;
chunk__20630_21033 = G__21054;
count__20631_21034 = G__21055;
i__20632_21035 = G__21056;
continue;
} else {
var vec__20672_21057 = cljs.core.first(seq__20629_21051__$1);
var name_21058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20672_21057,(0),null);
var map__20675_21059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20672_21057,(1),null);
var map__20675_21060__$1 = cljs.core.__destructure_map(map__20675_21059);
var doc_21061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20675_21060__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20675_21060__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21058], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21062], 0));

if(cljs.core.truth_(doc_21061)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21061], 0));
} else {
}


var G__21064 = cljs.core.next(seq__20629_21051__$1);
var G__21065 = null;
var G__21066 = (0);
var G__21067 = (0);
seq__20629_21032 = G__21064;
chunk__20630_21033 = G__21065;
count__20631_21034 = G__21066;
i__20632_21035 = G__21067;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20685 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20686 = null;
var count__20687 = (0);
var i__20688 = (0);
while(true){
if((i__20688 < count__20687)){
var role = chunk__20686.cljs$core$IIndexed$_nth$arity$2(null,i__20688);
var temp__5804__auto___21069__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21069__$1)){
var spec_21070 = temp__5804__auto___21069__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21070)], 0));
} else {
}


var G__21071 = seq__20685;
var G__21072 = chunk__20686;
var G__21073 = count__20687;
var G__21074 = (i__20688 + (1));
seq__20685 = G__21071;
chunk__20686 = G__21072;
count__20687 = G__21073;
i__20688 = G__21074;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20685);
if(temp__5804__auto____$1){
var seq__20685__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20685__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20685__$1);
var G__21076 = cljs.core.chunk_rest(seq__20685__$1);
var G__21077 = c__5525__auto__;
var G__21078 = cljs.core.count(c__5525__auto__);
var G__21079 = (0);
seq__20685 = G__21076;
chunk__20686 = G__21077;
count__20687 = G__21078;
i__20688 = G__21079;
continue;
} else {
var role = cljs.core.first(seq__20685__$1);
var temp__5804__auto___21081__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21081__$2)){
var spec_21083 = temp__5804__auto___21081__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21083)], 0));
} else {
}


var G__21085 = cljs.core.next(seq__20685__$1);
var G__21086 = null;
var G__21087 = (0);
var G__21088 = (0);
seq__20685 = G__21085;
chunk__20686 = G__21086;
count__20687 = G__21087;
i__20688 = G__21088;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20829 = datafied_throwable;
var map__20829__$1 = cljs.core.__destructure_map(map__20829);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20829__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20829__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20829__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20830 = cljs.core.last(via);
var map__20830__$1 = cljs.core.__destructure_map(map__20830);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20830__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20830__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20830__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20831 = data;
var map__20831__$1 = cljs.core.__destructure_map(map__20831);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20831__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20831__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20831__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20832 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20832__$1 = cljs.core.__destructure_map(map__20832);
var top_data = map__20832__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20840 = phase;
var G__20840__$1 = (((G__20840 instanceof cljs.core.Keyword))?G__20840.fqn:null);
switch (G__20840__$1) {
case "read-source":
var map__20844 = data;
var map__20844__$1 = cljs.core.__destructure_map(map__20844);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20844__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20844__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20847 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20847__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20847,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20847);
var G__20847__$2 = (cljs.core.truth_((function (){var fexpr__20850 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20850.cljs$core$IFn$_invoke$arity$1 ? fexpr__20850.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20850.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20847__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20847__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20847__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20847__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20853 = top_data;
var G__20853__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20853,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20853);
var G__20853__$2 = (cljs.core.truth_((function (){var fexpr__20854 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20854.cljs$core$IFn$_invoke$arity$1 ? fexpr__20854.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20854.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20853__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20853__$1);
var G__20853__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20853__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20853__$2);
var G__20853__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20853__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20853__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20853__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20853__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20856 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856,(3),null);
var G__20859 = top_data;
var G__20859__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20859,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20859);
var G__20859__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20859__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20859__$1);
var G__20859__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20859__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20859__$2);
var G__20859__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20859__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20859__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20859__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20859__$4;
}

break;
case "execution":
var vec__20864 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20864,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20864,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20864,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20864,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20823_SHARP_){
var or__5002__auto__ = (p1__20823_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__20870 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20870.cljs$core$IFn$_invoke$arity$1 ? fexpr__20870.cljs$core$IFn$_invoke$arity$1(p1__20823_SHARP_) : fexpr__20870.call(null,p1__20823_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__20878 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20878__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20878,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20878);
var G__20878__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20878__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20878__$1);
var G__20878__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20878__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20878__$2);
var G__20878__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20878__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20878__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20878__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20878__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20840__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20908){
var map__20910 = p__20908;
var map__20910__$1 = cljs.core.__destructure_map(map__20910);
var triage_data = map__20910__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20910__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20910__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20910__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20910__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20910__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20910__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20910__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20910__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20925 = phase;
var G__20925__$1 = (((G__20925 instanceof cljs.core.Keyword))?G__20925.fqn:null);
switch (G__20925__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20926 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20927 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20928 = loc;
var G__20929 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20931_21161 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20932_21162 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20933_21163 = true;
var _STAR_print_fn_STAR__temp_val__20934_21164 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20933_21163);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20934_21164);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20902_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20902_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20932_21162);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20931_21161);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20926,G__20927,G__20928,G__20929) : format.call(null,G__20926,G__20927,G__20928,G__20929));

break;
case "macroexpansion":
var G__20939 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20940 = cause_type;
var G__20941 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20942 = loc;
var G__20943 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20939,G__20940,G__20941,G__20942,G__20943) : format.call(null,G__20939,G__20940,G__20941,G__20942,G__20943));

break;
case "compile-syntax-check":
var G__20945 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20946 = cause_type;
var G__20947 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20948 = loc;
var G__20949 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20945,G__20946,G__20947,G__20948,G__20949) : format.call(null,G__20945,G__20946,G__20947,G__20948,G__20949));

break;
case "compilation":
var G__20950 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20951 = cause_type;
var G__20952 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20953 = loc;
var G__20954 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20950,G__20951,G__20952,G__20953,G__20954) : format.call(null,G__20950,G__20951,G__20952,G__20953,G__20954));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20955 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20956 = symbol;
var G__20957 = loc;
var G__20958 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20960_21177 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20961_21178 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20962_21179 = true;
var _STAR_print_fn_STAR__temp_val__20963_21180 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20962_21179);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20963_21180);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20905_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20905_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20961_21178);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20960_21177);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20955,G__20956,G__20957,G__20958) : format.call(null,G__20955,G__20956,G__20957,G__20958));
} else {
var G__20969 = "Execution error%s at %s(%s).\n%s\n";
var G__20970 = cause_type;
var G__20971 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20972 = loc;
var G__20973 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20969,G__20970,G__20971,G__20972,G__20973) : format.call(null,G__20969,G__20970,G__20971,G__20972,G__20973));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20925__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
