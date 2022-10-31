import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add multiple numbers', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const add = container.getByTestId('operator-add');  
    fireEvent.click(add);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('5');

  })

  it('should subtract a number from another number', () => {
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const subtract = container.getByTestId('operator-subtract');
    fireEvent.click(subtract);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
    
  })

  it('should mulply two numbers', () => {
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const multiply = container.getByTestId('operator-multiply');
    fireEvent.click(multiply);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15');

})

  it('should divide a number by another number', () => {
  const button2 = container.getByTestId('number2');
  fireEvent.click(button2);
  const button1 = container.getByTestId('number1');
  fireEvent.click(button1);
  const divide = container.getByTestId('operator-divide');
  fireEvent.click(divide);
  const button7 = container.getByTestId('number7');
  fireEvent.click(button7);
  const equals = container.getByTestId('operator-equals');
  fireEvent.click(equals);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('3');

})

 it('should concatenate two number by button clicks', () => {
  const button2 = container.getByTestId('number2');
  fireEvent.click(button2);
  const button1 = container.getByTestId('number1');
  fireEvent.click(button1);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('21');

})

it('should chain multiple operations together, like 3+5-2', () => {
  const button3 = container.getByTestId('number3');
  fireEvent.click(button3);
  const add = container.getByTestId('operator-add');  
  fireEvent.click(add);
  const button5 = container.getByTestId('number5');
  fireEvent.click(button5);
  const subtract = container.getByTestId('operator-subtract');
  fireEvent.click(subtract);
  const button2 = container.getByTestId('number2');
  fireEvent.click(button2);
  const equals = container.getByTestId('operator-equals');
  fireEvent.click(equals);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('6');

})

it('clear the running total without affecting the calculation', () => {

  const clear = container.getByTestId('clear');
  fireEvent.click(clear);
  const button2 = container.getByTestId('number2');
  fireEvent.click(button2);
  const multiply = container.getByTestId('operator-multiply');
  fireEvent.click(multiply);
  const button6 = container.getByTestId('number6');
  fireEvent.click(button6);
  const equals = container.getByTestId('operator-equals');
  fireEvent.click(equals);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('12');

})

})