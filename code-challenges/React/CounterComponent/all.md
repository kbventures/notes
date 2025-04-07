# Task: Basic Counter Component

## Requirements:

### Component Props:
- `initialValue` (default: `0`)
- `step` (default: `1`)

### State Management:
- Use `useState` to manage the counter.

### Actions:
- **Increment/Decrement** the counter.
- **Reset** (resets to `initialValue`).

### UI:
- Display the current count.
- Buttons for increment, decrement, and reset.

## Bonus:
- Add a **"Double"** button that multiplies the count by 2.


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



# Task: Advanced Counter Component

## Requirements:

### Component Props:
- `initialValue` (default: `0`)
- `step` (default: `1`)
- `min` (default: `-Infinity`)
- `max` (default: `Infinity`)

### State Management:
- Use `useReducer` instead of `useState`.

### Persistence:
- Store and retrieve the counter value from `localStorage`.

### Actions:
- **Increment/Decrement** (respecting min/max).
- **Reset** (resets to `initialValue`).

### Keyboard Support:
- Pressing **Arrow Up/Down** increases/decreases the count.
- Pressing **"r"** resets it.

### Unit Tests:
- Test counter updates and persistence.

## Bonus:
- Add a **"Double"** button that multiplies the count by 2.
- Show a warning when trying to exceed `max` or go below `min`.

Would you like additional constraints to make it even more challenging?





