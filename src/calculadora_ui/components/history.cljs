(ns calculadora-ui.components.history
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.reader]
   [reagent.core :as r]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]))

;; -------------------------
;; State

(def historyData (r/atom []))

;; -------------------------
;; Functions

(defn loadHistory [historyRes]
  (reset! historyData (cljs.reader/read-string (str "["historyRes"]")))
  )

;; -------------------------
;; API Call

(defn history []
  (go (let [response (<! (http/get "http://localhost:4000/history" {:with-credentials? false}))]
        (loadHistory (:body response)))))

;; -------------------------
;; Component

(r/defc historyComponent []
  [:div
   {:class "historico"}
   [:button {:class "history-button" :on-click #(history)} "Carregar histórico"]
   [:ul
    (for [item @historyData]
      ^{:key [item :id]} [:li [item :operation] " = " [item :result]])]])