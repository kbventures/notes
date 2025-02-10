# Lesson 1
- **h**, **j**, **k**, **l**: Cursor movement (either the arrow or hjkl keys)
- **vim FILENAME <ENTER>**: To start Vim from the shell
- **<ESC> :q! <ENTER>**: To trash all changes
- **<ESC> :wq <ENTER>**: To save the changes
- **x**: To delete the character at the cursor
- **i**: INSERT MODE before the cursor
- **A**: INSERT MODE after the line

# Lesson 2
- **dw**: Delete from the cursor to the next word
- **d$**: Delete from the cursor to the end of the line
- **dd**: Delete the whole line
- **2w**: Repeat the motion with a number
- **operator [number] motion**: 
    - **operator** is what to do (e.g., d)
    - **[optional] repeat motion** (e.g., 2)
    - **motion** (e.g., 2w, move to the text to operate)
- **0**: Move to the start of the line
- **u**: Undo previous action
- **U**: Undo all the actions on a line
- **Ctrl-R**: Undo the undo's

# Lesson 3
- **p**: Put the deleted text AFTER the cursor
- **r [char]**: Replace the character under the cursor
- **c**: Change from the cursor where the motion takes you. Eg. `c$`, `ce`, `cw`
- **c [number] motion**: Format for changing text

# Lesson 4
- **CTRL-G**: Show your location and the file status
- **G**: Move to the end of the file
- **number G**: Move to that line number
- **gg**: Go to the first line
- **/foo <ENTER>**: Search for "foo" forward
- **?foo <ENTER>**: Search for "foo" backward
- **n**: Find the next occurrence
- **N**: Find the previous occurrence
- **CTRL-O**: Takes you to the previous position
- **CTRL-I**: Takes you to the newer position
- **%**: Type it on `( )`, `[ ]`, `{ }` to go to its match
- **:s/old/new**: Substitute first "old" for "new"
- **:s/old/new/g**: Substitute all "old" for "new" in the line
- **:#,#s/old/new/g**: Substitute all matches between lines #
- **:%s/old/new/g**: Substitute all matches in the file
- **:%s/old/new/gc**: To check each time, add "c"

# Lesson 5
- **:!command**: Execute an external command
    - Eg. Windows: `!dir` or in Unix: `!ls`
- **:w FILENAME**: Write the current Vim file to disk with the name FILENAME
- **v motion :w FILENAME**: Save visually selected lines in the file FILENAME
- **:r FILENAME**: Retrieve disk file FILENAME and put it below the cursor position
- **:r !command**: Reads the output of a command and puts it below the cursor (Eg. Windows: `!dir`, Unix: `!ls`)

# Lesson 6
- **o**: Insert a line BELOW the cursor and start INSERT MODE
- **O**: Open a line ABOVE the cursor
- **a**: Insert text after the cursor
- **A**: Insert text after the end of the line
- **e**: Move to the end of a word
- **y**: Copy the text
- **p**: Paste the copied text
- **R**: Enter REPLACE MODE until `<ESC>` is pressed
- **:set foo**: Set the option "foo"
    - **ic**: Ignore case (for search)
    - **is**: In search
    - **hls**: Highlight search matches
    - Example: `:set ic` to ignore upper/lower case in searches
    - **:set nofoo**: Turn off an option (e.g., `:set noic`)

# Lesson 7
- **<HELP KEY>**: Access Vim’s help system
- **<F1>**: Open help
- **:help <ENTER>**: Access Vim help
- **:help cmd**: Find help on "cmd"
- **CTRL-W CTRL-W**: Jump to another window
- **:q**: Close help window
- **~/.vimrc**: A startup script to keep your preferred settings
- **:cmd CTRL-d**: Show possible completions for a command
- **:cmd <TAB>**: Autocomplete a command
