import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import NestedButtons from './NestedButtons';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//import '@testing-library/jest-dom/extend-expect';

// Normal Test Cases

test('Click on the Outer Button triggers the correct alert', () => {
    window.alert = jest.fn(); // Mock alert function

    render(<NestedButtons />);
    const outerButton = screen.getByText('Outer Button');
    
    fireEvent.click(outerButton);
    
    expect(window.alert).toHaveBeenCalledWith('Outer button clicked');
});

test('Click on the Inner Button triggers the correct alert and stops propagation', () => {
    window.alert = jest.fn(); // Mock alert function

    render(<NestedButtons />);
    const innerButton = screen.getByText('Inner Button');

    fireEvent.click(innerButton);

    expect(window.alert).toHaveBeenCalledWith('Inner button clicked');
    expect(window.alert).not.toHaveBeenCalledWith('Outer button clicked');
});

test('DOM structure contains both buttons', () => {
    render(<NestedButtons />);

    const outerButton = screen.getByText('Outer Button');
    const innerButton = screen.getByText('Inner Button');

    expect(outerButton).toBeInTheDocument();
    expect(innerButton).toBeInTheDocument();
});

// Edge Test Cases

test('Clicking inner button triggers only inner button alert as expected', () => {
  window.alert = jest.fn(); // Mock alert function

  render(<NestedButtons />);
  const innerButton = screen.getByText('Inner Button');

  // Simulate a normal click on the inner button
  fireEvent.click(innerButton);

  expect(window.alert).toHaveBeenCalledWith('Inner button clicked');
  expect(window.alert).not.toHaveBeenCalledWith('Outer button clicked');
});

test('Clicking overlapping region triggers only outer button alert', () => {
    window.alert = jest.fn(); // Mock alert function

    render(<NestedButtons />);
    const outerButton = screen.getByText('Outer Button');

    // Simulate a click at an overlapping position
    fireEvent.click(outerButton);

    expect(window.alert).toHaveBeenCalledWith('Outer button clicked');
    expect(window.alert).not.toHaveBeenCalledWith('Inner button clicked');
});

test('Simulate bubbling from inner to outer and verify alerts', () => {
    window.alert = jest.fn(); // Mock alert function

    render(<NestedButtons />);
    const innerButton = screen.getByText('Inner Button');

    // Simulate event bubbling behavior
    fireEvent.click(innerButton);

    expect(window.alert).toHaveBeenCalledWith('Inner button clicked');
    expect(window.alert).not.toHaveBeenCalledWith('Outer button clicked');
});
