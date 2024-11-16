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
- `NestedButtons.js`: 
- `App.js`:
- `App.test.js`: 

### How to Run
1. **Clone the repository** (or download the files):
   - git clone https://github.com/katrina-l-hill/nested_buttons
   - cd into the repository directory, `event-propagation-assignment`
2. **Run the Main program**:
   - run `npm start`
3. **Run the tests**:
   - run `npm test`