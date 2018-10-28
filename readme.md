# Robot Wars Code Challenge
![Robot Wars](https://media.giphy.com/media/l3mZkL7uWCWoVvURO/giphy.webp)

## Usage
`node main.js <filename>`

`npm test` to run unit tests

Note: Input file should be stored as a `.txt` with each instruction on a new line.

Outputs are logged to the console and written to folder `output`.

## Assumptions

A robot can't go below (0,0) or out of the arena bounds (beyond the top-right coordinates). Trying to do so will result in the robot being stuck where it is.

Numeric values in the text file can have multiple digits. The values are separated by spaces. 

