# Nested Button Clicks

## Author: Katrina Hill

### Description:
The `NestedButtons` component is a React component that demonstrates nested button elements with distinct click handling behaviors. The component features an outer button that triggers one alert and an inner button that triggers another, while preventing event propagation.

### Features
- Nested Buttons: Contains an inner button inside an outer button.

- Event Handling:
    - The outerButton triggers an alert when clicked.
    - The innerButton stops the event from propagating to the outer button and triggers its own alert.

### Files
- `NestedButtons.js`: defines the `NestedButtons` component, which displays an outer and an inner button with their respective click event handlers.
- `App.js`: renders the main application structure, including the `NestedButtons` component, and includes the React logo and a link to the React documentation.
- `App.test.js`: contains test cases for verifying the behavior of the `App` and `NestedButtons` components, including checking DOM structure and simulating button clicks to ensure correct alerts are triggered.

### How to Run
1. **Clone the repository** (or download the files):
   - git clone https://github.com/katrina-l-hill/nested_buttons
   - cd into the repository directory, `event-propagation-assignment`
2. **Run the Main program**:
   - run `npm start`
3. **Run the tests**:
   - run `npm test`