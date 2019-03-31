import {useEffect, useState} from "react";


//Custom Hooks
export function useMergeState (initialState) {
  const [state, setState] = useState(initialState);
  return [state, (newState) => {
    setState( prevState => ({...prevState, ...newState}))
  }]
}

export function useClickOutside ({container, handler, dependencies, conditional = true}) {
  useEffect(() => {
    if(conditional) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, dependencies);

  function handleClickOutside (e) {
    if(!container.contains(e.target)) {
      handler()
    }
  }
}

const persistedCache = {};
export function usePersistedState(key, initial) {
  persistedCache[key] = persistedCache[key] || initial;
  const [state, setState] = useState(persistedCache[key]);
  return [state, (value) => {
    persistedCache[key] = value;
    setState(value)
  }]
}


//Component Functionality
export function keyboardControls (keyHandlers) {
  return function onKeyDown (e) {
    return keyHandlers[e.keyCode] ? keyHandlers[e.keyCode](e) : null
  }
}


//utils
export function searchString (searchTerm, source) {
  if(typeof searchTerm !== 'string' || typeof source !== 'string' || searchTerm === "" || source === "") return false;
  return source.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
}
