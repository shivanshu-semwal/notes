# Cohesion

More cohesion better.

## Co-incidental/accidental cohesion

Coincidental cohesion is when parts of a module are grouped arbitrarily; the only relationship between the parts is that they have been grouped together (e.g., a “Utilities” class).

## Logical cohesion

Logical cohesion is when parts of a module are grouped because they are logically categorized to do the same thing even though they are different by nature (e.g., grouping all mouse and keyboard input handling routines or bundling all models, views, and controllers in separate folders in an MVC pattern).

## Temporal cohesion

Temporal cohesion is when parts of a module are grouped by when they are processed - the parts are processed at a particular time in program execution (e.g., a function which is called after catching an exception which closes open files, creates an error log, and notifies the user).

## Procedural cohesion

Procedural cohesion is when parts of a module are grouped because they always follow a certain sequence of execution (e.g., a function which checks file permissions and then opens the file).

## Communication cohesion

Communicational cohesion is when parts of a module are grouped because they operate on the same data (e.g., a module which operates on the same record of information).

## Sequential cohesion

Sequential cohesion is when parts of a module are grouped because the output from one part is the input to another part like an assembly line (e.g., a function which reads data from a file and processes the data).

## Functional cohesion

Functional cohesion is when parts of a module are grouped because they all contribute to a single well-defined task of the module (e.g., Lexical analysis of an XML string).