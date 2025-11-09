(ns calculadora-ui.core
  (:require
   [calculadora-ui.components.calculator :as calculator]
   [calculadora-ui.components.history :as history]
   [reagent.dom.client :as d]))

;; -------------------------
;; Views

(defn mainView []
  [:div
   {:class "main"}
   [calculator/calculatorComponent]
   [history/historyComponent]])

;; -------------------------
;; Initialize app

(defonce root (d/create-root (.getElementById js/document "app")))

(defn ^:export init! []
  (d/render root [mainView]))
