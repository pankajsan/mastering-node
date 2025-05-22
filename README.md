# mastering-node
Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!

# kill running process
    kill -9 $(lsof -t -i:3000)

# core modules
    - http
    - https
    - fs
    - path
    - os
    - url
    - stream
    - crypto
    - zlib

# The Event Loop
    - Timers
        - setTimeout
        - setInterval
    - Pending Callbacks
        - Execute I/O related callbacks that were deffered
    - Poll -> checks if any timers are pending
        - Retrieve new I/O events, execute their callbacks -> Checks if any Pending callbacks are their
    - Check
        - Execute setImmediate() callbacks
    - Close Callbacks
        - Execute all 'close' event callbacks
    - Process.exit
