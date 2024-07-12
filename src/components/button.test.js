import React from "react";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/button';

// Test if the button renders with the correct label
test('Render button with label', () => {
    const { getByText } = render(
        <Button label="Click Me" />
    );
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
});

// Test if the button has the 'btn' class
test('Classname btn is present', () => {
    const { container } = render(
        <Button label="Click Me" />
    );
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toHaveClass('btn');
});

// Mock function test: Check if the function is called twice
const mockFun = jest.fn();

test('function should call 2 times', () => {
    mockFun();
    mockFun();
    expect(mockFun).toHaveBeenCalledTimes(2);
});

// Test if the button click triggers the onClick event
test('button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
        <Button label="Click Me" onClick={onClickMock} />
    );
    const buttonElement = getByText('Click Me');
    fireEvent.click(buttonElement); // simulate the button click
    expect(onClickMock).toHaveBeenCalledTimes(1);
});