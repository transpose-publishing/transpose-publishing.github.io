import {useState} from "react";


//Custom Hooks
export function useMergeState (initialState) {
  const [state, setState] = useState(initialState);
  return [state, (newState) => {
    setState( prevState => ({...prevState, ...newState}))
  }]
}



//Component Functionality
export function keyboardControls (keyHandlers) {
  return function onKeyDown (e) {
    return keyHandlers[e.keyCode] ? keyHandlers[e.keyCode](e) : null
  }
}
