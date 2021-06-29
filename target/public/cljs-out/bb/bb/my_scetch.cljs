(ns bb.my-scetch
  (:require
   [quil.core :as q]
   [bb.big-bang :refer [big-bang]]))

(defn number->square [state]
  (q/rect 200 200 (:size state) (:size state)))

(defn reset [state] 
  (assoc state :size 100))

(defn my-scetch
  []
  (big-bang {:size 100}
            {:to-draw  number->square
             :on-tick #(- % 0.5)
             :on-key  reset
             :stop-when #(= % -20)}))


