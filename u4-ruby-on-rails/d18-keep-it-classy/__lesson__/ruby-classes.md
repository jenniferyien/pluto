# Ruby Classes

##### LEARNING OBJECTIVES
- SW Review Ruby Syntax
- SWBAT Write Ruby `class` syntax
- SWBAT Utilize encapsulation
- SWBAT Utilize a namespace

### STEP 1: Ruby Review
- Strings & IO
  - `gets`, `puts`, `chomp`
  - `[]`, `to_f`, `to_i`
  - `upcase`, `downcase`
- Symbols
  - Identifier vs Value
  - `to_sym` as a dangerous method
- Integers (Fixnum)
  - `to_s` to convert bases
  - `even?` and `odd?`
- Hash
  - `[]` vs `.` notation
  - Compare to JavaScript Objects
  - Discuss Hash vs Array (where the name "Hash" comes from)
- Discuss Functions & Methods
  - `parseInt` as a function
  - `to_i` as a method

### STEP 2: Classes
- Getting the type of something by calling `.class`
- What did that return?  A `Class` object.
- What type of object is a class object?
- Diagram the Ruby class hierarchy

### STEP 4: Initialize / Instance Variables
- Setting defaults
- Attempt to get one of the attributes
  - Woops! Ruby protects it's attributes, you must expose them using a getter
- Attempt to set one of the attributes
  - Woops! Ruby doesn't let you change attributes without exposing a setter.
