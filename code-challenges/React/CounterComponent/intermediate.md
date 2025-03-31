# Task: Intermediate Counter Component

## Requirements:

### Component Props:
- `initialValue` (default: `0`)
- `step` (default: `1`)
- `min` (default: `-Infinity`)
- `max` (default: `Infinity`)

### State Management:
- Use `useReducer` instead of `useState`.

### Actions:
- **Increment/Decrement** (respecting min/max).
- **Reset** (resets to `initialValue`).

### Persistence:
- Store the counter value in `localStorage` and retrieve it on load.

### UI:
- Display the current count.
- Buttons for increment, decrement, and reset.

## Bonus:
- Add a **"Double"** button that multiplies the count by 2.
- Show a warning when trying to exceed `max` or go below `min`.




