import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {renderHook, act} from '@testing-library/react-hooks';

import Home from '../Home';
import {useProducts} from '../../../context/ProductContext';
import ShoeContextProvider from '../../../context/ShoeContextProvider';
import shoesJSON from '../../../constants/shoes.json';

test('renders correctly', () => {
  render(<Home />);
  expect(screen.getByText('Most popular')).toBeTruthy();
});

jest.useFakeTimers();
test('renders list of shoes', () => {
  const wrapper = ({children}: {children: React.ReactNode}) => (
    <ShoeContextProvider>{children}</ShoeContextProvider>
  );
  const {result, rerender} = renderHook(() => useProducts(), {wrapper});
  render(<Home />);
  expect(result.current.length).toBe(0);
  act(() => {
    jest.advanceTimersByTime(3000);
  });
  rerender();
  expect(result.current.length).toBe(shoesJSON.length);
  expect(screen.getByTestId('products-list')).not.toBeEmptyElement();
});
jest.clearAllTimers();
