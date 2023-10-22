import { controls } from "./elements.js";
import * as actions from "./actions.js";
import  { cards } from "./elements.js";
import state from "./state.js";
import { updateDisplay } from "./timer.js";


export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()
    })

     cards.addEventListener("click", (event) => {
       const action = event.target.dataset.action;

       if (typeof actions[action] != "function") {
         return;
       }

       actions[action]();
     });
}

 
