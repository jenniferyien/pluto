# Sidekiq

##### LEARNING OBJECTIVES
- SWBAT Discuss concurrency
- SWBAT Crop Uploaded Images
- SWBAT Use Sidekiq to create Workers
- SWBAT Queue Jobs using Sidekiq

### PART 1: Concurrency [I]

In computer science, concurrency is a property of systems in which several
computations are executing simultaneously, and potentially interacting
with each other.

### PART 2: Photo App [W]

Build an application that does a basic File upload.

### PART 3: ImageMagick [W]

Add ImageMagick (using MiniMagick) to the application

### PART 4: Threads [I]
Discuss Threads

- A thread runs in parallel with the rest of your program.
- Threads can be difficult to manage (introducing race conditions, etc)
- Threads are managed by the OS, like any other process
- Threads take advantage of multiple cores

*GPU*
A GPU is a special kind of CPU that can run a small program (a shader, for example) with massive-parallelization.
Because of this, GPUs are useful for generating Bitcoin.
Concurrent programming can be very difficult to reason about.

### PART 5: Why Concurrency? [I]

Tools for the Job:
- Thread.new - native threading in Ruby
- Celluload - An implementation of *The Actor Model*

### PART 6: Setup Sidekiq [W]
- Introduce Sidekiq [I]
- Students read documentation [W]
- Install Redis [W]
- Discuss The Actor Pattern [I]
- Create a `PhotoWorker` [W]
