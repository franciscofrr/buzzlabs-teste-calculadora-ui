(ns calculadora-ui.components.calculator
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [reagent.core :as r]
   [clojure.string :as str]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]))

;; -------------------------
;; State

(def currentInput (r/atom ""))
(def previousInput (r/atom ""))
(def operator (r/atom ""))
(def display (r/atom ""))

;; -------------------------
;; Functions

(defn updateDisplay []
  (reset! display (str/join [@previousInput @operator @currentInput])))

(defn appendNumber [number]
  (r/rswap! currentInput + number)
  (updateDisplay))

(defn setOperator [op]
  (if (not= op @operator)
    (do
      (reset! operator op)
      (reset! previousInput @currentInput)
      (reset! currentInput "")
      (updateDisplay))
    (println "nope")))

(defn clearButton []
  (reset! currentInput "")
  (reset! previousInput "")
  (reset! operator "")
  (updateDisplay))

(defn displayResult [result] 
    (reset! previousInput "")
    (reset! currentInput result)
    (reset! operator "")
    (reset! display result)
    )

;; -------------------------
;; API Call

(defn calculate [previousInput operator currentInput]
  (go (let [response (<! (http/post "http://localhost:4000/calculate"
                                    {:with-credentials? false
                                     :query-params
                                     {:operatorLeft previousInput :operationSign operator :operatorRight currentInput}}))]
        (displayResult (:body response)))))

;; -------------------------
;; Component

(r/defc calculatorComponent []
  [:div
   {:class "calculator"}
   [:input {:type "text" :class "display" :id "display" :value @display}]
   [:div {:class "buttons"}
    [:button {:on-click #(appendNumber "1")} "1"]
    [:button {:on-click #(appendNumber "2")} "2"]
    [:button {:on-click #(appendNumber "3")} "3"]
    [:button {:on-click #(setOperator "+")} "+"]
    [:button {:on-click #(appendNumber "4")} "4"]
    [:button {:on-click #(appendNumber "5")} "5"]
    [:button {:on-click #(appendNumber "6")} "6"]
    [:button {:on-click #(setOperator "-")} "-"]
    [:button {:on-click #(appendNumber "7")} "7"]
    [:button {:on-click #(appendNumber "8")} "8"]
    [:button {:on-click #(appendNumber "9")} "9"]
    [:button {:on-click #(setOperator "*")} "*"]
    [:button {:on-click #(clearButton)} "C"]
    [:button {:on-click #(appendNumber "0")} "0"]
    [:button {:on-click #(setOperator "/")} "/"]
    [:button {:class "equals" :on-click #(calculate @previousInput @operator @currentInput)} "="]]])