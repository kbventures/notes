# Updated Task: Intermediate Counter Component with Context, Reducer, Error State, Global Reset, and Grid Layout

## **Component Props:**
- **initialValue** (default: `0`)
- **step** (default: `1`)
- **min** (default: `-Infinity`)
- **max** (default: `Infinity`)

## **State Management:**
- Use `useReducer` to manage each individual counter state.
- Use **Context** to manage a global list of counters and allow for multiple counters.
- **Error State**: Display a warning if the counter exceeds `max` or goes below `min`.

## **Actions:**
- **Increment/Decrement** (respecting min/max).
- **Reset** (resets to `initialValue`).
- **Double** (multiplies the count by 2).
- **Error State**: Show a warning message when trying to exceed `max` or go below `min`.
- **Global Reset**: Add a global reset button to reset all counters to their `initialValue` at once.

## **Persistence:**
- Store each counter value in `localStorage` and retrieve it on load.
- Store settings like `initialValue`, `step`, `min`, and `max` in `localStorage` for each counter.
- Store and retrieve error messages in `localStorage`.

## **UI:**
- Display the current count for each counter.
- Provide buttons for increment, decrement, reset, double, and global reset.
- Show the error message if the counter exceeds `max` or goes below `min`.
- Use a **grid layout** to display multiple counters.
- Provide a **Global Reset** button to reset all counters simultaneously.

## **Bonus (for Multiple Counters):**
- Create multiple counters dynamically using **Context** and display them in a **grid layout**.
- **Context** will manage the global state for all counters, including the ability to add new ones and handle their shared settings.
- Use **CSS Grid** to create a responsive layout for the counters.
- Implement a **global reset** functionality that resets all counters to their initial values.
