import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('reducer shoud change value to opposite value', ()=>{
    //data
const state: StateType = {
    collapsed: false
}


    //action
const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expect

    expect(newState.collapsed).toBe(true)
});

export default 1;