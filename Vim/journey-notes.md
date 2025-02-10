## Basic Vim

Basics: Motions move the cursor in normal mode (e.g., h for left, l for right, j for down, k for up).
Words: Use w (next word), b (previous word), e (end of word).
Lines: 0 (start of line), ^ (first non-blank), $ (end of line).
Paragraphs: { (up), } (down).
Screen: H (top), M (middle), L (bottom).
Search: /pattern (forward), ?pattern (backward), n (next match), N (previous match).
Text Objects: aw (a word), iw (inner word), ap (a paragraph), ip (inner paragraph).
Combining: Use motions with operators (d, y, c), e.g., dw (delete word), ci" (change inside quotes).

## How to select everything in a screen with vim

gg moves to the start of the file,
V starts line-wise visual mode,
G selects to the end of the file.

## How to start a new below
o

## How to start anew line above

O

## Vim Copy & Paste Basics:

Copy a line: yy
Copy multiple lines: 5yy (copies 5 lines)
Copy specific area: Press v (visual mode), select text, then press y

Paste:

Paste below: p
Paste above: P
Replace selection: Select with v, press p to replace## How to copy and paste specific area

## Copy between screen using system clipboard
Go to the top of the file: gg
Enter visual mode: V
Select the entire file: G
Yank to system clipboard: "+y (this copies everything to the system clipboard)
Switch to the other screen/window/tab in VS Code.
Paste from the system clipboard: "+p

## In Vim, to move to the beginning of a word:

Move to the beginning of the current or next word: w
Move to the beginning of the previous word: 

## Copy all test with vim and paste in outside program

Use gg to go to the top of the file.
Press V to enter visual mode.
Use G to select everything from the current position to the bottom of the file.
Press "+y to yank the selected text to the system clipboard.
Switch to Your Terminal or Any Other Application:

Move your cursor to where you want to paste (in the terminal, for example).
Press Ctrl + Shift + V to paste the content from the system clipboard into the terminal.