## Common CSS Requirements in Counter Challenges

1. **Layout (Flex/Grid):**
   - Center the counter and buttons (`display: flex; justify-content: center; align-items: center;`)
   - Vertical stack or horizontal alignment of buttons (`flex-direction: column` or `row`)
   - Use `gap` for spacing between buttons

2. **Button Styling:**
   - Padding and margin for click targets
   - Visual feedback on hover/focus (`:hover`, `:focus`)
   - Distinct colors for increment, decrement, reset

3. **Text Styling:**
   - Large, bold font for the count
   - Alignment and spacing around the number

4. **Responsive Design:**
   - Adapt button layout on smaller screens (`flex-wrap`, media queries)

5. **Warning Styling (Bonus):**
   - Red text or border for out-of-bounds count
   - Conditional class toggling based on state

6. **Keyboard Focus Indicators:**
   - Outlined or styled `:focus` states for accessibility

7. **Transitions (Bonus Polish):**
   - Smooth count changes or button press animations (`transition: all 0.2s ease-in-out`)