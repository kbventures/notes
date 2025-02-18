# VimTutor Cheat Sheet

This cheat sheet summarizes the content of the `vimtutor`, divided into 7 lessons.

---

## Lesson 1: Basics

1. **Cursor Movement:**
   - `h` (left) | `j` (down) | `k` (up) | `l` (right)
   
2. **Starting and Exiting Vim:**
   - Start: `vim FILENAME <ENTER>`
   - Exit without saving: `<ESC> :q! <ENTER>`
   - Exit and save: `<ESC> :wq <ENTER>`
   
3. **Deleting Text:**
   - Delete character: `x`
   
4. **Inserting and Appending Text:**
   - Insert before cursor: `i` → type text → `<ESC>`
   - Append after the line: `A` → type text → `<ESC>`

---

## Lesson 2: Deleting and Repeating

1. **Deleting Text:**
   - Delete to the start of the word: `dw`
   - Delete to the end of the word: `de`
   - Delete to the end of the line: `d$`
   - Delete entire line: `dd`
   
2. **Repeating Motions:**
   - Repeat motion (e.g., `2w` to move 2 words forward)
   
3. **Undo and Redo:**
   - Undo last change: `u`
   - Undo entire line change: `U`
   - Redo: `Ctrl-R`
   
4. **Moving to the Start of the Line:**
   - Go to start: `0`

---

## Lesson 3: Changing and Replacing Text

1. **Putting Back Deleted Text:**
   - Paste after cursor: `p`
   
2. **Replacing Text:**
   - Replace character under cursor: `r` → (character)
   
3. **Changing Text:**
   - Change to the end of the word: `ce`
   - Change to the end of the line: `c$`

4. **Change Command Format:**
   - Format: `c [number] [motion]`

---

## Lesson 4: File Navigation and Searching

1. **Moving Around:**
   - Display file status: `Ctrl-G`
   - Move to the end: `G`
   - Move to a specific line number: `number G`
   - Move to the first line: `gg`
   
2. **Searching:**
   - Forward search: `/phrase`
   - Backward search: `?phrase`
   - Next occurrence: `n`
   - Previous occurrence: `N`
   
3. **Matching Pairs:**
   - Move to matching bracket/parenthesis: `%`

4. **Substituting Text:**
   - Substitute first occurrence in a line: `:s/old/new`
   - Substitute all occurrences in a line: `:s/old/new/g`
   - Substitute in specific lines: `:#,#s/old/new/g`
   - Substitute globally in the file: `:%s/old/new/g`
   - Ask for confirmation on substitution: `:%s/old/new/gc`

---

## Lesson 5: External Commands and File Operations

1. **Executing External Commands:**
   - Execute a command: `:!command`
     - Example (Windows): `:!dir`
     - Example (Unix): `:!ls`
   
2. **Saving Files:**
   - Save the file with a new name: `:w FILENAME`
   - Save visually selected lines to a file: `v [motion] :w FILENAME`
   
3. **Reading Files:**
   - Read a file into the current file: `:r FILENAME`
   - Read output of a command: `:r !command`

---

## Lesson 6: More Text Operations

1. **Opening Lines:**
   - Open a line below the cursor: `o`
   - Open a line above the cursor: `O`
   
2. **Inserting Text:**
   - Insert text after the cursor: `a`
   - Append text at the end of the line: `A`
   
3. **Text Operations:**
   - Move to the end of a word: `e`
   - Yank (copy) text: `y`
   - Paste text: `p`
   
4. **Replace Mode:**
   - Enter Replace mode: `R`
   - Press `<ESC>` to exit Replace mode.

5. **Setting Options:**
   - Set options with `:set option`
     - Example: `:set ic` (ignore case)
     - Example: `:set is` (incremental search)
     - Example: `:set hls` (highlight search matches)
   
6. **Turning Off Options:**
   - Turn off option: `:set noic`

---

## Lesson 7: Help and More

1. **Accessing Help:**
   - Open help: `:help` or `<F1>` or `<HELP>`
   - Get help on a command: `:help cmd`
   
2. **Window Navigation:**
   - Jump to another window: `Ctrl-W Ctrl-W`
   
3. **Closing Help:**
   - Close help window: `:q`
   
4. **Vim Configuration:**
   - Create a `.vimrc` startup script to store your settings.
   
5. **Command Completion:**
   - Press `Ctrl-D` to view possible completions.
   - Press `<TAB>` to auto-complete a command.

---

