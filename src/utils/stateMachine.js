import {useMergeState} from "./customHooks";

/*
ConditionMachine and useConditionMachine create a state machine that defines behavior based on the condition of the
host component by defining methods organized by stateCondition that only run when the component is in the relevant
stateCondition. It enforces this restriction by exposing the dispatch method, which is the only state update method
the component should call to mutate the ConditionMachine state.

For ConditionMachines that use an array of stateConditions where multiple conditions with the same methods can be
active at the same time (see example below), the overriding method is the one associated with the condition
closest to the end of the array.

Example: in searchStateMachine.js, onEnter method is available in both focused and keyboardNavigation stateConditions.
When the search is both in focused and keyboardNavigation states, since the stateConditions array looks like:
['focused', 'resultsDisplayed', 'keyboardNavigation'], the onEnter defined under keyboardNavigation is the overriding
method because keyboardNavigation is the later condition in the array.
*/
export function ConditionMachine (machine) {
  Object.assign(this, machine);

  this.dispatch = (actionName, ...payload) => {
    let actions = {};
    if(this.stateConditions.all) {
      Object.assign(actions, this.stateConditions.all)
    }
    if(Array.isArray(this.state.stateCondition)) {
      this.state.stateCondition.forEach(state => Object.assign(actions, this.stateConditions[state]))
    } else {
      Object.assign(actions, this.stateConditions[this.state.stateCondition]);
    }
    const action = actions[actionName];

    if (action) {
      action.apply(this, payload)
    }
  };

  if(this.actions) {
    for(const action in this.actions) {
      this.actions[action] = this.actions[action].bind(this);
    }
  }
}

export function useConditionMachine (Machine, {props, refs}, effects) {
  const [machineState, setMachineState] = useMergeState(
    typeof Machine.state === 'function'
      ? Machine.state(props)
      : Machine.state
  );

  Machine.state = machineState;
  Machine.setState = setMachineState;
  Machine.props = props;
  Machine.refs = refs;

  let results;
  if(effects) {
    results = effects(machineState, Machine.dispatch)
  }

  return [machineState, Machine.dispatch, results]
}
