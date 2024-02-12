(ns ^:figwheel-hooks bb.core
  (:require
   [cljs.pprint :refer [pprint]]
   [reagent.dom :as rdom]
   [bb.my-scetch :refer [my-scetch]]))

(defn main-panel
  []
  [:div
   [:h1 "Big-Bang neu"]
   (my-scetch)])

(defn ^:export main     ;; call this to bootstrap your app
  []
  (rdom/render [main-panel]
               (js/document.getElementById "app")))

;; and this is what figwheel calls after each save
(defn ^:after-load re-render []
  (main))

;; this only gets called once
(defonce start-up (do (main)  true))


