(ns bb.big-bang
  (:require
   [reagent.dom :as rdom]
   [reagent.core :as r]
   [quil.core :as q]
   [quil.middleware :as m]
   )) 

(defn update-state [fn state] 
  (if-not ((:stop state) (:size state)) 
    (update state :size fn)
    (update state :size identity)))

(defn draw [draw-figure state]
  (q/background 127)
  (q/fill 0)  
  (draw-figure state))

(defn canvas [state events]
  (r/create-class
   {:component-did-mount
    (fn [component]
      (let [node (rdom/dom-node component)
            width 800 
            height 800]
        (q/sketch 
         :host node
         :draw (partial draw (:to-draw events))
         :setup (fn [] state)
         :update (partial update-state (:on-tick events))
         :key-typed (:on-key events)
         :size [width height]
         :middleware [m/fun-mode] 
         )))
    :reagent-render
    (fn [] [:div ])}))

(defn big-bang
  [state events]
  (r/with-let [running? (r/atom false)]
    [:div 
     [:div>button
      {:on-click #(swap! running? not)}
      (if @running? "stop" "start")]
     (when @running?
       [canvas {:size (:size state) :stop (:stop-when events)} events])]))



