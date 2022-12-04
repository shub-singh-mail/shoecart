import {act, renderHook} from '@testing-library/react-hooks';
import {useReducer} from 'react';

import cartReducer, {CartActionKind} from '../cartReducer';

test('cart reducer should have correct number of items', () => {
  const {result} = renderHook(() => useReducer(cartReducer, []));

  const [initialState, dispatch] = result.current;
  expect(initialState.length).toBe(0);

  act(() => {
    dispatch({type: CartActionKind.INCREASE, payload: 'id13342'});
  });

  const [state] = result.current;
  expect(state.length).toBe(1);

  act(() => {
    dispatch({type: CartActionKind.INCREASE, payload: 'id13342'});
    dispatch({type: CartActionKind.INCREASE, payload: 'id13345'});
    dispatch({type: CartActionKind.REMOVE, payload: 'id13342'});
  });

  const [newState] = result.current;
  expect(newState.length).toBe(2);
});

test('should throw error on wrong action type', () => {
  const UNKNOWN_ACTION = 'UNKNOWN_ACTION';
  const {result} = renderHook(() => useReducer(cartReducer, []));
  const [, dispatch] = result.current;
  act(() => {
    dispatch({type: UNKNOWN_ACTION, payload: 'id13342'});
  });

  expect(result.error).toEqual(Error('Unknown action: ' + UNKNOWN_ACTION));
});
