import React, {useEffect, useState} from "react";
import {SORT_ORDER} from './constants';
const {ASC} = SORT_ORDER;

//Custom Hooks
export function useMergeState (initialState) {
  const [state, setState] = useState(initialState);
  return [state, (newState) => {
    setState( prevState => ({...prevState, ...newState}))
  }]
}

export function useClickOutside ({container, handler, dependencies, addListenerConditional = true}) {
  useEffect(() => {
    if(addListenerConditional) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, dependencies);

  function handleClickOutside (e) {
    if(!container.current.contains(e.target)) {
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

export function useArrayState (initialArray = []) {
  const [array, setArray] = useState(initialArray);
  const arrayControls = {
    pushUnique: function pushUnique (item) {
      if(!array.includes(item)) {
        setArray([...array, item])
      }
    },
    removeByIndex: function removeByIndex (index) {
      const newArray = [...array];
      newArray.splice(index, 1);
      setArray(newArray)
    },
    clearArray: function clearArray () {
      setArray([])
    }
  };
  return [array, arrayControls]
}


//Component Functionality
export function keyboardControls (keyHandlers) {
  return function onKeyDown (e) {
    return keyHandlers[e.keyCode] ? keyHandlers[e.keyCode](e) : null
  }
}

export function prepareDomForModal () {
  const body = document.getElementsByTagName("BODY")[0];
  body.style.overflow = 'hidden';
  body.style['padding-right'] = '14px';
}
prepareDomForModal.cleanup = function modalDomSettingsCleanup () {
  const body = document.getElementsByTagName("BODY")[0];
  body.style.overflow = 'auto';
  body.style['padding-right'] = '0'
};


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

export function parseInlineLink (str, in_line_link) {
  const {text, link} = in_line_link;
  if(typeof str !== 'string' || !text || !link) {
    return str
  }
  const linkIndex = str.indexOf(text);
  if(linkIndex === -1) return str;
  const linkElement = <a href={link} target="_blank">{text}</a>;
  return [str.substring(0, linkIndex), linkElement, str.substring(linkIndex + text.length)]
}

export function sortGenerator (field, order = ASC, {ignoreBlanks, secondaryField, secondaryOrder} = {}) {
  return function sortFunction (a, b){
    const aValue = a[field].toLowerCase();
    const bValue = b[field].toLowerCase();
    if(ignoreBlanks) {
      if(aValue === "" && bValue === "" && secondaryField) {
        const secondaryFieldAValue = a[secondaryField].toLowerCase();
        const secondaryFieldBValue = b[secondaryField].toLowerCase();
        if(secondaryFieldAValue < secondaryFieldBValue) { return secondaryOrder === ASC ? -1 : 1; }
        if(secondaryFieldAValue > secondaryFieldBValue) { return secondaryOrder === ASC ? 1 : -1; }
      }
      if(aValue === "") return 1;
      if(bValue === "") return -1;
    }
    if(aValue < bValue) { return order === ASC ? -1 : 1; }
    if(aValue > bValue) { return order === ASC ? 1 : -1; }
    if(secondaryField) {
      const secondaryFieldAValue = a[secondaryField].toLowerCase();
      const secondaryFieldBValue = b[secondaryField].toLowerCase();
      if(secondaryFieldAValue < secondaryFieldBValue) { return secondaryOrder === ASC ? -1 : 1; }
      if(secondaryFieldAValue > secondaryFieldBValue) { return secondaryOrder === ASC ? 1 : -1; }
    }
    return 0;
  }
}

export function renderContent (contentNode) {
  if(!contentNode || typeof contentNode === 'string') return contentNode;
  if(Array.isArray(contentNode)) {
    return <ul>{contentNode.map( item => <li>{renderContent(item)}</li>)}</ul>
  }
  if(typeof contentNode === 'object') {
    if(contentNode.text && contentNode.in_line_link) {
      return parseInlineLink(contentNode.text, contentNode.in_line_link)
    }
    if(contentNode.text && contentNode.bullets) {
      return [contentNode.text, renderContent(contentNode.bullets)]
    }
    return contentNode.text || "Error reading content"
  }
  return "Error reading content"
}

export function getContent () {
  const content = window._content;
  return {...content, content: content.dictionary}
}
