import React, {useEffect, useState} from "react";


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

export function isNot(value, array) {
  return !array.some( condition => condition === value);
}

const uids = {};
export function generateUid (uidPrefix) {
  if(uids[uidPrefix] === void 0) {
    uids[uidPrefix] = 0
  } else {
    uids[uidPrefix]++
  }
  return `${uidPrefix}-${uids[uidPrefix]}`
}

export function parseLinksInString (str) {
  if(typeof str !== 'string' || str.indexOf('http') === -1) {
    return str
  }
  const split = [str.substring(0, str.indexOf('http')), str.substring(str.indexOf('http'))];
  split[1] = split[1].replace(/\r?\n|\r/g, ' ');
  const url = split[1].slice(0, split[1].indexOf(' ') > -1 ? split[1].indexOf(' ') : void 0);
  split[1] = split[1].indexOf(' ') > -1 ? split[1].substring(split[1].indexOf(' ')) : split[1];
  if(split[1].indexOf('http') > -1) {
    if(split[1].indexOf(' ') > -1) {
      split[1] = parseLinksInString(split[1]);
    } else {
      return [split[0], <a href={split[1]} target="_blank">{split[1]}</a>]
    }
  }
  return [split[0], <a href={url} target="_blank">{url}</a>, split[1]].flat()
}
