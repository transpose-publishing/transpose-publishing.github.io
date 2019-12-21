import {useEffect, useLayoutEffect, useState, useRef, useMemo} from "react";
import {generateUid} from '../utils';


export function useMergeState (initialState) {
  const [state, setState] = useState(initialState);
  return [state, (newState) => {
    if(typeof  newState === 'function') {
      return setState(newState)
    }
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
      setArray(prevArray => {
        if(!prevArray.includes(item)) {
          return [...prevArray, item]
        }
        return prevArray
      })
    },
    removeByIndex: function removeByIndex (index) {
      setArray(prevArray => {
        const newArray = [...prevArray];
        newArray.splice(index, 1);
        return newArray
      })
    },
    clearArray: function clearArray () {
      setArray([])
    }
  };
  return [array, arrayControls]
}


export function useEffectOnUpdate(fn, inputs) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current)
      fn();
    else
      didMountRef.current = true;
  }, inputs);
}


export function useLayoutEffectOnUpdate(fn, inputs) {
  const didMountRef = useRef(false);

  useLayoutEffect(() => {
    if (didMountRef.current)
      fn();
    else
      didMountRef.current = true;
  }, inputs);
}


// useFadeInOut provides a renderConditional and an animationClass flag that toggle progressively.
// For fade in, the animationClass toggle is delayed until the renderConditional has a chance to toggle on and mount the
// component.
// For fade out, first the animationClass toggles false, then after a fadeTime delay the renderConditional toggles false.
// This lets the animationClass toggle trigger a css animation before the renderConditional causes an unmount.
// controlledState will update the fade state whenever it changes, while initialState will only be set initially
const fadeInOutTimeouts = {};
export function useFadeInOut ({
  initialState = false,
  controlledState = false,
  fadeTime = 500,
}) {
  const componentUid = useMemo(() => generateUid('fadeInOut'), []);
  const [renderConditional, setRenderConditional] = useState(initialState || controlledState);
  const [animationClass, setAnimationClass] = useState(initialState || controlledState);

  useLayoutEffectOnUpdate(function onControlledStateChange_setRenderState () {
    setAnimationClass(controlledState);
    setRenderConditional(controlledState);
  }, [controlledState]);

  function toggleFadeInOut () {
    if(!renderConditional) {
      setRenderConditional(true);
      setTimeout(() => {
        setAnimationClass(true)
      })
    }
    if(renderConditional) {
      if(fadeInOutTimeouts[componentUid]) {
        clearTimeout(fadeInOutTimeouts[componentUid]);
        delete fadeInOutTimeouts[componentUid]
      }
      if(animationClass) {
        fadeInOutTimeouts[componentUid] = setTimeout(() => {
          setRenderConditional(false)
        }, fadeTime)
      }
      setAnimationClass(!animationClass);
    }
  }

  return [renderConditional, animationClass, toggleFadeInOut]
}
