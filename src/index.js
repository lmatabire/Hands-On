import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'DECREMENT':
            return {...state, count: state.count - 1}
        case 'ADDFIVE':
            return {...state, count: state.count + 5}
        case 'ADDTEN': 
            return {...state, count: state.count + 10}
        case 'RESET':
            return {
                ...state,
                count: state.count = 0
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
//map the reading
const mapStateToProps = (state) => {
    return {count: state.count}
}
//map the dispatch/writing
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'}),
        addFive: () => dispatch({type: 'ADDFIVE'}),
        addTEN: () => dispatch({type: 'ADDTEN'}),
        onReset: () => dispatch({type: 'RESET'})
    }
}
//component
const Counter = ({count, onIncrement, onDecrement, addFive, addTEN, onReset}) => {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onReset}>Reset</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={addFive}>+5</button>
            <button onClick={addTEN}>+10</button>
        </div>
    )
}
//connect mapStateToProps & mapDispatchToProps

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

render(
    <Provider store={store}>
        <ConnectedCounter/>
    </Provider>, document.getElementById('root')
)