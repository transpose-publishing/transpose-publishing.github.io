import React from "react";
import {SORT_ORDER} from 'constants';
const {ASC} = SORT_ORDER;

const {content} = getContent();

//Higher Order Components
export class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {hasError: false}
  }
  componentDidCatch(e) {
    console.error(e)
  }
  static getDerivedStateFromError (error) {
    return {hasError: true}
  };
  render() {
    return this.state.hasError ? <div className='application-error'>{content.application_error}</div> : this.props.children;
  }
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
prepareDomForModal.cleanup = function prepareDomForModal_cleanup () {
  const body = document.getElementsByTagName("BODY")[0];
  body.style.overflow = 'auto';
  body.style['padding-right'] = '0'
};

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


//content
export function getContent () {
  const content = window._content;
  return {...content, content: content.dictionary}
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
  const linkElement = <a key={0} href={link} target="_blank">{text}</a>;
  return [str.substring(0, linkIndex), linkElement, str.substring(linkIndex + text.length)]
}

export function renderContent (contentNode) {
  if(!contentNode || typeof contentNode === 'string') return contentNode;
  if(Array.isArray(contentNode)) {
    return <ul>{contentNode.map( item => <li>{renderContent(item)}</li>)}</ul>
  }
  if(typeof contentNode === 'object') {
    if(contentNode.text && contentNode.link) {
      return <a href={contentNode.link} target="_blank">{contentNode.text}</a>
    }
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
