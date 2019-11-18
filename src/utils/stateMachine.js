import {useMemo} from "react";
import {useMergeState} from "./utils";

export function StateMachine (machine) {
  Object.assign(this, machine);
  this.dispatch = (actionName, ...payload) => {
    let actions = {};
    if(Array.isArray(this.state.state)) {
      this.state.state.forEach(state => Object.assign(actions, this.transitions[state]))
    } else {
      Object.assign(actions, this.transitions[this.state.state]);
    }

    const action = actions[actionName];

    if (action) {
      action.apply(this, payload)
    }
  };
  this.setMachineState = (newState) => {
    this.state = {...this.state, ...newState};
    this.setState(newState)
  };
  if(this.actions) {
    for(const action in this.actions) {
      this.actions[action] = this.actions[action].bind(this);
    }
  }
}

export function useMachine (Machine, {props, refs}, effects) {
  const [stateValues, setState] = useMergeState(
    typeof Machine.state === 'function'
      ? Machine.state(props)
      : Machine.state
  );

  Machine.props = props;
  const {dispatch} = useMemo(() => {
    if(typeof Machine.state === 'function') {
      Machine.state = Machine.state(props)
    }
    Machine.setState = setState;
    Machine.refs = refs;
    return Machine;
  }, []);

  let results;
  if(effects) {
    results = effects(stateValues, dispatch)
  }

  return [stateValues, dispatch, results]
}
